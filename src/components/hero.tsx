import Image from "next/image";
import Link from "next/link";

import hero from "@/assets/hero.png";

import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl md:grid-cols-2">
      <div className="relative grid place-items-center sm:pb-8 sm:pt-16 md:order-last md:px-4 md:py-16">
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
          src={hero}
          alt="Foto del frente de nuestro local en el puerto"
          priority
          placeholder="blur"
          sizes="(min-width: 1100px) 480px, (min-width: 780px) calc(40.67vw + 41px), (min-width: 640px) 480px, 100vw"
          className="aspect-[4/3] w-full bg-secondary object-cover object-center max-sm:max-h-64 sm:max-w-[30rem] sm:rounded-md sm:shadow-lg"
        />
      </div>
      <div className="prose z-10 flex max-w-md flex-col justify-center px-4 pb-16 pt-8 prose-a:no-underline md:pr-0 md:pt-16">
        <h1 className="[text-wrap:balance]">
          Encontrá lo que necesitás con{" "}
          <span className="text-primary">Plastic World</span>
        </h1>
        <p className="lead mt-0 md:w-11/12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In, ducimus!
          Eos optio nesciunt maiores dolores hic.
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
