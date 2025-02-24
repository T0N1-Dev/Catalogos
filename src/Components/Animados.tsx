import { useState } from 'react';
import { Download, Loader2 } from 'lucide-react';
import ImageWithSkeleton from './ImageWithSkeleton';
import { Dog } from "lucide-react";
import Navbar from './Navbar';
import useScrollToTop from '../hooks/useScrollToTop';

const cards = [
  { id: 0, title: 'Peliculas Animadas', image: 'https://res.cloudinary.com/dmfs1od9n/image/upload/f_auto,q_auto/c_limit,w_800/v1740412661/warner-bros-animation-collage-v0-35a0wlfll4qb1_tuohdh.webp', url: 'https://drive.google.com/uc?export=download&id=1PeOqpE4hVv74qDdQtodLyBDWMjCQwPve'},
  { id: 1, title: 'Series Animadas Vol-1', image: 'https://res.cloudinary.com/dmfs1od9n/image/upload/f_auto,q_auto/c_limit,w_800/v1740422192/66478901_375945910011936_4574640091548352512_n_sfw4xa.jpg', url: 'https://drive.google.com/uc?export=download&id=1MYcA5JVQhQl7V12GKS0KRW3GAoXT1SQi' },
  { id: 2, title: 'Series Animadas Vol-2', image: 'https://res.cloudinary.com/dmfs1od9n/image/upload/f_auto,q_auto/c_limit,w_800/v1740422211/473776_lhiuf8.webp', url: 'https://drive.google.com/uc?export=download&id=19e44hIsLFoB9SOcFvJoKodZqBvNW84CG' },
];

function Animados() {
  const [loading, setLoading] = useState<Record<number, boolean>>({});

  const handleLoading = (id: number) => {
    setLoading((prev) => ({ ...prev, [id]: true }));

    setTimeout(() => {
      setLoading((prev) => ({ ...prev, [id]: false }));
    }, 4500);
  };

  useScrollToTop();

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6 md:p-8 lg:p-12 transition-colors duration-200">
      
      <Navbar title='Animados' Icon={Dog} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all hover:scale-105"
          >
            <div className="aspect-w-16 aspect-h-9 relative">
            <ImageWithSkeleton 
              src={card.image} 
              alt={`Image: ${card.title}`}
            />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">{card.title}</h3>
              <a
                href={card.url}
                download="document.pdf"
                onClick={() => handleLoading(card.id)}
                rel="noopener noreferrer"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md flex items-center justify-center gap-2 transition-colors"
              >
                { loading[card.id]
                  ? <Loader2 className="animate-spin w-6 h-6 text-white"/> 
                  : <Download size={18} />
                }
                Descargar
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Animados;