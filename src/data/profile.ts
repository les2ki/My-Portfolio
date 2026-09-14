import type { PortfolioProfile } from "@/types/portfolio";

export const profile = {
  initials: "LM",
  name: "Lesiba Lucky Manala",
  role: "Computer Systems Engineering student",
  availability: "Work Integrated Learning (WIL) / Internship opportunities",
  hero: {
    lead: "Turning",
    emphasis: "ideas",
    trail: "into real working systems.",
  },
  intro:
    "I'm a final-year Computer Systems Engineering student at Tshwane University of Technology, building practical solutions across industrial automation, embedded systems, IoT, and software engineering.",
  about:
    "I enjoy working where hardware and software meet: understanding the constraints, finding the root cause, and building reliable systems that work end-to-end.",
  skills: [
    "Industrial automation",
    "Embedded systems & IoT",
    "Software development",
    "Systems troubleshooting",
  ],
  techStack: [
    "C++",
    "Embedded C",
    "Python",
    "C#",
    "Assembly",
    "HTML / CSS",
    "TypeScript",
    "Oracle SQL",
    "ESP32",
    "Arduino Uno",
    "FPGAs",
    "PLC / Ladder Logic",
    "SCADA / HMI",
    "Unity 3D / ML-Agents",
    "Git",
    "Linux",
    "Microsoft Office Suite",
    "Prototyping tools (Fritzing, Tinkercad, Proteus)",
    "ROS (Robot Operating System)",
  ],
  skillGroups: [
    {
      title: "Industrial automation",
      icon: "automation",
      items: ["PLC programming", "SCADA / HMI dashboards", "Sensor interfacing", "System commissioning"],
    },
    {
      title: "Embedded systems & IoT",
      icon: "embedded",
      items: ["PWM / ADC integration", "Real-time systems", "Bluetooth and serial communication", "Wireless sensor networks"],
    },
    {
      title: "Software development",
      icon: "software",
      items: ["Object-oriented C++", "Embedded C","System design and architecture", "Web development"],
    },
    {
      title: "Systems practice",
      icon: "networking",
      items: ["Circuit design", "Hardware troubleshooting", "Network configuration", "Root-cause analysis"],
    },
  ],
  email: "lesibamanala793@gmail.com",
  phone: "+27 68 484 6156",
  linkedin: "https://www.linkedin.com/in/lesiba-manala",
  github: "https://github.com/les2ki",
  location: "Gauteng, Pretoria, South Africa",
  resumeUrl: "/documents/Lesiba%20Lucky%20Manala._Resume.pdf",
} satisfies PortfolioProfile;
