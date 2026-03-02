import { BrowserRouter, Routes, Route } from "react-router-dom";
import JobList from "../pages/jobList";
import JobDetails from "../pages/jobDetails";
import Admin from "../pages/admin";
import AdminLogin from "../pages/adminLogin";
import AdminRoute from "./adminRoute";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<JobList />} />
        <Route path="/jobs/:id" element={<JobDetails />} />
        <Route path="/admin/login" element={<AdminLogin />} />

        <Route
          path="/admin"
          element={
            <AdminRoute>
              <Admin />
            </AdminRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
