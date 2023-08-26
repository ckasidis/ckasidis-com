import { type NavItem, type SocialLink } from "@/types/links";
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
} from "@/components/SocialIcons";

export const navItems: Array<NavItem> = [
  { href: "/projects", label: "Projects" },
  { href: "/achievements", label: "Achievements" },
  { href: "/skills", label: "Skills" },
  { href: "/chantharojwong_kasidis_resume.pdf", label: "Resume" },
];

export const email = "me@ckasidis.com";

export const socialLinks: Array<SocialLink> = [
  {
    href: "https://github.com/ckasidis",
    label: "Follow on GitHub",
    icon: GitHubIcon,
  },
  {
    href: "https://linkedin.com/in/ckasidis",
    label: "Follow on LinkedIn",
    icon: LinkedInIcon,
  },
  {
    href: "https://instagram.com/knot.ck",
    label: "Follow on Instagram",
    icon: InstagramIcon,
  },
];
