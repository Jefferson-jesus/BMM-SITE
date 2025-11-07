import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5511943431660?text=Olá! Gostaria de solicitar um orçamento.', '_blank');
  };

  return (
    <button
      className="whatsapp-float"
      onClick={handleWhatsAppClick}
      aria-label="Fale conosco pelo WhatsApp"
    >
      <MessageCircle size={32} />
    </button>
  );
};

export default WhatsAppButton;
