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

export const DomitechGallery = [
  {
    id: 1,
    image: "/images/Domitech/Domitech_5_me.jpeg",
    caption: "Me at Work",
  },
  {
    id: 2,
    image: "/images/Domitech/Domitech_1_enclosure_frabrication.jpeg",
    caption: "Enclosure Fabrication For Caterpillar Gas Generator Set",
  },
  {
    id: 3,
    image: "/images/Domitech/Domitech_2_enclosure_fabrication.jpeg",
    caption: "Enclosure Fabrication For Caterpillar Gas Generator Set",
  },
  {
    id: 4,
    image: "/images/Domitech/Domitech_3_enclosure.jpeg",
    caption: "Enclosure Fabrication For Caterpillar Gas Generator Set",
  },
  {
    id: 5,
    image: "/images/Domitech/Domitech_4_enclosure_fabrication.jpeg",
    caption: "Enclosure Fabrication For Caterpillar Gas Generator Set",
  },
  {
    id: 6,
    image: "/images/Domitech/Domitech_5_me.jpeg",
    caption: "Me at Work",
  },
  {
    id: 7,
    image: "/images/Domitech/Domitech_6_pipeline_installation.jpeg",
    caption: "Pipeline installation and Fabrication",
  },
  {
    id: 8,
    image: "/images/Domitech/Domitech_7_me.jpeg",
    caption: "Me at Work",
  },
  {
    id: 9,
    image: "/images/Domitech/Domitech_8_Fix_bad_fan.jpeg",
    caption: "Fixing Bad Fan on Caterpillar Gas Generator Set",
  },
  {
    id: 10,
    image: "/images/Domitech/Domitech_9_insulation.jpeg",
    caption: "Rock-wool inner wall insulation for generator enclosures",
  },
  {
    id: 11,
    image: "/images/Domitech/Domitech11_enclosure_fabrication.jpeg",
    caption: "Enclosure Fabrication For Caterpillar Gas Generator Set",
  },
];

const VolunteeringGallery = [
  { id: 1, image: "", caption: "" },
  { id: 2, image: "", caption: "" },
  { id: 3, image: "", caption: "" },
  { id: 4, image: "", caption: "" },
];
const GraduationPhoto = [
  { id: 1, image: "", caption: "" },
  { id: 2, image: "", caption: "" },
  { id: 3, image: "", caption: "" },
  { id: 4, image: "", caption: "" },
];

export const WorkExperienceData = [
  {
    type: "work",
    title: "Engineering Support Specialist",
    company: "Guinness Nigeria",
    employmentType: "Contract",
    period: "Nov, 2024. - Present",
    duties: [
      "Improved machine availability from 65% to 76% by managing spares reservation and analyzing downtime for key packaging line machines.",
      "Utilized SAP to plan, track, and document routine and breakdown maintenance activities on packaging line machines.",
      "Ensured compliance with safety and quality standards in the handling and filling of glass bottles and cans.",
    ],
    gallery: [
      {
        id: 1,
        image: "/images/Guinness/Guinness_ machine repair.jpeg",
        caption: "Machine maintenace",
      },
      {
        id: 2,
        image: "/images/Guinness/Guinness_1_at office.jpeg",
        caption: "Me at the Office",
      },
      {
        id: 3,
        image: "/images/Guinness/Guinness_HMI operation.jpeg",
        caption: "Operation of the HMI",
      },
      {
        id: 4,
        image: "/images/Guinness/Guinness_Labeller overhaul_2.jpeg",
        caption: "Labeller Machine Overhaul",
      },
      {
        id: 5,
        image: "/images/Guinness/Guinness_Labeller overhaul.jpeg",
        caption: "Labeller Machine Overhaul",
      },
      {
        id: 6,
        image: "/images/Guinness/Guinness_machine_repair.jpeg",
        caption: "Machine Maintenance",
      },
      {
        id: 7,
        image: "/images/Guinness/guinness_office.jpeg",
        caption: "At the Office",
      },
      {
        id: 8,
        image: "/images/Guinness/Guinness_Work.jpeg",
        caption: "At the Office",
      },
    ],
  },
  {
    type: "work",
    title: "Web Developer",
    company: "Goldernursh",
    employmentType: "Remote",
    period: "Nov 2023 – May 2024",
    duties: [
      "Developed responsive front-end interfaces using Next.js and Typescript to improve user experience and performance.",
      "Integrated Firebase API services (Authentication, Firestore, Storage) to build secure and scalable backend functionality.",
      "Collaborated closely with a web designer to translate UI/UX designs into functional, high-quality web interfaces.",
    ],
    gallery: [],
  },
  {
    type: "work",
    title: "Engineering Intern",
    company: "Domitech Engineering Services Ltd.",
    employmentType: "Internship",
    period: "Apr 2022 - Oct 2022.",
    duties: [
      "Conducted fabrication and installation of pipelines for Caterpillar’s 5MW gas generator set,ensuring efficient system operation.",
      "Contributed to structural steel erection, gas train installation, and system maintenance.",
      "Supervised workers to maintain quality standards and meet project deadlines.",
    ],
    gallery: [
      {
        id: 1,
        image: "/images/Domitech/Domitech_5_me.jpeg",
        caption: "Me at Work",
      },
      {
        id: 2,
        image: "/images/Domitech/Domitech_1_enclosure_frabrication.jpeg",
        caption: "Enclosure Fabrication For Caterpillar Gas Generator Set",
      },
      {
        id: 3,
        image: "/images/Domitech/Domitech_2_enclosure_fabrication.jpeg",
        caption: "Enclosure Fabrication For Caterpillar Gas Generator Set",
      },
      {
        id: 4,
        image: "/images/Domitech/Domitech_3_enclosure.jpeg",
        caption: "Enclosure Fabrication For Caterpillar Gas Generator Set",
      },
      {
        id: 5,
        image: "/images/Domitech/Domitech_4_enclosure_fabrication.jpeg",
        caption: "Enclosure Fabrication For Caterpillar Gas Generator Set",
      },
      {
        id: 6,
        image: "/images/Domitech/Domitech_5_me.jpeg",
        caption: "Me at Work",
      },
      {
        id: 7,
        image: "/images/Domitech/Domitech_6_pipeline_installation.jpeg",
        caption: "Pipeline installation and Fabrication",
      },
      {
        id: 8,
        image: "/images/Domitech/Domitech_7_me.jpeg",
        caption: "Me at Work",
      },
      {
        id: 9,
        image: "/images/Domitech/Domitech_8_Fix_bad_fan.jpeg",
        caption: "Fixing Bad Fan on Caterpillar Gas Generator Set",
      },
      {
        id: 10,
        image: "/images/Domitech/Domitech_9_insulation.jpeg",
        caption: "Rock-wool inner wall insulation for generator enclosures",
      },
      {
        id: 11,
        image: "/images/Domitech/Domitech11_enclosure_fabrication.jpeg",
        caption: "Enclosure Fabrication For Caterpillar Gas Generator Set",
      },
    ],
  },
  {
    type: "work",
    title: "Engineering Intern",
    company: "Ogun–Oshun River Basin Development Authority(O-ORBDA)",
    employmentType: "Internship",
    period: "Aug 2021 - Oct 2021.",
    duties: [
      "Diagnosed and repaired vehicle mechanical systems, applying preventive maintenance to improve reliability.",
      "Documented maintenance activities",
    ],
    gallery: [],
  },
];
