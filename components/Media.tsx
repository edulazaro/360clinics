export default function Media() {
  return (
    <section id="medios" className="bg-white">
      <div className="section-container">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-900 mb-4">
            Apariciones en Medios
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Nuestra causa está teniendo repercusión mediática. Aquí puedes ver algunas de las apariciones.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <a
              href="https://www.telemadrid.es/programas/buenos-dias-madrid/El-cierre-de-una-cadena-de-clinicas-esteticas-deja-cientos-de-afectados-en-Madrid-Nos-sentimos-estafados-2-2840435932--20251204085934.html"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 bg-primary-600 text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-gray-900 text-lg">Telemadrid - Buenos Días Madrid</p>
                <p className="text-gray-600">"Nos sentimos estafados"</p>
              </div>
            </a>

            <a
              href="https://drive.google.com/file/d/1ckcaX4FP6FuHEnvBOR8aiakl8eCqcua2/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 bg-primary-600 text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-gray-900 text-lg">Entrevista</p>
                <p className="text-gray-600">Testimonio de afectados</p>
              </div>
            </a>

            <a
              href="https://facua.org/noticias/los-afectados-por-el-cierre-de-las-clinicas-de-estetica-360-tienen-derecho-al-reembolso-de-los-tratamientos-no-realizados-advierte-facua/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 bg-primary-600 text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-gray-900 text-lg">FACUA</p>
                <p className="text-gray-600">Derecho al reembolso</p>
              </div>
            </a>

            <a
              href="https://www.elmundo.es/cronica/2025/11/07/690cda34fc6c83ec148b4598.html"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 bg-primary-600 text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-gray-900 text-lg">El Mundo</p>
                <p className="text-gray-600">Crónica del caso</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
