'use client';
import { getInTouchFormSchema } from '@/lib/schema';
import Link from 'next/link';
import React from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import CustomInput from '../input/custom-input';
import CustomTextArea from '../input/custom-textArea';
import { ArrowRight } from 'lucide-react';
import toast from 'react-hot-toast';

type FormData = z.infer<typeof getInTouchFormSchema>;

const GetInTouchForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(getInTouchFormSchema),
  });

  const [loading, setLoading] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success('Message sent successfully');
        reset();
        setSubmitted(true);
      } else {
        toast.error('Something went wrong.');
      }
    } catch (error) {
      console.error('Submit error:', error);
      toast.error('Error submitting the form.');
    }
    setLoading(false);
  };

  return (
    <div className='border-[1px] mt-14.5 md:mt-25 border-[#31383C] border-solid p-7.5 sm:py-18 px-5 sm:px-18 max-w-[1392px] w-11/12 2xl:w-full rounded-[30px] mx-auto nav-background font-ibm-plex-sans'>
      {submitted ? (
        <div className='flex flex-col items-center justify-center py-20'>
          <h2 className='text-2xl md:text-3xl font-semibold text-white mb-4'>
            Thank you for reaching out!
          </h2>
          <p className='text-lg text-[#c0c0c0] text-center max-w-xl'>
            We&apos;ve received your message and truly appreciate your interest.
            Our team will get back to you as soon as possible. Have a wonderful
            day!
          </p>
        </div>
      ) : (
        <div className='grid grid-cols-1 xl:grid-cols-[1fr_2fr] gap-14.5'>
          <div className='flex flex-col justify-between items-start gap-7.5'>
            <h1 className='text-white text-[30px] md:text-[40px] font-normal leading-[39px] sm:leading-[52px]'>
              Success is a Team Play
              <span className='text-[#6F6F70]'>
                &nbsp;Right Let&apos;s work together!
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
                  disabled={loading}
                  className='cursor-pointer group font-ibm-plex-sans px-5 py-3.5 rounded-full hover:bg-gradient-to-r hover:from-[#1f84fc] hover:to-[#c846e4] bg-transparent transition-colors duration-300 flex items-center gap-2 text-lg text-white border-[1px] border-white hover:border-transparent disabled:opacity-60 disabled:cursor-not-allowed'
                >
                  {loading ? (
                    <>
                      <span className='animate-spin rounded-full h-5 w-5 border-b-2 border-white'></span>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Your Message
                      <ArrowRight className='w-5 h-5 -rotate-45 group-hover:rotate-0 transition-all duration-300' />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default GetInTouchForm;
