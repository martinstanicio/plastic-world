import {
  faBox,
  faClock,
  faCoins,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

import { Suspense } from "react";

import Link from "next/link";

import BenefitCard from "@/components/benefit-card";
import Hero from "@/components/hero";
import ProductsGrid from "@/components/products-grid";
import { Button } from "@/components/ui/button";
import { findProduct } from "@/lib/products";

export default function Home() {
  const featuredProducts = [
    findProduct("fuenton-oso"),
    findProduct("jabonera-simple"),
    findProduct("set-escolar-triple-formas"),
  ];

  return (
    <div>
      <Hero />
      <main>
        <div className="border-y bg-secondary text-secondary-foreground shadow-inner-y">
          <section className="container grid max-w-prose grid-cols-1 gap-8 py-8 sm:grid-cols-2 md:max-w-6xl lg:grid-cols-4">
            <BenefitCard
              title="Variedad y calidad"
              description="Todo tipo de productos de primera."
              icon={faMagnifyingGlass}
            />
            <BenefitCard
              title="Disponibilidad"
              description="Abierto toda la semana."
              icon={faClock}
            />
            <BenefitCard
              title="Cantidad"
              description="Ventas mayoristas y minoristas."
              icon={faCoins}
            />
            <BenefitCard
              title="Flexibilidad"
              description="Envíos a domicilio."
              icon={faBox}
            />
          </section>
        </div>

        <section className="container prose max-w-prose text-balance py-8 md:text-center">
          <h2>¿Quiénes somos?</h2>
          <p>
            Con más de 25 años de experiencia en la venta minorista y mayorista,
            en <strong className="text-primary">Plastic World</strong> nos
            dedicamos a ofrecer productos de calidad y exclusividad.
          </p>
          <p>
            Seleccionamos cuidadosamente cada artículo de nuestro{" "}
            <Link href="/catalogo">catálogo</Link>, garantizando los más altos
            estándares de calidad.
          </p>
          <p>
            <strong className="text-primary">
              ¡Plastic World tiene lo que necesitás!
            </strong>
          </p>

          <Button asChild className="not-prose max-md:w-full">
            <Link href="/sobre-nosotros">Sobre nosotros</Link>
          </Button>
        </section>
        <div className="border-y bg-secondary text-secondary-foreground shadow-inner-y">
          <section className="container max-w-prose space-y-8 py-8 md:max-w-6xl">
            <header className="prose md:text-center">
              <h2>Productos destacados</h2>
              <p>Descubre algunos de nuestros productos más vendidos.</p>
            </header>
            <div className="space-y-4">
              <Suspense>
                <ProductsGrid
                  as="div"
                  gridMode="fit"
                  products={featuredProducts}
                  notInteractive
                />
              </Suspense>
              <div className="flex justify-center">
                <Button asChild size="lg" className="max-md:w-full">
                  <Link href="/catalogo">Ver todos los productos</Link>
                </Button>
              </div>
            </div>
          </section>
        </div>
        <section className="container max-w-prose space-y-4 py-8 md:max-w-6xl md:text-center">
          <div className="prose">
            <h2>¿Tenés alguna duda?</h2>
            <p className="text-balance">
              No dudes en <strong>contactarnos</strong> hoy mismo para resolver
              cualquier duda o inconveniente que tengas, ¡estamos encantados de
              ayudarte!
            </p>
          </div>
          <Button asChild size="lg" className="max-md:w-full">
            <Link href="/contacto">Contactanos</Link>
          </Button>
        </section>
      </main>
    </div>
  );
}
