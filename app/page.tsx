import { AppleStyleDock } from "@/components/motion-primitives/AppleStyleDock";





import { MorphingDialogBasicOne } from "@/components/motion-primitives/MorphingDialogBasicOne";









export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-4 pb-10 sm:p-20 gap-10">
        <h1 className="font-black flex gap-y-0 items-center text-5xl md:text-6xl lg:text-7xl xl:text-8xl uppercase [letter-spacing:-.05em] flex-wrap justify-center leading-none"><span>Robert</span><span className="pr-1 inline-block text-transparent bg-clip-text bg-linear-to-r from-red-500 to-amber-500 relative">Stewart</span></h1>
      <h2 className="font-bold text-2xl md:text-4xl max-w-xl xl:max-w-4xl text-balance [letter-spacing:-0.03em]">Take a minute to explore my work and get in touch!</h2>
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-500 via-amber-500 to-yellow-500 animate-gradient-x">

<h1 className="sr-only">Robert Stewart</h1>
      </div>
  
      <div className="apple-dock">
        <AppleStyleDock />
      </div>
      <main className="flex flex-col gap-16 items-center justify-center w-full">
        {/* Add slight glow when its hovered */}

        <section className="flex flex-col gap-4 items-center">
         
        
      
  
      
          <div className="p-4">
            
            {/* <CarouselBasic /> */}
          </div>

        </section>

        <section>
          <MorphingDialogBasicOne />
        
        </section>
        {/* <SpotlightCustomColor /> */}
      </main>

      <footer className="flex gap-6 flex-wrap items-center justify-center">
        {/* Your footer content here */}
        {/* <GlowEffectButton /> */}



      </footer>
     
    </div>
  );
}