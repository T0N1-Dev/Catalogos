import { useState } from 'react';
import { Download, Loader2 } from 'lucide-react';
import ImageWithSkeleton from './ImageWithSkeleton';
import { Mouse } from "lucide-react";
import Navbar from './Navbar';
import useScrollToTop from '../hooks/useScrollToTop';

const cards = [
  { id: 0, title: '2D Avanzado', image: 'https://res.cloudinary.com/dmfs1od9n/image/upload/f_auto,q_auto/c_limit,w_800/v1739998054/2D_Avanzado_ouqyaw.png', url: 'https://drive.google.com/uc?export=download&id=1GWUw9YRR2xNrrCXS3egONQO2GEZUmp6R'},
  { id: 1, title: 'Simuladores', image: 'https://res.cloudinary.com/dmfs1od9n/image/upload/f_auto,q_auto/c_limit,w_800/v1739998018/Simuladores_Cover_kvidmd.png', url: 'https://drive.google.com/uc?export=download&id=1zyDpU4yy81CIk7JOWMkq8giVKSgVUGWm' },
  { id: 2, title: 'Terror (1ra persona)', image: 'https://res.cloudinary.com/dmfs1od9n/image/upload/f_auto,q_auto/c_limit,w_800/v1739998051/Terror_1raPersona_hzm13i.png', url: 'https://drive.google.com/uc?export=download&id=1JbC8AvGR28jiHbfacQtP3Yl4DGUKNoDD' },
  { id: 3, title: 'Ficcion, Aventura (1ra persona)', image: 'https://res.cloudinary.com/dmfs1od9n/image/upload/f_auto,q_auto/c_limit,w_800/v1739997975/Aventura_Ficcion_1raPersona_lixklk.png', url: 'https://drive.google.com/uc?export=download&id=13tkB-8brc2L4FyGIx-02kFawruHBgyiT' },
  { id: 4, title: 'Accion, comando (1ra persona)', image: 'https://res.cloudinary.com/dmfs1od9n/image/upload/f_auto,q_auto/c_limit,w_800/v1739998027/Shooter_1raPersona_sbud20.png', url: 'https://drive.google.com/uc?export=download&id=1F1Ydub64Kx7BRd0fZpSlwe38m7Dqu_QY' },
  { id: 5, title: 'Estrategia, Campaña, Expansion', image: 'https://res.cloudinary.com/dmfs1od9n/image/upload/f_auto,q_auto/c_limit,w_800/v1739998036/Estrategia_Cover_vtdok3.png', url: 'https://drive.google.com/uc?export=download&id=1MlKFL7ewxbdHtsuRkiPcB5Q6Cb32SHK6' },
  { id: 6, title: 'Juegos Pequeños', image: 'https://res.cloudinary.com/dmfs1od9n/image/upload/f_auto,q_auto/c_limit,w_800/v1739997960/Juegos_Pequeios_lyrqbm.png', url: 'https://drive.google.com/uc?export=download&id=1s8pDqE2GSEE_kCOCVSgGsEMhQIu26B2g' },
  { id: 7, title: 'Peleas', image: 'https://res.cloudinary.com/dmfs1od9n/image/upload/f_auto,q_auto/c_limit,w_800/v1739997977/Peleas_zbqdob.png', url: 'https://drive.google.com/uc?export=download&id=10_vPJ0mYKIrkrXwuu7AkpzRPN_jr0v3i' },
  { id: 8, title: 'RPG', image: 'https://res.cloudinary.com/dmfs1od9n/image/upload/f_auto,q_auto/c_limit,w_800/v1739998023/RPG_z5q6zb.png', url: 'https://drive.google.com/uc?export=download&id=1pU1dm1oEWmbgn5_towvi6o30rqkMQLUt' },
  { id: 9, title: 'Deportes', image: 'https://res.cloudinary.com/dmfs1od9n/image/upload/f_auto,q_auto/c_limit,w_800/v1739998034/Deportes_my199k.png', url: 'https://drive.google.com/uc?export=download&id=162NO5-aN0W6sSyXGFgDfqENKyhSrHJ9v' },
  { id: 10, title: 'Aviones', image: 'https://res.cloudinary.com/dmfs1od9n/image/upload/f_auto,q_auto/c_limit,w_800/v1739998020/Aviones_Cover_eectqn.png', url: 'https://drive.google.com/uc?export=download&id=1txLgKyGhb4DDE-YR72S7b0G6zhyJR3sc' },
  { id: 11, title: 'Aventura, Ficción (3ra persona)', image: 'https://res.cloudinary.com/dmfs1od9n/image/upload/f_auto,q_auto/c_limit,w_800/v1739997978/Aventura_3raPersona_pndbq9.png', url: 'https://drive.google.com/uc?export=download&id=1D9kcebhLGgNPZzDVKT86na4uLXLnLm2h' },
  { id: 12, title: 'Acción (3ra persona)', image: 'https://res.cloudinary.com/dmfs1od9n/image/upload/f_auto,q_auto/c_limit,w_800/v1739997951/Accion_3raPersona_l5urlq.png', url: 'https://drive.google.com/uc?export=download&id=1BJGiTStLZH8YL0SGJWBpcX2-HCOPL4lw' },
  { id: 13, title: 'Terror (3ra persona)', image: 'https://res.cloudinary.com/dmfs1od9n/image/upload/f_auto,q_auto/c_limit,w_800/v1739998054/Terror_3raPersona_egasz2.png', url: 'https://drive.google.com/uc?export=download&id=1F_Fx-sv8oKmV56A2TcjL3AZmQmSx_E3e' },
  { id: 14, title: 'Autos, motos', image: 'https://res.cloudinary.com/dmfs1od9n/image/upload/f_auto,q_auto/c_limit,w_800/v1739997977/Autos_cover_qbf3zw.png', url: 'https://drive.google.com/uc?export=download&id=1HS1kfTRAX-ZfRDW1-vuPA27W6y-KzbYG' },
  { id: 15, title: 'Barcos', image: 'https://res.cloudinary.com/dmfs1od9n/image/upload/f_auto,q_auto/c_limit,w_800/v1739997966/Barcos_papncf.jpg', url: 'https://drive.google.com/uc?export=download&id=1wO9JpQZP8lrFro5OYgu8v65X_WBQ1TSe' },
];

function Juegos() {
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
      
      <Navbar title='Juegos' Icon={Mouse} />

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

export default Juegos;