import { MapPin, Dumbbell, ShoppingBag, TreePine } from "lucide-react";

const benefits = [
  {
    icon: MapPin,
    title: "Passeio São Miguel",
    description: "A poucos passos do point mais charmoso da região",
  },
  {
    icon: Dumbbell,
    title: "Academias Premium",
    description: "As melhores academias da cidade ao seu alcance",
  },
  {
    icon: ShoppingBag,
    title: "Comércio Completo",
    description: "Mercados, farmácias e serviços essenciais",
  },
  {
    icon: TreePine,
    title: "Área Verde",
    description: "Contato direto com a natureza e qualidade de vida",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="text-center mb-20">
          <span className="inline-block text-xs font-body tracking-[0.3em] uppercase text-muted-foreground mb-6">
            Localização Privilegiada
          </span>
          <h2 className="luxury-heading text-3xl md:text-4xl lg:text-5xl max-w-2xl mx-auto text-balance">
            Tudo que você precisa, a passos de casa
          </h2>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group p-8 border border-border/30 hover:border-border/60 transition-all duration-500 hover:bg-accent/30"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <benefit.icon className="w-8 h-8 text-muted-foreground mb-6 group-hover:text-foreground transition-colors duration-300" />
              <h3 className="font-display text-xl mb-3 text-foreground">
                {benefit.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
