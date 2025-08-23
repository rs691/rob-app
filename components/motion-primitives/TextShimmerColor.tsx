import { TextShimmer } from '@/components/motion-primitives/text-shimmer';

export function TextShimmerColor() {
  return (
    <>
    {/* Stack texts*/}
    <div className="grid grid-cols-1 gap-2">
    <TextShimmer
      duration={1.2}
      // set the base color to #4D2D8C

      className='text-7xl font-medium [--base-color:var(--color-yellow-500)] [--base-gradient-color:var(--color-blue-200)] dark:[--base-color:var(--color-blue-700)] dark:[--base-gradient-color:var(--color-blue-400)]'
    >
    Robert Stewart
    </TextShimmer>
        <TextShimmer
      duration={1.2}
      className='text-4xl font-medium [--base-color:var(--color-yellow-500)] [--base-gradient-color:var(--color-blue-200)] dark:[--base-color:var(--color-blue-700)] dark:[--base-gradient-color:var(--color-blue-400)]'
    >
    Software Developer
    </TextShimmer>
    </div>
    </>
  );
} 
