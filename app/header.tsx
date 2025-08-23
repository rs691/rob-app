'use client'
import { TextShimmerColor } from '@/components/motion-primitives/TextShimmerColor'
import Link from 'next/link'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div>
        <Link href="/profile" className="font-medium text-black dark:text-white text-4xl">
           <TextShimmerColor />
        </Link>
      </div>
    </header>
  )
}
