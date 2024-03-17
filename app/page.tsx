'use client';

import { ImageSlider } from '@/components/image-slider';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black text-white">
      <div className="flex flex-col relative w-[100vw]  h-[600px]">
        <div className="z-10 md:block hidden">
          <Image
            src="/home-hero.png"
            alt="Sho Coffee & Bar"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <div className="z-10 md:hidden block">
          <Image
            src="/coffee.png"
            alt="Sho Coffee & Bar"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <div className="relative flex flex-col items-start z-20 md:my-auto md:ml-32 mt-32 ml-6">
          <h1 className="text-[28px] md:text-[48px] font-[500] text-shadow mb-2">
            SHO COFFEE & BAR
          </h1>
          <p className="text-[18px] md:text-[36px] text-shadow font-[500] md:leading-0 leading-8">
            Is the first place in Winnipeg with European-quality coffee.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:px-24 md:py-12 tracking-wide">
        <div className="flex flex-col py-8">
          <h2 className="text-[20px] md:text-[42px] font-[500] p-2">
            Briefly about Sho
          </h2>
          <p className="text-[16px] md:text-[28px] font-[300] md:leading-[40px] p-2">
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
      <div className="flex-row bg-white shadow-xl md:flex hidden">
        <Image
          src="/white-clean-coffee.jpg"
          alt="white-clean-coffee"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: '600px' }}
        />
      </div>
      <div className="flex-row bg-white shadow-xl md:hidden flex">
        <Image
          src="/white-clean-coffee.jpg"
          alt="white-clean-coffee"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: '150px' }}
        />
      </div>
      <div className="flex flex-col text-black bg-white md:px-24 md:py-16 leading-[36px] md:tracking-wide p-2 md:p-0">
        <h2 className="text-[20px] md:text-[36px] md:p-2 font-[500]">
          Is it opened?
        </h2>
        <p className="text-[18px] md:text-[32px] md:p-2 font-[300]">
          Not yet. So get ready, coffee lovers! Our coffee shop will be opening
          its doors in Spring 2024!
        </p>
        <p className="text-[18px] md:text-[32px] md:p-2 font-[300]">
          Also exiciting news! Our bar will also be joining the lineup soon.
          Stay tuned for updates!
        </p>
        <p className="text-[18px] md:text-[32px] md:p-2 font-[300]">
          Follow us on socials to stay tuned!
        </p>
      </div>
      <div className="flex flex-col pb-12 md:px-[100px] bg-white text-black">
        <h1 className="text-[20px] md:text-[36px] p-2 md:p-0 font-[500] md:pb-6">
          You will find us here
        </h1>
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
