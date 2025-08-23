"use client"


// import { Header } from "@/app/header";
import { AppleStyleDock } from "@/components/motion-primitives/AppleStyleDock";

import { TextShimmerColor } from "@/components/motion-primitives/TextShimmerColor";


export default function AboutPage() {
  return (
    <div className="font-sans grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20 gap-16">
      {/* <Header /> */}
      <main className="flex flex-col gap-16 items-center justify-center w-full">
        <AppleStyleDock />
        <section className="flex flex-col gap-4 items-center">
          
         
          <TextShimmerColor />
        </section>
      </main>
      <footer className="flex gap-6 flex-wrap items-center justify-center">
        {/* Your footer content here */}
      </footer>
    </div>
  );
}