import { User } from "lucide-react";


const Leadership = () => {
  const leaders = [
    {
      name: "Fidel Tobias Rorimpandey",
      role: "Chief Executive Officer",
      initials: "CEO",
    },
    {
      name: "Neorafa Arfienda Zulkarnaen",
      role: "Chief Technology Officer",
      initials: "CTO",
    },
  ];

  return (
    <section id="leadership" className="py-16 sm:py-20 lg:py-32 bg-cyber-darker relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-primary/5 rounded-full blur-[100px] sm:blur-[150px] pointer-events-none" />

      <div className="container px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            Our Leadership
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Founded by passionate young innovators committed to transforming cybersecurity in Indonesia.
          </p>
        </div>

        {/* Leadership Cards */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-12">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className="w-full max-w-xs sm:max-w-sm p-6 sm:p-8 rounded-2xl bg-card border border-border cyber-border text-center group hover:border-primary/50 transition-all duration-300"
            >
              {/* Avatar */}
              <div className="flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-orange-500/10 border border-orange-500/30 flex items-center justify-center">
                  <User className="w-6 h-6 text-orange-500" />
                </div>
              </div>
              {/* Info */}
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1 sm:mb-2">{leader.name}</h3>
              <p className="text-sm sm:text-base text-primary font-medium mb-3 sm:mb-4">{leader.role}</p>

              {/* Divider */}
              <div className="w-12 h-px bg-border mx-auto" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;