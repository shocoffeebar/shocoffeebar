'use client';

import { ImageSlider } from '@/components/image-slider';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black text-white">
      <div className="flex flex-col relative w-[100vw] h-[100vh]">
        <div className="z-10">
          <Image
            src="/logo-coffee-wide.jpg"
            alt="Sho Coffee & Bar"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <div className="relative flex flex-col items-start z-20 my-auto ml-24">
          <h1 className="text-[48px] text-shadow">SHO COFFEE & BAR</h1>
          <p className="text-[36px] text-shadow">
            Is the first place in Winnipeg with European-quality coffee.
          </p>
        </div>
      </div>
      <div className="flex flex-col px-24 py-12 tracking-wide">
        <div className="flex flex-col">
          <h2 className="text-[36px] font-[500] p-2">Briefly about Sho</h2>
          <p className="text-[28px] font-[300] leading-[40px] p-2">
            At our core, we prioritize understanding our clients needs above all
            else. That&apos;s why we&apos;ve woven the essence of inquiry into
            our brand. You might be curious about the significance of
            &quot;Sho&quot; in our name. If you guessed it represents the
            question &quot;what,&quot; you&apos;re absolutely correct! In our
            logo, &quot;Sho&quot; embodies that sense of wonder. Now, you might
            be wondering about the language behind our playful puzzle. Simply
            put, &quot;Sho?&quot; is a friendly nod to Ukrainian slang for
            &quot;
            <span className="text-[#E4664F]">what</span>&quot; (translated as
            &quot;Шо&quot;). So, <span className="text-[#E4664F]">sho</span>{' '}
            will it be today? A comforting latte or a frothy cappuccino?
          </p>
        </div>
      </div>
      <div className="flex flex-row bg-white relative h-[50vh] shadow-xl">
        <div className="z-10">
          <Image
            src="/white-clean-coffee - LS.jpg"
            alt="white-clean-coffee"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <div className="relative z-20 ml-64 my-auto">
          <img
            src="/logo-full-black.svg"
            alt="coffee-cup"
            className="w-[389px] h-[166px]"
          />
        </div>
      </div>
      <div className="flex flex-col text-black bg-white px-24 py-12 tracking-wide">
        <h2 className="text-[36px] p-2 font-[500]">Is it opened?</h2>
        <p className="text-[32px] p-2 font-[300]">
          Not yet. So get ready, coffee lovers! Our coffee shop will be opening
          its doors in Spring 2024!
        </p>
        <p className="text-[32px] p-2 font-[300]">
          Also exiciting news! Our bar will also be joining the lineup soon.
          Stay tuned for updates!
        </p>
        <p className="text-[32px] p-2 font-[300]">
          Follow us on socials to stay tuned!
        </p>
      </div>
      <div className="flex flex-col py-[100px] px-[100px] bg-white text-black">
        <h1 className="text-[36px] font-[500]">You will find us here</h1>
        <iframe
          style={{
            filter: 'grayscale(100%) invert(92%) contrast(83%)',
          }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2569.973073252939!2d-97.14240025788158!3d49.89930884451402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52ea717a0e0d24d5%3A0x1c0a921721de853b!2sSho%20coffee%20%26%20bar!5e0!3m2!1sen!2sca!4v1705862440247!5m2!1sen!2sca"
          width="100%"
          height="400"
          aria-hidden="false"
          loading="lazy"
          className=""
        ></iframe>
      </div>
    </main>
  );
}
