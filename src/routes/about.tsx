import { createFileRoute } from "@tanstack/react-router";
import { CtaBand } from "@/components/site/cta";
import { Card, Container, Eyebrow, Section, SectionHeading } from "@/components/site/primitives";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Business — the visual full-stack company" },
      {
        name: "description",
        content:
          "Business is a small senior team building a visual platform that unifies design, data, logic and deployment for product teams.",
      },
      { property: "og:title", content: "About Business — the visual full-stack company" },
      {
        property: "og:description",
        content: "A senior team unifying design, data, logic and deployment for product teams.",
      },
    ],
  }),
  component: About,
});

const values = [
  { title: "Craft over ceremony", copy: "We ship small, polished increments instead of long release trains." },
  { title: "Own the whole stack", copy: "Design, data and deployment belong in one mental model." },
  { title: "Default to clarity", copy: "Plain language in the product, the docs and our pricing." },
];

const timeline = [
  { year: "2023", copy: "Business starts as an internal tool for a product studio in Lisbon." },
  { year: "2024", copy: "Public beta launches with the visual workflow engine." },
  { year: "2025", copy: "14k+ founders on the platform; AI scaffolding ships." },
  { year: "2026", copy: "Enterprise workspaces, audit trails and regional hosting." },
];

function About() {
  return (
    <>
      <section className="hero-surface border-b border-border py-20">
        <Container className="flex max-w-3xl flex-col items-center gap-6 text-center">
          <Eyebrow>About us</Eyebrow>
          <h1 className="text-4xl leading-[1.05] font-extrabold sm:text-6xl">
            We build the tool we <span className="text-gradient-primary">wanted to use</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Business exists because shipping a product shouldn't require stitching together six
            subscriptions and a deployment pipeline.
          </p>
        </Container>
      </section>

      <Section>
        <SectionHeading eyebrow="Our values" title="What guides the product" />
        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {values.map((value) => (
            <Card key={value.title} className="flex flex-col gap-3">
              <h3 className="text-lg font-semibold">{value.title}</h3>
              <p className="text-sm text-muted-foreground">{value.copy}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section tint>
        <SectionHeading align="left" eyebrow="Timeline" title="How we got here" />
        <div className="mt-12 flex flex-col gap-4">
          {timeline.map((item) => (
            <div
              key={item.year}
              className="flex flex-col gap-2 rounded-3xl border border-border bg-card p-6 shadow-soft sm:flex-row sm:items-center sm:gap-8"
            >
              <span className="text-lg font-semibold text-primary sm:w-20">{item.year}</span>
              <p className="text-sm text-muted-foreground sm:text-base">{item.copy}</p>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand title="Build something with us" />
    </>
  );
}
