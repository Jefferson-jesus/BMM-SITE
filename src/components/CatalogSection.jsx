import { useState } from 'react';
import { Search, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';

// Importing images
import airless from "@/assets/catalogo/airless/maquina-de-pintura-airless.jpg";
import highPressure from "@/assets/catalogo/altapresao/WAP_KIT.png";
import AndaimeImg from '@/assets/catalogo/andaime/The_Largest_Tubular_Scaffolding_step_ladder_factory_from_ADTO.png';
import tubular from "@/assets/catalogo/andaime/ANDAIME_TUBOLAR.png";
import fachadeiro from "@/assets/catalogo/andaime/Andaime-Fachadeiro.jpg";
import torre_escoradmento from "@/assets/catalogo/andaime/Torre_de_Escoramento1.jpg";
import torre_escoradmento2 from "@/assets/catalogo/andaime/Torres_de_Escoramento2.jpg";
import betoneira200 from "@/assets/catalogo/betoneiras/Betoneira200L.png";
import betoneira400 from "@/assets/catalogo/betoneiras/Betoneira400L.png";
import banheiroQuimico from "@/assets/catalogo/BanheiroQuimico/Banheiro_Quimico.png";
import carrinhodeCarga from "@/assets/catalogo/carrinhoDeCarga/Carrinho_de_Carga.png";
import compactador from "@/assets/catalogo/compactadores/Compactadora_de_Solo.png";
import dutos from "@/assets/catalogo/dutos/Dutos.jpg";
import esmerilhadeira from "@/assets/catalogo/esmerilhadeira/Esmerilhadeira_de_4_aumentado.jpg";
import inversoraIntech from "@/assets/catalogo/inversora/Inversora_Intech.jpg";
import inversoraSaints from "@/assets/catalogo/inversora/Inversora_Saints.jpg";
import inversoraTork from "@/assets/catalogo/inversora/Inversora_Tork.png";
import lixadeira_de_parede from "@/assets/catalogo/lixadeira_de_parede/Lixadeira_Orbital_9_Teto.png";
import martelete18  from "@/assets/catalogo/martelete/Martelete_18_kg.png";
import martelete10 from "@/assets/catalogo/martelete/Martelete_de_10kg.png";
import martelete30 from "@/assets/catalogo/martelete/Martelete_de_30_kg.png";
import martelete15 from "@/assets/catalogo/martelete/martelete-15kg.jpg";
import marteleteParafusadeiraEletricaDe13mm from "@/assets/catalogo/martelete/martelete-parafusadeira-eletrica-de-13mm.png";
import misturadorArgamassaEletrico from "@/assets/catalogo/misturador/Misturador_Argamassa_Eletrico.png";
import paraFusadeiraComMala from "@/assets/catalogo/parafusadeira/Parafusadeira_c_mala.png";
import laserRotativo from "@/assets/catalogo/laserRotativo/LaserRotativo.jpeg";
import placaVibratoria from "@/assets/catalogo/placaVibradora/PlacaVibratoria.png";
import serraCirular from "@/assets/catalogo/serra/Serra_Circular.png";
import serraMarmore from "@/assets/catalogo/serra/Serra_Marmore.jpg";
import serraPolicorte from "@/assets/catalogo/serra/Serra_Policorte.png";
import serraTicoTico from "@/assets/catalogo/serra/Serra_Tico_Tico.jpg";
import torreDeIluminacao from "@/assets/catalogo/torreDeIluminacao/Torre_de_Iluminação.png";
import tradoEletrico from "@/assets/catalogo/trado/Trado_Eletrico.jpg";
import Trado from "@/assets/catalogo/trado/Trado.png";
// finish import images

const CatalogSection = () => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { name: 'all', label: 'Todos' },
    { name: 'andaimes', label: 'Andaimes' },
    { name: 'betoneiras', label: 'Betoneiras' },
    { name: 'ferramentas', label: 'Ferramentas' },
    { name: 'banheiroQuimico', label: 'Banheiro Químico' },
    { name: 'altapressao', label: 'Alta Pressão' },
    { name: 'carrinhoDeCarga', label: 'Carrinho de Carga' },
    { name: 'tubulacao', label: 'Tubulação' },
    { name: 'inversoras', label: 'Inversoras' },
    { name: 'lixadeira', label: 'Lixadeira de Parede' },
    { name: 'marteletes', label: 'Marteletes' },
    { name: 'misturadores', label: 'Misturadores' },
    { name: 'parafusadeiras', label: 'Parafusadeiras' },
    { name: 'laserRotativo', label: 'Laser Rotativo' },
    { name: 'placaVibratoria', label: 'Placa Vibratória' },
    { name: 'serras', label: 'Serras' },
    { name: 'torreDeIluminacao', label: 'Torre de Iluminação' },
    { name: 'trados', label: 'Trados' },
    { name: 'compactador', label: 'Compactadores' },
  ];

  const equipmentList = [
    { id: 1, name: 'Andaimes Multidirecional', category: 'andaimes', image: AndaimeImg },
    { id: 2, name: 'Andaimes Tubular', category: 'andaimes', image: tubular },
    { id: 3, name: 'Andaimes Fachadeiro', category: 'andaimes', image: fachadeiro },
    { id: 4, name: 'Torre de escoramento', category: 'andaimes', image: torre_escoradmento2 },
    { id: 5, name: 'Itens de Escoramento', category: 'andaimes', image: torre_escoradmento },
    { id: 6, name: 'Betoneira de 200L', category: 'betoneiras', image: betoneira200 },
    { id: 7, name: 'Betoneira de 400L', category: 'betoneiras', image: betoneira400 },    
    { id: 9, name: 'Banheiro Quimico', category: 'banheiroQuimico', image: banheiroQuimico },
    { id: 10, name: 'Pistola Airless', category: 'ferramentas', image: airless },
    { id: 11, name: 'Lavadora de Alta Pressão', category: 'altapressao', image: highPressure },
    { id: 12, name: 'Carrinho de Carga', category: 'carrinhoDeCarga', image: carrinhodeCarga },
    { id: 13, name: 'Dutos', category: 'tubulacao', image: dutos },
    { id: 14, name: 'Esmerilhadeira', category: 'ferramentas', image: esmerilhadeira },
    { id: 15, name: 'Inversora Intech', category: 'inversoras', image: inversoraIntech },
    { id: 16, name: 'Inversora Saints', category: 'inversoras', image: inversoraSaints },
    { id: 17, name: 'Inversora Tork', category: 'inversoras', image: inversoraTork },
    { id: 18, name: 'Lixadeira de Parede', category: 'lixadeira', image: lixadeira_de_parede },
    { id: 19, name: 'Martelete de 18kg', category: 'marteletes', image: martelete18 },
    { id: 20, name: 'Martelete de 10kg', category: 'marteletes', image: martelete10 },
    { id: 21, name: 'Martelete de 30kg', category: 'marteletes', image: martelete30 },
    { id: 22, name: 'Martelete de 15kg', category: 'marteletes', image: martelete15 },
    { id: 23, name: 'Martelete Parafusadeira Elétrica de 13mm', category: 'marteletes', image: marteleteParafusadeiraEletricaDe13mm },
    { id: 24, name: 'Misturador de Argamassa Elétrico', category: 'misturadores', image: misturadorArgamassaEletrico },
    { id: 25, name: 'Parafusadeira com Mala', category: 'parafusadeiras', image: paraFusadeiraComMala },
    { id: 26, name: 'Laser Rotativo', category: 'laserRotativo', image: laserRotativo },
    { id: 27, name: 'Placa Vibratória', category: 'placaVibratoria', image: placaVibratoria },
    { id: 28, name: 'Serra Circular', category: 'serras', image: serraCirular },
    { id: 29, name: 'Serra de Mármore', category: 'serras', image: serraMarmore },
    { id: 30, name: 'Serra Policorte', category: 'serras', image: serraPolicorte },
    { id: 31, name: 'Serra Tico Tico', category: 'serras', image: serraTicoTico }, 
    { id: 32, name: 'Torre de Iluminação', category: 'torreDeIluminacao', image: torreDeIluminacao },
    { id: 33, name: 'Trado Elétrico', category: 'trados', image: tradoEletrico },
    { id: 34, name: 'Trado Manual', category: 'trados', image: Trado },
    { id: 35, name: 'Compactador de Solo', category: 'compactador', image: compactador },

  ];

  const filteredEquipment = equipmentList.filter(equipment => {
    const matchesCategory = filter === 'all' || equipment.category === filter;
    const matchesSearch = equipment.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleWhatsAppClick = (equipmentName) => {
    window.open(`https://wa.me/5511943431660?text=Olá! Gostaria de solicitar um orçamento para o equipamento: ${equipmentName}.`, '_blank');
  };

  return (
    <section id="catalogo" className="section-padding bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-[#0288D1]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#4FC3F7]/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          {/* Section badge */}
          <div className="inline-block px-4 py-2 bg-[#4FC3F7]/10 rounded-full mb-6">
            <span className="text-[#0288D1] font-semibold text-sm uppercase tracking-wide">Nosso Catálogo</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0F172A] mb-6">
            Equipamentos de <span className="gradient-text">Alta Performance</span>
          </h2>
          <div className="accent-line"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore nossa vasta seleção de equipamentos e ferramentas para sua obra
          </p>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            {categories.map(cat => (
              <Button
                key={cat.name}
                variant={filter === cat.name ? 'default' : 'outline'}
                className={`rounded-full px-6 py-3 text-base font-semibold transition-all duration-300 ${
                  filter === cat.name 
                    ? 'bg-gradient-to-r from-[#4FC3F7] to-[#0288D1] text-white shadow-md hover:from-[#0288D1] hover:to-[#01579B]'
                    : 'border-gray-300 text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setFilter(cat.name)}
              >
                {cat.label}
              </Button>
            ))}
          </div>
          <div className="relative w-full md:w-auto">
            <input
              type="text"
              placeholder="Buscar equipamento..."
              className="w-full md:w-64 pl-12 pr-4 py-3 rounded-full border border-gray-300 focus:ring-2 focus:ring-[#4FC3F7] focus:border-transparent transition-all duration-300 shadow-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        {/* Equipment Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredEquipment.length > 0 ? (
            filteredEquipment.map(equipment => (
              <div 
                key={equipment.id} 
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 card-hover overflow-hidden"
              >
                <div className="relative w-full h-68 overflow-hidden">
                  <img 
                    src={equipment.image} 
                    alt={equipment.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 img-catalog"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#0F172A] mb-3 group-hover:text-[#0288D1] transition-colors duration-300">
                    {equipment.name}
                  </h3>
                  <Button 
                    className="premium-button w-full bg-gradient-to-r from-[#4FC3F7] to-[#0288D1] hover:from-[#0288D1] hover:to-[#01579B] text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                    onClick={() => handleWhatsAppClick(equipment.name)}
                  >
                    <MessageCircle className="mr-2" size={20} />
                    Solicitar Orçamento
                  </Button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center text-gray-600 text-xl py-10">
              Nenhum equipamento encontrado para esta busca.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CatalogSection;
