import { Mail, MapPin, Phone } from "lucide-react";
import { DiJavascript, DiPython } from "react-icons/di";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { FcPlanner } from "react-icons/fc";
import { FiTool } from "react-icons/fi";
import { GiPipes } from "react-icons/gi";
import { GrSystem } from "react-icons/gr";
import { MdScience } from "react-icons/md";
import { PiMicrosoftExcelLogo, PiPersonSimpleThrowLight } from "react-icons/pi";
import { SiAutocad } from "react-icons/si";

export const contactInfo = [
  {
    icon: Mail,
    Label: "Email",
    value: "adeyinka.ag@gmail.com",
    href: "mailto:adeyinka.ag@gmail.com",
  },
  {
    icon: Phone,
    Label: "Phone",
    value: "+2348123597905",
    href: "tel:+2348123597905",
  },
  {
    icon: MapPin,
    Label: "Location",
    value: "Lagos, Nigeria",
    href: "#",
  },
];

export const socialLinks = [
  {
    icon: FaLinkedinIn,
    href: "http://www.linkedin.com/in/adeolu-adeyinka",
    label: "LinkedIn",
  },

  {
    icon: FaGithub,
    href: "https://github.com/really-riel",
    label: "Github",
  },
];
export const footerSocialLinks = [
  {
    icon: FaLinkedinIn,
    href: "http://www.linkedin.com/in/adeolu-adeyinka",
    label: "LinkedIn",
  },

  {
    icon: FaGithub,
    href: "https://github.com/really-riel",
    label: "Github",
  },
];

export const Experience = [
  {
    type: "work",
    title: "Engineering Support Specialist",
    company: "Guinness Nigeria",
    employmentType: "Contract",
    period: "Nov, 2024. - Present",
    description: "Performed maintenance tasks on bottle and can lines",
    Skills: ["SAP s/4 hana", "Maintenance Planning", "Machine Maintenance"],
  },
  {
    type: "work",
    title: "Web Developer",
    company: "Goldernursh",
    employmentType: "Remote",
    period: "Nov 2023 – May 2024",
    description: "Built and maintained responsive web applications",
    Skills: ["Javascript", "Next. js", "Python", "Tailwind"],
  },
  {
    type: "work",
    title: "Engineering Intern",
    company: "Domitech Engineering Services Ltd.",
    employmentType: "Internship",
    period: "Apr 2022 - Oct 2022.",
    description:
      "Installed and fabricated pipelines for Caterpiller gas generator sets",
    Skills: ["Pipeline installation", "P&ID", "Project engineering", "AutoCAD"],
  },
  {
    type: "work",
    title: "Engineering Intern",
    company: "Ogun–Oshun River Basin Development Authority(O-ORBDA)",
    employmentType: "Internship",
    period: "Aug 2021 - Oct 2021.",
    description: "Carried out maintenance and repairs on Vehicles",
    Skills: ["Maintenance", "Automechnics"],
  },
];

export const researchInterest = [
  "Heat and Mass Transfer",
  "Thermal Energy Storage",
  "Fluid Mechanics",
  "Solar Thermal Technologies",
  "Renewable Energy",
  "AI & ML in Thermal-Fluid Systems",
];

export const hobbies = [
  "Programming",
  "Piano playing",
  "Guitar playing",
  "Reading books",
  "Socializing",
  "Driving cars",
  "Volunteering activities",
  "Traveling",
];

export const skills = [
  {
    title: "Programming",
    skills: [
      {
        name: "Javascript",
        icon: DiJavascript,
      },
      {
        name: "Python",
        icon: DiPython,
      },
    ],
  },
  {
    title: "Software",
    skills: [
      {
        name: "Microsoft Office",
        icon: PiMicrosoftExcelLogo,
      },
      {
        name: "SAP S/4 HANA",
        icon: GrSystem,
      },
      {
        name: "AutoCAD",
        icon: SiAutocad,
      },
    ],
  },
  {
    title: "Others",
    skills: [
      {
        name: "Research",
        icon: MdScience,
      },
      {
        name: "Maintenance Planning",
        icon: FcPlanner,
      },
      {
        name: "Welding",
        icon: FiTool,
      },
      {
        name: "Pipeline Installion",
        icon: GiPipes,
      },
    ],
  },
];
