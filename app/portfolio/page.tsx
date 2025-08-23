'use client';


import { CarouselBasic } from '@/components/motion-primitives/carouselBasic';


export default function PortfolioPage() {
    return (
        <div>
            <h1>My Portfolio</h1>
            <p>Welcome to my portfolio page!</p>
         
            <div className="p-48">
             <CarouselBasic />
            </div>
        </div>
    );
}