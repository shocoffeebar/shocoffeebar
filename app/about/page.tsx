/* eslint-disable @next/next/no-img-element */
'use client';

import Image from 'next/image';

export default function About() {
  return (
    <main className="flex min-h-screen flex-col bg-black text-white">
      <div className="flex flex-col relative w-[100vw] h-[600px] max-w-full">
        <div className="z-10 md:flex hidden">
          <Image
            src="/about-hero.png"
            alt="Sho Coffee & Bar"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <div className="z-10 md:hidden flex">
          <Image
            src="/mobile-about-hero.png"
            alt="Sho Coffee & Bar"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            priority={true}
          />
        </div>
        <div className="relative flex flex-col items-start z-20 md:my-auto md:ml-32 mt-32">
          <h1 className="text-[28px] md:text-[48px] text-shadow text-black font-[500] md:mx-0 ml-6">
            SHO ISN&apos;T JUST COFFEE
          </h1>
        </div>
      </div>
      <div className="flex flex-col md:px-24 px-4 md:py-16 py-8">
        <h2 className="text-[20px] md:text-[36px] p-2 font-[500]">
          What is SHO?
        </h2>
        <p className="text-[16px] md:text-[20px] p-2 font-[300]">
          We live and work in a rapidly changing world, a world in which
          survival in our industry must be taken for granted. We must be
          innovative, educated and advocate. We dedicate our efforts to increase
          focusing on the coffee, this hospitality company plans to build
          communities through the creation of one-of-a-kind guest experiences
          across coffee & desserts , nightlife & mixology , and tapas-Italian &
          European food concepts. SHO that is place that people not only want to
          frequent but are willing to make an effort to go there, both in terms
          of travel and in terms of getting dressed to make themselves feel good
          and create a clear delineation between normalcy and something that
          makes you feel pampered and special. From the moment you set foot on
          the our place, our goal is to deliver on that sensation. <br /> <br />{' '}
          SHO Coffee & Bar transcends the ordinary coffee shop experience. It is
          a culmination of our team`&apos;`s worldwide experience in a spectrum
          of venues, from upscale to establishments recognized by Michelin.
          Visitors will be treated to more than just coffee, they will immerse
          in a realm of emotions and ambiance, enhanced by advanced production
          techniques, utilizing unique tools and expertise not yet witnessed in
          Winnipeg. <br />
          <br /> We aim not merely to reach a certain level of excellence but to
          share our knowledge with those keen on exploring the realms of coffee,
          mixology, and the art of Italian-Neapolitan signature dishes presented
          in the style of Spanish tapas. Therefore, the operating principle will
          be divided into Morning-Coffee, Evening-Mixology. The morning will
          feature an atmosphere conducive to long hours of reading, with
          comfortable seating and soothing background music. The evening will
          transition to appropriate musical accompaniment, an interior color
          palette, and interesting, atypical cocktails and food pairings. <br />
          <br /> Our personal and primary goal as a company is not to be like
          everyone else. We want to show that anyone who is dedicated to their
          craft, works diligently, and strives for improvement while meeting the
          desires of our guests will undoubtedly succeed. Because wherever there
          is love for what you do, there will always be results. And we believe
          in that. <br />
          <br /> And finally, we extend our warmest wishes and invite all guests
          to experience SHO Coffee & Bar with us. Thank you
        </p>
      </div>
    </main>
  );
}
