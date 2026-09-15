import { About } from "@/components/about";
import { Capabilities } from "@/components/capabilities";
import { CaseStudies } from "@/components/case-studies";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { HowIWork } from "@/components/how-i-work";
import { Lab } from "@/components/lab";
import { Numbers } from "@/components/numbers";
import { Work } from "@/components/work";

export default function Home() {
  return (
    <main>
      <Hero />
      <Work />
      <Capabilities />
      <Numbers />
      <CaseStudies />
      <Lab />
      <About />
      <HowIWork />
      <Contact />
      <Footer />
    </main>
  );
}
