import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  className?: string;
}

const WhatsAppButton = ({ className = "" }: WhatsAppButtonProps) => {
  const handleClick = () => {
    // Replace with your WhatsApp number
    window.open("https://wa.me/5548999999999?text=Olá! Gostaria de receber detalhes sobre o Solene.", "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className={`group inline-flex items-center gap-3 bg-whatsapp hover:bg-whatsapp-hover text-primary-foreground font-medium px-8 py-4 rounded transition-all duration-300 hover:scale-[1.02] hover:shadow-lg ${className}`}
    >
      <MessageCircle className="w-5 h-5 transition-transform group-hover:scale-110" />
      <span className="font-body text-sm tracking-wide uppercase">
        Receba os detalhes Agora!
      </span>
    </button>
  );
};

export default WhatsAppButton;
