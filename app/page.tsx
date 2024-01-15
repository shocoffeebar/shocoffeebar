import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black text-white">
      <div className="relative">
        <div className="flex justify-start">
          <Image src="/hero.png" alt="Hero" width={1400} height={923} />
        </div>
        <div className="absolute top-[38%] left-[65%] transform -translate-x-1/2 -translate-y-1/2 text-white text-6xl font-medium w-3/4">
          <p className="text-shadow-md">
            THE SHO COFFEE & BAR CREATES AN ATMOSPHERE.
          </p>
        </div>
        <div className="bg-white absolute flex top-3/4 left-[47%] -translate-x-1/2 -translate-y-1/2 pt-4 pb-40 px-4 text-wrap w-[40%] mt-40">
          <p className="text-black text-3xl font-semibold leading-relaxed">
            We want to ensoure our guests reeive a high-
            <br />
            quality product in a space filled with our
            <br />
            atmosphere.
          </p>
        </div>
      </div>
    </main>
  );
}
