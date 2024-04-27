import Image from "next/image";
import Link from "next/link";

import logo from "@/assets/logo.png";

import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl md:grid-cols-2">
      <div className="prose z-10 flex max-w-md flex-col justify-center px-4 py-8 prose-a:no-underline md:px-8 md:py-16 md:pr-0">
        <h1 className="text-balance">
          Encontrá tu bazar de confianza en{" "}
          <span className="text-primary">Plastic World</span>
        </h1>
        <p className="lead mt-0 md:w-11/12">
          Calidad y variedad de productos de bazar para ventas mayoristas y
          minoristas.
        </p>
        <div className="flex w-full flex-wrap gap-4">
          <Button asChild size="lg" className="max-md:flex-grow">
            <Link href="/catalogo">Ver catálogo</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="max-md:flex-grow"
          >
            <Link href="/contacto">Contacto</Link>
          </Button>
        </div>
      </div>
      <div className="relative grid place-items-center px-4 py-16 max-md:hidden">
        <svg
          viewBox="0 0 100 63"
          className="absolute bottom-0 right-0 -z-10 h-full max-lg:hidden"
        >
          <path
            d="M99 3C99 3 82.5 3 80 13.5C75.9676 26.4784 86.5 41.5 70.5 54C55.7753 65.5037 41.5 38 20.5 49C11.9123 53.4983 10 63 10 63"
            className="fill-none stroke-primary stroke-2"
            strokeDasharray="5"
            strokeLinecap="round"
          />
        </svg>
        <Image
          src={logo}
          alt="Logo de Plastic World"
          priority
          sizes="(min-width: 1100px) 480px, calc(40.67vw + 41px)"
          className="aspect-[4/3] w-full max-w-[30rem] object-contain object-center drop-shadow-2xl"
        />
      </div>
    </section>
  );
}
