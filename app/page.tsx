import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black text-white">
      <div className="relative mb-32">
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
            We want to ensoure our guests receive a high-
            <br />
            quality product in a space filled with our
            <br />
            atmosphere.
          </p>
        </div>
      </div>
      <div className="relative mt-32">
        <Image src={'/leftcoffee.png'} alt="Hero" width={460} height={642} />
        <div className="absolute top-[38%] left-[57%] transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-medium w-3/4">
          <p className="text-shadow-md">
            Introducing Winnipeg&apos;s first-ever cofee revolution-a
            cutting-edge
            <br />
            technique that seamslessly blends precision and artistry to extract{' '}
            <br />
            unparalleled flavors and aromas, setting a new standard in
            craftsmanship.
          </p>
        </div>
        <div className="absolute top-[70%] left-[60%]">
          <Image src={'/rightcoffee.png'} alt="Hero" width={638} height={347} />
        </div>
      </div>
      <div className="grid grid-cols-6 mt-24 mb-16">
        <p className="text-2xl col-start-2 col-span-2">
          Introducing a revolutionary coffee brewing method in Winnipeg, our
          high-level and contemporary technique seamlessly combines precision
          and artistry. Utilizing cutting-edge equipment and a meticulous
          process, we have redefined the coffee experience by enhancing flavor
          profiles and extracting nuanced aromas previously undiscovered in the
          Winnipeg coffee scene. This groundbreaking approach not only elevates
          the sensory journey of each cup but also establishes a new standard
          for coffee craftsmanship in the city.
        </p>
      </div>
      <Image
        src="/Menu.png"
        alt="Hero"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
      />
      <div className="bg-white text-black flex flex-col justify-center items-center">
        <div className="flex flex-col p-24 space-y-6">
          <button className="hover:bg-white hover:text-gray-400 text-5xl font-[500] group relative flex items-center transition-all duration-100 mb-16 w-min">
            <span className="mr-6">MENU</span>
            <span className="w-[4.5rem] group-hover:w-[1rem] border-2 border-black inline-block transition-transform transform origin-center group-hover:rotate-90 duration-400 group-hover:border-gray-400 mr-6 group-hover:-mr-[0.8rem] group-hover:mt-1.5"></span>
            <span className="group-hover:-mr-6 transition-all duration-400 ">
              &gt;
            </span>
          </button>
          <h1 className="text-5xl font-[500]">LOCATION</h1>
          <iframe
            style={{
              filter: 'grayscale(100%) invert(92%) contrast(83%)',
            }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2569.973073252939!2d-97.14240025788158!3d49.89930884451402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52ea717a0e0d24d5%3A0x1c0a921721de853b!2sSho%20coffee%20%26%20bar!5e0!3m2!1sen!2sca!4v1705862440247!5m2!1sen!2sca"
            width="100%"
            height="668"
            aria-hidden="false"
            loading="lazy"
          ></iframe>
          <div className="flex flex-row items-center gap-x-48 text-center">
            <div className="flex flex-col space-y-2">
              <h1 className="text-3xl font-[500]">HOURS</h1>
              <p className="text-2xl font-[500]">
                Cafe: <span className="font-[400] text-[18px]">7am - 9pm</span>
              </p>
              <p className="text-2xl font-[500]">
                Bar: <span className="font-[400] text-[18px]">9pm - 2am</span>
              </p>
            </div>
            <div className="flex flex-col">
              <h1 className="text-3xl font-[500] mb-4">ADDRESS</h1>
              <p className="text-2xl font-[500]">290 William Ave</p>
              <p className="text-2xl font-[500]">Winnipeg</p>
            </div>
            <div className="flex flex-col">
              <h1 className="text-3xl font-[500] mb-4">EMAIL</h1>
              <p className="text-2xl font-[500]">info@shocoffeebar.com</p>
              <br />
            </div>
            <div className="flex flex-col">
              <h1 className="text-3xl font-[500] mb-4">PHONE</h1>
              <p className="text-2xl font-[500]">+1 431 2777 777</p>
              <br />
            </div>
          </div>
        </div>
        {/* Upcoming Events */}
        {/* <div className="bg-white text-black flex flex-row  mr-24">
          <div className="flex flex-col px-12 pt-12 pb-20">
            <h1 className="text-5xl font-[500] mb-6">UPCOMING EVENTS</h1>
            <div className="flex-row flex">
              <div className="flex border-b-2 border-black space-x-12 items-center p-6">
                <div className="flex-flex-col items-center text-center text-3xl font-[500]">
                  <p>FEB 25</p>
                  <p>11 AM</p>
                </div>
                <div className="flex-flex-col items-center text-center">
                  <p className="text-2xl font-[500]">Graceful opening</p>
                </div>
                <div className="flex-flex-col items-center text-center">
                  <p className="text-xl font-[400]">
                    Lorem ipsum dolor sit amet consectetur. Condimentum nullam
                    quis elit eros sed leo cursus.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-row flex">
              <div className="flex border-b-2 border-black space-x-12 items-center p-6">
                <div className="flex-flex-col items-center text-center text-3xl font-[500]">
                  <p>FEB 25</p>
                  <p>11 AM</p>
                </div>
                <div className="flex-flex-col items-center text-center">
                  <p className="text-2xl font-[500]">Graceful opening</p>
                </div>
                <div className="flex-flex-col items-center text-center">
                  <p className="text-xl font-[400]">
                    Lorem ipsum dolor sit amet consectetur. Condimentum nullam
                    quis elit eros sed leo cursus.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-row flex">
              <div className="flex border-b-2 border-black space-x-12 items-center p-6">
                <div className="flex-flex-col items-center text-center text-3xl font-[500]">
                  <p>FEB 25</p>
                  <p>11 AM</p>
                </div>
                <div className="flex-flex-col items-center text-center">
                  <p className="text-2xl font-[500]">Graceful opening</p>
                </div>
                <div className="flex-flex-col items-center text-center">
                  <p className="text-xl font-[400]">
                    Lorem ipsum dolor sit amet consectetur. Condimentum nullam
                    quis elit eros sed leo cursus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </main>
  );
}
