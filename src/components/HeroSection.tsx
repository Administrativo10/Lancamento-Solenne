import { WhatsAppPremiumButton } from "@/components/ui/whatsapp-premium-button";

const HeroSection = () => {
  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/5547999890569?text=Olá! Gostaria de receber detalhes sobre o Solene.",
      "_blank"
    );
  };

  return (
    <section className="relative min-h-[90vh] md:min-h-screen w-full flex items-end md:items-center overflow-hidden pb-20 md:pb-0">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 select-none">
        <img
          src="/images/bg-hs.webp"
          alt="Barra Sul"
          className="w-full h-full object-cover object-[90%_center] scale-105 animate-slow-zoom"
        />
        {/* Gradients overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-transparent to-transparent opacity-80" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pt-32 md:pt-0">
        <div className="flex flex-col items-end max-w-3xl space-y-8 md:space-y-10 ml-auto text-right">

          {/* Badge - Premium Look */}
          <div className="animate-fade-up opacity-0 relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-amber-300 rounded-full opacity-30 blur group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/40 border border-white/10 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-xs font-medium tracking-widest uppercase text-white/90">
                Lançamento Exclusivo
              </span>
            </div>
          </div>

          {/* Title - Typography Play */}
          <div className="space-y-4 text-right animate-fade-up opacity-0 relative" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <h1 className="text-white leading-[1.1] tracking-tight">
              <span className="block text-xl md:text-3xl font-light text-white/90 mb-3 tracking-wide text-balance">
                Receba <strong className="font-bold text-white">EM PRIMEIRA MÃO</strong>, detalhes do mais novo empreendimento
              </span>
              <span className="block text-4xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-300 to-amber-100 drop-shadow-sm">
                Neoclássico da Barra Sul.
              </span>
            </h1>
          </div>

          {/* Description / Highlight Box - Reverted to Typography */}
          <div
            className="animate-fade-up opacity-0 max-w-xl text-right"
            style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
          >
            <p className="text-base md:text-lg text-white/90 font-light leading-relaxed">
              <span className="text-amber-400 font-bold tracking-widest text-sm mr-2 uppercase">PS:</span>
              Não espere o estande ficar pronto e o <span className="italic text-white relative inline-block group">
                valor aumentar
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-amber-400/50 transform scale-x-0 transition-transform duration-700 ease-in-out group-hover:scale-x-100 animate-[pulse_3s_infinite]"></span>
              </span>.
            </p>
          </div>

          {/* CTA Button */}
          <div
            className="pt-2 animate-fade-up opacity-0 w-full md:w-auto flex flex-col items-end"
            style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
          >
            <WhatsAppPremiumButton onClick={handleWhatsAppClick} />
            <p className="mt-3 text-[10px] uppercase tracking-widest text-white/40 text-right">
              Atendimento Privado &bull; 24h
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
