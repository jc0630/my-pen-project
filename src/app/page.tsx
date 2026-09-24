import About from "@/components/sections/About";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";
import Fleet from "@/components/sections/Fleet";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Nav from "@/components/sections/Nav";
import Services from "@/components/sections/Services";

export default function Home() {
  return (
    <main className="w-full bg-white">
      <Nav />
      <Hero />
      <About />
      <Services />
      <Fleet />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
}
