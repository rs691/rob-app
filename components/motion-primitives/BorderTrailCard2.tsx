
import { BorderTrail } from '@/components/motion-primitives/border-trail';


// Modify the component to accept a 'color' prop
interface BorderTrailCard1Props {
  color: string;
}

export function BorderTrailCard2({ color }: BorderTrailCard1Props) {
  const boxShadowStyle = {
    boxShadow: `0px 0px 60px 30px ${color}, 0 0 100px 60px ${color}, 0 0 140px 90px ${color}`,
  };

  return (
    <div className='relative flex h-[200px] w-[300px] flex-col items-center justify-center rounded-md bg-zinc-200 px-5 py-2 dark:bg-zinc-800'>
      <BorderTrail style={boxShadowStyle} size={100} />
      {/* ... other content */}
    </div>
  );
}