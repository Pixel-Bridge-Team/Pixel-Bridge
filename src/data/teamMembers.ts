export type TeamMember = {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;

  location: string;
  experience: string;

  skills: string[];

  socials: {
    github?: string;
    linkedin?: string;
    instagram?: string;
    facebook?: string;
  };
};

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Sophia Carter",
    role: "Frontend Developer",
    image:
      "/assests/images/team/profile.png",

    bio: "Sophia creates modern responsive interfaces with strong attention to animations, accessibility, clean UI systems, and high-performance frontend architecture.",

    location: "San Francisco, USA",
    experience: "4+ Years",

    skills: ["React", "Next.js", "Tailwind CSS"],

    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
      facebook: "https://facebook.com",
    },
  },

  {
    id: 2,
    name: "Emma Rodriguez",
    role: "Creative Designer",
    image:
      "/assests/images/team/profile.png",

    bio: "Emma specializes in modern visual design, branding systems, UI/UX experiences, and professional creative workflows for digital products.",

    location: "Madrid, Spain",
    experience: "5+ Years",

    skills: ["Figma", "Illustrator", "Photoshop"],

    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
      facebook: "https://facebook.com",
    },
  },

  {
    id: 3,
    name: "Olivia Bennett",
    role: "Full Stack Developer",
    image:
      "/assests/images/team/profile.png",

    bio: "Olivia develops scalable full stack applications with modern frontend technologies, secure backend APIs, and optimized deployment workflows.",

    location: "Berlin, Germany",
    experience: "6+ Years",

    skills: ["Node.js", "Next.js", "MongoDB"],

    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
      facebook: "https://facebook.com",
    },
  },

  {
    id: 4,
    name: "Isabella Moore",
    role: "Video Editor",
    image:
      "/assests/images/team/profile.png",

    bio: "Isabella produces engaging cinematic edits, motion graphics, and social media campaigns for modern brands and startups.",

    location: "London, UK",
    experience: "3+ Years",

    skills: ["React", "Tailwind", "Bootstrap"],

    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
      facebook: "https://facebook.com",
    },
  },

  {
    id: 5,
    name: "Mia Thompson",
    role: "UI Engineer",
    image:
      "/assests/images/team/profile.png",

    bio: "Mia focuses on elegant user interfaces, component systems, responsive layouts, and seamless user experiences across modern web platforms.",

    location: "Toronto, Canada",
    experience: "4+ Years",

    skills: ["React", "Tailwind CSS", "TypeScript"],

    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
      facebook: "https://facebook.com",
    },
  },

  {
    id: 6,
    name: "Charlotte Davis",
    role: "Product Designer",
    image:
      "/assests/images/team/profile.png",

    bio: "Charlotte designs clean digital experiences with a focus on user-centered systems, mobile responsiveness, and visual storytelling.",

    location: "Paris, France",
    experience: "5+ Years",

    skills: ["Figma", "Illustrator", "Adobe XD"],

    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
      facebook: "https://facebook.com",
    },
  },
  {
    id: 7,
    name: "Fatima Ahmadi",
    role: "Backend Developer",
    image:
      "/assests/images/team/profile.png",

    bio: "Fatima creates modern responsive interfaces with strong attention to animations, accessibility, clean UI systems, and high-performance frontend architecture.",

    location: "San Francisco, USA",
    experience: "4+ Years",

    skills: ["React", "Next.js", "Tailwind CSS"],

    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
      facebook: "https://facebook.com",
    },
  },
  {
    id: 8,
    name: "Somayia Noori",
    role: "Frontend Developer",
    image:
      "/assests/images/team/profile.png",

    bio: "Somayia creates modern responsive interfaces with strong attention to animations, accessibility, clean UI systems, and high-performance frontend architecture.",

    location: "San Francisco, USA",
    experience: "4+ Years",

    skills: ["React", "Next.js", "Tailwind CSS"],

    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
      facebook: "https://facebook.com",
    },
  },
];