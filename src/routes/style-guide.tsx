import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card, Container, Eyebrow, Section, SectionHeading } from "@/components/site/primitives";

export const Route = createFileRoute("/style-guide")({
  head: () => ({
    meta: [
      { title: "Style guide — Business design system" },
      {
        name: "description",
        content:
          "The Business design system: color tokens, typography scale, buttons, cards and spacing rules used across the template.",
      },
      { property: "og:title", content: "Style guide — Business design system" },
      {
        property: "og:description",
        content: "Color tokens, type scale, buttons and surfaces used across the template.",
      },
    ],
  }),
  component: StyleGuide,
});

const swatches = [
  { name: "background", className: "bg-background" },
  { name: "surface", className: "bg-surface" },
  { name: "primary", className: "bg-primary" },
  { name: "primary-soft", className: "bg-primary-soft" },
  { name: "ink", className: "bg-ink" },
  { name: "accent", className: "bg-accent" },
  { name: "muted", className: "bg-muted" },
  { name: "destructive", className: "bg-destructive" },
];

const variants = ["hero", "default", "ink", "outline", "secondary", "soft", "ghost", "link"] as const;

function StyleGuide() {
  return (
    <>
      <section className="hero-surface border-b border-border py-20">
        <Container className="flex max-w-3xl flex-col items-center gap-6 text-center">
          <Eyebrow>Style guide</Eyebrow>
          <h1 className="text-4xl leading-[1.05] font-extrabold sm:text-6xl">
            The <span className="text-gradient-primary">Business</span> design system
          </h1>
          <p className="text-lg text-muted-foreground">
            Tokens, type and components shared by every page of the template.
          </p>
        </Container>
      </section>

      <Section>
        <SectionHeading align="left" eyebrow="Color" title="Semantic tokens" />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {swatches.map((swatch) => (
            <div key={swatch.name} className="overflow-hidden rounded-2xl border border-border">
              <div className={`h-24 ${swatch.className}`} />
              <p className="bg-card px-4 py-3 text-sm font-medium">{swatch.name}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tint>
        <SectionHeading align="left" eyebrow="Typography" title="Plus Jakarta Sans scale" />
        <Card className="mt-10 flex flex-col gap-5 p-8">
          <h1 className="text-5xl font-extrabold">Display / 48</h1>
          <h2 className="text-4xl font-semibold">Heading 2 / 36</h2>
          <h3 className="text-2xl font-semibold">Heading 3 / 24</h3>
          <p className="text-lg">Body large / 18 — used for section descriptions and intros.</p>
          <p className="text-base text-muted-foreground">
            Body / 16 — default paragraph size with muted foreground for supporting copy.
          </p>
          <p className="text-sm text-muted-foreground">Caption / 14 — metadata and footnotes.</p>
        </Card>
      </Section>

      <Section>
        <SectionHeading align="left" eyebrow="Components" title="Buttons and surfaces" />
        <Card className="mt-10 flex flex-wrap items-center gap-3 p-8">
          {variants.map((variant) => (
            <Button key={variant} variant={variant}>
              {variant}
            </Button>
          ))}
        </Card>
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          <Card className="h-32">Card / shadow-soft</Card>
          <Card className="panel-surface h-32">Panel surface</Card>
          <div className="grid h-32 place-items-center rounded-3xl bg-ink text-sm text-ink-foreground shadow-lift">
            Ink surface
          </div>
        </div>
      </Section>
    </>
  );
}
