import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, User } from 'lucide-react';
import { Body, Html, Tailwind } from '@react-email/components';

interface EmailPreviewProps {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  submittedAt?: string;
  companyName?: string;
}

export function EmailPreview({
  fullName = 'Sarah Johnson',
  email = 'sarah.johnson@example.com',
  phone = '+1 (555) 987-6543',
  subject = 'Website Development Inquiry',
  message = "Hi there! I'm looking to redesign my small business website and would love to discuss your web development services. I run a local bakery and need an e-commerce solution to sell our products online. Could we schedule a call this week to discuss pricing and timeline?",
  submittedAt = 'Monday, December 3, 2024 at 2:30 PM',
  companyName = 'TechCorp Solutions',
}: EmailPreviewProps) {
  return (
    <Html lang='en'>
      <Tailwind>
        <Body>
          <div className='max-w-2xl mx-auto bg-gray-50 p-6 rounded-lg'>
            {/* Email Header */}
            <div className='bg-white border border-gray-200 rounded-lg shadow-sm'>
              {/* Logo Section */}
              <div className='border-b border-gray-200 p-6 text-center'>
                <div className='w-48 h-12 bg-gray-200 rounded mx-auto flex items-center justify-center'>
                  <span className='text-gray-500 text-sm'>
                    {companyName} Logo
                  </span>
                </div>
              </div>

              {/* Alert Banner */}
              <div className='bg-green-500 text-white text-center py-3'>
                <span className='text-sm font-semibold'>
                  🔔 New Contact Inquiry Received
                </span>
              </div>

              {/* Main Content */}
              <div className='p-6'>
                <h1 className='text-2xl font-bold text-gray-900 text-center mb-4'>
                  New Contact Form Submission
                </h1>

                <p className='text-gray-600 text-center mb-6'>
                  You&apos;ve received a new inquiry through your website
                  contact form. Here are the details:
                </p>

                {/* Customer Information Card */}
                <Card className='mb-6 bg-gray-50'>
                  <CardHeader>
                    <CardTitle className='flex items-center gap-2'>
                      <User className='h-5 w-5' />
                      Customer Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className='space-y-3'>
                    <div className='grid grid-cols-3 gap-4'>
                      <span className='text-sm font-medium text-gray-600'>
                        Full Name:
                      </span>
                      <span className='col-span-2 text-sm text-gray-900'>
                        {fullName}
                      </span>
                    </div>
                    <div className='grid grid-cols-3 gap-4'>
                      <span className='text-sm font-medium text-gray-600'>
                        Email:
                      </span>
                      <span className='col-span-2 text-sm text-blue-600 underline'>
                        {email}
                      </span>
                    </div>
                    <div className='grid grid-cols-3 gap-4'>
                      <span className='text-sm font-medium text-gray-600'>
                        Phone:
                      </span>
                      <span className='col-span-2 text-sm text-blue-600 underline'>
                        {phone}
                      </span>
                    </div>
                    <div className='grid grid-cols-3 gap-4'>
                      <span className='text-sm font-medium text-gray-600'>
                        Subject:
                      </span>
                      <span className='col-span-2 text-sm font-semibold text-gray-900'>
                        {subject}
                      </span>
                    </div>
                    <div className='grid grid-cols-3 gap-4'>
                      <span className='text-sm font-medium text-gray-600'>
                        Submitted:
                      </span>
                      <span className='col-span-2 text-sm text-gray-900'>
                        {submittedAt}
                      </span>
                    </div>
                  </CardContent>
                </Card>

                {/* Message Card */}
                <Card className='mb-6 bg-yellow-50 border-yellow-200'>
                  <CardHeader>
                    <CardTitle>Message</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className='text-gray-900 whitespace-pre-wrap'>
                      {message}
                    </p>
                  </CardContent>
                </Card>

                {/* Action Buttons */}
                <div className='text-center mb-6'>
                  <h3 className='font-semibold text-gray-900 mb-4'>
                    Quick Actions
                  </h3>
                  <div className='flex gap-4 justify-center'>
                    <Button className='flex items-center gap-2'>
                      <Mail className='h-4 w-4' />
                      Reply via Email
                    </Button>
                    <Button
                      variant='outline'
                      className='flex items-center gap-2'
                    >
                      <Phone className='h-4 w-4' />
                      Call Customer
                    </Button>
                  </div>
                </div>

                <hr className='my-6 border-gray-200' />

                {/* Priority Section */}
                <div className='bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6'>
                  <p className='text-blue-800 text-sm'>
                    💡 <strong>Response Recommendation:</strong> Aim to respond
                    within 2-4 hours for the best customer experience.
                  </p>
                </div>
              </div>

              {/* Footer */}
              <div className='border-t border-gray-200 p-6 text-center'>
                <p className='text-xs text-gray-500 mb-2'>
                  This email was automatically generated from your website
                  contact form.
                </p>
                <p className='text-xs text-gray-500'>
                  <span className='text-blue-600 underline'>{companyName}</span>
                  {' • '}
                  <span className='text-blue-600 underline'>
                    Admin Dashboard
                  </span>
                </p>
              </div>
            </div>
          </div>
        </Body>
      </Tailwind>
    </Html>
  );
}
