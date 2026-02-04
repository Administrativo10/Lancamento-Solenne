import WhatsAppButton from "./WhatsAppButton";
import render1 from "@/assets/render-living.jpg";
import render2 from "@/assets/render-kitchen.jpg";
import render3 from "@/assets/render-bedroom.jpg";
import render4 from "@/assets/render-bathroom.jpg";

const renders = [
  {
    src: render1,
    alt: "Living Room - Solene",
    title: "Living Integrado",
  },
  {
    src: render2,
    alt: "Kitchen - Solene",
    title: "Cozinha Gourmet",
  },
  {
    src: render3,
    alt: "Bedroom - Solene",
    title: "Suíte Master",
  },
  {
    src: render4,
    alt: "Bathroom - Solene",
    title: "Spa Privativo",
  },
];

const GallerySection = () => {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="text-center mb-20">
          <span className="inline-block text-xs font-body tracking-[0.3em] uppercase text-muted-foreground mb-6">
            Solene
          </span>
          <h2 className="luxury-heading text-3xl md:text-4xl lg:text-5xl max-w-3xl mx-auto text-balance">
            Design que transcende o convencional
          </h2>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 mb-16">
          {renders.map((render, index) => (
            <div
              key={render.title}
              className="group relative aspect-[4/3] overflow-hidden"
            >
              <img
                src={render.src}
                alt={render.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="font-display text-xl text-foreground">
                  {render.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <WhatsAppButton />
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
