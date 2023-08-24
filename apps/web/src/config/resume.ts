import { type Role } from "@/types/resume";
import logoFacebook from "@/images/logos/facebook.svg";
import logoFastjobs from "@/images/logos/fastjobs.svg";
import logoPlanetaria from "@/images/logos/planetaria.svg";
import logoSingtel from "@/images/logos/singtel.svg";

export const resume: Array<Role> = [
  {
    organization: "Singtel",
    title: "DevOps Engineer Intern",
    logo: logoSingtel,
    start: "2023",
    end: "2023",
  },
  {
    organization: "Thai Student Society SG",
    title: "Technical Director",
    logo: logoFacebook,
    start: "2022",
    end: {
      label: "Present",
      dateTime: new Date().getFullYear().toString(),
    },
  },
  {
    organization: "FastJobs",
    title: "Front-end Engineer Intern",
    logo: logoFastjobs,
    start: "2022",
    end: "2022",
  },
  {
    organization: "Idkclass",
    title: "Founder & Full-stack Engineer",
    logo: logoPlanetaria,
    start: "2021",
    end: {
      label: "Present",
      dateTime: new Date().getFullYear().toString(),
    },
  },
];
