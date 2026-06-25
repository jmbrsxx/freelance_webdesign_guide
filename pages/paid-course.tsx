'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import MaterialIcon from '../components/MaterialIcon';

export default function PaidCoursePage() {
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  if (paymentSuccess) {
    const handleDownload = () => {
      // Trigger download of course materials
      const link = document.createElement('a');
      link.href = '/api/download-course';
      link.download = 'Freelance_Web_Design_Full_Course.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };

    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4 md:p-8">
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 max-w-2xl w-full">
          <div className="text-center mb-8">
            <div className="text-5xl md:text-6xl mb-4 text-green-600">
              <MaterialIcon name="celebration" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
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
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white overflow-x-hidden">
        {/* Navigation */}
        <nav className="border-b border-slate-200 bg-white sticky top-0 z-50">
          <div className="max-w-4xl mx-auto px-6 py-4">
            <Link href="/" className="text-slate-600 hover:text-slate-900 inline-flex items-center gap-2">
              <MaterialIcon name="arrow_back" />
              Back to Home
            </Link>
          </div>
        </nav>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-4 py-12 md:px-6 md:py-16">
        
        {/* Payment CTA Section */}
        <div className="mb-16 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg shadow-lg p-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-3 bg-blue-100 rounded-full">
              <MaterialIcon name="shopping_cart" />
            </div>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
            Get Full Course Access
          </h2>
          <p className="text-slate-600 mb-4">
            96 pages • 47 lessons • Complete freelance business blueprint
          </p>
          
           <div className="bg-white rounded-lg p-6 mb-6 w-fit mx-auto">
             <p className="text-slate-600 text-sm mb-1">Price</p>
             <p className="text-4xl font-bold text-slate-900">$27</p>
             <p className="text-slate-500 text-xs mt-2">One-time payment • Lifetime access</p>
           </div>

           <Link
             href="/checkout"
             className="w-fit mx-auto block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition transform hover:scale-105"
           >
            <span className="flex items-center gap-2">
              <MaterialIcon name="lock" />
              Proceed to Checkout
            </span>
          </Link>
          
          <p className="text-xs text-slate-500 mt-6">
            Secure payment via Stripe • 30-day money-back guarantee
          </p>
        </div>

        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-slate-900">
            The Complete Freelance Web Design & Development Course
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            96-Page System for Going from Zero Clients to a Working Freelance Business
          </p>
        </div>

        {/* Course Overview */}
        <div className="mb-16 bg-white border-2 border-blue-200 rounded-lg p-6 md:p-10 lg:p-12">
          <div className="flex items-start gap-4 mb-6">
            <MaterialIcon name="library_books" />
            <div>
               <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">Full Course Access</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Get everything from Module 1 through Module 8 — all 96 pages, 47 lessons, and every practical framework you need to build a profitable freelance web design business.
              </p>
            </div>
          </div>

          <div className="flex items-baseline gap-2 mb-4">
            <span className="text-4xl md:text-5xl font-bold text-blue-600">$27</span>
            <span className="text-slate-600">one-time payment</span>
          </div>

          <p className="text-slate-600">
            After purchase, you'll receive an email with download links for all modules in PDF format.
          </p>
        </div>

        {/* All 8 Modules */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
            <MaterialIcon name="menu_book" />
            All 8 Modules
          </h2>
          
          <div className="space-y-4">
            {[
              {
                num: 1,
                title: "Mindset & Niche Selection",
                description: "Choose your niche strategically and develop the right mindset for success",
                icon: "psychology"
              },
              {
                num: 2,
                title: "Tech Stack & Building Your First Portfolio",
                description: "Learn which tools to use and create your first portfolio project",
                icon: "build"
              },
              {
                num: 3,
                title: "Portfolio Strategy & Case Studies",
                description: "Structure your portfolio to attract high-paying clients",
                icon: "work"
              },
              {
                num: 4,
                title: "Pricing Models & Rate Calculation",
                description: "Calculate rates based on your income goals, not time",
                icon: "attach_money"
              },
              {
                num: 5,
                title: "Client Acquisition (5 Different Channels)",
                description: "Find clients through proven channels: cold email, referrals, LinkedIn, agencies, and more",
                icon: "people"
              },
              {
                num: 6,
                title: "Sales, Proposals & Contracts",
                description: "Close deals with confident proposals and protect yourself with solid contracts",
                icon: "description"
              },
              {
                num: 7,
                title: "Client Management & Project Delivery",
                description: "Deliver exceptional projects and build long-term client relationships",
                icon: "assignment"
              },
              {
                num: 8,
                title: "Scaling, Systems & Recurring Revenue",
                description: "Build recurring revenue and scale your business beyond hourly work",
                icon: "trending_up"
              },
            ].map((module) => (
              <div key={module.num} className="bg-white border border-slate-200 p-6 rounded-lg hover:border-blue-300 hover:shadow-md transition">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded text-blue-600 flex-shrink-0">
                    <MaterialIcon name={module.icon} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-900">
                      Module {module.num}: {module.title}
                    </h3>
                    <p className="text-slate-600 mt-2">{module.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Practical Frameworks */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
            <MaterialIcon name="checklist" />
            Practical Frameworks Included
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Rate calculator (work backward from income goal)",
              "Pricing decision tree (hourly vs. project vs. retainer)",
              "Cold email template + follow-up sequence",
              "Discovery call framework (10 key questions)",
              "Proposal structure (what wins deals)",
              "8 essential contract clauses",
              "Pre-launch checklist (25 critical points)",
              "Client management templates & systems"
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-white border border-slate-200 p-4 rounded-lg">
                <MaterialIcon name="check_circle" outlined />
                <span className="text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Why This Works */}
        <div className="mb-16 bg-slate-100 border border-slate-300 rounded-lg p-6 md:p-10 lg:p-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <MaterialIcon name="verified" />
            Why This Works
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Most freelancers fail from lack of systems, not lack of skill. This complete guide organizes everything in one place: how to position yourself, price confidently, find clients through multiple channels, close deals, protect yourself with contracts, deliver successfully, and build recurring revenue. Each module builds on the last.
          </p>
        </div>

        {/* Perfect For */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
            <MaterialIcon name="target_audience" />
            Perfect For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Freelancers learning the business side (0-2 years in)",
              "Designers/developers tired of undercharging",
              "Anyone struggling to find consistent clients",
              "People who want frameworks they can reference repeatedly",
              "Creators wanting to understand systems before scaling",
              "Anyone serious about building a sustainable business"
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <MaterialIcon name="done" outlined />
                <span className="text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* What You Get */}
        <div className="mb-16 bg-blue-50 border border-blue-200 rounded-lg p-6 md:p-10 lg:p-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <MaterialIcon name="card_giftcard" />
            What You Get
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <MaterialIcon name="check" />
              <div>
                <p className="font-semibold text-slate-900">Lifetime Access</p>
                <p className="text-slate-600">One payment, forever access to all content</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MaterialIcon name="check" />
              <div>
                <p className="font-semibold text-slate-900">PDF Download</p>
                <p className="text-slate-600">Download all 96 pages to read offline</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MaterialIcon name="check" />
              <div>
                <p className="font-semibold text-slate-900">All Future Updates</p>
                <p className="text-slate-600">New content and frameworks added automatically</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MaterialIcon name="check" />
              <div>
                <p className="font-semibold text-slate-900">Templates & Tools</p>
                <p className="text-slate-600">Ready-to-use proposals, contracts, and checklists</p>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}

