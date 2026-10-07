import icon from "@/assets/badal-icon.png";

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-sand">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <div>
            <p className="text-accent text-sm uppercase tracking-[0.2em] font-semibold mb-4 font-body">About Us</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
              What is <span className="text-gradient-gold">Badal Umrah?</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6 font-body">
              Badal Umrah refers to performing the rites of Umrah on behalf of another person who is genuinely
              unable to perform it themselves due to valid Islamic reasons such as severe illness, old age,
              physical incapacity, or death.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8 font-body">
              In Arabic, <strong className="text-foreground">Badal</strong> means "substitute" or "replacement."
              When performed with sincerity and proper intention (niyyah), acts of worship like Badal Umrah
              can benefit others — a powerful expression of compassion, faith, and devotion.
            </p>
            <div className="grid grid-cols-3 gap-6">
              {[
                { num: "500+", label: "Umrah Completed" },
                { num: "100%", label: "Verified & Documented" },
                { num: "24/7", label: "Support Available" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-2xl font-bold text-gradient-gold font-heading">{stat.num}</p>
                  <p className="text-xs text-muted-foreground mt-1 font-body">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl bg-gradient-gold/10 border border-gold/20 flex items-center justify-center shadow-gold">
                <img src={icon} alt="Badal" className="w-48 md:w-60 h-auto" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-64 h-64 md:w-80 md:h-80 rounded-2xl border border-gold/10 -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
