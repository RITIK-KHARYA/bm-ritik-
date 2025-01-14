import Header from "@/components/header";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen overflow-hidden ">
      <Header />
      <div className="mx-auto">
        <div>
          <span >All your bookmarks in one place</span>
        </div>

      </div>
    

    </main>
  );
}
