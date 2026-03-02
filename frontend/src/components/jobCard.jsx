import { Link } from "react-router-dom";

export default function JobCard({ job }) {
  return (
    <div className="border p-4 rounded shadow hover:shadow-md">
      <h2 className="text-xl font-semibold">{job.title}</h2>
      <p className="text-gray-600">{job.company}</p>
      <p className="text-sm">{job.location} • {job.category}</p>

      <Link
        to={`/jobs/${job.id}`}
        className="text-blue-600 inline-block mt-2"
      >
        View Details →
      </Link>
    </div>
  );
}
