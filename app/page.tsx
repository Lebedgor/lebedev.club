import { Contact } from "@/components/contact";
import { Experience } from "@/components/experience";
import { Expertise } from "@/components/expertise";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";

export default function Home() {
  return (
    <main>
      <Hero />
      <Expertise />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
