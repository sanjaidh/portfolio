import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Research from "@/components/Research";
import Community from "@/components/Community";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="scanline">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Research />
      <Community />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
