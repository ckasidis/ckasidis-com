import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

import { email, socialLinks } from "@/config/links";
import { Container } from "@/components/Container";
import portraitImage from "@/images/portrait.png";

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}) {
  return (
    <li className={clsx(className, "flex")}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  );
}

function MailIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  );
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            A passionate Software and DevOps Engineer based in Singapore
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I&lsquo;m Kasidis, an ASEAN Undergraduate Scholar and final year
              computer science student at Nanyang Technological University.
              I&lsquo;m also the founder of Idkclass, a user-friendly online
              course platform with hundreds of monthly active users.
            </p>
            <p>
              Driven by a deep passion in Software Engineering and DevOps, I
              enjoy developing ambitious applications and mastering the latest
              technologies. Recently, I also passed the AWS Solutions Architect
              Associate Certification with outstanding score, ready to build
              scalable services on the cloud.
            </p>
            <p>
              Prior to Computer Science, I was an Astronomy Olympiad Student,
              winning a Silver Medal from the 13th International Olympiad on
              Astronomy at Hungary and 4 Gold Medals from the National Astronomy
              Olympiads. This experience has provided me with a solid foundation
              in math, data analytics, and programming.
            </p>
            <p>
              Beyond academics, I&lsquo;ve actively participated in various
              co-curricular activities and volunteer endeavors, including NTU
              Piano Ensemble, NTU IEEE, NTU Cat Management Society, and Thai
              Student Society Singapore. Through these involvements, I&lsquo;ve
              cultivated a wide range of experiences and soft skills.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            {socialLinks.map((link) => (
              <SocialLink
                className="mt-4"
                key={link.label}
                href={link.href}
                icon={link.icon}
              >
                {link.label}
              </SocialLink>
            ))}
            <SocialLink
              href={`mailto:${email}`}
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              {email}
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  );
}
