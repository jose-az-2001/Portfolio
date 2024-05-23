// pages/index.js
import CoverParticles from "./components/CoverParticles";
import NavBar from "./components/NavBar";
import ProfileCard from "./components/ProfileCard";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen w-full bg-gradient-cover">
      <div className="relative inset-0 w-full flex flex-col items-center p-4 md:p-8">
        <CoverParticles />
        <ProfileCard />
        <NavBar />
      </div>
    </main>
  );
}
