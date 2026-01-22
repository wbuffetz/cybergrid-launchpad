import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, ArrowRight, CheckCircle } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-16 lg:pt-20">
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 cyber-grid-bg opacity-40" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      
      {/* Orange Glow Effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-primary/10 rounded-full blur-[100px] md:blur-[120px] pointer-events-none" />

      <div className="container relative z-10 px-4 lg:px-8 py-12 sm:py-16 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-primary/30 bg-primary/5 mb-6 sm:mb-8 animate-fade-in-up">
            <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
            <span className="text-xs sm:text-sm font-medium text-primary">Next-Gen Cybersecurity</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 sm:mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Risk-Based Security for{" "}
            <span className="text-gradient-orange">Modern Business</span>
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-8 px-2 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Enterprise-grade web security assessment powered by our proprietary CRBWSF framework. 
            Identify real threats, not just theoretical vulnerabilities.
          </p>

          {/* Flagship Service Highlight */}
          <div className="inline-block bg-card border border-border rounded-xl p-4 sm:p-6 mb-8 sm:mb-10 animate-fade-in-up w-full sm:w-auto" style={{ animationDelay: "0.3s" }}>
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
              <div className="text-center md:text-left">
                <p className="text-xs sm:text-sm text-muted-foreground mb-1">Flagship Service</p>
                <p className="text-lg sm:text-xl font-bold text-foreground">Web Risk Assessment</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Powered by CRBWSF Framework</p>
              </div>
              <div className="h-px md:h-12 w-full md:w-px bg-border" />
              <div className="text-center md:text-right">
                <p className="text-xs sm:text-sm text-muted-foreground mb-1">Starting at</p>
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">IDR 10,000,000</p>
                <p className="text-xs sm:text-sm text-muted-foreground">per web application</p>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 animate-fade-in-up px-2" style={{ animationDelay: "0.4s" }}>
            <Button asChild variant="cyber" size="lg" className="w-full sm:w-auto min-h-[48px] touch-manipulation">
              <Link to="/contact" className="flex items-center gap-2">
                Request Web Risk Assessment
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="cyberOutline" size="lg" className="w-full sm:w-auto min-h-[48px] touch-manipulation">
              <Link to="/contact">Talk to a Security Expert</Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span>Business Impact Focused</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span>Clear Pricing</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span>Actionable Reports</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tagline */}
      <div className="absolute bottom-4 sm:bottom-8 left-0 right-0 text-center">
        <p className="text-xs sm:text-sm font-mono text-muted-foreground tracking-widest">
          SECURE. SCALABLE. SMART.
        </p>
      </div>
    </section>
  );
};

export default Hero;