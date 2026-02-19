import { Link } from "react-router-dom";
import { Shield, ChevronLeft, AlertTriangle, Lock, Server, Key, Code, Upload, Settings, Package, FileWarning, Bug } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const categories = [
  {
    id: "CRBWSF-AC",
    title: "Access Control Abuse",
    icon: Lock,
    risk: "Unauthorized access, data breach",
    tests: [
      "Insecure Direct Object Reference (IDOR)",
      "Horizontal privilege escalation",
      "Missing authorization on endpoint",
      "Direct access to sensitive endpoints",
    ],
    controls: [
      { id: "CRBWSF-WEB-AC-01", name: "Insecure Direct Object Reference" },
      { id: "CRBWSF-WEB-AC-02", name: "Horizontal Privilege Escalation" },
      { id: "CRBWSF-WEB-AC-03", name: "Missing Authorization on Endpoint" },
    ],
  },
  {
    id: "CRBWSF-INJ",
    title: "Injection Attacks",
    icon: Bug,
    risk: "Data manipulation, remote code execution",
    tests: [
      "SQL Injection (error-based, basic blind)",
      "Reflected Cross-Site Scripting (XSS)",
      "Stored Cross-Site Scripting (XSS)",
      "Basic command injection",
    ],
    controls: [
      { id: "CRBWSF-WEB-INJ-01", name: "SQL Injection" },
      { id: "CRBWSF-WEB-INJ-02", name: "Reflected Cross-Site Scripting" },
      { id: "CRBWSF-WEB-INJ-03", name: "Stored Cross-Site Scripting" },
      { id: "CRBWSF-WEB-INJ-04", name: "Command Injection" },
    ],
  },
  {
    id: "CRBWSF-AUTH",
    title: "Authentication & Session Weakness",
    icon: Key,
    risk: "Account takeover",
    tests: [
      "Weak password policy",
      "Session fixation",
      "Predictable or reusable session tokens",
      "Improper logout or session invalidation",
      "Missing brute-force protection",
    ],
    controls: [
      { id: "CRBWSF-WEB-AUTH-01", name: "Weak Password Policy" },
      { id: "CRBWSF-WEB-AUTH-02", name: "Session Fixation" },
      { id: "CRBWSF-WEB-AUTH-03", name: "Token Reuse or Predictable Token" },
      { id: "CRBWSF-WEB-AUTH-04", name: "Improper Session Invalidation" },
      { id: "CRBWSF-WEB-AUTH-05", name: "Missing Brute-Force Protection" },
    ],
  },
  {
    id: "CRBWSF-MIS",
    title: "Security Misconfiguration",
    icon: Settings,
    risk: "System exposure, lateral access",
    tests: [
      "Debug mode enabled",
      "Stack trace or verbose error exposure",
      "Default credentials",
      "Directory listing",
      "Exposed administrative interfaces",
    ],
    controls: [
      { id: "CRBWSF-WEB-MIS-01", name: "Debug Mode Enabled" },
      { id: "CRBWSF-WEB-MIS-02", name: "Stack Trace or Verbose Error Exposure" },
      { id: "CRBWSF-WEB-MIS-03", name: "Default Credentials" },
      { id: "CRBWSF-WEB-MIS-04", name: "Directory Listing Enabled" },
      { id: "CRBWSF-WEB-MIS-05", name: "Exposed Administrative Interface" },
    ],
  },
  {
    id: "CRBWSF-CRYPTO",
    title: "Cryptographic Exposure",
    icon: Shield,
    risk: "Sensitive data leakage",
    tests: [
      "Missing HTTPS enforcement",
      "Weak TLS configuration (basic)",
      "Sensitive data exposure in responses",
      "Insecure client-side token storage",
    ],
    controls: [
      { id: "CRBWSF-WEB-CRYPTO-01", name: "Missing HTTPS Enforcement" },
      { id: "CRBWSF-WEB-CRYPTO-02", name: "Weak TLS Configuration" },
      { id: "CRBWSF-WEB-CRYPTO-03", name: "Sensitive Data Exposure" },
      { id: "CRBWSF-WEB-CRYPTO-04", name: "Insecure Client-Side Token Storage" },
    ],
  },
  {
    id: "CRBWSF-DESIGN",
    title: "Insecure Design Indicators",
    icon: AlertTriangle,
    risk: "Business logic abuse, brute-force attacks",
    tests: [
      "Missing rate limiting",
      "Missing CAPTCHA or brute-force defense",
      "Single-step business logic abuse",
    ],
    controls: [
      { id: "CRBWSF-WEB-DESIGN-01", name: "Missing Rate Limiting" },
      { id: "CRBWSF-WEB-DESIGN-02", name: "Missing Brute-Force Protection" },
      { id: "CRBWSF-WEB-DESIGN-03", name: "Basic Business Logic Abuse" },
    ],
  },
  {
    id: "CRBWSF-INPUT",
    title: "Input Validation & Mass Assignment",
    icon: Code,
    risk: "Privilege escalation, data tampering",
    tests: [
      "Mass assignment (e.g., role=admin)",
      "Hidden parameter manipulation",
      "Client-side only validation",
      "Numeric boundary abuse",
    ],
    controls: [
      { id: "CRBWSF-WEB-INPUT-01", name: "Mass Assignment" },
      { id: "CRBWSF-WEB-INPUT-02", name: "Parameter Tampering" },
      { id: "CRBWSF-WEB-INPUT-03", name: "Missing Server-Side Validation" },
    ],
  },
  {
    id: "CRBWSF-FILE",
    title: "File Handling & Upload Abuse",
    icon: Upload,
    risk: "Remote code execution, malware hosting",
    tests: [
      "Unrestricted file upload",
      "MIME-type validation bypass",
      "File extension filtering bypass",
      "Public access to uploaded files",
    ],
    controls: [
      { id: "CRBWSF-WEB-FILE-01", name: "Unrestricted File Upload" },
      { id: "CRBWSF-WEB-FILE-02", name: "MIME-Type Validation Bypass" },
      { id: "CRBWSF-WEB-FILE-03", name: "Public File Exposure" },
    ],
  },
  {
    id: "CRBWSF-CONFIG",
    title: "Sensitive Configuration & Secrets Exposure",
    icon: FileWarning,
    risk: "Full system compromise",
    tests: [
      "Exposed environment or backup files (.env, .git, .bak, .zip)",
      "Hardcoded API keys or tokens",
      "Publicly accessible configuration endpoints",
    ],
    controls: [
      { id: "CRBWSF-WEB-CONFIG-01", name: "Exposed Environment or Backup Files" },
      { id: "CRBWSF-WEB-CONFIG-02", name: "Hardcoded Secrets Exposure" },
      { id: "CRBWSF-WEB-CONFIG-03", name: "Public Configuration Endpoint" },
    ],
  },
  {
    id: "CRBWSF-DEP",
    title: "Dependency & Third-Party Risk",
    icon: Package,
    risk: "Supply chain attacks",
    tests: [
      "Outdated client-side JavaScript libraries",
      "Components with known vulnerabilities (CVE-based)",
      "Insecure third-party integrations",
      "CDN integrity misuse (basic)",
    ],
    controls: [
      { id: "CRBWSF-WEB-DEP-01", name: "Vulnerable Client-Side Library" },
      { id: "CRBWSF-WEB-DEP-02", name: "Outdated Component with Known CVE" },
      { id: "CRBWSF-WEB-DEP-03", name: "Insecure Third-Party Integration" },
    ],
  },
];

const CRBWSF = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-24 pb-12 sm:pt-32 sm:pb-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <Link
            to="/#services"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
            <span className="text-primary font-semibold text-sm sm:text-base tracking-widest uppercase">
              Framework
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            CRBWSF
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mb-3">
            CyberGrid Risk-Based Web Security Framework
          </p>
          <p className="text-muted-foreground max-w-3xl leading-relaxed">
            CRBWSF is CyberGrid's proprietary assessment framework that evaluates web application security based on
            real-world exploitability and business impact — not just theoretical severity. Each control category
            targets a specific attack surface with structured test cases and unique control IDs.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="pb-16 sm:pb-24 px-4">
        <div className="container mx-auto max-w-5xl space-y-6">
          {categories.map((cat, index) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.id}
                className="border border-border rounded-xl bg-card/50 overflow-hidden"
              >
                {/* Header */}
                <div className="p-5 sm:p-6 border-b border-border bg-card/80">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-0.5 rounded">
                          {cat.id}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          #{index + 1} of {categories.length}
                        </span>
                      </div>
                      <h2 className="text-lg sm:text-xl font-bold">{cat.title}</h2>
                      <p className="text-sm text-muted-foreground mt-1">
                        <span className="text-destructive font-medium">Primary Risk:</span>{" "}
                        {cat.risk}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className="p-5 sm:p-6 grid md:grid-cols-2 gap-6">
                  {/* Tests */}
                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                      Tests Performed
                    </h3>
                    <ul className="space-y-2">
                      {cat.tests.map((test) => (
                        <li key={test} className="flex items-start gap-2 text-sm">
                          <span className="text-primary mt-1">▸</span>
                          <span>{test}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Control IDs */}
                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                      Control IDs
                    </h3>
                    <div className="space-y-2">
                      {cat.controls.map((ctrl) => (
                        <div
                          key={ctrl.id}
                          className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-sm"
                        >
                          <code className="font-mono text-xs text-primary bg-primary/5 border border-primary/10 px-2 py-0.5 rounded shrink-0">
                            {ctrl.id}
                          </code>
                          <span className="text-muted-foreground">{ctrl.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 px-4 border-t border-border">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Get Your CRBWSF Assessment
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Evaluate your web application's security posture with our risk-based framework — IDR 10,000,000 per application.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="cyber" size="lg">
              <Link to="/contact">Request Assessment</Link>
            </Button>
            <Button asChild variant="cyberOutline" size="lg">
              <Link to="/#services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CRBWSF;
