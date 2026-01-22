import { Link } from "react-router-dom";
import { Shield, Mail, MapPin, Globe } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cyber-darker border-t border-border">
      <div className="container px-4 lg:px-8 py-10 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2">
            
              <img
                src="/logo.png"
                alt="CyberGrid Logo"
                className="h-6 sm:h-7 w-auto"
              />
          
            <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 max-w-sm">
              PT Siber Generasi Indonesia Digital — Next-generation cybersecurity and IT solutions
              for modern businesses.
            </p>
            <p className="text-xs sm:text-sm font-mono text-muted-foreground tracking-wider">
              SECURE. SCALABLE. SMART.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm sm:text-base text-foreground mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a href="/#services" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="/#about" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/#leadership" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">
                  Leadership
                </a>
              </li>
              <li>
                <a href="/contact" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-sm sm:text-base text-foreground mb-3 sm:mb-4">Contact</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-start gap-2 sm:gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-xs sm:text-sm text-muted-foreground">
                  Jl. Ciputat Raya No.1C, Jakarta Selatan, DKI Jakarta 12310
                </span>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="mailto:info@cybergr.id" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">
                  info@cybergr.id
                </a>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <Globe className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="https://cybergr.id" target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">
                  cybergr.id
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 sm:mt-10 lg:mt-12 pt-6 sm:pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4 text-center md:text-left">
          <p className="text-xs sm:text-sm text-muted-foreground">
            © {currentYear} PT Siber Generasi Indonesia Digital. All rights reserved.
          </p>
          <p className="text-xs sm:text-sm text-muted-foreground">
            CyberGrid — Protecting Indonesia's Digital Future
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;