import { useState } from "react";
import api from "../api/axios";

export default function ApplyForm({ jobId }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    resume_link: "",
    cover_note: "",
  });

  const submit = async e => {
    e.preventDefault();
    await api.post("/applications", { ...form, job_id: jobId });
    alert("Application submitted successfully");
  };

  return (
    <form onSubmit={submit} className="mt-6 space-y-3">
      <input className="border p-2 w-full" placeholder="Name"
        onChange={e => setForm({ ...form, name: e.target.value })} />
      <input className="border p-2 w-full" placeholder="Email"
        onChange={e => setForm({ ...form, email: e.target.value })} />
      <input className="border p-2 w-full" placeholder="Resume Link"
        onChange={e => setForm({ ...form, resume_link: e.target.value })} />
      <textarea className="border p-2 w-full" placeholder="Cover Note"
        onChange={e => setForm({ ...form, cover_note: e.target.value })} />
      <button className="bg-blue-600 text-white px-4 py-2">
        Apply Now
      </button>
    </form>
  );
}
