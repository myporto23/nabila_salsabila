import { FiCode, FiBriefcase, FiMonitor, FiAward, FiServer, FiLayout, FiSmartphone, FiDatabase, FiTool } from 'react-icons/fi';

// Portfolio Data - Centralized content management
// Update this file to change all portfolio content

export const personalInfo = {
  name: "Nabila",
  fullName: "Nabila Putri",
  title: "Software Developer",
  subtitle: "Full-Stack Developer & Mobile Engineer",
  email: "nabila@example.com",
  location: "Jakarta, Indonesia",
  availability: "Open for opportunities",
  bio: "A passionate software developer with expertise in building elegant, scalable web and mobile applications. I blend creativity with clean code to craft digital experiences that make a difference.",
  shortBio: "Crafting beautiful digital experiences with clean code and creative design.",
  resumeUrl: "#",
  profileImage: import.meta.env.BASE_URL + "profile.jpg",
  social: {
    github: "https://github.com/nabila",
    linkedin: "https://linkedin.com/in/nabila",
    instagram: "https://instagram.com/nabila.dev",
    twitter: "https://twitter.com/nabiladev",
  },
};

export const stats = [
  { label: "Years Experience", value: "3+", icon: <FiBriefcase /> },
  { label: "Projects Completed", value: "25+", icon: <FiCode /> },
  { label: "Technologies", value: "15+", icon: <FiMonitor /> },
  { label: "Certificates", value: "10+", icon: <FiAward /> },
];

export const techStackIcons = [
  "Laravel",
  "PHP",
  "React",
  "Flutter",
  "MySQL",
];

export const skills = {
  backend: {
    title: "Backend",
    icon: <FiServer />,
    items: [
      { name: "Laravel", level: 90, icon: "SiLaravel" },
      { name: "PHP", level: 88, icon: "SiPhp" },
      { name: "Node.js", level: 75, icon: "SiNodedotjs" },
      { name: "REST API", level: 85, icon: "SiPostman" },
      { name: "Python", level: 70, icon: "SiPython" },
    ],
  },
  frontend: {
    title: "Frontend",
    icon: <FiLayout />,
    items: [
      { name: "React", level: 85, icon: "SiReact" },
      { name: "JavaScript", level: 88, icon: "SiJavascript" },
      { name: "Tailwind CSS", level: 90, icon: "SiTailwindcss" },
      { name: "HTML/CSS", level: 95, icon: "SiHtml5" },
      { name: "Vue.js", level: 70, icon: "SiVuedotjs" },
    ],
  },
  mobile: {
    title: "Mobile",
    icon: <FiSmartphone />,
    items: [
      { name: "Flutter", level: 82, icon: "SiFlutter" },
      { name: "Dart", level: 80, icon: "SiDart" },
      { name: "React Native", level: 65, icon: "SiReact" },
    ],
  },
  database: {
    title: "Database",
    icon: <FiDatabase />,
    items: [
      { name: "MySQL", level: 88, icon: "SiMysql" },
      { name: "PostgreSQL", level: 75, icon: "SiPostgresql" },
      { name: "MongoDB", level: 70, icon: "SiMongodb" },
      { name: "Redis", level: 65, icon: "SiRedis" },
    ],
  },
  tools: {
    title: "Tools & Others",
    icon: <FiTool />,
    items: [
      { name: "Git", level: 90, icon: "SiGit" },
      { name: "Docker", level: 72, icon: "SiDocker" },
      { name: "Figma", level: 78, icon: "SiFigma" },
      { name: "VS Code", level: 95, icon: "SiVisualstudiocode" },
      { name: "Linux", level: 75, icon: "SiLinux" },
    ],
  },
};

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with product management, shopping cart, payment integration, and admin dashboard. Built with Laravel and React.",
    image: import.meta.env.BASE_URL + "projects/ecommerce.jpg",
    tags: ["Laravel", "React", "MySQL", "Tailwind CSS"],
    category: "fullstack",
    github: "https://github.com/nabila/ecommerce",
    demo: "https://ecommerce-demo.com",
    featured: true,
  },
  {
    id: 2,
    title: "Health Tracker App",
    description:
      "A mobile health tracking application with activity monitoring, meal planning, and fitness goals. Features beautiful charts and data visualization.",
    image: import.meta.env.BASE_URL + "projects/healthapp.jpg",
    tags: ["Flutter", "Dart", "Firebase", "REST API"],
    category: "mobile",
    github: "https://github.com/nabila/health-tracker",
    demo: "#",
    featured: true,
  },
  {
    id: 3,
    title: "Task Management System",
    description:
      "A collaborative task management tool with real-time updates, team workspaces, kanban boards, and productivity analytics.",
    image: import.meta.env.BASE_URL + "projects/taskmanager.jpg",
    tags: ["React", "Node.js", "MongoDB", "Socket.io"],
    category: "fullstack",
    github: "https://github.com/nabila/task-manager",
    demo: "https://taskmanager-demo.com",
    featured: true,
  },
  {
    id: 4,
    title: "Restaurant POS System",
    description:
      "A point-of-sale system for restaurants with order management, table reservations, kitchen display, and sales reporting.",
    image: import.meta.env.BASE_URL + "projects/pos.jpg",
    tags: ["Laravel", "Vue.js", "MySQL", "Tailwind CSS"],
    category: "fullstack",
    github: "https://github.com/nabila/restaurant-pos",
    demo: "#",
    featured: false,
  },
  {
    id: 5,
    title: "Portfolio Website",
    description:
      "A stunning 3D portfolio website with interactive animations, physics-based elements, and glassmorphism design.",
    image: import.meta.env.BASE_URL + "projects/portfolio.jpg",
    tags: ["React", "Three.js", "Framer Motion", "GSAP"],
    category: "frontend",
    github: "https://github.com/nabila/portfolio",
    demo: "#",
    featured: false,
  },
  {
    id: 6,
    title: "Social Media Dashboard",
    description:
      "An analytics dashboard for social media management with data visualization, scheduling, and audience insights.",
    image: import.meta.env.BASE_URL + "projects/dashboard.jpg",
    tags: ["React", "PHP", "PostgreSQL", "Chart.js"],
    category: "fullstack",
    github: "https://github.com/nabila/social-dashboard",
    demo: "#",
    featured: false,
  },
];

export const experience = [
  {
    id: 1,
    role: "Full-Stack Developer",
    company: "Tech Solutions Inc.",
    location: "Jakarta, Indonesia",
    period: "2024 - Present",
    description:
      "Leading development of enterprise web applications using Laravel and React. Collaborating with cross-functional teams to deliver high-quality products.",
    highlights: [
      "Built and maintained 5+ production applications",
      "Improved application performance by 40%",
      "Mentored junior developers",
    ],
  },
  {
    id: 2,
    role: "Junior Developer",
    company: "Digital Creative Agency",
    location: "Bandung, Indonesia",
    period: "2023 - 2024",
    description:
      "Developed responsive websites and mobile applications for various clients. Worked closely with designers to implement pixel-perfect UIs.",
    highlights: [
      "Delivered 10+ client projects on time",
      "Introduced Flutter for mobile development",
      "Implemented CI/CD pipelines",
    ],
  },
  {
    id: 3,
    role: "Freelance Developer",
    company: "Self-employed",
    location: "Remote",
    period: "2022 - 2023",
    description:
      "Took on freelance web development projects, building custom websites and web applications for small businesses and startups.",
    highlights: [
      "Completed 15+ freelance projects",
      "Maintained 5-star client rating",
      "Built reusable component library",
    ],
  },
];

export const certificates = [
  {
    id: 1,
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2024",
    image: import.meta.env.BASE_URL + "certs/aws.jpg",
    credential: "https://aws.amazon.com/verification",
  },
  {
    id: 2,
    title: "React Developer Certification",
    issuer: "Meta",
    date: "2024",
    image: import.meta.env.BASE_URL + "certs/react.jpg",
    credential: "#",
  },
  {
    id: 3,
    title: "Laravel Certified Developer",
    issuer: "Laravel",
    date: "2023",
    image: import.meta.env.BASE_URL + "certs/laravel.jpg",
    credential: "#",
  },
  {
    id: 4,
    title: "Flutter Development Bootcamp",
    issuer: "Udemy",
    date: "2023",
    image: import.meta.env.BASE_URL + "certs/flutter.jpg",
    credential: "#",
  },
  {
    id: 5,
    title: "JavaScript Algorithms & Data Structures",
    issuer: "freeCodeCamp",
    date: "2022",
    image: import.meta.env.BASE_URL + "certs/freecodecamp.jpg",
    credential: "#",
  },
  {
    id: 6,
    title: "Database Management Fundamentals",
    issuer: "Oracle",
    date: "2022",
    image: import.meta.env.BASE_URL + "certs/oracle.jpg",
    credential: "#",
  },
];

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "certificates", label: "Certificates" },
  { id: "contact", label: "Contact" },
];
