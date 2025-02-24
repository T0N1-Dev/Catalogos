import { useState } from 'react';
import { Download, Loader2 } from 'lucide-react';
import ImageWithSkeleton from './ImageWithSkeleton';
import { Film } from "lucide-react";
import Navbar from './Navbar';
import useScrollToTop from '../hooks/useScrollToTop';

const cards = [
  { id: 0, title: 'Novelas en Transmisión', image: 'https://res.cloudinary.com/dmfs1od9n/image/upload/f_auto,q_auto/v1740429589/telenovelas_fhjojq.webp', url: 'https://drive.google.com/uc?export=download&id=1UE3ok3jCyNNinZGTa1B5KsFelQHz8fRZ'},
  { id: 1, title: 'Novelas Coreanas', image: 'https://res.cloudinary.com/dmfs1od9n/image/upload/f_auto,q_auto/v1740429408/Coreanas_fkavo2.jpg', url: 'https://drive.google.com/uc?export=download&id=1bzk8r-El1x2StW7zjn7x7d64bf6FcX-S' },
  { id: 2, title: 'Novelas Finzalizadas Vol-1', image: 'https://res.cloudinary.com/dmfs1od9n/image/upload/f_auto,q_auto/v1740412660/25-Mejores-Novelas-Turcas-Principal-1_v1tn7e.jpg', url: 'https://drive.google.com/uc?export=download&id=1-dYeuJyRyaRvCcmqerAuRnNbWVw4Cx6w' },
  { id: 3, title: 'Novelas Finzalizadas Vol-2', image: 'https://res.cloudinary.com/dmfs1od9n/image/upload/f_auto,q_auto/v1740412660/25-Mejores-Novelas-Turcas-Principal-1_v1tn7e.jpg', url: 'https://drive.google.com/uc?export=download&id=1Btbtq3cZKtcy8rUGVOkqdA86rOkdshAj' },
  { id: 4, title: 'Novelas Finzalizadas Vol-3', image: 'https://res.cloudinary.com/dmfs1od9n/image/upload/f_auto,q_auto/v1740412660/25-Mejores-Novelas-Turcas-Principal-1_v1tn7e.jpg', url: 'https://drive.google.com/uc?export=download&id=1qRs8TFV8xCN4Z4kcQMvgQ2KjCpMNRfcY' },
  { id: 5, title: 'Novelas Finzalizadas Vol-4', image: 'https://res.cloudinary.com/dmfs1od9n/image/upload/f_auto,q_auto/v1740412660/25-Mejores-Novelas-Turcas-Principal-1_v1tn7e.jpg', url: 'https://drive.google.com/uc?export=download&id=1do6tOtjbPwIXLiEvwjhDrwG1VgPwnSSP' },
  { id: 6, title: 'Novelas Finzalizadas Vol-5', image: 'https://res.cloudinary.com/dmfs1od9n/image/upload/f_auto,q_auto/v1740412660/25-Mejores-Novelas-Turcas-Principal-1_v1tn7e.jpg', url: 'https://drive.google.com/uc?export=download&id=1FrlpG2G3K4kjiOph6YYcDxAzATSOSw9t' },
];

function Novelas() {
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
      
      <Navbar title='Novelas' Icon={Film} />

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

export default Novelas;