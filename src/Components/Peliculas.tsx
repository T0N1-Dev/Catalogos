import { useState } from 'react';
import { Download, Loader2 } from 'lucide-react';
import ImageWithSkeleton from './ImageWithSkeleton';
import { Film } from "lucide-react";
import Navbar from './Navbar';
import useScrollToTop from '../hooks/useScrollToTop';

const cards = [
  { id: 0, title: 'Películas de Accion', image: 'https://res.cloudinary.com/dmfs1od9n/image/upload/f_auto,q_auto/v1740427762/Accion_cmxw5f.jpg', url: 'https://drive.google.com/uc?export=download&id=1HpAfGVmCFaIqHpZn7PiQlsxfMhpRW_xD'},
  { id: 1, title: 'Películas de Baile', image: 'https://res.cloudinary.com/dmfs1od9n/image/upload/f_auto,q_auto/v1740427756/Baile_xipcjv.webp', url: 'https://drive.google.com/uc?export=download&id=1Ry6MFBo88rNNCWji7PKjJUyn8QAJexPR' },
  { id: 2, title: 'Películas de Catastrofe', image: 'https://res.cloudinary.com/dmfs1od9n/image/upload/f_auto,q_auto/v1740427769/Catastrofes_t4tjcr.jpg', url: 'https://drive.google.com/uc?export=download&id=16pozqLybCJR4g4w0ZbVGu0V4d3-dIW8q' },
  { id: 3, title: 'Películas de Comedia', image: 'https://res.cloudinary.com/dmfs1od9n/image/upload/f_auto,q_auto/v1740427771/Comedias_xxuxsu.jpg', url: 'https://drive.google.com/uc?export=download&id=1rWd_MNssHtEkZ7l4fOcPwf2RM_xExuBm' },
  { id: 4, title: 'Películas de Deporte', image: 'https://res.cloudinary.com/dmfs1od9n/image/upload/f_auto,q_auto/v1740427778/Deportes_usnahb.webp', url: 'https://drive.google.com/uc?export=download&id=1GTbNF6JRsDswPKL5Zgo1kL5Ri69188LJ' },
  { id: 5, title: 'Películas Documentales', image: 'https://res.cloudinary.com/dmfs1od9n/image/upload/f_auto,q_auto/v1740427825/Documentales_va5nt0.jpg', url: 'https://drive.google.com/uc?export=download&id=1GnbICOS0QT2d5I52pQyO5NFNWGQm56c7' },
  { id: 6, title: 'Películas de Drama', image: 'https://res.cloudinary.com/dmfs1od9n/image/upload/f_auto,q_auto/v1740427883/Drama_emqat3.jpg', url: 'https://drive.google.com/uc?export=download&id=1hTZS430nZBeQ5CZ_-vW2h1X-2gE01KQ_' },
  { id: 7, title: 'Live Action (Películas en Persona)', image: 'https://res.cloudinary.com/dmfs1od9n/image/upload/f_auto,q_auto/v1740427745/live_action_zfrs5x.webp', url: 'https://drive.google.com/uc?export=download&id=1BTFVvs1OQMAR4DJ22SEHfAfKCCsmsUZr' },
  { id: 8, title: 'Películas Eroticas', image: 'https://res.cloudinary.com/dmfs1od9n/image/upload/f_auto,q_auto/v1740427806/Eroticas_vs5fo7.jpg', url: 'https://drive.google.com/uc?export=download&id=18HHE-8EKByNsYWh2Ks5PBbdf7yMV4mk9' },
  { id: 9, title: 'Peliculas de Ficción y Aventura', image: 'https://res.cloudinary.com/dmfs1od9n/image/upload/f_auto,q_auto/v1740427760/Aventuras_nve75t.jpg', url: 'https://drive.google.com/uc?export=download&id=1UYDXFBFky_qmm5BAqBZxlJ5QWaxfRjmp' },
  { id: 10, title: 'Películas Juveniles', image: 'https://res.cloudinary.com/dmfs1od9n/image/upload/f_auto,q_auto/v1740427811/Juveniles_awjdvx.jpg', url: 'https://drive.google.com/uc?export=download&id=1rFdKcOc3cXm2dXqiGqtzxMbFKWK3UZ6W' },
  { id: 11, title: 'Películas de Navidad', image: 'https://res.cloudinary.com/dmfs1od9n/image/upload/f_auto,q_auto/v1740427779/Navidad_p71bxp.jpg', url: 'https://drive.google.com/uc?export=download&id=1awWxtbSb0AmZw2Nd0T2Fyj4gF1YarBIn' },
  { id: 12, title: 'Películas de Terror', image: 'https://res.cloudinary.com/dmfs1od9n/image/upload/f_auto,q_auto/v1740427778/Terror_quvehl.jpg', url: 'https://drive.google.com/uc?export=download&id=1gFjbaXOWW5AOyueOZnCnRfV_jWgd1aOQ' }
];

function Peliculas() {
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
      
      <Navbar title='Películas' Icon={Film} />

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

export default Peliculas;