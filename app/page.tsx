import { AppleStyleDock } from "@/components/motion-primitives/AppleStyleDock";
import { AnimatedCardBackgroundHover } from "../components/motion-primitives/AnimatedCardBackgroundHover";
  
// import { TextEffectPerChar } from "@/components/motion-primitives/TextEffectPerCharacter";
// import { TextShimmerBasic } from "@/components/motion-primitives/TextShimmerBasic";
import { CarouselBasic } from "@/components/motion-primitives/CarouselBasic";
import { GlowEffectCardBackground } from "@/components/motion-primitives/GlowEffectCardBackground";
import { Header } from "./header";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20 gap-16">
      <Header />
      <main className="flex flex-col gap-16 items-center justify-center w-full">
        <AppleStyleDock />
        <section className="flex flex-col gap-4 items-center">
          <AnimatedCardBackgroundHover />
          {/* <TextEffectWithExit /> */}
          {/* <TextShimmerColor /> */}
          {/* <TextEffectPerChar />
           <BorderTrailCard1 />
          <TextShimmerBasic /> */}
          <div className="p-4">
            <GlowEffectCardBackground />
            <CarouselBasic />
          </div>
          {/* link to about page */}
        </section>
      </main>
      
      <footer className="flex gap-6 flex-wrap items-center justify-center">
        {/* Your footer content here */}
      </footer>
    </div>
  );
}