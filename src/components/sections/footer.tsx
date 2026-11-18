import { Mail, MapPin, Phone, Scissors } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { specializations } from "@/lib/services-data";

const quickLinks = [
  { label: "Specializations", href: "#specializations" },
  { label: "All Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Process", href: "#process" },
  { label: "Get a Quote", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="mt-auto border-t bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <a href="#top" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Scissors className="h-5 w-5" />
              </span>
              <span className="leading-tight">
                <span className="block text-base font-bold tracking-tight">
                  Loomline<span className="text-primary"> Global</span>
                </span>
                <span className="block text-[11px] font-medium text-muted-foreground">
                  Fashion Commerce Solutions
                </span>
              </span>
            </a>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              End-to-end partner for fashion and e-commerce brands — from
              product photography and sourcing to marketing and complete store
              operations.
            </p>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer">
            <h3 className="text-sm font-bold uppercase tracking-wide">
              Quick Links
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Specializations */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide">
              Specializations
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {specializations.map((s) => (
                <li key={s.id}>
                  <a
                    href="#services"
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide">
              Get in Touch
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              <li className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a
                  href="mailto:hello@loomlineglobal.com"
                  className="transition-colors hover:text-primary"
                >
                  hello@loomlineglobal.com
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a
                  href="tel:+919876543210"
                  className="transition-colors hover:text-primary"
                >
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                Serving clients worldwide — HQ in India
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Loomline Global. All rights
            reserved. Demo website — replace contact details with your own.
          </p>
          <p className="text-xs text-muted-foreground">
            Photography &middot; Sourcing &middot; Sales &middot; Marketing
            &middot; E-Commerce
          </p>
        </div>
      </div>
    </footer>
  );
}
