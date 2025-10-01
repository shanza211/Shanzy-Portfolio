'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Home() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const titles = [
    'UI/UX Designer',
    'Python Developer',
    'Figma Expert',
    'WordPress Developer',
    'Photoshop Specialist',
  ];

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];
    const typingSpeed = isDeleting ? 100 : 150;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < currentTitle.length) {
          setCurrentText(currentTitle.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentTitleIndex, titles]);

  const cursor = '|';
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const skills = [
    {
      name: 'UI/UX Design',
      icon: '🎨',
      description:
        'Creating intuitive and beautiful user interfaces with modern design principles and user-centered approach.',
      level: '95%',
    },
    {
      name: 'Python Development',
      icon: '🐍',
      description:
        'Building robust applications and automation scripts with clean, efficient Python code and best practices.',
      level: '90%',
    },
    {
      name: 'Figma Design',
      icon: '🎯',
      description:
        "Crafting pixel-perfect designs and interactive prototypes using Figma's advanced features and components.",
      level: '98%',
    },
    {
      name: 'React/Next.js',
      icon: '⚛️',
      description:
        'Developing fast, scalable web applications with React ecosystem and Next.js framework.',
      level: '85%',
    },
    {
      name: 'WordPress Development',
      icon: '🌐',
      description:
        'Custom WordPress themes and plugins development with PHP, ensuring optimal performance.',
      level: '88%',
    },
    {
      name: 'Adobe Photoshop',
      icon: '🖌️',
      description:
        'Professional photo editing, digital art creation, and graphic design using advanced Photoshop techniques.',
      level: '92%',
    },
  ];

  const featuredProjects = [
    {
      title: 'Amazon FBA Dashboard',
      description:
        'Advanced analytics platform for Amazon sellers with real-time insights and performance tracking.',
      image: '/project-1.jpg',
      tags: ['Python', 'React', 'AWS'],
      link: '/projects/amazon-fba',
    },
    {
      title: 'Glassmorphism Design System',
      description:
        'Complete design system with reusable components featuring modern glassmorphism aesthetics.',
      image: '/project-2.jpg',
      tags: ['Figma', 'Design System', 'UI/UX'],
      link: '/projects/design-system',
    },
  ];

  return (
    <div className='min-h-screen'>
      {/* Hero Section */}
      <section className='relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20'>
        <motion.div
          variants={containerVariants}
          initial='hidden'
          animate='visible'
          className='max-w-4xl mx-auto text-center'
        >
          <motion.div variants={itemVariants}>
            <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold mb-6'>
              Hi, I'm <span className='gradient-text glow-effect'>Shanzy</span>
            </h1>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className='mt-6 text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto min-h-[2rem]'
          >
            <span className='inline-flex items-center'>
              {currentText}
              <span className='animate-pulse ml-1 text-blue-400'>{cursor}</span>
            </span>
          </motion.p>

          <motion.p
            variants={itemVariants}
            className='mt-4 text-lg text-gray-400 max-w-3xl mx-auto'
          >
            Crafting beautiful, functional digital experiences with modern
            design principles and cutting-edge technology. Specializing in
            glassmorphism aesthetics and user-centered solutions.
          </motion.p>

          {/* Hero Stats */}
          <motion.div
            variants={itemVariants}
            className='mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12'
          >
            <div className='hero-stats py-6'>
              <div className='text-3xl md:text-4xl font-bold gradient-text mb-2'>
                50+
              </div>
              <div className='text-sm text-gray-400 font-medium'>Projects</div>
            </div>
            <div className='hero-stats py-6'>
              <div className='text-3xl md:text-4xl font-bold gradient-text mb-2'>
                3+
              </div>
              <div className='text-sm text-gray-400 font-medium'>Years Exp</div>
            </div>
            <div className='hero-stats py-6'>
              <div className='text-3xl md:text-4xl font-bold gradient-text mb-2'>
                100%
              </div>
              <div className='text-sm text-gray-400 font-medium'>
                Client
                <br />
                Satisfaction
              </div>
            </div>
            <div className='hero-stats py-6'>
              <div className='text-3xl md:text-4xl font-bold gradient-text mb-2'>
                24/7
              </div>
              <div className='text-sm text-gray-400 font-medium'>Support</div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className='flex flex-col sm:flex-row gap-6 justify-center'
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href='/projects'
                className='gradient-button inline-flex items-center px-10 py-4 text-lg font-medium rounded-xl text-white shadow-lg min-w-[180px] justify-center'
              >
                View My Work
                <svg
                  className='ml-2 w-5 h-5'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9 5l7 7-7 7'
                  />
                </svg>
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href='/contact'
                className='glass-card inline-flex items-center px-10 py-4 text-lg font-medium rounded-xl text-white hover:bg-white/10 transition-all duration-200 min-w-[180px] justify-center'
              >
                Let's Connect
                <svg
                  className='ml-2 w-5 h-5'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
                  />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Floating Elements */}
        <div className='absolute inset-0 overflow-hidden pointer-events-none'>
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className='absolute top-20 left-10 w-20 h-20 rounded-full opacity-20'
            style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            }}
          />
          <motion.div
            animate={{
              y: [0, 20, 0],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className='absolute top-40 right-20 w-16 h-16 rounded-full opacity-30'
            style={{
              background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
            }}
          />
          <motion.div
            animate={{
              y: [0, 15, 0],
              rotate: [0, -3, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className='absolute bottom-20 left-1/4 w-12 h-12 rounded-full opacity-25'
            style={{
              background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
            }}
          />
        </div>
      </section>

      {/* Skills Section */}
      <section className='py-20 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-6xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <h2 className='section-title text-3xl md:text-4xl font-bold mb-6'>
              Skills & Expertise
            </h2>
            <p className='text-gray-400 max-w-2xl mx-auto text-lg'>
              Specialized in modern design and development technologies
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className='glass-card p-8 rounded-2xl text-center group hover:border-blue-500/30 transition-all duration-300'
              >
                <motion.div
                  className='w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-400 via-purple-500 to-green-400 rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300'
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {skill.icon}
                </motion.div>
                <h3 className='text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300'>
                  {skill.name}
                </h3>
                <p className='text-gray-400 text-sm leading-relaxed mb-6 min-h-[4rem]'>
                  {skill.description}
                </p>
                <div className='w-full bg-white/10 rounded-full h-2 mb-3 overflow-hidden'>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: skill.level }}
                    transition={{ duration: 1.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className='h-2 bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 rounded-full'
                  />
                </div>
                <span className='text-sm font-medium bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 bg-clip-text text-transparent'>
                  {skill.level}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className='py-20 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-6xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <h2 className='section-title text-3xl md:text-4xl font-bold mb-6'>
              Featured Projects
            </h2>
            <p className='text-gray-400 max-w-2xl mx-auto text-lg'>
              A showcase of my recent work combining design excellence with
              technical innovation
            </p>
          </motion.div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -15, scale: 1.02 }}
                className='project-card rounded-2xl overflow-hidden group'
              >
                <div
                  className='aspect-video relative overflow-hidden'
                  style={{
                    background:
                      'linear-gradient(135deg, rgba(102, 126, 234, 0.2) 0%, rgba(118, 75, 162, 0.2) 100%)',
                  }}
                >
                  <div className='absolute inset-0 flex items-center justify-center'>
                    <div className='text-6xl opacity-70 floating'>🚀</div>
                  </div>
                  <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent'></div>
                </div>
                <div className='p-6'>
                  <h3 className='text-xl font-semibold text-white mb-2'>
                    {project.title}
                  </h3>
                  <p className='text-gray-400 mb-4'>{project.description}</p>
                  <div className='flex flex-wrap gap-2 mb-4'>
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className='px-3 py-1 text-xs font-medium bg-white/10 text-gray-300 rounded-full'
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={project.link}
                    className='inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200'
                  >
                    View Project
                    <svg
                      className='ml-1 w-4 h-4'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M9 5l7 7-7 7'
                      />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className='text-center mt-12'
          >
            <Link
              href='/projects'
              className='inline-flex items-center px-6 py-3 border border-white/20 text-base font-medium rounded-xl text-white glass hover:bg-white/10 transition-all duration-200'
            >
              View All Projects
              <svg
                className='ml-2 w-5 h-5'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M13 7l5 5m0 0l-5 5m5-5H6'
                />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section id='contact' className='py-20 px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='max-w-4xl mx-auto text-center'
        >
          <div className='glass-card p-12 rounded-3xl'>
            <h2 className='text-3xl md:text-4xl font-bold text-white mb-6'>
              Ready to bring your ideas to life?
            </h2>
            <p className='text-xl text-gray-300 mb-8 max-w-2xl mx-auto'>
              Let's collaborate on creating something amazing together. I'm
              always excited to work on new challenges.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href='/contact'
                className='gradient-button inline-flex items-center px-8 py-4 text-white font-medium rounded-xl transition-all duration-200 shadow-lg'
              >
                Start a Project
                <svg
                  className='ml-2 w-5 h-5'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M17 8l4 4m0 0l-4 4m4-4H3'
                  />
                </svg>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
