"use client";

import { useState, useEffect } from "react";

// Fase 1: hasta el 18 de marzo → 40€ con contador hacia DEADLINE_PRICE
// Fase 2: del 19 marzo al 1 abril → 60€ con contador hacia DEADLINE_CLOSE
// Fase 3: después del 1 abril → banner cerrado
const DEADLINE_PRICE = new Date("2026-03-18T23:59:59+01:00").getTime();
const DEADLINE_CLOSE = new Date("2026-04-01T23:59:59+02:00").getTime(); // CEST = UTC+2
const PRICE_EARLY = 40;
const PRICE_LATE = 60;

function formatCountdown(diff: number) {
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function BottomBanner() {
  const [visible, setVisible] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [now, setNow] = useState(0);

  useEffect(() => {
    setMounted(true);
    setNow(Date.now());
    const interval = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(interval);
  }, []);

  if (!visible) return null;

  const phase1 = mounted && now <= DEADLINE_PRICE;
  const phase2 = mounted && now > DEADLINE_PRICE && now <= DEADLINE_CLOSE;
  const closed = mounted && now > DEADLINE_CLOSE;

  // Después del 1 de abril, no mostrar banner
  if (closed) return null;

  const price = phase2 ? PRICE_LATE : PRICE_EARLY;
  const targetDeadline = phase1 ? DEADLINE_PRICE : DEADLINE_CLOSE;
  const diff = targetDeadline - now;
  const { days, hours, minutes, seconds } = formatCountdown(Math.max(0, diff));

  const countdownLabel = phase1
    ? `para precio de ${PRICE_EARLY}€ (luego ${PRICE_LATE}€)`
    : "para apuntarse";

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gray-800 text-white shadow-lg">
      <button
        onClick={() => setVisible(false)}
        className="absolute top-2 right-2 text-gray-400 hover:text-white transition-colors text-xl leading-none"
        aria-label="Cerrar"
      >
        ✕
      </button>
      <div className="max-w-7xl mx-auto px-4 py-3 pr-10 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-sm sm:text-base">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
          <span className="font-bold text-lg">{price}€/afectado</span>

          {mounted && (
            <span className="flex flex-col sm:flex-row items-center gap-1 bg-gray-700 rounded-md px-2 py-1 text-xs sm:text-sm font-mono">
              <span className="flex items-center gap-1">
                <span>⏳</span>
                <span>{String(days).padStart(2, "0")}d</span>
                <span>{String(hours).padStart(2, "0")}h</span>
                <span>{String(minutes).padStart(2, "0")}m</span>
                <span>{String(seconds).padStart(2, "0")}s</span>
              </span>
              <span className="text-gray-400">{countdownLabel}</span>
            </span>
          )}
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 w-full sm:w-auto">
          <a
            href="https://claimeet.com/cases/360-clinics/processes/01kcjfhqv5vk7wq5fweyd3d48d"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-orange-400 transition-colors text-center w-full sm:w-auto"
          >
            Asóciate
          </a>
          <a
            href="https://claimeet.com/cases/360-clinics/polls/01kjtfq3jt6jnap10tv38dt99h"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-400 text-gray-900 font-semibold px-4 py-2 rounded-md hover:bg-yellow-300 transition-colors text-center w-full sm:w-auto"
          >
            Apúntate a la demanda
          </a>
        </div>
      </div>
    </div>
  );
}
