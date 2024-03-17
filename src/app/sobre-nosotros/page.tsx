import { Metadata } from "next";
import Image from "next/image";

import image01 from "@/assets/about-us-01.png";
import image02 from "@/assets/about-us-02.png";
import image03 from "@/assets/about-us-03.jpg";

const title = "Sobre Nosotros";
const description =
  "Un vistazo de la misión, visión y valores que guían a Madetodo Empresarial, nuestro equipo y nuestra historia, para que conozcas quiénes somos y cómo trabajamos para satisfacer tus necesidades.";
const url = "/sobre-nosotros";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url },
};

export default function Products() {
  return (
    <main className="container prose py-8">
      <header>
        <h1>{title}</h1>
        <p>{description}</p>
      </header>
      <main>
        <h2>Bienvenidos a Madetodo</h2>
        <p>
          Madetodo fue <strong>fundada en el año 1979</strong>, su primer
          cliente potencial fue el Círculo de Lectores a quienes le fabricábamos
          las estanterías para que sus asociados pudieran coleccionar los libros
          que distribuían. También consumían un set de cuero con 6 platos para
          regalar a sus nuevos socios.
        </p>
        <p>
          De esta manera fue creciendo y haciéndose{" "}
          <strong>
            proveedora de varias cosas de regalaría en todo el país
          </strong>
          . En el año 1993 realizó su primera importación debido a la necesidad
          de economizar en máquinas de reloj, ya que tenía vendidas más de
          10.000 relojes y en El Once era muy costoso adquirirlas.
        </p>
        <p>
          Poco a poco fue incorporándose como{" "}
          <strong>proveedora de empresas</strong> de compra directa a quienes le
          facilitaban gran variedad y cantidad de artículos debido a su{" "}
          <strong>siempre creciente e innovadora tecnología</strong>.
        </p>
        <figure>
          <Image
            src={image01}
            alt="Los inicios de nuestro local en el puerto, aún bastante básico, sin muchas decoraciones, y con mucha mercadería afuera."
            sizes="auto"
            placeholder="blur"
            className="rounded-md bg-secondary"
          />
          <figcaption>Los inicios de nuestro local en el puerto.</figcaption>
        </figure>
        <p>
          Tras años de ser proveedora de varios negocios del{" "}
          <strong>Puerto de Frutos de Tigre</strong>, llegó por primera vez en
          su trayectoria a abrir su primer local de venta al público en el
          mencionado centro comercial a cielo abierto.
        </p>
        <figure>
          <Image
            src={image02}
            alt="El interior de nuestro local hace unos años, repleto de decenas de productos diferentes, incluyendo tablas de madera, utensilios, platos, relojes, banquetas, y cajones, entre muchas otras cosas."
            sizes="auto"
            placeholder="blur"
            className="rounded-md bg-secondary"
          />
          <figcaption>
            El interior de nuestro local hace unos años, repleto de decenas de
            productos diferentes.
          </figcaption>
        </figure>
        <p>
          Desde sus inicios a la fecha Madetodo ha producido{" "}
          <strong>gran variedad de artículos</strong> y ha incorporado
          tecnología que le permite desarrollar modelos de tablas y diseños a
          gusto de todos sus consumidores. Anexando a sus productos en madera
          una amplia línea de productos para la parrilla y accesorios.
        </p>
        <figure>
          <Image
            src={image03}
            alt="Nuestro local actualmente, con muchos productos nuevos, no solo en madera, sino también decoraciones de tela, termos, y muchas otras ideas innovadoras."
            sizes="auto"
            placeholder="blur"
            className="rounded-md bg-secondary"
          />
          <figcaption>
            Nuestro local actualmente, con muchos productos nuevos y lleno de
            creatividad.
          </figcaption>
        </figure>
        <p>
          También está tecnología le permite ofrecer el{" "}
          <strong>servicio de grabado laser</strong> para personalizar los
          artículos para tu hogar y lo que es aún mejor para tu empresa, lo que
          genera la posibilidad de{" "}
          <strong>artículos personales y personalizados</strong> para ayudarlos
          a estar presente de forma cotidiana en la vida de sus clientes,
          proveedores, socios, pares, etc.
        </p>
      </main>
    </main>
  );
}
