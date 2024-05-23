import Image from "next/image";
import CoverParticles from "../components/CoverParticles";

export default function EducationSkills() {
  return (
    <main>
      <div className="flex min-h-[100vh] h-full bg-no-repeat bg-gradient-cover">
        <CoverParticles/>
        <p>Educacion y habilidades</p>
      </div>
    </main>
  );
}
