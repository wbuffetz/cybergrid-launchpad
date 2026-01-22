import { 
  Target, 
  DollarSign, 
  BarChart3, 
  Users, 
  ShieldCheck,
  CheckCircle2
} from "lucide-react";

const WhyChoose = () => {
  const reasons = [
    {
      icon: Target,
      title: "Risk-Based Approach",
      description: "We focus on real threats and business impact, not checkbox compliance or theoretical vulnerabilities."
    },
    {
      icon: DollarSign,
      title: "Clear Pricing",
      description: "Transparent, fixed pricing with no hidden fees. You know exactly what you're paying for."
    },
    {
      icon: BarChart3,
      title: "Business-Impact Reporting",
      description: "Our reports speak to executives and technical teams alike with clear business context."
    },
    {
      icon: Users,
      title: "Experienced Professionals",
      description: "Our team brings deep expertise in offensive security and enterprise environments."
    },
    {
      icon: ShieldCheck,
      title: "Security-First Mindset",
      description: "Security isn't an afterthought—it's embedded in everything we do."
    },
    {
      icon: CheckCircle2,
      title: "Clear Outcomes",
      description: "Every engagement delivers actionable recommendations and measurable security improvements."
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 cyber-grid-bg opacity-20" />
      
      {/* Glow Effect */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Why Choose <span className="text-primary">CyberGrid</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're not just another security vendor. We're your partner in building a resilient digital future.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <reason.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">{reason.title}</h3>
              <p className="text-muted-foreground">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;