"use client";

import { motion } from "framer-motion";
import {
  Handshake,
  Headset,
  LineChart,
  ShieldCheck,
  Timer,
  Wrench,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const reasons = [
  {
    icon: Wrench,
    title: "True End-to-End Expertise",
    description:
      "One partner across visuals, sourcing, sales, marketing and store ops — no handoffs, no gaps, no vendor chaos.",
  },
  {
    icon: ShieldCheck,
    title: "Quality-First Approach",
    description:
      "Multi-stage QC on shoots, samples and store data so what reaches your customer is always polished and consistent.",
  },
  {
    icon: Timer,
    title: "Speed & Reliability",
    description:
      "Structured timelines with daily updates — from 48-hour photo turnarounds to on-schedule production deliveries.",
  },
  {
    icon: LineChart,
    title: "Data-Driven Growth",
    description:
      "Every campaign, listing and SKU decision is backed by analytics — we optimize for ROI, not vanity metrics.",
  },
  {
    icon: Handshake,
    title: "Vetted Global Network",
    description:
      "A curated network of manufacturers, vendors and buyers across key markets, ready when your brand scales.",
  },
  {
    icon: Headset,
    title: "Dedicated Support",
    description:
      "A dedicated account manager who knows your brand, your catalogue and your calendar — reachable when you need us.",
  },
];

export function WhyUs() {
  return (
    <section id="why-us" className="scroll-mt-20 py-16 lg:py-24">
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
            Why choose us
          </Badge>
          <h2 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
            Built for Brands That Want to Move Faster
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:text-lg">
            We combine creative craft with commercial discipline — so every
            deliverable looks great and performs even better.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-6">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              >
                <Card className="group h-full rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
                  <CardContent className="flex h-full flex-col gap-3 p-6">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="h-5.5 w-5.5" />
                    </span>
                    <h3 className="text-base font-bold leading-snug sm:text-lg">
                      {reason.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {reason.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
