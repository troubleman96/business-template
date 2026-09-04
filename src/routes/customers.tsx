import { createFileRoute } from "@tanstack/react-router";
import { Quote } from "lucide-react";
import { CtaBand } from "@/components/site/cta";
import { Card, Container, Eyebrow, Section, SectionHeading } from "@/components/site/primitives";

export const Route = createFileRoute("/customers")({
  head: () => ({
    meta: [
      { title: "Customer stories — teams shipping with Business" },
      {
        name: "description",
        content:
          "Read how startups, agencies and enterprise teams launched complex applications faster with Business.",
      },
      { property: "og:title", content: "Customer stories — teams shipping with Business" },
      {
        property: "og:description",
        content: "Startups, agencies and enterprises launching complex apps faster with Business.",
      },
    ],
  }),
  component: Customers,
});

const stories = [
  {
    company: "Codemount IO",
    person: "Clifford Howden, CTO",
    metric: "6x faster releases",
    quote:
      "Business revolutionized our app development. What used to take weeks now takes days — and our team ships without waiting on infrastructure.",
  },
  {
    company: "Monocotive AI",
    person: "Tobias Hayden, Founder",
    metric: "MVP in 5 days",
    quote:
      "As a startup, speed is everything. Business let us prototype and launch our MVP in less than a week with real auth and data.",
  },
  {
    company: "Monday Desk Co",
    person: "Amanda Wilbur, Head of Product",
    metric: "40% lower tool spend",
    quote:
      "We brought a complex internal app to life with surprising ease and retired three separate subscriptions.",
  },
  {
    company: "Business AI+",
    person: "Elisha Van Hoerfan, Director",
    metric: "One unified stack",
    quote:
      "Business replaces the messy toolstack we used to rely on. Now we build, launch and scale all in one place.",
  },
];

function Customers() {
  return (
    <>
      <section className="hero-surface border-b border-border py-20">
        <Container className="flex max-w-3xl flex-col items-center gap-6 text-center">
          <Eyebrow>Customer stories</Eyebrow>
          <h1 className="text-4xl leading-[1.05] font-extrabold sm:text-6xl">
            Perfectly built for <span className="text-gradient-primary">ambitious teams</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Our clients launch complex applications and reach their business goals faster than
            planned.
          </p>
        </Container>
      </section>

      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          {stories.map((story) => (
            <Card key={story.company} className="flex flex-col gap-5 p-8">
              <div className="flex items-center justify-between gap-4">
                <span className="text-sm font-semibold tracking-tight">{story.company}</span>
                <span className="rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold text-accent-foreground">
                  {story.metric}
                </span>
              </div>
              <Quote className="size-6 text-primary" />
              <p className="text-lg leading-relaxed font-medium">{story.quote}</p>
              <p className="mt-auto text-sm text-muted-foreground">{story.person}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section tint>
        <SectionHeading
          eyebrow="Outcomes"
          title="Measurable impact across the delivery cycle"
          description="Numbers reported by Business customers within their first two quarters on the platform."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {[
            { value: "45%", label: "Lower tool-stack spend" },
            { value: "2.5x", label: "Faster feedback loops" },
            { value: "33%", label: "Revenue lift from earlier launches" },
          ].map((item) => (
            <Card key={item.value} className="flex flex-col gap-2">
              <span className="text-4xl font-semibold text-primary">{item.value}</span>
              <p className="text-sm text-muted-foreground">{item.label}</p>
            </Card>
          ))}
        </div>
      </Section>

      <CtaBand title="Join 14k+ teams building on Business" />
    </>
  );
}
