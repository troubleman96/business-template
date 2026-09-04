import { createFileRoute } from "@tanstack/react-router";
import { Container, Eyebrow, Section } from "@/components/site/primitives";

export const Route = createFileRoute("/changelog")({
  head: () => ({
    meta: [
      { title: "Changelog — what's new in Business" },
      {
        name: "description",
        content:
          "Every Business release: new workflow triggers, database improvements, AI scaffolding updates and platform fixes.",
      },
      { property: "og:title", content: "Changelog — what's new in Business" },
      {
        property: "og:description",
        content: "Release notes for workflows, database, AI scaffolding and the platform.",
      },
    ],
  }),
  component: Changelog,
});

const releases = [
  {
    version: "2.8.0",
    date: "Aug 26, 2026",
    kind: "Feature",
    items: [
      "Scheduled workflow triggers with timezone support",
      "Bulk record editing in the database view",
      "New command palette actions for deployments",
    ],
  },
  {
    version: "2.7.2",
    date: "Aug 04, 2026",
    kind: "Improvement",
    items: ["Faster preview builds", "Clearer validation errors on multi-step forms"],
  },
  {
    version: "2.7.0",
    date: "Jul 18, 2026",
    kind: "Feature",
    items: ["AI scaffolding for relational schemas", "Reusable component variants", "Audit log export"],
  },
  {
    version: "2.6.4",
    date: "Jun 27, 2026",
    kind: "Fix",
    items: ["Resolved rare session refresh loop", "Fixed sticky header on iOS Safari"],
  },
];

function Changelog() {
  return (
    <>
      <section className="hero-surface border-b border-border py-20">
        <Container className="flex max-w-3xl flex-col items-center gap-6 text-center">
          <Eyebrow>Changelog</Eyebrow>
          <h1 className="text-4xl leading-[1.05] font-extrabold sm:text-6xl">
            Constant <span className="text-gradient-primary">updates</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            We ship every week. Here's what changed recently.
          </p>
        </Container>
      </section>

      <Section>
        <div className="mx-auto flex max-w-3xl flex-col gap-6">
          {releases.map((release) => (
            <article
              key={release.version}
              className="rounded-3xl border border-border bg-card p-7 shadow-soft"
            >
              <div className="flex flex-wrap items-center gap-3">
                <h2 className="text-xl font-semibold">v{release.version}</h2>
                <span className="rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold text-accent-foreground">
                  {release.kind}
                </span>
                <span className="text-sm text-muted-foreground">{release.date}</span>
              </div>
              <ul className="mt-5 flex flex-col gap-2 border-t border-border pt-5">
                {release.items.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
