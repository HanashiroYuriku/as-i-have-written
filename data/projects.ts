export interface Project {
  id: string;
  folderName: string;
  title: string;
  date: string;
  description: string;
  tech: string[];
  github: string;
  images: string[];
  liveUrl?: string;
  status?: 'Ongoing' | 'Finished' | 'Maintained';
  license?: string;
  features?: string[];
}

export const projects: Project[] = [
  {
    id: 'proj-9',
    folderName: 'Personal Project',
    title: 'Robin [Lyrics Player TUI]',
    date: 'May 2026',
    description: 'A sophisticated Terminal User Interface (TUI) application that renders song lyrics with a synchronized typewriter effect. Built with a strict separation of concerns to ensure clean code and robust terminal state management.',
    tech: ['Golang', 'Bubble Tea', 'Lipgloss'],
    github: 'https://github.com/HanashiroYuriku/robin',
    images: [],
    status: 'Finished',
    license: 'MIT License',
    features: [
      'Model-View-Update (MVU)',
      'Repository Pattern',
      'Synchronized Rendering Engine',
      'Data-Driven Configuration',
      'Separation of Concerns'
    ]
  },
  {
    id: 'proj-8',
    folderName: 'Personal Project',
    title: 'Furina [RESTful API]',
    date: 'April 2026',
    description: 'Built on top of the Ayaka Clean Architecture template. A scalable RESTful API service designed to calculate Genshin Impact character ascensions, track weapon upgrades, and manage daily farming schedules efficiently.',
    tech: ['Golang', 'PostgreSQL', 'Fiber'],
    github: 'https://github.com/HanashiroYuriku/furina',
    images: [],
    status: 'Ongoing',
    features: ['RESTful Design', 
      'Time-based Schedule Tracker', 
      'Resource Calculation Engine', 
      'Inventory Management',
      'Automated Farming Roadmap'
    ]
  },
  {
    id: 'proj-7',
    folderName: 'Personal Project',
    title: 'Ayaka [BE GO Template]',
    date: 'April 2026',
    description: 'A Golang (Go) Backend API template designed with Clean Architecture. This project focuses on scalability, security, and seamless team collaboration.',
    tech: ['Golang', 'PostgreSQL', 'Testify', 'JWT', 'Fiber', 'SMTP'],
    github: 'https://github.com/HanashiroYuriku/ayaka',
    images: [],
    status: 'Maintained',
    license: "MIT License",
    features: ['Hexagonal Architecture', 
      'GORM', 'Custom Validator', 
      'SMTP Integration', 
      'Global Error Handler', 
      'JWT Authentication', 
      'RBAC', 
      'Transaction Manager', 
      'Swagger', 
      'Structured Logging', 
      'Standardized API Response', 
      'Bcrypt Hashing',
      'Unit Testing with Mocking',
      'Docker'
    ]
  },
  {
    id: 'proj-6',
    folderName: 'Training Project',
    title: 'Data Analyst Training',
    date: 'March 2026',
    description: 'A dashboard that visualizes about Sales Product, Netflix Movies, Electric Vehicle, and Bike Sales. This project is part of the Data Analyst Certification from Udemy.',
    tech: ['Excel', 'MySQL', 'Power BI', 'Tableau'],
    github: '',
    images: ['/projects/data-analyst-1/image-1.jpg', '/projects/data-analyst-1/image-2.jpg', '/projects/data-analyst-1/image-3.jpg', '/projects/data-analyst-1/image-4.jpg', '/projects/data-analyst-1/image-5.png', '/projects/data-analyst-1/image-6.png'],
  },
  {
    id: 'proj-5',
    folderName: 'Intern',
    title: 'ERP on Web',
    date: 'January 2025',
    description: 'Developed a web-based ERP with an inventory material management module.',
    tech: ['Golang', 'MariaDB', 'Redis'],
    github: '',
    images: [],
  },
  {
    id: 'proj-4',
    folderName: 'Profile Website',
    title: 'Profile Website of Manggung Hamlet',
    date: 'July 2024',
    description: 'A website to show the beauty of Manggung Hamlet.',
    tech: ['React'],
    github: '',
    images: ['/projects/manggung-website/manggung-gk-thumbnail.jpg', '/projects/manggung-website/manggung-gk-thumbnail-2.png'],
    liveUrl: 'https://manggunggunungkidul.vercel.app/'
  },
  {
    id: 'proj-3',
    folderName: 'Academic Project',
    title: 'Bread Store [Mobile & Web]',
    date: 'June 2024',
    description: 'As a backend role, I developed a Restful API for a bread store application with features like inventory management, sales tracking, and customer management.',
    tech: ['PHP', 'Laravel', 'MySQL', 'Flutter'],
    github: '',
    images: []
  },
  {
    id: 'proj-2',
    folderName: 'Academic Project',
    title: 'Laundry Application [Web]',
    date: 'December 2023',
    description: 'Developing a laundry website that facilitates users in ordering laundry pick-up and making washing machine rental reservations.',
    tech: ['PHP', 'Laravel', 'MySQL'],
    github: '',
    images: []
  },
  {
    id: 'proj-1',
    folderName: 'Academic Project',
    title: 'Restaurant Application [Mobile]',
    date: 'December 2023',
    description: 'Develop a restaurant mobile application that facilitates users to order food.',
    tech: ['PHP', 'Laravel', 'MySQL', 'Flutter'],
    github: '',
    images: []
  }
];