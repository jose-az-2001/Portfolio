// pages/projects.js
import { projects } from "../../../data";
import CoverParticles from "../components/CoverParticles";
import NavBar from "../components/NavBar";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full p-4 md:p-8 bg-gradient-cover">
      <CoverParticles />
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl font-bold text-gray-100 mb-8">Proyectos Recientes</h1>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <NavBar />
    </div>
  );
}
