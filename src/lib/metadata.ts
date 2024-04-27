import type { Metadata } from "next";

export const siteName = "Plastic World";
export const title = "Tu bazar de confianza";
export const description =
  "Calidad y variedad de productos de bazar para ventas mayoristas y minoristas.";
export const keywords = [
  "bazar",
  "productos de plastico",
  "plastico",
  "articulos de cocina",
  "mayorista",
  "minorista",
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
  openGraph: {
    siteName,
    title,
    description,
    type: "website",
    locale: "es",
    url: "/",
  },
};
