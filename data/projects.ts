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
    images: ['/manggung-gk-thumbnail.jpg', 'manggung-gk-thumbnail-2.png'],
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