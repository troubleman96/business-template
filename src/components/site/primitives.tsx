import { cn } from "@/lib/utils";
import { Reveal } from "@/components/site/reveal";
import type { ReactNode } from "react";

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("mx-auto w-full max-w-6xl px-5 sm:px-8", className)}>{children}</div>;
}

export function Section({
  children,
  className,
  tint,
}: {
  children: ReactNode;
  className?: string;
  tint?: boolean;
}) {
  return (
    <section className={cn("py-20 sm:py-28", tint && "bg-surface", className)}>
      <Container>{children}</Container>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold tracking-wide text-muted-foreground uppercase shadow-soft">
      <span className="size-1.5 rounded-full bg-primary" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl",
        className,
      )}
    >
      <div
        className={cn(
          "flex flex-col gap-4",
          align === "center" ? "items-center text-center" : "items-start",
        )}
      >
        {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
        <h2 className="text-3xl leading-[1.1] font-semibold sm:text-4xl md:text-5xl">{title}</h2>
        {description ? (
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">{description}</p>
        ) : null}
      </div>
    </Reveal>
  );
}

export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "hover-lift h-full rounded-3xl border border-border bg-card p-6 shadow-soft",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col gap-1">

      <span className="text-3xl font-semibold tracking-tight sm:text-4xl">{value}</span>
      <span className="text-sm text-muted-foreground">{label}</span>
    </div>
  );
}
