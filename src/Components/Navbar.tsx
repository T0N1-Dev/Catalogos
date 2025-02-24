import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Moon, Sun } from "lucide-react";

interface NavbarProps {
  title: string;
  Icon: React.ElementType; 
}

const Navbar: React.FC<NavbarProps> = ({ title, Icon }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="flex items-center justify-between p-4 mb-5 bg-transparent dark:bg-gray-900">
      {/* Botón de Atrás */}
      <Link to="/" className="flex items-center">
        <ArrowLeft className="text-gray-800 dark:text-white" size={45} />
      </Link>

      {/* Título e Icono */}
      <div className="flex items-center gap-5">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white">{title}</h1>
        <Icon className='text-gray-800 mt-2 dark:text-white' size={45} />
      </div>

      {/* Botón Modo Oscuro */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        aria-label="Toggle theme"
      >
        {darkMode ? <Sun className="w-6 h-6 text-yellow-500" /> : <Moon className="w-6 h-6 text-gray-700" />}
      </button>
    </nav>
  );
};

export default Navbar;
