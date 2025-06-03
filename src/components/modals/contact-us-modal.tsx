import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import ContactUsForm from '../forms/contact-us-form';

interface ContactUsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ContactUsModal = ({ open, onOpenChange }: ContactUsModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className='w-[95%] max-w-[95vw] sm:max-w-[700px] xl:max-w-[1100px] p-0 border-none bg-transparent [&>button]:text-white [&>button]:cursor-pointer'>
        <ContactUsForm
          className='max-h-[calc(100vh-200px)] overflow-y-auto custom-scrollbar'
          title={
            <DialogTitle
              asChild
              className='mb-6 sm:mb-10 md:mb-14 text-white text-xl sm:text-2xl md:text-3xl text-center font-normal'
            >
              <h1>
                We don&apos;t bite—unless you&apos;re a spam bot. Drop us a line
                and let&apos;s make internet magic together!
              </h1>
            </DialogTitle>
          }
        />
      </DialogContent>
    </Dialog>
  );
};

export default ContactUsModal;
