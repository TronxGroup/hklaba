'use client'
import Script from 'next/script'

export default function ContactZohoClient() {
  return (
    <section id="contacto" className="border-b border-neutral-200">
      {/* reCAPTCHA (solo cliente) */}
      <Script src="https://www.google.com/recaptcha/api.js" strategy="afterInteractive" />

      {/* Helpers Zoho */}
      <Script id="zoho-webtolead-helpers" strategy="afterInteractive">
        {`
          function addAriaSelected6988454000000684005 (){
            var optionElem = event.target;
            var prev = optionElem.querySelector('[aria-selected=true]');
            if (prev){ prev.removeAttribute('aria-selected'); }
            optionElem.querySelectorAll('option')[ optionElem.selectedIndex ].ariaSelected = 'true';
          }
          function rccallback6988454000000684005 (){
            var recap = document.getElementById('recap6988454000000684005');
            if(recap){ recap.setAttribute('captcha-verified', true); }
            var err = document.getElementById('recapErr6988454000000684000000');
            if(err && err.style.visibility === 'visible'){ err.style.visibility = 'hidden'; }
          }
          function reCaptchaAlert6988454000000684005 (){
            var recap = document.getElementById('recap6988454000000684005');
            if(recap && recap.getAttribute('captcha-verified') == 'false'){
              var err = document.getElementById('recapErr6988454000000684005');
              if(err){ err.style.visibility = 'visible'; }
              return false;
            }
            return true;
          }
          function validateEmail6988454000000684005 (){
            var form = document.forms['WebToLeads6988454000000684005'];
            var emailFld = form.querySelectorAll('[ftype=email]');
            for(var i=0;i<emailFld.length;i++){
              var emailVal = emailFld[i].value;
              if((emailVal.replace(/^\\s+|\\s+$/g,'' )).length != 0){
                var atpos = emailVal.indexOf('@');
                var dotpos = emailVal.lastIndexOf('.');
                if(atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= emailVal.length){
                  alert('Introduzca una dirección de correo electrónico válida. ');
                  emailFld[i].focus();
                  return false;
                }
              }
            }
            return true;
          }
          function checkMandatory6988454000000684005 (){
            var mndFileds = ['First Name','Last Name'];
            var fldLangVal = ['Nombre','Apellido'];
            for(var i=0;i<mndFileds.length;i++){
              var fieldObj = document.forms['WebToLeads6988454000000684005'][mndFileds[i]];
              if(fieldObj){
                if(((fieldObj.value).replace(/^\\s+|\\s+$/g,'' )).length == 0){
                  if(fieldObj.type == 'file'){ alert('Seleccione un archivo para cargar.'); fieldObj.focus(); return false; }
                  alert(fldLangVal[i] + ' no puede estar vacío.'); fieldObj.focus(); return false;
                }else if(fieldObj.nodeName == 'SELECT'){
                  if(fieldObj.options[fieldObj.selectedIndex].value == '-None-'){
                    alert(fldLangVal[i] + ' no puede ser nulo.'); fieldObj.focus(); return false;
                  }
                }else if(fieldObj.type == 'checkbox'){
                  if(fieldObj.checked == false){ alert('Please accept ' + fldLangVal[i]); fieldObj.focus(); return false; }
                }
              }
            }
            if(!validateEmail6988454000000684005()){ return false; }
            if(!reCaptchaAlert6988454000000684005()){ return false; }
            var urlparams = new URLSearchParams(window.location.search);
            if(urlparams.has('service') && (urlparams.get('service') === 'smarturl')){
              var webform = document.getElementById('webform6988454000000684005');
              var smart = document.createElement('input');
              smart.setAttribute('type','hidden'); smart.setAttribute('value','smarturl'); smart.setAttribute('name','service');
              webform.appendChild(smart);
            }
            var submitBtn = document.querySelector('.crmWebToEntityForm .formsubmit');
            if(submitBtn){ submitBtn.setAttribute('disabled', true); }
            return true;
          }
          window.addAriaSelected6988454000000684005 = addAriaSelected6988454000000684005;
          window.rccallback6988454000000684005 = rccallback6988454000000684005;
          window.reCaptchaAlert6988454000000684005 = reCaptchaAlert6988454000000684005;
          window.validateEmail6988454000000684005 = validateEmail6988454000000684005;
          window.checkMandatory6988454000000684005 = checkMandatory6988454000000684005;
        `}
      </Script>

      <div className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900">Contacto</h2>
        <p className="mt-2 text-neutral-700 max-w-prose">Cuéntanos tu interés y te contactaremos en 24 horas hábiles.</p>

        <div className="mt-8 grid lg:grid-cols-3 gap-6">
          {/* Formulario Zoho con el mismo diseño (2 columnas) */}
          <div className="lg:col-span-2 rounded-3xl border border-neutral-200 p-6 bg-white crmWebToEntityForm">
            <form
              id="webform6988454000000684005"
              name="WebToLeads6988454000000684005"
              action="https://crm.zoho.com/crm/WebToLeadForm"
              method="POST"
              acceptCharset="UTF-8"
              onSubmit={(e) => {
                // @ts-ignore
                const ok = window?.checkMandatory6988454000000684005?.()
                if (!ok) e.preventDefault()
              }}
              className="grid sm:grid-cols-2 gap-4"
              aria-label="Formulario de contacto HKLABA"
            >
              {/* obligatorios Zoho */}
              <input type="text" name="xnQsjsdp" defaultValue="a60a7215101091d07eeb025d550ce0c4e9369c64fbfb661942d9ef3a583c5453" hidden />
              <input type="hidden" name="zc_gad" id="zc_gad" defaultValue="" />
              <input type="text" name="xmIwtLD" defaultValue="73d2d9e8cf72df188f36932f8d309c47f409a2af8c8f2ff14198ee3d3e26bfc5be9a67989dcda09602908a4218f09c38" hidden />
              <input type="text" name="actionType" defaultValue="TGVhZHM=" hidden />
              <input type="text" name="returnURL" defaultValue="https://www.hklaba.com/gracias" hidden />

              <div>
                <label className="block text-sm text-neutral-600">Nombre <span className="text-red-600">*</span></label>
                <input id="First_Name" name="First Name" required autoComplete="given-name" className="mt-1 w-full rounded-xl bg-white border border-neutral-300 px-3 py-2 outline-none focus:ring-2 focus:ring-red-200" />
              </div>
              <div>
                <label className="block text-sm text-neutral-600">Apellido <span className="text-red-600">*</span></label>
                <input id="Last_Name" name="Last Name" required autoComplete="family-name" className="mt-1 w-full rounded-xl bg-white border border-neutral-300 px-3 py-2 outline-none focus:ring-2 focus:ring-red-200" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm text-neutral-600">Email</label>
                <input id="Email" name="Email" autoComplete="email" inputMode="email" className="mt-1 w-full rounded-xl bg-white border border-neutral-300 px-3 py-2 outline-none focus:ring-2 focus:ring-red-200" /* @ts-ignore */ ftype="email" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm text-neutral-600">Mensaje</label>
                <textarea id="LEADCF3" name="LEADCF3" rows={5} className="mt-1 w-full rounded-xl bg-white border border-neutral-300 px-3 py-2 outline-none focus:ring-2 focus:ring-red-200" />
              </div>

              {/* Lead_Origen oculto */}
              <select id="LEADCF9" name="LEADCF9" defaultValue="hklaba.com/contacto" className="hidden" aria-hidden="true"
                onChange={() => { /* @ts-ignore */ window.addAriaSelected6988454000000684005?.() }}>
                <option value="-None-">-None-</option>
                <option value="plan.dekaelomedia.com">plan.dekaelomedia.com</option>
                <option value="tronxgroup.com/contacto">tronxgroup.com/contacto</option>
                <option value="tronxstrategic.com/contacto">tronxstrategic.com/contacto</option>
                <option value="dekaelomedia.com/contacto">dekaelomedia.com/contacto</option>
                <option value="empresas.echevensko.com">empresas.echevensko.com</option>
                <option value="apccskills.asiapacific-chamber.com">apccskills.asiapacific-chamber.com</option>
                <option value="asiapacific-chamber.com/contacto">asiapacific-chamber.com/contacto</option>
                <option value="hklaba.com/contacto">hklaba.com/contacto</option>
              </select>

              {/* honeypot */}
              <input type="text" name="aG9uZXlwb3Q" defaultValue="" hidden />

              {/* reCAPTCHA + botones */}
              <div className="sm:col-span-2">
                <div id="recap6988454000000684005" className="g-recaptcha" data-sitekey="6LcAPtorAAAAAALHzNfPb8al-jYExQbDcCiK7BK5" data-theme="light" data-callback="rccallback6988454000000684005" /* @ts-ignore */ captcha-verified="false" />
                <div id="recapErr6988454000000684005" className="mt-2 text-xs text-red-600" style={{ visibility: 'hidden' }}>
                  Error en validación de Captcha. Si no es un robot, inténtelo de nuevo.
                </div>
              </div>
              <div className="sm:col-span-2 flex items-center gap-3">
                <button className="rounded-xl bg-hklRed text-white px-5 py-3 font-medium hover:bg-red-800 transition formsubmit" type="submit">Enviar</button>
                <button className="rounded-xl border border-neutral-300 text-neutral-700 px-5 py-3 font-medium hover:bg-neutral-50 transition" type="reset">Restablecer</button>
              </div>
            </form>
          </div>

          {/* Info de contacto */}
          <div className="rounded-3xl border border-neutral-200 p-6 bg-white">
            <div className="text-sm text-neutral-600">Información</div>
            <ul className="mt-4 space-y-2 text-sm text-neutral-700">
              <li>📧 <a href="mailto:info@hklaba.com" className="underline decoration-neutral-300 hover:text-hklRed">info@hklaba.com</a></li>
              <li>📞 <a href="tel:+56975769493" className="underline decoration-neutral-300 hover:text-hklRed">+56 9 7576 9493</a></li>
              <li>📍 Santiago - Chile</li>
            </ul>
            <div className="mt-6 text-sm text-neutral-500">Horario: Lun–Vie 9:00 a 18:00 (GMT-3)</div>
          </div>
        </div>
      </div>
    </section>
  )
}
