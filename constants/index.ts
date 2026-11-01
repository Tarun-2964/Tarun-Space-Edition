import type { IconType } from "react-icons";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

/* ------------------------------------------------------------------ */
/*  PERSONAL                                                           */
/* ------------------------------------------------------------------ */
export const PROFILE = {
  name: "C Tarun Varma",
  shortName: "Tarun",
  initials: "CTV",
  roles: ["Web Developer", "UI/UX Designer", "Vibe Coder"],
  location: "Hyderabad, Telangana, India",
  email: "ctarunvarma@gmail.com",
  phone: "+91 6309543567",
  linkedin: "https://www.linkedin.com/in/tarun-varma-474843390",
  github: "https://github.com/Tarun-2964",
  portfolio: "https://ctarunvarma.vercel.app",
  summary:
    "Creative and results-driven Web Developer, UI/UX Designer, and AI-powered Development Enthusiast skilled in building responsive, user-friendly, and visually appealing digital experiences. Passionate about leveraging modern technologies, innovative design approaches, and AI tools to develop efficient, scalable, and impactful web solutions while continuously adapting to emerging industry trends.",
  heroTagline:
    "I build responsive, user-friendly and visually appealing digital experiences — powered by modern web technologies and AI tools.",
} as const;

export const SOCIALS: ReadonlyArray<{
  name: string;
  icon: IconType;
  link: string;
  handle: string;
}> = [
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    link: PROFILE.linkedin,
    handle: "tarun-varma-474843390",
  },
  {
    name: "Email",
    icon: FaEnvelope,
    link: `mailto:${PROFILE.email}`,
    handle: PROFILE.email,
  },
  {
    name: "GitHub",
    icon: FaGithub,
    link: PROFILE.github,
    handle: "Tarun-2964",
  },
];

export const NAV_LINKS = [
  { title: "Home", link: "/" },
  { title: "Projects", link: "/projects" },
  { title: "Education", link: "/education" },
  { title: "Achievements", link: "/achievements" },
  { title: "Hire Me", link: "/hire-me" },
] as const;

/* ------------------------------------------------------------------ */
/*  HOME – quick facts                                                 */
/* ------------------------------------------------------------------ */
export const QUICK_FACTS = [
  { label: "Based in", value: "Hyderabad, India" },
  { label: "Degree", value: "B.Tech – Information Technology" },
  { label: "Focus", value: "Web, UI/UX & AI-assisted dev" },
  { label: "Languages", value: "Python · Java" },
] as const;

/* ------------------------------------------------------------------ */
/*  PROJECTS                                                           */
/*  Add new projects here. Each tab paginates automatically (9/page).  */
/* ------------------------------------------------------------------ */
export const PROJECT_CATEGORIES = ["Java", "Python", "Portfolios"] as const;
export type ProjectCategory = (typeof PROJECT_CATEGORIES)[number];
export const PROJECTS_PER_PAGE = 9;

export type Project = {
  title: string;
  category: ProjectCategory;
  year: string;
  description: string;
  highlights: string[];
  tech: string[];
  link?: string; // GitHub / live URL – add when available
};

export const PROJECTS: Project[] = [
  {
    title: "Hourly Bus Passenger Demand Prediction",
    category: "Java",
    year: "2024 – 2025",
    description:
      "Explores how predictive analytics can improve public transportation planning and optimize bus scheduling through a user-friendly demand prediction system.",
    highlights: [
      "Backend development and database integration",
      "Frontend implementation of the prediction interface",
      "Demand forecasting and data analysis",
    ],
    tech: ["Java", "JavaScript", "SQL", "Spring Boot", "Angular"],
    link: PROFILE.github,
  },
  {
    title: "Insurance Fraud Detection",
    category: "Python",
    year: "2024",
    description:
      "Explores how machine learning can identify suspicious insurance claims and minimize fraudulent activity, with an interactive desktop interface.",
    highlights: [
      "Data preprocessing, model training and fraud prediction",
      "Data analysis and model development",
      "Interactive interface built with Python Tkinter",
    ],
    tech: ["Python", "Tkinter", "Pandas", "NumPy", "Scikit-learn", "Keras"],
    link: PROFILE.github,
  },
  {
    title: "Personal Portfolio Website",
    category: "Portfolios",
    year: "2025",
    description:
      "My live developer portfolio showcasing my projects, skills and background, deployed on Vercel.",
    highlights: [
      "Responsive, modern UI",
      "Deployed on Vercel",
      "Showcases projects, skills and contact details",
    ],
    tech: ["HTML5", "CSS3", "Vercel"],
    link: PROFILE.portfolio,
  },
];

/* ------------------------------------------------------------------ */
/*  EDUCATION & SKILLS                                                 */
/* ------------------------------------------------------------------ */
export const EDUCATION = [
  {
    institution: "Malla Reddy College of Engineering (JNTUH)",
    location: "Hyderabad",
    degree: "Bachelor of Technology – Information Technology",
    period: "2021 – 2025",
    coursework: [
      "Web Technologies",
      "Software Engineering",
      "Data Structures and Algorithms",
      "Database Management Systems",
    ],
  },
] as const;

export const SKILL_GROUPS = [
  { title: "Programming Languages", items: ["Python", "Java"] },
  { title: "Frontend & Design", items: ["HTML5", "CSS3", "AutoCAD", "StarUML"] },
  { title: "Databases & Analytics", items: ["MySQL", "MongoDB Atlas"] },
  { title: "Tools & Platforms", items: ["Git", "GitHub", "VS Code"] },
  { title: "AI & Generative AI", items: ["Prompt Engineering"] },
  {
    title: "Engineering Core",
    items: ["Data Structures & Algorithms", "Code Design"],
  },
] as const;

/* ------------------------------------------------------------------ */
/*  ACHIEVEMENTS                                                       */
/*  Resume lists certification names only – add issuer/year/link here. */
/* ------------------------------------------------------------------ */
export type Certification = {
  title: string;
  issuer?: string;
  year?: string;
  link?: string;
};

export const CERTIFICATIONS: Certification[] = [
  { title: "Python" },
  { title: "SQL" },
  { title: "Artificial Intelligence" },
];

export type Award = {
  title: string;
  issuer?: string;
  year?: string;
  description?: string;
};

// No awards were listed on the resume. Add entries here and they appear automatically.
export const AWARDS: Award[] = [];
