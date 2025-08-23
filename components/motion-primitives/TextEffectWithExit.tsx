'use client';
import { TextEffect } from '@/components/motion-primitives/text-effect';
import { useEffect, useState } from 'react';

export function TextEffectWithExit() {
  const [trigger, setTrigger] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setTrigger((prev) => !prev);
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  const blurSlideVariants = {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.01 },
      },
      exit: {
        transition: { staggerChildren: 0.01, staggerDirection: 1 },
      },
    },
    item: {
      hidden: {
        opacity: 0,
        filter: 'blur(10px) brightness(0%)',
        y: 0,
      },
      visible: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px) brightness(100%)',
        transition: {
          duration: 0.4,
        },
      },
      exit: {
        opacity: 0,
        y: -30,
        filter: 'blur(10px) brightness(0%)',
        transition: {
          duration: 0.4,
        },
      },
    },
  };

  return (
    <>
    <TextEffect
      className='inline-flex text-6xl'
      per='char'
      variants={blurSlideVariants}
      trigger={trigger}
    >
     Hello, My name is Robert Stewart

    </TextEffect>
        <TextEffect
      className='inline-flex text-6xl'
      per='char'
      variants={blurSlideVariants}
      trigger={trigger}
    >
    and I am a Full-Stack Developer.

    </TextEffect>


    </>
  );
}
