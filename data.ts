import { Mail, MapPin, Phone } from "lucide-react";
import { DiJavascript, DiPython } from "react-icons/di";
import { FaGithub, FaLinkedin, FaLinkedinIn } from "react-icons/fa6";
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
    icon: FaLinkedin,
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

export const GalleryData = [
  {
    id: 1,
    type: "Graduation & Induction",
    galleryPhotos: [
      {
        id: 1,
        image: "/images/Graduation/Graduation_1.jpeg",
        caption: "Convocation",
      },
      {
        id: 2,
        image: "/images/Graduation/Graduation_2.jpeg",
        caption: "",
      },
      {
        id: 3,
        image: "/images/Graduation/Graduation_3.jpeg",
        caption: "Convocation",
      },
      {
        id: 4,
        image: "/images/Graduation/Induction_1.jpeg",
        caption: "Nigerian Society of Engineers(NSE) Induction",
      },
      {
        id: 5,
        image: "/images/Graduation/Induction_2.jpeg",
        caption: "NSE Induction",
      },
      {
        id: 6,
        image: "/images/Graduation/Induction_3.jpeg",
        caption: "NSE Induction",
      },
      {
        id: 7,
        image: "/images/Graduation/Induction_collegues.jpeg",
        caption: "NSE Induction",
      },
    ],
  },
  {
    id: 2,
    type: "Final year Project Defense",
    galleryPhotos: [
      {
        id: 1,
        image: "/images/Defense/Defense_collegeues.jpeg",
        caption: "",
      },
      {
        id: 2,
        image: "/images/Defense/Project_Defence_1.jpeg",
        caption: "",
      },
      {
        id: 3,
        image: "/images/Defense/Project_defense_collegues.jpeg",
        caption: "",
      },
    ],
  },
  {
    id: 3,
    type: "Volunteering",
    galleryPhotos: [
      {
        id: 1,
        image: "/images/Volunteering/NYSC_friends.jpeg",
        caption: "National Youth Service Corps (NYSC)",
      },
      {
        id: 2,
        image: "/images/Volunteering/NYSC_passing out.jpeg",
        caption: "NYSC",
      },
      {
        id: 3,
        image:
          "/images/Volunteering/Volunteering_NYSC_Platoon 3 won 2nd place in match past.jpeg",
        caption: "My platoon finished 2nd at the NYSC match past parade",
      },
      {
        id: 4,
        image: "/images/Volunteering/Volunteering_NYSC_sign in.jpeg",
        caption: "NYSC",
      },
    ],
  },
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
      {
        id: 12,
        image: "/images/Domitech/Domitec_pipeline_installation_2.jpeg",
        caption: "Pipeline installation and fabrication",
      },
      {
        id: 13,
        image: "/images/Domitech/Domitech_ gas train.jpeg",
        caption: "Gas train",
      },
      {
        id: 14,
        image: "/images/Domitech/Domitech_at work.jpeg",
        caption: "At work",
      },
      {
        id: 15,
        image: "/images/Domitech/Domitech_Caterpillar gas generator set.jpeg",
        caption: "Mantrac Caterpillar Gas generator Set",
      },
      {
        id: 16,
        image: "/images/Domitech/Domitech_completed_enclosure_2.jpeg",
        caption: "Completed Caterpillar Gas Generator Set Encolsure",
      },
      {
        id: 17,
        image: "/images/Domitech/Domitech_completed_enclosure.jpeg",
        caption: "Completed Caterpillar Gas Generator Set Encolsure",
      },
      {
        id: 18,
        image:
          "/images/Domitech/Domitech_enclosure_interior_prepipeline installation.jpeg",
        caption: "Enclosure Interior",
      },
      {
        id: 19,
        image: "/images/Domitech/Domitech_Pipeline installation.jpeg",
        caption: "Pipeline Installation",
      },
      {
        id: 20,
        image: "/images/Domitech/Domitech_Pipeline_installation_3.jpeg",
        caption: "Pipeline Installation",
      },
      {
        id: 21,
        image: "/images/Domitech/Domitech_Pipeline_installtion_ 5.jpeg",
        caption: "Pipeline Installation",
      },
      {
        id: 22,
        image: "/images/Domitech/Domitech_pipeline_installtion_4.jpeg",
        caption: "Pipeline Installation",
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

export const researchWorks = [
  {
    title: "Energetic Analysis of Stout Beer Production Processes",
    period: "Ongoing",
    description: "",
    download: "",
  },
  {
    title:
      "Development of a Forced Convection Solar Cabinet Dryer with Thermal Energy Storage",
    period: "Completed",
    supervisor: "Prof. M.A Waheed",
    description: `This project introduces a solar drying system that utilises solar energy for drying food substances, reducing agricultural produce wastage and aiding in preservation. The system includes a forced convection solar dryer with thermal energy storage, featuring a solar collector and a drying chamber. Air heated in the collector is channelled into the drying chamber to remove moisture from loaded agricultural produce. A blower efficiently moves the heated air from the solar thermal collector into the drying cabinet. The design considers the location (Abeokuta) and uses meteorological data for specifications. To enhance drying efficiency and maintain consistency, granite is incorporated as a thermal energy storage material. Granite efficiently absorbs and stores excess heat during sunny periods, providing a reserve of thermal energy for cloudy days or night-time. This stored energy helps maintain the drying process when solar radiation is low.
    The dryer's dimensions are 500 mm × 400 mm × 650 mm, constructed from locally available materials like wood, plywood, polyurethane glass, mild steel, and iron net for the trays. The dryer houses three trays placed 100 mm apart. The recorded maximum temperatures in the collector outlet and the top tray of the drying chamber during four distinct experiments under no-load conditions are as follows: 45.7 and 44.6 °C (with blower and no thermal energy storage material), 52.9 and 51.4 °C (with blower and thermal energy storage material), 80.7 and 59.9°C (without blower and no thermal energy storage material), and 74.4 and 62.4°C (without blower and with thermal energy storage material), respectively. These values obtained showed that the dryer is suitable for drying agriculture products like pepper, okra, cassava and plantain.`,
    download: "/Docs/Adeolu_Adeyinka_Research_Project_Undergraduate.pdf",
  },
];

export const CertificationsData = [
  {
    id: 1,
    photo:
      "/images/Certifications/Adeolu_Adeyinka_B.Eng_Certificate_page-0001.jpg",
    description: "B.Eng in Mechanical Engineering",
  },
  {
    id: 2,
    photo:
      "/images/Certifications/Adeolu_Adeyinka_IAENG_membership_539246_page-0001.jpg",
    description: "International Association of Engineers Membership",
  },
  {
    id: 3,
    photo: "/images/Certifications/Adeolu_NSE_Certificate_page-0001.jpg",
    description: "Nigerian Society of Engineers (NSE) Membership",
  },
  {
    id: 14,
    photo:
      "/images/Certifications/Adeolu Adeyinka - Intro to Machine Learning.png",
    description: "Intro to Machine Learning by Kaggle",
  },
  {
    id: 4,
    photo: "/images/Certifications/Cursa_Artificial_with_ python_ by CS50.jpeg",
    description: "Artificial Intelligience with Python by CS50 on CURSA.",
  },
  {
    id: 5,
    photo:
      "/images/Certifications/Cursa_Python for beginners by google career certificates.jpeg",
    description:
      "Python for Beginners by Google Careers Certificates on CURSA.",
  },
  {
    id: 6,
    photo:
      "/images/Certifications/Cursa_renewable_energy_engineering_by_NPTEL.jpeg",
    description: "Renewable Energy Engineering by NPTEL on CURSA.",
  },
  {
    id: 7,
    photo:
      "/images/Certifications/Adeolu_Adeyinka_ Energy resources_solar energy_S278_6_statement_page-0001.jpg",
    description: "Energy Resources: Solar Energy by Open University",
  },
  {
    id: 8,
    photo:
      "/images/Certifications/Adeolu_Adeyinka_ Engineering_The challenge of temperature_T207_2_statement_page-0001.jpg",
    description:
      "Engineering: The Challenge of Temperature by The Open University",
  },

  {
    id: 10,
    photo:
      "/images/Certifications/Adeolu_Adeyinka_ Systems engineering_Challenging complexity_T837_1_statement_page-0001.jpg",
    description: "Systems Engineering by The Open University",
  },
  {
    id: 11,
    photo:
      "/images/Certifications/Adeolu_Adeyinka_AIIDEV_Africa_Sustainable Energy Accelerator_page-0001.jpg",
    description: "Sustainable Energy Accelerator by AIIDEV Africa",
  },
  {
    id: 12,
    photo:
      "/images/Certifications/Adeolu_Adeyinka_EF SET Certificate_page-0001.jpg",
    description: "EF SET English Ceritificate",
  },
  {
    id: 13,
    photo: "/images/Certifications/Adeolu_NYSC_Certificate_page-0001.jpg",
    description:
      "Volunteering: National Youth Service Corps (NYSC) Certificate",
  },
];
