'use client';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navItems = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#fecha', label: 'fecha' },
    { href: '#ceremonia', label: 'Ceremonia' },
    { href: '#celebracion', label: 'Celebración' },
    { href: '#regalos', label: 'Regalos' },
    { href: '#asistencia', label: 'Asistencia' },
    // { href: '#ubicacion', label: 'Ubicación' },
    // { href: '#musica', label: 'Música' },
  ];

  const navLinkClass =
    'group relative inline-flex items-center gap-1 transition-all duration-500';

  return (
    <>
      <header className="bg-white text-[#a96a7d] py-4 px-6 shadow-xl rounded-b-xl sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-center items-center relative">
          {/* Botón hamburguesa */}
          <button
            onClick={toggleMenu}
            className="md:hidden absolute left-6 focus:outline-none z-50"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Navegación escritorio centrada */}
          <nav className="hidden md:flex gap-6 font-semibold text-sm uppercase">
            {navItems.map(({ href, label }) => (
              <a href={href} key={href} className={navLinkClass}>
                <span className="transition-all duration-500 group-hover:mr-1">{label}</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-red-500">❤️</span>
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Overlay de menú móvil */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 flex items-center justify-center">
          <nav className="bg-white text-[#a96a7d] rounded-xl p-8 shadow-lg space-y-4 text-center text-sm font-medium uppercase w-4/5 max-w-xs">
            {navItems.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="block group transition-all duration-500"
              >
                <span className="inline-flex items-center justify-center group-hover:mr-1 transition-all duration-500">
                  {label}
                  <span className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-red-500">❤️</span>
                </span>
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
