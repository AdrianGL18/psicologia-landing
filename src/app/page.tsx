import Image from "next/image";
import { NavDropdown } from "./nav-dropdown";
import logoKarenQuezada from "../../imagenes/88198844_182691326484814_762856053707636736_n.jpg";
import imagenPromocional from "../../imagenes/imagen.jpg";
import psicologiaKarenQuezada from "../../imagenes/psicologia_karen_quezada_1.png";
import saludMentalConsejos from "../../imagenes/salud_mental_consejos.png";
import terapiaPsicologicaOnline from "../../imagenes/terapia_psicologica_online.png";

const whatsappHref = "https://wa.me/593984006435";
const instagramHref = "https://www.instagram.com/karenquezadapsc";
const facebookHref = "https://www.facebook.com/psicologakarenquezada";
const tikTokHref = "https://www.tiktok.com/@karenquezadapsc";
const emailHref = "mailto:karenquezada.psicologia@gmail.com";

const therapies = [
  {
    eyebrow: "Online",
    badge: "Mas elegido",
    title: "Consultas psicologicas",
    description:
      "Un primer espacio de escucha para comprender lo que estas viviendo y definir el acompanamiento que necesitas.",
  },
  {
    eyebrow: "Online",
    title: "Psicoterapia individual",
    description:
      "Para trabajar ansiedad, autoestima, duelo, regulacion emocional y procesos de crecimiento personal.",
  },
  {
    eyebrow: "Online",
    title: "Psicoterapia de pareja",
    description:
      "Para parejas que desean fortalecer su comunicacion, resolver conflictos y cuidar su vinculo.",
  },
];

const extraServices = [
  {
    eyebrow: "Adaptado a ti",
    title: "Capacitacion",
    description:
      "Espacios formativos en salud mental, neuropsicologia y educacion para instituciones, equipos y comunidades.",
  },
  {
    eyebrow: "Herramientas practicas",
    title: "Talleres y asesorias",
    description:
      "Acompanamiento psicoeducativo para grupos, familias o contextos especificos que necesitan guia profesional.",
  },
  {
    eyebrow: "Materiales a medida",
    title: "Desarrollo de material psicoeducativo",
    description:
      "Recursos didacticos y contenido de bienestar emocional para procesos clinicos, talleres y educacion.",
  },
];

const socialLinks = [
  { label: "Instagram", href: instagramHref, icon: "instagram" },
  { label: "Facebook", href: facebookHref, icon: "facebook" },
  { label: "TikTok", href: tikTokHref, icon: "tiktok" },
] as const;

const contentMenu = [
  { label: "Salud mental", href: "#comunidad" },
  { label: "Material psicoeducativo", href: "#otros-servicios" },
  { label: "Redes sociales", href: "#contacto" },
];

const testsMenu = [
  { label: "Consultas psicologicas", href: "#terapias" },
  { label: "Psicoterapia individual", href: "#terapias" },
  { label: "Iniciar terapia por WhatsApp", href: whatsappHref },
];

function SocialIcon({
  kind,
  className = "h-4 w-4",
}: {
  kind: "instagram" | "facebook" | "tiktok" | "whatsapp" | "email";
  className?: string;
}) {
  if (kind === "instagram") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
        <defs>
          <linearGradient id="ig-gradient" x1="4" y1="20" x2="20" y2="4" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FEDA75" />
            <stop offset="0.35" stopColor="#FA7E1E" />
            <stop offset="0.65" stopColor="#D62976" />
            <stop offset="1" stopColor="#4F5BD5" />
          </linearGradient>
        </defs>
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="url(#ig-gradient)" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="4" stroke="url(#ig-gradient)" strokeWidth="1.8" />
        <circle cx="17.4" cy="6.6" r="1.2" fill="#D62976" />
      </svg>
    );
  }

  if (kind === "facebook") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
        <path
          d="M13.2 20V12.8H15.8L16.2 10H13.2V8.2C13.2 7.39 13.58 6.6 15 6.6H16.3V4.2C16.3 4.2 15.12 4 14 4C11.66 4 10.2 5.36 10.2 7.82V10H7.5V12.8H10.2V20H13.2Z"
          fill="#1877F2"
        />
      </svg>
    );
  }

  if (kind === "tiktok") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
        <path
          d="M14.8 4C15.1 5.5 16 6.8 17.3 7.5C18.1 8 19 8.2 20 8.2V10.9C18.8 10.9 17.7 10.6 16.7 10V15.3C16.7 18.1 14.4 20.4 11.6 20.4C8.8 20.4 6.5 18.1 6.5 15.3C6.5 12.5 8.8 10.2 11.6 10.2C11.9 10.2 12.2 10.2 12.4 10.3V13C12.2 12.9 11.9 12.8 11.6 12.8C10.2 12.8 9.1 13.9 9.1 15.3C9.1 16.7 10.2 17.8 11.6 17.8C13 17.8 14.1 16.7 14.1 15.3V4H14.8Z"
          fill="#111111"
        />
      </svg>
    );
  }

  if (kind === "whatsapp") {
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

  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M4 7.5L12 13.5L20 7.5M5.2 5H18.8C19.46 5 20 5.54 20 6.2V17.8C20 18.46 19.46 19 18.8 19H5.2C4.54 19 4 18.46 4 17.8V6.2C4 5.54 4.54 5.2 5.2 5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <main id="top" className="bg-[#f6f2ea] text-[var(--color-ink)]">
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#ede8f7_0%,#f7f4ee_48%,#f7f4ee_100%)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,rgba(255,255,255,0.7),transparent_46%)]" />
        <div className="relative mx-auto max-w-7xl px-6 pt-6 pb-16 sm:px-8 lg:px-12 lg:pt-10 lg:pb-24">
          <header className="mx-auto flex max-w-5xl justify-center">
            <nav className="flex w-full max-w-4xl flex-col gap-3 rounded-[2rem] bg-white p-3 shadow-[0_18px_50px_rgba(61,45,82,0.12)] sm:flex-row sm:items-center sm:justify-between sm:rounded-full">
              <div className="flex items-center gap-3 pl-2">
                <div className="h-12 w-12 overflow-hidden rounded-full border border-[#dce6ff] bg-white">
                  <Image
                    src={logoKarenQuezada}
                    alt="Logo de Karen Quezada"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-2 text-sm font-semibold text-[#1b2f67]">
                <NavDropdown items={contentMenu} label="Contenidos" />
                <NavDropdown
                  items={testsMenu}
                  label="Tests"
                  minWidthClassName="min-w-72"
                />
                <a
                  href="#otros-servicios"
                  className="rounded-full px-5 py-3 text-[#ff7d9a] transition hover:bg-[#fff1f5]"
                >
                  Otros servicios
                </a>
              </div>
              <div className="flex items-center justify-end">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-[var(--color-lime)] px-8 py-4 text-center text-base font-semibold text-[#182247] transition hover:bg-[#dced63]"
                >
                  Iniciar terapia
                </a>
              </div>
            </nav>
          </header>

          <div className="mt-12 grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
            <div className="max-w-xl">
              <div className="mb-5 flex items-center gap-4">
                <div className="h-16 w-16 overflow-hidden rounded-full border border-white/80 bg-white shadow-[0_8px_24px_rgba(61,45,82,0.08)]">
                  <Image
                    src={logoKarenQuezada}
                    alt="Logo profesional Karen Quezada"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-slate)]">
                    Karen Quezada
                  </p>
                  <p className="mt-1 text-sm text-[var(--color-slate)]">
                    Psicologia clinica y neuropsicologia
                  </p>
                </div>
              </div>
              <p className="text-sm uppercase tracking-[0.34em] text-[var(--color-slate)]">
                Servicios Karen Quezada
              </p>
              <h1 className="mt-5 font-serif text-4xl leading-[0.95] sm:text-5xl lg:text-6xl">
                Todas las formas de acompañarte en tu bienestar emocional
              </h1>
              <p className="mt-6 text-lg leading-8 text-[var(--color-slate)]">
                Conoce mis espacios de terapia, formacion y recursos para cuidar
                la salud mental desde un enfoque cercano, profesional y humano.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#otros-servicios"
                  className="rounded-full bg-[var(--color-soft-mauve)] px-6 py-4 text-center text-sm font-semibold text-[var(--color-ink)] transition hover:bg-[#d6caeb]"
                >
                  Explorar servicios
                </a>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-black/10 bg-white px-6 py-4 text-center text-sm font-semibold transition hover:bg-[#f5f0ea]"
                >
                  Iniciar terapia
                </a>
              </div>

              <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold text-[var(--color-slate)]">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 transition hover:bg-[#f5f0ea]"
                  >
                    <SocialIcon kind={link.icon} />
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] bg-white p-3 shadow-[0_22px_60px_rgba(61,45,82,0.12)]">
              <Image
                src={terapiaPsicologicaOnline}
                alt="Tarjeta principal de Karen Quezada"
                className="h-full w-full rounded-[1.5rem] object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section id="terapias" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-18 sm:px-8 lg:px-12 lg:py-24">
          <p className="text-sm uppercase tracking-[0.34em] text-[var(--color-slate)]">
            Terapias
          </p>
          <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight sm:text-5xl">
            Espacios de terapia para tu bienestar emocional
          </h2>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {therapies.map((therapy) => (
              <article
                key={therapy.title}
                className="rounded-[1.75rem] border border-black/8 bg-[#faf8f4] p-6 transition hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(80,63,85,0.08)]"
              >
                <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.24em] text-[var(--color-slate)]">
                  <span>{therapy.eyebrow}</span>
                  {therapy.badge ? (
                    <span className="rounded-full bg-[var(--color-blush)] px-3 py-1 tracking-[0.16em] text-[var(--color-ink)]">
                      {therapy.badge}
                    </span>
                  ) : null}
                </div>
                <h3 className="mt-5 font-serif text-3xl leading-tight">
                  {therapy.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-[var(--color-slate)]">
                  {therapy.description}
                </p>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex rounded-full bg-[var(--color-lime)] px-5 py-3 text-sm font-semibold text-[#182247] transition hover:bg-[#dced63]"
                >
                  Iniciar terapia
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="comunidad" className="bg-[#faf8f4]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-18 sm:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:px-12 lg:py-24">
          <div>
            <p className="text-sm uppercase tracking-[0.34em] text-[var(--color-slate)]">
              Comunidad
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
              Un espacio para aprender, reflexionar y fortalecer tu bienestar.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--color-slate)]">
              Talleres, asesorias y contenidos psicoeducativos pensados para
              acompanar procesos personales, familiares e institucionales.
            </p>

            <div className="mt-8 overflow-hidden rounded-[1.9rem] bg-white p-3 shadow-[0_18px_50px_rgba(75,59,79,0.08)]">
              <Image
                src={psicologiaKarenQuezada}
                alt="Contenido visual sobre salud mental"
                className="h-full w-full rounded-[1.4rem] object-cover"
              />
            </div>
          </div>

          <article className="self-end rounded-[1.9rem] border border-black/8 bg-white p-6 shadow-[0_18px_50px_rgba(75,59,79,0.06)]">
            <p className="text-sm uppercase tracking-[0.34em] text-[var(--color-slate)]">
              Encuentros grupales
            </p>
            <h3 className="mt-4 font-serif text-3xl leading-tight">
              Talleres y asesorias con enfoque practico
            </h3>
            <p className="mt-4 text-base leading-7 text-[var(--color-slate)]">
              Un formato ideal para abrir conversaciones sobre salud mental,
              autocuidado, vinculos y herramientas de regulacion emocional en
              espacios educativos, familiares o comunitarios.
            </p>

            <div className="mt-6 overflow-hidden rounded-[1.5rem] bg-[#f4f0ea] p-3">
              <Image
                src={saludMentalConsejos}
                alt="Infografia de apoyo psicoeducativo"
                className="h-full w-full rounded-[1.1rem] object-cover"
              />
            </div>
          </article>
        </div>
      </section>

      <section id="otros-servicios" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-18 sm:px-8 lg:px-12 lg:py-24">
          <p className="text-sm uppercase tracking-[0.34em] text-[var(--color-slate)]">
            Mas formas de acompanarte
          </p>
          <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight sm:text-5xl">
            Otros servicios profesionales
          </h2>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {extraServices.map((service) => (
              <article
                key={service.title}
                className="rounded-[1.75rem] border border-black/8 bg-[#faf8f4] p-6 transition hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(80,63,85,0.08)]"
              >
                <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-slate)]">
                  {service.eyebrow}
                </p>
                <h3 className="mt-5 font-serif text-3xl leading-tight">
                  {service.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-[var(--color-slate)]">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="relative overflow-hidden bg-[#ece7f7]">
        <div className="absolute inset-x-0 top-0 h-24 bg-[#302149]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.28),transparent_48%)]" />
        <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-14 sm:px-8 lg:px-12 lg:pt-28 lg:pb-18">
          <div className="grid items-stretch gap-5 lg:grid-cols-[0.9fr_1.05fr] lg:auto-rows-fr">
            <div className="h-full min-h-[500px] rounded-[2rem] bg-white p-3 shadow-[0_22px_60px_rgba(61,45,82,0.12)]">
              <div className="flex h-full min-h-full flex-col justify-center rounded-[1.6rem] bg-[linear-gradient(180deg,#f8f4ee_0%,#ffffff_100%)] p-3">
                <div className="mb-4 flex items-center justify-between">
                  <div className="inline-flex items-center gap-3">
                    <div className="h-12 w-12 overflow-hidden rounded-full border border-[#dce6ff] bg-white">
                      <Image
                        src={logoKarenQuezada}
                        alt="Logo Karen Quezada"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-slate)]">
                        Karen Quezada
                      </p>
                      <p className="mt-1 text-sm text-[#273d72]">
                        Psicologia y neuropsicologia
                      </p>
                    </div>
                  </div>
                  <span className="rounded-full bg-[#f3eefc] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#6b5e90]">
                    Online
                  </span>
                </div>

                <div className="rounded-[1.5rem] border border-[#eee2d5] bg-[linear-gradient(180deg,#fffaf5_0%,#f9f4ee_100%)] p-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
                  <div className="overflow-hidden rounded-[1.2rem] border border-[#f1e9dd] bg-[#fcfaf7]">
                    <Image
                      src={imagenPromocional}
                      alt="Imagen promocional de Karen Quezada"
                      className="h-auto w-full object-contain"
                    />
                  </div>
                </div>

              </div>
            </div>

            <div className="relative flex h-full min-h-[500px] flex-col justify-center rounded-[2rem] bg-white p-5 shadow-[0_22px_60px_rgba(61,45,82,0.16)] sm:p-7">
              <div className="max-w-2xl">
                <p className="text-[15px] font-semibold text-[#0f2a67] sm:text-[17px]">
                  ¿Buscas un proceso de cambio?
                </p>
                <p className="mt-4 text-[2rem] leading-tight text-[#0f2a67] sm:text-[2.05rem]">
                  Conecta con Karen Quezada hoy y <strong>comienza terapia</strong>{" "}
                  desde donde estes. <strong>100% en linea.</strong>
                </p>
                <p className="mt-5 max-w-xl text-base leading-8 text-[#273d72]">
                  Atencion online para consultas psicologicas, terapia individual
                  y terapia de pareja.
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--color-lime)] px-8 py-4 text-center text-base font-semibold text-[#182247] transition hover:bg-[#dced63]"
                >
                  <SocialIcon kind="whatsapp" className="h-5 w-5" />
                  Iniciar terapia
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-12">
          <div>
            <div className="mb-4 h-16 w-16 overflow-hidden rounded-full border border-[#dce6ff] bg-white">
              <Image
                src={logoKarenQuezada}
                alt="Logo Karen Quezada"
                className="h-full w-full object-cover"
              />
            </div>
            <p className="text-sm uppercase tracking-[0.34em] text-[var(--color-slate)]">
              Inicio
            </p>
            <p className="mt-4 font-serif text-3xl">Karen Quezada Psicologa</p>
            <p className="mt-4 max-w-md text-base leading-7 text-[var(--color-slate)]">
              Psicologa clinica. Master en Neuropsicologia y Educacion.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <p className="text-sm uppercase tracking-[0.34em] text-[var(--color-slate)]">
                Servicios
              </p>
              <ul className="mt-4 space-y-3 text-base text-[var(--color-slate)]">
                <li>Consultas psicologicas</li>
                <li>Psicoterapia individual</li>
                <li>Psicoterapia de pareja</li>
                <li>Capacitacion</li>
              </ul>
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.34em] text-[var(--color-slate)]">
                Contacto
              </p>
              <ul className="mt-4 space-y-3 text-base text-[var(--color-slate)]">
                <li>
                  <a href={whatsappHref} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
                    <SocialIcon kind="whatsapp" />
                    WhatsApp: 098 400 6435
                  </a>
                </li>
                <li>
                  <a href={emailHref} className="inline-flex items-center gap-2">
                    <SocialIcon kind="email" />
                    karenquezada.psicologia@gmail.com
                  </a>
                </li>
                <li>
                  <a href={instagramHref} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
                    <SocialIcon kind="instagram" />
                    Instagram: @karenquezadapsc
                  </a>
                </li>
                <li>
                  <a href={facebookHref} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
                    <SocialIcon kind="facebook" />
                    Facebook: psicologakarenquezada
                  </a>
                </li>
                <li>
                  <a href={tikTokHref} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
                    <SocialIcon kind="tiktok" />
                    TikTok: @karenquezadapsc
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
