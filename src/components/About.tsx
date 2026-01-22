import { Target, Eye } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 cyber-grid-bg opacity-20" />
      
      <div className="container px-4 lg:px-8 relative z-10">
        {/* About Section */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            About <span className="text-primary">CyberGrid</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            CyberGrid is a next-generation cybersecurity and IT solutions provider founded by passionate 
            young innovators. We partner with organizations to secure, optimize, and scale digital 
            infrastructure using proactive, modern security strategies.
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Vision */}
          <div className="p-8 lg:p-10 rounded-2xl bg-card border border-border cyber-border">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <Eye className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To be Indonesia's leading IT and cybersecurity solutions provider, empowering businesses 
              to navigate digital challenges with confidence.
            </p>
          </div>

          {/* Mission */}
          <div className="p-8 lg:p-10 rounded-2xl bg-card border border-border cyber-border">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">Our Mission</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>Deliver holistic IT solutions from application development to infrastructure management</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>Protect client data with advanced, compliance-driven security strategies</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>Enable secure digital transformation for businesses of all sizes</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;