import { type ImageProps } from "next/image";

export interface Role {
  organization: string;
  title: string;
  logo: ImageProps["src"];
  start: string | { label: string; dateTime: string };
  end: string | { label: string; dateTime: string };
}
