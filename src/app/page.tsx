import { main } from "@/assets";
import Hero from "./components/Hero";
import LayoutComponent from "./components/LayoutComponent";

export default function Home() {
  return (
    <LayoutComponent mainFrame={main}>
      <Hero />
    </LayoutComponent>
  );
}
