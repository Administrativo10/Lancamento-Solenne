"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import AutoScroll from "embla-carousel-auto-scroll";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface GalleryItem {
  id: string;
  title: string;
  summary: string;
  url: string;
  image: string;
}

interface GalleryProps {
  heading?: string;
  items?: GalleryItem[];
}

const GallerySection = ({
  heading = "",
  items = [
    {
      id: "item-1",
      title: "Passeio San Miguel",
      summary: "O primeiro boulevard gastronômico de Balneário Camboriú. Um charmoso open mall com música ao vivo, alta gastronomia e ambiente sofisticado.",
      url: "#",
      image: "/images/localidades/area-gasronomica-passeio-san-miguel.webp",
    },
    {
      id: "item-2",
      title: "PZ Ecomall",
      summary: "O primeiro mall gastronômico sustentável do Brasil. Design inovador e experiências culinárias orgânicas em um espaço que respira modernidade.",
      url: "#",
      image: "/images/localidades/area-gastronomica-PZ-Ecomall.webp",
    },
    {
      id: "item-3",
      title: "Barolo Trattoria",
      summary: "Premiada culinária italiana. Pratos clássicos e massas artesanais servidos em um ambiente elegante e acolhedor, ideal para jantares memoráveis.",
      url: "#",
      image: "/images/localidades/restaurante - barolo.webp",
    },
    {
      id: "item-4",
      title: "De Angelina",
      summary: "Mais que um mercado, uma experiência gourmet. Seleção exclusiva de importados, carnes nobres e uma adega completa para os paladares mais exigentes.",
      url: "#",
      image: "/images/localidades/mercado-de-angelina.webp",
    },
    {
      id: "item-5",
      title: "Villa Córdova",
      summary: "Sinônimo de excelência em panificação e confeitaria. Desde 2008 servindo delícias artesanais e refeições saborosas em um ambiente acolhedor e familiar.",
      url: "#",
      image: "/images/localidades/villa-cordova.webp",
    },
    {
      id: "item-6",
      title: "Smart Fit",
      summary: "Estrutura moderna para sua rotina de treinos. Equipamentos de alta tecnologia e ambiente climatizado a poucos minutos de casa.",
      url: "#",
      image: "/images/localidades/academia - smart-fit.webp",
    },
    {
      id: "item-7",
      title: "Lucca Cantina",
      summary: "Aconchego e sabor em cada prato. Uma cantina com alma italiana, perfeita para almoços em família e jantares descontraídos.",
      url: "#",
      image: "/images/localidades/restaurante-lucca-cantina.webp",
    },
    {
      id: "item-8",
      title: "Academia Wave",
      summary: "Excelência em bem-estar. Uma das academias mais completas da região, oferecendo diversas modalidades e atendimento personalizado.",
      url: "#",
      image: "/images/localidades/academia-wave.webp",
    },
  ],
}: GalleryProps) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  return (
    <section className="relative w-full py-24 md:py-32 bg-black overflow-hidden">
      {/* Background Image */}
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/localidades/bg-location.webp"
          alt="Background"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/40 to-black/90" />
      </div>

      <div className="w-full relative z-10">
        <Carousel
          setApi={setCarouselApi}
          plugins={[
            AutoScroll({
              speed: 1, // Slow continuous scroll
              stopOnInteraction: false,
              stopOnMouseEnter: true,
            }),
          ]}
          opts={{
            align: "start",
            loop: true,
            breakpoints: {
              "(max-width: 768px)": {
                dragFree: true,
              },
            },
          }}
        >
          <CarouselContent className="ml-8 2xl:ml-[max(8rem,calc(50vw-700px+1rem))]">
            {items.map((item) => (
              <CarouselItem key={item.id} className="pl-4 md:max-w-[452px]">
                <div className="group flex flex-col justify-between h-full">
                  <div>
                    <div className="flex aspect-[3/2] overflow-clip rounded-xl">
                      <div className="flex-1">
                        <div className="relative h-full w-full origin-bottom transition duration-300 group-hover:scale-105">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-3 line-clamp-2 break-words pt-6 text-xl md:text-2xl font-medium text-foreground">
                    {item.title}
                  </div>
                  <div className="line-clamp-3 text-base text-muted-foreground leading-relaxed">
                    {item.summary}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation Arrows - Desktop Only */}
          <div className="hidden md:block">
            <Button
              size="icon"
              variant="outline"
              onClick={() => carouselApi?.scrollPrev()}
              disabled={!canScrollPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full disabled:opacity-30"
            >
              <ArrowLeft className="size-5" />
            </Button>
            <Button
              size="icon"
              variant="outline"
              onClick={() => carouselApi?.scrollNext()}
              disabled={!canScrollNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full disabled:opacity-30"
            >
              <ArrowRight className="size-5" />
            </Button>
          </div>
        </Carousel>
      </div>
    </section >
  );
};

export default GallerySection;
