import { CheckCircle, Award, Users, Shield, TrendingUp, Target } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';

const AboutSection = () => {
  const values = [
    { icon: Shield, text: 'Segurança Certificada', color: 'from-blue-500 to-cyan-500' },
    { icon: Award, text: 'Qualidade Premium', color: 'from-cyan-500 to-blue-600' },
    { icon: Users, text: 'Equipe Especializada', color: 'from-blue-600 to-indigo-600' },
    { icon: CheckCircle, text: 'Compromisso Total', color: 'from-indigo-600 to-blue-500' },
  ];

  const achievements = [
    { icon: TrendingUp, value: '10+', label: 'Anos no Mercado' },
    { icon: Target, value: '500+', label: 'Projetos Concluídos' },
    { icon: Award, value: '100%', label: 'Satisfação' },
  ];

  return (
    <section id="sobre" className="section-padding bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-gradient-to-br from-[#4FC3F7]/10 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            {/* Section badge */}
            <div className="inline-block px-4 py-2 bg-[#4FC3F7]/10 rounded-full mb-6">
              <span className="text-[#0288D1] font-semibold text-sm uppercase tracking-wide">Sobre Nós</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-6 leading-tight">
              Excelência em <span className="gradient-text">Locação de Equipamentos</span>
            </h2>
            
            <div className="w-20 h-1 bg-gradient-to-r from-[#4FC3F7] to-[#0288D1] mb-8"></div>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              A <strong>BMM Locadora e Serviços</strong> é referência em locação de andaimes e 
              equipamentos para construção civil. Com mais de uma década de experiência, oferecemos 
              soluções práticas, seguras e personalizadas para cada projeto.
            </p>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Nossa equipe altamente qualificada garante equipamentos certificados, atendimento 
              diferenciado e suporte técnico completo, conquistando a confiança de centenas de 
              clientes em todo o estado de São Paulo.
            </p>
            
            {/* Values Grid */}
            <div className="mb-10">
              <h3 className="text-xl font-bold text-[#0F172A] mb-6">Nossos Diferenciais</h3>
              <div className="grid grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-3 p-4 bg-gradient-to-br from-[#F8FAFC] to-white rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br ${value.color} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <value.icon size={24} className="text-white" />
                    </div>
                    <span className="text-gray-800 font-semibold text-sm">{value.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <Button 
              size="lg" 
              className="premium-button bg-gradient-to-r from-[#4FC3F7] to-[#0288D1] hover:from-[#0288D1] hover:to-[#01579B] text-white font-bold px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Conheça Nossos Serviços
              <CheckCircle className="ml-2" size={20} />
            </Button>
          </div>

          {/* Visual Element */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative">
              {/* Main card */}
              <div className="bg-gradient-to-br from-[#0A1929] via-[#01579B] to-[#4FC3F7] rounded-3xl shadow-2xl p-12 text-white relative overflow-hidden">
                {/* Pattern overlay */}
                <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
                }}></div>
                
                <div className="relative z-10 text-center">
                  <Award size={80} className="mx-auto mb-6 text-[#4FC3F7]" />
                  <div className="text-5xl font-bold mb-3">10+</div>
                  <div className="text-2xl font-semibold mb-8">Anos de Experiência</div>
                  
                  {/* Achievement stats */}
                  <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-white/20">
                    {achievements.map((achievement, index) => (
                      <div key={index} className="text-center">
                        <achievement.icon size={24} className="mx-auto mb-2 text-[#4FC3F7]" />
                        <div className="text-2xl font-bold">{achievement.value}</div>
                        <div className="text-xs opacity-90 mt-1">{achievement.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Floating accent cards */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#FFA726] rounded-2xl shadow-xl transform rotate-12 opacity-90"></div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-[#4FC3F7] rounded-2xl shadow-xl transform -rotate-12 opacity-90"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
