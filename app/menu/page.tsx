'use client';

import { ImageSlider } from '@/components/image-slider';
import Link from 'next/link';

export default function Menu() {
  return (
    <main className="flex flex-col bg-black text-white">
      <div className="flex flex-col relative">
        <div className="z-10">
          <img
            src="/beans.png"
            alt="Sho Coffee & Bar"
            className="z-10 h-[550px] w-full md:w-[548px] absolute top-0 -left-40 md:-left-20"
          />
        </div>
        <div className="relative flex flex-col ml-2 my-48 md:p-40 z-20 ">
          <h2 className="text-[28px] md:text-[48px] p-2 font-[500]">
            SORRY MENU ISN&apos;T READY YET
          </h2>
          <p className="text-[18px] md:text-[28px] p-2 font-[300]">
            We&apos;re diligently crafting our menu to bring you an exceptional
            dining experience.
          </p>
          <p className="text-[18px] md:text-[28px] p-2 font-[300]">
            Follow us on socials to stay tuned!
          </p>
        </div>
      </div>
    </main>
  );
}
