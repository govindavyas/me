export interface Experience {
  company: string
  role: string
  period: string
  description: string[]
  technologies: string[]
}

export interface Project {
  name: string
  description: string
  technologies: string[]
  period: string
  highlights: string[]
  detailsUrl?: string
  demoUrl?: string
}

export interface Education {
  institution: string
  degree: string
  period: string
}

export interface Achievement {
  title: string
  description: string
  year: string
}

export interface PortfolioData {
  personal: {
    name: string
    title: string
    tagline: string
    summary: string
    email: string
    phone: string
    location: string
    github: string
    linkedin: string
  }
  skills: {
    frontend: string[]
    backend: string[]
    databases: string[]
    tools: string[]
    additional: string[]
  }
  experience: Experience[]
  projects: Project[]
  education: Education[]
  achievements: Achievement[]
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Govind Vyas",
    title: "Software Developer",
    tagline: "Building scalable web applications with modern technologies",
    summary: "Software Developer with 2+ years of combined experience building full-stack web applications using Vue.js, Angular, Node.js, Express.js, MySQL, and PostgreSQL. Experienced in developing admin dashboards, internal business tools, transaction management systems, REST APIs, and production features with a focus on clean architecture, automation, and scalable delivery. Entry-level Software Engineer with proven problem-solving skills and automation expertise. Over 2 year of experience building scalable web applications using Java, Vue.js, and modern frameworks.",
    email: "govindav44@gmail.com",
    phone: "+91 9923415011",
    location: "India",
    github: "https://github.com/govindavyas",
    linkedin: "https://www.linkedin.com/in/govindavyas/"
  },

  skills: {
    frontend: ["HTML5", "CSS3", "JavaScript (ES6+)", "Vue.js", "Vue 3", "Angular", "TypeScript", "TailwindCSS"],
    backend: ["Java", "Node.js", "Express.js", "REST APIs"],
    databases: ["MySQL", "PostgreSQL", "SQL"],
    tools: ["Git", "GitHub", "Docker", "Jenkins", "GitLab CI", "JWT", "Sequelize ORM"],
    additional: ["OOP", "Data Structures", "Responsive Design", "Agile Development", "Agile/Scrum", "Problem Solving", "Team Collaboration"]
  },

  experience: [
    {
      company: "Nebula Films LLP",
      role: "Software Developer I",
      period: "Sep 2025 — Jul 2026",
      description: [
        "Built the White Panda Creations website and admin panel for managing movies, media assets, branding, site pages, logos, and SEO management from a centralized interface.",
        "Developed admin workflows that allowed non-technical users to update website content and branding without code changes.",
        "Designed and implemented MoneyTrack (CT Manager), a company transaction management platform for tracking investments, spendings, vendor records, and payment status.",
        "Created dashboards that presented total transactions, vendor-wise payables, paid amounts, and remaining balances in one view.",
        "Developed backend APIs, database logic, and validation flows to support reliable data handling, reporting, and internal operations."
      ],
      technologies: ["Vue.js", "Node.js", "Express.js", "MySQL", "JavaScript", "HTML", "CSS", "REST APIs", "Git"]
    },
    {
      company: "FirstCry",
      role: "Software Developer I",
      period: "Apr 2024 — Aug 2025",
      description: [
        "Delivered production features across KSA-POS, AFFIRMA, Escort, and B2D business applications.",
        "Migrated and maintained frontend modules using Vue.js, Vue 3, and Angular while improving maintainability and performance.",
        "Developed REST APIs and backend services using Node.js, Express.js, MySQL, and PostgreSQL.",
        "Automated reporting and operational workflows, reducing manual effort by 60%.",
        "Collaborated with cross-functional teams in Agile environments, including code reviews, testing, debugging, and production support.",
        "Designed, developed, and maintained distributed systems (AFFIRMA, Escort, B2D) improving operational efficiency by up to 5x",
        "Automated processes achieving 3x faster report generation and 60% less manual work",
        "Delivered 15+ feature updates in Agile teams"
      ],
      technologies: ["Vue.js", "Vue 3", "Angular", "Node.js", "Express.js", "MySQL", "PostgreSQL", "Git", "Jenkins", "JWT", "Sequelize ORM"]
    }
  ],

  projects: [
    {
      name: "White Panda Creations",
      description: "Website and admin panel for managing movies, media assets, branding, site pages, logos, and SEO management from a centralized interface.",
      technologies: ["Vue.js", "Node.js", "Express.js", "MySQL", "JavaScript", "HTML", "CSS"],
      period: "Sep 2025 - Jul 2026",
      highlights: [
        "Centralized management interface",
        "Admin workflows for non-technical users",
        "No-code content updates"
      ]
    },
    {
      name: "MoneyTrack (CT Manager)",
      description: "Company transaction management platform for tracking investments, spendings, vendor records, and payment status.",
      technologies: ["Vue.js", "Node.js", "Express.js", "MySQL", "REST APIs"],
      period: "Sep 2025 - Jul 2026",
      highlights: [
        "Comprehensive transaction dashboards",
        "Vendor-wise payables tracking",
        "Reliable backend APIs and validation"
      ]
    },
    {
      name: "KSA-POS System",
      description: "POS migration platform built for Saudi-Arabia",
      technologies: ["Vue3.js", "Node.js", "MySQL", "Express.js"],
      period: "Mar 2025 - Aug 2025",
      highlights: [
        "Language migration development",
        "Improved efficiency by 3x",
        "Full-stack implementation"
      ]
    },
    {
      name: "AFFIRMA System",
      description: "Product photoshoot management platform built from scratch",
      technologies: ["Vue.js", "Node.js", "MySQL", "Express.js", "JWT"],
      period: "Nov 2024 — Mar 2025",
      highlights: [
        "Solo development project",
        "Improved efficiency by 5x",
        "Full-stack implementation"
      ]
    },
    {
      name: "Escort System",
      description: "Business management system for operational efficiency",
      technologies: ["Angular.js", "Node.js", "PostgreSQL", "Express.js"],
      period: "Aug 2024 — Nov 2024",
      highlights: [
        "Full-stack development",
        "Enhanced operational workflows",
        "Database optimization"
      ]
    },
    {
      name: "Business to Distributor System",
      description: "B2D platform for streamlined business operations",
      technologies: ["Vue.js", "Node.js", "MySQL", "Express.js"],
      period: "Apr 2024 — Aug 2024",
      highlights: [
        "Distributed system architecture",
        "Improved business efficiency",
        "Scalable solution"
      ]
    },
    {
      name: "Blog Management System",
      description: "Academic project for content management",
      technologies: ["React.js", "Node.js", "MySQL", "Express.js"],
      period: "Jan 2024 — Mar 2024",
      highlights: [
        "Academic achievement",
        "Clean architecture",
        "User-friendly interface"
      ],
      // detailsUrl: "https://github.com/govindavyas/blog-management",
      // demoUrl: "https://blog-demo.example.com"
    }
  ],

  education: [
    {
      institution: "Sunbeam Infotech Pvt Ltd",
      degree: "PG-DMC",
      period: "Sep 2023 — Feb 2024"
    },
    {
      institution: "KBPCOE Satara",
      degree: "B.Tech Computer Science Engineering",
      period: "Aug 2018 — Oct 2022"
    }
  ],

  achievements: [
    {
      title: "Hackathon Finalist",
      description: "Sunbeam Hackathon Finalist",
      year: "2024"
    },
    {
      title: "Hackathon 2024",
      description: "Healthcare Innovation Award",
      year: "2024"
    },
    {
      title: "NCRTET 2020",
      description: "2nd Prize for LI-FI presentation",
      year: "2020"
    }
  ]
}

// Cube faces data for the rotating cube
export const cubeData = [
  {
    face: "front",
    title: portfolioData.personal.name,
    subtitle: portfolioData.personal.title,
    content: portfolioData.personal.tagline
  },
  {
    face: "back",
    title: "Core Skills",
    subtitle: "Technologies",
    content: [...portfolioData.skills.frontend, ...portfolioData.skills.backend].slice(0, 6).join(", ")
  },
  {
    face: "right",
    title: "Experience",
    subtitle: portfolioData.experience[0].company,
    content: portfolioData.experience[0].role + " | " + portfolioData.experience[0].period
  },
  {
    face: "left",
    title: "Featured Project",
    subtitle: portfolioData.projects[0].name,
    content: portfolioData.projects[0].description
  },
  {
    face: "top",
    title: "Achievements",
    subtitle: portfolioData.achievements[0].title,
    content: portfolioData.achievements[0].description
  },
  {
    face: "bottom",
    title: "Summary",
    subtitle: "Professional",
    content: portfolioData.personal.summary.substring(0, 80) + "..."
  }
]
