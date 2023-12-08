import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black text-white items-center p-16">
      <div className="items-center justify-center lg:flex">
        <Image src={'/logo.png'} alt="Website Logo" width={400} height={100} />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-center font-heading m-10 text-5xl sm:text-6xl lg:text-7xl leading-[5rem] sm:leading-[7rem] lg:leading-[7rem] font-bold">
          LAUNCHING SPRING 2024!
        </h1>
        <p className="text-xl md:text-2xl px-6 max-w-4xl text-center m-5 text-slate-100 font-thin">
          Anticipate the unveiling of SHO Coffee &amp; Bar, Winnipeg&apos;s
          upcoming haven for sensory delights! Currently under construction,
          we&apos;re crafting a space where artisanal coffees meet chic
          cocktails. Opening our doors in spring 2024, prepare to immerse
          yourself in a cozy coffee retreat during the day and a stylish bar
          rendezvous as the sun sets. Stay tuned for an exceptional experience
          where the worlds of coffee and cocktails converge in perfect harmony.
          SHO – where every detail is designed to make your moments memorable.
        </p>
      </div>
      <div className="text-center lg:m-7 mt-10 w-80 p-3"></div>
      <footer className="text-slate-500 text-center">
        <div className="my-4 text-center">
          <ul className="flex flex-wrap lg:flex justify-center">
            <li className="px-2">Follow Us:</li>
            <li className="px-2 capitalize">
              <a
                target="_blank"
                href="https://www.facebook.com/profile.php?id=61550963107645"
                className="hover:text-white hover:underline"
              >
                Facebook
              </a>
            </li>
            <li className="px-2 capitalize">
              <a
                target="_blank"
                href="https://www.instagram.com/shocoffeebar/"
                className="hover:text-white hover:underline"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-center">
            Questions? Email us at{' '}
            <a
              href="mailto:info@shocoffeebar.ca"
              className="hover:text-white hover:underline"
            >
              info@shocoffeebar.ca
            </a>
          </p>
        </div>
        <div>
          <p className="text-center">
            &copy; {new Date().getFullYear()} ShoCoffeeBar
          </p>
        </div>
      </footer>
    </main>
  );
}
