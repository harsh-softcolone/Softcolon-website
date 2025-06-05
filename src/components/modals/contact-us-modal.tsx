import { Dialog, DialogContent } from '@/components/ui/dialog';
import GetInTouchForm from '../forms/get-in-touch-form';

interface ContactUsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ContactUsModal = ({ open, onOpenChange }: ContactUsModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className='w-[95%] max-w-[95vw] sm:max-w-[700px] xl:max-w-[1100px] p-0 border-none bg-transparent max-h-[95vh] overflow-y-auto'>
        <GetInTouchForm
          isMobileOptimized={true}
          containerClassName='mt-0 max-h-none'
          showGetMoreInfo={false}
          titleClassName='text-[20px] sm:text-[24px] md:text-[30px] leading-[26px] sm:leading-[30px] md:leading-[39px]'
          formSpacingClassName='gap-3 sm:gap-6 lg:gap-8'
          inputRowClassName='gap-2 sm:gap-3'
          buttonContainerClassName='mt-3 sm:mt-6 justify-center sm:justify-start'
          buttonClassName='w-full sm:w-auto'
        />
      </DialogContent>
    </Dialog>
  );
};

export default ContactUsModal;
