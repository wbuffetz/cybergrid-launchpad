import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FlagshipService from "@/components/FlagshipService";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyChoose from "@/components/WhyChoose";
import Leadership from "@/components/Leadership";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <FlagshipService />
      <About />
      <Services />
      <WhyChoose />
      <Leadership />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;