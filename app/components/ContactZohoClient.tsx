"use client";

import { useEffect, useRef, useCallback } from "react";

export default function ContactZohoClient() {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const captchaRef = useRef<HTMLDivElement | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);

  // Carga reCAPTCHA y expone helpers en window como espera Zoho
  useEffect(() => {
    // Cargar script de reCAPTCHA una sola vez
    const hasScript = document.querySelector<HTMLScriptElement>(
      'script[src="https://www.google.com/recaptcha/api.js"]'
    );
    if (!hasScript) {
      const s = document.createElement("script");
      s.src = "https://www.google.com/recaptcha/api.js";
      s.async = true;
      s.defer = true;
      document.body.appendChild(s);
    }

    // Atributos que Zoho inspecciona en el DOM
    if (emailRef.current) emailRef.current.setAttribute("ftype", "email");
    if (captchaRef.current)
      captchaRef.current.setAttribute("captcha-verified", "false");

    // ==== Helpers Zoho (equivalentes a los del embed) ====
    // @ts-ignore
    window.rccallback6988454000000684005 = function () {
      const recap = document.getElementById("recap6988454000000684005");
      if (recap) recap.setAttribute("captcha-verified", "true");
      const err = document.getElementById("recapErr6988454000000684005");
      if (err && (err as HTMLElement).style.visibility === "visible") {
        (err as HTMLElement).style.visibility = "hidden";
      }
    };

    // @ts-ignore
    window.reCaptchaAlert6988454000000684005 = function () {
      const recap = document.getElementById("recap6988454000000684005");
      if (recap && recap.getAttribute("captcha-verified") === "false") {
        const err = document.getElementById("recapErr6988454000000684005");
        if (err) (err as HTMLElement).style.visibility = "visible";
        return false;
      }
      return true;
    };

    // @ts-ignore
    window.validateEmail6988454000000684005 = function () {
      if (!formRef.current) return true;
      const emailFld = formRef.current.querySelectorAll("[ftype=email]");
      for (let i = 0; i < emailFld.length; i++) {
        const el = emailFld[i] as HTMLInputElement;
        const val = (el.value || "").trim();
        if (val.length) {
          const atpos = val.indexOf("@");
          const dotpos = val.lastIndexOf(".");
          if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= val.length) {
            alert("Introduzca una dirección de correo electrónico válida. ");
            el.focus();
            return false;
          }
        }
      }
      return true;
    };

    // @ts-ignore
    window.checkMandatory6988454000000684005 = function () {
      if (!formRef.current) return false;
      const mndFields = ["First Name", "Last Name"];
      const labels = ["Nombre", "Apellido"];

      for (let i = 0; i < mndFields.length; i++) {
        // @ts-ignore
        const fieldObj = formRef.current[mndFields[i]] as
          | HTMLInputElement
          | HTMLSelectElement
          | undefined;

        if (!fieldObj) continue;
        const val = (fieldObj as HTMLInputElement).value?.trim() ?? "";

        if (!val.length) {
          if ((fieldObj as HTMLInputElement).type === "file") {
            alert("Seleccione un archivo para cargar.");
          } else {
            alert(labels[i] + " no puede estar vacío.");
          }
          (fieldObj as HTMLInputElement).focus();
          return false;
        } else if (fieldObj.nodeName === "SELECT") {
          const sel = fieldObj as HTMLSelectElement;
          if (sel.options[sel.selectedIndex]?.value === "-None-") {
            alert(labels[i] + " no puede ser nulo.");
            sel.focus();
            return false;
          }
        } else if (
          (fieldObj as HTMLInputElement).type === "checkbox" &&
          !(fieldObj as HTMLInputElement).checked
        ) {
          alert("Please accept " + labels[i]);
          (fieldObj as HTMLInputElement).focus();
          return false;
        }
      }

      // Validación de email y captcha
      // @ts-ignore
      if (!window.validateEmail6988454000000684005()) return false;
      // @ts-ignore
      if (!window.reCaptchaAlert6988454000000684005()) return false;

      // Smart URL param (opcional)
      const urlparams = new URLSearchParams(window.location.search);
      if (urlparams.has("service") && urlparams.get("service") === "smarturl") {
        const webform = document.getElementById("webform6988454000000684005");
        if (webform) {
          const input = document.createElement("input");
          input.type = "hidden";
          input.name = "service";
          input.value = "smarturl";
          webform.appendChild(input);
        }
      }

      // Deshabilitar submit para evitar doble envío
      const submitBtn = document.querySelector<HTMLButtonElement>(
        ".crmWebToEntityForm .formsubmit, #formsubmit"
      );
      if (submitBtn) submitBtn.setAttribute("disabled", "true");

      return true;
    };
  }, []);

  // Controla el submit para invocar la validación de Zoho
  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    // @ts-ignore
    const ok = window?.checkMandatory6988454000000684005
      ? // @ts-ignore
        window.checkMandatory6988454000000684005()
      : true;
    if (!ok) e.preventDefault();
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
              ref={formRef}
              onSubmit={handleSubmit}
            >
              {/* Ocultos Zoho (USA LOS NUEVOS TOKENS QUE ENVIASTE) */}
              <input
                type="text"
                name="xnQsjsdp"
                defaultValue="2817bfd47dc14fdcdd077e1d3322ed415e837e6ff5528bbc9f2f355afbc91071"
                style={{ display: "none" }}
              />
              <input type="hidden" name="zc_gad" id="zc_gad" defaultValue="" />
              <input
                type="text"
                name="xmIwtLD"
                defaultValue="c22b09a704c9c83ac07b44429b78fb0be392bff5dd91bab6a23645af3f249b9804064822d251c01d11f364708ce8615f"
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

              {/* Lead_Origen (oculto pero presente) */}
              <select
                id="LEADCF9"
                name="LEADCF9"
                defaultValue="hklaba.com/contacto"
                className="hidden"
                aria-hidden="true"
              >
                <option value="-None-">-None-</option>
                <option value="plan.dekaelomedia.com">plan.dekaelomedia.com</option>
                <option value="tronxgroup.com/contacto">tronxgroup.com/contacto</option>
                <option value="tronxstrategic.com/contacto">tronxstrategic.com/contacto</option>
                <option value="dekaelomedia.com/contacto">dekaelomedia.com/contacto</option>
                <option value="empresas.echevensko.com">empresas.echevensko.com</option>
                <option value="apccskills.asiapacific-chamber.com">
                  apccskills.asiapacific-chamber.com
                </option>
                <option value="asiapacific-chamber.com/contacto">
                  asiapacific-chamber.com/contacto
                </option>
                <option value="hklaba.com/contacto">hklaba.com/contacto</option>
              </select>

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
                  Error en validación de Captcha. Si no es un robot, inténtelo de nuevo.
                </div>
              </div>

              <div className="sm:col-span-2 flex items-center gap-3">
                <button
                  id="formsubmit"
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
