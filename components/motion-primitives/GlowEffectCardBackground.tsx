import { GlowEffect } from '@/components/motion-primitives/glow-effect';

export function GlowEffectCardBackground() {
  return (
    <div className='relative h-44 w-64'>
      <GlowEffect
        // colors={['#0894FF', '#C959DD', '#FF2E54', '#FF9004']}
        colors={['#03A791', '#81E7AF', '#E9F5BE', '#F1BA88']}
        mode='static'
        blur='strong'
      />
      <div className='relative h-44 w-64 rounded-lg bg-black p-2 text-white dark:bg-white dark:text-black'>
        <h2 className='text-lg font-bold'>Glow Effect Card</h2>
        <p className='text-sm'>This is a card with a glow effect background.</p>
      </div>
    </div>
  );
}
