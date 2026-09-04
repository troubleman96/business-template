import { createFileRoute, Link } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/site/primitives";

export const Route = createFileRoute("/sign-in")({
  head: () => ({
    meta: [
      { title: "Sign in — Business workspace" },
      {
        name: "description",
        content: "Sign in to your Business workspace to continue building and deploying your apps.",
      },
      { property: "og:title", content: "Sign in — Business workspace" },
      { property: "og:description", content: "Access your Business workspace." },
    ],
  }),
  component: SignIn,
});

function SignIn() {
  return (
    <section className="hero-surface py-20">
      <Container className="flex justify-center">
        <div className="w-full max-w-md rounded-4xl border border-border bg-card p-8 shadow-lift">
          <img src="/logo.png" alt="Business Logo" className="size-10 rounded-2xl object-cover" />
          <h1 className="mt-6 text-2xl font-semibold">Welcome back</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Sign in to continue building with Business.
          </p>

          <form className="mt-8 flex flex-col gap-4" onSubmit={(event) => event.preventDefault()}>
            <label className="flex flex-col gap-2 text-sm font-semibold">
              Email
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
                placeholder="••••••••"
                className="h-11 rounded-full border border-border bg-background px-4 text-sm font-normal outline-none placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-ring"
              />
            </label>
            <Button type="submit" variant="hero" size="lg">
              Sign in
            </Button>
          </form>

          <p className="mt-6 text-sm text-muted-foreground">
            New to Business?{" "}
            <Link to="/sign-up" className="font-semibold text-primary">
              Create an account
            </Link>
          </p>
        </div>
      </Container>
    </section>
  );
}
