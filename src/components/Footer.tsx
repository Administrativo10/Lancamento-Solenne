const Footer = () => {
  return (
    <footer className="py-12 bg-card border-t border-border/30">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo/Brand */}
          <div className="text-center md:text-left">
            <h3 className="font-display text-2xl text-foreground mb-1">
              Solene
            </h3>
            <p className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground">
              Barra Sul
            </p>
          </div>

          {/* Disclaimer */}
          <p className="font-body text-xs text-muted-foreground text-center md:text-right max-w-md">
            As imagens são meramente ilustrativas. Consulte o memorial descritivo para especificações.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
