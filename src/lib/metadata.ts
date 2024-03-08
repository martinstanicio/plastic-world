import type { Metadata } from "next";

export const siteName = "Madetodo Empresarial";
export const title = "Encontrá el regalo empresarial perfecto";
export const description =
  "Regalos empresariales únicos y personalizados, en la cantidad que necesites. Simplificá tu búsqueda, ahorrá tiempo, y dejá una impresión duradera en tu equipo con Madetodo Empresarial.";
export const keywords = [
  "regalos empresariales",
  "decoración",
  "regalos",
  "artículos en madera",
  "producción en cantidad",
  "productos personalizados",
  "compras personalizadas",
];

export const metadata: Metadata = {
  title: {
    template: `%s | ${siteName}`,
    default: `${title} | ${siteName}`,
  },
  description,
  keywords,
  creator: "Martín Stanicio",
  generator: "Next.js",
  alternates: { canonical: "/" },
  openGraph: {
    siteName,
    title,
    description,
    type: "website",
    locale: "es",
    url: "/",
  },
};
