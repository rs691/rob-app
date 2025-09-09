"use client"

import { BorderTrail } from '@/components/motion-primitives/border-trail';

import { TextRoll } from '@/components/motion-primitives/text-roll';
import { TextScramble } from '@/components/motion-primitives/text-scramble';








export default function AboutPage() {
  return (
    <>
    <div className='flex items-center justify-center p-48'>
      {/* Big Card - takes up 40% of the screen width */}
      <div className='relative flex h-[400px] w-2/5 flex-col items-center justify-center rounded-md bg-zinc-200 px-5 py-2 dark:bg-zinc-800'>
        <BorderTrail
          style={{
                boxShadow:
                  '0px 0px 60px 30px rgb(255 255 255 / 50%), 0 0 100px 60px rgb(0 0 0 / 50%), 0 0 140px 90px rgb(0 0 0 / 50%)',
              }}
              size={100}
            />
            <div
              className='flex h-full animate-pulse flex-col items-start justify-center space-y-2'
              role='status'
              aria-label='Loading...'
            >
            </div>
          </div>
          
          {/* Big Text - takes up the remaining space */}
          <div className='flex-1 p-8 text-center'>
            <h1 className='text-6xl font-bold'>
              My Big and Important Title
            </h1>
            <p className='mt-4 text-xl'>
              This is some large text to complement the card next to it.
            </p>
              <TextScramble className='font-mono text-4xl uppercase'>
                  Text Scramble
                </TextScramble>
                <TextRoll className='text-6xl text-black dark:text-white'>
     Hello, My name is Rob
    </TextRoll>
          </div>
        </div>
    </>
  );
}