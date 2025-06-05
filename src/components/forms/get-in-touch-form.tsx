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
import { cn } from '@/lib/utils';

type FormData = z.infer<typeof getInTouchFormSchema>;

interface GetInTouchFormProps {
  isMobileOptimized?: boolean;
  containerClassName?: string;
  contentClassName?: string;
  formClassName?: string;
  showGetMoreInfo?: boolean;
  titleClassName?: string;
  getMoreInfoClassName?: string;
  formSpacingClassName?: string;
  inputRowClassName?: string;
  buttonContainerClassName?: string;
  buttonClassName?: string;
  successContainerClassName?: string;
  successTitleClassName?: string;
  successMessageClassName?: string;
}

const GetInTouchForm = ({
  isMobileOptimized = false,
  containerClassName,
  contentClassName,
  formClassName,
  showGetMoreInfo = true,
  titleClassName,
  getMoreInfoClassName,
  formSpacingClassName,
  inputRowClassName,
  buttonContainerClassName,
  buttonClassName,
  successContainerClassName,
  successTitleClassName,
  successMessageClassName,
}: GetInTouchFormProps) => {
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
    <div
      className={cn(
        'border-[1px] mt-14.5 md:mt-25 border-[#31383C] border-solid p-7.5 sm:py-18 px-5 sm:px-18 max-w-[1392px] w-11/12 2xl:w-full rounded-[30px] mx-auto nav-background font-ibm-plex-sans',
        isMobileOptimized &&
          'mt-4 sm:mt-14.5 md:mt-25 p-4 sm:p-7.5 sm:py-18 px-4 sm:px-5 md:px-18 max-h-[90vh] overflow-y-auto',
        containerClassName,
      )}
    >
      {submitted ? (
        <div
          className={cn(
            'flex flex-col items-center justify-center py-20',
            isMobileOptimized && 'py-8 sm:py-20',
            successContainerClassName,
          )}
        >
          <h2
            className={cn(
              'text-2xl md:text-3xl font-semibold text-white mb-4',
              isMobileOptimized &&
                'text-xl sm:text-2xl md:text-3xl mb-2 sm:mb-4',
              successTitleClassName,
            )}
          >
            Thank you for reaching out!
          </h2>
          <p
            className={cn(
              'text-lg text-[#c0c0c0] text-center max-w-xl',
              isMobileOptimized && 'text-sm sm:text-lg px-4',
              successMessageClassName,
            )}
          >
            We&apos;ve received your message and truly appreciate your interest.
            Our team will get back to you as soon as possible. Have a wonderful
            day!
          </p>
        </div>
      ) : (
        <div
          className={cn(
            'grid grid-cols-1 xl:grid-cols-[1fr_2fr] gap-14.5',
            isMobileOptimized &&
              'grid-cols-1 lg:grid-cols-[1fr_2fr] gap-4 sm:gap-8 lg:gap-14.5',
            formSpacingClassName,
          )}
        >
          <div
            className={cn(
              'flex flex-col justify-between items-start gap-7.5',
              isMobileOptimized && 'gap-4 sm:gap-7.5',
              contentClassName,
            )}
          >
            <h1
              className={cn(
                'text-white text-[30px] md:text-[40px] font-normal leading-[39px] sm:leading-[52px]',
                isMobileOptimized &&
                  'text-[24px] sm:text-[30px] md:text-[40px] leading-[30px] sm:leading-[39px] md:leading-[52px]',
                titleClassName,
              )}
            >
              Success is a Team Play
              <span className='text-[#6F6F70]'>
                &nbsp;Right Let&apos;s work together!
              </span>
            </h1>
            {showGetMoreInfo && (
              <Link
                href=''
                className={cn(
                  'border-b-[1px] text-[#6F6F70] border-[#6F6F70] font-normal text-xl',
                  isMobileOptimized && 'text-lg sm:text-xl',
                  getMoreInfoClassName,
                )}
              >
                Get More Information
              </Link>
            )}
          </div>
          <div className={cn('w-full', formClassName)}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className={cn(
                'space-y-6',
                isMobileOptimized && 'space-y-4 sm:space-y-6',
              )}
            >
              <div
                className={cn(
                  'grid grid-cols-1 md:grid-cols-2 gap-3',
                  isMobileOptimized &&
                    'grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3',
                  inputRowClassName,
                )}
              >
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
              <div
                className={cn(
                  'grid grid-cols-1 md:grid-cols-2 gap-6',
                  isMobileOptimized &&
                    'grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6',
                )}
              >
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
              <div
                className={cn(
                  'flex justify-start mt-8',
                  isMobileOptimized &&
                    'mt-4 sm:mt-8 justify-center sm:justify-start',
                  buttonContainerClassName,
                )}
              >
                <button
                  aria-label='send message'
                  type='submit'
                  disabled={loading}
                  className={cn(
                    'cursor-pointer group font-ibm-plex-sans px-5 py-3.5 rounded-full hover:bg-gradient-to-r hover:from-[#1f84fc] hover:to-[#c846e4] bg-transparent transition-colors duration-300 flex items-center gap-2 text-lg text-white border-[1px] border-white hover:border-transparent disabled:opacity-60 disabled:cursor-not-allowed',
                    isMobileOptimized &&
                      'w-full sm:w-auto text-base sm:text-lg px-4 sm:px-5 py-3 sm:py-3.5',
                    buttonClassName,
                  )}
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
