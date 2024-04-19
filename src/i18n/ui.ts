export const languages = {
  es: "🇪🇸",
  en: "🇺🇸",
};

export const defaultLang = "es";

export const ui = {
  es: {
    "layout.title":
      "Portafolio de José - Desarrollador y Programador Web Fullstack",
    "layout.description":
      "Contrata a José para crear tu aplicación web o móvil.",
    "nav.home": "Experiencia",
    "nav.projects": "Proyectos",
    "nav.about": "Sobre mí",
    "nav.contact": "Contacto",
    "hero.badge": "Disponible para trabajar",
    "hero.title": "Hey, soy José",
    "hero.bio":
      "<strong>Desarrollador Web Full Stack</strong> especializado en React, Node.js y MySQL. Creador de experiencias de usuario intuitivas y soluciones eficientes.",
    "hero.mail": "Contáctame",
    "hero.linkedin": "LinkedIn",
    "hero.github": "GitHub",
    "exp.title": "Experiencia laboral",
    "projects.title": "Proyectos",
    "about.title": "Sobre mí",
    "about.bio": `<strong>Desarrollador Web Full Stack</strong> especializado en React, Node.js y MySQL. Creador de experiencias de usuario intuitivas y soluciones eficientes.`,
    "footer.rights": "Casi todos los derechos reservados",
    exp: [
      {
        title: "Diseñador y Desarrollador Full Stack",
        date: "Enero 2022 - Marzo 2024",
        company: "Distinto Escuela Disruptiva",
        description: [
          "Desarrollo y mantenimiento del sitio web corporativo con foco en UX, SEO y atracción de estudiantes.",
          "Implementar funciones interactivas de LMS (foros, evaluaciones) para enriquecer la experiencia educativa.",
          "Crear aplicaciones web internas con React, ViteJS, GraphQL y Node.js para gestión de alumnos y mejora de procesos.",
          "Configurar y optimizar recursos en AWS para un rendimiento escalable y eficiente.",
          "Diseñar y administrar bases de datos MySQL y crear APIs con Node.js.",
          "Encargado del hosting y operaciones DevOps.",
        ],
        // link: "https://www.distinto.lat",
        // linkLabel: "Saber más",
      },
      {
        title: "Diseñador Gráfico",
        date: "Enero 2022 - Diciembre 2022",
        company: "Distinto Escuela Disruptiva",
        description: [
          "Diseño visual atractivo y coherente para el sitio web corporativo.",
          "Creación de material gráfico promocional para redes sociales (flyers, banners, publicaciones).",
          "Manejo de redes sociales y community management para aumentar presencia online.",
          "Diseño de brochures y materiales impresos para promociones y eventos.",
          "Comunicación efectiva con el equipo para mantener coherencia en diseño y proyectos.",
        ],
      },
    ],
    projects: [
      {
        title: "D/STINTO - Entrenamos tu mente para hacer cosas diferentes",
        description:
          "Sitio web corporativo para la empresa de educación continua DISTINTO. Desarrollado con Next.js, React y Tailwind CSS para un rendimiento óptimo. Incluye formularios de inscripción y procesos de venta optimizados para convertir visitantes en estudiantes.",
        link: "https://www.distinto.lat",
        image: "/projects/distinto-corporate.webp",
        tags: ["nextjs", "react", "tailwindcss"],
      },
      // {
      //   title: "SVGL - A beautiful library with SVG logos",
      //   description:
      //   "Biblioteca de logos SVG de las marcas más populares. +10k visitas al mes. +2K svgs descargados. Creado desde cero con Next.js, React y Tailwind CSS.",
      //   link: "https://svgl.vercel.app/",
      //   github: "https://github.com/pheralb/svgl",
      //   image: "/projects/adventjs.webp",
      //   tags: ["nextjs", "tailwindcss"],
      // },
    ],
  },
  en: {
    "layout.title": "José's Portfolio - Fullstack Web Developer and Programmer",
    "layout.description": "Hire José to create your web or mobile application.",
    "nav.home": "Experience",
    "nav.projects": "Projects",
    "nav.about": "About me",
    "nav.contact": "Contact",
    "hero.badge": "Available for work",
    "hero.title": "Hey, I'm José",
    "hero.bio":
      "<strong>Full Stack Web Developer</strong> specialized in React, Node.js and MySQL. Creator of intuitive user experiences and efficient solutions.",
    "hero.mail": "Contact me",
    "hero.linkedin": "LinkedIn",
    "hero.github": "GitHub",
    "exp.title": "Work experience",
    "projects.title": "Projects",
    "about.title": "About me",
    "about.bio": `<strong>Full Stack Web Developer</strong> specialized in React, Node.js and MySQL. Creator of intuitive user experiences and efficient solutions.`,
    "footer.rights": "Almost all rights reserved",
    exp: [
      {
        title: "Designer and Full Stack Developer",
        date: "January 2022 - March 2024",
        company: "Distinto Escuela Disruptiva",
        description: [
          "Development and maintenance of the corporate website with focus on UX, SEO and student attraction.",
          "Implement interactive LMS functions (forums, evaluations) to enrich the educational experience.",
          "Create internal web applications with React, ViteJS, GraphQL and Node.js for student management and process improvement.",
          "Configure and optimize resources on AWS for scalable and efficient performance.",
          "Design and manage MySQL databases and create APIs with Node.js.",
          "In charge of hosting and DevOps operations.",
        ],
      },
      {
        title: "Graphic Designer",
        date: "January 2022 - December 2022",
        company: "Distinto Escuela Disruptiva",
        description: [
          "Attractive and consistent visual design for the corporate website.",
          "Creation of promotional graphic material for social networks (flyers, banners, posts).",
          "Handling of social networks and community management to increase online presence.",
          "Design of brochures and printed materials for promotions and events.",
          "Effective communication with the team to maintain coherence in design and projects.",
        ],
      },
    ],
    projects: [
      {
        title: "D/STINTO - We train your mind to do different things",
        description:
          "Corporate website for the continuing education company DISTINTO. Developed with Next.js, React and Tailwind CSS for optimal performance. Includes registration forms and optimized sales processes to convert visitors into students.",
        link: "https://www.distinto.lat",
        image: "/projects/distinto-corporate.webp",
        tags: ["nextjs", "react", "tailwindcss"],
      },
    ],
  },
} as const;
