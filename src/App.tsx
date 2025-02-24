import { useState, useEffect } from 'react';
import { Moon, Sun, Loader2, FolderOpen } from 'lucide-react';
import ImageWithSkeleton from './Components/ImageWithSkeleton';
import { Link } from 'react-router-dom';

const cards = [
  { id: 0, title: 'Animados', image: 'https://res.cloudinary.com/dmfs1od9n/image/upload/f_auto,q_auto/v1740412661/warner-bros-animation-collage-v0-35a0wlfll4qb1_tuohdh.webp', url: '/animados'},
  { id: 1, title: 'Series', image: 'https://res.cloudinary.com/dmfs1od9n/image/upload/f_auto,q_auto/v1740412661/url-40_jdpsw3.jpg', url: '/series' },
  { id: 2, title: 'Peliculas', image: 'https://res.cloudinary.com/dmfs1od9n/image/upload/f_auto,q_auto/v1740412656/CINEMA-CLASSICS-POSTER_RUTGERS_1340_c_prxuzs.jpg', url: '/peliculas' },
  { id: 3, title: 'Novelas', image: 'https://res.cloudinary.com/dmfs1od9n/image/upload/f_auto,q_auto/v1740412660/25-Mejores-Novelas-Turcas-Principal-1_v1tn7e.jpg', url: '/novelas' },
  { id: 4, title: 'Juegos', image: 'https://res.cloudinary.com/dmfs1od9n/image/upload/f_auto,q_auto/v1740412660/photo_2025-02-24_10-57-07_f1mrcy.jpg', url: '/juegos' }
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
          Catálogos Tony-Copias 💾
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
            <ImageWithSkeleton 
              src={card.image} 
              alt={`Image: ${card.title}`}
            />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">{card.title}</h3>
              <Link
                to={card.url}
                onClick={() => handleLoading(card.id)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md flex items-center justify-center gap-2 transition-colors"
              >
                { loading[card.id]
                  ? <Loader2 className="animate-spin w-6 h-6 text-white"/> 
                  : <FolderOpen size={18} />
                }
                Abrir
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;