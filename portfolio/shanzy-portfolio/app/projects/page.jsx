'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import ProjectCard from '../components/ProjectCard'

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'design', label: 'UI/UX Design' },
    { id: 'web', label: 'Web Development' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'python', label: 'Python Projects' }
  ]

  const projects = [
    {
      id: 'p1',
      title: 'Amazon FBA Analytics Dashboard',
      description: 'Comprehensive analytics platform for Amazon sellers featuring real-time data visualization, inventory management, and profit tracking with modern glassmorphism design.',
      image: '/projects/amazon-fba.jpg',
      tags: ['Python', 'Flask', 'React', 'AWS', 'PostgreSQL'],
      link: '/projects/amazon-fba',
      category: 'python',
      likes: 47,
      featured: true
    },
    {
      id: 'p2',
      title: 'Glassmorphism Design System',
      description: 'Complete design system library with 100+ components featuring modern glassmorphism aesthetics, accessibility guidelines, and comprehensive documentation.',
      image: '/projects/design-system.jpg',
      tags: ['Figma', 'Design System', 'UI/UX', 'Documentation'],
      link: '/projects/design-system',
      category: 'design',
      likes: 52,
      featured: true
    },
    {
      id: 'p3',
      title: 'E-Commerce Mobile App',
      description: 'Modern mobile commerce application with seamless shopping experience, secure payments, and real-time order tracking.',
      image: '/projects/ecommerce-app.jpg',
      tags: ['React Native', 'Node.js', 'MongoDB', 'Stripe'],
      link: '/projects/ecommerce-app',
      category: 'mobile',
      likes: 34
    },
    {
      id: 'p4',
      title: 'Portfolio Website Template',
      description: 'Responsive portfolio template for creatives featuring smooth animations, dark theme, and optimized performance.',
      image: '/projects/portfolio-template.jpg',
      tags: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'SEO'],
      link: '/projects/portfolio-template',
      category: 'web',
      likes: 28
    },
    {
      id: 'p5',
      title: 'Data Visualization Dashboard',
      description: 'Interactive dashboard for complex data visualization with real-time updates and customizable charts.',
      image: '/projects/data-viz.jpg',
      tags: ['Python', 'Plotly', 'Pandas', 'Streamlit'],
      link: '/projects/data-visualization',
      category: 'python',
      likes: 41
    },
    {
      id: 'p6',
      title: 'SaaS Landing Page',
      description: 'High-converting landing page for SaaS products with modern design and optimized conversion funnel.',
      image: '/projects/saas-landing.jpg',
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Analytics'],
      link: '/projects/saas-landing',
      category: 'web',
      likes: 23
    },
    {
      id: 'p7',
      title: 'Finance Mobile App UI',
      description: 'Intuitive mobile banking app interface with secure authentication and transaction management.',
      image: '/projects/finance-app.jpg',
      tags: ['Figma', 'Mobile UI', 'Prototyping', 'User Research'],
      link: '/projects/finance-app',
      category: 'design',
      likes: 39
    },
    {
      id: 'p8',
      title: 'API Management Platform',
      description: 'Comprehensive API management solution with monitoring, authentication, and developer portal.',
      image: '/projects/api-platform.jpg',
      tags: ['Python', 'FastAPI', 'Docker', 'Kubernetes'],
      link: '/projects/api-platform',
      category: 'python',
      likes: 31
    }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  }

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Projects</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A collection of my work spanning UI/UX design, web development, mobile applications, and Python projects. 
            Each project represents a unique challenge and creative solution.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg'
                  : 'glass text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          layout
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-white mb-2">No projects found</h3>
            <p className="text-gray-400">Try adjusting your filter selection.</p>
          </motion.div>
        )}

        {/* Stats Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 glass-card p-12 rounded-3xl"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Project Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-4xl font-bold text-blue-400 mb-2"
              >
                {projects.length}+
              </motion.div>
              <p className="text-gray-400">Total Projects</p>
            </div>
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-4xl font-bold text-cyan-400 mb-2"
              >
                {projects.reduce((sum, project) => sum + project.likes, 0)}+
              </motion.div>
              <p className="text-gray-400">Total Likes</p>
            </div>
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-4xl font-bold text-purple-400 mb-2"
              >
                4+
              </motion.div>
              <p className="text-gray-400">Categories</p>
            </div>
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-4xl font-bold text-green-400 mb-2"
              >
                100%
              </motion.div>
              <p className="text-gray-400">Client Satisfaction</p>
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="glass-card p-12 rounded-3xl">
            <h2 className="text-3xl font-bold text-white mb-6">
              Like what you see?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              I'm always excited to work on new projects and bring creative ideas to life. 
              Let's discuss how we can collaborate.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 shadow-lg hover:shadow-cyan-500/25"
            >
              Start a Project
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </div>
        </motion.section>
      </div>
    </div>
  )
}
