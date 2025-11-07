import { Wrench, HardHat, Hammer } from 'lucide-react';
import ServiceCard from './ServiceCard';

const ServicesSection = () => {
  const services = [
    {
      icon: HardHat,
      title: 'Locação de Andaimes',
      description: 'Andaimes certificados e seguros para obras de todos os portes, com montagem profissional',
    },
    {
      icon: Wrench,
      title: 'Equipamentos Profissionais',
      description: 'Betoneiras, compactadores e maquinário de última geração para sua obra',
    },
    {
      icon: Hammer,
      title: 'Soluções Personalizadas',
      description: 'Atendimento especializado e consultoria técnica para cada projeto',
    },
  ];

  const handleServiceClick = () => {
    document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="section-padding bg-gradient-to-b from-white to-[#F8FAFC] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#4FC3F7]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0288D1]/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          {/* Section badge */}
          <div className="inline-block px-4 py-2 bg-[#4FC3F7]/10 rounded-full mb-6">
            <span className="text-[#0288D1] font-semibold text-sm uppercase tracking-wide">Nossos Serviços</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0F172A] mb-6">
            Soluções <span className="gradient-text">Completas</span> para sua Obra
          </h2>
          <div className="accent-line"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Oferecemos equipamentos de alta qualidade com a segurança e confiabilidade 
            que seu projeto merece
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                onClick={handleServiceClick}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
