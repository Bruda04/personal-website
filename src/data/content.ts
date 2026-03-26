export const SITE_CONTENT = {
  hero: {
    roles: [
      "tech enthusiast and lifelong learner.",
      "a Software Engineering student at FTN.",
      "enjoying competing in hackathons.",
      "building robust and scalable backend systems.",
      "a team player and effective communicator.",
      "exploring the depths of software architecture.",
      "focused on clean, maintainable, and fast code.",
      "turning complex logic into elegant applications.",
    ],
  },

  experience: [
    {
      period: "Nov 2025 — Dec 2025; Mar 2026 — Present",
      role: "Salesforce Developer Intern",
      company: "BeeIT",
      link: "https://beeit.io/",
      active: true,
      details: [],
    },
    {
      period: "Oct 2022 — Present",
      role: "Software Engineering Student",
      company: "Faculty of Technical Sciences, University of Novi Sad",
      link: "https://ftn.uns.ac.rs/engfaculty-of-technical-sciences-eng/",
      active: true,
      details: ["GPA: 9.68/10"],
    },
  ],

  techStack: [
    "JavaScript",
    "Spring Boot",
    "TypeScript",
    "Java",
    "React",
    "Node.js",
    "Angular",
    "Cisco",
    "Git",
    "React Native",
    "Python",
    "AWS",
    "Docker",
    "Linux",
    "C++",
    "MongoDB",
    "Tailwind",
    "PostgreSQL",
    "MySQL",
    "System Administration",
    "HTML5",
    "CSS3",
    "Android",
    "Figma",
    "C#",
    "Delphi",
    "Selenium",
    "Salesforce",
    "Go",
    "Rust",
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
      title: "Smart Supply Chain Platform",
      description:
        "A modular, high-throughput platform designed for real-time supply chain optimization. The system leverages a robust infrastructure to handle low-latency telemetry data from a distributed network of vehicles, warehouses, and factories, providing comprehensive real-time status monitoring and operational insights.",
      tags: [
        "Angular",
        "Go",
        "Caddy",
        "MinIO",
        "InfluxDB",
        "Redis",
        "RabbitMQ",
        "Locust",
      ],
      link: null,
      repositories: [
        {
          label: "Repository",
          url: "https://github.com/Bruda04/smart-supply-chain-platform",
        },
      ],
      image: "img/smart-supply-chain-platform.webp",
    },
    {
      title: "Smart Home IoT System",
      description:
        "A distributed IoT platform built for end-to-end home automation and environmental monitoring. The system orchestrates multiple Raspberry Pi nodes as active sensor/actuator hubs, utilizing an MQTT-based messaging backbone for low-latency communication. It features a professional telemetry stack with InfluxDB for time-series data persistence and Grafana for real-time operational dashboards.",
      tags: [
        "Raspberry Pi",
        "Flask",
        "Mosquitto",
        "InfluxDB",
        "Grafana",
        "Electronics",
        "IoT",
      ],
      link: null,
      repositories: [
        {
          label: "Repository",
          url: "https://github.com/Bruda04/smart-home-IoT",
        },
      ],
      image: "img/smart-home-iotsystem.webp",
    },
    {
      title: "HPC Mandelbrot",
      description:
        "This project explores the generation of the Mandelbrot set using both sequential and parallel implementations in Python and Rust. It focuses on performance benchmarking, visual artifact generation, and final visualization of results.",
      tags: [
        "Rust",
        "Python",
        "High-Performance Computing",
        "Parallel Programming",
      ],
      link: null,
      repositories: [
        {
          label: "Repository",
          url: "https://github.com/Bruda04/hpc-mandelbrot",
        },
      ],
      image: "img/hpc-mandelbrot.webp",
    },
    {
      title: "Soft Computing",
      description:
        "A collection of Soft Computing projects implementing ANN-based OCR, Hough Transform object detection, and advanced image segmentation. The repository demonstrates end-to-end pipelines for character recognition and automated feature extraction using Python and OpenCV. Each exercise focuses on bridging raw pixel data with intelligent classification and real-time status monitoring.",
      tags: [
        "Python",
        "OpenCV",
        "ANN",
        "Hough Transform",
        "Image Processing",
        "OCR",
        "Computer Vision",
      ],
      link: null,
      repositories: [
        {
          label: "Repository",
          url: "https://github.com/Bruda04/soft-computing",
        },
      ],
      image: "img/soft-computing.webp",
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
