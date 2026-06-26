import React, { useState } from 'react'
import Link from 'next/link'
import MaterialIcon from '../components/MaterialIcon'
import BrandShell from '../components/BrandShell'

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
    <BrandShell>
      <div className="max-w-2xl">
        <p className="mb-3 inline-flex border border-red-700 bg-red-700 px-3 py-1 text-xs font-black uppercase tracking-[0.22em] text-white">
          Support
        </p>
        <h1 className="text-4xl font-black uppercase tracking-tight text-black mb-6">Contact Us</h1>
        <p className="text-lg text-zinc-700 mb-8">Have a question about the "Freelance Web Design & Development Course" before you buy, or need help with an order you've already placed? We're here to help.</p>

        <div className="bg-white border-2 border-black p-8 mb-12 shadow-[10px_10px_0_#b91c1c]">
          <h2 className="text-2xl font-black uppercase text-black mb-6">Send Us a Message</h2>
          
          {submitted ? (
            <div className="bg-black border-2 border-red-700 p-6 text-center text-white">
              <div className="text-red-600 text-4xl mb-3">âœ“</div>
              <h3 className="text-lg font-black uppercase mb-2">Message Received!</h3>
              <p className="text-zinc-300">Thank you for contacting us. We'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {error && (
                <div className="bg-red-50 border-2 border-red-700 p-4">
                  <p className="text-red-700 text-sm">{error}</p>
                </div>
              )}

              <div>
                <label htmlFor="email" className="block text-sm font-black uppercase text-black mb-2">
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
                  className="w-full px-4 py-3 border-2 border-black bg-[#f6f2ec] focus:outline-none focus:ring-2 focus:ring-red-700 disabled:bg-zinc-200"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-black uppercase text-black mb-2">
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
                  className="w-full px-4 py-3 border-2 border-black bg-[#f6f2ec] focus:outline-none focus:ring-2 focus:ring-red-700 disabled:bg-zinc-200 resize-none"
                />
                <p className="text-sm text-zinc-500 mt-1">
                  Minimum 10 characters â€¢ {formData.message.length}/5000 characters
                </p>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-3 bg-red-700 hover:bg-black disabled:bg-zinc-500 text-white font-black uppercase transition flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <span className="animate-spin">â³</span>
                    Sending...
                  </>
                ) : (
                  <>
                    <MaterialIcon name="send" className="text-xl" />
                    Send Message
                  </>
                )}
              </button>

              <p className="text-sm text-zinc-500 text-center">
                We'll respond to you at the email address you provide within 24 hours.
              </p>
            </form>
          )}
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-black uppercase text-black mb-6">Common Reasons to Contact Us</h2>
          <ul className="space-y-3">
            {[
              "I didn't receive my download link",
              "I'm having trouble opening or downloading the PDF",
              'I have a question about the course content before purchasing',
              'I have a billing or payment question',
              'General feedback or suggestions',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <MaterialIcon name="check" className="text-red-700 flex-shrink-0 mt-1" />
                <span className="text-zinc-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-black text-white p-8 mb-12">
          <h2 className="text-2xl font-black uppercase mb-4">Before Reaching Out</h2>
          <p className="text-zinc-300">If your question is about refunds, please check our <Link href="/refund" className="text-red-400 hover:text-white font-bold">Refund Policy</Link> first, as all digital product sales are final.</p>
        </div>

        <div className="border-t-2 border-black pt-12">
          <h2 className="text-2xl font-black uppercase text-black mb-6">Follow Us</h2>
          <div className="flex items-center gap-4">
            <span className="text-zinc-700 font-bold">Instagram:</span>
            <a href="https://www.instagram.com/digitalsolutions.io/" target="_blank" rel="noopener noreferrer" className="text-red-700 hover:text-black font-bold">
              @digitalsolutions.io
            </a>
          </div>
        </div>
      </div>
    </BrandShell>
  )
}
