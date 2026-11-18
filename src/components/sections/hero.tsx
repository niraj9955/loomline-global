"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { specializations, totalServices } from "@/lib/services-data";

const stats = [
  { value: `${totalServices}+`, label: "Specialized Services" },
  { value: `${specializations.length}`, label: "Core Verticals" },
  { value: "80+", label: "Brands Supported" },
  { value: "15+", label: "Countries Served" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.12 * i, duration: 0.55, ease: "easeOut" },
  }),
};

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Decorative background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -top-32 right-[-10%] h-[420px] w-[420px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-[-20%] left-[-8%] h-[360px] w-[360px] rounded-full bg-accent blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 pb-14 pt-12 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8 lg:pb-20 lg:pt-20">
        {/* Copy */}
        <div className="flex flex-col items-start gap-6">
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}>
            <Badge
              variant="secondary"
              className="gap-1.5 rounded-full border border-primary/25 bg-accent px-3.5 py-1.5 text-[13px] font-medium text-accent-foreground"
            >
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              End-to-End Fashion &amp; E-Commerce Solutions
            </Badge>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="text-balance text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl xl:text-6xl"
          >
            From Product Shoot to{" "}
            <span className="relative inline-block text-primary">
              Profitable Sale
              <svg
                aria-hidden
                viewBox="0 0 220 12"
                className="absolute -bottom-1.5 left-0 w-full text-primary/40"
                fill="none"
              >
                <path
                  d="M3 9C60 3 160 3 217 8"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Loomline Global is your single growth partner — high-end product
            visuals, reliable garment sourcing, sharp business development,
            full-funnel digital marketing, and complete e-commerce store
            operations under one roof.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className="flex flex-wrap items-center gap-3"
          >
            <Button asChild size="lg" className="h-12 px-6 text-base">
              <a href="#contact">
                Get a Free Quote
                <ArrowRight className="ml-1.5 h-4.5 w-4.5" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 px-6 text-base"
            >
              <a href="#specializations">Explore Services</a>
            </Button>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={4}
            className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-1 text-sm text-muted-foreground"
          >
            {["Free consultation", "Flexible engagements", "Dedicated manager"].map(
              (item) => (
                <span key={item} className="flex items-center gap-1.5">
                  <BadgeCheck className="h-4 w-4 text-primary" />
                  {item}
                </span>
              )
            )}
          </motion.div>
        </div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="relative"
        >
          <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border shadow-xl lg:aspect-[7/6]">
            <Image
              src="/images/hero.png"
              alt="Professional fashion e-commerce product photography studio"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent"
            />
          </div>

          {/* Floating cards */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-2xl border bg-card/95 p-3.5 shadow-lg backdrop-blur sm:left-8"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Sparkles className="h-5 w-5" />
            </span>
            <div className="leading-tight">
              <p className="text-sm font-semibold">AI + Studio Visuals</p>
              <p className="text-xs text-muted-foreground">
                Marketplace-ready imagery
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.5 }}
            className="absolute -top-4 right-4 rounded-2xl border bg-card/95 px-4 py-2.5 shadow-lg backdrop-blur sm:right-8"
          >
            <p className="text-xs font-medium text-muted-foreground">
              Avg. campaign ROI
            </p>
            <p className="text-lg font-extrabold text-primary">3.8x</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Stats strip */}
      <div className="border-y bg-card/60">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-border px-4 sm:px-6 md:grid-cols-4 lg:px-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-0.5 px-2 py-6 text-center"
            >
              <span className="text-2xl font-extrabold tracking-tight text-primary sm:text-3xl">
                {stat.value}
              </span>
              <span className="text-xs font-medium text-muted-foreground sm:text-sm">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
