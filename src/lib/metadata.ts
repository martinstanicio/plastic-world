import type { Metadata } from "next";

export const siteName = "Plastic World";
export const title = "Encontrá lo que necesitas";
export const description =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, ducimus! Eos optio nesciunt maiores dolores hic.";
export const keywords = [
  "bazar",
  "productos de plastico",
  "plastico",
  "articulos de cocina",
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
