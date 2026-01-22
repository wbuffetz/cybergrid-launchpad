import { Button } from "@/components/ui/button";
import { Shield, MessageCircle, FileDown, Mail, MapPin, Globe, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  const whatsappNumber = "6281234567890"; // Replace with actual WhatsApp number
  const whatsappMessage = encodeURIComponent("Hello CyberGrid, I'm interested in your Web Risk Assessment service.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 cyber-grid-bg opacity-30" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="container px-4 lg:px-8 relative z-10">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-6">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Get in Touch</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Talk to CyberGrid{" "}
              <span className="text-primary">Security Team</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Ready to secure your digital assets? Our team responds quickly with expert guidance 
              tailored to your security needs.
            </p>
          </div>

          {/* Main Contact Actions */}
          <div className="max-w-xl mx-auto space-y-6 mb-16">
            {/* WhatsApp Button - Primary CTA */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full"
            >
              <Button variant="cyber" size="lg" className="w-full h-16 text-lg gap-3">
                <MessageCircle className="w-6 h-6" />
                Chat with Us on WhatsApp
              </Button>
            </a>

            {/* Download Company Profile Button */}
            <a
              href="/cybergrid-company-profile.pdf"
              download
              className="block w-full"
            >
              <Button variant="cyberOutline" size="lg" className="w-full h-14 gap-3">
                <FileDown className="w-5 h-5" />
                Download Company Profile (PDF)
              </Button>
            </a>
          </div>

          {/* Contact Information */}
          <div className="max-w-3xl mx-auto">
            <div className="p-8 lg:p-10 rounded-2xl bg-card border border-border cyber-border">
              <h2 className="text-xl font-bold text-center mb-8 text-foreground">Contact Information</h2>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {/* Company Name */}
                <div className="flex items-start gap-4 p-4 rounded-lg bg-background/50">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Company</p>
                    <p className="font-semibold text-foreground">PT Siber Generasi Indonesia Digital</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4 p-4 rounded-lg bg-background/50">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Address</p>
                    <p className="text-sm text-foreground">Jl. Ciputat Raya No.1C, Jakarta Selatan, DKI Jakarta 12310</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 p-4 rounded-lg bg-background/50">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Email</p>
                    <a href="mailto:info@cybergr.id" className="font-medium text-foreground hover:text-primary transition-colors">
                      info@cybergr.id
                    </a>
                  </div>
                </div>

                {/* Website */}
                <div className="flex items-start gap-4 p-4 rounded-lg bg-background/50">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Globe className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Website</p>
                    <a href="https://cybergr.id" target="_blank" rel="noopener noreferrer" className="font-medium text-foreground hover:text-primary transition-colors">
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
      <section className="py-12 bg-cyber-darker border-y border-border">
        <div className="container px-4 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-center md:text-left">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-muted-foreground">Fast Response Time</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-muted-foreground">Expert Security Consultation</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-muted-foreground">Fixed Pricing</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;