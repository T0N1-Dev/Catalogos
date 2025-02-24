import { useState } from 'react';
import { Download, Loader2 } from 'lucide-react';
import ImageWithSkeleton from './ImageWithSkeleton';
import { Film } from "lucide-react";
import Navbar from './Navbar';
import useScrollToTop from '../hooks/useScrollToTop';

const cards = [
  { id: 0, title: 'Series Finalizadas Vol-1', image: 'https://res.cloudinary.com/dmfs1od9n/image/upload/f_auto,q_auto/c_limit,w_800v1740423400/Capture1_n4ugve.png', url: 'https://drive.google.com/uc?export=download&id=1CWcZCnICq5vnAp20VnqdchivI_2S-OkC' },
  { id: 1, title: 'Series Finalizadas Vol-2', image: 'https://res.cloudinary.com/dmfs1od9n/image/upload/f_auto,q_auto/c_limit,w_800v1740423110/Capture2_e8tpcl.png', url: 'https://drive.google.com/uc?export=download&id=12h6wjyZFGFzCbrWmHiotIZwbOu1iYKZo' },
  { id: 2, title: 'Series Finalizadas Vol-3', image: 'https://res.cloudinary.com/dmfs1od9n/image/upload/f_auto,q_auto/c_limit,w_800v1740423432/Capture3_k2hi8k.png', url: 'https://drive.google.com/uc?export=download&id=1CSkx9NVxvJDHEnykD5eLzi1adw8gXCNN' },
  { id: 3, title: 'Series Finalizadas Vol-4', image: 'https://res.cloudinary.com/dmfs1od9n/image/upload/f_auto,q_auto/c_limit,w_800v1740423150/Capture4_dt6ulb.png', url: 'https://drive.google.com/uc?export=download&id=1krtrYpkqt5hQ13FsRFSYVPvv47zFcckS' },
  { id: 4, title: 'Series Finalizadas Vol-5', image: 'https://res.cloudinary.com/dmfs1od9n/image/upload/f_auto,q_auto/c_limit,w_800v1740423087/Capture5_x0dcup.png', url: 'https://drive.google.com/uc?export=download&id=1m5y7LvzGLx99VdXy3NDYy-qJW-3RZM_8' }
];

function Series() {
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
      
      <Navbar title='Series' Icon={Film} />

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

export default Series;