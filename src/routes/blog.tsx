import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { CtaBand } from "@/components/site/cta";
import { Card, Container, Eyebrow, Section } from "@/components/site/primitives";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — product and engineering notes from Business" },
      {
        name: "description",
        content:
          "Insights on SaaS product design, application development trends and shipping faster, from the Business team.",
      },
      { property: "og:title", content: "Blog — product and engineering notes from Business" },
      {
        property: "og:description",
        content: "Insights on SaaS product design and shipping applications faster.",
      },
    ],
  }),
  component: Blog,
});

const posts = [
  {
    tag: "Insight",
    title: "The role of user feedback in SaaS product loops",
    excerpt: "How to turn support tickets and session replays into a prioritised roadmap.",
    date: "Aug 28, 2026",
    read: "6 min read",
  },
  {
    tag: "Technology",
    title: "The future of application design and development",
    excerpt: "Visual development is eating the boilerplate. What that means for product teams.",
    date: "Aug 12, 2026",
    read: "8 min read",
  },
  {
    tag: "News",
    title: "Effective marketing strategies for apps in 2026",
    excerpt: "Distribution playbooks that still work when every competitor ships weekly.",
    date: "Jul 30, 2026",
    read: "5 min read",
  },
  {
    tag: "Insight",
    title: "Software development best practices in 2026",
    excerpt: "Guardrails that keep velocity high without accumulating platform debt.",
    date: "Jul 14, 2026",
    read: "7 min read",
  },
  {
    tag: "Technology",
    title: "The importance of user experience in building apps",
    excerpt: "Small interaction details that decide whether onboarding converts.",
    date: "Jun 29, 2026",
    read: "4 min read",
  },
  {
    tag: "News",
    title: "Latest top trends in application development",
    excerpt: "Edge runtimes, AI scaffolding and the return of the monolith.",
    date: "Jun 08, 2026",
    read: "6 min read",
  },
];

function Blog() {
  const [featured, ...rest] = posts as [(typeof posts)[number], ...typeof posts];

  return (
    <>
      <section className="hero-surface border-b border-border py-20">
        <Container className="flex max-w-3xl flex-col items-center gap-6 text-center">
          <Eyebrow>From our blog</Eyebrow>
          <h1 className="text-4xl leading-[1.05] font-extrabold sm:text-6xl">
            Gain valuable insights from our <span className="text-gradient-primary">latest news</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            A curated feed of the freshest thinking and essential industry developments.
          </p>
        </Container>
      </section>

      <Section>
        <Card className="panel-surface flex flex-col gap-5 p-8 sm:p-12">
          <span className="w-fit rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold text-accent-foreground">
            {featured.tag}
          </span>
          <h2 className="max-w-3xl text-3xl font-semibold sm:text-4xl">{featured.title}</h2>
          <p className="max-w-2xl text-muted-foreground">{featured.excerpt}</p>
          <p className="text-sm text-muted-foreground">
            {featured.date} · {featured.read}
          </p>
        </Card>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((post) => (
            <Card key={post.title} className="flex flex-col gap-4">
              <span className="w-fit rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
                {post.tag}
              </span>
              <h3 className="text-lg font-semibold">{post.title}</h3>
              <p className="text-sm text-muted-foreground">{post.excerpt}</p>
              <div className="mt-auto flex items-center justify-between border-t border-border pt-4 text-xs text-muted-foreground">
                <span>
                  {post.date} · {post.read}
                </span>
                <ArrowUpRight className="size-4 text-primary" />
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <CtaBand title="Ready to build what you just read about?" />
    </>
  );
}
