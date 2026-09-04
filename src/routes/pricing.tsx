import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Zap } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CtaBand } from "@/components/site/cta";
import { Card, Container, Eyebrow, Section, SectionHeading } from "@/components/site/primitives";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Business plans for every stage" },
      {
        name: "description",
        content:
          "Transparent Business pricing: a free Starter plan, Premium for freelancers and Business for teams. Monthly or yearly billing, no hidden fees.",
      },
      { property: "og:title", content: "Pricing — Business plans for every stage" },
      {
        property: "og:description",
        content: "Free Starter, Premium and Business plans with transparent tiers.",
      },
    ],
  }),
  component: Pricing,
});

const plans = [
  {
    name: "Starter",
    monthly: 0,
    yearly: 0,
    tagline: "Free for starters",
    features: ["Free forever", "Basic dashboard", "7 days version history", "Limited AI capabilities"],
    note: "*Transparent tiers, no hidden fees.",
    variant: "outline" as const,
  },
  {
    name: "Premium",
    monthly: 28,
    yearly: 18,
    tagline: "Perfect for freelancers",
    features: ["3 days free trial", "Pro dashboard", "30 days version history", "Unlimited AI Basic"],
    note: "*Save 25% with annual billing.",
    variant: "hero" as const,
    popular: true,
  },
  {
    name: "Business",
    monthly: 49,
    yearly: 24,
    tagline: "For large teams and enterprise",
    features: [
      "7 days free trial",
      "Business dashboard",
      "Unlimited version history",
      "Unlimited AI+ Pro",
    ],
    note: "*Transparent tiers, no hidden fees.",
    variant: "ink" as const,
  },
];

const faqs = [
  {
    q: "Can I change plans later?",
    a: "Yes. Upgrade or downgrade at any time — billing prorates automatically on your next invoice.",
  },
  {
    q: "Do you offer annual discounts?",
    a: "Annual billing saves up to 25% compared to monthly on Premium and Business plans.",
  },
  {
    q: "What happens when a trial ends?",
    a: "Your projects stay intact. You simply lose access to paid features until you choose a plan.",
  },
  {
    q: "Is there a limit on published apps?",
    a: "Starter includes one published app. Premium and Business allow unlimited published apps.",
  },
];

function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <>
      <section className="hero-surface border-b border-border py-20">
        <Container className="flex max-w-3xl flex-col items-center gap-6 text-center">
          <Eyebrow>Pricing</Eyebrow>
          <h1 className="text-4xl leading-[1.05] font-extrabold sm:text-6xl">
            Just one plan, <span className="text-gradient-primary">constant updates</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Scalable solutions tailored to evolving business needs — from first prototype to
            enterprise rollout.
          </p>
          <div className="inline-flex items-center gap-1 rounded-full border border-border bg-card p-1 shadow-soft">
            {(["Monthly", "Yearly"] as const).map((label) => {
              const active = (label === "Yearly") === yearly;
              return (
                <button
                  key={label}
                  onClick={() => setYearly(label === "Yearly")}
                  className={cn(
                    "cursor-pointer rounded-full px-5 py-2 text-sm font-semibold transition-colors",
                    active
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </Container>
      </section>

      <Section>
        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={cn(
                "flex flex-col gap-6",
                plan.popular && "border-primary/40 ring-1 ring-primary/20",
              )}
            >
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">{plan.name}</h2>
                {plan.popular ? (
                  <span className="inline-flex items-center gap-1 rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold text-accent-foreground">
                    <Zap className="size-3" /> Most popular
                  </span>
                ) : null}
              </div>
              <div className="flex items-end gap-1">
                <span className="text-5xl font-semibold tracking-tight">
                  ${yearly ? plan.yearly : plan.monthly}
                </span>
                <span className="pb-2 text-sm text-muted-foreground">
                  {plan.monthly === 0 ? "" : "/ month"}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">{plan.tagline}</p>
              <ul className="flex flex-col gap-3 border-t border-border pt-5">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex flex-col gap-3">
                <Button asChild variant={plan.variant}>
                  <Link to="/sign-up">{plan.monthly === 0 ? "Try for free" : "Get started"}</Link>
                </Button>
                <p className="text-xs text-muted-foreground">{plan.note}</p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section tint>
        <SectionHeading eyebrow="FAQ" title="Questions, answered" />
        <div className="mx-auto mt-12 max-w-3xl">
          <Accordion type="single" collapsible className="flex flex-col gap-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.q}
                value={`item-${index}`}
                className="rounded-2xl border border-border bg-card px-5"
              >
                <AccordionTrigger className="text-left text-base font-semibold">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>

      <CtaBand title="Start free, upgrade when you scale" />
    </>
  );
}
