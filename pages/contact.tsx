import React, { useState } from 'react'
import Link from 'next/link'
import MaterialIcon from '../components/MaterialIcon'

export default function Contact() {
  const [formData, setFormData] = useState({ email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/contact-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'Failed to send message. Please try again.');
        setLoading(false);
        return;
      }

      setSubmitted(true);
      setFormData({ email: '', message: '' });
      setLoading(false);

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError('An error occurred. Please try again later.');
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="border-b border-slate-200 bg-white sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/">
            <h1 className="text-xl font-bold text-slate-900 cursor-pointer hover:text-slate-700">
              Freelance Business Course
            </h1>
          </Link>
          <Link href="/free-course" className="text-blue-600 hover:text-blue-700 font-medium">
            Start Learning
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold text-slate-900 mb-6">Contact Us</h1>
          <p className="text-lg text-slate-700 mb-8">Have a question about the "Freelance Web Design & Development Course" before you buy, or need help with an order you've already placed? We're here to help.</p>

          <div className="bg-white border border-slate-200 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Send Us a Message</h2>
            
            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                <div className="text-green-600 text-4xl mb-3">✓</div>
                <h3 className="text-lg font-semibold text-green-900 mb-2">Message Received!</h3>
                <p className="text-green-700">Thank you for contacting us. We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {error && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <p className="text-red-700 text-sm">{error}</p>
                  </div>
                )}

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    disabled={loading}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-slate-100"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-900 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your question or concern..."
                    required
                    disabled={loading}
                    rows={6}
                    maxLength={5000}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-slate-100 resize-none"
                  />
                  <p className="text-sm text-slate-500 mt-1">
                    Minimum 10 characters • {formData.message.length}/5000 characters
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold rounded-lg transition flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <span className="animate-spin">⏳</span>
                      Sending...
                    </>
                  ) : (
                    <>
                      <MaterialIcon name="send" className="text-xl" />
                      Send Message
                    </>
                  )}
                </button>

                <p className="text-sm text-slate-500 text-center">
                  We'll respond to you at the email address you provide within 24 hours.
                </p>
              </form>
            )}
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Common Reasons to Contact Us</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MaterialIcon name="check" className="text-blue-600 flex-shrink-0 mt-1" />
                <span className="text-slate-700">I didn't receive my download link</span>
              </li>
              <li className="flex items-start gap-3">
                <MaterialIcon name="check" className="text-blue-600 flex-shrink-0 mt-1" />
                <span className="text-slate-700">I'm having trouble opening or downloading the PDF</span>
              </li>
              <li className="flex items-start gap-3">
                <MaterialIcon name="check" className="text-blue-600 flex-shrink-0 mt-1" />
                <span className="text-slate-700">I have a question about the course content before purchasing</span>
              </li>
              <li className="flex items-start gap-3">
                <MaterialIcon name="check" className="text-blue-600 flex-shrink-0 mt-1" />
                <span className="text-slate-700">I have a billing or payment question</span>
              </li>
              <li className="flex items-start gap-3">
                <MaterialIcon name="check" className="text-blue-600 flex-shrink-0 mt-1" />
                <span className="text-slate-700">General feedback or suggestions</span>
              </li>
            </ul>
          </div>

          <div className="bg-slate-100 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Before Reaching Out</h2>
            <p className="text-slate-700">If your question is about refunds, please check our <Link href="/refund" className="text-blue-600 hover:text-blue-700 font-semibold">Refund Policy</Link> first, as all digital product sales are final.</p>
          </div>

          <div className="border-t border-slate-200 pt-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Follow Us</h2>
            <div className="flex items-center gap-4">
              <span className="text-slate-700 font-semibold">Instagram:</span>
              <a href="https://www.instagram.com/digitalsolutions.io/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-semibold">
                @digitalsolutions.io
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 mt-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h3 className="text-lg font-bold text-white mb-2">Freelance Business Course</h3>
              <p className="text-sm">A practical guide to building a sustainable, profitable freelance business.</p>
            </div>
            <div className="text-right">
              <Link href="/free-course" className="text-blue-400 hover:text-blue-300 block mb-2">
                Free Course
              </Link>
              <Link href="/paid-course" className="text-blue-400 hover:text-blue-300 block">
                Full Course
              </Link>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-6 text-sm flex justify-between items-center">
            <p>© {new Date().getFullYear()} The Complete Freelance Web Design & Development Course</p>
            <div className="space-x-4">
              <Link href="/terms" className="text-blue-400 hover:text-blue-300">
                Terms
              </Link>
              <Link href="/privacy" className="text-blue-400 hover:text-blue-300">
                Privacy
              </Link>
              <Link href="/refund" className="text-blue-400 hover:text-blue-300">
                Refund Policy
              </Link>
              <Link href="/contact" className="text-blue-400 hover:text-blue-300">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
