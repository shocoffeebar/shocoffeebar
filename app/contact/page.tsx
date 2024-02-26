'use client';

import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { AlertTriangle } from 'lucide-react';

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit() {
    console.log('Submitted');
  }

  return (
    <div className="flex flex-row space-x-4 px-24 bg-[#252525]">
      <div className="bg-white h-[620px] w-[32px]"></div>
      <div className="bg-white h-[620px] w-[32px]"></div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex justify-center items-center w-full text-white"
      >
        <div className="bg-[#252525] space-y-6">
          <div className="relative bg-inherit group text-[18px] font-[600]">
            {errors.name && (
              <AlertTriangle className="absolute z-20 top-1.5 right-[4%] h-[25px] w-[28px] text-[#FF4E4E]" />
            )}
            <input
              type="text"
              id="name"
              {...register('name', { required: true })}
              className={`peer bg-[#252525]  h-10 w-72 text-gray-200 placeholder-transparent ring-2 px-2 ring-[#888888] ${
                errors.name
                  ? 'focus:ring-[#FF4E4E] ring-[#FF4E4E]'
                  : 'focus:ring-[#E4664F] ring-[#888888]'
              } focus:outline-none`}
              placeholder="Name*"
            />
            <label className="absolute cursor-text left-0 -top-3 text-sm  bg-inherit  mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-[#888888] peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-[#888888] peer-focus:text-sm transition-all">
              Name*
            </label>
          </div>
          <div className="relative bg-inherit group text-[18px] font-[600]">
            {errors.phone && (
              <AlertTriangle className="absolute z-20 top-1.5 right-[4%] h-[25px] w-[28px] text-[#FF4E4E]" />
            )}
            <input
              type="text"
              id="phone"
              {...register('phone')}
              className={`peer bg-[#252525]  h-10 w-72 text-gray-200 placeholder-transparent ring-2 px-2 ring-[#888888] ${
                errors.phone
                  ? 'focus:ring-[#FF4E4E] ring-[#FF4E4E]'
                  : 'focus:ring-[#E4664F] ring-[#888888]'
              } focus:outline-none`}
              placeholder="Name*"
            />
            <label className="absolute cursor-text left-0 -top-3 text-sm  bg-inherit  mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-[#888888] peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-[#888888] peer-focus:text-sm transition-all">
              Phone
            </label>
          </div>
          <div className="relative bg-inherit group text-[18px] font-[600]">
            {errors.email && (
              <AlertTriangle className="absolute z-20 top-1.5 right-[4%] h-[25px] w-[28px] text-[#FF4E4E]" />
            )}
            <input
              type="text"
              id="email"
              {...register('email', { required: true })}
              className={`peer bg-[#252525]  h-10 w-72 text-gray-200 placeholder-transparent ring-2 px-2 ring-[#888888] ${
                errors.email
                  ? 'focus:ring-[#FF4E4E] ring-[#FF4E4E]'
                  : 'focus:ring-[#E4664F] ring-[#888888]'
              } focus:outline-none`}
              placeholder="Name*"
            />
            <label className="absolute cursor-text left-0 -top-3 text-sm  bg-inherit  mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-[#888888] peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-[#888888] peer-focus:text-sm transition-all">
              Email*
            </label>
          </div>
          <div className="relative bg-inherit group text-[18px] font-[600]">
            {errors.topic && (
              <AlertTriangle className="absolute z-20 top-1.5 right-[4%] h-[25px] w-[28px] text-[#FF4E4E]" />
            )}
            <input
              type="text"
              id="topic"
              {...register('topic', { required: true })}
              className={`peer bg-[#252525]  h-10 w-72 text-gray-200 placeholder-transparent ring-2 px-2 ring-[#888888] ${
                errors.topic
                  ? 'focus:ring-[#FF4E4E] ring-[#FF4E4E]'
                  : 'focus:ring-[#E4664F] ring-[#888888]'
              } focus:outline-none`}
              placeholder="Name*"
            />
            <label className="absolute cursor-text left-0 -top-3 text-sm  bg-inherit  mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-[#888888] peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-[#888888] peer-focus:text-sm transition-all">
              Topic*
            </label>
          </div>
          <div className="relative bg-inherit group text-[18px] font-[600]">
            {errors.message && (
              <AlertTriangle className="absolute z-20 top-1.5 right-[4%] h-[25px] w-[28px] text-[#FF4E4E]" />
            )}
            <textarea
              rows={10}
              id="message"
              {...register('message', { required: true })}
              className={`peer bg-[#252525]  h-10 w-72 text-gray-200 placeholder-transparent ring-2 px-2 ring-[#888888] ${
                errors.message
                  ? 'focus:ring-[#FF4E4E] ring-[#FF4E4E]'
                  : 'focus:ring-[#E4664F] ring-[#888888]'
              } focus:outline-none`}
              placeholder="Name*"
            />
            <label className="absolute cursor-text left-0 -top-3 text-sm  bg-inherit  mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-[#888888] peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-[#888888] peer-focus:text-sm transition-all">
              Message*
            </label>
          </div>
          <Button
            className="bg-black text-white text-[18px] font-[600] hover:bg-white hover:text-black border-2 border-[#888888] rounded-none"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
      <div className="bg-white h-[620px] w-[32px]"></div>
      <div className="bg-white h-[620px] w-[32px]"></div>
    </div>
  );
}

export default function Contact() {
  return (
    <main className="flex min-h-screen flex-col bg-black text-white">
      <ContactForm />
      <div className="flex flex-col text-center py-[100px] px-[100px] bg-black text-white gap-y-[60px]">
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
