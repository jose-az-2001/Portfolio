// pages/index.js
import CoverParticles from "./components/CoverParticles";
import NavBar from "./components/NavBar";
import ProfileCard from "./components/ProfileCard";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-cover">
      <div className="absolute inset-0">
        <CoverParticles />
      </div>
      <div className="relative z-10 w-full">
        <ProfileCard />
      </div>
      <NavBar/>
    </main>
  );
}
