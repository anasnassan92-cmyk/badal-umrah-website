import serviceDua from "@/assets/service-dua.jpg";
import serviceNoor from "@/assets/service-noor.webp";
import serviceBarakah from "@/assets/service-barakah.webp";
import serviceOngoing from "@/assets/service-ongoing.jpg";
import serviceHajj from "@/assets/service-hajj.jpg";

interface Service {
  title: string;
  titleAr: string;
  description: string;
  features: string[];
  image: string;
  link: string;
  badge?: string;
}

const services: Service[] = [
  {
    title: "Du'a Umrah Package",
    titleAr: "باكيج الدعاء",
    description: "A simple and affordable package for those who wish to perform Umrah on behalf of their loved ones with trust and sincerity.",
    features: [
      "Umrah performed on behalf of the person",
      "Official completion certificate",
      "Short video or photo confirmation",
      "Basic customer support",
    ],
    image: serviceDua,
    link: "https://www.badalumrah.org/products/umrah-badal-du-a-package",
    badge: "Basic",
  },
  {
    title: "Noor Umrah Package",
    titleAr: "باكيج النور",
    description: "A balanced package that includes special du'ā and enhanced documentation for extra reassurance.",
    features: [
      "Umrah performed with dedicated du'ā",
      "Completion certificate with name",
      "Photo & video documentation",
      "Detailed written report",
      "Priority customer support",
    ],
    image: serviceNoor,
    link: "https://www.badalumrah.org/products/umrah-badal-noor-package",
    badge: "Standard",
  },
  {
    title: "Barakah Premium Package",
    titleAr: "باكيج البركة",
    description: "Our most comprehensive package with full documentation and premium service for complete peace of mind.",
    features: [
      "Full HD video coverage",
      "High-quality photos throughout",
      "Personalized certificate",
      "Live broadcast option",
      "24/7 dedicated WhatsApp support",
      "Priority handling",
    ],
    image: serviceBarakah,
    link: "https://www.badalumrah.org/products/umrah-badal-barakah-premium-package",
    badge: "Premium",
  },
  {
    title: "Ongoing Umrah",
    titleAr: "العمرة الجارية",
    description: "A continuous Umrah performed regularly on behalf of your loved ones — an ongoing act of worship and reward.",
    features: [
      "Recurring Umrah on chosen schedule",
      "Photos & video each time",
      "Certificate for each Umrah",
      "Ongoing charity (Sadaqah Jariyah)",
      "Customer-selected dates",
    ],
    image: serviceOngoing,
    link: "https://www.badalumrah.org/products/ongoing-umrah",
    badge: "Ongoing",
  },
  {
    title: "Hajj Al-Badal",
    titleAr: "حج البدل",
    description: "Perform the sacred pilgrimage of Hajj on behalf of someone unable to do so — the ultimate act of devotion and sacrifice.",
    features: [
      "Full Hajj rites performed",
      "Complete documentation & video",
      "Certificate of Hajj completion",
      "Live broadcast available",
      "Dedicated pilgrim coordinator",
      "Premium support throughout",
    ],
    image: serviceHajj,
    link: "https://www.badalumrah.org/pages/contact",
    badge: "✦ Special",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-accent text-sm uppercase tracking-[0.2em] font-semibold mb-4 font-body">Our Services</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
            Choose Your <span className="text-gradient-gold">Package</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body">
            We offer a range of carefully designed packages to suit every need — from basic Umrah to premium Hajj services.
          </p>
        </div>

        {/* 4 Umrah packages in one row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-10">
          {services.slice(0, 4).map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>

        {/* Hajj Al-Badal featured */}
        <div className="max-w-2xl mx-auto">
          {services.slice(4).map((service) => (
            <ServiceCard key={service.title} service={service} featured />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ service, featured }: { service: Service; featured?: boolean }) => {
  return (
    <div
      className={`group relative rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 ${
        featured
          ? "bg-brown shadow-gold ring-2 ring-gold/30"
          : "bg-card shadow-lg hover:shadow-gold"
      }`}
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brown/80 to-transparent" />
        {service.badge && (
          <span className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
            featured
              ? "bg-gradient-gold text-primary-foreground"
              : "bg-background/90 text-accent"
          }`}>
            {service.badge}
          </span>
        )}
        <h3
          className="absolute bottom-4 right-4 font-arabic text-2xl"
          style={{ color: 'hsl(38, 60%, 75%)' }}
        >
          {service.titleAr}
        </h3>
      </div>

      {/* Content */}
      <div className={`p-6 ${featured ? "" : ""}`}>
        <h3 className={`font-heading text-xl font-bold mb-2 ${featured ? "text-gold-light" : "text-foreground"}`}>
          {service.title}
        </h3>
        <p className={`text-sm mb-4 font-body leading-relaxed ${featured ? "text-gold-light/70" : "text-muted-foreground"}`}>
          {service.description}
        </p>
        <ul className="space-y-2 mb-6">
          {service.features.map((f) => (
            <li key={f} className={`flex items-start gap-2 text-sm font-body ${featured ? "text-gold-light/80" : "text-foreground/70"}`}>
              <span className="text-accent mt-0.5 flex-shrink-0">✓</span>
              {f}
            </li>
          ))}
        </ul>
        <a
          href={service.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`block text-center py-3 rounded-lg font-semibold text-sm transition-all font-body ${
            featured
              ? "bg-gradient-gold text-primary-foreground hover:opacity-90"
              : "bg-primary text-primary-foreground hover:bg-primary/90"
          }`}
        >
          {service.title === "Hajj Al-Badal" ? "Contact for Hajj" : "Choose This Package"}
        </a>
      </div>
    </div>
  );
};

export default Services;
