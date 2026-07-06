import { creativity, worktual, bbbs } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mysql,
    java,
    python,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
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
        imageUrl: mysql,
        name: "Mysql",
        type: "Database",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Animation",
    },
    {
        imageUrl: python,
        name: "Python   ",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
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
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
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
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
  {
    title: "AI & ML Intern",
    company_name: "Big Bang Boom Solutions",
    icon: bbbs, // Import company logo/icon
    iconBg: "#ffffff",
    date: "Feb 2024 - April 2024",
    points: [
      "Worked on Artificial Intelligence and Machine Learning projects using Python and related libraries.",
      "Performed data preprocessing, model training, and evaluation for predictive analytics tasks.",
      "Collaborated with team members to develop and optimize machine learning solutions.",
      "Prepared project documentation and presented progress reports to mentors.",
    ],
  },
  {
    title: "Web Developer Intern",
    company_name: "Creativity Ventures Pvt Ltd",
    icon: creativity, // Import company logo/icon
    iconBg: "#300f8b",
    date: "Feb 2025 - July 2025",
    points: [
      "Developed responsive web pages using HTML, CSS, JavaScript, and modern web technologies.",
      "Integrated frontend interfaces with backend services and databases.",
      "Implemented user-friendly UI components and improved website performance.",
      "Participated in testing, debugging, and deployment of web applications.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Worktual Innovations",
    icon: worktual, // Import company logo/icon
    iconBg: "#ffffff",
    date: "Aug 2025 - Nov 2025",
    points: [
      "Developing full-stack web applications using modern frontend and backend technologies.",
      "Building REST APIs and integrating databases for dynamic applications.",
      "Implementing authentication, data management, and responsive user interfaces.",
      "Collaborating with development teams using Git and agile methodologies.",
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
        link: 'https://github.com/RajeshD2004',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/rajesh-d-a8818a230/',
    }
];

export const projects = [
{
id: "beatmyshop",
iconUrl: pricewise,
theme: "btn-back-red",

name: "BeatMyShop",

description:
  "A price comparison platform that helps users compare products across multiple e-commerce websites and identify the best available deals.",

screenshots: [
  "/images/beatmyshop/1.png",
  "/images/beatmyshop/2.png",
  "/images/beatmyshop/3.png",
],

video: "/videos/beatmyshop-demo.mp4",

techStack: [
  "React",
  "JavaScript",
  "HTML",
  "CSS",
  "API Integration"
]

},

{
id: "icu-risk-monitoring",
iconUrl: threads,
theme: "btn-back-green",

name: "Patient Risk Level Monitoring in ICU",

description:
  "An AI-powered healthcare application that predicts ICU patient risk levels using machine learning models and provides real-time monitoring support for medical staff.",

screenshots: [
  "/images/icu/1.png",
  "/images/icu/2.png",
  "/images/icu/3.png",
],

video: "/videos/icu-demo.mp4",

techStack: [
  "Python",
  "Flask",
  "Machine Learning",
  "SQLite",
  "HTML",
  "CSS",
  "JavaScript"
]

},

{
id: "cricklytics",
iconUrl: car,
theme: "btn-back-blue",

name: "Cricklytics",

description:
  "A cricket analytics platform that displays live match information, player statistics, score analysis, and match insights using real-time cricket data APIs.",

screenshots: [
  "/images/cricklytics/1.png",
  "/images/cricklytics/2.png",
  "/images/cricklytics/3.png",
],

video: "/videos/cricklytics-demo.mp4",

techStack: [
  "Firebase",
  "JavaScript",
  "HTML",
  "CSS",
  "REST API"
]


},

{
  id: "customer-value-management",

  iconUrl: estate, // or any icon you prefer

  theme: "btn-back-black",

  name: "Customer Value Management (CVM)",

  description:
    "A web-based Customer Value Management system designed to manage customer information, monitor customer interactions, analyze customer value, and support data-driven business decisions through an intuitive dashboard.",

  screenshots: [
    "/images/cvm/1.png",
    "/images/cvm/2.png",
    "/images/cvm/3.png",
  ],

  video: "/videos/cvm-demo.mp4",

  techStack: [
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "MySql"
  ]
}
];
