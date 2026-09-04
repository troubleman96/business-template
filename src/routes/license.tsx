import { createFileRoute } from "@tanstack/react-router";
import { Check, X } from "lucide-react";
import { Card, Container, Eyebrow, Section, SectionHeading } from "@/components/site/primitives";

export const Route = createFileRoute("/license")({
  head: () => ({
    meta: [
      { title: "License — Business template usage terms" },
      {
        name: "description",
        content:
          "What you can and cannot do with the Business template: permitted uses, restrictions and attribution requirements.",
      },
      { property: "og:title", content: "License — Business template usage terms" },
      {
        property: "og:description",
        content: "Permitted uses, restrictions and attribution for the Business template.",
      },
    ],
  }),
  component: License,
});

const allowed = [
  "Use the template for personal and commercial projects",
  "Modify layouts, colors, copy and components freely",
  "Use it for unlimited client websites you build",
  "Combine it with your own design system tokens",
];

const notAllowed = [
  "Resell or redistribute the template as-is",
  "Include it in a competing template marketplace",
  "Claim authorship of the original design",
  "Sublicense the source files to third parties",
];

function License() {
  return (
    <>
      <section className="hero-surface border-b border-border py-20">
        <Container className="flex max-w-3xl flex-col items-center gap-6 text-center">
          <Eyebrow>License</Eyebrow>
          <h1 className="text-4xl leading-[1.05] font-extrabold sm:text-6xl">
            Simple, <span className="text-gradient-primary">permissive</span> terms
          </h1>
          <p className="text-lg text-muted-foreground">
            One purchase covers unlimited projects. Here are the details in plain language.
          </p>
        </Container>
      </section>

      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="flex flex-col gap-4 p-8">
            <h2 className="text-xl font-semibold">You can</h2>
            <ul className="flex flex-col gap-3">
              {allowed.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </Card>
          <Card className="flex flex-col gap-4 p-8">
            <h2 className="text-xl font-semibold">You cannot</h2>
            <ul className="flex flex-col gap-3">
              {notAllowed.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <X className="mt-0.5 size-4 shrink-0 text-destructive" />
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      <Section tint>
        <SectionHeading
          eyebrow="Attribution"
          title="Attribution is appreciated, not required"
          description="Published projects may remove all Business branding. If you'd like to credit the design, a link in your footer is plenty."
        />
      </Section>
    </>
  );
}
