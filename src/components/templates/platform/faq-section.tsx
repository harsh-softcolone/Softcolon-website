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
    <section
      className='w-full py-16 lg:py-24'
      style={{
        background: 'linear-gradient(109deg, #050506 19.72%, #22272b 100.49%)',
      }}
    >
      <div className='mx-auto max-w-[1396px] px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start'>
          {/* Content Section */}
          <div className='space-y-8'>
            {/* Header */}
            <div className='space-y-4'>
              <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight'>
                {faqData.title}
              </h2>
              <p className='text-gray-400 text-lg leading-relaxed'>
                {faqData.subtitle}
              </p>
            </div>

            {/* Accordion */}
            <div className='space-y-4'>
              <Accordion
                type='single'
                collapsible
                className='space-y-4'
                defaultValue='item-0'
              >
                {faqData.faqs.map((faq, index) => (
                  <AccordionItem
                    key={faq.id}
                    value={`item-${index}`}
                    className='border border-gray-700 rounded-lg bg-gray-800/30 backdrop-blur-sm'
                  >
                    <AccordionTrigger className='px-6 py-4 text-left text-white hover:text-gray-300 transition-colors [&[data-state=open]>svg]:rotate-45'>
                      <span className='text-base sm:text-lg font-medium pr-4'>
                        {faq.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className='px-6 pb-4 text-gray-400 leading-relaxed'>
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
