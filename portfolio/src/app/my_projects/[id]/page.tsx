// pages/projects/[id].js
import NavBar from "@/app/components/NavBar";
import { projects } from "../../../../data";
import { Project } from "@/types/project";
import CoverParticles from "@/app/components/CoverParticles";

type Props = {
    params: {
        id: string;
    };
};


export default function Page({ params }: Props) {
  const projectId = parseInt(params.id);

  const project = projects.find((project) => project.id === projectId);


  if (!project) {
    return <div>Proyecto no encontrado</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full p-4 md:p-8 bg-gradient-cover">
      <CoverParticles />
      <div className="max-w-4xl w-full bg-white bg-opacity-15 rounded-lg shadow-md p-6 md:p-8">
        <h1 className="text-4xl font-bold text-gray-100 mb-4">{project.title}</h1>
        <p className="text-gray-300 mb-6">{project.description}</p>
        <div className="mb-6">
          <h2 className="text-3xl font-semibold text-gray-100 mb-2">Mi Rol</h2>
          <p className="text-gray-300">{project.role}</p>
        </div>
        <div className="mb-6">
          <h2 className="text-3xl font-semibold text-gray-100 mb-2">Impacto o Resultado</h2>
          <p className="text-gray-300">{project.impact}</p>
        </div>
        <div className="mb-6">
          <h2 className="text-3xl font-semibold text-gray-100 mb-2">Proceso de Creación</h2>
          <p className="text-gray-300">{project.process}</p>
        </div>
        <div className="mb-6">
          <h2 className="text-3xl font-semibold text-gray-100 mb-2">Multimedia</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.media.map((item, index) => (
              <div key={index} className="w-full h-auto">
                <img src={item.src} alt={item.alt} className="rounded-lg" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <NavBar />
    </div>
  );
}
