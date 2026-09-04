import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Blocks,
  Database,
  Fingerprint,
  GitBranch,
  Plug,
  Rocket,
  Sparkles,
  Workflow,
} from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.jpg";
import aiPanel from "@/assets/ai-panel.jpg";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site/cta";
import { Card, Container, Eyebrow, Section, SectionHeading, Stat } from "@/components/site/primitives";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Business — Build seamless, scalable apps fast" },
      {
        name: "description",
        content:
          "Launch your vision from MVP to full-scale product in days, not months — with built-in backend, logic and AI-powered workflows.",
      },
      { property: "og:title", content: "Business — Build seamless, scalable apps fast" },
      {
        property: "og:description",
        content: "From MVP to full-scale product in days, with built-in backend, logic and AI.",
      },
    ],
  }),
  component: Home,
});

const partners = ["Codemount", "Monocotive", "Northbeam", "Monday Desk", "Zeune Labs", "Orbital"];

const featureList = [
  { icon: Blocks, title: "Drag and drop UI builder", copy: "Compose responsive interfaces with pixel-precise controls." },
  { icon: Workflow, title: "Visual workflow automation", copy: "Trigger logic on actions, data updates or schedules." },
  { icon: Database, title: "Built-in scalable database", copy: "Relational data, roles and permissions out of the box." },
  { icon: Plug, title: "API integration toolkit", copy: "Connect 50+ services without writing glue code." },
  { icon: Fingerprint, title: "Secure user authentication", copy: "Sessions, SSO and granular access rules." },
  { icon: Rocket, title: "One-click deployment", copy: "Ship to global edge infrastructure instantly." },
];

const testimonials = [
  { quote: "Business revolutionized our app dev. What used to take weeks now takes days.", name: "Clifford Howden", role: "Codemount IO" },
  { quote: "As a startup, speed is everything. We prototyped and launched our MVP in under a week.", name: "Tobias Hayden", role: "Monocotive AI" },
  { quote: "I'm not a developer, but Business let me build a functional app for my business.", name: "Alicia Rhonda", role: "Product Developer" },
  { quote: "We brought a complex app idea to life with surprising ease. Highly recommended.", name: "Amanda Wilbur", role: "Monday Desk Co" },
];

const posts = [
  { tag: "Insight", title: "The role of user feedback in SaaS product loops" },
  { tag: "Technology", title: "The future of application design and development" },
  { tag: "News", title: "Effective marketing strategies for apps in 2026" },
];

function Home() {
  return (
    <>
      <section className="hero-surface relative overflow-hidden pt-16 pb-20 sm:pt-24">
        <div className="grid-lines pointer-events-none absolute inset-0 opacity-40" />
        <Container className="relative flex flex-col items-center gap-8 text-center">
          <Eyebrow>Trusted by over 14k+ founders</Eyebrow>
          <h1 className="max-w-3xl text-4xl leading-[1.05] font-extrabold sm:text-6xl md:text-7xl">
            Build seamless, <span className="text-gradient-primary">scalable apps</span>—fast.
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Launch your vision from MVP to full-scale product in days, not months — with a built-in
            backend, logic, and workflows powered by AI.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button asChild variant="hero" size="lg">
              <Link to="/sign-up">
                Start building — for free <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/features">See how it works</Link>
            </Button>
          </div>

          <div className="mt-6 w-full rounded-4xl border border-border bg-card p-2 shadow-lift">
            <img
              src={heroDashboard}
              alt="Business app builder dashboard with kanban board and delivery analytics"
              width={1600}
              height={1008}
              className="w-full rounded-3xl"
            />
          </div>

          <dl className="mt-4 grid w-full grid-cols-1 gap-8 sm:grid-cols-3">
            {[
              { value: "17k+", label: "Apps deployed" },
              { value: "99%", label: "Uptime guarantee" },
              { value: "198+", label: "Devs empowered" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center">
                <Stat value={item.value} label={item.label} />
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section className="border-y border-border bg-surface py-10">
        <Container className="flex flex-col gap-6">
          <p className="text-center text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
            Partners who trust us
          </p>
          <div className="relative overflow-hidden">
            <div className="marquee-track flex w-max gap-14">
              {[...partners, ...partners].map((partner, index) => (
                <span
                  key={`${partner}-${index}`}
                  className="text-xl font-semibold tracking-tight text-muted-foreground/70"
                >
                  {partner}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <Section>
        <SectionHeading
          eyebrow="Meet Business"
          title="Dive into a whole new way of building apps"
          description="Leveraging cutting-edge visual development, Business helps you turn innovative ideas into exceptional applications that resonate with users."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="panel-surface flex flex-col justify-between gap-8 p-8">
            <div className="flex flex-col gap-3">
              <Eyebrow>Faster workflow</Eyebrow>
              <h3 className="text-2xl font-semibold sm:text-3xl">
                A platform built for full-stack functionality
              </h3>
              <p className="text-muted-foreground">
                Accelerate your development cycle and launch apps in days, not months — logic,
                backend and frontend in one canvas.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                { label: "Logic & backend", status: "Assigned" },
                { label: "Frontend dev", status: "In progress" },
                { label: "UX data & design", status: "Finished" },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border border-border bg-card p-4">
                  <p className="text-[11px] font-semibold tracking-wider text-muted-foreground uppercase">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm font-semibold">{item.status}</p>
                  <p className="mt-3 text-xs text-muted-foreground">
                    Build admin panels · multi-step forms
                  </p>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <span className="text-4xl font-semibold tracking-tight">598+</span>
              <p className="text-sm text-muted-foreground">
                Apps built on the most secure visual platform
              </p>
            </div>
          </Card>

          <Card className="flex flex-col gap-6 p-8">
            <Eyebrow>A new playground</Eyebrow>
            <h3 className="text-2xl font-semibold">Start with a prompt, ship a product</h3>
            <p className="text-muted-foreground">
              Describe the app you need. Business scaffolds the schema, screens and logic — you refine
              the details.
            </p>
            <img
              src={aiPanel}
              alt="Business AI prompt panel generating an application"
              width={1200}
              height={912}
              loading="lazy"
              className="rounded-2xl border border-border"
            />
            <Button asChild variant="soft">
              <Link to="/features">
                Try the demo <ArrowRight />
              </Link>
            </Button>
          </Card>
        </div>
      </Section>

      <Section tint>
        <SectionHeading
          eyebrow="Experience the evolution"
          title="Limitless features, seamlessly integrated."
          description="Design, workflows, data and connections in one cohesive platform, so you can build freely."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featureList.map((feature) => (
            <Card key={feature.title} className="flex flex-col gap-4">
              <span className="grid size-11 place-items-center rounded-2xl bg-primary-soft text-accent-foreground">
                <feature.icon className="size-5" />
              </span>
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{feature.copy}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeading
            align="left"
            eyebrow="Why Business"
            title="How teams transform their business with Business"
            description="Business drives significant profit gains by cutting development time and tool-stack cost."
          />
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { value: "45%", label: "Typical improvement on tool-stack spend." },
              { value: "2.5x", label: "Faster feedback loops, reducing churn by 10%." },
              { value: "33%", label: "Revenue lift from earlier feature launches." },
            ].map((item) => (
              <Card key={item.value} className="flex flex-col gap-2">
                <span className="text-3xl font-semibold text-primary">{item.value}</span>
                <p className="text-sm text-muted-foreground">{item.label}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section tint>
        <SectionHeading
          eyebrow="Testimonials"
          title="Perfectly built for startups, freelancers and enterprise"
          description="Our clients launch complex apps and hit business goals faster than they planned."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {testimonials.map((item) => (
            <Card key={item.name} className="flex flex-col gap-5">
              <Sparkles className="size-5 text-primary" />
              <p className="text-lg leading-relaxed font-medium">“{item.quote}”</p>
              <div className="mt-auto">
                <p className="text-sm font-semibold">{item.name}</p>
                <p className="text-sm text-muted-foreground">{item.role}</p>
              </div>
            </Card>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Button asChild variant="outline">
            <Link to="/customers">
              Explore client stories <ArrowRight />
            </Link>
          </Button>
        </div>
      </Section>

      <Section>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            align="left"
            eyebrow="From our blog"
            title="Insights from the team building Business"
          />
          <Button asChild variant="ghost">
            <Link to="/blog">
              Read all articles <ArrowRight />
            </Link>
          </Button>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <Card key={post.title} className="flex flex-col gap-4">
              <span className="w-fit rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold text-accent-foreground">
                {post.tag}
              </span>
              <h3 className="text-lg font-semibold">{post.title}</h3>
              <Link
                to="/blog"
                className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-primary"
              >
                Read article <GitBranch className="size-4" />
              </Link>
            </Card>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
