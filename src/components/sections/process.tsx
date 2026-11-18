"use client";

import { motion } from "framer-motion";
import { ClipboardCheck, MessagesSquare, Rocket, Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const steps = [
  {
    icon: MessagesSquare,
    step: "01",
    title: "Discover",
    description:
      "A free consultation to understand your products, market, goals and current bottlenecks.",
  },
  {
    icon: ClipboardCheck,
    step: "02",
    title: "Plan",
    description:
      "We map the right mix of services into a clear scope, timeline and budget — no surprises.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Execute",
    description:
      "Our specialists deliver — shoots, sourcing, campaigns, catalogues — with regular progress updates.",
  },
  {
    icon: Search,
    step: "04",
    title: "Optimize & Scale",
    description:
      "We review results, refine what works, and scale the channels that drive the most growth.",
  },
];

export function Process() {
  return (
    <section
      id="process"
      className="scroll-mt-20 border-y bg-muted/40 py-16 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <Badge
            variant="secondary"
            className="mb-3 rounded-full border border-primary/25 bg-accent px-3 py-1 text-[12px] font-semibold uppercase tracking-wider text-accent-foreground"
          >
            How we work
          </Badge>
          <h2 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
            A Simple, Transparent Process
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Four steps from first conversation to a growing, self-sustaining
            sales engine.
          </p>
        </motion.div>

        <div className="relative mt-10 lg:mt-14">
          <div
            aria-hidden
            className="absolute left-0 right-0 top-8 hidden h-px bg-border md:block"
          />
          <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {steps.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.li
                  key={item.step}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="relative flex flex-col items-center gap-3 text-center"
                >
                  <div className="relative">
                    <span className="flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-primary/30 bg-card text-primary shadow-md">
                      <Icon className="h-7 w-7" />
                    </span>
                    <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-[11px] font-bold text-primary-foreground shadow">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="max-w-[260px] text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
