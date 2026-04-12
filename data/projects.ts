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
}

export const projects: Project[] = [
  {
    id: 'proj-7',
    folderName: 'Personal Project',
    title: 'Ayaka [BE GO Template]',
    date: 'April 2026',
    description: 'A Golang (Go) Backend API template designed with Clean Architecture. This project focuses on scalability, security, and seamless team collaboration.',
    tech: ['Golang', 'PostgreSQL'],
    github: 'https://github.com/HanashiroYuriku/be-ayaka',
    images: [],
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