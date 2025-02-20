import React, { useState, useEffect } from 'react';
import { Download, Moon, Sun, Loader2 } from 'lucide-react';

const cards = [
  { id: 0, title: '2D Avanzado', image: 'https://res.cloudinary.com/dmfs1od9n/image/upload/v1739998054/2D_Avanzado_ouqyaw.png', url: 'https://drive.google.com/uc?export=download&id=1GWUw9YRR2xNrrCXS3egONQO2GEZUmp6R'},
  { id: 1, title: 'Simuladores', image: 'https://res.cloudinary.com/dmfs1od9n/image/upload/v1739998018/Simuladores_Cover_kvidmd.png', url: 'https://drive.google.com/uc?export=download&id=1zyDpU4yy81CIk7JOWMkq8giVKSgVUGWm' },
  { id: 2, title: 'Terror (1ra persona)', image: 'https://res.cloudinary.com/dmfs1od9n/image/upload/v1739998051/Terror_1raPersona_hzm13i.png', url: 'https://drive.google.com/uc?export=download&id=1JbC8AvGR28jiHbfacQtP3Yl4DGUKNoDD' },
  { id: 3, title: 'Ficcion, Aventura (1ra persona)', image: 'https://res.cloudinary.com/dmfs1od9n/image/upload/v1739997975/Aventura_Ficcion_1raPersona_lixklk.png', url: 'https://drive.google.com/uc?export=download&id=13tkB-8brc2L4FyGIx-02kFawruHBgyiT' },
  { id: 4, title: 'Accion, comando (1ra persona)', image: 'https://res.cloudinary.com/dmfs1od9n/image/upload/v1739998027/Shooter_1raPersona_sbud20.png', url: 'https://drive.google.com/uc?export=download&id=1F1Ydub64Kx7BRd0fZpSlwe38m7Dqu_QY' },
  { id: 5, title: 'Estrategia, Campaña, Expansion', image: 'https://res.cloudinary.com/dmfs1od9n/image/upload/v1739998036/Estrategia_Cover_vtdok3.png', url: 'https://drive.google.com/uc?export=download&id=1MlKFL7ewxbdHtsuRkiPcB5Q6Cb32SHK6' },
  { id: 6, title: 'Juegos Pequeños', image: 'https://res.cloudinary.com/dmfs1od9n/image/upload/v1739997960/Juegos_Pequeios_lyrqbm.png', url: 'https://drive.google.com/uc?export=download&id=1s8pDqE2GSEE_kCOCVSgGsEMhQIu26B2g' },
  { id: 7, title: 'Peleas', image: 'https://res.cloudinary.com/dmfs1od9n/image/upload/v1739997977/Peleas_zbqdob.png', url: 'https://drive.google.com/uc?export=download&id=10_vPJ0mYKIrkrXwuu7AkpzRPN_jr0v3i' },
  { id: 8, title: 'RPG', image: 'https://res.cloudinary.com/dmfs1od9n/image/upload/v1739998023/RPG_z5q6zb.png', url: 'https://drive.google.com/uc?export=download&id=1pU1dm1oEWmbgn5_towvi6o30rqkMQLUt' },
  { id: 9, title: 'Deportes', image: 'https://res.cloudinary.com/dmfs1od9n/image/upload/v1739998034/Deportes_my199k.png', url: 'https://drive.google.com/uc?export=download&id=162NO5-aN0W6sSyXGFgDfqENKyhSrHJ9v' },
  { id: 10, title: 'Aviones', image: 'https://res.cloudinary.com/dmfs1od9n/image/upload/v1739998020/Aviones_Cover_eectqn.png', url: 'https://drive.google.com/uc?export=download&id=1txLgKyGhb4DDE-YR72S7b0G6zhyJR3sc' },
  { id: 11, title: 'Aventura, Ficción (3ra persona)', image: 'https://res.cloudinary.com/dmfs1od9n/image/upload/v1739997978/Aventura_3raPersona_pndbq9.png', url: 'https://drive.google.com/uc?export=download&id=1D9kcebhLGgNPZzDVKT86na4uLXLnLm2h' },
  { id: 12, title: 'Acción (3ra persona)', image: 'https://res.cloudinary.com/dmfs1od9n/image/upload/v1739997951/Accion_3raPersona_l5urlq.png', url: 'https://drive.google.com/uc?export=download&id=1BJGiTStLZH8YL0SGJWBpcX2-HCOPL4lw' },
  { id: 13, title: 'Terror (3ra persona)', image: 'https://res.cloudinary.com/dmfs1od9n/image/upload/v1739998054/Terror_3raPersona_egasz2.png', url: 'https://drive.google.com/uc?export=download&id=1F_Fx-sv8oKmV56A2TcjL3AZmQmSx_E3e' },
  { id: 14, title: 'Autos, motos', image: 'https://res.cloudinary.com/dmfs1od9n/image/upload/v1739997977/Autos_cover_qbf3zw.png', url: 'https://drive.google.com/uc?export=download&id=1HS1kfTRAX-ZfRDW1-vuPA27W6y-KzbYG' },
  { id: 15, title: 'Barcos', image: 'https://res.cloudinary.com/dmfs1od9n/image/upload/v1739997966/Barcos_papncf.jpg', url: 'https://drive.google.com/uc?export=download&id=1wO9JpQZP8lrFro5OYgu8v65X_WBQ1TSe' },
];

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState<Record<number, boolean>>({});

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleLoading = (id: number) => {
    setLoading((prev) => ({ ...prev, [id]: true }));

    setTimeout(() => {
      setLoading((prev) => ({ ...prev, [id]: false }));
    }, 4500);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6 md:p-8 lg:p-12 transition-colors duration-200">
      <div className="flex items-center justify-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white">
          Catálogos de Juegos PC
        </h1>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors ml-8"
          aria-label="Toggle theme"
        >
          {darkMode ? (
            <Sun className="w-6 h-6 text-yellow-500" />
          ) : (
            <Moon className="w-6 h-6 text-gray-700" />
          )}
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all hover:scale-105"
          >
            <div className="aspect-w-16 aspect-h-9 relative">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">{card.title}</h3>
              <a
                href={card.url}
                download="document.pdf"
                onClick={(e) => handleLoading(card.id)}
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

export default App;