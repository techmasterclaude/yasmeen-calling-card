import { Nav, Footer } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { Work, NameMarquee } from "@/components/sections/Work";
import { Process } from "@/components/sections/Process";
import { Services } from "@/components/sections/Services";
import { Interactions } from "@/components/motion/Interactions";
import { Contact } from "@/components/sections/Contact";
import { CursorButterfly } from "@/components/garden/CursorButterfly";

export default function Home() {
  return (
    <div id="top">
      <Nav />
      <main id="main">
        <Hero />
        <NameMarquee />
        <Work />
        <Services />
        <Process />
        <Contact />
      </main>
      <Footer />
      <CursorButterfly />
      <Interactions />
    </div>
  );
}
