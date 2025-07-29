'use client';
import { useEffect, useState } from 'react';

export default function Countdown({ targetDate }) {
  const [time, setTime] = useState({});
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);

    const calculate = () => {
      const now = new Date().getTime();
      const then = new Date(targetDate).getTime();
      const diff = then - now;

      return {
        days: Math.max(Math.floor(diff / (1000 * 60 * 60 * 24)), 0),
        hours: Math.max(Math.floor((diff / (1000 * 60 * 60)) % 24), 0),
        minutes: Math.max(Math.floor((diff / (1000 * 60)) % 60), 0),
        seconds: Math.max(Math.floor((diff / 1000) % 60), 0),
      };
    };

    setTime(calculate());
    const interval = setInterval(() => {
      setTime(calculate());
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  if (!hasMounted) return null;

  const unitStyles = "flex flex-col items-center text-[#a96a7d]";
  const circleStyles = "w-20 h-20 md:w-24 md:h-24 rounded-full bg-white flex items-center justify-center font-semibold text-2xl shadow-lg";

  return (
    <div className="flex justify-center gap-4 text-center">
      <div className={unitStyles}>
        <div className={circleStyles}>{time.days}</div>
        <span className="mt-1 text-sm text-white">Días</span>
      </div>
      <div className={unitStyles}>
        <div className={circleStyles}>{time.hours}</div>
        <span className="mt-1 text-sm text-white">Horas</span>
      </div>
      <div className={unitStyles}>
        <div className={circleStyles}>{time.minutes}</div>
        <span className="mt-1 text-sm text-white">Minutos</span>
      </div>
      <div className={unitStyles}>
        <div className={circleStyles}>{time.seconds}</div>
        <span className="mt-1 text-sm text-white">Segundos</span>
      </div>
    </div>
  );
}
