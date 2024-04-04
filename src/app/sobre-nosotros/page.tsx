import { Metadata } from "next";
import Image from "next/image";

import image01 from "@/assets/about-us-01.png";
import image02 from "@/assets/about-us-02.png";
import image03 from "@/assets/about-us-03.png";

const title = "Sobre Nosotros";
const description = "";
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
        <h2>Bienvenidos a Plastic World</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          ipsa quos inventore cupiditate debitis quas explicabo eos aliquid
          dolor molestiae rerum minus facere totam voluptate perferendis sit
          cumque neque fugiat, exercitationem est.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          provident eos, incidunt velit, ea ipsum cum sunt reiciendis
          voluptates, laboriosam dolorem nam iusto quisquam atque? Ipsam illo
          repellat a nemo corrupti odit dolores? Iste.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro debitis
          corporis quod numquam adipisci pariatur? Dolorum est facere, quo esse
          deleniti sunt dicta in quia sequi, nulla, sint natus?
        </p>
        <figure>
          <Image
            src={image01}
            alt="Lorem ipsum dolor sit amet consectetur."
            sizes="auto"
            placeholder="blur"
            className="rounded-md bg-secondary"
          />
          <figcaption>Lorem ipsum dolor sit amet consectetur.</figcaption>
        </figure>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis
          ea sequi iste quis eveniet quidem quasi dolore totam, dolorum libero,
          nostrum enim quisquam a facilis mollitia quaerat.
        </p>
        <figure>
          <Image
            src={image02}
            alt="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo itaque natus nihil?"
            sizes="auto"
            placeholder="blur"
            className="rounded-md bg-secondary"
          />
          <figcaption>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo itaque
            natus nihil?
          </figcaption>
        </figure>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          quibusdam omnis dolor placeat magni nulla optio! Quisquam at deserunt
          dignissimos error molestias temporibus fugiat officia a ipsa, nisi,
          exercitationem corrupti nobis ut veniam? Dolor, dolorem.
        </p>
        <figure>
          <Image
            src={image03}
            alt="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut?"
            sizes="auto"
            placeholder="blur"
            className="rounded-md bg-secondary"
          />
          <figcaption>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut?
          </figcaption>
        </figure>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nisi
          temporibus perferendis esse, aliquid quae aliquam cum? Dicta facilis
          quis quia dolorem quaerat praesentium beatae commodi rerum natus sit
          unde libero consequatur similique aut, nobis perferendis.
        </p>
      </main>
    </main>
  );
}
