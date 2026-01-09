export default function Testimonials() {
  return (
    <section id="pasos" className="bg-gradient-to-br from-warm-50 to-primary-50">
      <div className="section-container">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-900 mb-4">
            Cómo Proceder
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Sigue estos pasos para reclamar tus derechos. Estamos creando la Asociación
            de afectados para poner una queja a nivel nacional.
          </p>

          {/* Proceso paso a paso */}
          <div className="mb-12">

            {/* Sección: ¿Has financiado? */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                ¿Has financiado?
              </h3>
              <hr className="border-gray-300 mb-12" />
              <div className="card border-l-4 border-amber-500 bg-amber-50">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-amber-500 text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      Hablar con tu Financiera o Banco
                    </h4>
                    <p className="text-gray-600 mb-3">
                      <strong>Solo si has financiado:</strong> Contacta con tu financiera (Sequra, BBVA, Cofidis, Alma, Floa, etc.)
                      para intentar resolver el problema directamente.
                    </p>
                    <div className="bg-white p-3 rounded-lg text-sm">
                      <div className="flex flex-col gap-2">
                        <a
                          href="https://claimeet.com/cases/360-clinics/threads/01k9pw2esvbqft6f01gk143f73"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-600 hover:text-primary-700 font-semibold inline-flex items-center"
                        >
                          Instrucciones acerca de cómo reclamar
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                        <a
                          href="https://chat.whatsapp.com/Cd3QUobUgkEEoQH3xzQX6b"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-600 hover:text-primary-700 font-semibold inline-flex items-center"
                        >
                          Grupo WhatsApp por Financieras
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </div>
                    </div>
                    <p className="text-gray-700 mt-3 font-medium">
                      Después de reclamar a tu financiera, continúa con los pasos de abajo.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sección: ¿No has financiado? */}
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              ¿No has financiado? Comienza aquí
            </h3>
            <hr className="border-gray-300 mb-12" />

            {/* Grid de 2 columnas */}
            <div className="grid md:grid-cols-2 gap-8">

              {/* Columna 1: Acción Individual */}
              <div className="md:order-last">
                <h4 className="text-xl font-bold text-primary-600 mb-4 text-center">
                  Acción Individual
                </h4>
                <p className="text-gray-600 mb-6 text-center">
                  Procede por tu cuenta o ayuda a reforzar la acción colectiva.
                </p>

                {/* Paso 1 */}
                <div className="relative">
                  <div className="card border-l-4 border-primary-600">
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0 font-bold">
                        1
                      </div>
                      <div className="flex-1">
                        <h5 className="text-lg font-bold text-gray-900 mb-2">
                          Enviar Burofax o Correo Certificado
                        </h5>
                        <p className="text-gray-600 mb-3">
                          Manda un burofax o correo certificado con acuse de recibo a la empresa
                          que aparece en tu contrato. Tienen 30 días para contestar.
                        </p>
                        <div className="bg-primary-50 p-3 rounded-lg text-sm space-y-2">
                          <p className="font-semibold text-gray-900">📍 Direcciones importantes:</p>
                          <ul className="list-disc list-outside pl-5 text-gray-700 space-y-1">
                            <li>Busca tu empresa en <a href="https://claimeet.com/cases/360-clinics/threads/01k9jyvjph8v8dfg06r27dns7z" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 font-semibold">este post</a> y si no la encuentras en <a href="https://www.empresia.es" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 font-semibold">empresia.es</a></li>
                            <li>Si no hay contrato: <strong>Aquaestetica Consultores SL (CIF: B86050986)</strong> <br/>Calle Margarita Salas núm. 16 Bajo C, 28919 Leganés, Madrid</li>
                            <li>También envía mail a: <strong>info@360clinics.es</strong></li>
                          </ul>
                        </div>

                        <details className="mt-3 bg-white border border-primary-200 rounded-lg">
                          <summary className="cursor-pointer p-3 font-semibold text-primary-600 hover:text-primary-700 flex items-center text-sm">
                            📄 Ver MODELO DE CARTA PARA BUROFAX
                          </summary>
                          <div className="p-4 text-xs text-gray-700 border-t border-primary-100 whitespace-pre-line">
{`[Tu nombre y apellidos]
[Tu dirección completa]
[Código postal y localidad]
[DNI/NIE]
Teléfono: [tu número]
Correo electrónico: [tu email]

A la atención de:
360 Clinics S.L.
[Dirección social de la empresa si la conoces; si no, puedes poner: "Domicilio social según conste en el Registro Mercantil"]

En [Ciudad], a [fecha]

---

ASUNTO: Reclamación por cierre del centro y solicitud de devolución del importe abonado por tratamiento no prestado

Estimados señores:

Yo, [nombre y apellidos], con DNI [tu número], contraté con su empresa 360 Clinics S.L. un tratamiento de depilación láser en el centro ubicado en [indicar la dirección o localidad del centro cerrado], con fecha aproximada de [fecha de contratación o primera sesión].

He abonado la cantidad total de [importe exacto o aproximado] €, por un número total de [número de sesiones contratadas] sesiones, de las cuales únicamente se me han prestado [número de sesiones recibidas], quedando pendientes [número de sesiones restantes].

Recientemente he tenido conocimiento de que el centro ha cerrado sin previo aviso y sin ofrecer alternativa ni reembolso, lo cual supone un incumplimiento del contrato y una vulneración de mis derechos como consumidora, conforme al Real Decreto Legislativo 1/2007, de 16 de noviembre, por el que se aprueba el Texto Refundido de la Ley General para la Defensa de los Consumidores y Usuarios.

Por todo lo anterior, les requiero formalmente mediante el presente burofax para que, en un plazo máximo de 10 días naturales desde la recepción del mismo, procedan a:

1. Reintegrar el importe correspondiente a las sesiones no disfrutadas ([importe estimado o total pendiente] €) mediante transferencia bancaria a la cuenta [tu IBAN], o bien,

2. Ofrecer una solución alternativa válida y por escrito (por ejemplo, la realización del tratamiento en otro centro activo, sin coste adicional y con las mismas condiciones).

En caso de no recibir respuesta o solución satisfactoria en el plazo indicado, me veré obligada a presentar reclamación formal ante las autoridades competentes de Consumo y, en su caso, iniciar acciones legales para la recuperación de las cantidades abonadas.

Sin otro particular, quedo a la espera de su respuesta por escrito.

Atentamente,

Firma: __________
Nombre completo: [tu nombre y apellidos]
DNI: [tu número]`}
                          </div>
                        </details>

                        <div className="mt-3">
                          <a
                            href="https://drive.google.com/file/d/1Yl2eir6nJoF0P3Xm4k1OvevDRHZQpSrN/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary-600 hover:text-primary-700 font-semibold inline-flex items-center text-sm"
                          >
                            Descargar modelo de burofax
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Flecha */}
                  <div className="flex justify-center py-3">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                </div>

                {/* Paso 2 */}
                <div className="relative">
                  <div className="card border-l-4 border-primary-600">
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0 font-bold">
                        2
                      </div>
                      <div className="flex-1">
                        <h5 className="text-lg font-bold text-gray-900 mb-2">
                          Presentar Queja en Consumo
                        </h5>
                        <p className="text-gray-600 mb-3">
                          Adjunta el burofax y el mail enviado para demostrar que intentaste
                          resolver por las buenas. Esto fortalece tu reclamación.
                        </p>
                        <div className="bg-primary-50 p-3 rounded-lg text-sm">
                          <p className="text-gray-700">
                            💡 <strong>Importante:</strong> Guarda copias de todos los documentos enviados.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Columna 2: Acción Colectiva */}
              <div>
                <h4 className="text-xl font-bold text-primary-600 mb-4 text-center">
                  Acción Colectiva
                </h4>
                <p className="text-gray-600 mb-6 text-center">
                  Mayor impacto legal actuando como grupo.
                </p>

                {/* Paso 1 */}
                <div className="relative">
                  <div className="card border-l-4 border-primary-600">
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0 font-bold">
                        1
                      </div>
                      <div className="flex-1">
                        <h5 className="text-lg font-bold text-gray-900 mb-2">
                          Unirse a la Asociación
                        </h5>
                        <p className="text-gray-600 mb-3">
                          Regístrate en Claimeet, únete a la Asociación de Afectados y sube tus documentos.
                        </p>
                        <div className="bg-primary-50 p-3 rounded-lg text-sm space-y-3">
                          <div>
                            <p className="font-semibold text-gray-900 mb-2">1. Regístrate en Claimeet:</p>
                            <a
                              href="https://claimeet.com/cases/360-clinics"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold"
                            >
                              Ir a Claimeet
                              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </a>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900 mb-2">2. Únete a la Asociación:</p>
                            <a
                              href="https://claimeet.com/processes/01kcjfhqv5vk7wq5fweyd3d48d"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold"
                            >
                              Formulario de la Asociación
                              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </a>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900 mb-2">3. Documentos a subir:</p>
                            <ul className="list-disc list-inside text-gray-700 space-y-1">
                              <li>Facturas</li>
                              <li>Comprobantes de pago</li>
                              <li>Contratos</li>
                              <li>Pruebas de comunicación</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Flecha */}
                  <div className="flex justify-center py-3">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                </div>

                {/* Paso 2 */}
                <div className="relative">
                  <div className="card border-l-4 border-primary-600">
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0 font-bold">
                        2
                      </div>
                      <div className="flex-1">
                        <h5 className="text-lg font-bold text-gray-900 mb-2">
                          Concurso de Acreedores
                        </h5>
                        <p className="text-gray-600 mb-3">
                          Como asociación, acudiremos al concurso de acreedores para defender
                          los intereses de todos los afectados de forma conjunta.
                        </p>
                        <div className="bg-primary-50 p-3 rounded-lg text-sm">
                          <p className="text-gray-700">
                            💡 <strong>Nota:</strong> Si no se declara concurso, pasaremos al siguiente paso.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Flecha */}
                  <div className="flex justify-center py-3">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                </div>

                {/* Paso 3 */}
                <div className="relative">
                  <div className="card border-l-4 border-primary-600">
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0 font-bold">
                        3
                      </div>
                      <div className="flex-1">
                        <h5 className="text-lg font-bold text-gray-900 mb-2">
                          Acciones Legales como Asociación
                        </h5>
                        <p className="text-gray-600 mb-3">
                          Tomaremos todas las medidas legales oportunas y necesarias como asociación
                          para defender los derechos de los afectados.
                        </p>
                        <div className="bg-primary-50 p-3 rounded-lg text-sm">
                          <p className="text-gray-700">
                            ⚖️ <strong>Fuerza colectiva:</strong> Unidos tenemos más fuerza legal.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              ¿Necesitas Apoyo?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Únete a nuestra comunidad de WhatsApp para recibir ayuda, compartir experiencias
              y estar al tanto de todas las novedades sobre la Asociación.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://chat.whatsapp.com/J1JoCd8oFAK2LNssQarGlt"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Unirse al Grupo WhatsApp
              </a>
              <a
                href="https://claimeet.com/cases/360-clinics"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center justify-center"
              >
                Ver Caso en Claimeet
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
