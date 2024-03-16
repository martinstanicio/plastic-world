import Image from "next/image";
import Link from "next/link";

import hero from "@/assets/hero.jpg";

import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section className="relative mx-auto grid max-w-6xl md:grid-cols-2">
      <div className="relative grid place-items-center md:order-last md:pb-16 md:pl-8 md:pr-4 md:pt-16">
        <svg
          viewBox="0 0 100 63"
          className="absolute bottom-0 right-0 -z-10 h-full max-lg:hidden"
        >
          <path
            d="M99 3C99 3 82.5 3 80 13.5C75.9676 26.4784 86.5 41.5 70.5 54C55.7753 65.5037 41.5 38 20.5 49C11.9123 53.4983 10 63 10 63"
            className="fill-none stroke-primary stroke-2"
            strokeDasharray="5"
            strokeLinecap="square"
          />
        </svg>
        <Image
          src={hero}
          alt="Foto del frente de nuestro local en el puerto"
          priority
          placeholder="blur"
          sizes="(min-width: 1120px) 480px, (min-width: 780px) 43.13vw, 100vw"
          className="aspect-[4/3] bg-secondary object-cover object-center max-md:max-h-64 md:max-w-[30rem] md:rounded-md md:shadow-lg"
        />
      </div>
      <div className="prose relative z-10 flex max-w-md flex-col justify-center px-4 pb-16 pt-8 prose-a:no-underline md:pr-0 md:pt-16">
        <h1 className="[text-wrap:balance]">
          Encontrá el regalo empresarial perfecto con{" "}
          <span className="text-primary">Madetodo</span>
        </h1>
        <p className="lead mt-0 md:w-11/12">
          Regalos empresariales <strong>únicos y personalizados</strong>, en la
          cantidad que necesites. Simplificá tu búsqueda con nosotros.
        </p>
        <div className="flex w-full gap-4">
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
    </section>
  );
}
