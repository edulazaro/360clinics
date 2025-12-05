"use client";

import { useState, useEffect, useRef } from "react";

function AnimatedCounter({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const increment = end / (duration / 16);
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return (
    <div ref={ref} className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
      {count}{suffix}
    </div>
  );
}

function GridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgb(139, 92, 246) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(139, 92, 246) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Waves */}
      <svg
        className="absolute bottom-0 left-1/2 -translate-x-1/2"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        style={{ height: "200px", width: "120%", minWidth: "120%" }}
      >
        <path
          className="animate-wave1"
          fill="rgba(180, 180, 180, 0.5)"
          d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,138.7C672,128,768,160,864,181.3C960,203,1056,213,1152,197.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
        <path
          className="animate-wave2"
          fill="rgba(255, 255, 255, 0.7)"
          d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,218.7C672,235,768,245,864,234.7C960,224,1056,192,1152,181.3C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
        <path
          className="animate-wave3"
          fill="rgba(255, 255, 255, 1)"
          d="M0,288L48,272C96,256,192,224,288,218.7C384,213,480,235,576,245.3C672,256,768,256,864,245.3C960,235,1056,213,1152,208C1248,203,1344,213,1392,218.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-start pt-24 md:pt-32 justify-center bg-gradient-to-br from-primary-100 via-warm-50 to-primary-50 overflow-hidden"
    >
      <GridBackground />

      <div className="section-container text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-orange-500 mb-6 leading-tight">
            No Estás Solo en Esto
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
            Somos una comunidad de personas afectadas por las prácticas de{" "}
            <span className="font-semibold text-primary-700">360 Clinics</span>.
            Juntos buscamos justicia, apoyo mutuo y soluciones.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a href="#contacto" className="btn-primary w-full sm:w-auto">
              Necesito Ayuda
            </a>
            <a href="#sobre-nosotros" className="btn-secondary w-full sm:w-auto">
              Conocer Más
            </a>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-gray-700">
              Asociación sin ánimo de lucro creada para apoyar y defender los derechos
              de las personas afectadas por <span className="font-semibold text-primary-700">360 Clinics</span>.
            </p>
          </div>

          {/* Estadísticas o métricas de apoyo */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-md">
              <AnimatedCounter end={600} suffix="+" />
              <div className="text-gray-700 font-medium">Personas Unidas</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-md">
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                24/7
              </div>
              <div className="text-gray-700 font-medium">Apoyo Comunitario</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-md">
              <AnimatedCounter end={1} />
              <div className="text-gray-700 font-medium">Objetivo Común</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <a href="#sobre-nosotros" className="text-gray-600 hover:text-primary-600">
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </a>
      </div>
    </section>
  );
}
