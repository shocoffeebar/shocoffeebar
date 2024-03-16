'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { AlertTriangle } from 'lucide-react';
import { resendEmail, sendEmail } from '@/lib/utils';

function FeedbackForm() {
  const [phoneInput, setPhoneInput] = useState('');
  const handleInput = (e: any) => {
    const formattedPhoneNumber = formatPhoneNumber(e.target.value);
    setPhoneInput(formattedPhoneNumber);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onSubmit(data: any) {
    sendEmail(data);
    resendEmail(data);
  }

  function formatPhoneNumber(value: string) {
    if (!value) return value;
    const phoneNumber = value.replace(/[^\d]/g, '');
    const phoneNumberLength = phoneNumber.length;
    if (phoneNumberLength < 4) return phoneNumber;
    if (phoneNumberLength < 7)
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
      3,
      6
    )}-${phoneNumber.slice(6, 10)}`;
  }

  return (
    <div className="flex flex-row md:px-24 bg-[#101010] relative">
      <div className="bg-white h-[620px] w-[32px] md:block hidden mr-4"></div>
      <div className="bg-white h-[620px] w-[32px] md:block hidden"></div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex md:justify-center md:items-center w-full text-white"
      >
        <div className="bg-[#101010] space-y-6 px-4 md:px-0 py-12 md:w-1/2 w-full md:items-center flex flex-col">
          <div className="relative bg-inherit group text-[18px] font-[600] md:z-0 z-10">
            <input
              type="text"
              id="name"
              {...register('name')}
              className={`peer bg-[#252525] h-10 md:w-[500px] w-full text-gray-200 placeholder-transparent ring-2 px-2 ring-[#888888] focus:outline-none`}
              placeholder="Name"
            />
            <label
              htmlFor="name"
              className="absolute select-none cursor-text left-0 -top-3 text-sm peer-focus-within:bg-[#101010] mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-[#888888] peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-[#888888] peer-focus:text-sm transition-all"
            >
              Name
            </label>
          </div>
          <div className="relative bg-inherit group text-[18px] font-[600] md:z-0 z-10">
            {errors.phone && (
              <AlertTriangle className="absolute z-20 top-1.5 right-[4%] h-[25px] w-[28px] text-[#FF4E4E]" />
            )}
            <input
              type="text"
              id="phone"
              {...register('phone', { onChange: (e) => handleInput(e) })}
              value={phoneInput}
              className={`peer bg-[#252525]  h-10 md:w-[500px] w-full text-gray-200 placeholder-transparent ring-2 px-2 ring-[#888888] ${
                errors.phone
                  ? 'focus:ring-[#FF4E4E] ring-[#FF4E4E]'
                  : 'focus:ring-[#E4664F] ring-[#888888]'
              } focus:outline-none`}
              placeholder="Phone"
            />
            <label
              htmlFor="phone"
              className="absolute cursor-text left-0 -top-3 text-sm  peer-focus-within:bg-[#101010]   mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-[#888888] peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-[#888888] peer-focus:text-sm transition-all"
            >
              Phone
            </label>
          </div>
          <div className="relative bg-inherit group text-[18px] font-[600] md:z-0 z-10">
            {errors.email && (
              <AlertTriangle className="absolute z-20 top-1.5 right-[4%] h-[25px] w-[28px] text-[#FF4E4E]" />
            )}
            <input
              type="text"
              id="email"
              {...register('email', {
                validate: {
                  matchPattern: (v) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v),
                },
                required: true,
              })}
              className={`peer bg-[#252525]  h-10 md:w-[500px] w-full text-gray-200 placeholder-transparent ring-2 px-2 ring-[#888888] ${
                errors.email
                  ? 'focus:ring-[#FF4E4E] ring-[#FF4E4E]'
                  : 'focus:ring-[#E4664F] ring-[#888888]'
              } focus:outline-none`}
              placeholder="Email*"
            />
            <label
              htmlFor="email"
              className="absolute cursor-text left-0 -top-3 text-sm  peer-focus-within:bg-[#101010]   mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-[#888888] peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-[#888888] peer-focus:text-sm transition-all"
            >
              Email*
            </label>
          </div>
          <div className="relative bg-inherit group text-[18px] font-[600] md:z-0 z-10">
            {errors.subject && (
              <AlertTriangle className="absolute z-20 top-1.5 right-[4%] h-[25px] w-[28px] text-[#FF4E4E]" />
            )}
            <input
              type="text"
              id="subject"
              {...register('subject', { required: true })}
              className={`peer bg-[#252525]  h-10 md:w-[500px] w-full text-gray-200 placeholder-transparent ring-2 px-2 ring-[#888888] ${
                errors.subject
                  ? 'focus:ring-[#FF4E4E] ring-[#FF4E4E]'
                  : 'focus:ring-[#E4664F] ring-[#888888]'
              } focus:outline-none`}
              placeholder="Subject*"
            />
            <label
              htmlFor="subject"
              className="absolute cursor-text left-0 -top-3 text-sm  peer-focus-within:bg-[#101010]   mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-[#888888] peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-[#888888] peer-focus:text-sm transition-all"
            >
              Subject*
            </label>
          </div>
          <div className="relative bg-inherit group text-[18px] font-[600] md:z-0 z-10">
            {errors.message && (
              <AlertTriangle className="absolute z-20 top-1.5 right-[4%] h-[25px] w-[28px] text-[#FF4E4E]" />
            )}
            <textarea
              rows={5}
              id="message"
              {...register('message', { required: true })}
              className={`peer bg-[#252525] md:w-[500px] w-full text-gray-200 placeholder-transparent ring-2 px-2 ring-[#888888] resize-none ${
                errors.message
                  ? 'focus:ring-[#FF4E4E] ring-[#FF4E4E]'
                  : 'focus:ring-[#E4664F] ring-[#888888]'
              } focus:outline-none`}
              placeholder="Write your feedback here*"
            />
            <label
              htmlFor="message"
              className="absolute cursor-text left-0 -top-3 text-sm  peer-focus-within:bg-[#101010]   mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-[#888888] peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-[#888888] peer-focus:text-sm transition-all"
            >
              Write your feedback here*
            </label>
          </div>
          <input type="hidden" {...register('type', { value: 'Feedback' })} />
          <Button
            className="md:w-[500px] w-full bg-black text-white text-[18px] font-[600] hover:bg-white hover:text-black border-2 border-[#888888] rounded-none md:z-0 z-10"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
      <div className="bg-white h-[620px] w-[32px] hidden md:block mr-4"></div>
      <div className="bg-white h-[620px] w-[32px] hidden md:block"></div>
      <div className="bg-white md:h-[620px] h-full w-[32px] md:hidden block absolute top-0 right-1"></div>
      <div className="bg-white md:h-[620px] h-full w-[32px] md:hidden block absolute top-0 right-12"></div>
    </div>
  );
}

export default function Feedback() {
  return (
    <main className="flex flex-col bg-black text-white">
      <FeedbackForm />
    </main>
  );
}
