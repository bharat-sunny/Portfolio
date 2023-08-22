'use client'

import React, { useRef, FormEvent } from 'react';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from 'react-hook-form';
import emailjs from '@emailjs/browser';

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

export default function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<FormValues>();
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (form.current) 
    {
      emailjs.sendForm('service_05zein4', 'template_07rlijd', form.current, 'ktL_gc9bBjnwnezbI')
        .then((response) => {
          console.log('Email sent successfully!', response);
          alert("Thanks for connecting");
        })
        .catch((error) => {
          console.error('Error sending email:', error);
          // Handle error or show an error message to the user if needed
        });
    }
  };

  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-14 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Contact
      </h3>

      <div className='scale-75 flex flex-col space-y-10 text-4xl'>
        <h4 className='text-4xl font-semibold text-center'>
          I got what you need. <span className='decoration-[#F7AB]/50 underline'> Lets Talk</span>
        </h4>

        <div className='space-y-10'>
          <div className='flex items-center space-x-5 justify-center'>
            <PhoneIcon className='text-[#F7AB] h-7 w-7 animate-pulse' />
            <p className='text-2xl'>+18573957598</p>
          </div>

          <div className='flex items-center space-x-5 justify-center'>
            <EnvelopeIcon className='text-[#F7AB] h-7 w-7 animate-pulse' />
            <p className='text-2xl'>tankalabharat@gmail.com</p>
          </div>

          <div className='flex items-center space-x-5 justify-center'>
            <MapPinIcon className='text-[#F7AB] h-7 w-7 animate-pulse' />
            <p className='text-2xl'>Boston</p>
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail} className='flex flex-col space-y-2 w-fit mx-auto'>
          <div className='flex space-x-2'>
            <input {...register('name')} placeholder='Name' className='contactInput' type='Name' />
            <input {...register('email')} placeholder='Email' className='contactInput' type='Email' />
          </div>

          <input {...register('subject')} placeholder='Subject' className='contactInput' type='text' />
          <textarea {...register('message')} placeholder='Message' className='contactInput' />
          <button
            type='submit'
            className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
