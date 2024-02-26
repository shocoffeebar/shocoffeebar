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
      <div className="flex flex-col px-24 py-4">
        <h2 className="text-[36px] p-2 font-[500]">Is it opened?</h2>
        <p className="text-[28px] p-2 font-[300]">
          Not yet. So get ready, coffee lovers! Our coffee shop will be opening
          its doors in Spring 2024!
        </p>
        <p className="text-[28px] p-2 font-[300]">
          Also exiciting news! Our bar will also be joining the lineup soon.
          Stay tuned for updates!
        </p>
        <p className="text-[28px] p-2 font-[300]">
          Follow us on socials to stay tuned!
        </p>
        <div className="flex flex-row py-2 gap-x-6 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="50px"
            width="50px"
            fill="#ffffff"
            viewBox="0 0 448 512"
            className="rounded-full p-2 bg-[#252525] hover:bg-[#888888] transition-all duration-200 ease-in cursor-pointer icon"
          >
            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="50px"
            width="50px"
            fill="#ffffff"
            viewBox="0 0 448 512"
            className="rounded-full p-2 bg-[#252525] hover:bg-[#888888] transition-all duration-200 ease-in cursor-pointer icon"
          >
            <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
          </svg>
        </div>
        <div className="flex flex-col">
          <h2 className="text-[36px] font-[500] p-2">Briefly about Sho</h2>
          <p className="text-[20px] font-[300] leading-[28px] p-2">
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
          <img src="/blueprints.png" alt="blueprints" className="w-full" />
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
      <div className="flex flex-col text-center py-[100px] px-[100px] bg-white text-black gap-y-[60px]">
        <div className="flex flex-row items-center justify-around">
          <div className="flex-col flex">
            <h2 className="text-[28px] font-[300]">Contact</h2>
            <Link
              href="mailto:info@shocoffeebar.com"
              className="text-[20px] font-[300] underline-hover hover:text-[#888888] cursor-pointer"
            >
              info@shocoffeebar.com
            </Link>
          </div>
          <div className="flex-col">
            <h2 className="text-[28px] font-[300]">Address</h2>
            <Link
              href="https://www.google.com/maps/place/Sho+coffee+%26+bar/@49.899342,-97.140843,16z/data=!4m6!3m5!1s0x52ea717a0e0d24d5:0x1c0a921721de853b!8m2!3d49.8993419!4d-97.140843!16s%2Fg%2F11vl49blv3?hl=en&entry=ttu"
              target="_blank"
              className="text-[20px] font-[300] underline-hover hover:text-[#888888] cursor-pointer"
            >
              290 William Ave, Winnipeg, MB
            </Link>
          </div>
          <div className="flex-col">
            <h2 className="text-[28px] font-[300]">Socials</h2>
            <div className="flex flex-row py-2 gap-x-6 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="50px"
                width="50px"
                fill="#ffffff"
                viewBox="0 0 448 512"
                className="rounded-full p-2 bg-[#252525] hover:bg-[#888888] transition-all duration-200 ease-in cursor-pointer icon"
              >
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="50px"
                width="50px"
                fill="#ffffff"
                viewBox="0 0 448 512"
                className="rounded-full p-2 bg-[#252525] hover:bg-[#888888] transition-all duration-200 ease-in cursor-pointer icon"
              >
                <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
              </svg>
            </div>
          </div>
        </div>
        <iframe
          style={{
            filter: 'grayscale(100%) invert(92%) contrast(83%)',
          }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2569.973073252939!2d-97.14240025788158!3d49.89930884451402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52ea717a0e0d24d5%3A0x1c0a921721de853b!2sSho%20coffee%20%26%20bar!5e0!3m2!1sen!2sca!4v1705862440247!5m2!1sen!2sca"
          width="100%"
          height="350"
          aria-hidden="false"
          loading="lazy"
          className=""
        ></iframe>
      </div>
    </main>
  );
}
