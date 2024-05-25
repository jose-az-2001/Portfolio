import CoverParticles from "./components/CoverParticles";
import NavBar from "./components/NavBar";
import ProfileCard from "./components/ProfileCard";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen w-full bg-gradient-cover relative pt-16 pb-16">
      <CoverParticles />
      <div className="flex flex-col items-center justify-center w-full p-4 md:p-8 relative z-10 mt-12">
        <ProfileCard />
      </div>
      <NavBar />
    </main>
  );
}