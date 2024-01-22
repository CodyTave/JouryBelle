import { main } from "@/assets";
import Hero from "./components/Hero";
import LayoutComponent from "./components/LayoutComponent";
import { paddingX } from "./constants/styles";

export default function Home() {
  return (
    <LayoutComponent mainFrame={main}>
      <main>
        <Hero />
      </main>
    </LayoutComponent>
  );
}
