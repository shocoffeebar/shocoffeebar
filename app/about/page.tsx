import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <main className="flex min-h-screen flex-col bg-black text-white">
      <div className="flex flex-col relative w-[100vw] h-[100vh]">
        <div className="z-10">
          <Image
            src="/white-cup-black-lid-white-bg-front-wide.jpg"
            alt="Sho Coffee & Bar"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <div className="relative flex flex-col items-start z-20 my-auto ml-24">
          <h1 className="text-[48px] text-shadow text-black font-[500]">
            SHO ISN&apos;T JUST COFFEE
          </h1>
        </div>
      </div>
      <div className="flex flex-col px-24 pt-4 pb-12">
        <h2 className="text-[36px] p-2 font-[500]">What is SHO?</h2>
        <p className="text-[20px] p-2 font-[300]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
          mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
          mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
          tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non
          suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at
          maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales
          sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat
          placerat. In iaculis arcu eros, eget tempus orci facilisis id.
        </p>
        <h2 className="text-[36px] p-2 font-[500]">About the team</h2>
        <p className="text-[20px] p-2 font-[300]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
          mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
          mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
          tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non
          suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at
          maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales
          sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat
          placerat. In iaculis arcu eros, eget tempus orci facilisis id.
        </p>
      </div>
      <div className="grid grid-cols-6 bg-white text-black items-center px-64 py-24">
        <h1 className="col-span-6 text-center text-[36px] font-[500]">Team</h1>
        <div className="col-span-2 flex justify-start">
          <Image
            src="/cup-of-beans.png"
            alt="John Doe"
            width={315}
            height={449}
          />
        </div>
        <div className="col-span-2 flex justify-center">
          <h2 className="text-[36px] font-[500]">Hryhorii Alieksanov</h2>
        </div>
        <div className="col-span-2 flex justify-center">
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
        <div className="col-span-2 flex justify-start">
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
        <div className="col-span-2 flex justify-center">
          <h2 className="text-[36px] font-[500]">Denys</h2>
        </div>
        <div className="col-span-2 flex justify-center">
          <Image
            src="/cup-of-beans.png"
            alt="John Doe"
            width={315}
            height={449}
          />
        </div>
        <div className="col-span-2 flex justify-start">
          <Image
            src="/cup-of-beans.png"
            alt="John Doe"
            width={315}
            height={449}
          />
        </div>
        <div className="col-span-2 flex justify-center">
          <h2 className="text-[36px] font-[500]">Serhii Pashchenko</h2>
        </div>
        <div className="col-span-2 flex justify-center">
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
        <div className="col-span-2 flex justify-start">
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
        <div className="col-span-2 flex justify-center">
          <h2 className="text-[36px] font-[500]">Max</h2>
        </div>
        <div className="col-span-2 flex justify-center">
          <Image
            src="/cup-of-beans.png"
            alt="John Doe"
            width={315}
            height={449}
          />
        </div>
      </div>
    </main>
  );
}
