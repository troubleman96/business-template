import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, MessageSquare } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, Container, Eyebrow, Section } from "@/components/site/primitives";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Business — talk to the team" },
      {
        name: "description",
        content:
          "Questions about Business, pricing or migrating an existing app? Send the team a message and get a reply within one business day.",
      },
      { property: "og:title", content: "Contact Business — talk to the team" },
      {
        property: "og:description",
        content: "Send the Business team a message and get a reply within one business day.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <section className="hero-surface border-b border-border py-20">
        <Container className="flex max-w-3xl flex-col items-center gap-6 text-center">
          <Eyebrow>Contact</Eyebrow>
          <h1 className="text-4xl leading-[1.05] font-extrabold sm:text-6xl">
            Let's talk about what you're <span className="text-gradient-primary">building</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Tell us about your product and we'll reply within one business day.
          </p>
        </Container>
      </section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr]">
          <div className="flex flex-col gap-4">
            {[
              { icon: Mail, title: "Email", value: "hello@business.app" },
              { icon: MessageSquare, title: "Sales", value: "sales@business.app" },
              { icon: MapPin, title: "Studio", value: "Rua da Prata 12, Lisbon" },
            ].map((item) => (
              <Card key={item.title} className="flex items-center gap-4">
                <span className="grid size-11 place-items-center rounded-2xl bg-primary-soft text-accent-foreground">
                  <item.icon className="size-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold">{item.title}</p>
                  <p className="text-sm text-muted-foreground">{item.value}</p>
                </div>
              </Card>
            ))}
          </div>

          <Card className="p-8">
            <form
              className="flex flex-col gap-5"
              onSubmit={(event) => {
                event.preventDefault();
                setSent(true);
              }}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Full name" id="name" placeholder="Alicia Sora" />
                <Field label="Work email" id="email" type="email" placeholder="you@company.com" />
              </div>
              <Field label="Company" id="company" placeholder="Business AI+" required={false} />
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-semibold">
                  What are you building?
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  placeholder="A short description of your project…"
                  className="rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-ring"
                />
              </div>
              <Button type="submit" variant="hero" size="lg" className="w-fit">
                Send message
              </Button>
              {sent ? (
                <p className="text-sm font-medium text-primary">
                  Thank you! Your submission has been received.
                </p>
              ) : null}
            </form>
          </Card>
        </div>
      </Section>
    </>
  );
}

function Field({
  label,
  id,
  type = "text",
  placeholder,
  required = true,
}: {
  label: string;
  id: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-semibold">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        placeholder={placeholder}
        className="h-11 rounded-full border border-border bg-background px-4 text-sm outline-none placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-ring"
      />
    </div>
  );
}
