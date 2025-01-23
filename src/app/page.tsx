import Footer from "@/components/footer/footer";
import Header from "@/components/header";
import { Hero}  from "@/components/hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen  ">
      <Header />
      <Hero />
      <Footer />
    </main>
  );
}
