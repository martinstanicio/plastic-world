import {
  faCheckCircle,
  faMoneyBill,
  faRecycle,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";

import Image from "next/image";
import Link from "next/link";

import BenefitCard from "@/components/benefit-card";
import Hero from "@/components/hero";
import ProductsGrid from "@/components/products-grid";
import Testimonial from "@/components/testimonial";
import { Button } from "@/components/ui/button";
import { allProducts } from "@/lib/products";

export default function Home() {
  return (
    <>
      <Hero />
      <main>
        <div className="border-y bg-secondary text-secondary-foreground shadow-inner-y">
          <section className="container grid max-w-prose grid-cols-1 gap-8 py-8 sm:grid-cols-2 md:max-w-6xl lg:grid-cols-4">
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
              title="Medios de pago"
              description="Mercado Pago, transferencia y efectivo"
              icon={faMoneyBill}
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
            <h2>Quiénes somos</h2>
            <p>
              Somos una empresa familiar dedicada a la{" "}
              <strong>
                producción de artículos de madera y elementos de parrilla
              </strong>
              . Si estás buscando hacer un regalo empresarial, Madetodo es el
              lugar indicado.
            </p>
            <p>
              Ofrecemos productos de <strong>alta calidad</strong>, capacidad de{" "}
              <strong>producción masiva</strong>, y un servicio de
              personalización de productos mediante{" "}
              <strong>grabado láser</strong>.
            </p>
            <p>
              <strong className="text-primary">
                ¡Madetodo hace tus deseos realidad!
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
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Tempora aspernatur maxime quis laborum soluta rerum.
              </q>
            </Testimonial>
            <Testimonial
              name="Juan Perez"
              role="Gerente en Clarín"
              img="https://placehold.co/100x100/png"
            >
              <q>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
                laboriosam dicta sint quam. Ipsum reiciendis sunt animi tempora
                eveniet temporibus commodi!
              </q>
            </Testimonial>
          </section>
        </div>
        <section className="container max-w-prose space-y-8 py-8 md:max-w-6xl">
          <header className="prose md:text-center">
            <h2>Productos destacados</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam rem
              sapiente id laudantium expedita aspernatur unde, eius natus.
            </p>
          </header>
          <div className="space-y-4">
            <ProductsGrid
              as="div"
              gridMode="fit"
              products={allProducts.slice(0, 3)}
            />
            <div className="flex justify-center">
              <Button asChild size="lg" className="max-md:w-full">
                <Link href="/catalogo">Ver todos los productos</Link>
              </Button>
            </div>
          </div>
        </section>
        <div className="border-y bg-secondary text-secondary-foreground shadow-inner-y">
          <section className="container max-w-prose py-8 md:max-w-6xl">
            <header className="prose md:text-center">
              <h2>Confían en nosotros</h2>
            </header>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "/tsu.webp",
                "/violetta.webp",
                "/avon.webp",
                "/gigot.webp",
                "/quilmes.webp",
                "/clarin.webp",
                "/gestion-compartida.webp",
              ].map((src, i) => (
                <Image src={src} alt="" width={256} height={256} key={i} />
              ))}
            </div>
          </section>
        </div>
        <div className="bg-primary">
          <section className="container max-w-prose space-y-4 py-8 md:max-w-6xl md:text-center">
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
