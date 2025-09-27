'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
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
    { name: 'UI/UX Design', icon: '🎨', level: '95%' },
    { name: 'Python', icon: '🐍', level: '90%' },
    { name: 'Figma', icon: '🎯', level: '98%' },
    { name: 'React/Next.js', icon: '⚛️', level: '85%' },
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
      <section className='relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8'>
        <motion.div
          variants={containerVariants}
          initial='hidden'
          animate='visible'
          className='max-w-4xl mx-auto text-center'
        >
          <motion.div variants={itemVariants}>
            <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold'>
              Hi, I'm{' '}
              <span className='bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent'>
                Shanzy
              </span>
            </h1>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className='mt-6 text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto'
          >
            UI/UX Designer • Python Developer • Figma Expert
          </motion.p>

          <motion.p
            variants={itemVariants}
            className='mt-4 text-lg text-gray-400 max-w-3xl mx-auto'
          >
            Crafting beautiful, functional digital experiences with modern
            design principles and cutting-edge technology. Specializing in
            glassmorphism aesthetics and user-centered solutions.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className='mt-10 flex flex-col sm:flex-row gap-4 justify-center'
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href='/projects'
                className='inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 shadow-lg hover:shadow-cyan-500/25'
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
                className='inline-flex items-center px-8 py-3 border border-white/20 text-base font-medium rounded-xl text-white glass hover:bg-white/10 transition-all duration-200'
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
                    d='M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
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
            className='absolute top-20 left-10 w-20 h-20 glass rounded-full opacity-20'
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
            className='absolute top-40 right-20 w-16 h-16 glass rounded-full opacity-30'
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
            <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
              Skills & Expertise
            </h2>
            <p className='text-gray-400 max-w-2xl mx-auto'>
              Specialized in modern design and development technologies
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className='glass-card p-6 rounded-2xl'
              >
                <div className='text-3xl mb-4'>{skill.icon}</div>
                <h3 className='text-lg font-semibold text-white mb-2'>
                  {skill.name}
                </h3>
                <div className='w-full bg-white/10 rounded-full h-2 mb-2'>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: skill.level }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className='bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full'
                  />
                </div>
                <span className='text-sm text-gray-400'>{skill.level}</span>
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
            <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
              Featured Projects
            </h2>
            <p className='text-gray-400 max-w-2xl mx-auto'>
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
                whileHover={{ y: -10 }}
                className='glass-card rounded-2xl overflow-hidden group'
              >
                <div className='aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 relative overflow-hidden'>
                  <div className='absolute inset-0 flex items-center justify-center'>
                    <div className='text-6xl opacity-50'>🚀</div>
                  </div>
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
                className='inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 shadow-lg hover:shadow-cyan-500/25'
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
