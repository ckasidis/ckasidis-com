import { type Metadata } from "next";

import { Layout } from "@/components/Layout";
import { Providers } from "@/app/providers";

import "@/styles/tailwind.css";

export const metadata: Metadata = {
  title: {
    template: "%s - Kasidis",
    default: "Kasidis Chantharojwong",
  },
  description:
    "I’m Kasidis, a Software and DevOps Engineer based in Singapore.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  );
}
