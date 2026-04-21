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
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  Techmagify,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  folk_logo,
  iskcon_mysore,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    name: "Redux Toolkit",
    icon: redux,
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
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Intern - Tech Magnify LLP",
    company_name: "Tech Magnify",
    icon: Techmagify,
    iconBg: "#383E56",
    date: "Jan 2026 - Mar 2026",
    points: [
      "Worked as a Junior Developer Intern focusing on frontend web development.",
      "Developed an Office Slot Management System to allow employees to book, manage, and view discussion or meeting slots within the organization.",
      "Designed responsive user interfaces using HTML, CSS, and JavaScript.",
      "Implemented backend functionality using PHP and integrated MySQL for database management.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Smart Pest Detection",
    description:
      "AI-powered pest detection system using CNN and transfer learning models to identify crop diseases from leaf images. Built web/mobile interfaces for real-time recommendations.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "cnn",
        color: "green-text-gradient",
      },
      {
        name: "machine-learning",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "AI Resume Analysis",
    description:
      "An AI-powered resume analysis web application that extracts details, evaluates skills, and provides personalized improvement suggestions using Claude AI models.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "SECOC System",
    description:
      "Secure Electronic Commerce Online Checkout (SECOC) with Stripe/PayPal integration, OTP email verification, and JWT-based login for a reliable shopping experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

const extracurriculars = [
  {
    title: "Core Committee Member",
    company_name: "FOLK Mysore (ISKCON)",
    icon: folk_logo,
    iconBg: "#383E56",
    date: "Present",
    points: [
      "Managed weekly Sunday sessions, registered students and professionals for personality enrichment courses.",
      "Contributed to website development for the FOLK program.",
    ],
  },
  {
    title: "Social Media Manager",
    company_name: "FOLK Mysore (ISKCON)",
    icon: iskcon_mysore,
    iconBg: "#E6DEDD",
    date: "Present",
    points: [
      "Planned and managed social media content to engage youth, promoting awareness of Vedic culture through the teachings of the Bhagavad Gita.",
      "Developed digital strategies to enhance reach, foster interaction, and encourage participation in spiritual and self-development programs.",
    ],
  },
];

export { services, technologies, experiences, testimonials, projects, extracurriculars };
