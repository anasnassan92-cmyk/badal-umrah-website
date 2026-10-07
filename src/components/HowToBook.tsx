const steps = [
  {
    num: "01",
    title: "Choose Package",
    description: "Browse our services and select the package that best fits your needs.",
  },
  {
    num: "02",
    title: "Fill Details",
    description: "Provide the required information about the person the Umrah is being performed for.",
  },
  {
    num: "03",
    title: "Payment",
    description: "Complete the secure payment process with your preferred method.",
  },
  {
    num: "04",
    title: "Receive Confirmation",
    description: "Get full documentation — photos, videos, and certificate of completion.",
  },
];

const HowToBook = () => {
  return (
    <section id="how-to-book" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-accent text-sm uppercase tracking-[0.2em] font-semibold mb-4 font-body">How It Works</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
            Book in <span className="text-gradient-gold">4 Simple Steps</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <div key={step.num} className="relative text-center group">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-px bg-gradient-to-r from-gold/40 to-gold/10" />
              )}
              <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-gold/10 border-2 border-gold/20 mb-6 group-hover:border-gold/50 transition-colors">
                <span className="text-2xl font-heading font-bold text-gradient-gold">{step.num}</span>
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://www.badalumrah.org/collections/all"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-gold text-primary-foreground px-10 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity shadow-gold font-body"
          >
            Start Booking Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowToBook;
