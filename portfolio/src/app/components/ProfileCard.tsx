// components/ProfileCard.js
import Image from "next/image";
import { Mail, Linkedin, Github } from "lucide-react";

export default function ProfileCard() {
  return (
    <div className="w-full flex flex-col items-center md:flex-row md:items-start p-6 bg-white bg-opacity-15 rounded-lg shadow-md max-w-4xl mx-auto my-8">
      <div className="flex-shrink-0 md:mr-6 p-4 relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48">
        <Image
          src="/profile.jpg"
          alt="Profile Picture"
          layout="fill"
          objectFit="cover"
          className="rounded-full"
        />
      </div>
      <div className="mt-4 md:mt-0 flex flex-col justify-center">
        <h1 className="text-4xl font-bold text-gray-100">Hola! soy Jose Daniel Az Rios</h1>
        <h2 className="text-2xl text-gray-400 mt-2">Estudiante de Ingeniería en Sistemas y Desarrollador</h2>
        <p className="mt-4 text-center md:text-left text-gray-300">
          Soy estudiante de Ingeniería en Informática y Sistemas, actualmente en el último año. Trabajo en Dooply como ingeniero en sistemas y desarrollador backend.
        </p>
        <div className="mt-4 flex justify-center md:justify-start space-x-6">
          <a href="mailto:josedanielxela@gmail.com" className="text-secondary">
            <Mail size={24} />
          </a>
          <a href="https://www.linkedin.com/in/" className="text-secondary">
            <Linkedin size={24} />
          </a>
          <a href="https://github.com/jose-az-2001" className="text-secondary">
            <Github size={24} />
          </a>
        </div>
      </div>
    </div>
  );
}
