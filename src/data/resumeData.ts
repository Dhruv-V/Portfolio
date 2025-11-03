// Professional data extracted from Dhruv Vashishth's resume

export const personalInfo = {
  name: "Dhruv Vashishth",
  title: "Frontend Developer",
  subtitle: "Building scalable web and mobile applications",
  email: "dhruvvashishth009@gmail.com",
  phone: "+91-7827167251",
  location: "Faridabad, Haryana, India",
  bio: "Frontend Developer with 2+ years of experience building scalable web and mobile applications using React, React Native, and TypeScript. Proven track record in modernizing legacy platforms, creating reusable component libraries, and leading teams to deliver performant, user-friendly applications. Skilled in state management, performance optimization, and CI/CD automation. Passionate about clean code, UX excellence, and driving end-to-end project success.",
  links: {
    linkedin: "https://www.linkedin.com/in/dhruv-vashishth-274694206/",
    github: "https://github.com/Dhruv-V",
    resume: "https://dhruv-v.github.io/dhruv-resume/resume.pdf",
    portfolio: "https://dhruv-v.github.io/Portfolio",
  },
};

export const skills = {
  frontend: [
    { name: "React", level: 95 },
    { name: "React Native", level: 90 },
    { name: "TypeScript", level: 90 },
    { name: "JavaScript", level: 95 },
    { name: "Redux", level: 85 },
    { name: "Redux-Saga", level: 85 },
    { name: "Zustand", level: 85 },
    { name: "React Query", level: 80 },
    { name: "Zod", level: 75 },
    { name: "Tailwind", level: 90 },
    { name: "Radix UI", level: 85 },
    { name: "React Hook Form", level: 85 },
  ],
  backend: [
    { name: "Node.js", level: 75 },
    { name: "Express.js", level: 75 },
    { name: "MongoDB", level: 70 },
    { name: "SQL", level: 70 },
  ],
  tools: [
    { name: "Git", level: 90 },
    { name: "GitHub Actions (CI/CD)", level: 85 },
    { name: "Agile/Scrum", level: 85 },
    { name: "JIRA", level: 80 },
  ],
};

export const experience = [
  {
    company: "Veersa Technology",
    role: "Software Developer",
    type: "On-Site",
    period: "July 2023 – Present",
    projects: [
      {
        name: "Scheduling Platform",
        period: "Feb 2025 - Present",
        stack: ["React", "TypeScript", "Zustand", "Zod", "Web Components"],
        achievements: [
          "Leading a team to deliver scheduling features as reusable Web Components",
          "Built and maintain a reusable GitHub UI package using Radix UI (inputs, accordions, dialogs, tables, calendars, etc.)",
          "Implemented Zustand for feature-level state management and Zod + React Hook Form for type-safe validation",
          "Developed reusable API hooks with React Query for cleaner data-fetching structure",
          "Set up GitHub Actions pipelines for automated deployments",
          "Established module-based repo structure, optimizing performance with useMemo/useCallback and improving maintainability",
          "Enhanced UI/UX with responsive Tailwind components and clear business logic separation",
        ],
      },
      {
        name: "Legacy Modernization",
        period: "July 2023 - Feb 2025",
        stack: ["React", "TypeScript", "Redux", "Redux-Saga"],
        achievements: [
          "Led migration of a legacy .NET application to React + TypeScript, improving maintainability and performance",
          "Designed and implemented 10+ reusable components and structured 50+ screens for consistent architecture",
          "Implemented caching, optimized API calls, and refactored Redux-Saga state management → reduced page load times (5s → 3s in staging, 40% faster)",
          "Reduced initial load size by 60% via lazy loading, bundle optimization, and efficient rendering",
          "Built a JSON-driven dynamic form system and a flexible table component supporting complex business cases",
          "Contributed to UX improvements through streamlined architecture and predictable state management",
        ],
      },
      {
        name: "Health Tracking App",
        period: "July 2024 - Feb 2025",
        stack: ["React Native", "Expo"],
        achievements: [
          "Led frontend development for a mobile health app with role-based access and OTP authentication",
          "Integrated real-time analytics and secure API communication",
          "Improved React Native performance with FlatList optimizations, memoization, and native integrations",
        ],
      },
    ],
  },
  {
    company: "Veersa Technology",
    role: "Software Developer Intern",
    type: "On-Site",
    period: "Feb 2023 – July 2023",
    projects: [
      {
        name: "Frontend Development & UI Enhancements",
        stack: [],
        achievements: [
          "Developed configurable Program Preferences UI with persistent defaults via local storage",
          "Built data resolvers to fetch and manipulate API data, ensuring smooth backend integration",
          "Collaborated closely with QA to resolve critical bugs via JIRA, improving application stability",
          "Contributed usability and performance enhancements through iterative design improvements",
        ],
      },
    ],
  },
];

export const projects = [
  {
    id: "scheduling-platform",
    title: "Enterprise Scheduling Platform",
    category: "Web Application",
    description:
      "Led development of a modern scheduling platform with reusable Web Components and a GitHub UI package, focusing on performance and maintainability.",
    techStack: [
      "React",
      "TypeScript",
      "Zustand",
      "Zod",
      "Radix UI",
      "Tailwind CSS",
      "React Hook Form",
    ],
    highlights: [
      "Built comprehensive GitHub UI package with Radix UI components",
      "Implemented Zustand for feature-level state management",
      "Type-safe validation with Zod + React Hook Form",
      "GitHub Actions CI/CD pipelines for automated deployments",
      "Module-based architecture with performance optimizations",
    ],
    metrics: {
      components: "10+",
      team: "Leading team delivery",
    },
    images: [],
  },
  {
    id: "legacy-modernization",
    title: "Legacy .NET to React Migration",
    category: "Modernization",
    description:
      "Led complete migration of a legacy .NET application to modern React + TypeScript stack, achieving significant performance improvements.",
    techStack: ["React", "TypeScript", "Redux", "Redux-Saga", "SCSS"],
    highlights: [
      "Designed 10+ reusable components",
      "Structured 50+ screens with consistent architecture",
      "Built JSON-driven dynamic form system",
      "Created flexible table component for complex business cases",
    ],
    metrics: {
      loadTimeImprovement: "40% faster (5s → 3s)",
      sizeReduction: "60% smaller initial load",
      components: "10+",
      screens: "50+",
    },
    images: [],
  },
  {
    id: "health-tracking-app",
    title: "Mobile Health Tracking App",
    category: "Mobile Application",
    description:
      "Led frontend development for a mobile health tracking application with role-based access and OTP authentication.",
    techStack: ["React Native", "Expo", "TypeScript", "Redux"],
    highlights: [
      "Role-based access control implementation",
      "OTP authentication system",
      "Real-time analytics integration",
      "Secure API communication",
      "FlatList optimizations for performance",
      "Memoization and native integrations",
    ],
    metrics: {
      platform: "React Native",
      features: "Role-based access + OTP",
    },
    images: [],
  },
  {
    id: "ui-component-library",
    title: "Reusable UI Component Library",
    category: "Component Library",
    description:
      "Created and maintained a comprehensive reusable UI component library using Radix UI and Tailwind CSS.",
    techStack: ["React", "TypeScript", "Radix UI", "Tailwind CSS", "Storybook"],
    highlights: [
      "Inputs, accordions, dialogs, tables, calendars",
      "Full TypeScript support",
      "Accessibility-first approach",
      "Comprehensive documentation",
      "Used across multiple projects",
    ],
    metrics: {
      components: "GitHub UI package",
      usage: "Production-ready",
    },
    images: [],
  },
];

export const achievements = [
  {
    title: "Achiever of the Month Award",
    description: "Received for my contributions to the project",
    icon: "🏆",
  },
  {
    title: "Recognition Award",
    description:
      "Awarded bonus by the project manager for exceptional performance and dedication",
    icon: "⭐",
  },
];

export const education = {
  degree: "Bachelor of Technology - Computer Science",
  institution: "Deenbandhu Choturam University of Science and Technology",
  location: "Sonipat, Haryana, India",
  period: "August 2019 - July 2023",
  gpa: "8.01",
  courses: [
    "Object-Oriented Programming",
    "Operating Systems",
    "Data Structures",
    "Analysis Of Algorithms",
    "Database Management System",
  ],
};
