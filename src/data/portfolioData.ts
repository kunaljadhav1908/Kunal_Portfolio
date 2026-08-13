import {
  Project,
  SkillCategory,
  ExperienceItem,
  EducationItem,
  CertificationItem,
} from '../types';

export const personalInfo = {
  name: "Kunal Rajendra Jadhav",
  role: "Python Full Stack Developer",
  graduationYear: "2026",
  degree: "B.Tech Computer Science Engineering",
  location: "Pune, Maharashtra, India",
  email: "kunaljadhav1982020@gmail.com",
  github: "https://github.com/kunaljadhav1908",
  linkedin: "https://www.linkedin.com/in/kunal-jadhav-1753492bb",
  heroBio: "Python Full Stack Developer with hands-on experience building responsive web applications using Python, Django, React.js, JavaScript, SQL, PostgreSQL, and modern web technologies.",
  aboutBio: [
    "Kunal Rajendra Jadhav is a Python Full Stack Developer and 2026 B.Tech Computer Science Engineering graduate with hands-on experience building responsive web applications.",
    "He has experience with frontend development, backend API development, database management, authentication, CRUD operations, and full-stack application development.",
    "His primary technologies include Python, Django, Django REST Framework, React.js, JavaScript, HTML, CSS, Bootstrap, PostgreSQL, SQLite, and REST APIs."
  ],
  stats: [
    { label: "Graduation Year", value: "2026" },
    { label: "Full Stack Projects", value: "6+" },
    { label: "Industry Internship", value: "1" },
    { label: "Simulations & Certifications", value: "3" },
  ]
};

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend Development",
    categoryName: "Frontend",
    icon: "Layout",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript ES6+",
      "React.js",
      "Bootstrap",
      "Vite",
      "Responsive Design"
    ]
  },
  {
    id: "backend",
    title: "Backend Development",
    categoryName: "Backend",
    icon: "Server",
    skills: [
      "Python",
      "Django",
      "Django REST Framework",
      "REST APIs",
      "JWT Authentication",
      "Authorization",
      "Server-side Rendering"
    ]
  },
  {
    id: "database",
    title: "Database Management",
    categoryName: "Database",
    icon: "Database",
    skills: [
      "MySQL",
      "SQLite",
      "PostgreSQL",
      "Database Design",
      "CRUD Operations",
      "Query Optimization"
    ]
  },
  {
    id: "tools",
    title: "Tools & Technologies",
    categoryName: "Tools",
    icon: "Cpu",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Render",
      "Vercel",
      "npm",
      "pip",
      "Virtual Environments"
    ]
  },
  {
    id: "concepts",
    title: "Core Concepts",
    categoryName: "Core Concepts",
    icon: "Code2",
    skills: [
      "OOP",
      "SOLID Principles",
      "CRUD",
      "Authentication Systems",
      "REST API Basics",
      "MVC Architecture",
      "Component-Based Architecture"
    ]
  }
];

export const projects: Project[] = [
  {
    id: "bus-driver-playlist",
    title: "Bus Driver Playlist",
    subtitle: "Web-Based Bus Driver Playlist Application",
    category: "Frontend",
    technologies: ["React.js", "JavaScript", "Tailwind CSS", "Web Audio"],
    description: "Web-based bus driver playlist and route soundtrack management application designed for smooth transit audio orchestration and quick track switching during transit operations.",
    features: [
      "Route playlist management",
      "Interactive audio playback controls",
      "Custom track list selection",
      "Quick route track switching",
      "Responsive mobile & desktop UI"
    ],
    githubUrl: "https://github.com/kunaljadhav1908/BUS_DRIVER_PLAYLIST",
    liveDemoUrl: "https://illustrious-ganache-11e308.netlify.app/",
    isFeatured: true,
    thumbnailPattern: "bus"
  },
  {
    id: "my-dairy",
    title: "My_Dairy",
    subtitle: "Full Stack Dairy/Milk Business Management System",
    category: "Full Stack",
    technologies: ["React.js", "JavaScript"],
    description: "Developed a web-based dairy management system to streamline milk collection, customer, and billing operations for dairy businesses.",
    features: [
      "Production data management",
      "Customer record management",
      "Daily transaction management",
      "Reusable React components",
      "Responsive UI"
    ],
    githubUrl: "https://github.com/kunaljadhav1908/My_Dairy",
    liveDemoUrl: "https://my-dairy-sable.vercel.app/",
    isFeatured: false,
    thumbnailPattern: "dairy"
  },
  {
    id: "kcart",
    title: "KCart",
    subtitle: "Full Stack E-commerce Website",
    category: "Full Stack",
    technologies: ["React.js", "Vite", "Django REST Framework", "PostgreSQL", "JWT Authentication"],
    description: "Built a full-stack e-commerce application with Django REST Framework APIs for products, users, and cart management.",
    features: [
      "Product management",
      "User authentication",
      "JWT authentication",
      "Shopping cart workflow",
      "Add/update/remove cart items",
      "PostgreSQL database integration",
      "REST API integration"
    ],
    githubUrl: "https://github.com/kunaljadhav1908/KCart",
    liveDemoUrl: "https://kcart-shopingplatform.ai.studio",
    isFeatured: false,
    thumbnailPattern: "kcart"
  },
  {
    id: "tweetbar",
    title: "TweetBar",
    subtitle: "Full Stack Microblogging Web Application",
    category: "Full Stack",
    technologies: ["Django", "Python", "React.js", "HTML5", "CSS3", "Bootstrap", "SQLite"],
    description: "Developed a full-stack social posting platform with secure login, post creation and editing, search functionality, CRUD operations, database integration, and a responsive dark-themed UI.",
    features: [
      "User authentication",
      "Post creation & editing",
      "Search functionality",
      "CRUD operations",
      "Database integration",
      "Responsive UI",
      "Dark theme interface"
    ],
    liveDemoUrl: "https://tweet-story-app.onrender.com",
    isFeatured: false,
    thumbnailPattern: "tweetbar"
  },
  {
    id: "cab-management",
    title: "Cab Management System",
    subtitle: "Cab Booking & Fleet Management Platform",
    category: "Full Stack",
    technologies: ["Python", "Django", "PostgreSQL", "Bootstrap"],
    description: "Built a cab booking and management platform with user authentication, ride booking workflow, real-time status tracking, and database integration for drivers and bookings.",
    features: [
      "User authentication",
      "Ride booking workflow",
      "Driver management",
      "Booking management",
      "Status tracking",
      "Database integration"
    ],
    isFeatured: false,
    thumbnailPattern: "cab"
  },
  {
    id: "my-blog",
    title: "MyBlog",
    subtitle: "MyBlog Web Application",
    category: "Backend",
    technologies: ["Python", "Django", "HTML5", "CSS3", "SQLite"],
    description: "Developed a blogging platform with full CRUD operations, dynamic content rendering, and a responsive user interface.",
    features: [
      "Create blog posts",
      "Read blog posts",
      "Update blog posts",
      "Delete blog posts",
      "Dynamic content rendering",
      "Responsive UI"
    ],
    isFeatured: false,
    thumbnailPattern: "blog"
  }
];

export const experience: ExperienceItem[] = [
  {
    id: "maxgen-internship",
    role: "Web Development Intern",
    company: "Maxgen Technologies Pvt. Ltd.",
    location: "Pune, Maharashtra, India",
    duration: "Internship Period",
    description: "Worked on full-stack web applications, gaining practical exposure to backend development, debugging, database handling, feature enhancement, and API integration alongside senior developers.",
    highlights: [
      "Built and integrated Django REST APIs for dynamic full-stack applications.",
      "Optimized database schemas and SQL/ORM queries for improved response times.",
      "Enhanced user authentication and CRUD operations across multiple modules.",
      "Collaborated on responsive frontend designs ensuring seamless cross-device performance."
    ],
    skillsUsed: ["Python", "Django", "Django REST Framework", "SQL", "JavaScript", "REST APIs", "Debugging"]
  }
];

export const education: EducationItem[] = [
  {
    id: "btech-cs",
    degree: "B.Tech in Computer Science Engineering",
    institution: "D Y Patil Agriculture and Technical University",
    year: "2026",
    grade: "6.53",
    gradeType: "CGPA",
    highlights: [
      "Specialization in Computer Science & Software Engineering",
      "Hands-on coursework in Data Structures, OOP, Web Engineering & Database Management",
      "Graduating Class of 2026"
    ]
  },
  {
    id: "hsc-12th",
    degree: "HSC (12th Grade)",
    institution: "Balawant College, Vita",
    year: "Completed",
    grade: "71%",
    gradeType: "Percentage",
    highlights: [
      "Higher Secondary Education with Science Focus",
      "Strong foundation in Mathematics and Computer Fundamentals"
    ]
  }
];

export const certifications: CertificationItem[] = [
  {
    id: "cert-forage",
    title: "Forage Software Engineering Job Simulation",
    organization: "Forage",
    category: "Job Simulation",
    skills: ["Software Engineering", "Code Architecture", "Refactoring", "System Design"]
  },
  {
    id: "cert-tata",
    title: "Tata Software Engineering Job Simulation",
    organization: "Tata / Forage",
    category: "Job Simulation",
    skills: ["Full Stack Development", "Problem Solving", "Software Architecture"]
  },
  {
    id: "cert-deloitte",
    title: "Deloitte Software Engineering Job Simulation",
    organization: "Deloitte / Forage",
    category: "Job Simulation",
    skills: ["Enterprise Development", "Technology Consulting", "Software Engineering"]
  }
];
