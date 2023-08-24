import { type ImageProps } from "next/image";

export interface Project {
  name: string;
  description: string;
  link: { href: string; label: string };
  logo: ImageProps["src"];
}
