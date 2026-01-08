'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'Emaan Couture',
      tags: ['UI/UX Design', 'Website Design'],
      category: 'WordPress Website',
      image: '/Emaan-couture.png',
      link: 'https://emaancouture.com/',
    },
    {
      id: 2,
      title: 'NexWel',
      tags: ['UI/UX Design', 'E-Commerce'],
      category: 'Web Developer',
      image: '/nexwell-llc.png',
      link: 'https://nexwelllc.vercel.app/',
    },
    {
      id: 3,
      title: 'SmartVine Inc',
      tags: ['Tech', 'Business'],
      category: 'WordPress Website',
      image: '/smart-vini-llc.png',
      link: 'https://smartvineinc.com/',
    },
    {
      id: 4,
      title: 'Coffee Shop Design',
      tags: ['UI/UX Design', 'Figma'],
      category: 'Figma Design',
      image: '/coffee-shop-figma.png',
      link: 'https://www.figma.com/design/RAec0mgBA82umJunD44unO/Untitled?node-id=0-1&t=cuxC6YJvVVzckkBi-1',
    },
    {
      id: 5,
      title: 'SaaS Platform UI',
      tags: ['UI/UX Design', 'Figma Cloning'],
      category: 'Figma Design',
      image: '/saas-platform-figma.png',
      link: 'https://www.figma.com/design/bNxsmc7TxFiShDBGb3W3NK/Professional-Figma-UI-Cloning---Redesign-Assignment?t=cuxC6YJvVVzckkBi-1',
    },
    {
      id: 6,
      title: 'Beauty E-Commerce Design',
      tags: ['UI/UX Design', 'E-Commerce'],
      category: 'Figma Design',
      image: '/beauty-ecommerce-figma.png',
      link: 'https://www.figma.com/design/cRPkWHULHzUmv2ssIEvW9G/Design-Test-Shanzy-Saleem?node-id=0-1&t=MBQ14AmGAtPQi1QU-1',
    },
    {
      id: 7,
      title: 'Krypto NFT Marketplace',
      tags: ['UI/UX Design', 'NFT'],
      category: 'Figma Design',
      image: '/krypto-nft-figma.png',
      link: 'https://www.figma.com/design/b5Ib0nuDtGgIDkroAWJB2S/Krypto?t=MBQ14AmGAtPQi1QU-1',
    },
    {
      id: 8,
      title: 'Forecaster Golf Analysis',
      tags: ['UI/UX Design', 'Sport Tech'],
      category: 'Figma Design',
      image: '/forecaster-golf-figma.png',
      link: 'https://www.figma.com/design/YfAdAldonr87yfQxKNZ0Oj/Untitled?t=MBQ14AmGAtPQi1QU-1',
    },
    {
      id: 9,
      title: 'Next Gen Virtual Reality',
      tags: ['UI/UX Design', 'VR/AR'],
      category: 'Figma Design',
      image: '/nextgen-vr-figma.png',
      link: 'https://www.figma.com/design/e4DJUiHeKzd7NM7xxQi7Iw/Next-Gen?t=MBQ14AmGAtPQi1QU-1',
    },
    {
      id: 11,
      title: 'Travel Beyond Boundaries',
      tags: ['UI/UX Design', 'Travel'],
      category: 'Figma Design',
      image: '/travel-website-figma.png',
      link: '#',
    },
    {
      id: 12,
      title: 'DesignHub - Creative Platform',
      tags: ['UI/UX Design', 'Web Development'],
      category: 'Web Developer',
      image: '/designhub-tool.png',
      link: 'https://design-hub-two.vercel.app/',
    },
  ];

  const categories = ['All', 'WordPress Website', 'Figma Design', 'Web Developer', 'Design Hub Tool'];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

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
            Shanzy Saleem/Portfolio
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className='text-4xl md:text-5xl lg:text-6xl font-bold mb-8'
          >
            Our Portfolio
          </motion.h1>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='flex flex-wrap justify-center gap-4 mt-8'
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-[#c9f31d] text-white shadow-lg scale-105'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className='relative py-12 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='group cursor-pointer'
              >
                {project.link ? (
                  <Link href={project.link} target='_blank' rel='noopener noreferrer'>
                    <div className='relative overflow-hidden rounded-2xl mb-4 aspect-[16/10] hover:shadow-2xl transition-all duration-300 group-hover:scale-105'>
                      {project.image ? (
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className='object-cover'
                        />
                      ) : (
                        <div className='w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900'>
                          <span className='text-8xl'>{project.emoji}</span>
                        </div>
                      )}
                      <div className='absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
                        <span className='px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-white font-medium'>
                          View Website
                        </span>
                      </div>
                    </div>
                    <div className='flex flex-wrap gap-2'>
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className='px-3 py-1 bg-[#c9f31d] text-white text-sm rounded-full'
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </Link>
                ) : (
                  <>
                    <div className='relative overflow-hidden rounded-2xl mb-4 aspect-[16/10] hover:shadow-2xl transition-all duration-300'>
                      <div className='w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900'>
                        <span className='text-8xl'>{project.emoji}</span>
                      </div>
                    </div>
                    <div className='flex flex-wrap gap-2'>
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className='px-3 py-1 bg-[#c9f31d] text-white text-sm rounded-full'
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
