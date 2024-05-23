import Image from "next/image";
import CoverParticles from "../components/CoverParticles";

export default function MyProjects() {
  return (
    <main>
      <div className="flex min-h-[100vh] h-full bg-no-repeat bg-gradient-cover">
        <CoverParticles/>
        <p>mis proyectos</p>
      </div>
    </main>
  );
}
