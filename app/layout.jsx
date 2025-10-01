import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  metadataBase: new URL('https://shanzy-portfolio.vercel.app'),
  title: 'Shanzy — UI/UX Designer & Python Developer',
  description:
    'Modern portfolio of Shanzy — UI/UX Designer, Python Developer, and Figma expert. Specializing in glassmorphism design and modern web applications.',
  keywords:
    'UI/UX Designer, Python Developer, Figma, Portfolio, Web Design, Glassmorphism',
  authors: [{ name: 'Shanzy' }],
  creator: 'Shanzy',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://shanzy-portfolio.vercel.app',
    title: 'Shanzy — UI/UX Designer & Python Developer',
    description:
      'Modern portfolio of Shanzy — UI/UX Designer, Python Developer, and Figma expert.',
    siteName: 'Shanzy Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Shanzy Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shanzy — UI/UX Designer & Python Developer',
    description:
      'Modern portfolio of Shanzy — UI/UX Designer, Python Developer, and Figma expert.',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body
        className={`${inter.className} bg-black text-white antialiased min-h-screen`}
      >
        <div className='min-h-screen flex flex-col relative'>
          {/* Background gradient */}
          <div className='fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black -z-10' />

          {/* Glassmorphism overlay */}
          <div className='fixed inset-0 bg-[radial-gradient(ellipse_at_top,rgba(14,165,233,0.1),transparent_50%)] -z-10' />

          <Navbar />
          <main className='flex-1 relative z-10'>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
