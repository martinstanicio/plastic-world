import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function notFound() {
  return (
    <main className="container prose flex flex-col items-center justify-center py-8 prose-a:no-underline">
      <h1 className="text-center">404: Esta página no existe</h1>
      <p className="text-center">
        La página a la que estás intentando acceder no existe. Si crees que esto
        es un error, puedes comunicarte con nosotros mediante la página de
        contacto.
      </p>
      <div className="flex w-full flex-wrap justify-center gap-4">
        <Button className="max-sm:w-full" asChild>
          <Link href="/">Volver a inicio</Link>
        </Button>
        <Button className="max-sm:w-full" variant="secondary" asChild>
          <Link href="/contacto">Contacto</Link>
        </Button>
      </div>
    </main>
  );
}
