'use client';

import Image from 'next/image';
import { useState, MouseEvent } from 'react';

export default function Home() {
  const [translate, setTranslate] = useState(0);
  let [screenWidth, setScreenWidth] = useState(0);
  let [imgWidth, setImgWidth] = useState(0);
  // console.log('started')
  
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    initValues();
    if (screenWidth > imgWidth) return;
    
    const mouseFromCenter = e.clientX - screenWidth / 2
    
    if (mouseCloserThanDecimalPercents(0.3)) {
      return toCenter();
    }

    let newTranslate = (screenWidth - imgWidth) / 2;
    if (mouseFromCenter < 0) newTranslate *= -1;
    
    if (newTranslate !== translate) {
      console.log('setTranslate(translate);')
      setTranslate(newTranslate);
    }

    function initValues() {
      if (!screenWidth) {
        setScreenWidth(e.currentTarget.offsetWidth);
        screenWidth = e.currentTarget.offsetWidth;
      }
      if (!imgWidth) {
        setImgWidth(e.currentTarget.children[0].scrollWidth);
        imgWidth = e.currentTarget.children[0].scrollWidth;
      }
      
    }

    function mouseCloserThanDecimalPercents(percents: number) {
      return Math.abs(mouseFromCenter) < screenWidth / 2 * percents;
    }

    function toCenter() {
      if (!translate) return;
      console.log('setTranslate(0);')
      return setTranslate(0);
    }
  }

  const handleMouseLeave = () => {
    setTranslate(0);
  }

  return (
    <main className="flex min-h-screen flex-col bg-black text-white">
      <div className="flex flex-col items-center relative md:h-[600px] 2xl:h-[900px] w-[100vw] max-w-full overflow-hidden" 
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}>
        <div className="md:block hidden relative h-full aspect-[2880/900] transition-transform duration-1000 ease-[linear(0 0%, 0 1.8%, 0.01 3.6%, 0.03 6.35%, 0.07 9.1%, 0.13 11.4%, 0.19 13.4%, 0.27 15%, 0.34 16.1%, 0.54 18.35%, 0.66 20.6%, 0.72 22.4%, 0.77 24.6%, 0.81 27.3%, 0.85 30.4%, 0.88 35.1%, 0.92 40.6%, 0.94 47.2%, 0.96 55%, 0.98 64%, 0.99 74.4%, 1 86.4%, 1 100%)]"
          style={{
            transform: `translateX(${translate}px)`,
          }}
        >
          <Image
            src="/home-hero.png"
            alt="Sho Coffee & Bar"
            className="object-cover object-center w-full h-auto"
            sizes="100vw"
            fill
            priority
          />
        </div>
        <div className="z-10 md:hidden block relative">
          <Image
            src="/mobile-home-hero.png"
            alt="Sho Coffee & Bar"
            className="object-cover object-center w-full h-auto"
            sizes="100vw"
            fill
            priority={true}
          />
        </div>
        <div className="flex flex-col items-start z-20 md:my-auto md:ml-32 mt-32 ml-6  absolute left-0 inset-y-0 top-2 justify-center">
          <h1 className="text-[28px] md:text-[48px] font-[500] text-shadow mb-2">
            SHO COFFEE & BAR
          </h1>
          <p className="text-[18px] md:text-[36px] text-shadow font-[500] md:leading-0 leading-8">
            Is the first place in Winnipeg with European-quality coffee.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:px-24 px-4 md:py-12 tracking-wide">
        <div className="flex flex-col py-8">
          <h2 className="text-[20px] md:text-[42px] font-[500] p-2">
            Briefly about Sho
          </h2>
          <p className="text-[16px] md:text-[28px] font-[300] md:leading-[40px] p-2">
          Introducing SHO Coffee & Bar, where every sip and bite is an invitation to a world of unparalleled experiences. At the heart of our philosophy lies an unwavering commitment to understanding our guests&apos; desires. We blend innovation with expertise to craft one-of-a-kind encounters, spanning from the aroma of freshly brewed coffee to the allure of European tapas. SHO transcends the ordinary, drawing inspiration from diverse global influences, from upscale venues to renowned establishments.
          </p>
        </div>
      </div>
      <div className="bg-white shadow-xl md:flex hidden">
        <Image
          src="/white-clean-coffee.jpg"
          alt="white-clean-coffee"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%' }}
        />
      </div>
      <div className="flex-row bg-white shadow-xl md:hidden flex">
        <Image
          src="/white-clean-coffee.jpg"
          alt="white-clean-coffee"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%' }}
        />
      </div>
      <div className="flex flex-col py-12 md:px-[100px] bg-white text-black">
        <h1 className="text-[20px] md:text-[36px] px-6 p-2 md:p-0 font-[500] md:pb-6">
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
