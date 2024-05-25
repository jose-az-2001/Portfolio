// components/ExperienceSection.tsx
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Experience } from "@/types/experiences";

interface ExperienceSectionProps {
  experiences: Experience[];
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experiences }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div
        className="w-full p-6 bg-white bg-opacity-15 rounded-lg shadow-md mb-4 cursor-pointer flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-3xl font-semibold text-gray-100 mb-2">Experiencia Profesional</h2>
        {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
      </div>
      {isOpen && (
        <div className="mt-4">
          {experiences.map((experience, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-xl font-semibold text-gray-100">{experience.title}</h3>
              <p className="text-gray-300">{experience.date}</p>
              <p className="mt-2 text-gray-300">{experience.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExperienceSection;
