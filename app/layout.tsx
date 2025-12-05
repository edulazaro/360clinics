import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Asociación de Afectados por 360 Clinics",
  description: "Plataforma de apoyo y recursos para personas afectadas por las prácticas de 360 Clinics. Encuentra información, testimonios y ayuda legal.",
  keywords: ["360 Clinics", "afectados", "ayuda legal", "apoyo", "testimonios", "reclamación"],
  authors: [{ name: "Asociación de Afectados 360 Clinics" }],
  manifest: "/img/manifest.json",
  icons: {
    icon: [
      { url: "/img/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/img/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/img/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/img/android-icon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/img/apple-icon-57x57.png", sizes: "57x57" },
      { url: "/img/apple-icon-60x60.png", sizes: "60x60" },
      { url: "/img/apple-icon-72x72.png", sizes: "72x72" },
      { url: "/img/apple-icon-76x76.png", sizes: "76x76" },
      { url: "/img/apple-icon-114x114.png", sizes: "114x114" },
      { url: "/img/apple-icon-120x120.png", sizes: "120x120" },
      { url: "/img/apple-icon-144x144.png", sizes: "144x144" },
      { url: "/img/apple-icon-152x152.png", sizes: "152x152" },
      { url: "/img/apple-icon-180x180.png", sizes: "180x180" },
    ],
    other: [
      { rel: "msapplication-TileImage", url: "/img/ms-icon-144x144.png" },
    ],
  },
  openGraph: {
    title: "Asociación de Afectados por 360 Clinics",
    description: "Plataforma de apoyo y recursos para personas afectadas por 360 Clinics",
    type: "website",
  },
  other: {
    "msapplication-TileColor": "#ffffff",
  },
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
