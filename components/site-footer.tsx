import Link from 'next/link';
import Image from 'next/image';

import { siteConfig } from '@/config/site';

export function SiteFooter() {
  return (
    <footer className="bg-[#888888]">
      <Image src={'/logo.png'} alt={siteConfig.name} width={200} height={50} />
      <div className="flex flex-row">
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
      {/* <button className="hover:bg-white text-black hover:text-gray-400 text-7xl group relative flex items-center justify-center p-4 transition-all duration-100">
        <span className="mr-6">MENU</span>
        <span className="w-[4.5rem] group-hover:w-[2.2rem] border-2 border-black inline-block text-4xl font-bold transition-transform transform origin-center group-hover:rotate-90 duration-400 group-hover:border-gray-400 mr-6 group-hover:-mr-[1.5rem] group-hover:mt-1.5"></span>
        <span className="group-hover:-mr-6 transition-all duration-400">
          &gt;
        </span>
      </button> */}
    </footer>
  );
}
