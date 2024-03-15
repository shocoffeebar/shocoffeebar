'use client';

import { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { AlertTriangle } from 'lucide-react';
import { resendEmail, sendEmail } from '@/lib/utils';
import { useUploadThing, uploadFiles } from '@/lib/uploadthing';

function JoinTeamForm() {
  const [phoneInput, setPhoneInput] = useState('');
  const [file, setFile] = useState('');
  const handleInput = (e: any) => {
    const formattedPhoneNumber = formatPhoneNumber(e.target.value);
    setPhoneInput(formattedPhoneNumber);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const uploadFile = async (data: any) => {
    let files = [data];

    const res = await uploadFiles('pdfUploader', {
      files,
    });
    return res[0].url;
  };

  async function onSubmit(data: any) {
    let resumeURL = await uploadFile(data.resume[0]);

    data.resume = resumeURL;
    console.log('data', data);
    sendEmail(data);
    // resendEmail(data);
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

  const hiddenFileInput = useRef<HTMLInputElement | null>(null);

  const handleFileUploadClick = () => {
    hiddenFileInput.current?.click();
  };

  const handleFileUploadChange = (e: any) => {
    const file = e.target.files[0];
    setFile(file.name);
  };

  const { ref, ...rest } = register('resume', {
    required: true,
    onChange: handleFileUploadChange,
  });

  return (
    <div className="flex flex-row space-x-4 px-24 bg-[#101010]">
      <div className="bg-white h-[620px] w-[32px]"></div>
      <div className="bg-white h-[620px] w-[32px]"></div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex justify-center items-center w-full text-white"
        encType="multipart/form-data"
      >
        <div className="bg-[#101010] space-y-6 w-1/2 items-center flex flex-col">
          <div className="relative bg-inherit group text-[18px] font-[600]">
            {errors.name && (
              <AlertTriangle className="absolute z-20 top-1.5 right-[4%] h-[25px] w-[28px] text-[#FF4E4E]" />
            )}
            <input
              type="text"
              id="name"
              {...register('name', { required: true })}
              className={`peer bg-[#252525] h-10 w-[500px]  text-gray-200 placeholder-transparent ring-2 px-2 ring-[#888888] ${
                errors.name
                  ? 'focus:ring-[#FF4E4E] ring-[#FF4E4E]'
                  : 'focus:ring-[#E4664F] ring-[#888888]'
              } focus:outline-none`}
              placeholder="Name*"
            />
            <label
              htmlFor="name"
              className="absolute select-none peer-focus-within:bg-[#101010] cursor-text left-0 -top-3 text-sm mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-[#888888] peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-[#888888] peer-focus:text-sm transition-all"
            >
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
              {...register('phone', {
                required: true,
                onChange: (e) => handleInput(e),
              })}
              value={phoneInput}
              className={`peer bg-[#252525]  h-10 w-[500px] text-gray-200 placeholder-transparent ring-2 px-2 ring-[#888888] ${
                errors.phone
                  ? 'focus:ring-[#FF4E4E] ring-[#FF4E4E]'
                  : 'focus:ring-[#E4664F] ring-[#888888]'
              } focus:outline-none`}
              placeholder="Phone*"
            />
            <label
              htmlFor="phone"
              className="absolute cursor-text left-0 peer-focus-within:bg-[#101010] -top-3 text-sm mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-[#888888] peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-[#888888] peer-focus:text-sm transition-all"
            >
              Phone*
            </label>
          </div>
          <div className="relative bg-inherit group text-[18px] font-[600]">
            {errors.email && (
              <AlertTriangle className="absolute z-20 top-1.5 right-[4%] h-[25px] w-[28px] text-[#FF4E4E]" />
            )}
            <input
              type="text"
              id="email"
              {...register('email', {
                required: true,
                validate: {
                  matchPattern: (v) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v),
                },
              })}
              className={`peer bg-[#252525]  h-10 w-[500px] text-gray-200 placeholder-transparent ring-2 px-2 ring-[#888888] ${
                errors.email
                  ? 'focus:ring-[#FF4E4E] ring-[#FF4E4E]'
                  : 'focus:ring-[#E4664F] ring-[#888888]'
              } focus:outline-none`}
              placeholder="Email*"
            />
            <label
              htmlFor="email"
              className="absolute select-none cursor-text peer-focus-within:bg-[#101010] left-0 -top-3 text-sm mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-[#888888] peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-[#888888] peer-focus:text-sm transition-all"
            >
              Email*
            </label>
          </div>
          <div className="relative bg-inherit group text-[18px] font-[600]">
            {errors.resume && (
              <AlertTriangle className="absolute z-20 top-1.5 right-[4%] h-[25px] w-[28px] text-[#FF4E4E]" />
            )}
            <button
              onClick={handleFileUploadClick}
              type="button"
              className={`peer bg-[#252525] text-start h-10 w-[500px] text-base ${
                file ? 'text-white' : 'text-[#888888]'
              } placeholder-transparent cursor-pointer  ring-2 px-2 ring-[#888888] ${
                errors.resume
                  ? 'focus:ring-[#FF4E4E] ring-[#FF4E4E]'
                  : 'focus:ring-[#E4664F] ring-[#888888]'
              } focus:outline-none`}
            >
              {file ? file : 'Upload Your Resume*'}
            </button>
            <input
              {...rest}
              id="resume"
              type="file"
              ref={(e) => {
                ref(e);
                hiddenFileInput.current = e;
              }}
              className="hidden"
            />
            {/* <label
              htmlFor="resume"
              className="absolute cursor-default left-0 -top-3 text-sm peer-focus-within:bg-[#101010] mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-[#888888] peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-[#888888] peer-focus:text-sm transition-all"
            >
              Upload Your Resume*
            </label> */}
          </div>
          <div className="relative bg-inherit group text-[18px] font-[600]">
            {errors.message && (
              <AlertTriangle className="absolute z-20 top-1.5 right-[4%] h-[25px] w-[28px] text-[#FF4E4E]" />
            )}
            <textarea
              rows={5}
              id="message"
              {...register('message', { required: true })}
              className={`peer bg-[#252525] w-[500px] text-gray-200 placeholder-transparent ring-2 px-2 ring-[#888888] resize-none ${
                errors.message
                  ? 'focus:ring-[#FF4E4E] ring-[#FF4E4E]'
                  : 'focus:ring-[#E4664F] ring-[#888888]'
              } focus:outline-none`}
              placeholder="Tell us briefly about yourself*"
            />
            <label
              htmlFor="message"
              className="absolute cursor-text left-0 -top-3 text-sm peer-focus-within:bg-[#101010] mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-[#888888] peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-[#888888] peer-focus:text-sm transition-all"
            >
              Tell us briefly about yourself*
            </label>
          </div>
          <input
            type="hidden"
            {...register('subject', { value: 'ShoCoffeeBar Application' })}
          />
          <input type="hidden" {...register('type', { value: 'Join Team' })} />
          <Button
            className="w-[500px] bg-black text-white text-[18px] font-[600] hover:bg-white hover:text-black border-2 border-[#888888] rounded-none"
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

export default function Join() {
  return (
    <main className="flex flex-col bg-black text-white">
      <JoinTeamForm />
    </main>
  );
}
