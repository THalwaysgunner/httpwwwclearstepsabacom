import { Phone, Mail } from "lucide-react";
import logo from "@/assets/clearsteps-logo.png";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Our Services", href: "#services" },
    { name: "Career", href: "#career" },
    { name: "Contacts", href: "#contact" },
  ];

  return (
    <footer className="footer-dark-bg text-primary-foreground">
      <div className="container mx-auto container-padding py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Logo & Description */}
          <div>
            <img src={logo} alt="CLEARSTEPS Logo" className="h-10 w-auto mb-6 brightness-0 invert" />
            <p className="text-primary-foreground/70">
              We specialize in providing comprehensive ABA therapy services designed to help individuals with Autism
              Spectrum Disorder (ASD) unlock their full potential.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
            <nav className="space-y-3">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Contact Info</h4>
            <nav className="space-y-4">
              <a
                href="tel:+17183441446"
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors"
              >
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                  <Phone className="w-4 h-4 text-accent" />
                </div>
                <span>+1 (718) 344-1446</span>
              </a>
              <a
                href="mailto:office@clearsteps.com"
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors"
              >
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                  <Mail className="w-4 h-4 text-accent" />
                </div>
                <span>office@clearsteps.com</span>
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-primary-foreground/50">
          <p>© CLEARSTEPS. All Rights Reserved. 2012 - 2025</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
