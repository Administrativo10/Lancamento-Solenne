import WhatsAppButton from "./WhatsAppButton";
import heroImage from "@/assets/hero-aerial.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/40 z-10" />
      
      {/* Hero image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Vista aérea da Barra Sul"
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl">
          {/* Exclusive badge */}
          <div className="animate-fade-up mb-8">
            <span className="inline-block text-xs font-body tracking-[0.3em] uppercase text-muted-foreground border border-border/50 px-4 py-2">
              Lançamento Exclusivo
            </span>
          </div>

          {/* Main heading */}
          <h1 className="animate-fade-up animation-delay-200 luxury-heading text-4xl md:text-5xl lg:text-6xl mb-8 text-balance leading-[1.1]">
            Receba em primeira mão, detalhes do mais novo empreendimento{" "}
            <span className="italic">Neo Clássico</span> da Barra Sul.
          </h1>

          {/* Subheadline */}
          <p className="animate-fade-up animation-delay-400 luxury-subheading text-lg md:text-xl mb-12 max-w-xl">
            PS: Não espere o estande ficar pronto e o valor aumentar
          </p>

          {/* CTA */}
          <div className="animate-fade-up animation-delay-600">
            <WhatsAppButton />
          </div>
        </div>
      </div>

      {/* Decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent z-20" />
    </section>
  );
};

export default HeroSection;
