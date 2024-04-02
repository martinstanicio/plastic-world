import { HTMLAttributes } from "react";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { getWhatsAppLink } from "@/lib/whatsapp";

export type Props = HTMLAttributes<HTMLDivElement>;

export default function CustomProductsCard({ className, ...props }: Props) {
  const searchParams = useSearchParams();

  const title = "Productos personalizados";

  if (
    searchParams.has("categoria") &&
    !searchParams.getAll("categoria").includes("productos personalizados")
  )
    return;

  if (searchParams.has("busqueda")) {
    const searchTerm = searchParams.get("busqueda");

    if (!searchTerm) return;

    const normalizedTitle = title.toLowerCase();
    const normalizedSearch = searchTerm.toLowerCase();

    if (!normalizedTitle.includes(normalizedSearch)) return;
  }

  return (
    <Card className={cn("border-primary", className)} {...props}>
      <CardHeader className="space-y-4">
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-base">
          ¿No tenemos el producto que estás buscando? Envíanos tu pedido
          personalizado y{" "}
          <strong className="text-primary">Plastic World</strong> lo hace
          realidad.
        </CardDescription>
      </CardHeader>

      <CardFooter className="flex flex-wrap gap-4">
        <Button className="max-sm:w-full" asChild>
          <Link
            href={getWhatsAppLink(+process.env.NEXT_PUBLIC_PHONE).toString()}
            target="_blank"
          >
            Realizar pedido
          </Link>
        </Button>

        <Button variant="secondary" className="max-sm:w-full" asChild>
          <Link href="/contacto">Otros medios de contacto</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
