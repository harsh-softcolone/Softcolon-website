import type { Metadata } from 'next';
import { Hanuman, IBM_Plex_Sans } from 'next/font/google';
import '@/app/globals.css';
import { Navbar } from '@/components/nav/Navbar';
import dynamic from 'next/dynamic';

// Replace direct import with lazy loading
const Toaster = dynamic(() =>
  import('react-hot-toast').then((mod) => mod.Toaster),
);

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
      <head>
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/favicon_io/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon_io/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon_io/favicon-16x16.png'
        />
        <link rel='manifest' href='/favicon_io/site.webmanifest' />
      </head>
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
