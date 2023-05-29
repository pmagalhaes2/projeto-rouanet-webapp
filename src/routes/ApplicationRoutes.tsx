import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { Projects } from "../pages/projects";
import { ProjectsCreate } from "../pages/projects/create";
import { NavBar } from "../components/NavBar";

export const ApplicationRoutes = () => {
  return (
    <BrowserRouter>
        <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="projects/create" element={<ProjectsCreate />} />
      </Routes>
    </BrowserRouter>
  );
};
