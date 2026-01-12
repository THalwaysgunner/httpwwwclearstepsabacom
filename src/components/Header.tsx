import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/clearsteps-logo.png";

interface HeaderProps {
  onOpenContactModal: () => void;
}

const Header = ({ onOpenContactModal }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const navLinks: Array<{ name: string; id?: string; action?: "modal" }> = [
    { name: "Home", id: "home" },
    { name: "Our Services", id: "services" },
    { name: "Career", id: "career" },
    { name: "Contacts", action: "modal" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto container-padding">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            type="button"
            onClick={() => scrollToId("home")}
            className="flex-shrink-0"
            aria-label="Go to top"
          >
            <img src={logo} alt="CLEARSTEPS Logo" className="h-8 md:h-10 w-auto" />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
            {navLinks.map((link) => (
              <button
                key={link.name}
                type="button"
                onClick={() => {
                  if (link.action === "modal") {
                    onOpenContactModal();
                  } else {
                    scrollToId(link.id!);
                  }
                }}
                className="text-foreground/80 hover:text-primary transition-colors font-medium font-jakarta-custom"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Phone & CTA */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="tel:+17183441446"
              className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>+1 (718) 344-1446</span>
            </a>
            <button
              type="button"
              onClick={onOpenContactModal}
              className="btn-primary text-sm"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-background border-b border-border shadow-lg">
          <nav className="container mx-auto container-padding py-6 flex flex-col gap-4" aria-label="Mobile">
            {navLinks.map((link) => (
              <button
                key={link.name}
                type="button"
                onClick={() => {
                  setIsMenuOpen(false);
                  if (link.action === "modal") {
                    onOpenContactModal();
                  } else {
                    scrollToId(link.id!);
                  }
                }}
                className="text-left text-foreground/80 hover:text-primary transition-colors font-medium py-2"
              >
                {link.name}
              </button>
            ))}
            <a href="tel:+17183441446" className="flex items-center gap-2 text-primary py-2">
              <Phone className="w-4 h-4" />
              <span>+1 (718) 344-1446</span>
            </a>
            <button
              type="button"
              onClick={() => {
                setIsMenuOpen(false);
                onOpenContactModal();
              }}
              className="btn-primary text-center mt-2"
            >
              Get Started
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
