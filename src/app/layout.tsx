import { config as faConfig } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

import { Inter, Luckiest_Guy } from "next/font/google";

import Footer from "@/components/footer";
import Header from "@/components/header";
import { envVariables } from "@/lib/env";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";

faConfig.autoAddCss = false;

const bodyFont = Inter({ subsets: ["latin"], variable: "--font-body" });
const displayFont = Luckiest_Guy({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
});

envVariables.parse(process.env);

export { metadata } from "@/lib/metadata";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={cn(bodyFont.variable, displayFont.variable)}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
