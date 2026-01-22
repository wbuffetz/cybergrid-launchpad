import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  Target, 
  AlertTriangle, 
  CheckCircle2,
  ArrowRight,
  Scan,
  Lock,
  Code,
  Settings,
  BarChart3,
  FileCheck
} from "lucide-react";

const FlagshipService = () => {
  const features = [
    { icon: Scan, text: "Web application attack surface mapping" },
    { icon: Lock, text: "Authentication & authorization risk review" },
    { icon: Code, text: "Business logic vulnerability analysis" },
    { icon: AlertTriangle, text: "OWASP Top 10 coverage" },
    { icon: Settings, text: "Configuration & exposure assessment" },
    { icon: BarChart3, text: "CRBWSF risk scoring" },
    { icon: FileCheck, text: "Clear, actionable remediation guidance" },
  ];

  const deliverables = [
    "Executive summary (non-technical)",
    "Technical risk report",
    "Risk severity & business impact matrix",
    "Remediation roadmap",
  ];

  const priorities = [
    { title: "Business Impact", description: "Focus on vulnerabilities that affect your bottom line" },
    { title: "Exploitability", description: "Prioritize actively exploitable weaknesses" },
    { title: "Exposure Level", description: "Assess real-world attack surface exposure" },
    { title: "Likelihood of Abuse", description: "Evaluate probability of exploitation" },
  ];

  return (
    <section id="services" className="py-24 lg:py-32 bg-cyber-darker relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-6">
            <Target className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Flagship Service</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Web Risk Assessment
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A risk-based web security evaluation focusing on vulnerabilities with the highest real-world 
            and business impact—not just theoretical severity.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Description & Priorities */}
          <div className="space-y-8">
            {/* Framework Badge */}
            <div className="inline-block">
              <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-card border border-border">
                <Shield className="w-6 h-6 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">Powered by</p>
                  <p className="font-bold text-foreground">CRBWSF Framework</p>
                  <p className="text-xs text-muted-foreground">CyberGrid Risk-Based Web Security Framework</p>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed">
              CyberGrid's Web Risk Assessment goes beyond standard vulnerability scanning. 
              Our proprietary CRBWSF methodology evaluates your web applications through the lens 
              of real-world attack scenarios and business consequences.
            </p>

            {/* Priorities */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-foreground">CRBWSF Prioritizes</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {priorities.map((priority, index) => (
                  <div 
                    key={index}
                    className="p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors"
                  >
                    <h4 className="font-semibold text-foreground mb-1">{priority.title}</h4>
                    <p className="text-sm text-muted-foreground">{priority.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - What's Included & Pricing */}
          <div className="space-y-8">
            {/* Pricing Card */}
            <div className="p-8 rounded-2xl bg-card border border-primary/30 cyber-border">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Investment</p>
                  <p className="text-4xl font-bold text-primary">IDR 10,000,000</p>
                  <p className="text-sm text-muted-foreground">per web application</p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
              </div>
              
              <Button asChild variant="cyber" size="lg" className="w-full mb-6">
                <Link to="/contact" className="flex items-center justify-center gap-2">
                  Get Web Risk Assessment
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Clear scope. Fixed pricing. Actionable results.
              </p>
            </div>

            {/* What's Included */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-foreground">What's Included</h3>
              <div className="space-y-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Deliverables */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-foreground">Deliverables</h3>
              <div className="space-y-2">
                {deliverables.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlagshipService;