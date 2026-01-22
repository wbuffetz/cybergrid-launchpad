import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, MessageSquare } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 cyber-grid-bg opacity-30" />
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-darker via-transparent to-cyber-darker" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <div className="w-16 h-16 mx-auto mb-8 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center">
            <Shield className="w-8 h-8 text-primary" />
          </div>

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Secure Your{" "}
            <span className="text-primary">Digital Assets</span>?
          </h2>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Get started with our Web Risk Assessment or speak directly with our security experts 
            to discuss your specific requirements.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild variant="cyber" size="lg">
              <Link to="/contact" className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                Request Web Risk Assessment
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="cyberOutline" size="lg">
              <Link to="/contact" className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                Schedule a Consultation
              </Link>
            </Button>
          </div>

          {/* Trust Badge */}
          <p className="mt-10 text-sm text-muted-foreground">
            Web Risk Assessment starting at <span className="text-primary font-semibold">IDR 10,000,000</span> per application
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;