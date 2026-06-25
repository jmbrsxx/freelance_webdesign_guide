'use client';

import React, { useState, useEffect } from 'react';
import MaterialIcon from '../components/MaterialIcon';

export default function CheckoutPage() {
  // Detect session_id from URL on initial load
  const [hasSessionId] = useState(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      return !!params.get('session_id');
    }
    return false;
  });

  const [mounted, setMounted] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(hasSessionId);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currency, setCurrency] = useState<string>('usd');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const currencies = ['USD', 'GBP', 'CAD', 'AUD', 'EUR', 'BRL', 'INR', 'AED'];

  useEffect(() => {
    // Check for session_id in URL after component mounts
    const params = new URLSearchParams(window.location.search);
    const sessionId = params.get('session_id');
    console.log('🔍 Checking for session_id:', sessionId);
    if (sessionId) {
      console.log('✅ Payment successful! Session ID:', sessionId);
      setPaymentSuccess(true);
    } else {
      console.log('❌ No session_id found in URL:', window.location.search);
    }
    setMounted(true);
  }, []);

  const handleDownload = () => {
    // Trigger download of course materials
    const link = document.createElement('a');
    link.href = '/api/download-course';
    link.download = 'Freelance_Web_Design_Full_Course.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Auto-download PDF when payment succeeds
  useEffect(() => {
    if (paymentSuccess && mounted) {
      const timer = setTimeout(() => {
        handleDownload();
      }, 1500); // Wait 1.5s for page to load, then auto-download
      return () => clearTimeout(timer);
    }
  }, [paymentSuccess, mounted]);

  const validateEmail = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      setEmailError('Please enter a valid email address');
      return false;
    }
    setEmailError('');
    return true;
  };

  const handleEmailChange = (value: string) => {
    setEmail(value);
    if (value.length > 0) {
      validateEmail(value);
    }
  };

  if (paymentSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl w-full">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4 text-green-600">
              <MaterialIcon name="celebration" />
            </div>
            <h1 className="text-4xl font-bold text-green-600 mb-2">
              Welcome to the Course!
            </h1>
            <p className="text-gray-600">
              Your payment has been processed successfully.
            </p>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
            <h3 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
              <MaterialIcon name="done" /> What's Next?
            </h3>
            <ul className="text-blue-800 space-y-1 text-sm">
              <li className="flex items-center gap-2">
                <MaterialIcon name="check_circle" />
                Confirmation email sent to your inbox
              </li>
              <li className="flex items-center gap-2">
                <MaterialIcon name="check_circle" />
                Download your course materials below
              </li>
              <li className="flex items-center gap-2">
                <MaterialIcon name="check_circle" />
                Get instant access to all modules
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <button
              onClick={handleDownload}
              className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition transform hover:scale-105"
            >
              <MaterialIcon name="download" />
              <span>Download Course Materials</span>
            </button>

            <a
              href="/"
              className="w-full inline-block text-center bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-6 rounded-lg transition"
            >
              Back to Home
            </a>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
              <MaterialIcon name="library_books" />
              Course Modules
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-purple-50 p-4 rounded">
                <div className="text-2xl mb-2">
                  <MaterialIcon name="psychology" />
                </div>
                <h4 className="font-bold text-gray-800">Module 1</h4>
                <p className="text-sm text-gray-600">Mindset & Market</p>
              </div>
              <div className="bg-blue-50 p-4 rounded">
                <div className="text-2xl mb-2">
                  <MaterialIcon name="build" />
                </div>
                <h4 className="font-bold text-gray-800">Module 2</h4>
                <p className="text-sm text-gray-600">Tech & Portfolio</p>
              </div>
              <div className="bg-green-50 p-4 rounded">
                <div className="text-2xl mb-2">
                  <MaterialIcon name="trending_up" />
                </div>
                <h4 className="font-bold text-gray-800">Modules 3-8</h4>
                <p className="text-sm text-gray-600">Advanced Topics</p>
              </div>
            </div>
          </div>

          <div className="mt-8 p-4 bg-gray-50 rounded text-center">
            <p className="text-sm text-gray-600">
              Questions? <a href="/contact" className="text-blue-600 hover:text-blue-700 font-semibold">Email us here</a>
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-blue-100 rounded">
              <MaterialIcon name="shopping_cart" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-slate-900">
                Checkout
              </h1>
              <p className="text-slate-600 text-sm">
                Complete your purchase
              </p>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-slate-700 mb-3">
              Select Currency
            </label>
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full px-4 py-2 bg-white border border-slate-300 rounded-lg text-left font-medium text-slate-900 flex justify-between items-center hover:bg-slate-50 transition"
              >
                <span>{currency.toUpperCase()}</span>
                <MaterialIcon name={isDropdownOpen ? 'expand_less' : 'expand_more'} />
              </button>

              {isDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-slate-300 rounded-lg shadow-lg z-10">
                  <div className="max-h-60 overflow-y-auto">
                    {currencies.map((currencyCode) => (
                      <button
                        key={currencyCode}
                        type="button"
                        onClick={() => {
                          setCurrency(currencyCode.toLowerCase());
                          setIsDropdownOpen(false);
                        }}
                        className={`w-full text-left px-4 py-3 font-medium transition-colors ${
                          currency === currencyCode.toLowerCase()
                            ? 'bg-blue-600 text-white'
                            : 'text-slate-900 hover:bg-slate-100'
                        }`}
                      >
                        {currencyCode}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="mb-6">
            <input
              type="email"
              value={email}
              onChange={(e) => handleEmailChange(e.target.value)}
              placeholder="your@email.com"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                emailError ? 'border-red-500' : 'border-slate-300'
              }`}
            />
            {emailError && (
              <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                <MaterialIcon name="error" />
                {emailError}
              </p>
            )}
            <p className="text-xs text-slate-500 mt-1">
              We'll send your course access and confirmation to this email
            </p>
          </div>

          {email && !emailError && (
            <button
              onClick={async (e) => {
                e.preventDefault();
                if (loading) return; // Prevent double-click
                setLoading(true);
                setError(null);
                try {
                  const response = await fetch('/api/create-checkout-session', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                      email,
                      courseTitle: 'Freelance Web Design & Development Course',
                      currency,
                    }),
                  });

                  if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(errorData.error || 'Failed to create checkout session');
                  }

                  const { url } = await response.json();
                  if (url) {
                    // Disable button and show message before redirect
                    setLoading(false);
                    // Add small delay to ensure button is disabled before redirect
                    setTimeout(() => {
                      window.location.href = url;
                    }, 100);
                    return;
                  }
                } catch (err) {
                  const message = err instanceof Error ? err.message : 'Checkout failed';
                  setError(message);
                } finally {
                  setLoading(false);
                }
              }}
              disabled={loading}
              className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition"
            >
              {loading ? 'Redirecting to Stripe...' : `Proceed to Payment (${currency.toUpperCase()})`}
            </button>
          )}

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mt-4">
              {error}
            </div>
          )}

          {(!email || emailError) && (
            <div className="bg-slate-100 p-4 rounded text-center text-slate-600">
              Enter a valid email to continue
            </div>
          )}
        </div>
      </div>
  );
}
