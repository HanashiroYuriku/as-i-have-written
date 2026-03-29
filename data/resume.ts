export interface TimelineItem {
  date: string;
  content: string;
  certificateSrc?: string;
  certificateId?: string;
  certificateUrl?: string;
}

export const resumeTimeline: TimelineItem[] = [
  { 
    date: "March 2026", 
    content: "Data Analyst Certification from Udemy. Learned how to analyze data and create visualizations.",
    certificateSrc: "/certificate/UC-83c8a9b7-9757-49d8-ad5e-ac4f2f5d7fcf.jpg", 
    certificateId: "UC-83c8a9b7-9757-49d8-ad5e-ac4f2f5d7fcf",
    certificateUrl: "https://www.udemy.com/certificate/UC-83c8a9b7-9757-49d8-ad5e-ac4f2f5d7fcf/"        
  },
  { 
    date: "November 2025", 
    content: "Graduate with a Bachelor's degree in Informatics from Atma Jaya University Yogyakarta. A journey of learning and growth." 
  },
  { 
    date: "September 2024 - January 2025", 
    content: "Backend Developer Intern at Run System. Contributed to building scalable backend services and APIs." ,
    certificateSrc: "/certificate/be-intern-sertif.jpg",
    certificateId: "11417380"
  },
  { 
    date: "July 2024", 
    content: "Create Profile Website of Manggung Hamlet. A website to show the beauty of Manggung Hamlet." 
  },
  { 
    date: "July 2023 - December 2023", 
    content: "Assistant Lecturer of Data Structures. Guided students through the fascinating world of data structures." 
  },
  { 
    date: "April 2023 - June 2023", 
    content: "Arena Field Member in the Indonesian SAR Robot Contest. Complete obstacles by creating obstacles.", 
    certificateSrc: "/certificate/arena-field-sertif.jpg",
    certificateId: "[-]" 
  },
  { 
    date: "December 2022 - June 2023", 
    content: "Member of Java Programming Study. Explored the world of Java, from basic syntax to OOP concepts.", 
    certificateSrc: "/certificate/java-programming-sertif.jpg",
    certificateId: "[-]"
  },
  { 
    date: "August 2022 - June 2023", 
    content: "Member of the UAJY G-09 Robotics. Wrote my first lines of code to move a machine.", 
    certificateSrc: "/certificate/robotics-sertif.jpg",
    certificateId: "[-]"
  }
];