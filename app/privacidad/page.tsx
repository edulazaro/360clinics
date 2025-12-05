import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Privacidad() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary-50 to-warm-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8">
            Política de Privacidad
          </h1>

          <div className="bg-white rounded-2xl p-8 shadow-lg space-y-6 text-gray-700">
            <p className="text-sm text-gray-500">Última actualización: Diciembre 2024</p>

            <div className="space-y-4">
              <h2 className="text-xl font-bold text-gray-900">1. Información General</h2>
              <p>
                Este sitio web pertenece a la Asociación de Afectados por 360 Clinics (en adelante, "la Asociación").
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-bold text-gray-900">2. Recopilación de Datos</h2>
              <p>
                Este sitio web <strong>no recopila datos personales</strong> de los visitantes.
                No utilizamos formularios de contacto ni sistemas de registro.
              </p>
              <p>
                Si decides unirte a nuestra comunidad a través de WhatsApp o Claimeet, los datos
                que proporciones en esas plataformas se regirán por sus respectivas políticas de privacidad.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-bold text-gray-900">3. Cookies</h2>
              <p>
                Este sitio web <strong>no utiliza cookies</strong> ni tecnologías de seguimiento similares.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-bold text-gray-900">4. Enlaces a Terceros</h2>
              <p>
                Este sitio contiene enlaces a plataformas externas (WhatsApp, Claimeet, Google Drive, etc.).
                No nos hacemos responsables de las políticas de privacidad de estos sitios. Te recomendamos
                revisar sus políticas antes de proporcionar cualquier dato personal.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-bold text-gray-900">5. Contacto</h2>
              <p>
                Si tienes preguntas sobre esta política de privacidad, puedes contactarnos a través
                de nuestro grupo de WhatsApp o mediante la plataforma Claimeet.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
