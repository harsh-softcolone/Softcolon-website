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
  openGraph: {
    title: 'AI & Technology Insights Blog | Softcolon',
    description:
      'Stay ahead with expert insights on AI, automation, and digital transformation. Read our latest articles on artificial intelligence trends, business solutions, and technology innovations.',
    siteName: 'Softcolon Blog',
    url: 'https://softcolon.com/blogs',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://softcolon.com/blogs',
  },
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
      <head>{/* Add any additional head elements here */}</head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black-background`}
      >
        <BlogNav />
        {/* <LenisProvider>{children}</LenisProvider> */}
        {children}
        <Toaster />
      </body>
    </html>
  );
}
