import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Karen Quezada Psicóloga",
  description:
    "Sitio web de Karen Quezada Psicóloga: consultas psicológicas, psicoterapia, talleres, asesorías y material psicoeducativo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
