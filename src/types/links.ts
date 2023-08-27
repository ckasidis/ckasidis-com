import { type ComponentType } from "react";

export interface NavItem {
  href: string;
  newTab?: boolean;
  label: string;
}

export interface SocialLink {
  href: string;
  label: string;
  icon: ComponentType<{
    className?: string | undefined;
  }>;
}
