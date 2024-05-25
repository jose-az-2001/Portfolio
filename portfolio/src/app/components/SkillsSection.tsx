// components/SkillsSection.tsx
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Skill } from "@/types/skills";

interface SkillsSectionProps {
  skills: Skill[];
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div
        className="w-full p-6 bg-white bg-opacity-15 rounded-lg shadow-md mb-4 cursor-pointer flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-3xl font-semibold text-gray-100 mb-2">Habilidades</h2>
        {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
      </div>
      {isOpen && (
        <div className="mt-4">
          {skills.map((skill, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-xl font-semibold text-gray-100">{skill.name}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SkillsSection;
