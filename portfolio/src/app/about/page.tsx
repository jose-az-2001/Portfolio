import Image from "next/image";
import CoverParticles from "../components/CoverParticles";

export default function About() {
  return (
    <main>
      <div className="flex min-h-[100vh] h-full bg-no-repeat bg-gradient-cover">
        <CoverParticles/>
        <p>About</p>
      </div>
    </main>
  );
}
