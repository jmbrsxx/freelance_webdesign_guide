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
      <div className="min-h-screen bg-[#f6f2ec] bg-[linear-gradient(135deg,rgba(185,28,28,0.16)_0_12px,transparent_12px_24px)] flex items-center justify-center p-4">
        <div className="bg-white border-2 border-black shadow-[10px_10px_0_#b91c1c] p-8 max-w-2xl w-full">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4 text-red-700">
              <MaterialIcon name="celebration" />
            </div>
            <h1 className="text-4xl font-black uppercase text-black mb-2">
              Welcome to the Course!
            </h1>
            <p className="text-zinc-600">
              Your payment has been processed successfully.
            </p>
          </div>

          <div className="bg-black text-white border-l-4 border-red-700 p-4 mb-6">
            <h3 className="font-black uppercase mb-2 flex items-center gap-2">
              <MaterialIcon name="done" /> What's Next?
            </h3>
            <ul className="text-zinc-200 space-y-1 text-sm">
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
              className="w-full bg-red-700 hover:bg-black text-white font-black uppercase py-3 px-6 flex items-center justify-center gap-2 transition"
            >
              <MaterialIcon name="download" />
              <span>Download Course Materials</span>
            </button>

            <a
              href="/"
              className="w-full inline-block text-center border-2 border-black bg-[#f6f2ec] hover:bg-black hover:text-white text-black font-black uppercase py-3 px-6 transition"
            >
              Back to Home
            </a>
          </div>

          <div className="mt-8 pt-8 border-t-2 border-black">
            <h3 className="font-black uppercase text-black mb-4 flex items-center gap-2">
              <MaterialIcon name="library_books" />
              Course Modules
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="border-2 border-black bg-[#f6f2ec] p-4">
                <div className="text-2xl mb-2">
                  <MaterialIcon name="psychology" />
                </div>
                <h4 className="font-black text-black">Module 1</h4>
                <p className="text-sm text-zinc-600">Mindset & Market</p>
              </div>
              <div className="border-2 border-black bg-[#f6f2ec] p-4">
                <div className="text-2xl mb-2">
                  <MaterialIcon name="build" />
                </div>
                <h4 className="font-black text-black">Module 2</h4>
                <p className="text-sm text-zinc-600">Tech & Portfolio</p>
              </div>
              <div className="border-2 border-black bg-[#f6f2ec] p-4">
                <div className="text-2xl mb-2">
                  <MaterialIcon name="trending_up" />
                </div>
                <h4 className="font-black text-black">Modules 3-8</h4>
                <p className="text-sm text-zinc-600">Advanced Topics</p>
              </div>
            </div>
          </div>

          <div className="mt-8 p-4 bg-zinc-100 text-center">
            <p className="text-sm text-zinc-600">
              Questions? <a href="/contact" className="text-red-700 hover:text-black font-bold">Email us here</a>
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f6f2ec] bg-[linear-gradient(135deg,rgba(185,28,28,0.14)_0_12px,transparent_12px_24px)] flex items-center justify-center p-4">
      <div className="bg-white border-2 border-black shadow-[10px_10px_0_#b91c1c] p-8 max-w-md w-full">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-black text-red-600">
              <MaterialIcon name="shopping_cart" />
            </div>
            <div>
              <h1 className="text-3xl font-black uppercase text-black">
                Checkout
              </h1>
              <p className="text-zinc-600 text-sm">
                Complete your purchase
              </p>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-black uppercase text-black mb-3">
              Select Currency
            </label>
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full px-4 py-3 bg-[#f6f2ec] border-2 border-black text-left font-bold text-black flex justify-between items-center hover:bg-white transition"
              >
                <span>{currency.toUpperCase()}</span>
                <MaterialIcon name={isDropdownOpen ? 'expand_less' : 'expand_more'} />
              </button>

              {isDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border-2 border-black shadow-[6px_6px_0_#0a0a0a] z-10">
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
                            ? 'bg-red-700 text-white'
                            : 'text-black hover:bg-zinc-100'
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
              className={`w-full px-4 py-3 border-2 bg-[#f6f2ec] focus:outline-none focus:ring-2 focus:ring-red-700 ${
                emailError ? 'border-red-700' : 'border-black'
              }`}
            />
            {emailError && (
              <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                <MaterialIcon name="error" />
                {emailError}
              </p>
            )}
            <p className="text-xs text-zinc-500 mt-1">
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
              className="w-full bg-red-700 text-white font-black uppercase py-3 px-6 hover:bg-black disabled:bg-zinc-500 disabled:cursor-not-allowed transition"
            >
              {loading ? 'Redirecting to Stripe...' : `Proceed to Payment (${currency.toUpperCase()})`}
            </button>
          )}

          {error && (
            <div className="bg-red-50 border-2 border-red-700 text-red-700 px-4 py-3 mt-4">
              {error}
            </div>
          )}

          {(!email || emailError) && (
            <div className="bg-zinc-100 border border-zinc-300 p-4 text-center text-zinc-600">
              Enter a valid email to continue
            </div>
          )}
        </div>
      </div>
  );
}
