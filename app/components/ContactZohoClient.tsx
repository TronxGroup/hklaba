"use client";

import { useEffect, useRef } from "react";

export default function ContactZohoClient() {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const captchaRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Zoho espera este atributo para validar el campo Email
    if (emailRef.current) {
      emailRef.current.setAttribute("ftype", "email");
    }
    // Zoho espera este atributo en el captcha
    if (captchaRef.current) {
      captchaRef.current.setAttribute("captcha-verified", "false");
    }
  }, []);

  return (
    <section id="contacto" className="border-b border-neutral-200">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900">
          Contacto
        </h2>
        <p className="mt-2 text-neutral-700 max-w-prose">
          Cuéntanos tu interés y te contactaremos en 24 horas hábiles.
        </p>

        <div className="mt-8 grid lg:grid-cols-3 gap-6">
          {/* Formulario Zoho */}
          <div className="lg:col-span-2 rounded-3xl border border-neutral-200 p-6 bg-white">
            <form
              id="webform6988454000000684005"
              name="WebToLeads6988454000000684005"
              action="https://crm.zoho.com/crm/WebToLeadForm"
              method="POST"
              acceptCharset="UTF-8"
              className="grid sm:grid-cols-2 gap-4"
              aria-label="Formulario de contacto HKLABA"
            >
              {/* Ocultos Zoho */}
              <input
                type="text"
                name="xnQsjsdp"
                defaultValue="a60a7215101091d07eeb025d550ce0c4e9369c64fbfb661942d9ef3a583c5453"
                style={{ display: "none" }}
              />
              <input type="hidden" name="zc_gad" id="zc_gad" defaultValue="" />
              <input
                type="text"
                name="xmIwtLD"
                defaultValue="73d2d9e8cf72df188f36932f8d309c47f409a2af8c8f2ff14198ee3d3e26bfc5be9a67989dcda09602908a4218f09c38"
                style={{ display: "none" }}
              />
              <input
                type="text"
                name="actionType"
                defaultValue="TGVhZHM="
                style={{ display: "none" }}
              />
              <input
                type="text"
                name="returnURL"
                defaultValue="https://www.hklaba.com/gracias"
                style={{ display: "none" }}
              />

              {/* Campos visibles */}
              <div>
                <label className="block text-sm text-neutral-600">
                  Nombre <span className="text-red-600">*</span>
                </label>
                <input
                  id="First_Name"
                  name="First Name"
                  required
                  autoComplete="given-name"
                  className="mt-1 w-full rounded-xl bg-white border border-neutral-300 px-3 py-2 outline-none focus:ring-2 focus:ring-red-200"
                />
              </div>

              <div>
                <label className="block text-sm text-neutral-600">
                  Apellido <span className="text-red-600">*</span>
                </label>
                <input
                  id="Last_Name"
                  name="Last Name"
                  required
                  autoComplete="family-name"
                  className="mt-1 w-full rounded-xl bg-white border border-neutral-300 px-3 py-2 outline-none focus:ring-2 focus:ring-red-200"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-sm text-neutral-600">Email</label>
                <input
                  id="Email"
                  name="Email"
                  autoComplete="email"
                  inputMode="email"
                  ref={emailRef}
                  className="mt-1 w-full rounded-xl bg-white border border-neutral-300 px-3 py-2 outline-none focus:ring-2 focus:ring-red-200"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-sm text-neutral-600">Mensaje</label>
                <textarea
                  id="LEADCF3"
                  name="LEADCF3"
                  rows={5}
                  className="mt-1 w-full rounded-xl bg-white border border-neutral-300 px-3 py-2 outline-none focus:ring-2 focus:ring-red-200"
                />
              </div>

              {/* Honeypot */}
              <input
                type="text"
                name="aG9uZXlwb3Q"
                defaultValue=""
                style={{ display: "none" }}
              />

              {/* reCAPTCHA */}
              <div className="sm:col-span-2">
                <div
                  id="recap6988454000000684005"
                  ref={captchaRef}
                  className="g-recaptcha"
                  data-sitekey="6LcAPtorAAAAAALHzNfPb8al-jYExQbDcCiK7BK5"
                  data-theme="light"
                  data-callback="rccallback6988454000000684005"
                />
                <div
                  id="recapErr6988454000000684005"
                  className="mt-2 text-xs text-red-600"
                  style={{ visibility: "hidden" }}
                >
                  Error en validación de Captcha. Si no es un robot, inténtelo
                  de nuevo.
                </div>
              </div>

              <div className="sm:col-span-2 flex items-center gap-3">
                <button
                  className="rounded-xl bg-hklRed text-white px-5 py-3 font-medium hover:bg-red-800 transition formsubmit"
                  type="submit"
                >
                  Enviar
                </button>
                <button
                  className="rounded-xl border border-neutral-300 text-neutral-700 px-5 py-3 font-medium hover:bg-neutral-50 transition"
                  type="reset"
                >
                  Restablecer
                </button>
              </div>
            </form>
          </div>

          {/* Información de contacto */}
          <div className="rounded-3xl border border-neutral-200 p-6 bg-white">
            <div className="text-sm text-neutral-600">Información</div>
            <ul className="mt-4 space-y-2 text-sm text-neutral-700">
              <li>
                📧{" "}
                <a
                  href="mailto:info@hklaba.com"
                  className="underline decoration-neutral-300 hover:text-hklRed"
                >
                  info@hklaba.com
                </a>
              </li>
              <li>
                📞{" "}
                <a
                  href="tel:+56975769493"
                  className="underline decoration-neutral-300 hover:text-hklRed"
                >
                  +56 9 7576 9493
                </a>
              </li>
              <li>📍 Santiago - Chile</li>
            </ul>
            <div className="mt-6 text-sm text-neutral-500">
              Horario: Lun–Vie 9:00 a 18:00 (GMT-3)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
