import Link from 'next/link';
import Image from 'next/image';

import { siteConfig } from '@/config/site';
import { FacebookIcon, InstagramIcon } from 'lucide-react';

export function SiteFooter() {
  return (
    <footer className="bg-[#252525] flex flex-col px-24 py-12">
      <div className="flex flex-col text-center px-[100px] text-white">
        <div className="flex flex-row items-center justify-around mb-12">
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
          <div className="flex flex-col mt-6">
            <h2 className="text-[28px] font-[300]">Socials</h2>
            <div className="flex flex-row text-white">
              <Link
                href="https://www.instagram.com/shocoffeebar/"
                target="_blank"
              >
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
              </Link>
              <Link
                href="https://www.facebook.com/profile.php?id=61554805807107"
                target="_blank"
              >
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
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between items-center mb-12">
          <Link
            href="/privacy-policy"
            className="text-white hover:text-[#888888] underline-hover text-[18px] font-[400]"
          >
            Privacy Notice
          </Link>
          <Link
            href="/privacy-policy"
            className="text-white text-[18px] font-[400] underline-hover hover:text-[#888888] "
          >
            Terms of Service
          </Link>
          <Link
            href="/privacy-policy"
            className="text-white underline-hover text-[18px] hover:text-[#888888] font-[400]"
          >
            Trademarks
          </Link>
          <div className="flex flex-row gap-x-2">
            <div className="bg-[#252525] flex items-center justify-center p-3 text-xl hover:bg-white group transition-all duration-300 ease-in">
              <span className="font-bold text-white group-hover:text-black transition-all duration-500  mr-4 group-hover:mr-2">
                Designed
              </span>
              <span className="font-bold text-gray-400 group-hover:text-black transition-all duration-500  mr-4 group-hover:mr-2">
                By
              </span>
              <span className="font-thin text-gray-500">Serhii Pashchenko</span>
            </div>
            <div className="bg-[#252525] flex items-center justify-center p-3 text-xl hover:bg-white group transition-all duration-300 ease-in">
              <span className="font-bold text-white group-hover:text-black transition-all duration-500  mr-4 group-hover:mr-2">
                Developed
              </span>
              <span className="font-bold text-gray-400 group-hover:text-black transition-all duration-500  mr-4 group-hover:mr-2">
                By
              </span>
              <span className="font-thin text-gray-500">Logan Olson</span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center text-white font-medium text-lg">
          <h1>&#169; 2024 Sho Coffee & Bar</h1>
        </div>
      </div>
    </footer>
  );
}
