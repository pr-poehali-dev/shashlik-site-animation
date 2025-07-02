import Hero from "@/components/Hero";
import About from "@/components/About";
import Specialties from "@/components/Specialties";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Specialties />
      <Reviews />
      <Contact />
    </div>
  );
};

export default Index;
