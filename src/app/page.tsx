import React from 'react';
import Image from 'next/image';
import Logo from '@/components/Logo';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-18 md:h-20">
            <div className="flex-shrink-0">
              <div className="h-12 sm:h-14 md:h-16">
                <Logo size="lg" />
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#home" className="text-slate-700 hover:text-slate-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</a>
                <a href="/#how-it-works" className="text-slate-700 hover:text-slate-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">How It Works</a>
                <a href="/#safety" className="text-slate-700 hover:text-slate-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">Safety</a>
                <a href="#who-its-for" className="text-slate-700 hover:text-slate-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">Who It's For</a>
                <a href="/#contact" className="text-slate-700 hover:text-slate-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">Contact</a>
              </div>
            </div>
            <div className="md:hidden">
              <div className="flex space-x-2">
                <a href="/#contact" className="bg-slate-900 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-800 transition-colors">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <Image 
            src="/hero-bg.jpg" 
            alt="EMDmeet Hero Background" 
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="text-center">
            <div className="mb-12">
              <div className="text-2xl font-bold text-red-600 mb-8">
                VERSION TEST - NEW BUILD
              </div>
              <div className="h-20 sm:h-24 md:h-28 lg:h-32 mx-auto">
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Verified, curated offline one-on-one social connections in selected Canadian regions.
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 max-w-4xl mx-auto mb-8 leading-relaxed">
              We invite or accept applications from people in selected Canadian regions, verify real identities, review applicant quality, and facilitate meaningful in-person social meetings through a structured matching and safety review process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a href="/#contact" className="bg-white text-slate-900 px-8 py-4 rounded-full text-lg font-medium hover:bg-slate-100 transition-all transform hover:scale-105 shadow-lg">
                Contact Us
              </a>
              <a href="/#how-it-works" className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white hover:text-slate-900 transition-all transform hover:scale-105">
                Learn How It Works
              </a>
            </div>
            <p className="text-sm text-white/80">
              Currently focused on selected Canadian regions.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">How It Works</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              EMDmeet uses a structured process to help create safer, more intentional, and higher-quality offline social experiences.
            </p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { step: 1, title: "Invite or accept applications from people in selected regions" },
              { step: 2, title: "Officially review identity and profile authenticity" },
              { step: 3, title: "Assess user qualifications, preferences, and compatibility factors" },
              { step: 4, title: "Efficiently facilitate offline real-person social meetings" },
              { step: 5, title: "Collect feedback after each meeting and manage user credit standing" }
            ].map((item) => (
              <div key={item.step} className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-all transform hover:scale-105">
                <div className="flex items-center justify-center w-12 h-12 bg-slate-900 text-white rounded-full text-lg font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 leading-tight">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Verification Section */}
      <section id="safety" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Safety & Verification</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Real-person review and moderation</h3>
              <p className="text-slate-600 leading-relaxed">
                Applicants are reviewed to help ensure profile authenticity and platform trust.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Meeting confirmation flow</h3>
              <p className="text-slate-600 leading-relaxed">
                Both sides go through confirmation steps before a meeting is finalized.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Anti-no-show and conduct enforcement mechanism</h3>
              <p className="text-slate-600 leading-relaxed">
                Structured confirmation and accountability measures help reduce no-shows and protect user experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section id="who-its-for" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Who It's For</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-12">
              EMDmeet is designed for people in selected regions of Canada who are looking for more intentional, better-managed, offline one-on-one social experiences.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 text-center border border-slate-200">
              <div className="text-3xl mb-4">🌍</div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Selected regional communities</h3>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center border border-blue-200">
              <div className="text-3xl mb-4">🤝</div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">People seeking real offline connection</h3>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 text-center border border-purple-200">
              <div className="text-3xl mb-4">✓</div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Users who value verified and structured matching</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Contact</h2>
          <p className="text-xl text-slate-600 mb-8">
            For business, partnership, or general inquiries, please contact us at:
          </p>
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 mb-8">
            <a href="mailto:admin@emdmeet.com" className="text-2xl font-semibold text-slate-900 hover:text-blue-600 transition-colors">
              admin@emdmeet.com
            </a>
          </div>
          <p className="text-sm text-slate-500">
            Official website of EMDmeet.
          </p>
        </div>
      </section>

      {/* Company Information Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 shadow-sm border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Company Information</h2>
            <div className="space-y-4 text-center">
              <p className="text-lg text-slate-700 leading-relaxed">
                EMDmeet is developed, owned, and operated by 17494165 CANADA INC.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                emdmeet-web.vercel.app is the official website of EMDmeet.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                17494165 CANADA INC. is the legal entity responsible for the product, branding, and operation of EMDmeet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="mb-4 md:mb-0">
              <div className="h-12">
                <Logo size="lg" />
              </div>
            </div>
            <div className="flex space-x-6">
              <a href="/privacy" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="/terms" className="text-slate-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="/safety" className="text-slate-400 hover:text-white transition-colors">Safety</a>
              <a href="/contact" className="text-slate-400 hover:text-white transition-colors">Contact</a>
              <a href="/company" className="text-slate-400 hover:text-white transition-colors">Company</a>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8">
            <div className="text-center">
              <p className="text-slate-400 text-sm">
                EMDmeet is developed and operated by 17494165 CANADA INC.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
