'use client';

// components/ProfessionalExperience.tsx
import React from "react";
import ExperienceSection from "./ExperienceSection";
import AchievementsSection from "./AchievementsSection";
import EducationSection from "./EducationSection";
import SkillsSection from "./SkillsSection";
import { Experience } from "@/types/experiences";
import { Achievement } from "@/types/achievements";
import { Education } from "@/types/education";
import { Skill } from "@/types/skills";

interface ProfessionalExperienceProps {
  experiences: Experience[];
  achievements: Achievement[];
  education: Education[];
  skills: Skill[];
}

const ProfessionalExperience: React.FC<ProfessionalExperienceProps> = ({
  experiences,
  achievements,
  education,
  skills,
}) => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <ExperienceSection experiences={experiences} />
      <AchievementsSection achievements={achievements} />
      <EducationSection education={education} />
      <SkillsSection skills={skills} />
    </div>
  );
};

export default ProfessionalExperience;
