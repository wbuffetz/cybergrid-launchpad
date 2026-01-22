import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, MessageSquare } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 cyber-grid-bg opacity-30" />
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-darker via-transparent to-cyber-darker" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] lg:w-[800px] h-[300px] sm:h-[400px] bg-primary/10 rounded-full blur-[100px] sm:blur-[150px] pointer-events-none" />

      <div className="container px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-6 sm:mb-8 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center">
            <Shield className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
          </div>

          {/* Headline */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-2">
            Ready to Secure Your{" "}
            <span className="text-primary">Digital Assets</span>?
          </h2>

          {/* Description */}
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-8 sm:mb-10 max-w-2xl mx-auto px-2">
            Get started with our Web Risk Assessment or speak directly with our security experts 
            to discuss your specific requirements.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-2">
            <Button asChild variant="cyber" size="lg" className="w-full sm:w-auto min-h-[48px] touch-manipulation">
              <Link to="/contact" className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                Request Web Risk Assessment
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="cyberOutline" size="lg" className="w-full sm:w-auto min-h-[48px] touch-manipulation">
              <Link to="/contact" className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                Schedule a Consultation
              </Link>
            </Button>
          </div>

          {/* Trust Badge */}
          <p className="mt-8 sm:mt-10 text-xs sm:text-sm text-muted-foreground">
            Web Risk Assessment starting at <span className="text-primary font-semibold">IDR 10,000,000</span> per application
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;