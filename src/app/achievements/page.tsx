import { type Metadata } from "next";

import { certifications, hackathons, olympiads } from "@/config/achievements";
import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import { SimpleLayout } from "@/components/SimpleLayout";

export const metadata: Metadata = {
  title: "Achievements",
};

function AchievementSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  );
}

function Appearance({
  title,
  description,
  event,
  cta,
  href,
}: {
  title: string;
  description: string;
  event: string;
  cta: string;
  href: string;
}) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href} newTab>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  );
}

export default function Achievement() {
  return (
    <SimpleLayout
      title="Notable Accomplishments, Certifications, and Milestones"
      intro="I've regularly participated in competitions and hackathons to develop essential skills. These are the achievements from the past few years that I'm most proud of."
    >
      <div className="space-y-20">
        <AchievementSection title="Certifications">
          {certifications.map((achievement) => (
            <Appearance
              key={achievement.title}
              href={achievement.href}
              title={achievement.title}
              description={achievement.description}
              event={achievement.event}
              cta={achievement.cta}
            />
          ))}
        </AchievementSection>
        <AchievementSection title="Hackathons">
          {hackathons.map((achievement) => (
            <Appearance
              key={achievement.title}
              href={achievement.href}
              title={achievement.title}
              description={achievement.description}
              event={achievement.event}
              cta={achievement.cta}
            />
          ))}
        </AchievementSection>
        <AchievementSection title="Olympiads">
          {olympiads.map((achievement) => (
            <Appearance
              key={achievement.title}
              href={achievement.href}
              title={achievement.title}
              description={achievement.description}
              event={achievement.event}
              cta={achievement.cta}
            />
          ))}
        </AchievementSection>
      </div>
    </SimpleLayout>
  );
}
