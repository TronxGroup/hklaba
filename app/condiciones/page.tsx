export default function CondicionesPrivacidad() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <main className="mx-auto max-w-4xl px-4 py-16 prose prose-neutral">
        <h1>Condiciones de Uso y Política de Privacidad</h1>
        <p>
          Bienvenido a <strong>HKLABA — Hong Kong–Latin America Business Association</strong>.
          Al acceder a nuestro sitio web o utilizar nuestros servicios, aceptas
          los siguientes términos y condiciones.
        </p>

        <h2>1. Condiciones de Uso</h2>
        <ul>
          <li>El contenido del sitio es solo para fines informativos y no constituye asesoría legal, financiera o comercial.</li>
          <li>Nos reservamos el derecho de modificar, actualizar o suspender los contenidos y servicios en cualquier momento sin previo aviso.</li>
          <li>Está prohibido el uso indebido del sitio, incluyendo intentos de acceso no autorizado, distribución de virus o actividades fraudulentas.</li>
        </ul>

        <h2>2. Privacidad y Protección de Datos</h2>
        <p>
          Respetamos tu privacidad. La información personal proporcionada a través de formularios de contacto o membresías será utilizada únicamente con fines de gestión institucional y comunicación.
        </p>
        <ul>
          <li>No compartiremos tus datos personales con terceros sin tu consentimiento, salvo obligación legal.</li>
          <li>Utilizamos proveedores de servicios (ej. Formspree, APCC) que cumplen estándares razonables de seguridad.</li>
          <li>Puedes solicitar en cualquier momento la rectificación o eliminación de tus datos escribiendo a <a href="mailto:info@hklaba.com">info@hklaba.com</a>.</li>
        </ul>

        <h2>3. Cookies</h2>
        <p>
          Este sitio puede utilizar cookies técnicas y de analítica para mejorar la experiencia del usuario. Puedes deshabilitarlas en la configuración de tu navegador.
        </p>

        <h2>4. Propiedad Intelectual</h2>
        <p>
          Todo el material publicado en este sitio (logos, textos, imágenes, código) pertenece a HKLABA o a sus socios y no puede ser reproducido sin autorización previa.
        </p>

        <h2>5. Limitación de Responsabilidad</h2>
        <p>
          HKLABA no será responsable por daños directos o indirectos derivados del uso de este sitio o de la información publicada.
        </p>

        <h2>6. Contacto</h2>
        <p>
          Para consultas sobre estas Condiciones y la Política de Privacidad, escríbenos a <a href="mailto:info@hklaba.com">info@hklaba.com</a>.
        </p>

        <p className="text-sm text-neutral-500 mt-8">
          Última actualización: {new Date().toLocaleDateString('es-CL')}
        </p>
      </main>
    </div>
  );
}
