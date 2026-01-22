import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();

  const navLinks = [
    { name: "Home", href: "/", section: "home" },
    { name: "Services", href: "/#services", section: "services" },
    { name: "About", href: "/#about", section: "about" },
    { name: "Leadership", href: "/#leadership", section: "leadership" },
    { name: "Contact", href: "/contact", section: "contact" },
  ];

  // Scroll spy effect
  useEffect(() => {
    if (location.pathname !== "/") {
      setActiveSection(location.pathname.replace("/", "") || "home");
      return;
    }

    const handleScroll = () => {
      const sections = ["leadership", "about", "services", "home"];
      const scrollPosition = window.scrollY + 150;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }

      // If at the very top, set to home
      if (window.scrollY < 100) {
        setActiveSection("home");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const handleNavClick = (href: string, section: string) => {
    setIsOpen(false);
    if (href.startsWith("/#")) {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const isActive = (link: typeof navLinks[0]) => {
    if (location.pathname === "/contact" && link.section === "contact") return true;
    if (location.pathname === "/" && link.section === activeSection) return true;
    return false;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Shield className="w-5 h-5 text-primary" />
            </div>
            <span className="text-xl font-bold text-foreground">
              Cyber<span className="text-primary">Grid</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => handleNavClick(link.href, link.section)}
                className={`text-sm font-medium transition-colors hover:text-primary relative ${
                  isActive(link)
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {link.name}
                {isActive(link) && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Button asChild variant="cyber">
              <Link to="/contact">Request Assessment</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => handleNavClick(link.href, link.section)}
                  className={`text-sm font-medium py-2 transition-colors hover:text-primary ${
                    isActive(link)
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Button asChild variant="cyber" className="w-full mt-2">
                <Link to="/contact">Request Assessment</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;