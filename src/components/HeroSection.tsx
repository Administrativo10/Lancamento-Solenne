import { WhatsAppPremiumButton } from "@/components/ui/whatsapp-premium-button";

const HeroSection = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5547999890569?text=Olá! Gostaria de receber detalhes sobre o Solene.", "_blank");
  };

  return (
    <section className="relative min-h-screen w-full flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/bg-hs.webp"
          alt="Barra Sul"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for text contrast */}
        <div className="absolute inset-0 bg-black/[0.44]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24 w-full">
        <div className="max-w-4xl flex flex-col items-start space-y-8">

          {/* Badge */}
          <div className="opacity-0 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
              <span className="text-xs font-light text-white/70">Novo</span>
              <span className="w-1 h-1 rounded-full bg-white/40" />
              <span className="text-xs font-light text-white/90">Lançamento Exclusivo</span>
            </div>
          </div>

          {/* Title - AnimatedMarqueeHero style */}
          <h1 className="text-left text-white drop-shadow-lg leading-none tracking-tighter">
            <span className="block text-xl md:text-3xl italic font-light text-white/80 mb-4">
              Receba em primeira mão, detalhes do mais novo empreendimento
            </span>
            <span className="block text-4xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/90">
              Neo Clássico da Barra Sul.
            </span>
          </h1>

          {/* Description */}
          <div className="max-w-2xl text-left animate-fade-up opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            <p className="inline-block py-2 text-base md:text-lg text-white/90 font-medium">
              <span className="text-[#25D366] font-bold mr-2 tracking-wide text-sm uppercase">PS:</span>
              Não espere o estande ficar pronto e o valor aumentar.
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-4 opacity-0 animate-fade-up flex justify-start" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            <WhatsAppPremiumButton onClick={handleWhatsAppClick} />
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
