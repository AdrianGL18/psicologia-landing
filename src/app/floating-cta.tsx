"use client";

import { useState } from "react";

function WhatsAppIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 4.5C7.86 4.5 4.5 7.74 4.5 11.75C4.5 13.28 4.99 14.7 5.83 15.87L5.04 19.5L8.83 18.78C9.94 19.46 10.94 19.75 12 19.75C16.14 19.75 19.5 16.51 19.5 12.5C19.5 8.49 16.14 4.5 12 4.5Z"
        stroke="#25D366"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M9.4 9.5C9.6 9.1 9.78 9.08 10.02 9.09C10.21 9.1 10.43 9.09 10.64 9.09C10.8 9.09 11.05 9.03 11.28 9.58C11.51 10.13 12.06 11.48 12.1 11.57C12.14 11.66 12.17 11.77 12.1 11.88C12.03 11.99 11.99 12.06 11.85 12.22C11.71 12.38 11.56 12.58 11.44 12.71C11.33 12.84 11.22 12.98 11.37 13.22C11.53 13.46 12.06 14.29 12.82 14.97C13.79 15.83 14.6 16.11 14.88 16.24C15.16 16.36 15.32 16.35 15.43 16.22C15.57 16.06 15.96 15.61 16.13 15.36C16.29 15.11 16.47 15.16 16.69 15.24C16.91 15.32 18.09 15.89 18.33 16.01C18.57 16.13 18.73 16.18 18.79 16.28C18.85 16.38 18.85 16.85 18.62 17.29C18.39 17.73 17.3 18.22 16.81 18.26C16.33 18.31 15.72 18.38 13.54 17.45C11.35 16.52 9.93 14.3 9.82 14.15C9.71 14 8.21 12.06 8.21 10.05C8.21 8.05 9.1 7.07 9.4 6.73"
        fill="#25D366"
      />
    </svg>
  );
}

export function FloatingCta({ whatsappHref }: { whatsappHref: string }) {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-40 hidden px-4 lg:flex lg:justify-start">
      <div className="pointer-events-auto ml-6 flex w-full max-w-[29rem] items-end gap-3 xl:ml-12">
        <div className="flex h-14 w-14 items-center justify-center rounded-full border-4 border-[#ece7f7] bg-[#4264d1] shadow-[0_18px_40px_rgba(48,33,73,0.24)]">
          <WhatsAppIcon className="h-7 w-7" />
        </div>
        <div className="flex-1 rounded-[1.7rem] bg-white p-5 shadow-[0_22px_60px_rgba(48,33,73,0.22)]">
          <p className="text-[1.45rem] font-semibold leading-tight text-[#0f2a67]">
            ¿Buscas un proceso de cambio?
          </p>
          <p className="mt-2 text-sm leading-7 text-[#273d72]">
            Conecta con Karen Quezada hoy y <strong>comienza terapia</strong> desde donde
            estés. <strong>100% en línea.</strong>
          </p>
          <div className="mt-4 flex items-center gap-5">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-lime)] px-6 py-3 text-sm font-semibold text-[#182247] transition hover:bg-[#dced63]"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Iniciar terapia
            </a>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium text-[#273d72] transition hover:text-[#0f2a67]"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}



