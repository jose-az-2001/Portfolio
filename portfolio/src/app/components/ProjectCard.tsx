// components/ProjectCard.tsx
import Link from "next/link";
import { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="w-full max-w-4xl p-6 bg-white bg-opacity-15 rounded-lg shadow-md mx-auto my-4">
      <h2 className="text-3xl font-semibold text-gray-100">{project.title}</h2>
      <p className="text-gray-300 mt-2">{project.description}</p>
      <Link href={`/my_projects/${project.id}`}>
        <div className="text-secondary mt-4 cursor-pointer inline-block">Ver más</div>
      </Link>
    </div>
  );
}
