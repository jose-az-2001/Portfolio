import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Twitter, Rss, Twitch, Youtube, Crop, Pencil, Computer, Book, Rocket, Speech } from "lucide-react";

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
        title: "Información General",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about",
    },
    {
        id: 3,
        title: "Proyectos Recientes",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/my_projects",
    },
    {
        id: 4,
        title: "Educación y Habilidades",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/education-skills",
    },
    {
        id: 5,
        title: "Blog",
        icon: <Pencil size={25} color="#fff" strokeWidth={1} />,
        link: "/blog",
    },
];

