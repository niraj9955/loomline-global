"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import {
  Clock,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { specializations } from "@/lib/services-data";

const enquirySchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .max(20, "Phone number is too long")
    .optional()
    .or(z.literal("")),
  service: z.string().min(1, "Please select a service"),
  message: z
    .string()
    .min(10, "Please tell us a bit more (min. 10 characters)")
    .max(2000, "Message is too long"),
});

type EnquiryForm = z.infer<typeof enquirySchema>;

const serviceOptions = [
  ...specializations.map((s) => ({ value: s.title, label: s.title })),
  { value: "Multiple Services", label: "Multiple Services / Full Package" },
];

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@loomlineglobal.com",
    href: "mailto:hello@loomlineglobal.com",
  },
  {
    icon: Phone,
    label: "Phone / WhatsApp",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Serving clients worldwide — HQ in India",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon – Sat, 10:00 AM – 7:00 PM IST",
  },
];

export function Contact() {
  const [submitting, setSubmitting] = React.useState(false);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<EnquiryForm>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  const selectedService = watch("service");

  const onSubmit = async (values: EnquiryForm) => {
    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = (await res.json()) as { success?: boolean; error?: string };

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      toast.success("Enquiry received!", {
        description:
          "Thank you — our team will get back to you within one business day.",
      });
      reset();
    } catch (err) {
      toast.error("Could not send enquiry", {
        description:
          err instanceof Error ? err.message : "Please try again in a moment.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="scroll-mt-20 py-16 lg:py-24">
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
            Contact
          </Badge>
          <h2 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
            Let&apos;s Build Your Growth Story
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Tell us what you need — a quote, a sample, or just advice — and we
            will respond within one business day.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-6 lg:mt-14 lg:grid-cols-5 lg:gap-8">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-4 lg:col-span-2"
          >
            {contactInfo.map((info) => {
              const Icon = info.icon;
              const inner = (
                <Card className="h-full rounded-2xl border transition-colors hover:border-primary/40">
                  <CardContent className="flex items-center gap-4 p-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        {info.label}
                      </p>
                      <p className="mt-0.5 truncate text-sm font-semibold">
                        {info.value}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
              return info.href ? (
                <a key={info.label} href={info.href} className="block">
                  {inner}
                </a>
              ) : (
                <div key={info.label}>{inner}</div>
              );
            })}

            <div className="rounded-2xl bg-primary p-5 text-primary-foreground shadow-lg">
              <p className="text-sm font-semibold uppercase tracking-wide opacity-90">
                Free consultation
              </p>
              <p className="mt-1 text-lg font-bold leading-snug">
                Not sure which services fit your brand?
              </p>
              <p className="mt-1 text-sm leading-relaxed opacity-90">
                Book a 30-minute discovery call — we will audit your current
                setup and suggest a roadmap, free of charge.
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <Card className="rounded-2xl border shadow-sm">
              <CardContent className="p-6 sm:p-8">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col gap-5"
                  noValidate
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="name">
                        Full Name <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="name"
                        placeholder="e.g. Priya Sharma"
                        aria-invalid={!!errors.name}
                        {...register("name")}
                      />
                      {errors.name && (
                        <p className="text-xs font-medium text-destructive">
                          {errors.name.message}
                        </p>
                      )}
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="email">
                        Email <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@company.com"
                        aria-invalid={!!errors.email}
                        {...register("email")}
                      />
                      {errors.email && (
                        <p className="text-xs font-medium text-destructive">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="phone">Phone / WhatsApp</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 ..."
                        aria-invalid={!!errors.phone}
                        {...register("phone")}
                      />
                      {errors.phone && (
                        <p className="text-xs font-medium text-destructive">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="service">
                        Service of Interest{" "}
                        <span className="text-destructive">*</span>
                      </Label>
                      <Select
                        value={selectedService}
                        onValueChange={(v) => setValue("service", v)}
                      >
                        <SelectTrigger
                          id="service"
                          aria-invalid={!!errors.service}
                          className="w-full"
                        >
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent className="max-h-72 overflow-y-auto custom-scrollbar">
                          {serviceOptions.map((opt) => (
                            <SelectItem key={opt.value} value={opt.value}>
                              {opt.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.service && (
                        <p className="text-xs font-medium text-destructive">
                          {errors.service.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <Label htmlFor="message">
                      Your Message <span className="text-destructive">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      rows={5}
                      placeholder="Tell us about your products, goals, timelines — anything that helps us help you."
                      aria-invalid={!!errors.message}
                      {...register("message")}
                    />
                    {errors.message && (
                      <p className="text-xs font-medium text-destructive">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={submitting}
                    className="h-12 w-full text-base sm:w-auto sm:self-start sm:px-8"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="mr-2 h-4.5 w-4.5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Enquiry
                        <Send className="ml-1.5 h-4.5 w-4.5" />
                      </>
                    )}
                  </Button>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    By submitting, you agree to be contacted about your
                    enquiry. We never share your details with third parties.
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
