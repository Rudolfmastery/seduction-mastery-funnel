import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Seduction Mastery - Clase Gratuita",
  description: "Aprende las claves de la seducción masculina en esta clase gratuita exclusiva.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}

