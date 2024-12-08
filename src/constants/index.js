import { link } from "framer-motion/client";
import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    git,
    figma,
    java,
    flutter,
    firebase,
    threejs,
    liantori,
    teleperformance,
    github,
    //realestate,
    cvgen,
    /*pacman,
    route,*/
    wisdrive,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "experience",
      title: "Experience",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
    {
      id: "more",
      title: "More",
    },
  ];
  
  const services = [
    {
      title: "Web Development",
      icon: web,
    },
    {
      title: "UX/UI Designer",
      icon: mobile,
    },
    {
      title: "Java Developer",
      icon: backend,
    },
    {
      title: "Software Development Engineer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Firebase",
      icon: firebase,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "Git",
      icon: git,
    },
    {
      name: "Flutter",
      icon: flutter,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "Front-End Developer",
      company_name: "Liantori",
      icon: liantori,
      iconBg: "#E6DEDD",
      date: "May 2022 - Sep 2022",
      points: [
        "Designer and Front-End developer for a simple and responsive web page for a real estate startup.",
      ],
    },
    {
      title: "Bilingual Customer Service Representative",
      company_name: "Teleperformance",
      icon: teleperformance,
      iconBg: "#383E56",
      date: "Jan 2023 - Dec 2023",
      points: [
        "- Provide excellent customer service and explain any quiestions that araise",
        "- Assisting bussines owners in reestablishing their internet services",
        "- Troubleshoot COMCAST services as internet, phone and cable",
        "- Assisting costumers with billing questions and payments"
      ],
    },
  ];
  
  /*const testimonials = [
    {
      testimonial:
      "Example of real testimonial",
      name: "Tlahuimitl Rodriguez",
      designation: "Founder",
      company: "Liantori",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];*/
  
  const projects = [
    {
      name: "CVGen",
      description:
        "Basic web application CV Generator implementing jsPDF, we greet the user with an understanable interface, allowing the user to choose between going directly to the CV generator or scroll to know more about the web",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "jsPDF",
          color: "orange-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
      ],
      image: cvgen,
      source_code_link: "https://github.com/UniqueIsem/CV-generator",
    },
    {
      name: "Wisdrive",
      description:
        "Figma wireframes of my titulation project for my software development engineering, this app offers an interactive plattform that teach about traffic regulations, road culture and mechanics with dynamic quizzes.",
      tags: [
        {
          name: "flutter",
          color: "blue-text-gradient",
        },
        {
          name: "dart",
          color: "green-text-gradient",
        },
        {
          name: "figma",
          color: "pink-text-gradient",
        },
      ],
      image: wisdrive,
      source_code_link: "https://github.com/",
    },
    {
      name: "Route",
      description:
        "Android application CRUD using firebase authenticator for user management and SQLite for routes database. This app was created to allow bikers save and rate their travel routes, also adding multimedia to each route to never forget the memories.",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "mobile",
          color: "pink-text-gradient",
        },
      ],
      image: github,
      source_code_link: "https://github.com/UniqueIsem/CRUD-Route",
    },
    {
      name: "Liantori",
      description:
        "Basic website for a real estate startup in Guadalajara, this project was made for a friend of mine who was starting his own real estate business. This was my first website and unfortunately he had to put on wait his project.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: github,
      source_code_link: "https://github.com/UniqueIsem/Liantori_website",
    },
    {
      name: "Pacman",
      description:
        "This was a fun school project in which I undertood more about the fundamentals of Java, implementing inheritance, polymorphism, encapsulation and abstraction, also implementing my own Graphics2D library.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: github,
      source_code_link: "https://github.com/UniqueIsem/Pacman_Game",
    },
  ];

  const socials = [
    {
      id: "github",
      icon: github,
      link: "https://github.com/UniqueIsem",
    },
    {
      id: "github",
      icon: github,
      link: "https://github.com/UniqueIsem",
    },
    {
      id: "github",
      icon: github,
      link: "https://github.com/UniqueIsem",
    },
  ];
  
  export { services, technologies, experiences, projects, socials };