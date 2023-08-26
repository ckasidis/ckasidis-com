import { type ComponentType } from "react";

export interface NavItem {
  href: string;
  label: string;
}

export interface SocialLink {
  href: string;
  label: string;
  icon: ComponentType<{
    className?: string | undefined;
  }>;
}
