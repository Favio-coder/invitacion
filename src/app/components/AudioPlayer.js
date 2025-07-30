'use client';
import { useEffect, useRef, useState } from 'react';
import { VolumeX, Volume2, Music } from 'lucide-react';

export default function AudioControl() {
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const toggleAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;

    // Si aún no ha empezado, iniciar reproducción
    if (!hasStarted) {
      audio.play()
        .then(() => {
          setHasStarted(true);
          setIsMuted(false);
          audio.muted = false;
        })
        .catch((err) => {
          console.warn('No se pudo iniciar el audio:', err);
        });
    } else {
      // Si ya empezó, solo silenciar o activar sonido
      audio.muted = !audio.muted;
      setIsMuted(audio.muted);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.4;
    audio.loop = true;

    const checkLoop = () => {
      if (audio.currentTime >= 186) {
        audio.currentTime = 0;
        audio.play();
      }
    };

    audio.addEventListener('timeupdate', checkLoop);
    return () => audio.removeEventListener('timeupdate', checkLoop);
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <audio ref={audioRef} src="/mp3Music.mp3" />

      {/* Botón escritorio */}
      <button
        onClick={toggleAudio}
        className="hidden md:flex items-center gap-2 p-2 rounded-full bg-[#7D2E68] hover:bg-[#5B1F4D] text-white shadow-md transition-colors"
      >
        {isMuted || !hasStarted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        <span>
          {!hasStarted ? "Activar música" : isMuted ? "Silenciado" : "Reproduciendo"}
        </span>
      </button>

      {/* Botón móviles */}
      <button
        onClick={toggleAudio}
        className="flex md:hidden items-center p-2 rounded-full bg-[#7D2E68] hover:bg-[#5B1F4D] text-white shadow-md transition-colors"
      >
        {isMuted || !hasStarted ? <VolumeX size={20} /> : <Music size={20} />}
      </button>
    </div>
  );
}
