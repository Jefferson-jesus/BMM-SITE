import { HardHat, Wrench, Drill, Hammer, Truck, Settings, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';

const ServicesDetailSection = () => {
  const services = [
    {
      icon: HardHat,
      name: 'Andaimes Tubulares',
      description: 'Andaimes certificados e seguros para trabalhos em altura, com montagem e desmontagem profissional executada por equipe especializada.',
      features: ['Certificação NR-18', 'Montagem Profissional', 'Manutenção Inclusa'],
    },
    {
      icon: Wrench,
      name: 'Betoneiras Profissionais',
      description: 'Betoneiras de diversos portes para preparação de concreto e argamassa com máxima eficiência e produtividade.',
      features: ['Diversos Tamanhos', 'Alto Desempenho', 'Manutenção Preventiva'],
    },
    {
      icon: Settings,
      name: 'Compactadores',
      description: 'Equipamentos para compactação de solo e pavimentação, garantindo acabamento profissional e durabilidade.',
      features: ['Alta Eficiência', 'Baixo Consumo', 'Operação Simples'],
    },
    {
      icon: Drill,
      name: 'Ferramentas Elétricas',
      description: 'Furadeiras, lixadeiras, serras e outras ferramentas profissionais de marcas renomadas para sua obra.',
      features: ['Marcas Premium', 'Última Geração', 'Suporte Técnico'],
    },
    {
      icon: Hammer,
      name: 'Equipamentos Manuais',
      description: 'Ferramentas manuais de qualidade superior para diversos tipos de trabalho na construção civil.',
      features: ['Alta Durabilidade', 'Ergonomia', 'Variedade'],
    },
    {
      icon: Truck,
      name: 'Logística Completa',
      description: 'Serviço de entrega e retirada de equipamentos no local da obra com pontualidade e segurança.',
      features: ['Entrega Rápida', 'Retirada Agendada', 'Cobertura SP'],
    },
  ];

  const handleQuoteClick = () => {
    window.open('https://wa.me/5511943431660?text=Olá! Gostaria de solicitar um orçamento.', '_blank');
  };

  return (
    <section id="servicos" className="section-padding bg-gradient-to-b from-[#F8FAFC] to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#4FC3F7]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#0288D1]/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          {/* Section badge */}
          <div className="inline-block px-4 py-2 bg-[#4FC3F7]/10 rounded-full mb-6">
            <span className="text-[#0288D1] font-semibold text-sm uppercase tracking-wide">Catálogo Completo</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0F172A] mb-6">
            Serviços e <span className="gradient-text">Equipamentos</span>
          </h2>
          <div className="accent-line"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Locação de equipamentos e ferramentas com a qualidade, segurança e suporte 
            que sua obra merece
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#4FC3F7]/30 card-hover"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-[#4FC3F7] to-[#0288D1] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <service.icon size={32} className="text-white" />
              </div>
              
              {/* Content */}
              <h3 className="text-2xl font-bold text-[#0F172A] mb-3 group-hover:text-[#0288D1] transition-colors duration-300">
                {service.name}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle size={16} className="text-[#4FC3F7] flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-[#0A1929] via-[#01579B] to-[#0288D1] rounded-3xl p-12 md:p-16 text-center text-white shadow-2xl relative overflow-hidden">
          {/* Pattern overlay */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
          }}></div>
          
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Pronto para Começar seu Projeto?
            </h3>
            <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
              Solicite um orçamento personalizado e descubra como podemos ajudar sua obra
            </p>
            <Button 
              size="lg" 
              className="premium-button bg-white text-[#0288D1] hover:bg-gray-100 font-bold px-10 py-7 text-lg rounded-xl shadow-2xl hover:scale-105 transition-all duration-300"
              onClick={handleQuoteClick}
            >
              <span className="hidden sm:inline">Solicitar Orçamento Grátis</span>
              <span className="inline sm:hidden">Solicitar Orçamento</span>
              <CheckCircle className="ml-2" size={24} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesDetailSection;
