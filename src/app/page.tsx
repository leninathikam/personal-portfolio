import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Education from "@/components/education";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      {/* Skip to main content for accessibility */}
      <a
        href="#about"
        className="fixed left-4 top-4 z-[100] -translate-y-20 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white transition-transform focus:translate-y-0"
      >
        Skip to main content
      </a>

      <Navbar />
      <main>
        <Hero />
        <div className="mx-auto max-w-6xl px-6">
          <hr className="border-border" />
        </div>
        <About />
        <div className="mx-auto max-w-6xl px-6">
          <hr className="border-border" />
        </div>
        <Projects />
        <div className="mx-auto max-w-6xl px-6">
          <hr className="border-border" />
        </div>
        <Skills />
        <div className="mx-auto max-w-6xl px-6">
          <hr className="border-border" />
        </div>
        <Experience />
        <div className="mx-auto max-w-6xl px-6">
          <hr className="border-border" />
        </div>
        <Education />
        <div className="mx-auto max-w-6xl px-6">
          <hr className="border-border" />
        </div>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
