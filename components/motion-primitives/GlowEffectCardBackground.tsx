import { GlowEffect } from '@/components/motion-primitives/glow-effect';

export function GlowEffectCardBackground() {
  return (
    <div className='relative h-48 w-96'>
      <GlowEffect
        colors={['#E62727', '#FB3235', '#FF8040', '#FFE100']}
        mode='static'
        blur='strong'
      />
      <div className='relative h-48 w-96 rounded-lg bg-black p-2 text-white dark:bg-zinc-800 dark:text-white'>
        <h1 className="font-bold text-2xl md:text-4xl max-w-xl xl:max-w-4xl text-balance [letter-spacing:-0.03em]">This is a card with a glow effect background.</h1>

      </div>
    </div>
  );
}
