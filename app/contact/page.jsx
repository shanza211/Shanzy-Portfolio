'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    budget: '',
    projectType: '',
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
          name: '',
          email: '',
          subject: '',
          message: '',
          budget: '',
          projectType: '',
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'shanzysaleem8@gmail.com',
      link: 'mailto:hello@shanzy.dev',
    },
    {
      icon: '💬',
      label: 'Discord',
      value: 'shanzy#1234',
      link: 'https://discord.com/users/shanzy',
    },
    {
      icon: '📱',
      label: 'WhatsApp',
      value: '+92 346 7394923',
      link: 'https://wa.me/923001234567',
    },
    {
      icon: '📍',
      label: 'Location',
      value: 'Lahore, Pakistan',
      link: 'https://maps.google.com/maps?q=Karachi,Pakistan',
    },
  ];

  const services = [
    {
      title: 'UI/UX Design',
      description: 'Modern, user-centered design solutions',
      features: [
        'Wireframing & Prototyping',
        'User Research',
        'Design Systems',
        'Figma Design',
      ],
      price: 'Starting at $500',
    },
    {
      title: 'Web Development',
      description: 'Fast, responsive, and scalable websites',
      features: [
        'React/Next.js',
        'Responsive Design',
        'Performance Optimization',
        'SEO Ready',
      ],
      price: 'Starting at $1,500',
    },
    {
      title: 'Python Development',
      description: 'Custom applications and automation',
      features: [
        'Web APIs',
        'Data Analysis',
        'Automation Scripts',
        'Database Integration',
      ],
      price: 'Starting at $800',
    },
    {
      title: 'Full Project',
      description: 'End-to-end solution from design to deployment',
      features: [
        'Complete Design System',
        'Frontend & Backend',
        'Deployment & Hosting',
        '3 Months Support',
      ],
      price: 'Starting at $3,000',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
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

  return (
    <div className='min-h-screen pt-20'>
      {/* Hero Section */}
      <section className='py-20 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-6xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='text-center mb-16'
          >
            <h1 className='section-title text-4xl md:text-5xl font-bold mb-6'>
              Let's Work Together
            </h1>
            <p className='text-xl text-gray-400 max-w-3xl mx-auto'>
              Have a project in mind? I'd love to hear about it. Let's discuss
              how we can bring your ideas to life with exceptional design and
              development.
            </p>
          </motion.div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20'>
            {/* Contact Form */}
            <motion.div
              variants={containerVariants}
              initial='hidden'
              animate='visible'
              className='glass-card p-8 rounded-3xl'
            >
              <motion.h2
                variants={itemVariants}
                className='text-2xl font-bold text-white mb-6'
              >
                Send Me a Message
              </motion.h2>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className='mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400'
                >
                  Thank you! Your message has been sent successfully. I'll get
                  back to you soon.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className='mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400'
                >
                  Oops! Something went wrong. Please try again or contact me
                  directly.
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className='space-y-6'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <motion.div variants={itemVariants}>
                    <label
                      htmlFor='name'
                      className='block text-sm font-medium text-gray-300 mb-2'
                    >
                      Name *
                    </label>
                    <input
                      type='text'
                      id='name'
                      name='name'
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className='w-full px-4 py-3 glass rounded-lg text-white placeholder-gray-400 border border-white/10 focus:border-blue-500/50 focus:outline-none transition-colors duration-200'
                      placeholder='Your full name'
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label
                      htmlFor='email'
                      className='block text-sm font-medium text-gray-300 mb-2'
                    >
                      Email *
                    </label>
                    <input
                      type='email'
                      id='email'
                      name='email'
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className='w-full px-4 py-3 glass rounded-lg text-white placeholder-gray-400 border border-white/10 focus:border-blue-500/50 focus:outline-none transition-colors duration-200'
                      placeholder='your.email@example.com'
                    />
                  </motion.div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <motion.div variants={itemVariants}>
                    <label
                      htmlFor='projectType'
                      className='block text-sm font-medium text-gray-300 mb-2'
                    >
                      Project Type
                    </label>
                    <select
                      id='projectType'
                      name='projectType'
                      value={formData.projectType}
                      onChange={handleChange}
                      className='w-full px-4 py-3 glass rounded-lg text-white border border-white/10 focus:border-blue-500/50 focus:outline-none transition-colors duration-200'
                    >
                      <option value=''>Select project type</option>
                      <option value='ui-ux-design'>UI/UX Design</option>
                      <option value='web-development'>Web Development</option>
                      <option value='python-development'>
                        Python Development
                      </option>
                      <option value='full-project'>Full Project</option>
                      <option value='consultation'>Consultation</option>
                    </select>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label
                      htmlFor='budget'
                      className='block text-sm font-medium text-gray-300 mb-2'
                    >
                      Budget Range
                    </label>
                    <select
                      id='budget'
                      name='budget'
                      value={formData.budget}
                      onChange={handleChange}
                      className='w-full px-4 py-3 glass rounded-lg text-white border border-white/10 focus:border-blue-500/50 focus:outline-none transition-colors duration-200'
                    >
                      <option value=''>Select budget range</option>
                      <option value='500-1000'>$500 - $1,000</option>
                      <option value='1000-3000'>$1,000 - $3,000</option>
                      <option value='3000-5000'>$3,000 - $5,000</option>
                      <option value='5000+'>$5,000+</option>
                    </select>
                  </motion.div>
                </div>

                <motion.div variants={itemVariants}>
                  <label
                    htmlFor='subject'
                    className='block text-sm font-medium text-gray-300 mb-2'
                  >
                    Subject *
                  </label>
                  <input
                    type='text'
                    id='subject'
                    name='subject'
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className='w-full px-4 py-3 glass rounded-lg text-white placeholder-gray-400 border border-white/10 focus:border-blue-500/50 focus:outline-none transition-colors duration-200'
                    placeholder="What's your project about?"
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label
                    htmlFor='message'
                    className='block text-sm font-medium text-gray-300 mb-2'
                  >
                    Message *
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className='w-full px-4 py-3 glass rounded-lg text-white placeholder-gray-400 border border-white/10 focus:border-blue-500/50 focus:outline-none transition-colors duration-200 resize-none'
                    placeholder='Tell me more about your project, goals, and timeline...'
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <motion.button
                    type='submit'
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className='w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 shadow-lg hover:shadow-cyan-500/25 disabled:opacity-50 disabled:cursor-not-allowed'
                  >
                    {isSubmitting ? (
                      <span className='flex items-center justify-center'>
                        <svg
                          className='animate-spin -ml-1 mr-3 h-5 w-5 text-white'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                        >
                          <circle
                            className='opacity-25'
                            cx='12'
                            cy='12'
                            r='10'
                            stroke='currentColor'
                            strokeWidth='4'
                          ></circle>
                          <path
                            className='opacity-75'
                            fill='currentColor'
                            d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                          ></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className='flex items-center justify-center'>
                        Send Message
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
                            d='M12 19l9 2-9-18-9 18 9-2zm0 0v-8'
                          />
                        </svg>
                      </span>
                    )}
                  </motion.button>
                </motion.div>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              variants={containerVariants}
              initial='hidden'
              animate='visible'
              className='space-y-8'
            >
              <motion.div
                variants={itemVariants}
                className='glass-card p-8 rounded-3xl'
              >
                <h2 className='text-2xl font-bold text-white mb-6'>
                  Get in Touch
                </h2>
                <div className='space-y-6'>
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={info.label}
                      href={info.link}
                      target='_blank'
                      rel='noopener noreferrer'
                      whileHover={{ x: 5 }}
                      className='flex items-center group'
                    >
                      <div className='text-2xl mr-4'>{info.icon}</div>
                      <div>
                        <div className='text-gray-400 text-sm'>
                          {info.label}
                        </div>
                        <div className='text-white group-hover:text-blue-400 transition-colors duration-200'>
                          {info.value}
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className='glass-card p-8 rounded-3xl'
              >
                <h3 className='text-xl font-bold text-white mb-4'>
                  Response Time
                </h3>
                <div className='space-y-3 text-gray-300'>
                  <div className='flex items-center'>
                    <span className='text-green-400 mr-2'>⚡</span>
                    <span>Usually within 24 hours</span>
                  </div>
                  <div className='flex items-center'>
                    <span className='text-blue-400 mr-2'>🌍</span>
                    <span>Available PKT (UTC+5)</span>
                  </div>
                  <div className='flex items-center'>
                    <span className='text-purple-400 mr-2'>💼</span>
                    <span>Monday - Friday preferred</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Services */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='mb-20'
          >
            <h2 className='text-3xl font-bold text-white mb-12 text-center'>
              Services & Pricing
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className='glass-card p-6 rounded-2xl'
                >
                  <h3 className='text-lg font-semibold text-white mb-2'>
                    {service.title}
                  </h3>
                  <p className='text-gray-400 text-sm mb-4'>
                    {service.description}
                  </p>
                  <ul className='space-y-2 mb-6'>
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className='text-gray-300 text-sm flex items-center'
                      >
                        <span className='text-green-400 mr-2'>✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className='text-blue-400 font-semibold'>
                    {service.price}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* FAQ */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className='glass-card p-12 rounded-3xl'>
              <h2 className='text-3xl font-bold text-white mb-8 text-center'>
                Frequently Asked Questions
              </h2>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                <div>
                  <h3 className='text-lg font-semibold text-white mb-2'>
                    What's your typical project timeline?
                  </h3>
                  <p className='text-gray-400'>
                    Most projects take 2-8 weeks depending on complexity. I'll
                    provide a detailed timeline during our initial consultation.
                  </p>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-white mb-2'>
                    Do you work with international clients?
                  </h3>
                  <p className='text-gray-400'>
                    Absolutely! I've worked with clients from around the world
                    and I'm comfortable with different time zones and
                    communication preferences.
                  </p>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-white mb-2'>
                    What's included in your design service?
                  </h3>
                  <p className='text-gray-400'>
                    Complete design process from research and wireframes to
                    high-fidelity prototypes, design system, and developer
                    handoff documentation.
                  </p>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-white mb-2'>
                    Do you provide ongoing support?
                  </h3>
                  <p className='text-gray-400'>
                    Yes! I offer maintenance packages and ongoing support for
                    all projects. We can discuss the details based on your
                    specific needs.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>
        </div>
      </section>
    </div>
  );
}
