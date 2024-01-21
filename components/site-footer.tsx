import Link from 'next/link';
import Image from 'next/image';

import { siteConfig } from '@/config/site';
import { FacebookIcon, InstagramIcon } from 'lucide-react';

export function SiteFooter() {
  return (
    <footer className="bg-[#252525] flex flex-col px-16 pt-4 pb-12">
      <Image src={'/logo.png'} alt={siteConfig.name} width={200} height={50} />
      <div className="flex flex-col gap-y-16">
        <div className="flex flex-row text-white justify-around mx-12">
          <div className="flex flex-col items-center gap-y-4">
            <h1 className="font-medium text-[20px]">CONTACTS</h1>
            <Link
              href="mailto:info@shocoffeebar.com"
              className="hover:underline hover:text-gray-400 transition-all duration-300 ease-in text-[18px] cursor-pointer"
            >
              info@shocoffeebar.com
            </Link>
            <p className="hover:underline hover:text-gray-400 transition-all duration-300 ease-in text-[18px] cursor-pointer">
              +1 431 2777 777
            </p>
          </div>
          <div className="flex flex-col items-center gap-y-4">
            <h1 className="font-medium text-[20px]">LOCATION</h1>
            <Link
              href="https://maps.app.goo.gl/AY7GfMG1UZ1PfoBo9"
              target="_blank"
              className="hover:underline hover:text-gray-400 transition-all duration-300 ease-in text-[18px] cursor-pointer"
            >
              <p>290 William Ave</p>
              <p className="text-center">Winnipeg</p>
            </Link>
          </div>
          <div className="flex flex-col items-center gap-y-4">
            <h1 className="font-medium text-[20px]">SOCIALS</h1>
            <div className="flex flex-row">
              <Link
                href="https://www.facebook.com/profile.php?id=61550963107645"
                target="_blank"
                className="rounded-full hover:bg-[#888888] hover:text-[#252525] transition-all duration-300 ease-in p-4"
              >
                <FacebookIcon className="h-8 w-8" />
              </Link>

              <Link
                href="https://www.facebook.com/profile.php?id=61550963107645"
                target="_blank"
                className="rounded-full hover:bg-[#888888] hover:text-[#252525] transition-all duration-300 ease-in p-4"
              >
                <InstagramIcon className="h-8 w-8" />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-row text-white justify-around mx-64">
          <Link
            href="/"
            target="_blank"
            className="hover:underline hover:text-gray-400 transition-all duration-300 ease-in text-[18px] cursor-pointer"
          >
            Privacy Policy
          </Link>
          <Link
            href="/"
            target="_blank"
            className="hover:underline hover:text-gray-400 transition-all duration-300 ease-in text-[18px] cursor-pointer"
          >
            Terms Of Service
          </Link>
          <Link
            href="/"
            target="_blank"
            className="hover:underline hover:text-gray-400 transition-all duration-300 ease-in text-[18px] cursor-pointer"
          >
            Trademarks
          </Link>
        </div>
        <div className="flex flex-row justify-between">
          <div className="flex items-center text-white font-medium text-lg">
            <h1>&#169; Sho Coffee & Bar</h1>
          </div>
          <div className="flex flex-row gap-x-2">
            <div className="bg-[#252525] flex items-center justify-center p-3 text-xl hover:bg-white group transition-all duration-300 ease-in">
              <span className="font-bold text-white group-hover:text-black transition-all duration-500  mr-4 group-hover:mr-2">
                DESIGNED
              </span>
              <span className="font-bold text-gray-400 group-hover:text-black transition-all duration-500  mr-4 group-hover:mr-2">
                BY
              </span>
              <span className="font-thin text-gray-500">Serhii Pashchenko</span>
            </div>
            <div className="bg-[#252525] flex items-center justify-center p-3 text-xl hover:bg-white group transition-all duration-300 ease-in">
              <span className="font-bold text-white group-hover:text-black transition-all duration-500  mr-4 group-hover:mr-2">
                DEVELOPED
              </span>
              <span className="font-bold text-gray-400 group-hover:text-black transition-all duration-500  mr-4 group-hover:mr-2">
                BY
              </span>
              <span className="font-thin text-gray-500">Logan Olson</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
