import {
  faCheckCircle,
  faList,
  faRecycle,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";

import { Suspense } from "react";

import Image from "next/image";
import Link from "next/link";

import BenefitCard from "@/components/benefit-card";
import BrandsWhoTrustUs from "@/components/brands-who-trust-us";
import Hero from "@/components/hero";
import ProductsGrid from "@/components/products-grid";
import Testimonial from "@/components/testimonial";
import { Button } from "@/components/ui/button";
import { allProducts } from "@/lib/products";
import { getWhatsAppLink } from "@/lib/whatsapp";

export default function Home() {
  return (
    <>
      <Hero />
      <main>
        <div className="border-y bg-secondary text-secondary-foreground shadow-inner-y">
          <section className="container grid max-w-prose grid-cols-1 gap-8 py-8 sm:grid-cols-2 md:max-w-6xl lg:grid-cols-4">
            <BenefitCard
              title="Producción en masa"
              description="Producción de cientos de miles de unidades"
              icon={faList}
            />
            <BenefitCard
              title="Envíos a domicilio"
              description="Envíos a todo el país."
              icon={faTruck}
            />
            <BenefitCard
              title="Primera calidad"
              description="100% garantizado."
              icon={faCheckCircle}
            />
            <BenefitCard
              title="Ecológico"
              description="Materiales 100% naturales"
              icon={faRecycle}
            />
          </section>
        </div>

        <section className="container grid max-w-prose gap-8 py-8 md:max-w-6xl md:grid-cols-2">
          <div className="relative h-full max-md:aspect-[4/3]">
            <Image
              src="https://placehold.co/800x600/png"
              alt=""
              fill
              className="overflow-hidden rounded-md object-cover object-center shadow"
            />
          </div>
          <div className="prose prose-a:no-underline">
            <h2>¿Quiénes somos?</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
              deserunt reprehenderit culpa illum nulla optio assumenda veritatis
              ea, inventore laboriosam dolorum placeat aliquid aliquam.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non,
              debitis. Expedita, praesentium debitis animi porro dolores
              accusantium impedit eligendi magni a dolorem!
            </p>
            <p>
              <strong className="text-primary">
                ¡Plastic World tiene lo que necesitás!
              </strong>
            </p>

            <Button asChild className="max-md:w-full">
              <Link href="/sobre-nosotros">Sobre nosotros</Link>
            </Button>
          </div>
        </section>
        <div className="border-y bg-secondary text-secondary-foreground shadow-inner-y">
          <section className="container grid max-w-prose grid-cols-1 gap-8 py-8 sm:grid-cols-2 md:max-w-6xl">
            <Testimonial
              name="María Hernandez"
              role="Agente de recursos humanos de Violetta"
              img="https://placehold.co/100x100/png"
            >
              <q>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
                consectetur delectus esse quod optio. Minima cum dolorem
                repellendus commodi omnis. Dolorem cum incidunt possimus facilis
                id, et ducimus.
              </q>
            </Testimonial>
            <Testimonial
              name="Juan Perez"
              role="Gerente en Clarín"
              img="https://placehold.co/100x100/png"
            >
              <q>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
                rem officia explicabo impedit odio, similique ipsum quia nihil
                saepe asperiores distinctio quos, deserunt eum maiores.
              </q>
            </Testimonial>
          </section>
        </div>
        <section className="container max-w-prose space-y-8 py-8 md:max-w-6xl">
          <header className="prose text-center">
            <h2>Confían en nosotros</h2>
          </header>
          <BrandsWhoTrustUs />
        </section>
        <div className="border-y bg-secondary text-secondary-foreground shadow-inner-y">
          <section className="container max-w-prose space-y-8 py-8 md:max-w-6xl">
            <header className="prose md:text-center">
              <h2>Productos destacados</h2>
              <p>
                Descubre algunos de nuestros productos más vendidos, o envíanos
                tu{" "}
                <Link
                  href={getWhatsAppLink(
                    +process.env.NEXT_PUBLIC_PHONE,
                  ).toString()}
                  target="_blank"
                  className="font-bold text-primary"
                >
                  pedido personalizado
                </Link>{" "}
                y Plastic World lo hace realidad.
              </p>
            </header>
            <div className="space-y-4">
              <Suspense>
                <ProductsGrid
                  as="div"
                  gridMode="fit"
                  products={allProducts.slice(0, 3)}
                  notInteractive
                  hideCustomProductsCard
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
            <h2>¿Listo para comenzar?</h2>
            <p>
              <strong>Ponte en contacto</strong> con nosotros hoy mismo para
              descubrir cómo podemos ayudarte a crear{" "}
              <strong>regalos empresariales personalizados y de calidad</strong>
              . ¡Plastic World tiene lo que necesitás!
            </p>
          </div>
          <Button asChild size="lg" className="max-md:w-full">
            <Link href="/contacto">Contactanos</Link>
          </Button>
        </section>
      </main>
    </>
  );
}
