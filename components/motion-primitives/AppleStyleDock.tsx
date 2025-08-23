import {
  BookText,
  HomeIcon,
  Mail,
  Pickaxe,
  SunMoon,
  User
} from 'lucide-react';
import Link from 'next/link';

import { Dock, DockIcon, DockItem, DockLabel } from '@/components/motion-primitives/dock';

const data = [
  {
    title: 'Home',
    icon: (
      <HomeIcon className='h-full w-full text-neutral-600 dark:text-neutral-300' />
    ),
    href: '/',
  },
  {
    title: 'About',
    icon: (
      <User className='h-full w-full text-neutral-600 dark:text-neutral-300' />
    ),
    href: '/about',
  },
  {
    title: 'Projects',
    icon: (
      <Pickaxe className='h-full w-full text-neutral-600 dark:text-neutral-300' />
    ),
    href: '/projects',
  },
  {
    title: 'Tutoring',
    icon: (
      <BookText className='h-full w-full text-neutral-600 dark:text-neutral-300' />
    ),
    href: '/tutoring',
  },
  {
    title: 'Email',
    icon: (
      <Mail className='h-full w-full text-neutral-600 dark:text-neutral-300' />
    ),
    href: '/email',
  },
  {
    title: 'Portfolio',
    icon: (
      <SunMoon className='h-full w-full text-neutral-600 dark:text-neutral-300' />
    ),
    href: '/portfolio',
  },
];

export function AppleStyleDock() {
  return (
    <div className='absolute bottom-2 left-1/2 max-w-full -translate-x-1/2'>
      <Dock className='items-end pb-3'>
        {data.map((item, idx) => (
          <Link key={idx} href={item.href}>
            <DockItem
              className='aspect-square rounded-full bg-gray-200 dark:bg-neutral-800'
            >
              <DockLabel>{item.title}</DockLabel>
              <DockIcon>{item.icon}</DockIcon>
            </DockItem>
          </Link>
        ))}
      </Dock>
    </div>
  );
}