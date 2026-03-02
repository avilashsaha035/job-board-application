import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api/axios";
import Swal from "sweetalert2";


const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    resume_link: "",
    cover_note: "",
  });

  useEffect(() => {
    api.get(`/jobs/${id}`).then((res) => setJob(res.data));
  }, [id]);

const apply = async () => {
  try {
    await api.post("/applications", {
      job_id: id,
      ...form,
    });

    Swal.fire({
      icon: "success",
      title: "Success!",
      text: "Application Submitted Successfully",
      confirmButtonText: "OK",
    });

    // Clear form
    setForm({
      name: "",
      email: "",
      resume_link: "",
      cover_note: "",
    });

  } catch (err) {
    // Check for validation errors from Laravel
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

  if (!job) return <p>Loading...</p>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold">{job.title}</h1>
        <p className="text-gray-600">
            {job.company} – {job.location}
        </p>

        <p className="mt-4">{job.description}</p>

        {/* APPLY FORM */}
        <div className="mt-8 border-t pt-6">
            <h2 className="text-xl font-semibold mb-4">Apply Now</h2>

            <input
                className="border p-2 w-full mb-2"
                placeholder="Name"
                value={form.name} // bind value to state
                onChange={(e) => setForm({ ...form, name: e.target.value })}
            />

            <input
                className="border p-2 w-full mb-2"
                placeholder="Email"
                value={form.email} // bind value to state
                onChange={(e) => setForm({ ...form, email: e.target.value })}
            />

            <input
                className="border p-2 w-full mb-2"
                placeholder="Resume Link"
                type="url"
                value={form.resume_link} // bind value to state
                onChange={(e) => setForm({ ...form, resume_link: e.target.value })}
            />

            <textarea
                className="border p-2 w-full mb-2"
                placeholder="Cover Note"
                value={form.cover_note} // bind value to state
                onChange={(e) => setForm({ ...form, cover_note: e.target.value })}
            />

            <button
                onClick={apply}
                className="bg-black text-white px-4 py-2"
            >
                Submit Application
            </button>
        </div>
    </div>
  );
};

export default JobDetails;
