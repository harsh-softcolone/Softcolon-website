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

export const careerFormSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  designation: z.string().min(2, 'Designation must be at least 2 characters'),
  subject: z.string().min(2, 'Subject must be at least 2 characters'),
  currentCompany: z.string().min(2, 'Current/Last Company is required'),
  noticePeriod: z.string().min(1, 'Notice Period is required'),
  reasonForChange: z.string().min(2, 'Reason for Change is required'),
  referredBy: z.string().optional(),
  currentLocation: z.string().min(2, 'Current Location is required'),
  totalExperience: z.string().min(1, 'Total Experience is required'),
  currentSalary: z.string().min(1, 'Current Salary is required'),
  expectedSalary: z.string().min(1, 'Expected Salary is required'),
  shortIntroduction: z.string().optional(),
  message: z.string().optional(),
  cv: z
    .instanceof(File, { message: 'Please upload your CV' })
    .refine((file) => file && file.size > 0, 'Please upload your CV'),
});
