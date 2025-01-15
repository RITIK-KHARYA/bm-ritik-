import { ArrowRight, MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Mockup, MockupFrame } from "./ui/mockup";
import Image from "next/image";

function Hero() {
  return (
    <div className="w-full dark:bg-black bg-black ">
      <div className="container mx-auto">
        <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
          <div>
            <Button variant="secondary" size="sm" className="gap-4 border border-neutral-700/[0.4] bg-neutral-950/70 rounded-md  text-gray-200">
              Beta soon <MoveRight className="w-4 h-4" />
            </Button>
          </div>
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter  text-center font-medium z-20 text-white flex gap-y-1 flex-col ">
              Change the way you store your{" "}
              <span className="border border-neutral-700/[0.4]  rounded-md bg-white/95 text-black">
                Bookmarks 🔖
              </span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
              PinSpere is a free and open-source bookmark manager that allows you
              to store and organize your bookmarks in a single place. With
              SaveBox, you can easily access your bookmarks from any device, and
              it's completely free.
            </p>
          </div>
          <div className="flex flex-row gap-3">
            <Button size="lg" className="gap-4" variant="outline">
              Get started <ArrowRight className="w-4 h-4" />
            </Button>
            <Button size="lg" className="gap-4">
              Sign in here <MoveRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full ">
        <MockupFrame
          className="animate-appear opacity-0 delay-700 w-fit mx-auto bg-neutral-950/80"
          size="small"
        >
          <Mockup type="responsive" className="mx-auto shadow-lg">
            <Image
              src={"https://www.launchuicomponents.com/app-dark.png"}
              alt={"demo"}
              width={1248}
              height={765}
              priority
            />
          </Mockup>
        </MockupFrame>
      </div>
    </div>
  );
}

export { Hero };
