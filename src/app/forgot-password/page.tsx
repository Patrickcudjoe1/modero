'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setError('');
  };

  const validateEmail = () => {
    if (!email) {
      setError('Email is required');
      return false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Email is invalid');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateEmail()) {
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      // TODO: Implement actual password reset logic
      console.log('Password reset request for:', email);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsSuccess(true);
    } catch (error) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="bg-gray-50 min-h-screen">
      <Navbar />
      
      <div className="w-full px-4 md:px-8 lg:px-16 py-8 md:py-16">
        <div className="max-w-md mx-auto">
          {/* Back Arrow */}
          <Link href="/login" className="inline-flex items-center mb-6 text-black hover:opacity-70 transition-opacity">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>

          {/* FORGOT PASSWORD Heading */}
          <h1 className="text-3xl font-bold text-black mb-2 uppercase">Forgot Password</h1>
          <p className="text-sm text-gray-600 mb-8">
            {isSuccess 
              ? 'Check your email for password reset instructions.'
              : 'Enter your email address and we\'ll send you a link to reset your password.'}
          </p>

          {isSuccess ? (
            /* Success Message */
            <div className="space-y-6">
              <div className="p-4 bg-green-50 border border-green-200 text-green-700 text-sm">
                If an account exists with this email, you'll receive a password reset link shortly.
              </div>
              
              <Link
                href="/login"
                className="block w-full py-4 bg-black text-white text-sm font-normal uppercase tracking-wide hover:opacity-80 transition-opacity text-center"
              >
                Back to Login
              </Link>
            </div>
          ) : (
            /* Reset Form */
            <>
              {/* Error Message */}
              {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 text-sm">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-normal text-black mb-2 uppercase">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border bg-white text-black text-sm font-normal focus:outline-none transition-colors ${
                      error ? 'border-red-500' : 'border-gray-300 focus:border-black'
                    }`}
                    placeholder="Enter your email"
                    autoFocus
                  />
                  {error && (
                    <p className="mt-1 text-sm text-red-600">{error}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-4 bg-black text-white text-sm font-normal uppercase tracking-wide hover:opacity-80 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
                >
                  {isLoading ? 'Sending...' : 'Send Reset Link'}
                </button>
              </form>

              {/* Back to Login Link */}
              <div className="mt-8 text-center">
                <Link href="/login" className="text-sm text-black hover:opacity-70 transition-opacity underline">
                  Back to Login
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </main>
  );
}
