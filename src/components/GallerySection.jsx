import { useState } from 'react';
import { Image as ImageIcon, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { id: 1, src: 'https://via.placeholder.com/600x400/4FC3F7/FFFFFF?text=Obra+1', alt: 'Obra BMM 1', category: 'andaimes' },
    { id: 2, src: 'https://via.placeholder.com/400x600/0288D1/FFFFFF?text=Obra+2', alt: 'Obra BMM 2', category: 'equipamentos' },
    { id: 3, src: 'https://via.placeholder.com/800x500/4FC3F7/FFFFFF?text=Obra+3', alt: 'Obra BMM 3', category: 'andaimes' },
    { id: 4, src: 'https://via.placeholder.com/500x700/01579B/FFFFFF?text=Obra+4', alt: 'Obra BMM 4', category: 'equipamentos' },
    { id: 5, src: 'https://via.placeholder.com/700x450/4FC3F7/FFFFFF?text=Obra+5', alt: 'Obra BMM 5', category: 'andaimes' },
    { id: 6, src: 'https://via.placeholder.com/450x650/0288D1/FFFFFF?text=Obra+6', alt: 'Obra BMM 6', category: 'equipamentos' },
    { id: 7, src: 'https://via.placeholder.com/600x600/01579B/FFFFFF?text=Obra+7', alt: 'Obra BMM 7', category: 'andaimes' },
    { id: 8, src: 'https://via.placeholder.com/700x400/4FC3F7/FFFFFF?text=Obra+8', alt: 'Obra BMM 8', category: 'equipamentos' },
  ];

  return (
    <section id="galeria" className="section-padding bg-gradient-to-b from-white to-[#F8FAFC] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-[#0288D1]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#4FC3F7]/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          {/* Section badge */}
          <div className="inline-block px-4 py-2 bg-[#4FC3F7]/10 rounded-full mb-6">
            <span className="text-[#0288D1] font-semibold text-sm uppercase tracking-wide">Nossa Galeria</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0F172A] mb-6">
            Projetos de <span className="gradient-text">Sucesso</span>
          </h2>
          <div className="accent-line"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Confira alguns dos projetos que realizamos e a qualidade dos nossos serviços
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((image) => (
            <motion.div
              key={image.id}
              layoutId={image.id}
              onClick={() => setSelectedImage(image)}
              className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <h3 className="text-white text-lg font-semibold">{image.alt}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox for selected image */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              layoutId={selectedImage.id}
              className="relative max-w-3xl max-h-[90vh] w-full rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the image
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-full object-contain"
              />
              <button
                className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors duration-300"
                onClick={() => setSelectedImage(null)}
              >
                <X size={24} />
              </button>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                <h3 className="text-xl font-semibold">{selectedImage.alt}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
