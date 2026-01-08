'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Portfolio' },
    { href: '/contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <style jsx>{`
        @keyframes gradient-shift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-2px);
          }
        }

        .gradient-text {
          background: linear-gradient(-45deg, #0a3a39, #0d6665, #0a3a39);
          background-size: 300% 300%;
          animation: gradient-shift 3s ease infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .floating {
          animation: float 2s ease-in-out infinite;
        }
      `}</style>

      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          ease: [0.25, 0.46, 0.45, 0.94],
          delay: 0.1,
        }}
        className='fixed top-0 left-0 right-0 z-[100] bg-black border-b border-gray-900'
      >
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-20'>
            {/* Logo Section */}
            <Link href='/'>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
                className='cursor-pointer'
              >
                <h1 className='text-xl md:text-2xl font-bold text-[#0a3a39]'>
                  ShanzySaleem
                </h1>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className='hidden lg:flex items-center space-x-8'
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <Link
                    href={item.href}
                    className={`text-base font-medium transition-all duration-200 ${
                      pathname === item.href
                        ? 'text-white'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            {/* LET'S TALK Button & Hamburger Menu */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.5,
                type: 'spring',
                stiffness: 200,
              }}
              className='flex items-center gap-4'
            >
              <span className='hidden lg:block text-sm font-semibold text-gray-300 uppercase tracking-wider'>
                LET'S TALK
              </span>
              
              {/* Hamburger Menu Button */}
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className='relative w-12 h-12 rounded-full bg-[#0a3a39] flex items-center justify-center focus:outline-none hover:bg-[#0d6665] transition-colors'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className='w-5 h-4 relative flex flex-col justify-between'>
                  <motion.span
                    animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                    className='w-full h-0.5 bg-white rounded-full'
                    transition={{ duration: 0.3 }}
                  />
                  <motion.span
                    animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                    className='w-full h-0.5 bg-white rounded-full'
                    transition={{ duration: 0.3 }}
                  />
                  <motion.span
                    animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                    className='w-full h-0.5 bg-white rounded-full'
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.nav>

      {/* Sidebar Menu - WaliShah Style - MOVED OUTSIDE NAV */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className='fixed inset-0 bg-black/70 backdrop-blur-sm z-[500]'
              onClick={() => setIsOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className='fixed top-0 right-0 bottom-0 w-full sm:w-96 bg-black z-[600] shadow-2xl overflow-y-auto border-l border-gray-800'
            >
                <div className='p-8 pt-20 text-center'>
                  {/* Close Button */}
                  <button
                    onClick={() => setIsOpen(false)}
                    className='absolute top-6 right-6 w-10 h-10 flex items-center justify-center text-[#0a3a39] hover:text-[#0d6665] transition-colors'
                  >
                    <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                    </svg>
                  </button>

                  {/* Logo/Title */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className='mb-8'
                  >
                    <h2 className='text-3xl md:text-4xl font-bold mb-3 text-[#0a3a39]'>
                      Shanzy Saleem
                    </h2>
                    <p className='text-gray-300 text-base md:text-lg font-medium mb-3'>
                      UI/UX Designer & Web Developer
                    </p>
                    <p className='text-gray-500 text-sm leading-relaxed mx-auto max-w-xs'>
                      Transforming Ideas into Beautiful Digital Experiences with Modern UI/UX Design, 
                      Figma, SEO, and Next.js Development.
                    </p>
                  </motion.div>

                  {/* Contact Section */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className='mb-8 border-t border-gray-800 pt-6'
                  >
                    <h3 className='text-white font-semibold mb-4 text-lg'>Contact Me</h3>
                    <div className='space-y-3 flex flex-col items-center'>
                      <a
                        href='mailto:shanzysaleem8@gmail.com'
                        className='flex items-center gap-3 text-gray-400 hover:text-[#0a3a39] transition-colors group'
                      >
                        <span className='text-[#0a3a39] text-lg'>📧</span>
                        <span className='text-sm'>shanzysaleem8@gmail.com</span>
                      </a>
                      <a
                        href='tel:+923467394923'
                        className='flex items-center gap-3 text-gray-400 hover:text-[#0a3a39] transition-colors group'
                      >
                        <span className='text-[#0a3a39] text-lg'>📱</span>
                        <span className='text-sm'>+92 346 7394923</span>
                      </a>
                    </div>
                  </motion.div>

                  {/* Follow Me Section */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className='border-t border-gray-800 pt-6'
                  >
                    <h3 className='text-white font-semibold mb-4 text-lg'>Follow Me</h3>
                    <div className='flex gap-4 justify-center'>
                      <a
                        href='https://www.facebook.com/share/1DN5CNCNkJ/'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-[#0a3a39] transition-colors group'
                      >
                        <svg className='w-6 h-6 text-black group-hover:text-white' fill='currentColor' viewBox='0 0 24 24'>
                          <path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z'/>
                        </svg>
                      </a>
                      <a
                        href='https://www.linkedin.com/in/shanzy-saleem-39064236a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-[#0a3a39] transition-colors group'
                      >
                        <svg className='w-6 h-6 text-black group-hover:text-white' fill='currentColor' viewBox='0 0 24 24'>
                          <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'/>
                        </svg>
                      </a>
                      <a
                        href='https://www.instagram.com/shanzysaleem211?igsh=MTdnNGNxMnN1M3c3Yw=='
                        target='_blank'
                        rel='noopener noreferrer'
                        className='w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-[#0a3a39] transition-colors group'
                      >
                        <svg className='w-6 h-6 text-black group-hover:text-white' fill='currentColor' viewBox='0 0 24 24'>
                          <path d='M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z'/>
                        </svg>
                      </a>
                      <a
                        href='https://www.tiktok.com/@shanzysaleem7?_r=1&_t=ZS-92uGkVQMruK'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-[#0a3a39] transition-colors group'
                      >
                        <svg className='w-6 h-6 text-black group-hover:text-white' fill='currentColor' viewBox='0 0 24 24'>
                          <path d='M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z'/>
                        </svg>
                      </a>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </>
          )}
      </AnimatePresence>
    </>
  );
}
