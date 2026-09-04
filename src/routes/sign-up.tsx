import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/site/primitives";

export const Route = createFileRoute("/sign-up")({
  head: () => ({
    meta: [
      { title: "Start free — create your Business account" },
      {
        name: "description",
        content:
          "Create a free Business account and launch your first full-stack app today. No credit card required.",
      },
      { property: "og:title", content: "Start free — create your Business account" },
      {
        property: "og:description",
        content: "Launch your first full-stack app today. No credit card required.",
      },
    ],
  }),
  component: SignUp,
});

const perks = [
  "Free forever Starter plan",
  "Built-in database and auth",
  "One-click global deployment",
];

function SignUp() {
  return (
    <section className="hero-surface py-20">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl leading-[1.05] font-extrabold sm:text-5xl">
            Start building <span className="text-gradient-primary">for free</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Join 14k+ founders shipping products on Business. No credit card required.
          </p>
          <ul className="flex flex-col gap-3">
            {perks.map((perk) => (
              <li key={perk} className="flex items-center gap-3 text-sm font-medium">
                <Check className="size-4 text-primary" />
                {perk}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full rounded-4xl border border-border bg-card p-8 shadow-lift">
          <img src="/logo.png" alt="Business Logo" className="size-10 rounded-2xl object-cover" />
          <h2 className="mt-6 text-2xl font-semibold">Create your account</h2>
          <form className="mt-8 flex flex-col gap-4" onSubmit={(event) => event.preventDefault()}>
            <label className="flex flex-col gap-2 text-sm font-semibold">
              Full name
              <input
                required
                placeholder="Alicia Sora"
                className="h-11 rounded-full border border-border bg-background px-4 text-sm font-normal outline-none placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-ring"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm font-semibold">
              Work email
              <input
                type="email"
                required
                placeholder="you@company.com"
                className="h-11 rounded-full border border-border bg-background px-4 text-sm font-normal outline-none placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-ring"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm font-semibold">
              Password
              <input
                type="password"
                required
                placeholder="At least 8 characters"
                className="h-11 rounded-full border border-border bg-background px-4 text-sm font-normal outline-none placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-ring"
              />
            </label>
            <Button type="submit" variant="hero" size="lg">
              Create account
            </Button>
          </form>
          <p className="mt-6 text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link to="/sign-in" className="font-semibold text-primary">
              Sign in
            </Link>
          </p>
        </div>
      </Container>
    </section>
  );
}
