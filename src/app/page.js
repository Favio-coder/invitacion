'use client';
import Header from "./components/Header";
import { useState } from "react";
import { Heart, CalendarDays, Glasses, Shirt, Gift } from "lucide-react";
import Countdown from "./components/Countdown";
import AudioPlayer from "./components/AudioPlayer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChurch, faChampagneGlasses } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="bg-white text-[#a96a7d] min-h-screen font-sans">
      <AudioPlayer/>
      <Header />

      {/* HERO */}
      <section id="inicio" className="relative w-full h-[30vh] md:h-[85vh] overflow-hidden">
        <img
          src="https://media.istockphoto.com/id/1186306039/es/foto/este-d%C3%ADa-es-el-primero-de-muchos-d%C3%ADas-hermosos-juntos.jpg?s=612x612&w=0&k=20&c=xxVvY3EBLkFqdeK-QVssinjuBpbG0tvlXr7n2MruQh8="
          alt="Pareja romántica"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
          <h2 className="text-white text-4xl md:text-6xl font-script drop-shadow-lg mb-2">
            Richard & Elva
          </h2>
          <p className="text-white text-lg md:text-2xl italic font-light">
            ¡Nos casamos!
          </p>
          <div className="mt-4 animate-bounce text-white">
            <Heart size={48} />
          </div>
        </div>
      </section>

      {/* INVITACIÓN + CONTADOR */}
      <section id="fecha" className="py-16 bg-[#a96a7d] text-white text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-serif animate-pulse">¡Estás invitado!</h2>
        <p className="text-lg md:text-xl font-light">
          Nos encantaría que seas parte de este momento tan especial para nosotros ¡Falta poco!
        </p>
        <Countdown targetDate="2025-09-06T17:00:00" />
        <div className="mt-8">
          <button
            className="inline-flex items-center gap-2 bg-white text-[#a96a7d] font-semibold py-2 px-5 rounded-full shadow-lg hover:opacity-90 transition-all duration-300"
            onClick={() => alert('Luego lo vinculamos con Google Calendar 💡')}
          >
            <CalendarDays size={20} />
            Agendar recordatorio
          </button>
        </div>
      </section>

      {/* CEREMONIA */}
      <section id="ceremonia" className="bg-white text-[#a96a7d] py-14 px-6 text-center space-y-6">
        <div className="w-20 h-20 mx-auto animate-fade-in-slow">
          <FontAwesomeIcon icon={faChurch} className="text-[#a96a7d] text-4xl animate-pulse" />
        </div>
        <h2 className="text-4xl font-bold tracking-wide uppercase">Ceremonia</h2>
        <p className="text-xl font-semibold">Iglesia XXXXX</p>
        <hr className="border-t border-[#a96a7d]/40 w-24 mx-auto my-2" />
        <div className="flex items-center justify-center gap-4 text-md mt-4">
          <div className="flex items-center gap-1">
            <span>📅</span><span className="font-medium tracking-wide uppercase">06 Set</span>
          </div>
          <span className="w-px h-5 bg-[#a96a7d]/50"></span>
          <div className="flex items-center gap-1">
            <span>🕔</span><span className="font-medium">10:00 AM</span>
          </div>
        </div>
        <div className="mt-6">
          <a href="https://www.google.com/maps?q=Iglesia+San+José" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#a96a7d] text-white font-semibold py-2 px-5 rounded-full shadow-lg hover:bg-[#944a5f] transition-all duration-300">
            Ver ubicación
          </a>
        </div>
      </section>

      {/* CELEBRACIÓN */}
      <section id="celebracion" className="bg-[#a96a7d] text-white py-14 px-6 text-center space-y-6">
        <div className="w-20 h-20 mx-auto animate-fade-in-slow">
          <FontAwesomeIcon icon={faChampagneGlasses} className="text-white text-4xl animate-pulse" />
        </div>
        <h2 className="text-4xl font-bold tracking-wide uppercase">Celebración</h2>
        <p className="text-xl font-semibold">Villa Ariana</p>
        <hr className="border-t border-white/40 w-24 mx-auto my-2" />
        <div className="flex items-center justify-center gap-4 text-md mt-4">
          <div className="flex items-center gap-1">
            <span>📅</span><span className="font-medium tracking-wide uppercase">06 Set</span>
          </div>
          <span className="w-px h-5 bg-white/50"></span>
          <div className="flex items-center gap-1">
            <span>🕠</span><span className="font-medium">5:00 PM</span>
          </div>
        </div>
        <div className="mt-6">
          <a href="https://www.google.com/maps?q=Jardines+del+Valle" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-[#a96a7d] font-semibold py-2 px-5 rounded-full shadow-lg hover:opacity-90 transition-all duration-300">
            Ver ubicación
          </a>
        </div>
      </section>

      {/* GALERÍA DE FOTOS */}
      <section className="bg-white text-[#a96a7d] pt-6 pb-10 px-4 sm:px-6 md:px-12">
        <div className="hidden md:grid grid-cols-3 gap-6">
          {["https://i.pinimg.com/736x/4e/6c/5b/4e6c5b517f9ca3a2037bec464acfce1d.jpg", "https://i.pinimg.com/originals/d9/c1/9f/d9c19fc8b37260cc75cb82e4e706e0b1.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4NJ9buupn7ZeKb9xidFXnxDM4FHJnzsAD3A&s", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDD3-VTr8lfMnJAJy95JDZLG-MJMMpk3uM3A&s", "https://i.pinimg.com/736x/4e/6c/5b/4e6c5b517f9ca3a2037bec464acfce1d.jpg", "https://i.pinimg.com/originals/d9/c1/9f/d9c19fc8b37260cc75cb82e4e706e0b1.jpg"].map((src, index) => (
            <div key={index} className="opacity-0 animate-fade-left" style={{ animationDelay: `${index * 150}ms`, animationFillMode: "forwards" }}>
              <img src={src} alt={`Galería ${index + 1}`} className="w-full h-64 object-cover rounded-xl shadow-md" />
            </div>
          ))}
        </div>
        <div className="md:hidden grid grid-cols-2 gap-4 mt-4">
          {["https://i.pinimg.com/736x/4e/6c/5b/4e6c5b517f9ca3a2037bec464acfce1d.jpg", "https://i.pinimg.com/originals/d9/c1/9f/d9c19fc8b37260cc75cb82e4e706e0b1.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4NJ9buupn7ZeKb9xidFXnxDM4FHJnzsAD3A&s", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDD3-VTr8lfMnJAJy95JDZLG-MJMMpk3uM3A&s"].map((src, index) => (
            <div key={index} className="opacity-0 animate-fade-left" style={{ animationDelay: `${index * 150}ms`, animationFillMode: "forwards" }}>
              <img src={src} alt={`Galería Mobile ${index + 1}`} className="w-full h-52 object-cover rounded-xl shadow-md" />
            </div>
          ))}
        </div>
      </section>

      {/* REGALOS */}
      <section id='regalos' className="bg-white text-[#a96a7d] py-6 px-6 text-center space-y-1">
        <div className="flex justify-center animate-bounce">
          <Gift size={40} />
        </div>
        <h2 className="text-2xl font-semibold">Regalos</h2>
        <p className="text-lg font-light max-w-md mx-auto">
          Tu presencia es el mejor regalo. Pero si deseas hacernos un obsequio, puedes hacerlo desde el siguiente botón 💝
        </p>
        <button
          className="bg-[#a96a7d] text-white font-semibold mt-6 py-2 px-6 rounded-full shadow-lg hover:bg-[#944a5f] transition-all duration-300"
          onClick={() => setShowModal(true)}
        >
          Ver opciones de regalo
        </button>
      </section>

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4">
          <div className="bg-white text-[#a96a7d] rounded-xl p-6 max-w-sm w-full shadow-lg relative animate-fade-in">
            <button
              className="absolute top-2 right-2 text-[#a96a7d] font-bold text-xl hover:opacity-60"
              onClick={() => setShowModal(false)}
            >×</button>
            <h3 className="text-xl font-semibold mb-4 text-center">Opciones de regalo</h3>
            <div className="space-y-2">
              <p><span className="font-bold">Cuenta BCP:</span> 191-23456789-0-12</p>
              <p><span className="font-bold">Cuenta Interbank:</span> 002-3456789012</p>
              <p><span className="font-bold">Yape:</span> 95222080</p>
            </div>
          </div>
        </div>
      )}

      {/* FORMULARIO DE CONFIRMACIÓN */}
      <section id='asistencia' className="bg-white text-[#a96a7d] py-12 px-6 text-center space-y-6">
        <h2 className="text-2xl font-bold uppercase">Confirma tu asistencia</h2>
        <form className="max-w-lg mx-auto space-y-4">
          <input type="text" placeholder="Nombre completo" className="w-full px-4 py-2 border border-[#a96a7d]/30 rounded-md focus:outline-none" />
          <input type="text" placeholder="Número de contacto" className="w-full px-4 py-2 border border-[#a96a7d]/30 rounded-md focus:outline-none" />
          <textarea rows={4} placeholder="Mensaje (opcional)" className="w-full px-4 py-2 border border-[#a96a7d]/30 rounded-md focus:outline-none" />
          <button type="button" className="bg-[#a96a7d] text-white font-semibold py-2 px-6 rounded-full shadow-md hover:bg-[#944a5f] transition-all duration-300">
            Enviar
          </button>
        </form>
        <p className="mt-8 text-xl font-script">Los esperamos con mucho cariño,<br /><span className="text-2xl font-bold">Richard & Elva</span></p>
      </section>
    </div>
  );
}