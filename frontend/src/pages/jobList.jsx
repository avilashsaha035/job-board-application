import { useEffect, useState } from "react";
import api from "../api/axios";
import JobCard from "../components/jobCard";
import Swal from "sweetalert2";

export default function JobList() {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    api.get("/jobs").then(res => setJobs(res.data));
  }, []);

  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(search.toLowerCase())
  );

  // Show SweetAlert if no jobs found
  useEffect(() => {
    if (search && filteredJobs.length === 0) {
      Swal.fire({
        icon: 'info',
        title: 'No Jobs Found!',
        text: 'No jobs match your search criteria.',
        confirmButtonText: 'OK',
      });
    }
  }, [search, filteredJobs]);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Job Listings</h1>

      <input
        className="border p-2 w-full mb-6"
        placeholder="Search jobs..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      <div className="grid md:grid-cols-2 gap-4">
        {filteredJobs.map(job => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
}
