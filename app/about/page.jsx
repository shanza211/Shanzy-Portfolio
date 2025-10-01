'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
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

  const experiences = [
    {
      role: 'Senior UI/UX Designer',
      company: 'TechFlow Solutions',
      period: '2022 - Present',
      description:
        'Leading design initiatives for modern web applications, specializing in glassmorphism and user-centered design principles.',
      achievements: [
        'Designed 15+ successful web applications',
        'Improved user engagement by 40%',
        'Led a team of 3 junior designers',
      ],
    },
    {
      role: 'Python Developer',
      company: 'DataVision Inc.',
      period: '2021 - 2022',
      description:
        'Developed data analysis tools and automation scripts for business intelligence platforms.',
      achievements: [
        'Built 20+ automation scripts',
        'Reduced processing time by 60%',
        'Maintained 99.9% uptime for critical systems',
      ],
    },
    {
      role: 'Freelance Designer',
      company: 'Various Clients',
      period: '2020 - 2021',
      description:
        'Provided design and development services for startups and small businesses.',
      achievements: [
        'Completed 50+ projects',
        '5-star rating on all platforms',
        'Built long-term client relationships',
      ],
    },
  ];

  const tools = [
    { name: 'Figma', category: 'Design', proficiency: 98 },
    { name: 'Adobe Creative Suite', category: 'Design', proficiency: 92 },
    { name: 'Python', category: 'Development', proficiency: 90 },
    { name: 'React/Next.js', category: 'Development', proficiency: 85 },
    { name: 'Flask/Django', category: 'Backend', proficiency: 88 },
    { name: 'PostgreSQL', category: 'Database', proficiency: 82 },
    { name: 'AWS', category: 'Cloud', proficiency: 78 },
    { name: 'Git/GitHub', category: 'Tools', proficiency: 95 },
  ];

  const values = [
    {
      title: 'User-Centered Design',
      description:
        'Every design decision is made with the end user in mind, ensuring intuitive and accessible experiences.',
      icon: '👥',
    },
    {
      title: 'Clean Code',
      description:
        'Writing maintainable, scalable, and efficient code that stands the test of time.',
      icon: '💻',
    },
    {
      title: 'Continuous Learning',
      description:
        'Staying updated with the latest technologies and design trends to deliver cutting-edge solutions.',
      icon: '📚',
    },
    {
      title: 'Collaboration',
      description:
        'Working closely with teams and clients to bring visions to life through effective communication.',
      icon: '🤝',
    },
  ];

  return (
    <div className='min-h-screen pt-20'>
      {/* Hero Section */}
      <section className='py-20 px-4 sm:px-6 lg:px-8'>
        <motion.div
          variants={containerVariants}
          initial='hidden'
          animate='visible'
          className='max-w-6xl mx-auto'
        >
          <motion.div variants={itemVariants} className='text-center mb-16'>
            <h1 className='section-title text-4xl md:text-5xl font-bold mb-6'>
              About Me
            </h1>
            <p className='text-xl text-gray-400 max-w-3xl mx-auto'>
              Passionate designer and developer creating meaningful digital
              experiences that bridge the gap between beautiful design and
              functional technology.
            </p>
          </motion.div>

          {/* Story Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='mb-20'
          >
            <div className='glass-card p-8 md:p-12 rounded-3xl'>
              <h2 className='text-3xl font-bold text-white mb-6'>My Journey</h2>
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
                <div>
                  <p className='text-gray-300 text-lg leading-relaxed mb-6'>
                    My journey began with a fascination for how design and
                    technology intersect to solve real-world problems. Starting
                    as a self-taught designer, I quickly discovered the power of
                    combining beautiful interfaces with robust backend systems.
                  </p>
                  <p className='text-gray-300 text-lg leading-relaxed mb-6'>
                    A turning point in my journey was the guidance of my
                    incredible mentors—Sir Suheer and Sir Burhan. Their wisdom,
                    support, and motivation not only helped me excel in design
                    and development but also inspired me to believe in myself. I
                    truly consider them the best teachers I could have wished
                    for.
                  </p>
                  <p className='text-gray-300 text-lg leading-relaxed'>
                    Today, I continue to push the boundaries of what's possible
                    in web design, particularly in the realm of glassmorphism
                    and modern UI patterns, while maintaining a strong focus on
                    performance and accessibility.
                  </p>
                </div>
                <div className='space-y-6'>
                  <div className='glass-card p-6 rounded-2xl'>
                    <h3 className='text-xl font-semibold text-white mb-2'>
                      4+ Years
                    </h3>
                    <p className='text-gray-400'>Professional Experience</p>
                  </div>
                  <div className='glass-card p-6 rounded-2xl'>
                    <h3 className='text-xl font-semibold text-white mb-2'>
                      100+ Projects
                    </h3>
                    <p className='text-gray-400'>Successfully Delivered</p>
                  </div>
                  <div className='glass-card p-6 rounded-2xl'>
                    <h3 className='text-xl font-semibold text-white mb-2'>
                      50+ Clients
                    </h3>
                    <p className='text-gray-400'>Worldwide</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Experience Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='mb-20'
          >
            <h2 className='text-3xl font-bold text-white mb-12 text-center'>
              Professional Experience
            </h2>
            <div className='space-y-8'>
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className='glass-card p-8 rounded-2xl'
                >
                  <div className='flex flex-col md:flex-row md:items-start gap-6'>
                    <div className='md:w-1/3'>
                      <h3 className='text-xl font-semibold text-white mb-2'>
                        {exp.role}
                      </h3>
                      <p className='text-blue-400 font-medium mb-2'>
                        {exp.company}
                      </p>
                      <p className='text-gray-400 text-sm'>{exp.period}</p>
                    </div>
                    <div className='md:w-2/3'>
                      <p className='text-gray-300 mb-4'>{exp.description}</p>
                      <div className='space-y-2'>
                        {exp.achievements.map((achievement, achIndex) => (
                          <div
                            key={achIndex}
                            className='flex items-center text-gray-400'
                          >
                            <span className='text-green-400 mr-2'>✓</span>
                            {achievement}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Tools & Technologies */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='mb-20'
          >
            <h2 className='text-3xl font-bold text-white mb-12 text-center'>
              Tools & Technologies
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className='glass-card p-6 rounded-2xl text-center'
                >
                  <h3 className='text-white font-semibold mb-2'>{tool.name}</h3>
                  <p className='text-gray-400 text-sm mb-4'>{tool.category}</p>
                  <div className='w-full bg-white/10 rounded-full h-2 mb-2'>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${tool.proficiency}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className='bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full'
                    />
                  </div>
                  <span className='text-xs text-gray-400'>
                    {tool.proficiency}%
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Values Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='mb-20'
          >
            <h2 className='text-3xl font-bold text-white mb-12 text-center'>
              Core Values
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className='glass-card p-8 rounded-2xl'
                >
                  <div className='text-4xl mb-4'>{value.icon}</div>
                  <h3 className='text-xl font-semibold text-white mb-4'>
                    {value.title}
                  </h3>
                  <p className='text-gray-300 leading-relaxed'>
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* CTA Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-center'
          >
            <div className='glass-card p-12 rounded-3xl'>
              <h2 className='text-3xl font-bold text-white mb-6'>
                Interested in working together?
              </h2>
              <p className='text-xl text-gray-300 mb-8 max-w-2xl mx-auto'>
                I'm always open to discussing new opportunities and interesting
                projects.
              </p>
              <motion.a
                href='/contact'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 shadow-lg hover:shadow-cyan-500/25'
              >
                Get In Touch
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
              </motion.a>
            </div>
          </motion.section>
        </motion.div>
      </section>
    </div>
  );
}
