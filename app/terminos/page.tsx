import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Terminos() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary-50 to-warm-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8">
            Términos y Condiciones
          </h1>

          <div className="bg-white rounded-2xl p-8 shadow-lg space-y-6 text-gray-700">
            <p className="text-sm text-gray-500">Última actualización: Diciembre 2024</p>

            <div className="space-y-4">
              <h2 className="text-xl font-bold text-gray-900">1. Objeto</h2>
              <p>
                Los presentes términos y condiciones regulan el uso del sitio web de la Asociación
                de Afectados por 360 Clinics, así como la participación en las acciones colectivas
                organizadas por la misma.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-bold text-gray-900">2. Naturaleza de la Asociación</h2>
              <p>
                La Asociación de Afectados por 360 Clinics es una entidad sin ánimo de lucro cuyo
                objetivo es defender los derechos de las personas afectadas por el cierre de los
                centros de 360 Clinics.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-bold text-gray-900">3. Participación</h2>
              <p>
                La participación en la Asociación es voluntaria y gratuita. Al unirte, te comprometes a:
              </p>
              <ul className="list-disc list-outside pl-5 space-y-2">
                <li>Proporcionar información veraz sobre tu caso</li>
                <li>Colaborar de buena fe con las acciones de la Asociación</li>
                <li>Respetar a los demás miembros de la comunidad</li>
                <li>No utilizar la información compartida para fines distintos a los de la Asociación</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-bold text-gray-900">4. Información y Asesoramiento</h2>
              <p>
                La información proporcionada en este sitio web tiene carácter orientativo y no
                constituye asesoramiento legal profesional. Para casos específicos, recomendamos
                consultar con un abogado.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-bold text-gray-900">5. Limitación de Responsabilidad</h2>
              <p>
                La Asociación no garantiza resultados específicos en las reclamaciones o acciones
                legales emprendidas. Cada caso será evaluado individualmente y los resultados
                dependerán de múltiples factores.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-bold text-gray-900">6. Propiedad Intelectual</h2>
              <p>
                Los contenidos de este sitio web, incluyendo textos, imágenes y diseño, son
                propiedad de la Asociación o se utilizan con autorización. Queda prohibida su
                reproducción sin consentimiento previo.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-bold text-gray-900">7. Enlaces Externos</h2>
              <p>
                Este sitio puede contener enlaces a sitios web de terceros (Claimeet, WhatsApp, etc.).
                La Asociación no se responsabiliza del contenido o las políticas de privacidad de
                estos sitios externos.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-bold text-gray-900">8. Modificaciones</h2>
              <p>
                La Asociación se reserva el derecho de modificar estos términos y condiciones en
                cualquier momento. Los cambios serán comunicados a través de los canales oficiales.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-bold text-gray-900">9. Legislación Aplicable</h2>
              <p>
                Estos términos se rigen por la legislación española. Para cualquier controversia,
                las partes se someten a los juzgados y tribunales de Madrid.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-bold text-gray-900">10. Contacto</h2>
              <p>
                Para cualquier consulta sobre estos términos, puedes contactarnos a través de
                nuestro grupo de WhatsApp o mediante la plataforma Claimeet.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
