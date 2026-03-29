
export interface ExperienceImage {
  src: string;    
  caption: string; 
}

export interface Experience {
  id: number;
  title: string;
  role: string;
  period: string;
  description: string[];
  images: ExperienceImage[];
}

export const experiences: Experience[] = [
  {
    id: 6,
    title: "Backend Engineer Intern",
    role: "Backend Engineer",
    period: "September 2024 - January 2025",
    description: [
      "Developed a web-based ERP application with an inventory material management module.",
      "Developed the backend using Golang, Redis for caching, and MariaDB for data management.",
      "Collaborated with the Frontend team to integrate new features."
    ],
    images: [
      { src: "/certificate/be-intern-sertif.jpg", caption: "Intern Certificate" },
      { src: "/documentation-image/intern-documentation-1.jpeg", caption: "Intern Documentation" },
      { src: "/documentation-image/intern-documentation-2.jpeg", caption: "Intern Documentation" }
    ]
  },
  {
    id: 5,
    title: "Assistant Lecturer for Data Structures",
    role: "Assistant Lecturer",
    period: "July 2023 - December 2023",
    description: [
      "Assisting lecturers in conducting and assessing practicums.",
      "Developing modules, exercises, and practicum assignments.",
      "Developing teamwork and C programming skills."
    ],
    images: [
      { src: "/documentation-image/lecturer-assistant.jpeg", caption: "Assistant Lecturer" }
    ]
  },
  {
    id: 4,
    title: "Arena Field Member in the Indonesian SAR Robot Contest",
    role: "Arena Field Member",
    period: "April 2023 - June 2023",
    description: [
      "Assemble and develop 3D arenas according to established designs and requirements.",
    ],
    images: [
      { src: "/certificate/arena-field-sertif.jpg", caption: "Certificate" }
    ]
  },
  {
    id: 3,
    title: "Member of the Java Programming Study",
    role: "Member",
    period: "December 2022 - June 2023",
    description: [
      "Develop Java programming skills.",
      "Develop object-oriented programming (OOP) skills.",
      "Develop design skills using NetBeans."
    ],
    images: [
      { src: "/certificate/java-programming-sertif.jpg", caption: "Certificate" }
    ]
  },
  {
    id: 2,
    title: "Member of the UAJY G-09 Robotics",
    role: "Member",
    period: "August 2022 - June 2023",
    description: [
      "Develop programming skills in C++, Arduino, and electronics.",
    ],
    images: [
      { src: "/certificate/robotics-sertif.jpg", caption: "Certificate" }
    ]
  },
  {
    id: 1,
    title: "Completer at Kumon Indonesia",
    role: "Student",
    period: "September 2012 - June 2018",
    description: [
      "Develop mathematical and logical skills",
    ],
    images: [
      { src: "/certificate/kumon-sertif.jpg", caption: "Certificate" }
    ]
  }
];