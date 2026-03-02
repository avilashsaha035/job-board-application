import { useEffect, useState } from "react";
import api from "../api/axios";
import Swal from "sweetalert2";

const Admin = () => {
  const [jobs, setJobs] = useState([]);
  const [jobForm, setJobForm] = useState({
    title: "",
    company: "",
    location: "",
    category: "",
    description: "",
  });

  const fetchJobs = async () => {
    const res = await api.get("/jobs");
    setJobs(res.data);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const createJob = async () => {
    try {
      await api.post("/create/jobs", jobForm);

      // Show success SweetAlert
      Swal.fire({
        icon: "success",
        title: "Job Created",
        text: "The job has been created successfully!",
        confirmButtonText: "OK",
      });

      // Clear the form after successful creation
      setJobForm({
        title: "",
        company: "",
        location: "",
        category: "",
        description: "",
      });

      fetchJobs(); // refresh job list
    } catch (err) {
      // Handle validation errors from backend
      if (err.response && err.response.data && err.response.data.errors) {
        const messages = Object.values(err.response.data.errors)
          .flat()
          .join("\n");

        Swal.fire({
          icon: "error",
          title: "Validation Error",
          text: messages,
          confirmButtonText: "OK",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Something went wrong. Try again.",
          confirmButtonText: "OK",
        });
      }
    }
  };

  const deleteJob = async (id) => {
    await api.delete(`/jobs/${id}`);
    fetchJobs();
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">

      {/* LOGOUT BUTTON */}
      <button
        className="bg-red-600 text-white px-4 py-2 mb-4 float-right"
        onClick={() => {
          localStorage.removeItem("token");
          window.location.href = "/admin/login";
        }}
      >
        Logout
      </button>

      <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>

      {/* ADD JOB FORM */}
      <div className="grid grid-cols-2 gap-2 mb-6">
        {Object.keys(jobForm).map((key) => (
          <input
            key={key}
            className="border p-2"
            placeholder={key}
            value={jobForm[key]} // controlled input
            onChange={(e) =>
              setJobForm({ ...jobForm, [key]: e.target.value })
            }
          />
        ))}
        <button
          onClick={createJob}
          className="bg-black text-white px-4 py-2 col-span-2"
        >
          Add Job
        </button>
      </div>

      {/* JOB LIST */}
      {jobs.map((job) => (
        <div
          key={job.id}
          className="border p-3 mb-2 flex justify-between"
        >
          <span>{job.title}</span>
          <button
            onClick={() => deleteJob(job.id)}
            className="text-red-600"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Admin;
