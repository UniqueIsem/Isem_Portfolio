import {
    designer,
    developer,
    engineer,
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
    realestate,
    cvgen,
    pacman,
    //route,
    wisdrive,
    ducati,
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
      icon: designer,
    },
    {
      title: "Java Developer",
      icon: developer,
    },
    {
      title: "Software Development Engineer",
      icon: engineer,
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

  const blogs = [
    {
      id: 1,
      title: 'Motociclismo',
      description:
        'Esta imagen captura una ensalada nutritiva que es un festival de colores y texturas, ofreciendo un equilibrio perfecto entre salud y sabor. La base de hojas verdes crujientes se complementa con rodajas de aguacate cremoso y hortalizas frescas como tomates cherry jugosos, tiras de remolacha y zanahoria crujiente. El toque de proteína viene en forma de garbanzos y cubos de batata asada, todo ello aderezado con un aliño ligero que realza los sabores naturales. Pequeños brotes y semillas de chía esparcidos por encima añaden un acabado nutritivo y estéticamente agradable a la composición. Este plato no solo es un deleite visual, sino también un homenaje a los ingredientes orgánicos y de origen local, invitando a disfrutar de la comida consciente y saludable.',
      category: 'gastronomía',
      author: 'Jhon Doe',
      date: '18 de Noviembre - 2023',
    },
    {
      id: 2,
      title: 'Noche de Gourmet: Un Clásico Reinventado',
      description:
        'Mientras esta imagen evoca la esencia de un clásico hamburguesa gourmet, permite que nuestra imaginación divague hacia las históricas tabernas de Nueva York a principios del siglo XX, donde el bullicio de la ciudad encontraba consuelo en platos robustos. La tradición culinaria americana se entrelaza con la innovación moderna, transformando simples ingredientes en una experiencia culinaria que trasciende el tiempo. Cada mordida es una narrativa de sabores que habla de calidad, artesanía y la búsqueda constante del sabor perfecto en los rincones más vibrantes y diversos de la cultura urbana.',
      category: 'gastronomía',
      author: 'Jhon Doe',
      date: '18 de Noviembre - 2023',
    },
    {
      id: 3,
      title: 'Al atardecer: Velocidad y Libertad',
      description:
        ' La imagen de este automóvil azul deportivo, capturado en el crepúsculo del desierto, nos lleva a un viaje por la Ruta 66, la carretera más emblemática de América. Nos remonta a la época dorada de los viajes por carretera, un símbolo de aventura y libertad. Este coche no es solo un medio de transporte, sino una cápsula de tiempo que conecta el pasado con el presente, invitando a explorar horizontes desconocidos y a sentir el poder de la máquina y el camino bajo nuestros pies.',
      category: 'automovilismo',
      author: 'Jhon Doe',
      date: '18 de Noviembre - 2023',
    },
    {
      id: 4,
      title:
        'Tejiendo Palabras: El Arte de la Escritura en la Era Digital',
      description:
        ' En un mundo saturado de información instantánea y comunicación efímera, la fotografía nos invita a reflexionar sobre el arte perdurable de la escritura. Imaginemos un ensayo detallado sobre la influencia de la tecnología en el lenguaje y la comunicación, explorando cómo las herramientas digitales han expandido las posibilidades de expresión mientras desafían la paciencia y profundidad de nuestra interacción con las palabras. La escritura, como reflejo del pensamiento humano, enfrenta la era digital con adaptabilidad y gracia, manteniendo su esencia en el corazón de la innovación.',
      category: 'tecnología',
      author: 'Mary Smith',
      date: '18 de Noviembre - 2023',
    },
    {
      id: 5,
      title:
        'Abismo Luminoso: El Amanecer de la Era Digital y su Impacto en la Sociedad Contemporánea',
      description:
        'Esta representación de una laptop abierta emitiendo una luz vibrante contra un fondo oscuro nos lleva a contemplar el dualismo de la tecnología en nuestras vidas: una fuente de iluminación y conocimiento, pero también una ventana a un abismo de distracciones y desinformación. Podría ser la portada de una novela futurista de Alexander C. Clarke que narra la historia de un mundo donde la realidad virtual ha reemplazado la interacción humana, una reflexión profunda sobre la dependencia de la humanidad a la tecnología y cómo redefine nuestra existencia.',
      category: 'ciencia Ficción',
      author: 'Mary Smith',
      date: '18 de Noviembre - 2023',
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
        "Web application CV Generator implementing jsPDF, we greet the user with an understanable interface, allowing the user to choose between going directly to the CV generator or scroll to know more about the web.",
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
        "Figma wireframes of my titulation project for my software development engineering. This app offers an interactive plattform teaches about traffic regulations, road culture and mechanics with dynamic quizzes.",
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
      image: realestate,
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
      image: pacman,
      source_code_link: "https://github.com/UniqueIsem/Pacman_Game",
    },
    {
      name: "Ducati practice page",
      description:
        "This project was developed as a practice excercise to enhance my skills in React. The objective was to recreate the official Ducati website while improving its design and UI.",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "react",
          color: "green-text-gradient",
        },
        {
          name: "node.js",
          color: "pink-text-gradient",
        },
      ],
      image: ducati,
      source_code_link: "https://github.com/UniqueIsem/Ecommerce-Ducati",
    },
  ];

  const socials = [
    {
      name: "github",
      icon: github,
      link: "https://github.com/UniqueIsem",
    },
    {
      name: "linkedin",
      icon: github,
      link: "https://github.com/UniqueIsem",
    },
    {
      name: "gmail",
      icon: github,
      link: "https://github.com/UniqueIsem",
    },
  ];
  
  export { services, technologies, experiences, blogs, projects, socials };