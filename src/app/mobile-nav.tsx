"use client";

import { useEffect, useRef, useState } from "react";

type MobileNavItem = {
  href: string;
  label: string;
};

type MobileNavProps = {
  ctaHref: string;
  items: MobileNavItem[];
};

export function MobileNav({ ctaHref, items }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handlePointerDown(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div ref={rootRef} className="relative md:hidden">
      <button
        type="button"
        aria-expanded={isOpen}
        className={`inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-base font-medium text-[#1b2f67] shadow-[0_12px_30px_rgba(61,45,82,0.12)] transition ${isOpen ? "bg-[#f4f0ea]" : ""}`}
        onClick={() => setIsOpen((open) => !open)}
      >
        Menu
        <span className={`text-xs transition ${isOpen ? "rotate-180" : ""}`}>
          ▼
        </span>
      </button>

      {isOpen ? (
        <div className="dropdown-panel absolute right-0 top-full z-30 mt-3 w-72 rounded-[1.6rem] bg-white p-3 shadow-[0_18px_45px_rgba(61,45,82,0.16)]">
          <div className="space-y-1">
            {items.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block rounded-[1rem] px-4 py-3 text-sm font-medium text-[#1b2f67] transition hover:bg-[#f6f2ea]"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>

          <a
            href={ctaHref}
            target="_blank"
            rel="noreferrer"
            className="mt-3 block rounded-full bg-[var(--color-lime)] px-6 py-4 text-center text-base font-semibold text-[#182247] transition hover:bg-[#dced63]"
            onClick={() => setIsOpen(false)}
          >
            Iniciar terapia
          </a>
        </div>
      ) : null}
    </div>
  );
}
