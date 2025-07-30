'use client';
import { useEffect, useRef, useState } from 'react';
import { VolumeX, Volume2, Music } from 'lucide-react';

export default function AudioControl() {
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);

  const toggleAudio = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.4;
      audio.currentTime = 0;
      audio.loop = true;

      // Solo reproducir entre 0 y 186s (3:06)
      const checkLoop = () => {
        if (audio.currentTime >= 186) {
          audio.currentTime = 0;
          audio.play();
        }
      };

      audio.play().catch(() => {
        // Algunos navegadores requieren interacción previa
        console.warn("Autoplay bloqueado por el navegador");
      });

      audio.addEventListener('timeupdate', checkLoop);
      return () => audio.removeEventListener('timeupdate', checkLoop);
    }
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Audio */}
      <audio ref={audioRef} src="/mp3Music.mp3" />

      {/* Desktop Button */}
      <button
        onClick={toggleAudio}
        className="hidden md:flex items-center gap-2 p-2 rounded-full bg-[#7D2E68] hover:bg-[#5B1F4D] text-white shadow-md transition-colors"
      >
        {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        <span>{isMuted ? "Silenciado" : "Reproduciendo"}</span>
      </button>

      {/* Mobile Icon-only Button */}
      <button
        onClick={toggleAudio}
        className="flex md:hidden items-center p-2 rounded-full bg-[#7D2E68] hover:bg-[#5B1F4D] text-white shadow-md transition-colors"
      >
        {isMuted ? <VolumeX size={20} /> : <Music size={20} />}
      </button>
    </div>
  );
}
