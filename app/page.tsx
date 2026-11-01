import { About } from "@/components/main/about";
import { Hero } from "@/components/main/hero";

export default function HomePage() {
  return (
    <main className="w-full">
      <Hero />
      <About />
    </main>
  );
}
