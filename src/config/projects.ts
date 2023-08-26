import { type Project } from "@/types/projects";
import logoAnimaginary from "@/images/logos/animaginary.svg";
import logoHelioStream from "@/images/logos/helio-stream.svg";
import logoPlanetaria from "@/images/logos/planetaria.svg";

export const projects: Array<Project> = [
  {
    name: "TickETH",
    description:
      "A Web3 NFT ticketing platform built with Next.js and Ethereum as a submission of Crypto.com's 48-hour hackathon.",
    link: {
      href: "https://github.com/ckasidis/cdc-hackathon-ticketh",
      label: "github.com",
    },
    logo: logoPlanetaria,
  },
  {
    name: "Truth or Dare",
    description:
      "A truth or dare online game built with Next.js, Turborepo, and Docker. Deployed on AWS ECS cluster with AWS CDK.",
    link: { href: "https://tod.ckasidis.com", label: "tod.ckasidis.com" },
    logo: logoAnimaginary,
  },
  {
    name: "Idkclass",
    description:
      "Online course website with more than 200 monthly active users. Built with WordPress and LAMP Stack on Microsoft Azure.",
    link: { href: "https://idkclass.io", label: "idkclass.io" },
    logo: logoHelioStream,
  },
];
