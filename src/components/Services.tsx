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
    <section className="py-16 sm:py-20 lg:py-32 bg-cyber-charcoal relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-0 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-primary/5 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none" />

      <div className="container px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            Complete IT & Security Solutions
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Beyond our flagship Web Risk Assessment, we offer a comprehensive suite of 
            cybersecurity and IT services.
          </p>
        </div>

        {/* Cybersecurity Services */}
        <div className="mb-10 sm:mb-16">
          <h3 className="text-lg sm:text-xl font-bold mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
            </div>
            Cybersecurity Services
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {cyberServices.map((service, index) => (
              <div 
                key={index}
                className="group p-4 sm:p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2 text-foreground">{service.title}</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* IT Solutions */}
        <div>
          <h3 className="text-lg sm:text-xl font-bold mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
            </div>
            Complete IT Solutions
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {itServices.map((service, index) => (
              <div 
                key={index}
                className="group p-4 sm:p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2 text-foreground">{service.title}</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;