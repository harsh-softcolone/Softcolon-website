import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Image from 'next/image';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface FAQData {
  title: string;
  subtitle: string;
  image: string;
  faqs: FAQItem[];
}

interface Props {
  faqData: FAQData;
}

const FAQSection = ({ faqData }: Props) => {
  return (
    <section className='w-full py-16 lg:py-24'>
      <div className='mx-auto max-w-[1396px] px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 items-start'>
          {/* Content Section */}
          <div className='space-y-8'>
            {/* Header */}
            <div className='space-y-2'>
              <h2 className='text-3xl sm:text-4xl lg:text-[40px] text-white leading-normal font-normal font-hanuman'>
                {faqData.title}
              </h2>
              <p className='text-paragraph font-normal font-ibm-plex-sans leading-normal text-base sm:text-lg'>
                {faqData.subtitle}
              </p>
            </div>

            {/* Accordion */}
            <div className='space-y-4py-4'>
              <Accordion
                type='single'
                collapsible
                className='space-y-0'
                defaultValue='item-0'
              >
                {faqData.faqs.map((faq, index) => (
                  <AccordionItem
                    key={faq.id}
                    value={`item-${index}`}
                    className='border-[1px] border-[#31383C] nav-background'
                  >
                    <AccordionTrigger className='px-6 py-4 text-left text-white hover:text-gray-300 transition-colors [&[data-state=open]>svg]:rotate-45'>
                      <span className='text-base sm:text-[20px] font-semibold font-ibm-plex-sans leading-normal text-white'>
                        {faq.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className='px-6 pb-4 text-paragraph font-normal font-ibm-plex-sans leading-normal text-base sm:text-lg'>
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          {/* Image Section */}
          <div className='order-first lg:order-last'>
            <div className='relative aspect-[4/3] w-full max-w-lg mx-auto lg:max-w-none'>
              <Image
                src={faqData.image || '/placeholder.svg'}
                alt='FAQ Illustration'
                fill
                className='object-cover rounded-2xl'
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
