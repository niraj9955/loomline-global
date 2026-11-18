"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { specializations, totalServices } from "@/lib/services-data";
import { cn } from "@/lib/utils";

function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle: string;
}) {
  return (
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
        {eyebrow}
      </Badge>
      <h2 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
        {title}
      </h2>
      <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:text-lg">
        {subtitle}
      </p>
    </motion.div>
  );
}

export function ServicesShowcase() {
  const [active, setActive] = React.useState(specializations[0].id);

  const selectAndScroll = (id: string) => {
    setActive(id);
    document
      .getElementById("services")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div>
      {/* Specializations */}
      <section id="specializations" className="scroll-mt-20 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What we do"
            title="Our Core Specializations"
            subtitle={`Five integrated verticals, ${totalServices} specialized services — built to take your brand from first sample to final sale.`}
          />

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-6">
            {specializations.map((spec, i) => {
              const Icon = spec.icon;
              const isActive = active === spec.id;
              return (
                <motion.div
                  key={spec.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                  className={cn(
                    (i === 3 || i === 4) && "lg:col-span-1"
                  )}
                >
                  <button
                    type="button"
                    onClick={() => selectAndScroll(spec.id)}
                    aria-label={`View ${spec.title} services`}
                    className="group block w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-2xl"
                  >
                    <Card
                      className={cn(
                        "h-full overflow-hidden rounded-2xl border transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl",
                        isActive && "border-primary/60 shadow-lg ring-1 ring-primary/40"
                      )}
                    >
                      <div className="relative aspect-[16/9] overflow-hidden">
                        <Image
                          src={spec.image}
                          alt={spec.imageAlt}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div
                          aria-hidden
                          className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent"
                        />
                        <span className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-md">
                          <Icon className="h-5 w-5" />
                        </span>
                        <Badge className="absolute top-3 right-3 rounded-full bg-black/55 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur">
                          {spec.services.length}{" "}
                          {spec.services.length === 1 ? "Service" : "Services"}
                        </Badge>
                      </div>
                      <CardContent className="p-5">
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="text-lg font-bold leading-snug">
                            {spec.title}
                          </h3>
                          <ArrowUpRight className="mt-1 h-4.5 w-4.5 shrink-0 text-primary transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </div>
                        <p className="mt-1.5 text-sm font-medium text-primary/90">
                          {spec.tagline}
                        </p>
                        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                          {spec.description}
                        </p>
                      </CardContent>
                    </Card>
                  </button>
                </motion.div>
              );
            })}

            {/* CTA tile to fill grid */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <a
                href="#contact"
                className="group flex h-full min-h-[220px] flex-col justify-between rounded-2xl bg-primary p-6 text-primary-foreground shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <div>
                  <h3 className="text-lg font-bold leading-snug">
                    Need a custom package?
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed opacity-90">
                    Mix and match services across all five verticals — we will
                    build a plan around your goals and budget.
                  </p>
                </div>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold underline-offset-4 group-hover:underline">
                  Talk to our team
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detailed services with tabs */}
      <section
        id="services"
        className="scroll-mt-20 border-t bg-muted/40 py-16 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Full service menu"
            title="Explore Every Service in Detail"
            subtitle="Click a specialization above or pick a tab below to see exactly what is included in each engagement."
          />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-10 lg:mt-14"
          >
            <Tabs
              value={active}
              onValueChange={setActive}
              className="w-full gap-6"
            >
              <div className="flex justify-center">
                <TabsList className="h-auto w-full max-w-3xl flex-wrap justify-center gap-1 rounded-xl bg-card p-1.5 shadow-sm border">
                  {specializations.map((spec) => {
                    const Icon = spec.icon;
                    return (
                      <TabsTrigger
                        key={spec.id}
                        value={spec.id}
                        className="gap-1.5 rounded-lg px-3 py-2 text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                      >
                        <Icon className="h-4 w-4" />
                        <span>{spec.tabLabel}</span>
                      </TabsTrigger>
                    );
                  })}
                </TabsList>
              </div>

              {specializations.map((spec) => {
                const Icon = spec.icon;
                return (
                  <TabsContent key={spec.id} value={spec.id} className="mt-2">
                    <div className="overflow-hidden rounded-2xl border bg-card shadow-sm">
                      {/* Panel header */}
                      <div className="relative h-40 overflow-hidden sm:h-48">
                        <Image
                          src={spec.image}
                          alt={spec.imageAlt}
                          fill
                          sizes="(max-width: 1024px) 100vw, 64rem"
                          className="object-cover"
                        />
                        <div
                          aria-hidden
                          className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10"
                        />
                        <div className="absolute inset-0 flex flex-col justify-center gap-1.5 px-5 sm:px-8">
                          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-md">
                            <Icon className="h-5 w-5" />
                          </span>
                          <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">
                            {spec.title}
                          </h3>
                          <p className="max-w-2xl text-sm leading-relaxed text-white/85">
                            {spec.description}
                          </p>
                        </div>
                      </div>

                      {/* Service cards */}
                      <div className="grid gap-4 p-5 sm:p-6 md:grid-cols-2 xl:grid-cols-3">
                        {spec.services.map((service) => (
                          <div
                            key={service.name}
                            className="flex flex-col gap-3 rounded-xl border bg-background p-4 transition-colors hover:border-primary/40 hover:bg-accent/40"
                          >
                            <h4 className="text-[15px] font-bold leading-snug">
                              {service.name}
                            </h4>
                            <p className="text-sm leading-relaxed text-muted-foreground">
                              {service.description}
                            </p>
                            <ul className="mt-auto flex flex-col gap-1.5 pt-1">
                              {service.deliverables.map((d) => (
                                <li
                                  key={d}
                                  className="flex items-start gap-2 text-[13px] font-medium text-foreground/85"
                                >
                                  <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                                  {d}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                );
              })}
            </Tabs>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
