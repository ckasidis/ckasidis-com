import { type Metadata } from "next";

import { backend, devOps, frontend } from "@/config/skills";
import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import { SimpleLayout } from "@/components/SimpleLayout";

export const metadata: Metadata = {
  title: "Skills",
};

function SkillsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  );
}

function Skill({
  title,
  href,
  children,
}: {
  title: string;
  href?: string;
  children: React.ReactNode;
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  );
}

export default function Skills() {
  return (
    <SimpleLayout
      title="Technical skills as a Software and DevOps Engineer."
      intro="I&lsquo;ve worked on multiple projects during my internships and free times to develop expertise on different technologies from front-end to cloud infrastructure. To validate my skills, I also completed the AWS Solutions Architect Associate certification with an excellent score. These are some of my most confident skills."
    >
      <div className="space-y-20">
        <SkillsSection title="Front-end">
          {frontend.map((skill) => (
            <Skill key={skill.title} title={skill.title}>
              {skill.description}
            </Skill>
          ))}
        </SkillsSection>
        <SkillsSection title="Back-end">
          {backend.map((skill) => (
            <Skill key={skill.title} title={skill.title}>
              {skill.description}
            </Skill>
          ))}
        </SkillsSection>
        <SkillsSection title="DevOps">
          {devOps.map((skill) => (
            <Skill key={skill.title} title={skill.title}>
              {skill.description}
            </Skill>
          ))}
        </SkillsSection>
      </div>
    </SimpleLayout>
  );
}
