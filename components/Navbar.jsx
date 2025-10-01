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
    { href: '/', label: 'Home', icon: '' },
    { href: '/projects', label: 'Projects', icon: '' },
    { href: '/services', label: 'Services', icon: '' },
    { href: '/skills', label: 'Skills', icon: '' },
    { href: '/blog', label: 'Blog', icon: '' },
    { href: '/contact', label: 'Contact', icon: '' },
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
          background: linear-gradient(-45deg, #60a5fa, #a78bfa, #34d399);
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'glass-nav shadow-lg border-b border-white/10'
            : 'glass-nav'
        }`}
      >
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-14'>
            {/* Logo Section */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.2,
                type: 'spring',
                stiffness: 200,
              }}
              whileHover={{ scale: 1.05 }}
              className='flex items-center gap-3 floating cursor-pointer'
            >
              {/* Avatar */}
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className='w-9 h-9 rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-green-400 p-0.5'
              >
                <div className='w-full h-full rounded-full bg-slate-800 flex items-center justify-center'>
                  <span className='text-sm font-bold text-white'>S</span>
                </div>
              </motion.div>

              {/* Name and Title */}
              <div className='flex flex-col'>
                <motion.h1
                  className='text-lg font-bold gradient-text glow-effect'
                  whileHover={{ scale: 1.05 }}
                >
                  Shanzy
                </motion.h1>
                <p className='text-xs text-slate-400 -mt-1'>PYTHON DEV</p>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className='hidden lg:flex items-center space-x-1'
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
                    className={`relative px-3 py-2 text-sm font-medium transition-all duration-200 rounded-lg group flex items-center gap-2 ${
                      pathname === item.href
                        ? 'text-white bg-slate-700/50 shadow-lg'
                        : 'text-slate-300 hover:text-white hover:bg-slate-700/30'
                    }`}
                  >
                    <motion.span
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ duration: 0.2 }}
                      className='text-xs'
                    >
                      {item.icon}
                    </motion.span>

                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.label}
                    </motion.span>

                    {/* Active indicator */}
                    {pathname === item.href && (
                      <motion.div
                        layoutId='activeNav'
                        className='absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg border border-blue-500/30'
                        transition={{ type: 'spring', duration: 0.6 }}
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.5,
                type: 'spring',
                stiffness: 200,
              }}
              className='hidden md:flex items-center gap-2'
            >
              {/* Sign In Button */}
              <motion.div
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href='/signin'
                  className='gradient-button px-5 py-2 rounded-lg text-white text-sm font-medium shadow-lg flex items-center gap-2'
                >
                  <span></span>
                  Sign In
                </Link>
              </motion.div>

              {/* Sign Up Button */}
              <motion.div
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href='/signup'
                  className='glass-card px-5 py-2 rounded-lg text-slate-300 hover:text-white text-sm font-medium transition-all duration-200 flex items-center gap-2'
                >
                  <span></span>
                  Sign Up
                </Link>
              </motion.div>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              initial={{ opacity: 0, rotate: 180 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              onClick={() => setIsOpen(!isOpen)}
              className='lg:hidden relative w-9 h-9 rounded-lg bg-slate-700/50 border border-slate-600 flex items-center justify-center focus:outline-none'
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className='w-5 h-5 relative'>
                <motion.span
                  animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  className='absolute top-1 left-0 w-5 h-0.5 bg-white rounded-full'
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                  className='absolute top-2.5 left-0 w-5 h-0.5 bg-white rounded-full'
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  animate={
                    isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }
                  }
                  className='absolute top-4 left-0 w-5 h-0.5 bg-white rounded-full'
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className='lg:hidden bg-slate-900/95 backdrop-blur-xl border-t border-slate-700/50'
            >
              <motion.div
                initial='hidden'
                animate='visible'
                exit='hidden'
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.1 },
                  },
                }}
                className='flex flex-col px-4 py-4 space-y-2'
              >
                {navItems.map((item) => (
                  <motion.div
                    key={item.href}
                    variants={{
                      hidden: { x: -20, opacity: 0 },
                      visible: { x: 0, opacity: 1 },
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                        pathname === item.href
                          ? 'bg-slate-700/50 text-white border border-slate-600'
                          : 'text-slate-300 hover:bg-slate-700/30 hover:text-white'
                      }`}
                    >
                      <span className='text-base'>{item.icon}</span>
                      {item.label}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  variants={{
                    hidden: { x: -20, opacity: 0 },
                    visible: { x: 0, opacity: 1 },
                  }}
                  className='flex flex-col gap-2 pt-4'
                >
                  <Link
                    href='/signin'
                    onClick={() => setIsOpen(false)}
                    className='flex items-center justify-center gap-2 px-4 py-3 rounded-lg gradient-button text-white font-medium'
                  >
                    <span></span>
                    Sign In
                  </Link>
                  <Link
                    href='/signup'
                    onClick={() => setIsOpen(false)}
                    className='flex items-center justify-center gap-2 px-4 py-3 rounded-lg glass-card text-slate-300 font-medium hover:text-white'
                  >
                    <span></span>
                    Sign Up
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
