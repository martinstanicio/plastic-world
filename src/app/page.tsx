import Image from "next/image";
import Link from "next/link";

import Hero from "@/components/hero";
import ProductCard from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { featuredProducts } from "@/lib/products";

export default function Home() {
  return (
    <>
      <Hero />
      <main>
        <div className="bg-secondary text-secondary-foreground">
          <section className="container grid max-w-4xl gap-8 py-8 md:grid-cols-2">
            <div className="relative h-full max-md:aspect-[4/3]">
              <Image
                src="https://placehold.co/800x600/png"
                alt=""
                fill
                className="overflow-hidden rounded-md object-cover object-center shadow"
              />
            </div>
            <div className="prose prose-a:no-underline">
              <h2>Quiénes somos</h2>
              <p>
                Nosotros somos{" "}
                <span className="font-bold text-primary">Madetodo</span>, y
                nuestra pasión es lorem ipsum dolor sit amet consectetur
                adipisicing elit. Autem repellat sunt quisquam adipisci error
                qui mollitia.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                voluptatibus laudantium possimus exercitationem debitis omnis
                non adipisci corrupti et porro, nesciunt, dicta, vel quis ut
                quisquam minima nam! Magnam, debitis!
              </p>
              <Button asChild className="max-md:w-full">
                <Link href="/sobre-nosotros">Sobre nosotros</Link>
              </Button>
            </div>
          </section>
        </div>
        <section className="container space-y-8 py-8">
          <header className="prose md:text-center">
            <h2>Productos destacados</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam rem
              sapiente id laudantium expedita aspernatur unde, eius natus.
            </p>
          </header>
          <div className="space-y-4">
            <div className="mx-auto grid max-w-4xl grid-cols-[repeat(auto-fit,minmax(25ch,1fr))] grid-rows-3 gap-x-4 overflow-y-hidden [grid-auto-rows:0] sm:grid-rows-1">
              {featuredProducts.map((product, i) => (
                <ProductCard className="mb-4" key={i} {...product} />
              ))}
            </div>
            <div className="flex justify-center">
              <Button asChild size="lg" className="max-md:w-full">
                <Link href="/catalogo">Ver todos los productos</Link>
              </Button>
            </div>
          </div>
        </section>
        <div className="bg-primary">
          <section className="container max-w-4xl space-y-4 py-8 md:text-center">
            <div className="dark prose text-primary-foreground">
              <h2 className="text-primary-foreground">Contactanos</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                ipsam repellendus soluta asperiores. At dolor veritatis,
                exercitationem doloremque accusamus eaque.
              </p>
            </div>
            <Button asChild variant="secondary" className="max-md:w-full">
              <Link href="/contacto">Contacto</Link>
            </Button>
          </section>
        </div>
      </main>
    </>
  );
}
