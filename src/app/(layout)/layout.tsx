import type { Metadata } from 'next';
import { Hanuman, IBM_Plex_Sans } from 'next/font/google';
import '@/app/globals.css';
import { Navbar } from '@/components/nav/Navbar';
import { Toaster } from 'react-hot-toast';

const geistSans = Hanuman({
  variable: '--font-geist-hanuman',
  subsets: ['khmer', 'latin'],
  weight: ['400', '700'],
});

const geistMono = IBM_Plex_Sans({
  variable: '--font-geist-ibm-plex-sans',
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '700'],
});

export const metadata: Metadata = {
  title: 'Softcolon | AI-Powered Solutions for Business Growth',
  description:
    'Softcolon is a leading AI and technology company specializing in custom AI development, automation, and digital transformation. Partner with us to accelerate your business growth with innovative, human-centric solutions.',
  keywords: [
    'AI solutions',
    'Artificial Intelligence',
    'Business Automation',
    'Custom AI Development',
    'Digital Transformation',
    'Machine Learning',
    'AI Consulting',
    'Softcolon',
    'Technology Company',
    'AI Services',
    'Generative AI',
    'AI Integration',
    'Ahmedabad',
    'India',
  ],
  openGraph: {
    title: 'Softcolon | AI-Powered Solutions for Business Growth',
    description:
      'Accelerate your business with Softcolon custom AI solutions, automation, and digital transformation services. Human-centric, innovative, and scalable technology for enterprises.',
    siteName: 'Softcolon',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>{/* Add any additional head elements here */}</head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black-background`}
      >
        <Navbar />
        {/* <LenisProvider>{children}</LenisProvider> */}
        {children}
        <Toaster />
      </body>
    </html>
  );
}
