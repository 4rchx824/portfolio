import ConnectCard from "@/components/connect";
import { CardContainer } from "@/components/ui/3d-card";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { Badge } from "@/components/ui/badge";

import type { Metadata } from "next";
import Image from "next/image";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { Button } from "@/components/ui/button";
import { ChevronRight, MoveRightIcon } from "lucide-react";
import Link from "next/link";
import Belt from "@/components/belt";

export const metadata: Metadata = {
  title: "Archie's Portfolio",
};

export default async function Home() {
  return (
    <main className="flex min-h-[100dvh] flex-col bg-black w-full">
      <div className="relative w-full">
        <Image
          src={
            "https://images.unsplash.com/photo-1602298674761-700e96568f5f?q=80&w=3566&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          width={1920}
          height={512}
          alt="bg"
          className="object-cover object-center h-[256px] md:h-[512px] "
        />

        <Image
          src="/wave-haikei.svg"
          className="w-full absolute -bottom-1 -translate-x-1/2 left-1/2"
          width={1080}
          height={512}
          alt="wave"
        />
      </div>

      <div className="items-center justify-between flex flex-col md:flex-row w-full px-36 space-x-36">
        <div className="flex flex-col w-full justify-between h-[256px]">
          <div className="flex flex-col">
            <TypewriterEffectSmooth
              cursorClassName="bg-white w-[2px] md:w-[4px] !h-14"
              words={[
                { text: "Hi, ", className: "text-white text-6xl" },
                { text: "I'm ", className: "text-white text-6xl" },
                { text: "Archie.", className: "text-white text-6xl" },
              ]}
            />

            <div className="flex items-center flex-wrap space-x-2">
              <Badge
                variant={"outline"}
                className="rounded-full w-max text-white hover:text-black hover:bg-white transition-all"
              >
                Student
              </Badge>
              <Badge
                variant={"outline"}
                className="rounded-full w-max text-white hover:text-black hover:bg-white transition-all"
              >
                Software Developer
              </Badge>
            </div>
          </div>

          <Link
            className="hidden text-white items-center justify-center space-x-2 hover:-translate-y-2 transition-all duration-500 w-max"
            href={"/"}
          >
            <p>About Me</p>
            <ChevronRight />
          </Link>
        </div>

        <CardContainer className="w-full max-w-3xl">
          <ConnectCard />
        </CardContainer>
      </div>

      <Belt />
    </main>
  );
}
