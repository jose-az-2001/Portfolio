import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Twitter, Rss, Twitch, Youtube, Crop, Pencil, Computer, Book, Rocket, Speech, BookA, Code2Icon } from "lucide-react";

export const socialNetworks = [
    {
        id: 1,
        logo: <Youtube size={30} strokeWidth={1} />,
        src: "#!",
    },
    {
        id: 2,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "#!",
    },
    {
        id: 3,
        logo: <Twitter size={30} strokeWidth={1} />,
        src: "#!",
    },
    {
        id: 4,
        logo: <Rss size={30} strokeWidth={1} />,
        src: "#!",
    },
    {
        id: 5,
        logo: <Twitch size={30} strokeWidth={1} />,
        src: "#!",
    },
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "Proyectos Recientes",
        icon: <Code2Icon size={25} color="#fff" strokeWidth={1} />,
        link: "/my_projects",
    },
    {
        id: 3,
        title: "Educación y Habilidades",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/education-skills",
    },
    {
        id: 4,
        title: "Blog",
        icon: <BookA size={25} color="#fff" strokeWidth={1} />,
        link: "/blog",
    },
];

export const projects = [
    {
        id: 1,
        title: "Proyecto 1",
        description: "Descripción del proyecto 1...",
        role: "Mi rol en el proyecto 1...",
        impact: "Impacto o resultado del proyecto 1...",
        process: "Proceso de creación del proyecto 1...",
        media: [
            { src: "/profile.jpg", alt: "Descripción de la imagen 1" },
            { src: "/profile.jpg", alt: "Descripción de la imagen 2" },
        ],
    },
    {
        id: 2,
        title: "Proyecto 2",
        description: "Descripción del proyecto 2...",
        role: "Mi rol en el proyecto 2...",
        impact: "Impacto o resultado del proyecto 2...",
        process: "Proceso de creación del proyecto 2...",
        media: [
            { src: "/profile.jpg", alt: "Descripción de la imagen 1" },
            { src: "/profile.jpg", alt: "Descripción de la imagen 2" },
        ],
    },
    {
        id: 3,
        title: "Proyecto 2",
        description: "Descripción del proyecto 2...",
        role: "Mi rol en el proyecto 2...",
        impact: "Impacto o resultado del proyecto 2...",
        process: "Proceso de creación del proyecto 2...",
        media: [
            { src: "/profile.jpg", alt: "Descripción de la imagen 1" },
            { src: "/profile.jpg", alt: "Descripción de la imagen 2" },
        ],
    },
    {
        id: 4,
        title: "Proyecto 2",
        description: "Descripción del proyecto 2...",
        role: "Mi rol en el proyecto 2...",
        impact: "Impacto o resultado del proyecto 2...",
        process: "Proceso de creación del proyecto 2...",
        media: [
            { src: "/profile.jpg", alt: "Descripción de la imagen 1" },
            { src: "/profile.jpg", alt: "Descripción de la imagen 2" },
        ],
    },
    {
        id: 5,
        title: "Proyecto 2",
        description: "Descripción del proyecto 2...",
        role: "Mi rol en el proyecto 2...",
        impact: "Impacto o resultado del proyecto 2...",
        process: "Proceso de creación del proyecto 2...",
        media: [
            { src: "/profile.jpg", alt: "Descripción de la imagen 1" },
            { src: "/profile.jpg", alt: "Descripción de la imagen 2" },
        ],
    },
    {
        id: 6,
        title: "Proyecto 2",
        description: "Descripción del proyecto 2...",
        role: "Mi rol en el proyecto 2...",
        impact: "Impacto o resultado del proyecto 2...",
        process: "Proceso de creación del proyecto 2...",
        media: [
            { src: "/profile.jpg", alt: "Descripción de la imagen 1" },
            { src: "/profile.jpg", alt: "Descripción de la imagen 2" },
        ],
    },
];

export const experiences = [
    {
        title: "Iglesia Evangélica Palabra en Acción",
        date: "2017 - Agost 2023",
        description: "Líder de grupo durante varios años, desempeñando roles de maestro y líder con jóvenes y adolescentes. Desarrollo de habilidades de liderazgo, comunicación efectiva y trabajo en equipo.",
    },
    {
        title: "Universidad Rafael Landívar",
        date: "2020 - presente",
        description: "Estudiante de Ingeniería en Informática y Sistemas de cuarto año. Adquisición de amplios conocimientos en programación, bases de datos, redes informáticas, desarrollo de software y ciencias exactas. Promedio general de carrera de más de 80 puntos, demostrando dedicación y compromiso con la excelencia.",
    },
    {
        title: "Dooply",
        date: "Septiembre - Noviembre 2023",
        description: "Pasante en la empresa por 2 meses y medio, trabajando varios temas correspondientes a la ingeniería de software y desarrollo como tal. Reuniones con clientes para proceso de contextualización de proyecto. Capacitación en temas Docker, Multi-Tenant Architecture, Encripción, Auth0, Gitflow, Agile y arquitectura orientada al dominio; Integración al equipo de nuevos colaboradores; Aprendizaje de tecnologías como django y GraphQl/graphene.",
    },
    {
        title: "XIV Simposio de Ingeniería",
        date: "28 de septiembre 2023",
        description: "Participación en XIV Simposio de ingeniería organizado por la Universidad Rafael Landívar Campus Quetzaltenango, en el cual se abordaron temas relacionados a la ingeniera se software y sus ramificaciones, en esta se abordaron los temas Storytelling & UX/UI, Code your way to succes: how to get started with android app development, y la conferencia DevOps, un enfoque moderno para la ingeniería de software.",
    },
    {
        title: "GDG Xela",
        date: "septiembre 2023 - presente",
        description: "Integrante del grupo de desarrolladores de Google con sede en Quetzaltenango, donde se imparten todo tipo de temas relacionados a la tecnología y a la ingeniería de software.",
    },
];

export const achievements = [
    {
        title: "Olimpiadas Nacionales de la Ciencia",
        date: "2015 - 2017",
        description: "Participación en las Olimpiadas Nacionales de la Ciencia de la Universidad San Carlos de Guatemala durante las ediciones 28, 29 y 30, destacándome en el área de Matemáticas. en representación del Colegio IEA. Demostración de habilidades matemáticas y capacidad para resolución de problemas teóricos y prácticos desafiantes en competencia de alto nivel, impulsando el desarrollo de habilidades en la resolución de problemas y el pensamiento lógico.",
    },
    {
        title: "Tercer lugar programación",
        date: "2019",
        description: "Obtención del tercer lugar en el evento 'TEAM' de la Universidad Mesoamericana en el área de Programación por equipos. Demostración de habilidades en programación, resolución de problemas y pensamiento lógico.",
    },
    {
        title: "Bootcamp",
        date: "Junio 2023",
        description: "Participación en un bootcamp que fortaleció mis habilidades y me expuso a nuevas tecnologías. Experiencia de trabajo en proyectos de la empresa en equipo utilizando metodologías ágiles y lenguajes de programación, incluyendo las habilidades 'TALL Stack'.",
    },
    {
        title: "Competencia ICPC",
        date: "Septiembre 2023",
        description: "Representante en primera ronda de la Competencia Internacional de Programación Colegiada ICPC de la Universidad Rafael Landívar. Tercer lugar a nivel Guatemala. Demostración de habilidades en resolución de problemas y programación avanzada en modalidad de equipos.",
    },
];

// data.ts
export const education = [
    {
      institution: "Universidad Rafael Landívar CQ",
      degree: "Ingeniería en Informática y Sistemas",
      startDate: "2020",
      endDate: "presente",
    },
    {
      institution: "Instituto de Estudios Avanzados de Occidente 'IEA'",
      degree: "Bachillerato en Ciencias Exactas",
      startDate: "2018",
      endDate: "2019",
    },
    {
      institution: "Instituto de Estudios Avanzados de Occidente 'IEA'",
      degree: "Educación Primaria y Secundaria",
      startDate: "2009",
      endDate: "2017",
    },
    {
      institution: "Academia de música Tritono",
      degree: "Estudios de música y guitarra",
      startDate: "2015",
      endDate: "2016",
    },
  ];
  

export const skills = [
    { name: "Python"},
    { name: "Django"},
    { name: "Java"},
    { name: "C++"},
    { name: "MySQL"},
    { name: "MariaDB"},
    { name: "MongoDB"},
    { name: "Laravel"},
    { name: "React J" },
    { name: "HTML"},
    { name: "CSS"},
    { name: "JavaScript" },
    { name: "Graphql"},
    { name: "Office" },
    { name: "Linux"},
];