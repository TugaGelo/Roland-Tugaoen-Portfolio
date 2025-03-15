import { Amazon, PUP, Zynappse, McDonald } from "../assets/images";
import {
    article,
    contact,
    css,
    chat,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    nodejs,
    CMS,
    react,
    sass,
    champ,
    tailwindcss,
    portfolio,
    php,
    mysql,
    note,
    synapse
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: php,
        name: "PHP",
        type: "Backend",
    },
    {
        imageUrl: mysql,
        name: "MySQL",
        type: "Database",
    },
];

export const experiences = [
    {
        title: "Technical Support Specialist",
        company_name: "Amazon",
        icon: Amazon, 
        iconBg: "#05A0D1",
        date: "Aug 2024 - Feb 2025",
        points: [
            "Provided technical support to customers, troubleshooting and resolving issues related to Amazon's products and services.",
            "Assisted customers with account management, device setup, and software configuration.",
            "Documented and tracked customer issues using CRM tools, ensuring timely and accurate resolution.",
            "Collaborated with other technical support teams to escalate and resolve complex technical issues.",
        ],
    },
    {
        title: "Student Assistant",
        company_name: "Polytechnic University of the Philippines",
        icon: PUP,
        iconBg: "#FFDF00",
        date: "Aug 2022 - Feb 2024",
        points: [
            "Assisting in the preparation and delivery of technical workshops and training sessions for students.",
            "Creating and managing documentation for various software and technical processes.",
            "Supporting research projects by gathering and organizing data, as well as performing preliminary data analysis.",
            "Participating in code reviews and offering constructive feedback to peers and team members.",
        ],
    },
    {
        title: "Software Developer Intern",
        company_name: "Zynappse Corporation",
        icon: Zynappse,
        iconBg: "#d7818c",
        date: "Mar 2024 - Jun 2024",
        points: [
            "Developed and maintained web applications using React.js and other related technologies.",
            "Collaborated with cross-functional teams including designers, product managers, and other developers to create high-quality web products.",
            "Contributed significantly to the development and enhancement of the company's main website.",
            "Participated in code reviews and provided constructive feedback to other developers.",
        ],
    },
    {
        title: "Service Crew",
        company_name: "McDonald's",
        icon: McDonald, 
        iconBg: "#DA291C", 
        date: "Jan 2020 - Feb 2022",
        points: [
            "Provided excellent customer service by taking orders, preparing food, and ensuring a clean dining environment.",
            "Worked efficiently in a fast-paced environment, handling multiple tasks simultaneously.",
            "Collaborated with team members to meet daily operational goals and maintain high standards of service.",
            "Trained new employees on company policies, procedures, and customer service best practices.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/TugaGelo',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://linkedin.com/in/roland-angelo-tugaoen-453683314',
    }
];

export const projects = [
    {
        iconUrl: synapse,
        theme: 'btn-back-red',
        name: 'Company Website',
        description: 'Collaborated on the development of a corporate website for Zynappse Corporation, utilizing React and Next.js to create a responsive and modern user experience.',
        link: 'https://www.zynappse.com',
    },
    {
        iconUrl: CMS,
        theme: 'btn-back-pink',
        name: 'Concessionaire Monitoring ',
        description: 'Developed a web application primarily using PHP to monitor and manage concessionaire operations efficiently, including tracking sales, inventory, and performance metrics.',
        link: 'https://github.com/TugaGelo/COMS',
    },
    {
        iconUrl: note,
        theme: 'btn-back-yellow',
        name: 'Full Stack Notes App',
        description: 'Developed a full stack notes application using the MERN stack (MongoDB, Express, React, Node.js). This app allows users to create, edit, delete, and organize notes in real-time with a user-friendly interface.',
        link: 'https://github.com/TugaGelo/Full-Stack-Notes-App',
    },
    {
        iconUrl: chat,
        theme: 'btn-back-black',
        name: 'Real-Time Chat App',
        description: 'Developed a real-time chat application using Node.js, React, and NPM. This app allows users to communicate instantly, supporting both one-on-one and group conversations.',
        link: 'https://github.com/TugaGelo/Real-Time-Chat-App',
    },
    {
        iconUrl: article,
        theme: 'btn-back-blue',
        name: 'Bilgewater Article',
        description: 'Authored an insightful article about Bilgewater, a region in the game League of Legends, exploring its lore, characters, and unique features. Developed the web page using Next.js, React, Semantic UI, and Sass.',
        link: 'https://github.com/TugaGelo/Next-Article',
    },
    {
        iconUrl: champ,
        theme: 'btn-back-pink',
        name: 'Random Champion Generator',
        description: 'Developed a web application that generates random League of Legends champions, enhancing my skills in working with APIs. This project involved fetching data from external sources and dynamically displaying it to users.',
        link: 'https://github.com/TugaGelo/Random-Champion-Generator',
    },
    {
        iconUrl: portfolio,
        theme: 'btn-back-green',
        name: 'Next.js Portfolio',
        description: 'Developed a personal portfolio website using Next.js, React, Semantic UI, and Sass to showcase projects and skills, featuring a modern design and smooth user experience.',
        link: 'https://github.com/TugaGelo/Next-Portfolio',
    }
];

export default skills;