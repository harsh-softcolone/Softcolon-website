interface ContentBlockProps {
  title: string;
  description: string;
}

export default function ContentBlock({
  title,
  description,
}: ContentBlockProps) {
  return (
    <div className='p-2 md:p-5 space-y-2'>
      <h3 className='font-hanuman font-normal leading-normal text-lg sm:text-2xl text-white'>
        {title}
      </h3>
      <p className='text-sm lg:text-base font-normal leading-normal text-paragraph font-ibm-plex-sans'>
        {description}
      </p>
    </div>
  );
}
