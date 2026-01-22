import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Shield, MessageCircle, FileDown, Mail, MapPin, Globe } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


const Contact = () => {
  
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const whatsappNumber = "6281234567890"; // Replace with actual WhatsApp number
  const whatsappMessage = encodeURIComponent("Hello Cybergrid, I'm interested in your Web Risk Assessment service.");
  const whatsappUrl = `https://wa.me/${6281329090406}?text=${"Hi Cybergrid, I'm interested in your Web Risk Assessment service."}`;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-40 lg:pb-24 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 cyber-grid-bg opacity-30" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-primary/10 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none" />

        <div className="container px-4 lg:px-8 relative z-10">
          <div className="max-w-2xl mx-auto text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-primary/30 bg-primary/5 mb-4 sm:mb-6">
              <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
              <span className="text-xs sm:text-sm font-medium text-primary">Get in Touch</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              Talk to Cybergrid{" "}
              <span className="text-primary">Security Team</span>
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground px-2">
              Ready to secure your digital assets? Our team responds quickly with expert guidance 
              tailored to your security needs.
            </p>
          </div>

          {/* Main Contact Actions */}
          <div className="max-w-xl mx-auto space-y-4 sm:space-y-6 mb-10 sm:mb-16 px-2">
            {/* WhatsApp Button - Primary CTA */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full"
            >
              <Button variant="cyber" size="lg" className="w-full h-14 sm:h-16 text-base sm:text-lg gap-2 sm:gap-3 touch-manipulation">
                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                Chat with Us on WhatsApp
              </Button>
            </a>

            {/* Download Company Profile Button */}
            <a
              href="/CYBERGRID-COMPRO.pdf"
              download
              className="block w-full"
            >
              <Button variant="cyberOutline" size="lg" className="w-full h-12 sm:h-14 gap-2 sm:gap-3 touch-manipulation">
                <FileDown className="w-4 h-4 sm:w-5 sm:h-5" />
                Download Company Profile (PDF)
              </Button>
            </a>
          </div>

          {/* Contact Information */}
          <div className="max-w-3xl mx-auto">
            <div className="p-5 sm:p-8 lg:p-10 rounded-2xl bg-card border border-border cyber-border">
              <h2 className="text-lg sm:text-xl font-bold text-center mb-6 sm:mb-8 text-foreground">Contact Information</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {/* Company Name */}
                <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg bg-background/50">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs sm:text-sm text-muted-foreground mb-1">Company</p>
                    <p className="text-sm sm:text-base font-semibold text-foreground break-words">PT Siber Generasi Indonesia Digital</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg bg-background/50">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs sm:text-sm text-muted-foreground mb-1">Address</p>
                    <p className="text-xs sm:text-sm text-foreground break-words">Jl. Ciputat Raya No.1C, Jakarta Selatan, DKI Jakarta 12310</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg bg-background/50">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs sm:text-sm text-muted-foreground mb-1">Email</p>
                    <a href="mailto:info@cybergr.id" className="text-sm sm:text-base font-medium text-foreground hover:text-primary transition-colors break-all">
                      info@cybergr.id
                    </a>
                  </div>
                </div>

                {/* Website */}
                <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg bg-background/50">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs sm:text-sm text-muted-foreground mb-1">Website</p>
                    <a href="https://cybergr.id" target="_blank" rel="noopener noreferrer" className="text-sm sm:text-base font-medium text-foreground hover:text-primary transition-colors">
                      cybergr.id
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Banner */}
      <section className="py-8 sm:py-10 lg:py-12 bg-cyber-darker border-y border-border">
        <div className="container px-4 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-12 text-center">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs sm:text-sm text-muted-foreground">Fast Response Time</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs sm:text-sm text-muted-foreground">Expert Security Consultation</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs sm:text-sm text-muted-foreground">Fixed Pricing</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;