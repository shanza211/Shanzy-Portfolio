'use client';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function About() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [activeQuestion, setActiveQuestion] = useState(null);

  const testimonials = [
    {
      name: 'Omar Sheikh',
      role: 'CEO, Tech Startup',
      content: "I appreciate their track for website development, and I'm doing interested with the best. I am very Impressive by their outstanding work. The UI/UX are Responsive & Mobile First Development."
    },
    {
      name: 'Sarah Johnson',
      role: 'Founder, Design Studio',
      content: "Well, earlier i've thanked for website and digital campaigns, and I just don't know. Strongly Creating it & exactly what I needed to take my business to the next level, top-notch."
    },
    {
      name: 'Ahmad Hassan',
      role: 'Director, Marketing Firm',
      content: "I have gotten business professionally work delivered on time more than once & every time. Their professionalism and creativity make this work impressive."
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
  return (
    <div className='min-h-screen bg-black'>
      {/* Hero Section */}
      <section className='relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 pt-20 overflow-hidden'>
        {/* Background Decorative Elements */}
        <div className='absolute top-20 right-0 w-96 h-96 bg-[#c9f31d] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob'></div>
        <div className='absolute top-20 -left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000'></div>

        <div className='max-w-7xl mx-auto w-full relative z-10'>
          {/* Breadcrumb */}
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='text-gray-400 text-sm font-medium mb-8'
          >
            Shanzy Saleem / About
          </motion.p>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className='text-left'
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className='inline-block px-4 py-2 bg-[#c9f31d]/10 border border-[#c9f31d]/20 rounded-full mb-6'
              >
                <span className='text-[#c9f31d] font-semibold tracking-wide uppercase text-sm'>Creative Visionary</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className='text-5xl md:text-7xl font-bold mb-6 leading-tight'
              >
                Refining Digital <br />
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#c9f31d] to-emerald-400'>Excellence</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className='text-gray-400 text-lg leading-relaxed mb-10 max-w-xl'
              >
                I&apos;m Shanzy Saleem, a passionate UI/UX Designer and Web Developer who believes in the power of design to transform businesses. My mission is to create digital experiences that are not just visually stunning, but also intuitively functional and deeply engaging.
              </motion.p>

              {/* Stats Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className='grid grid-cols-3 gap-8 mb-10 border-t border-gray-800 pt-8'
              >
                <div>
                  <h3 className='text-3xl font-bold text-white mb-1'>2+</h3>
                  <p className='text-gray-500 text-sm'>Years Exp.</p>
                </div>
                <div>
                  <h3 className='text-3xl font-bold text-white mb-1'>50+</h3>
                  <p className='text-gray-500 text-sm'>Projects</p>
                </div>
                <div>
                  <h3 className='text-3xl font-bold text-white mb-1'>24/7</h3>
                  <p className='text-gray-500 text-sm'>Support</p>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className='flex flex-wrap gap-4'
              >
                <Link
                  href='/contact'
                  className='bg-[#c9f31d] hover:bg-white text-black hover:text-black px-8 py-4 rounded-full font-medium text-base transition-all duration-300 inline-flex items-center gap-2 shadow-lg hover:shadow-white/50 transform hover:-translate-y-1'
                >
                  Let&apos;s Talk
                  <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
                  </svg>
                </Link>

                <Link
                  href='/projects'
                  className='group px-8 py-4 rounded-full font-medium text-base border-2 border-white/10 hover:bg-white hover:text-black hover:border-white transition-all duration-300 inline-flex items-center gap-2'
                >
                  View Work
                  <svg className='w-4 h-4 group-hover:translate-x-1 transition-transform' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 7l5 5m0 0l-5 5m5-5H6' />
                  </svg>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Image/Visual */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className='relative'
            >
              <div className='relative z-10 bg-gradient-to-br from-gray-800 to-black p-8 rounded-3xl border border-gray-700 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500'>
                <div className='aspect-[4/3] rounded-2xl overflow-hidden bg-gray-900 relative'>
                  {/* Abstract Pattern or Image Placeholder */}
                  <Image
                    src='/shanzy-saleem.png'
                    alt='Shanzy Saleem - UI/UX Designer'
                    fill
                    className='object-cover'
                    priority
                  />
                </div>
                <div className='mt-6'>
                  <h3 className='text-2xl font-bold text-white mb-2'>Designing the Future</h3>
                  <p className='text-gray-400'>Crafting interfaces that bridge the gap between human needs and technological capabilities.</p>
                </div>
              </div>
              {/* Decorative shapes */}
              <div className='absolute -bottom-10 -left-10 w-40 h-40 bg-[#c9f31d] rounded-full mix-blend-overlay filter blur-2xl opacity-20'></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Me Section (New) */}
      <section className='relative py-20 px-4 sm:px-6 lg:px-8 bg-black'>
        <div className='max-w-7xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <h2 className='text-3xl md:text-5xl font-bold mb-6'>Why <span className='text-[#c9f31d]'>Choose Me?</span></h2>
            <p className='text-gray-400 max-w-2xl mx-auto'>I don&apos;t just design; I solve problems. Here&apos;s what sets me apart in the crowded digital landscape.</p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {[
              { title: 'Client-Centric', icon: '🤝', desc: 'Your vision is my priority. I work closely with you to ensure every pixel aligns with your brand goals.' },
              { title: 'Innovative', icon: '💡', desc: 'I stay ahead of trends to deliver modern, cutting-edge designs that give you a competitive edge.' },
              { title: 'Result-Oriented', icon: '📈', desc: 'My designs aren\'t just pretty; they convert. I focus on user flows that drive real business results.' }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className='bg-gray-900/50 p-8 rounded-2xl border border-gray-800 hover:border-[#c9f31d] transition-colors group'
              >
                <div className='text-4xl mb-4 group-hover:scale-110 transition-transform duration-300'>{item.icon}</div>
                <h3 className='text-xl font-bold text-white mb-3'>{item.title}</h3>
                <p className='text-gray-400'>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* My Journey Section (New) */}
      <section className='relative py-20 px-4 sm:px-6 lg:px-8 bg-black'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className='text-3xl md:text-5xl font-bold mb-8'>My <span className='text-[#c9f31d]'>Journey</span></h2>
              <div className='space-y-8 border-l-2 border-gray-800 ml-3 pl-8 relative'>
                {[
                  { year: '2024', title: 'Senior UI/UX Designer', desc: 'Leading design projects for international clients and refining my design system expertise.' },
                  { year: '2023', title: 'Full-Stack Developer', desc: 'Expanded into Next.js and React to build complete, functional web applications.' },
                  { year: '2022', title: 'Started Freelancing', desc: 'Began my journey on Upwork/Fiverr, helping startups launch their MVPs.' }
                ].map((item, i) => (
                  <div key={i} className='relative'>
                    <span className='absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-[#c9f31d] border-4 border-black'></span>
                    <span className='text-[#c9f31d] font-bold text-sm mb-1 block'>{item.year}</span>
                    <h3 className='text-xl font-bold text-white mb-2'>{item.title}</h3>
                    <p className='text-gray-400 text-sm'>{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className='bg-gray-900 rounded-2xl p-8 border border-gray-800'
            >
              <h3 className='text-2xl font-bold text-white mb-6'>Fun Facts</h3>
              <div className='grid grid-cols-2 gap-4'>
                {[
                  { label: 'Coffee Addict', val: '☕' },
                  { label: 'Pixel Perfect', val: '✨' },
                  { label: 'Night Owl', val: '🦉' },
                  { label: 'Tech Geek', val: '💻' }
                ].map((fact, i) => (
                  <div key={i} className='p-4 bg-black/50 rounded-xl text-center hover:bg-[#c9f31d]/10 transition-colors'>
                    <div className='text-2xl mb-2'>{fact.val}</div>
                    <div className='text-gray-300 font-medium'>{fact.label}</div>
                  </div>
                ))}
              </div>
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
              My <span className='text-[#c9f31d]'>Special Service</span> For your<br />Business Development
            </h2>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {/* Service 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className='bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-8 hover:border-[#c9f31d] transition-all duration-300'
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
              className='bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-8 hover:border-[#c9f31d] transition-all duration-300'
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
              className='bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-8 hover:border-[#c9f31d] transition-all duration-300'
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
              className='bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-8 hover:border-[#c9f31d] transition-all duration-300'
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

      {/* FAQ Section - Redesigned per user request */}
      <section className='relative py-20 px-4 sm:px-6 lg:px-8 bg-black'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-5 gap-12'>
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className='lg:col-span-2'
            >
              <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6'>
                <span className='w-2 h-2 rounded-full bg-[#c9f31d] animate-pulse' />
                <span className='text-sm font-medium text-white'>Frequently Asked Questions</span>
              </div>

              <h2 className='text-4xl md:text-5xl font-bold leading-tight mb-6'>
                FAQ It Up! Your curiosity meets our <span className='text-[#c9f31d]'>expertise</span> — let&apos;s clear things up!
              </h2>

              <p className='text-gray-400 text-lg'>
                I&apos;ve gathered all the important info right here. Explore my FAQs and find the answers you need to get started.
              </p>
            </motion.div>

            {/* Right Accordion */}
            <div className='lg:col-span-3 space-y-4'>
              {[
                {
                  q: 'What services do you offer?',
                  a: 'I specialize in UI/UX Design, Full-Stack Web Development, and SEO Optimization. I create custom websites, mobile apps, and digital strategies tailored to your business needs.'
                },
                {
                  q: 'How much experience do you have?',
                  a: 'I have over 2 years of professional experience working with international clients, startups, and established businesses, delivering high-quality digital solutions.'
                },
                {
                  q: 'What can you start from your digital campaign?',
                  a: 'We start with a comprehensive audit and strategy session. From there, we move to design/prototyping, development, and finally launch and optimization.'
                },
                {
                  q: 'What kind of results can clients expect from your services?',
                  a: 'Clients typically see improved user engagement, faster website performance, and higher conversion rates. My focus is always on delivering measurable ROI.'
                },
                {
                  q: 'How can I get started working with you?',
                  a: 'Simply click the "Hire Me" button or contact me directly through the details below. We will schedule a discovery call to discuss your goals!'
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${activeQuestion === index
                    ? 'bg-[#c9f31d]/10 border-[#c9f31d]'
                    : 'bg-gray-900/50 border-gray-800 hover:border-gray-700'
                    }`}
                >
                  <button
                    onClick={() => setActiveQuestion(activeQuestion === index ? null : index)}
                    className='w-full px-8 py-6 flex items-center justify-between gap-4 text-left'
                  >
                    <span className={`text-lg font-bold transition-colors ${activeQuestion === index ? 'text-[#c9f31d]' : 'text-white'
                      }`}>
                      {faq.q}
                    </span>
                    <span className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${activeQuestion === index
                      ? 'bg-[#c9f31d] border-[#c9f31d] text-black rotate-180'
                      : 'border-gray-600 text-gray-400'
                      }`}>
                      {activeQuestion === index ? (
                        <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M20 12H4' /></svg>
                      ) : (
                        <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 4v16m8-8H4' /></svg>
                      )}
                    </span>
                  </button>
                  <AnimatePresence>
                    {activeQuestion === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className='overflow-hidden'
                      >
                        <div className='px-8 pb-6 text-gray-400 leading-relaxed'>
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className='relative py-20 px-4 sm:px-6 lg:px-8 bg-black'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className='text-gray-400 text-sm font-medium mb-4'>Testimonials</p>
              <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-8'>
                Over 120+ Clients<br /><span className='text-[#c9f31d]'>Positive</span> Feedback
              </h2>
              <div className='flex gap-4'>
                <button
                  onClick={prevTestimonial}
                  className='w-12 h-12 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center hover:bg-white hover:border-white hover:text-black transition-all duration-300'
                >
                  <svg className='w-5 h-5 text-white hover:text-black' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 19l-7-7 7-7' />
                  </svg>
                </button>
                <button
                  onClick={nextTestimonial}
                  className='w-12 h-12 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center hover:bg-white hover:border-white hover:text-black transition-all duration-300'
                >
                  <svg className='w-5 h-5 text-white hover:text-black' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                  </svg>
                </button>
              </div>
            </motion.div>

            {/* Right - Testimonial Cards */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className='space-y-6'
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className='bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-8'
                >
                  <p className='text-gray-300 leading-relaxed mb-6'>
                    &quot;{testimonials[currentTestimonial].content}&quot;
                  </p>
                  <div className='flex items-center justify-between'>
                    <div>
                      <h4 className='text-white font-bold mb-1'>{testimonials[currentTestimonial].name}</h4>
                      <p className='text-[#c9f31d] text-sm'>{testimonials[currentTestimonial].role}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
