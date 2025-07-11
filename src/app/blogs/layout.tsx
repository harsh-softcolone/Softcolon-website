import { Toaster } from 'react-hot-toast';
import '@/app/globals.css';
import { Hanuman, IBM_Plex_Sans } from 'next/font/google';
import BlogNav from '@/components/header/blog-nav';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI & Technology Insights Blog | Softcolon',
  description:
    'Discover the latest AI trends, technology insights, and innovation stories from Softcolon. Expert articles on artificial intelligence, business automation, digital transformation, and cutting-edge tech solutions.',
  keywords: [
    'AI blog',
    'Technology insights',
    'Artificial Intelligence articles',
    'AI trends',
    'Business automation blog',
    'Digital transformation insights',
    'Machine learning articles',
    'AI innovation',
    'Tech blog',
    'Softcolon blog',
    'AI development insights',
    'Technology trends',
    'AI solutions blog',
    'Business intelligence',
    'AI case studies',
    'Tech innovation',
    'AI industry news',
    'Automation insights',
  ],
  // viewport: 'width=device-width, initial-scale=1',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  authors: [{ name: 'Softcolon' }],
  openGraph: {
    title: 'AI & Technology Insights Blog | Softcolon',
    description:
      'Discover the latest AI trends, technology insights, and innovation stories from Softcolon.',
    type: 'website',
  },
};

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='robots' content='index, follow' />
        {/* Default meta description - will be updated by client-side code */}
        <meta
          name='description'
          content='Discover the latest AI trends, technology insights, and innovation stories from Softcolon. Expert articles on artificial intelligence, business automation, and digital transformation.'
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#1b1b1b]`}
      >
        <BlogNav />
        {/* <LenisProvider>{children}</LenisProvider> */}
        {children}
        <Toaster />
      </body>
    </html>
  );
}
