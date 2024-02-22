import { createBrowserRouter, createRoutesFromElements, Navigate, Route } from "react-router-dom";
import Login from "../components/Login";
import Dashboard from "../components/Dashboard";

export default createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="login" element={<Login />} />
      <Route path="dashboard" element={<Dashboard />} />

      <Route path="iamokay" element={<h3>Hey There!!! The App is Healthy</h3>} />
    </Route>,
  ),
);