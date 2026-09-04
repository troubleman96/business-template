import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "./primitives";

export function CtaBand({
  title = "Begin your journey with Business",
  description = "Effortlessly create stunning apps tailored to your business needs using our intuitive system.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-4xl bg-ink px-6 py-16 text-center text-ink-foreground sm:px-16">
          <div className="pointer-events-none absolute inset-x-0 -top-24 mx-auto h-64 w-2/3 rounded-full bg-primary/40 blur-3xl" />
          <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-6">
            <h2 className="text-3xl leading-[1.1] font-semibold sm:text-5xl">{title}</h2>
            <p className="text-base text-ink-foreground/70 sm:text-lg">{description}</p>
            <Button asChild variant="hero" size="lg">
              <Link to="/sign-up">
                Start building now <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
