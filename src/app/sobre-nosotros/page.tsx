import { Metadata } from "next";
import Link from "next/link";

const title = "Sobre Nosotros";
const description =
  "Un vistazo de lo que está detrás de Plastic World, para que conozcas quiénes somos y cómo trabajamos.";
const url = "/sobre-nosotros";

export const metadata: Metadata = {
  title,
  description,
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
        <h2>
          Bienvenidos a <span className="text-primary">Plastic World</span>
        </h2>
        <p>
          Con más de <strong>25 años de experiencia</strong> en el rubro de la
          venta, tanto <strong>minorista</strong> como{" "}
          <strong>mayorista</strong>, nos enorgullece presentarnos como una
          distribuidora mayorista comprometida con la calidad, la exclusividad y{" "}
          <strong>la satisfacción de nuestros clientes</strong>.
        </p>
        <p>
          En <strong className="text-primary">Plastic World</strong>{" "}
          seleccionamos cuidadosamente cada producto de nuestro{" "}
          <Link href="/catalogo">catálogo</Link>, asegurándonos de que cumpla
          con <strong>los más altos estándares de calidad</strong>. Trabajamos
          en estrecha colaboración con nuestros proveedores para garantizar que
          nuestros productos sean fabricados con{" "}
          <strong>materiales de primera calidad</strong> y siguiendo procesos de
          producción rigurosos.
        </p>
        <p>
          Te invitamos a descubrir el mundo de posibilidades que{" "}
          <strong className="text-primary">Plastic World</strong> ofrece. Visitá
          nuestro <Link href="/">sitio web</Link> o{" "}
          <Link href="/contacto">contáctanos directamente</Link> para conocer
          más sobre <Link href="catalogo">nuestros productos y servicios</Link>.
        </p>
      </main>
    </main>
  );
}
