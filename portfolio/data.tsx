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
        title: "POSify",
        description: "POSify es un sistema de punto de venta, este inicialmetne se tenia pensado para la gestion de una ferreteria, luego al darnos cuenta de la flexibilidad que podia llegar a tenerl, decidimos modificarlo para tener una potente herramienta de punto de venta con manejo de inventarios y manejo de compras y ventas para una empresa",
        role: "Mi rol en el proyecto fue ser uno de los desarrolladores de este sistema, al igual que planificar e l fluyo del proyecto y planficar la arquitectura junto con los demas involucrados",
        impact: "Este proyecto nunca llego a presentarse a mas clientes, sin embargo por la arquitectura del mismo se espera retomarlo y amplairlo para comercializarlo en el futruro",
        process: "No disponible",
        media: [
            { src: "/posify1.jpg", alt: "Vista del area de cotizaciones y ventas" },
            { src: "/posify2.jpg", alt: "Vista de las tiendas disponibles" },
        ],
    },
    {
        id: 2,
        title: "Sky-Kings",
        description: "Un videojuego plataformero pensado para un curso de la universidad, este videojeugo tiene la premisa de ser un videojuego de plataformas, donde dos personakes luchan por llegar a la meta, tambien se tiene el acceso a golpes de los eprsonaejes con el bobjetivo de eprjudicar al contrincante, el primero en llegar a la menta seria el ganador de la ronda",
        role: "Mi Rol en este proyecto fue ser uno de los desarroladores y dise;adpres del mismo juego",
        impact: "Este proyecto no tuvo el impacto esperado ya que por cuestiones de timepo, y el proyecto ser tan ambicioso, este no pudo llevarse a cabo por completo, aun asi, fue decente en la presetnacion",
        process: "se desarrollo con el objetivo de tener en cuenta los patrones de diseno al plantear una arquitectura adecuada para un videojuego, se planificaron las tareas, y cada uno de lso integrantes se enfoco en ciertas tareas, se utilizo python y pygame para poder manejar esto, pro medio de las fisicas y otras funciones ya preparadas comom movimientos y musica",
        media: [
            { src: "/sk1.jpg", alt: "Proceso de desarrollo de funcionamieto" },
            { src: "/sk2.png", alt: "Descripción de la imagen 2" },
        ],
    },
    {
        id: 3,
        title: "Bluelake by Dopoply",
        description: "bluelake es un sistema de administracion empresarial, basadoe n rutas, donde las empresas tienenla capacidad de administrar todo el entorno de su empresa, desde el manejo de presonal o el manejo de sucursales por medio de inventarios, manejo de producto y finanzas de la empresa asi como ala facturacion",
        role: "Mi rol en el proyecto ha sido principalemnte el desarrollo backend para el funcionamiento de este, sin embargo tambien me he involucrado en la parte frontend y en planificacion de la arquitectura del sistema",
        impact: "este sistema ha tendio gran ipacto en el occidente del pais, siendo este ofrecido a varias empresas, actulemte cuenta con 15 empresas a nivel Guatemala que utilizan este sistema para la administracion de sus empresas",
        process: "Por politicas de empresa, esta informacion es privada",
        media: [
            { src: "/bl1.jpeg", alt: "Dashboard" },
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