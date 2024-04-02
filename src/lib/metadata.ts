import type { Metadata } from "next";

export const siteName = "Plastic World";
export const title = "";
export const description = "";
export const keywords = [];

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
