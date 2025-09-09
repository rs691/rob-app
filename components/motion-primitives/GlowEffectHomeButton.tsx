'use client';
import { GlowEffect } from '@/components/motion-primitives/glow-effect';
import { ArrowLeft } from 'lucide-react';



export function GlowEffectHomeButton() {
  return (
    <div className='relative'>
      <GlowEffect
        colors={['#FF5733', '#33FF57', '#3357FF', '#F1C40F']}
        mode='colorShift'
        blur='soft'
        duration={3}
        scale={0.9}
      />
      
      <button className='relative inline-flex items-center gap-1 rounded-md bg-zinc-950 px-2.5 py-1.5 text-sm text-zinc-50 outline outline-[#fff2f21f]'>
       <ArrowLeft className='h-4 w-4' />   Home
      </button>
    </div>
  );
}