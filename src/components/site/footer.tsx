import { Link } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "./primitives";

const columns = [
  {
    title: "Company",
    links: [
      { to: "/about", label: "About us" },
      { to: "/blog", label: "Our blog" },
      { to: "/careers", label: "Careers" },
      { to: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Products",
    links: [
      { to: "/features", label: "Features" },
      { to: "/customers", label: "Customers" },
      { to: "/pricing", label: "Pricing" },
      { to: "/changelog", label: "Changelog" },
    ],
  },
  {
    title: "Resources",
    links: [
      { to: "/style-guide", label: "Style guide" },
      { to: "/license", label: "License" },
      { to: "/sign-in", label: "Sign in" },
      { to: "/sign-up", label: "Sign up" },
    ],
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-[1.2fr_2fr]">
          <div className="flex flex-col gap-5">
            <Link to="/" className="flex items-center gap-2 font-semibold tracking-tight">
              <img src="/logo.png" alt="Business Logo" className="size-8 rounded-xl object-cover" />
              <span className="text-lg">Business</span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Get the latest updates. Join the mailing list and be the first to hear about new
              releases.
            </p>
            <form
              className="flex w-full max-w-sm gap-2"
              onSubmit={(event) => event.preventDefault()}
            >
              <label className="sr-only" htmlFor="footer-email">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                required
                placeholder="you@company.com"
                className="h-10 w-full rounded-full border border-border bg-card px-4 text-sm outline-none placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-ring"
              />
              <Button type="submit" variant="ink">
                Join
              </Button>
            </form>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.title} className="flex flex-col gap-3">
                <h3 className="text-sm font-semibold">{column.title}</h3>
                {column.links.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Business. All rights reserved.</p>
          <p>Built for teams shipping full-stack apps in days.</p>
        </div>
      </Container>
    </footer>
  );
}
