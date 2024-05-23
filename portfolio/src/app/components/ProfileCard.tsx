// components/ProfileCard.js
import Image from "next/image";
import { Mail, Linkedin, Github } from "lucide-react";

export default function ProfileCard() {
  return (
    <div className="w-full max-w-4xl p-6 md:p-8 bg-white bg-opacity-15 rounded-lg shadow-md mx-auto mt-12 mb-20 flex flex-col items-center md:flex-row md:items-start md:space-x-6">
      <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 mb-4 md:mb-0">
        <Image
          src="/profile.jpg"
          alt="Profile Picture"
          layout="fill"
          objectFit="cover"
          className="rounded-full"
        />
      </div>
      <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left">
        <h1 className="text-4xl font-bold text-gray-100">Hola! soy Jose Daniel Az Rios</h1>
        <h2 className="text-2xl text-gray-400 mt-2">Estudiante de Ingeniería en Sistemas y Desarrollador</h2>
        <p className="mt-4 text-gray-300">
          Soy estudiante de Ingeniería en Informática y Sistemas, actualmente en el último año. Trabajo en Dooply como ingeniero en sistemas y desarrollador backend.
        </p>
        <div className="mt-4 flex space-x-6">
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
