import { 
  Shield, 
  Search, 
  HardDrive, 
  Flame, 
  Code, 
  FileSearch,
  Network,
  Camera,
  Building2,
  Globe
} from "lucide-react";

const Services = () => {
  const cyberServices = [
    { icon: Search, title: "Penetration Testing", description: "Comprehensive security testing to identify vulnerabilities before attackers do" },
    { icon: HardDrive, title: "Digital Forensic Analysis", description: "Expert investigation of security incidents and data breaches" },
    { icon: Shield, title: "Managed Security Services", description: "24/7 security monitoring and incident response" },
    { icon: Flame, title: "Firewall Services", description: "Enterprise firewall deployment, configuration, and management" },
    { icon: Code, title: "Code Hardening", description: "Secure coding practices and application hardening" },
    { icon: FileSearch, title: "Code Analysis", description: "Static and dynamic code analysis for security flaws" },
  ];

  const itServices = [
    { icon: Network, title: "Network Infrastructure", description: "LAN, WAN, and Cloud network design and implementation" },
    { icon: Camera, title: "Surveillance Systems", description: "Enterprise-grade CCTV and monitoring solutions" },
    { icon: Building2, title: "Building Automation", description: "Smart building systems and IoT integration" },
    { icon: Globe, title: "Application Development", description: "Tailored web and application development with security-first approach" },
  ];

  return (
    <section className="py-24 lg:py-32 bg-cyber-charcoal relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Complete IT & Security Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Beyond our flagship Web Risk Assessment, we offer a comprehensive suite of 
            cybersecurity and IT services.
          </p>
        </div>

        {/* Cybersecurity Services */}
        <div className="mb-16">
          <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <Shield className="w-4 h-4 text-primary" />
            </div>
            Cybersecurity Services
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cyberServices.map((service, index) => (
              <div 
                key={index}
                className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-lg mb-2 text-foreground">{service.title}</h4>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* IT Solutions */}
        <div>
          <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <Globe className="w-4 h-4 text-primary" />
            </div>
            Complete IT Solutions
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {itServices.map((service, index) => (
              <div 
                key={index}
                className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-lg mb-2 text-foreground">{service.title}</h4>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;