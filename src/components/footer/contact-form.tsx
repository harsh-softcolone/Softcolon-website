'use client';
import { contactFormSchema } from '@/lib/schema';
import Link from 'next/link';
import React from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import CustomInput from '../input/custom-input';
import CustomTextArea from '../input/custom-textArea';
import { ArrowRight } from 'lucide-react';

type FormData = z.infer<typeof contactFormSchema>;

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log('Validated data:', data);
    // further processing or API calls
  };

  return (
    <div className='border-[1px] border-[#31383C] border-solid p-7.5 sm:py-18 px-5 sm:px-18 max-w-[1392px] w-11/12 2xl:w-full rounded-[30px] mx-auto nav-background font-ibm-plex-sans'>
      <div className='grid grid-cols-1 xl:grid-cols-[1fr_2fr] gap-14.5'>
        <div className='flex flex-col justify-between items-start gap-7.5'>
          <h1 className='text-white text-[30px] md:text-[40px] font-normal leading-[39px] sm:leading-[52px]'>
            Success is a Team Play
            <span className='text-[#6F6F70]'>
              &nbsp;Right Let&apos;s works together!
            </span>
          </h1>
          <Link
            href=''
            className='border-b-[1px] text-[#6F6F70] border-[#6F6F70] font-normal text-xl'
          >
            Get More Information
          </Link>
        </div>
        <div className='w-full'>
          <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
              <CustomInput
                {...register('fullName')}
                label='Full Name'
                required
                placeholder='Your full name'
                error={errors.fullName?.message}
              />
              <CustomInput
                {...register('email')}
                label='Email Address'
                required
                placeholder='Your Email Address'
                error={errors.email?.message}
              />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <CustomInput
                {...register('phone')}
                label='Phone'
                required
                placeholder='Your Phone'
                error={errors.phone?.message}
              />
              <CustomInput
                {...register('subject')}
                label='Subject'
                required
                placeholder='Your subject'
                error={errors.subject?.message}
              />
            </div>
            <div className='w-full'>
              <CustomTextArea
                {...register('message')}
                required
                label='Message'
                className='w-full'
                placeholder='Write your message here...'
                error={errors.message?.message}
              />
            </div>
            <div className='flex justify-start mt-8'>
              <button
                aria-label='send message'
                type='submit'
                className='cursor-pointer group font-ibm-plex-sans px-5 py-3.5 rounded-full hover:bg-gradient-to-r hover:from-[#1f84fc] hover:to-[#c846e4] bg-transparent transition-colors duration-300 flex items-center gap-2 text-lg text-white border-[1px] border-white hover:border-transparent'
              >
                Send Your Message
                <ArrowRight className='w-5 h-5 -rotate-45 group-hover:rotate-0 transition-all duration-300' />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
