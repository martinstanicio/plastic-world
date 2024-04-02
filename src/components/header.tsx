import Brand from "./brand";
import Navbar from "./navbar";

export default function Header() {
  return (
    <header className="dark sticky top-0 z-50 flex items-center justify-between border-b bg-background p-4 text-foreground">
      <Brand />
      <Navbar />
    </header>
  );
}
