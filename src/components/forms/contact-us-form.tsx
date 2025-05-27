'use client';

import CustomInput from '../input/custom-input';
import CustomTextArea from '../input/custom-textArea';
import { ArrowRight } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { contactFormSchema } from '@/lib/schema';
import React from 'react';
import CustomDropdown from '../input/custom-dropdown';
import { countryOptions } from '@/lib/data';

type FormData = z.infer<typeof contactFormSchema>;

const ContactUsForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log('Validated data:', data);
    // further processing or API calls
  };

  const selectedCountry = watch('country');

  return (
    <div className='border-[1px] w-full border-[#31383C] border-solid p-7.5 sm:py-10 px-5 sm:px-10 max-w-[1392px] rounded-[30px] mx-auto nav-background font-ibm-plex-sans'>
      <div className='w-full'>
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-7.5'>
          <div className='grid grid-cols-1 xl:grid-cols-2 gap-3'>
            <CustomInput
              parentClassName='!mb-0'
              {...register('fullName')}
              label='Full Name'
              required
              placeholder='John Doe'
              error={errors.fullName?.message}
            />
            <CustomInput
              parentClassName='!mb-0'
              {...register('email')}
              label='Email Address'
              required
              placeholder='john.doe@example.com'
              error={errors.email?.message}
            />
          </div>
          <div className='grid grid-cols-1 xl:grid-cols-2 gap-6'>
            <CustomDropdown
              label='Country'
              required
              options={countryOptions}
              value={selectedCountry}
              onChange={(value) => setValue('country', value)}
              placeholder='Select your country'
              error={errors.country?.message}
            />
            <CustomInput
              parentClassName='!mb-0'
              {...register('designation')}
              label='Company Name & Designation*'
              required
              placeholder='Developer, CEO'
              error={errors.designation?.message}
            />
          </div>
          <div className='grid grid-cols-1 xl:grid-cols-2 gap-6'>
            <CustomInput
              parentClassName='!mb-0'
              {...register('phone')}
              label='Phone'
              required
              placeholder='+91 9876543210'
              error={errors.phone?.message}
            />
            <CustomInput
              parentClassName='!mb-0'
              {...register('subject')}
              label='Subject'
              required
              placeholder='I want to create a website...'
              error={errors.subject?.message}
            />
          </div>
          <div className='w-full'>
            <CustomTextArea
              parentClassName='!mb-0'
              {...register('message')}
              required
              label='Message'
              className='w-full text-[16px]'
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
  );
};

export default ContactUsForm;
