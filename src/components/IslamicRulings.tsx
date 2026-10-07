const scholars = [
  {
    name: "Sheikh Abdulaziz bin Baz",
    topic: "Fatwa on Umrah for Others",
    image: "https://www.ra2ed.com/photos/900x675/2AZ1.jpg",
  },
  {
    name: "Sheikh Mustafa Al-Adawi",
    topic: "Fatwa on Umrah for the Deceased",
    image: "https://yt3.googleusercontent.com/-eLizqc_bQxxWlqbLSCmXOS65zhK40eHZ0VR09QJgiVXdm8HtKGFOJoA7-RUYkSu8fHxlwh4=s900-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Sheikh Ibn Uthaymeen",
    topic: "Fatwa on Umrah for the Deceased",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXYzP-RkrXJx3FYAZdVI3XelPeUCHWjyRhgg&s",
  },
  {
    name: "Sheikh Saleh Al-Fawzan",
    topic: "Ruling on Taking Money for Umrah",
    image: "https://yt3.googleusercontent.com/eA7IfNaceHwYPa_eLoilSp4ZOEaAhUQorHjCnCkm8GPbqsNtJbbP0RA7MfnaBYoE-W_i1cyXKQ=s900-c-k-c0x00ffffff-no-rj",
  },
];

const IslamicRulings = () => {
  return (
    <section id="faq" className="py-24 bg-gradient-sand">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-accent text-sm uppercase tracking-[0.2em] font-semibold mb-4 font-body">Islamic Foundation</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
            Islamic <span className="text-gradient-gold">Rulings</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mt-4 font-body">
            The ruling on performing Umrah for the deceased or incapable in Islam
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
          {scholars.map((s) => (
            <div key={s.name} className="bg-card rounded-xl overflow-hidden shadow-md border border-gold/10 hover:shadow-gold transition-shadow group">
              <div className="h-48 overflow-hidden">
                <img src={s.image} alt={s.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4">
                <h4 className="font-heading font-bold text-foreground text-sm">{s.topic}</h4>
                <p className="text-xs text-muted-foreground mt-1 font-body">{s.name}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Video */}
        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-gold border border-gold/10">
            <div className="relative pb-[56.25%]">
              <iframe
                src="https://www.youtube.com/embed/-CAUpzZ3mW8"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Islamic Ruling on Umrah"
              />
            </div>
          </div>
          <p className="text-center text-sm text-muted-foreground mt-4 font-body">
            Fatwa on the ruling of Umrah for others — Sheikh Abdulaziz bin Baz
          </p>
        </div>
      </div>
    </section>
  );
};

export default IslamicRulings;
