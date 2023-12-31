import { type Project } from "@/types/projects";

export const projects: Array<Project> = [
  {
    name: "TickETH",
    description:
      "A Web3 NFT ticketing platform built with Next.js and Ethereum as a submission of Crypto.com's 48-hour hackathon.",
    link: {
      href: "https://github.com/ckasidis/cdc-hackathon-ticketh",
      label: "github.com",
    },
  },
  {
    name: "Truth or Dare",
    description:
      "A truth or dare online game built with Next.js, React Query, and Zustand. GitHub Actions are configured for CI/CD pipeline.",
    link: { href: "https://tod.ckasidis.com", label: "tod.ckasidis.com" },
  },
  {
    name: "Idkclass",
    description:
      "Online course website with more than 200 monthly active users. Built with WordPress and LAMP Stack on Microsoft Azure.",
    link: { href: "https://idkclass.io", label: "idkclass.io" },
  },
];
