import { createFileRoute } from "@tanstack/react-router";
import { Globe2, HeartHandshake, MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site/cta";
import { Card, Container, Eyebrow, Section, SectionHeading } from "@/components/site/primitives";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — build the future of app development at Business" },
      {
        name: "description",
        content:
          "Open roles at Business across engineering, design and customer success. Remote-first, async by default.",
      },
      { property: "og:title", content: "Careers at Business" },
      {
        property: "og:description",
        content: "Remote-first open roles in engineering, design and customer success.",
      },
    ],
  }),
  component: Careers,
});

const roles = [
  { title: "Senior Product Engineer", team: "Engineering", location: "Remote — Europe" },
  { title: "Design Systems Designer", team: "Design", location: "Remote — Worldwide" },
  { title: "Developer Advocate", team: "Growth", location: "Lisbon or remote" },
  { title: "Solutions Architect", team: "Customer Success", location: "Remote — Americas" },
  { title: "Platform Reliability Engineer", team: "Infrastructure", location: "Remote — Worldwide" },
];

const perks = [
  { icon: Globe2, title: "Remote-first", copy: "Work from anywhere with async-friendly rituals." },
  { icon: HeartHandshake, title: "Real ownership", copy: "Equity for everyone, plus a learning budget." },
  { icon: Sparkles, title: "Ship weekly", copy: "Small teams, short feedback loops, no ceremony." },
];

function Careers() {
  return (
    <>
      <section className="hero-surface border-b border-border py-20">
        <Container className="flex max-w-3xl flex-col items-center gap-6 text-center">
          <Eyebrow>Careers</Eyebrow>
          <h1 className="text-4xl leading-[1.05] font-extrabold sm:text-6xl">
            Help teams ship <span className="text-gradient-primary">without friction</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            We're a compact, senior team building the platform we always wanted to use.
          </p>
        </Container>
      </section>

      <Section>
        <SectionHeading align="left" eyebrow="Open roles" title="Currently hiring" />
        <div className="mt-10 flex flex-col gap-3">
          {roles.map((role) => (
            <div
              key={role.title}
              className="flex flex-col gap-4 rounded-3xl border border-border bg-card p-6 shadow-soft sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <h3 className="text-lg font-semibold">{role.title}</h3>
                <p className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                  {role.team} <span className="text-border">•</span>
                  <MapPin className="size-3.5" /> {role.location}
                </p>
              </div>
              <Button variant="outline" size="sm" className="w-fit">
                Apply now
              </Button>
            </div>
          ))}
        </div>
      </Section>

      <Section tint>
        <SectionHeading eyebrow="Life at Business" title="How we work" />
        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {perks.map((perk) => (
            <Card key={perk.title} className="flex flex-col gap-4">
              <span className="grid size-11 place-items-center rounded-2xl bg-primary-soft text-accent-foreground">
                <perk.icon className="size-5" />
              </span>
              <h3 className="text-lg font-semibold">{perk.title}</h3>
              <p className="text-sm text-muted-foreground">{perk.copy}</p>
            </Card>
          ))}
        </div>
      </Section>

      <CtaBand
        title="Don't see your role?"
        description="Send us a note about the work you want to do — we read every message."
      />
    </>
  );
}
