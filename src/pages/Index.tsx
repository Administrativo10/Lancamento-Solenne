import HeroSection from "@/components/HeroSection";
import GallerySection from "@/components/GallerySection";
import { LetsWorkTogether } from "@/components/ui/lets-work-section";
import { Footer } from "@/components/ui/footer-section";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <GallerySection />
      <LetsWorkTogether />
      <Footer />
    </main>
  );
};

export default Index;
