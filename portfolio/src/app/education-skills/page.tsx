// pages/EducationSkills.tsx
import { achievements, education, experiences, skills } from "../../../data";
import CoverParticles from "../components/CoverParticles";
import NavBar from "../components/NavBar";
import ProfessionalExperience from "../components/ProfesionalExperience";

export default function EducationSkills() {
  return (
    <div className="lex flex-col items-center justify-center min-h-screen w-full p-4 md:p-8 bg-gradient-cover">
      <CoverParticles />
      <NavBar />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4 flex items-center">Experience and Skills</h1>
        <ProfessionalExperience
          experiences={experiences}
          achievements={achievements}
          education={education}
          skills={skills}
        />
      </div>
    </div>
  );
}
