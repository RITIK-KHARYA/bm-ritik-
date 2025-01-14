import Header from "@/components/header";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen overflow-hidden ">
      <Header />
      <div className=" flex h-1/2 ">
        <div className="mx-auto my-auto flex flex-col items-center justify-center gap-6">
          <span className="text-7xl font-bold text-gray-200 shadow-md text-center w-1/2 ">
            All your bookmarks in one place
          </span>
          <p className="text-neutral-400 font-semibold text-md font-mono mt-2 text-wrap w-1/3">
            SaveIt is the ultimate bookmark app designed to organize and store
            all your favorite links, articles, and websites in one convenient
            place. Access your bookmarks anytime, anywhere with a simple and
            intuitive interface. Say goodbye to scattered tabs and hello to
            seamless organization!
          </p>
        </div>
      </div>
    </main>
  );
}
