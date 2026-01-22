import { Link } from "react-router-dom";
import { Shield, Mail, MapPin, Globe } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cyber-darker border-t border-border">
      <div className="container px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <span className="text-xl font-bold text-foreground">
                Cyber<span className="text-primary">Grid</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4 max-w-sm">
              PT Siber Generasi Indonesia Digital — Next-generation cybersecurity and IT solutions 
              for modern businesses.
            </p>
            <p className="text-sm font-mono text-muted-foreground tracking-wider">
              SECURE. SCALABLE. SMART.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/#leadership" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Leadership
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  Jl. Ciputat Raya No.1C, Jakarta Selatan, DKI Jakarta 12310
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="mailto:info@cybergr.id" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  info@cybergr.id
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="https://cybergr.id" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  cybergr.id
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} PT Siber Generasi Indonesia Digital. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            CyberGrid — Protecting Indonesia's Digital Future
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;