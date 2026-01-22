import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();

  const navLinks = [
    { name: "Home", href: "/#home", section: "home" },
    { name: "Services", href: "/#services", section: "services" },
    { name: "About", href: "/#about", section: "about" },
    { name: "Leadership", href: "/#leadership", section: "leadership" },
    { name: "Contact", href: "/contact", section: "contact" },
  ];



  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);


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

      if (window.scrollY < 100) {
        setActiveSection("home");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const handleNavClick = (href: string, section: string) => {
    setIsOpen(false);
    if (href.startsWith("/#")) {
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  const isActive = (link: typeof navLinks[0]) => {
    if (location.pathname === "/contact" && link.section === "contact") return true;
    if (location.pathname === "/" && link.section === activeSection) return true;
    return false;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background lg:bg-background/95 lg:backdrop-blur-xl border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 group"
            onClick={() => setIsOpen(false)}
          >
            <img
              src="/logo.png"
              alt="CyberGrid Logo"
              className="h-6 sm:h-7 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => handleNavClick(link.href, link.section)}
                className={`text-sm font-medium transition-colors hover:text-primary relative ${isActive(link) ? "text-primary" : "text-muted-foreground"
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
            className="lg:hidden p-2 -mr-2 text-foreground touch-manipulation"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div
            className="fixed inset-0 z-[9999] bg-black/40 lg:hidden"
            onClick={() => setIsOpen(false)}
          >
            <div
              className="absolute top-16 left-0 right-0 bottom-0 bg-black/90"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="container px-4 py-6 flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => {
                      handleNavClick(link.href, link.section);
                      setIsOpen(false);
                    }}
                    className={`text-base font-medium py-4 px-4 rounded-lg transition-colors ${isActive(link)
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:bg-muted"
                      }`}
                  >
                    {link.name}
                  </Link>
                ))}

                <Button asChild variant="cyber" size="lg" className="w-full mt-4">
                  <Link to="/contact" onClick={() => setIsOpen(false)}>
                    Request Assessment
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;