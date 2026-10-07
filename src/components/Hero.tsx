const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Video background */}
      <div className="absolute inset-0 z-0">
        <iframe
          src="https://www.youtube.com/embed/kLHgWy6yBJo?autoplay=1&mute=1&loop=1&playlist=kLHgWy6yBJo&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180%] h-[180%] min-w-full min-h-full pointer-events-none"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="Badal Umrah"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brown/70 via-brown/50 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p className="text-gold-light text-sm uppercase tracking-[0.3em] mb-6 animate-fade-up font-body">
          Trusted Umrah & Hajj Al-Badal Service
        </p>
        <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl font-bold mb-6 animate-fade-up leading-tight"
          style={{ color: 'hsl(40, 30%, 96%)' }}>
          Perform Umrah & Hajj
          <br />
          <span className="text-gradient-gold">On Behalf of Your Loved Ones</span>
        </h1>
        <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto animate-fade-up font-body"
          style={{ color: 'hsl(35, 30%, 80%)', animationDelay: '0.2s' }}>
          A sincere act of worship performed by trusted individuals in Makkah,
          with full documentation and complete transparency.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <a
            href="#services"
            className="bg-gradient-gold text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity shadow-gold"
          >
            Explore Services
          </a>
          <a
            href="#about"
            className="border-2 px-8 py-4 rounded-lg text-lg font-semibold transition-colors hover:bg-gold/10"
            style={{ borderColor: 'hsl(38, 70%, 45%, 0.5)', color: 'hsl(38, 60%, 75%)' }}
          >
            Learn More
          </a>
        </div>

        {/* Gaza banner */}
        <div className="mt-12 animate-fade-up" style={{ animationDelay: '0.6s' }}>
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-6 py-2">
            <span className="text-sm font-body" style={{ color: 'hsl(38, 60%, 75%)' }}>
              🤲 10% of your purchase is donated to support Gaza
            </span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-gold-light/40 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 bg-gold-light/60 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
