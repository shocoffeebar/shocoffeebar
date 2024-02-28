'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex flex-col bg-black text-white">
      <div className="flex flex-col relative">
        <div className="z-10">
          <img
            src="/beans.png"
            alt="Sho Coffee & Bar"
            className="z-10 h-[550px] w-[548px] absolute top-0 -left-20"
          />
        </div>
        <div className="relative flex flex-col p-48 z-20 ">
          <h2 className="text-[48px] p-2 font-[500]">404 ERROR</h2>
          <p className="text-[20px] p-2 font-[300]">
            Sorry, something went wrong
          </p>
        </div>
      </div>
    </main>
  );
}
