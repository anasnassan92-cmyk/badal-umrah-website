import logo from "@/assets/badal-logo.png";
import { MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-brown py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto mb-12">
          <div>
            <img src={logo} alt="Badal" className="h-16 mb-4 brightness-200" />
            <p className="text-sm leading-relaxed font-body" style={{ color: 'hsl(35, 30%, 65%)' }}>
              Trusted Umrah & Hajj Al-Badal service. Performing acts of worship on behalf of your loved ones with sincerity and full documentation.
            </p>
          </div>
          <div>
            <h4 className="font-heading font-bold text-lg mb-4" style={{ color: 'hsl(38, 60%, 75%)' }}>Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About Us", "Services", "Packages", "FAQ", "Contact"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(" ", "")}`}
                    className="text-sm font-body hover:text-gold transition-colors"
                    style={{ color: 'hsl(35, 30%, 65%)' }}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-bold text-lg mb-4" style={{ color: 'hsl(38, 60%, 75%)' }}>Get in Touch</h4>
            <p className="text-sm font-body mb-4" style={{ color: 'hsl(35, 30%, 65%)' }}>
              Have questions? We're here to help 24/7.
            </p>
            <a
              href="https://wa.me/message/UCHQRSBTWG6ED1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground px-6 py-3 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity font-body"
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="border-t pt-8 text-center" style={{ borderColor: 'hsl(25, 40%, 30%)' }}>
          <p className="text-xs font-body" style={{ color: 'hsl(35, 30%, 50%)' }}>
            © {new Date().getFullYear()} Badal Umrah. All rights reserved. | www.badalumrah.org
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
