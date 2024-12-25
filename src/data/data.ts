import project1 from "@/assets/img/project-1.PNG";
import project2 from "@/assets/img/project-2.PNG";
import { FacebookIcon, GithubIcon, LinkedinIcon } from "lucide-react";

type ProjectLinks = {
    github: string | null;
    live: string | null;
}

type FeaturedProject = {
    id: number;
    title: string;
    description: string;
    img: string;
    links: ProjectLinks;
    tech: string[];
}

type NoteworthyProject = {
    id: number;
    title: string;
    description: string;
    links: ProjectLinks;
    tech: string[];
}

type WorkExperience = {
    id: number;
    title: string;
    company: string;
    description: string;
}

interface DataSet {
    featuredProjects: FeaturedProject[];
    noteworthyProjects: NoteworthyProject[];
    workExperience: WorkExperience[];
    about: string[];
    socmed: any[];
}


const dataSet: DataSet = {
    featuredProjects: [
        {
            id: 1,
            title: "ANIFLIX",
            description: "A Streaming web application that allows users to search for and stream their favorite anime shows",
            img: project1, // Replace with the correct path or import
            links: {
                github: null,
                live: "https://app-aniflix.vercel.app/",
            },
            tech: ["react+vite", "framer-motion", "tailwind/shadcn", "express js", "aniwatch api"],
        },
        {
            id: 2,
            title: "AMS",
            description: "Apartment Management System is a cloud-based rental platform designed to let users browse available apartments or rooms, complete with detailed information.",
            img: project2,
            links: {
                github: "https://github.com/jayveedev-alt/ams",
                live: null,
            },
            tech: ["php", "css", "javascript", "bootstrap", "express js", "mysql"],
        },
    ],
    noteworthyProjects: [
        {
            id: 1,
            title: "ICT Infrastructure and Permit Application",
            description: "ICT Infrastructure and Permit Application is a cloud-based platform that allows users to request building permits and submit the necessary documentation.",
            links: {
                github: "https://github.com/jayveedev-alt/ipa",
                live: null,
            },
            tech: ["yii 1.1", "css", "bootstrap", "javascript", "jquery"],
        },
        {
            id: 2,
            title: "ANIFLIX",
            description: "A streaming platform for anime lovers, where users can easily search and stream their favorite anime shows.",
            links: {
                github: null,
                live: "https://app-aniflix.vercel.app/",
            },
            tech: ["react+vite", "framer-motion", "tailwind/shadcn", "express js", "aniwatch api"],
        },
        {
            id: 3,
            title: "POOLCAR",
            description: "A web-based platform that allows users to book and rent cars online, pick them up from designated locations, and lets admins track the real-time location of the cars using Google Maps integration.",
            links: {
                github: null,
                live: "http://nas.wesupportinc.com:19010/",
            },
            tech: ["react+vite", "tailwind/shadcn", "api"],
        },
        {
            id: 4,
            title: "Home School System",
            description: "A platform that allows students to study from home, complete quizzes and exams online, and track their progress, offering a flexible and convenient learning experience",
            links: {
                github: null,
                live: "https://oilhomeschool.org/",
            },
            tech: ["php", "css", "javascript", "mysql"],
        },
        {
            id: 5,
            title: "My Portfolio",
            description: "A showcase of my top projects, highlighting my skills in front-end and back-end development, with a focus on user experience and modern technologies",
            links: {
                github: null,
                live: "https://jayveedev.vercel.app/",
            },
            tech: ["react+vite", "tailwind/shadcn", "framer-motion", "typescript"],
        },
        {
            id: 6,
            title: "iLOVETOOLs",
            description: "A free, user-friendly tool for tasks like image-to-text conversion, PDF creation, text case changes, and more.",
            links: {
                github: null,
                live: "https://ilovetools-beta.vercel.app/",
            },
            tech: ["react+vite", "tailwind/shadcn", "tesseract.js", "files-ui"],
        },
    ],
    workExperience: [
        {
            id: 1,
            title: "Junior Programmer 2",
            company: "Tranzend Solutions and Trading Corp.",
            description: "I collaborated with project managers and development teams to define specifications, establish timelines, and deliver high-quality full-stack solutions, while handling system troubleshooting, maintenance, and database management.",
        },
        {
            id: 2,
            title: "Full-stack Developer",
            company: "Freelance",
            description: "Ensure that web applications are responsive, user-friendly, and meet the highest standards of accessibility and web standards, more over, collaborate with clients and stakeholders to understand their requirements and provide appropriate solutions that meet their needs.",
        },
    ],
    about: [
        "Hi, I'm Jayvee!",
        "I specialize in creating functional, user-friendly web applications by building efficient and reliable systems, prioritizing functionality over aesthetics. My strength lies in optimizing user experience while adapting layouts and interfaces from proven designs.",
        "With expertise in modern frontend technologies like ReactJS, TailwindCSS, and ShadCN, combined with backend frameworks like CodeIgniter, Yii 1.1 and ExpressJS, I deliver seamless and robust solutions that meet both user and technical goals."
    ],
    socmed: [
        {
            id: 1,
            icon:  FacebookIcon,
            href: "https://www.facebook.com/jayveedev.alt",
        },
        {
            id: 2,
            icon:  GithubIcon,
            href: "https://github.com/jayveedev-alt",
        },
        {
            id: 3,
            icon:  LinkedinIcon,
            href: "https://www.linkedin.com/in/zbenedictjhon97",
        },
    ]
};

export default dataSet;