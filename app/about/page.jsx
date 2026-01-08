'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function About() {
  return (
    <div className='min-h-screen bg-black'>
      {/* Hero Section */}
      <section className='relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 pt-20'>
        <div className='max-w-7xl mx-auto w-full'>
          {/* Breadcrumb */}
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='text-gray-400 text-sm font-medium mb-8'
          >
            Shanzy Saleem / About
          </motion.p>
          
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center'>
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className='text-left'
            >
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className='text-gray-400 text-lg mb-3'
              >
                Hello, I&apos;m
              </motion.p>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className='text-5xl md:text-6xl lg:text-7xl font-bold mb-6'
              >
                <span className='text-white'>Shanzy Saleem</span>
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className='text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-6'
              >
                UI/UX Designer
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className='text-gray-400 text-base md:text-lg leading-relaxed mb-10 max-w-xl'
              >
                Transforming Ideas into Beautiful Digital Experiences with Modern UI/UX Design, 
                Figma Prototyping, SEO Optimization, and Web Developer.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className='flex flex-wrap gap-4'
              >
                <Link
                  href='/contact'
                  className='bg-[#0a3a39] hover:bg-[#0d6665] text-white px-8 py-4 rounded-full font-medium text-base transition-all duration-300 inline-flex items-center gap-2 shadow-lg hover:shadow-[#0a3a39]/50'
                >
                  Hire Me
                  <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                  </svg>
                </Link>
                
                <Link
                  href='/projects'
                  className='border-2 border-[#0a3a39] text-[#0a3a39] hover:bg-[#0a3a39] hover:text-white px-8 py-4 rounded-full font-medium text-base transition-all duration-300 inline-flex items-center gap-2'
                >
                  Portfolio
                  <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                  </svg>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Stats */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className='space-y-8'
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className='text-left'
              >
                <h3 className='text-5xl md:text-6xl font-bold text-[#0a3a39] mb-2'>30+</h3>
                <p className='text-gray-400 text-base'>Happy Clients</p>
              </motion.div>

              <div className='w-full h-px bg-gray-800' />

              <motion.div
                whileHover={{ scale: 1.05 }}
                className='text-left'
              >
                <h3 className='text-5xl md:text-6xl font-bold text-[#0a3a39] mb-2'>25+</h3>
                <p className='text-gray-400 text-base'>Positive Reviews</p>
              </motion.div>

              <div className='w-full h-px bg-gray-800' />

              <motion.div
                whileHover={{ scale: 1.05 }}
                className='text-left'
              >
                <h3 className='text-5xl md:text-6xl font-bold text-[#0a3a39] mb-2'>100%</h3>
                <p className='text-gray-400 text-base'>Client Satisfactions</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className='relative py-20 px-4 sm:px-6 lg:px-8 bg-black'>
        <div className='max-w-7xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <p className='text-gray-400 text-sm font-medium mb-4'>What I Offer</p>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold'>
              My <span className='text-[#0a3a39]'>Special Service</span> For your<br />Business Development
            </h2>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {/* Service 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className='bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-8 hover:border-[#0a3a39] transition-all duration-300'
            >
              <div className='flex items-start gap-4 mb-4'>
                <span className='text-3xl'>01</span>
                <h3 className='text-2xl font-bold text-white'>UI/UX Design</h3>
              </div>
              <p className='text-gray-400 leading-relaxed'>
                I design user-friendly interfaces that are both beautiful and functional. Using modern design principles and user research, I create experiences that delight users and achieve business goals. From wireframes to high-fidelity prototypes, I handle every aspect of the design process.
              </p>
            </motion.div>

            {/* Service 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className='bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-8 hover:border-[#0a3a39] transition-all duration-300'
            >
              <div className='flex items-start gap-4 mb-4'>
                <span className='text-3xl'>02</span>
                <h3 className='text-2xl font-bold text-white'>Website Design</h3>
              </div>
              <p className='text-gray-400 leading-relaxed'>
                I develop custom websites that help you only increase, we are building trust and partnerships. Great Websites & Apps, Great Business Relationships. I build websites that load fast and rank well on Google. Using the latest web technologies and SEO best practices, I create online presences that attract customers and achieve your business goals.
              </p>
            </motion.div>

            {/* Service 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className='bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-8 hover:border-[#0a3a39] transition-all duration-300'
            >
              <div className='flex items-start gap-4 mb-4'>
                <span className='text-3xl'>03</span>
                <h3 className='text-2xl font-bold text-white'>Figma Prototyping</h3>
              </div>
              <p className='text-gray-400 leading-relaxed'>
                By crafting lively targeted UX campaigns, I elevate your brand with measurable, impactful user experiences. Through data-driven design, click-worthy app layouts, and compelling visuals, I transform clicks into meaningful engagement and drive results.
              </p>
            </motion.div>

            {/* Service 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className='bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-8 hover:border-[#0a3a39] transition-all duration-300'
            >
              <div className='flex items-start gap-4 mb-4'>
                <span className='text-3xl'>04</span>
                <h3 className='text-2xl font-bold text-white'>SEO Optimization</h3>
              </div>
              <p className='text-gray-400 leading-relaxed'>
                I write high-quality, Search-Optimized SEO content that engages audiences and increases your revenue. Whether it&apos;s blog posts, website copy, or social media content, I create compelling narratives that resonate with your target audience and boost your online presence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Professional Services Section */}
      <section className='relative py-20 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto'>
          <div className='max-w-3xl mx-auto'>
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className='text-gray-400 text-sm font-medium mb-4'>Frequently Asked Question</p>
              <h2 className='text-3xl md:text-4xl font-bold mb-8'>
                Professional Services For <span className='text-[#0a3a39]'>Your</span><br />Business Growth
              </h2>

              <div className='space-y-4'>
                <div className='flex items-start gap-3'>
                  <div className='w-6 h-6 rounded-full bg-[#0a3a39] flex items-center justify-center flex-shrink-0 mt-1'>
                    <svg className='w-3 h-3 text-white' fill='currentColor' viewBox='0 0 20 20'>
                      <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                    </svg>
                  </div>
                  <p className='text-white font-medium'>What services do you offer?</p>
                </div>

                <div className='flex items-start gap-3'>
                  <div className='w-6 h-6 rounded-full bg-[#0a3a39] flex items-center justify-center flex-shrink-0 mt-1'>
                    <svg className='w-3 h-3 text-white' fill='currentColor' viewBox='0 0 20 20'>
                      <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                    </svg>
                  </div>
                  <p className='text-white font-medium'>How much experience do you have?</p>
                </div>

                <div className='flex items-start gap-3'>
                  <div className='w-6 h-6 rounded-full bg-[#0a3a39] flex items-center justify-center flex-shrink-0 mt-1'>
                    <svg className='w-3 h-3 text-white' fill='currentColor' viewBox='0 0 20 20'>
                      <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                    </svg>
                  </div>
                  <p className='text-white font-medium'>What can you start from your digital campaign?</p>
                </div>

                <div className='flex items-start gap-3'>
                  <div className='w-6 h-6 rounded-full bg-[#0a3a39] flex items-center justify-center flex-shrink-0 mt-1'>
                    <svg className='w-3 h-3 text-white' fill='currentColor' viewBox='0 0 20 20'>
                      <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                    </svg>
                  </div>
                  <p className='text-white font-medium'>What kind of results can clients expect from your services?</p>
                </div>

                <div className='flex items-start gap-3'>
                  <div className='w-6 h-6 rounded-full bg-[#0a3a39] flex items-center justify-center flex-shrink-0 mt-1'>
                    <svg className='w-3 h-3 text-white' fill='currentColor' viewBox='0 0 20 20'>
                      <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                    </svg>
                  </div>
                  <p className='text-white font-medium'>How can I get started working with you?</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className='relative py-20 px-4 sm:px-6 lg:px-8 bg-black'>
        <div className='max-w-7xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <p className='text-gray-400 text-sm font-medium mb-4'>Testimonials</p>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold'>
              Over 120+ Clients<br /><span className='text-[#0a3a39]'>Positive</span> Feedback
            </h2>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {/* Testimonial 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className='bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-8'
            >
              <div className='flex items-center gap-3 mb-4'>
                <div className='w-12 h-12 rounded-full bg-[#0a3a39] flex items-center justify-center text-2xl'>
                  👤
                </div>
                <div>
                  <h4 className='text-white font-bold'>Omar Sheikh</h4>
                  <p className='text-gray-400 text-sm'>CEO, Tech Startup</p>
                </div>
              </div>
              <p className='text-gray-400 leading-relaxed'>
                &quot;I appreciate their track for website development, and I&apos;m doing interested with the best. I am very Impressive by their outstanding work. The UI/UX are Responsive & Mobile First Development.&quot;
              </p>
            </motion.div>

            {/* Testimonial 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className='bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-8'
            >
              <div className='flex items-center gap-3 mb-4'>
                <div className='w-12 h-12 rounded-full bg-[#0a3a39] flex items-center justify-center text-2xl'>
                  👤
                </div>
                <div>
                  <h4 className='text-white font-bold'>Sarah Johnson</h4>
                  <p className='text-gray-400 text-sm'>Founder, Design Studio</p>
                </div>
              </div>
              <p className='text-gray-400 leading-relaxed'>
                &quot;Well, earlier i&apos;ve thanked for website and digital campaigns, and I just don&apos;t know. Strongly Creating it & exactly what I needed to take my business to the next level, top-notch.&quot;
              </p>
            </motion.div>

            {/* Testimonial 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className='bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-8'
            >
              <div className='flex items-center gap-3 mb-4'>
                <div className='w-12 h-12 rounded-full bg-[#0a3a39] flex items-center justify-center text-2xl'>
                  👤
                </div>
                <div>
                  <h4 className='text-white font-bold'>Ahmad Hassan</h4>
                  <p className='text-gray-400 text-sm'>Director, Marketing Firm</p>
                </div>
              </div>
              <p className='text-gray-400 leading-relaxed'>
                &quot;I have gotten business professionally work delivered on time more than once & every time. Their professionalism and creativity make this work impressive.&quot;
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
