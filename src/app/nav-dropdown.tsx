"use client";

import { useEffect, useRef, useState } from "react";

type NavItem = {
  href: string;
  label: string;
};

type NavDropdownProps = {
  items: NavItem[];
  label: string;
  minWidthClassName?: string;
};

export function NavDropdown({
  items,
  label,
  minWidthClassName = "min-w-64",
}: NavDropdownProps) {
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
    <div ref={rootRef} className="relative">
      <button
        type="button"
        aria-expanded={isOpen}
        className={`flex items-center gap-2 rounded-full px-5 py-3 transition hover:bg-[#f4f0ea] ${isOpen ? "bg-[#f4f0ea]" : ""}`}
        onClick={() => setIsOpen((open) => !open)}
      >
        {label}
        <span className={`text-xs transition ${isOpen ? "rotate-180" : ""}`}>
          ▼
        </span>
      </button>

      {isOpen ? (
        <div
          className={`dropdown-panel absolute left-0 top-full z-20 mt-2 ${minWidthClassName} rounded-[1.4rem] border border-black/8 bg-white p-2 shadow-[0_18px_45px_rgba(61,45,82,0.12)]`}
        >
          {items.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noreferrer" : undefined}
              className="block rounded-[1rem] px-4 py-3 text-sm text-[#1b2f67] transition hover:bg-[#f6f2ea]"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      ) : null}
    </div>
  );
}
