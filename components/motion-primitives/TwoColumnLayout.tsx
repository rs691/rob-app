import { BorderTrail } from '@/components/motion-primitives/border-trail';

export function TwoColumnLayout() {
  return (
    // Main container with flexbox for a side-by-side layout
    <div className='flex items-center justify-center p-8'>
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
          className='flex h-full animate-pulse flex-col items-start justify-center space-0 min-w-2xl'
          role='status'
          aria-label='Loading...'
        >
        </div>
      </div>
      
      {/* Big Text - takes up the remaining space */}
      <div className='flex-1 text-center'>
        <h1 className='text-7xl font-bold overflow-hidden text-transparent bg-clip-text bg-linear-to-r from-red-500 to-amber-500 relative'>
          Robert Stewart
        </h1>
        <p className='mt-4 p-8 text-2xl'>
          This is some large text to complement the card next to it.
        </p>
      </div>
    </div>
  );
}