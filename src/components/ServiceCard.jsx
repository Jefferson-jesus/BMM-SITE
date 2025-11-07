import { Button } from '@/components/ui/button.jsx';
import { ArrowRight } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description, onClick }) => {
  return (
    <div className="group bg-white rounded-2xl shadow-xl p-8 card-hover border border-gray-100 relative">
      {/* Decorative gradient line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#4FC3F7] via-[#0288D1] to-[#01579B] rounded-t-2xl"></div>
      
      <div className="flex flex-col items-center text-center">
        {/* Icon with gradient background */}
        <div className="w-20 h-20 bg-gradient-to-br from-[#4FC3F7] to-[#0288D1] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
          <Icon size={40} className="text-white" />
        </div>
        
        {/* Title */}
        <h3 className="text-2xl font-bold text-[#0F172A] mb-4 group-hover:text-[#0288D1] transition-colors duration-300">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-gray-600 mb-6 min-h-[60px] leading-relaxed">
          {description}
        </p>
        
        {/* Button */}
        <Button 
          variant="ghost" 
          className="group/btn text-[#0288D1] hover:text-[#01579B] font-semibold transition-all duration-300"
          onClick={onClick}
        >
          Saiba Mais
          <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" size={20} />
        </Button>
      </div>
    </div>
  );
};

export default ServiceCard;
