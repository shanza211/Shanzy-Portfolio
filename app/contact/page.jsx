'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='min-h-screen bg-black'>
      {/* Hero Section */}
      <section className='relative py-20 px-4 sm:px-6 lg:px-8 pt-32'>
        <div className='max-w-7xl mx-auto text-center'>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='text-gray-400 text-sm font-medium mb-4'
          >
            Shanzy Saleem/Contact
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className='text-4xl md:text-5xl lg:text-6xl font-bold mb-8'
          >
            Contact
          </motion.h1>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className='relative py-12 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
            {/* Left - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className='text-gray-400 mb-4'>Get In Touch</p>
              <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-8'>
                Let&apos;s Talk For your<br /><span className='text-[#c9f31d]'>Next Projects</span>
              </h2>

              <div className='space-y-6 mb-8'>
                <div>
                  <h3 className='text-white font-semibold mb-2'>Contact Me</h3>
                  <div className='flex items-center gap-2 text-gray-400'>
                    <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
                      <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
                      <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
                    </svg>
                    <a href='mailto:shanzysaleem8@gmail.com' className='hover:text-[#c9f31d] transition-colors'>
                      shanzysaleem8@gmail.com
                    </a>
                  </div>
                </div>

                <div>
                  <div className='flex items-center gap-2 text-gray-400'>
                    <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
                      <path d='M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z' />
                    </svg>
                    <a href='tel:+923467394923' className='hover:text-[#c9f31d] transition-colors'>
                      +92 346 7394923
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <h3 className='text-white font-semibold mb-4'>Follow Me</h3>
                <div className='flex gap-4'>
                  <a
                    href='#'
                    className='w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-white hover:text-black transition-colors'
                  >
                    <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                      <path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' />
                    </svg>
                  </a>
                  <a
                    href='#'
                    className='w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-white hover:text-black transition-colors'
                  >
                    <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                      <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z' />
                      <path d='M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
                    </svg>
                  </a>
                  <a
                    href='#'
                    className='w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-white hover:text-black transition-colors'
                  >
                    <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                      <path d='M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' />
                    </svg>
                  </a>
                  <a
                    href='#'
                    className='w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-white hover:text-black transition-colors'
                  >
                    <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                      <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <form onSubmit={handleSubmit} className='space-y-6'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div>
                    <label htmlFor='fullName' className='block text-white font-medium mb-2'>
                      Full Name <span className='text-[#c9f31d]'>*</span>
                    </label>
                    <input
                      type='text'
                      id='fullName'
                      name='fullName'
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      placeholder='Shanzy Saleem'
                      className='w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#c9f31d] transition-colors'
                    />
                  </div>

                  <div>
                    <label htmlFor='email' className='block text-white font-medium mb-2'>
                      Email Address <span className='text-[#c9f31d]'>*</span>
                    </label>
                    <input
                      type='email'
                      id='email'
                      name='email'
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder='hello@example.com'
                      className='w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#c9f31d] transition-colors'
                    />
                  </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div>
                    <label htmlFor='phone' className='block text-white font-medium mb-2'>
                      Phone Number <span className='text-[#c9f31d]'>*</span>
                    </label>
                    <input
                      type='tel'
                      id='phone'
                      name='phone'
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder='+92 346 7394923'
                      className='w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#c9f31d] transition-colors'
                    />
                  </div>

                  <div>
                    <label htmlFor='subject' className='block text-white font-medium mb-2'>
                      Subject <span className='text-[#c9f31d]'>*</span>
                    </label>
                    <input
                      type='text'
                      id='subject'
                      name='subject'
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder='I Would Like to Discuss'
                      className='w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#c9f31d] transition-colors'
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor='message' className='block text-white font-medium mb-2'>
                    Textarea <span className='text-[#c9f31d]'>*</span>
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder='Write message'
                    className='w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#c9f31d] transition-colors resize-none'
                  />
                </div>

                <button
                  type='submit'
                  disabled={isSubmitting}
                  className='w-full bg-[#c9f31d] hover:bg-white text-black hover:text-black px-8 py-4 rounded-full font-bold text-base transition-all duration-300 shadow-lg hover:shadow-white/50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2'
                >
                  {isSubmitting ? 'Sending...' : 'Send Us Message'}
                  <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                  </svg>
                </button>

                {submitStatus === 'success' && (
                  <p className='text-[#c9f31d] text-center'>Message sent successfully!</p>
                )}
                {submitStatus === 'error' && (
                  <p className='text-red-500 text-center'>Failed to send message. Please try again.</p>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
