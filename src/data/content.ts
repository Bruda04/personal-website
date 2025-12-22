export const SITE_CONTENT = {
  hero: {
    roles: [
      "building robust and scalable backend systems.",
      "tech enthusiast and lifelong learner.",
      "exploring the depths of software architecture.",
      "a Software Engineering student at FTN.",
      "obsessed with clean, maintainable, and fast code.",
      "turning complex logic into elegant applications.",
      "team player and effective communicator.",
    ],
  },

  about: {
    title: "Bio",
    description:
      "Full-stack developer focused on creating high-performance digital experiences...",
  },

  experience: [
    {
      period: "Nov 2025 — Dec 2025",
      role: "Salesforce Developer Intern",
      company: "BeeIT",
      link: "https://beeit.io/",
      active: false,
      details: [],
    },
    {
      period: "Oct 2022 — Present",
      role: "Software Engineering Student",
      company: "FTN, University of Novi Sad",
      link: "https://ftn.uns.ac.rs/engfaculty-of-technical-sciences-eng/",
      active: true,
      details: ["GPA: 9.71/10"],
    },
  ],

  techStack: [
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Java",
    "MongoDB",
    "Spring Boot",
    "Tailwind",
    "Docker",
    "Git",
    "AWS",
    "PostgreSQL",
    "MySQL",
    "HTML5",
    "CSS3",
    "Android",
    "Figma",
    "C++",
    "Python",
    "Linux",
    "C#",
    "Delphi",
    "Angular",
    "React Native",
    "Selenium",
    "Cisco",
    "Salesforce",
    "System Administration",
    "Go",
  ],

  projects: [
    {
      title: "Feel The Beat",
      description:
        "Multi-sensory React Native app for people with hearing impairments. Features a custom Android Kotlin module for high-precision haptic feedback and Python-based music analysis.",
      tags: ["React Native", "Kotlin", "Python", "Django", "Expo"],
      link: null,
      repositories: [
        {
          label: "Backend",
          url: "https://github.com/Rogan003/FeelTheBeatBackend",
        },
        {
          label: "Frontend",
          url: "https://github.com/Bruda04/FeelTheBeatFrontend",
        },
      ],
      image: "img/feel-the-beat.webp",
    },
    {
      title: "NoSQL Database",
      description:
        "Custom key-value store implementation in Go, inspired by Cassandra and LevelDB architecture. Focuses on efficient data structures and core database principles.",
      tags: [
        "Go",
        "NoSQL",
        "Databases",
        "Systems Programming",
        "High Performance",
      ],
      link: null,
      repositories: [
        {
          label: "Repository",
          url: "https://github.com/Bruda04/key-value-engine",
        },
      ],
      image: "img/nosql-database.webp",
    },
    {
      title: "Music Cloud Platform",
      description:
        "Serverless music streaming infrastructure built with AWS CDK. Features an Angular frontend and a Python backend with AWS Lambda handlers for artist, album, and subscription management.",
      tags: ["Angular", "Python", "AWS Lambda", "AWS CDK", "Serverless"],
      link: null,
      repositories: [
        {
          label: "Repository",
          url: "https://github.com/Bruda04/music-cloud-app",
        },
      ],
      image: "img/cloud-music-app.webp",
    },
    {
      title: "Event-Hopper",
      description:
        "Full-stack event planning ecosystem with real-time communication via WebSockets. Includes service management features and a detailed multi-platform client suite.",
      tags: ["Spring Boot", "Java", "Angular", "WebSockets", "Android"],
      link: null,
      repositories: [
        {
          label: "Backend",
          url: "https://github.com/Bruda04/event-hopper-backend",
        },
        {
          label: "Angular UI",
          url: "https://github.com/Bruda04/event-hopper-frontend",
        },
        {
          label: "Android App",
          url: "https://github.com/Bruda04/event-hopper-mobile",
        },
      ],
      image: "img/event-hopper.webp",
    },
    {
      title: "License Plate Detection",
      description:
        "AI-powered vehicle identification system. Utilizes YOLO models for real-time detection and a combination of PaddleOCR and Tesseract for precise text recognition.",
      tags: ["AI", "Python", "YOLO", "OCR", "Computer Vision"],
      link: null,
      repositories: [
        {
          label: "Repository",
          url: "https://github.com/Bruda04/license-plate-detection",
        },
      ],
      image: "/img/license-plate-detection.webp",
    },
    {
      title: "Personal Website",
      description:
        "My personal portfolio website, built with Vite, React, and Tailwind CSS. Showcases my projects, experience, and skills in a clean and modern design.",
      tags: ["TypeScript", "React", "Tailwind CSS", "Vite", "Design"],
      link: "https://bradic.dev",
      repositories: [
        {
          label: "Repository",
          url: "https://github.com/Bruda04/personal-website",
        },
      ],
      image: "img/personal-website.webp",
    },
    {
      title: "PKI Platform",
      description:
        "Enterprise-grade Public Key Infrastructure for certificate management. Features Keycloak integration for Auth, custom password policies, and a secure Spring Boot backend.",
      tags: ["Spring Boot", "Java", "Angular", "Keycloak", "PostgreSQL"],
      link: null,
      repositories: [
        {
          label: "Repository",
          url: "https://github.com/Bruda04/public-key-infrastructure-platform",
        },
      ],
      image: "img/pki.webp",
    },
    {
      title: "Graph Visualizer",
      description:
        "Modular Django application for interactive graph analysis. Supports plugin-based data sources (JSON/RDF) and D3.js force-directed layouts with an in-browser CLI.",
      tags: ["Django", "Python", "D3.js", "SVG", "Plugins"],
      link: null,
      repositories: [
        {
          label: "Repository",
          url: "https://github.com/Bruda04/graph-visualizer",
        },
      ],
      image: "img/graph-visualizer.webp",
    },
    {
      title: "Fault Tolerant System",
      description:
        "A distributed watchdog system built with WCF (Windows Communication Foundation). Features automated failover logic with heartbeat monitoring, real-time client state synchronization via a server-side database, and secure encrypted data exchange.",
      tags: ["C#", "WCF", "Cryptography", "SQL", "Distributed Systems"],
      link: null,
      repositories: [
        {
          label: "System Source",
          url: "https://github.com/Bruda04/fault-tolerant-system",
        },
      ],
      image: "/img/fts.webp",
    },
  ],
};
