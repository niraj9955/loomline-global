import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { ServicesShowcase } from "@/components/sections/services-showcase";
import { WhyUs } from "@/components/sections/why-us";
import { Process } from "@/components/sections/process";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ServicesShowcase />
        <WhyUs />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
