import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Blocks,
  Bot,
  Database,
  Fingerprint,
  Gauge,
  Plug,
  Rocket,
  ShieldCheck,
  Terminal,
  Workflow,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site/cta";
import { Card, Container, Eyebrow, Section, SectionHeading } from "@/components/site/primitives";
import aiPanel from "@/assets/ai-panel.jpg";

export const Route = createFileRoute("/features")({
  head: () => ({
    meta: [
      { title: "Features — Business visual full-stack platform" },
      {
        name: "description",
        content:
          "Explore Business features: drag-and-drop UI builder, visual workflows, built-in database, auth, API toolkit and one-click deployment.",
      },
      { property: "og:title", content: "Features — Business visual full-stack platform" },
      {
        property: "og:description",
        content: "UI builder, workflows, database, auth and deployment in one platform.",
      },
    ],
  }),
  component: Features,
});

const pillars = [
  {
    icon: Blocks,
    title: "Responsive design controls",
    copy: "Precise breakpoints, layout grids and prebuilt components — no code required.",
  },
  {
    icon: Workflow,
    title: "Custom logic & conditions",
    copy: "Powerful triggers that respond to actions, data updates or scheduled events.",
  },
  {
    icon: Database,
    title: "Relational database",
    copy: "Model users, records and relations with a built-in scalable database.",
  },
  {
    icon: Fingerprint,
    title: "Secure authentication",
    copy: "Email, SSO and role-based access with session management handled for you.",
  },
  {
    icon: Plug,
    title: "API integration toolkit",
    copy: "Connect payments, email, analytics and internal services in minutes.",
  },
  {
    icon: Rocket,
    title: "One-click deployment",
    copy: "Push to global edge hosting with instant rollbacks and preview links.",
  },
];

const deepDives = [
  {
    icon: Bot,
    title: "AI that scaffolds the boring parts",
    copy: "Start from a rough idea, a prompt or existing content. Business generates schemas, screens and states, then hands you the controls.",
  },
  {
    icon: Terminal,
    title: "Quick access commands",
    copy: "A command palette for every surface: jump to a table, add a workflow, trigger a deploy.",
  },
  {
    icon: Gauge,
    title: "Performance by default",
    copy: "Edge rendering, image optimisation and caching baked into every published app.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise-grade security",
    copy: "Row-level rules, audit trails and SOC-2 aligned infrastructure practices.",
  },
];

function Features() {
  return (
    <>
      <section className="hero-surface border-b border-border py-20">
        <Container className="flex max-w-3xl flex-col items-center gap-6 text-center">
          <Eyebrow>Platform</Eyebrow>
          <h1 className="text-4xl leading-[1.05] font-extrabold sm:text-6xl">
            Everything you need to build <span className="text-gradient-primary">full-stack</span>.
          </h1>
          <p className="text-lg text-muted-foreground">
            Design, data, logic and deployment live in one place — so shipping is a single motion.
          </p>
          <Button asChild variant="hero" size="lg">
            <Link to="/sign-up">
              Try Business free <ArrowRight />
            </Link>
          </Button>
        </Container>
      </section>

      <Section>
        <SectionHeading
          eyebrow="Core capabilities"
          title="Limitless features, seamlessly integrated"
          description="Every capability composes with the rest. No plugins to reconcile, no glue code to maintain."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((item) => (
            <Card key={item.title} className="flex flex-col gap-4">
              <span className="grid size-11 place-items-center rounded-2xl bg-primary-soft text-accent-foreground">
                <item.icon className="size-5" />
              </span>
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="text-sm leading-relaxed text-muted-foreground">{item.copy}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section tint>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col gap-8">
            <SectionHeading
              align="left"
              eyebrow="Deep dive"
              title="A data technology designed for speed"
              description="Create sophisticated, AI-powered applications that work across web and mobile."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {deepDives.map((item) => (
                <div key={item.title} className="flex flex-col gap-2 rounded-2xl border border-border bg-card p-5">
                  <item.icon className="size-5 text-primary" />
                  <h3 className="text-base font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.copy}</p>
                </div>
              ))}
            </div>
          </div>
          <img
            src={aiPanel}
            alt="Business prompt-to-app interface"
            width={1200}
            height={912}
            loading="lazy"
            className="rounded-4xl border border-border bg-card shadow-lift"
          />
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Workflow"
          title="From idea to production in four steps"
        />
        <ol className="mt-14 grid gap-6 md:grid-cols-4">
          {[
            { step: "01", title: "Describe", copy: "Prompt Business or import existing content." },
            { step: "02", title: "Compose", copy: "Refine layouts with responsive controls." },
            { step: "03", title: "Automate", copy: "Wire logic, data and integrations." },
            { step: "04", title: "Launch", copy: "Deploy globally with one click." },
          ].map((item) => (
            <li key={item.step} className="rounded-3xl border border-border bg-card p-6 shadow-soft">
              <span className="text-sm font-semibold text-primary">{item.step}</span>
              <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.copy}</p>
            </li>
          ))}
        </ol>
      </Section>

      <CtaBand title="Build your next product on Business" />
    </>
  );
}
