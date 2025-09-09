'use client';
import { AnimatedGroup } from '@/components/motion-primitives/animated-group';

export function AnimatedGroupCustomVariants2() {
  return (
    <AnimatedGroup
      className='grid h-full grid-cols-2 gap-8 p-12 md:grid-cols-2 lg:grid-cols-2'
      variants={{
        container: {
          visible: {
            transition: {
              staggerChildren: 0.05,
            },
          },
        },
        item: {
          hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: -60,
            rotateX: 90,
          },
          visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            rotateX: 0,
            transition: {
              type: 'spring',
              bounce: 0.3,
              duration: 1,
            },
          },
        },
      }}
    >
     <div key={1}>
        <img
          src='/rob-app/darkIwcc.png'
          alt='IWCC logo'
          className='h-auto w-full'
        />
      </div>
      <div key={2}>
        <img
          src='/rob-app/bruinBear2.png'
          alt='Bruin Bear logo'
          className='h-auto w-full'
        />
      </div>
     
    </AnimatedGroup>
  );
}
