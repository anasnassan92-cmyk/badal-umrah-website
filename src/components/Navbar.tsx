import { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import logo from "@/assets/badal-logo.png";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Packages", href: "#compare" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-gold/20">
      <div className="container mx-auto flex items-center justify-between h-20 px-4">
        <a href="#" className="flex-shrink-0">
          <img src={logo} alt="Badal" className="h-14 w-auto" />
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors tracking-wide uppercase"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://www.badalumrah.org/collections/all"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-gold text-primary-foreground px-6 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Book Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-t border-border px-4 pb-6 animate-fade-in">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm font-medium text-foreground/70 hover:text-primary border-b border-border/50"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://www.badalumrah.org/collections/all"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-4 text-center bg-gradient-gold text-primary-foreground px-6 py-3 rounded-lg text-sm font-semibold"
          >
            Book Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
