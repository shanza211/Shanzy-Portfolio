'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className='sticky top-0 z-50 glass border-b border-white/10'
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href='/'
              className='text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent'
            >
              Shanzy
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className='hidden md:block'>
            <div className='ml-10 flex items-baseline space-x-1'>
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    pathname === item.href
                      ? 'bg-white/20 text-white shadow-lg'
                      : 'text-gray-300 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className='hidden md:block'>
            <motion.a
              href='#contact'
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 20px rgba(14, 165, 233, 0.4)',
              }}
              whileTap={{ scale: 0.95 }}
              className='inline-flex items-center px-4 py-2 border border-blue-500/50 rounded-lg text-sm font-medium text-white bg-blue-500/20 hover:bg-blue-500/30 transition-all duration-200'
            >
              Let's Talk
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <div className='md:hidden'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 transition-colors duration-200'
            >
              <span className='sr-only'>Open main menu</span>
              <div className='w-6 h-6 relative'>
                <span
                  className={`absolute block h-0.5 w-6 bg-current transform transition duration-200 ease-in-out ${
                    isOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1'
                  }`}
                />
                <span
                  className={`absolute block h-0.5 w-6 bg-current transform transition duration-200 ease-in-out ${
                    isOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span
                  className={`absolute block h-0.5 w-6 bg-current transform transition duration-200 ease-in-out ${
                    isOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          height: isOpen ? 'auto' : 0,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className='md:hidden overflow-hidden glass-card border-t border-white/10'
      >
        <div className='px-2 pt-2 pb-3 space-y-1'>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                pathname === item.href
                  ? 'bg-white/20 text-white'
                  : 'text-gray-300 hover:bg-white/10 hover:text-white'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <motion.a
            href='#contact'
            onClick={() => setIsOpen(false)}
            whileTap={{ scale: 0.95 }}
            className='block w-full mt-4 px-3 py-2 border border-blue-500/50 rounded-md text-center text-base font-medium text-white bg-blue-500/20 hover:bg-blue-500/30 transition-all duration-200'
          >
            Let's Talk
          </motion.a>
        </div>
      </motion.div>
    </motion.nav>
  );
}
