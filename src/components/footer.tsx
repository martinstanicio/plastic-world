import Brand from "./brand";
import SocialIcons from "./social-icons";

export default function Footer() {
  return (
    <footer className="dark bg-background text-foreground">
      <div className="container max-w-prose space-y-12 py-8 md:max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-x-4 gap-y-12 sm:flex-row">
          <Brand />
          <SocialIcons />
        </div>
        <div className="flex flex-col justify-between gap-4 text-center sm:flex-row">
          <p>Madetodo Empresarial &copy; {new Date().getFullYear()}</p>
          <p>
            Página web diseñada por{" "}
            <a
              href="https://www.linkedin.com/in/martinstanicio/"
              target="_blank"
              className="font-bold text-primary hover:underline focus:underline"
            >
              Martín Stanicio
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
