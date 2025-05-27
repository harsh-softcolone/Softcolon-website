import { z } from 'zod';

export const contactFormSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  subject: z.string().min(2, 'Subject must be at least 2 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  designation: z.string().min(2, 'Designation must be at least 2 characters'),
  country: z
    .string({
      required_error: 'Please select your country',
    })
    .min(1, 'Please select your country'),
  serviceType: z
    .string({
      required_error: 'Please select a service type',
    })
    .min(1, 'Please select a service type'),
});

export const getInTouchFormSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  subject: z.string().min(2, 'Subject must be at least 2 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});
