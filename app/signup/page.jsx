'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

export default function SignUp() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Validation
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.password
    ) {
      setError('Please fill in all required fields');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match!');
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }

    if (!formData.agreeTerms) {
      setError('Please agree to the Terms and Conditions');
      return;
    }

    setIsLoading(true);

    try {
      // Simulate account creation
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Store user data in localStorage (in real app, send to server)
      const userData = {
        id: Date.now(),
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        createdAt: new Date().toISOString(),
      };

      localStorage.setItem('user', JSON.stringify(userData));

      setIsSuccess(true);

      // Redirect after success
      setTimeout(() => {
        window.location.href = '/signin';
      }, 2000);
    } catch (err) {
      setError('Failed to create account. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignUp = () => {
    // In a real app, integrate with Google OAuth
    alert('Google Sign Up will be integrated with Google OAuth API');
    // Example: window.location.href = '/auth/google';
  };

  return (
    <div className='min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-md w-full space-y-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-center'
        >
          <Link href='/' className='inline-block mb-8'>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className='flex items-center justify-center gap-3'
            >
              <div className='w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-green-400 p-0.5'>
                <div className='w-full h-full rounded-full bg-slate-900 flex items-center justify-center'>
                  <span className='text-xl font-bold text-white'>S</span>
                </div>
              </div>
              <div>
                <h1 className='text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 bg-clip-text text-transparent'>
                  Shanzy
                </h1>
                <p className='text-xs text-gray-400'>PYTHON DEV</p>
              </div>
            </motion.div>
          </Link>

          <h2 className='text-3xl font-bold text-white'>Create your account</h2>
          <p className='mt-2 text-gray-400'>
            Join the community and start your journey
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='glass-card p-8 rounded-2xl'
        >
          {/* Success Message */}
          {isSuccess && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className='mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg'
            >
              <div className='flex items-center gap-2 text-green-400'>
                <span>✅</span>
                <span className='font-medium'>
                  Account created successfully!
                </span>
              </div>
              <p className='text-sm text-green-300 mt-1'>
                Redirecting to sign in page...
              </p>
            </motion.div>
          )}

          {/* Error Message */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className='mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg'
            >
              <div className='flex items-center gap-2 text-red-400'>
                <span>❌</span>
                <span className='font-medium'>{error}</span>
              </div>
            </motion.div>
          )}

          <form className='space-y-6' onSubmit={handleSubmit}>
            <div className='grid grid-cols-2 gap-4'>
              <div>
                <label
                  htmlFor='firstName'
                  className='block text-sm font-medium text-gray-300 mb-2'
                >
                  First name
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  id='firstName'
                  name='firstName'
                  type='text'
                  autoComplete='given-name'
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className='w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200'
                  placeholder='First name'
                />
              </div>

              <div>
                <label
                  htmlFor='lastName'
                  className='block text-sm font-medium text-gray-300 mb-2'
                >
                  Last name
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  id='lastName'
                  name='lastName'
                  type='text'
                  autoComplete='family-name'
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className='w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200'
                  placeholder='Last name'
                />
              </div>
            </div>

            <div>
              <label
                htmlFor='email'
                className='block text-sm font-medium text-gray-300 mb-2'
              >
                Email address
              </label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                id='email'
                name='email'
                type='email'
                autoComplete='email'
                required
                value={formData.email}
                onChange={handleChange}
                className='w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200'
                placeholder='Enter your email'
              />
            </div>

            <div>
              <label
                htmlFor='password'
                className='block text-sm font-medium text-gray-300 mb-2'
              >
                Password
              </label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                id='password'
                name='password'
                type='password'
                autoComplete='new-password'
                required
                value={formData.password}
                onChange={handleChange}
                className='w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200'
                placeholder='Create a password'
              />
            </div>

            <div>
              <label
                htmlFor='confirmPassword'
                className='block text-sm font-medium text-gray-300 mb-2'
              >
                Confirm password
              </label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                id='confirmPassword'
                name='confirmPassword'
                type='password'
                autoComplete='new-password'
                required
                value={formData.confirmPassword}
                onChange={handleChange}
                className='w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200'
                placeholder='Confirm your password'
              />
            </div>

            <div className='flex items-center'>
              <input
                id='agree-terms'
                name='agreeTerms'
                type='checkbox'
                checked={formData.agreeTerms}
                onChange={handleChange}
                required
                className='h-4 w-4 text-blue-500 bg-white/10 border-white/20 rounded focus:ring-blue-500'
              />
              <label
                htmlFor='agree-terms'
                className='ml-2 text-sm text-gray-300'
              >
                I agree to the{' '}
                <Link
                  href='/terms'
                  className='text-blue-400 hover:text-blue-300 transition-colors duration-200'
                >
                  Terms and Conditions
                </Link>{' '}
                and{' '}
                <Link
                  href='/privacy'
                  className='text-blue-400 hover:text-blue-300 transition-colors duration-200'
                >
                  Privacy Policy
                </Link>
              </label>
            </div>

            <motion.button
              whileHover={{ scale: isLoading ? 1 : 1.02 }}
              whileTap={{ scale: isLoading ? 1 : 0.98 }}
              type='submit'
              disabled={isLoading || isSuccess}
              className='w-full flex justify-center py-3 px-4 border border-transparent rounded-lg text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 font-medium transition-all duration-200 shadow-lg hover:shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed'
            >
              <span className='flex items-center gap-2'>
                {isLoading ? (
                  <>
                    <svg
                      className='animate-spin -ml-1 mr-2 h-4 w-4 text-white'
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
                    Creating Account...
                  </>
                ) : isSuccess ? (
                  <>✅ Account Created!</>
                ) : (
                  <>✨ Create account</>
                )}
              </span>
            </motion.button>

            <div className='relative'>
              <div className='absolute inset-0 flex items-center'>
                <div className='w-full border-t border-white/20' />
              </div>
              <div className='relative flex justify-center text-sm'>
                <span className='px-2 bg-slate-900 text-gray-400'>
                  Or continue with
                </span>
              </div>
            </div>

            <div className='grid grid-cols-1 gap-3'>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type='button'
                onClick={handleGoogleSignUp}
                disabled={isLoading || isSuccess}
                className='w-full inline-flex justify-center py-3 px-4 border border-white/20 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed'
              >
                <svg className='w-5 h-5' viewBox='0 0 24 24'>
                  <path
                    fill='currentColor'
                    d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'
                  />
                  <path
                    fill='currentColor'
                    d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'
                  />
                  <path
                    fill='currentColor'
                    d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z'
                  />
                  <path
                    fill='currentColor'
                    d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z'
                  />
                </svg>
                <span className='ml-2'>Continue with Google</span>
              </motion.button>
            </div>
          </form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className='mt-6 text-center'
          >
            <p className='text-gray-400'>
              Already have an account?{' '}
              <Link
                href='/signin'
                className='text-blue-400 hover:text-blue-300 font-medium transition-colors duration-200'
              >
                Sign in
              </Link>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
