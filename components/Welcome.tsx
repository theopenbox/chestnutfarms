import React from "react";
import { CowIcon, PigIcon } from "./AnimalIcons";

export default function Welcome() {
  return (
    <section className="relative py-20 px-4 md:px-8 bg-cream-dark/40 border-b border-wood-brown-light/10">
      {/* Decorative background animal watermark element */}
      <div className="absolute top-1/2 left-4 md:left-12 -translate-y-1/2 opacity-[0.02] text-wood-brown pointer-events-none hidden lg:block">
        <CowIcon className="w-64 h-64" />
      </div>
      <div className="absolute top-1/2 right-4 md:right-12 -translate-y-1/2 opacity-[0.02] text-wood-brown pointer-events-none hidden lg:block">
        <PigIcon className="w-64 h-64" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Welcome Card */}
        <div className="bg-cream border border-wood-brown-light/20 p-8 md:p-12 rounded-lg shadow-md md:shadow-lg text-center relative overflow-hidden">
          {/* Subtle Top Accent */}
          <div className="absolute top-0 inset-x-0 h-1 bg-forest-green" />

          {/* Heading */}
          <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-forest-green mb-2">
            Welcome to the Farm Table
          </h2>
          <p className="font-serif text-sm md:text-base text-warm-gold font-semibold uppercase tracking-wider mb-6">
            Sparta&rsquo;s Cozy Country Store & Kitchen
          </p>

          <div className="w-16 h-[1px] bg-wood-brown-light/30 mx-auto mb-8" />

          {/* Body Content */}
          <div className="max-w-2xl mx-auto space-y-6 text-wood-brown-light text-base md:text-lg leading-relaxed">
            <p>
              Step inside <strong>Chestnut Oaks Farm Store and Kitchen</strong> and smell the sweet hickory wood smoke. Nestled right along Burgess Falls Road in Sparta, Tennessee, we invite you to experience real Southern hospitality and comfort food.
            </p>
            <p>
              We specialize in <strong>slow-smoked meats</strong>, including our tender beef brisket, hickory-pulled pork, smoked bologna, and hand-pressed burgers. Every single dish is prepared with the finest farm-fresh ingredients and the same care we serve to our own family.
            </p>
            <p>
              Whether you are stopping by to browse our country store or pulling up a chair in our kitchen for a hearty meal, we are thrilled to have you. Grab a tall glass of sweet tea, order one of our famous loaded potatoes, and save room for some home-style banana pudding!
            </p>
          </div>

          {/* Highlights Icons Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8 border-t border-wood-brown-light/10">
            <div className="flex flex-col items-center p-3">
              <div className="w-12 h-12 rounded-full bg-forest-green/10 flex items-center justify-center text-forest-green mb-3">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <span className="font-serif text-xs md:text-sm font-bold text-wood-brown uppercase tracking-wider">Locally Owned</span>
            </div>

            <div className="flex flex-col items-center p-3">
              <div className="w-12 h-12 rounded-full bg-barn-red/10 flex items-center justify-center text-barn-red mb-3">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <span className="font-serif text-xs md:text-sm font-bold text-wood-brown uppercase tracking-wider">Wood-Smoked</span>
            </div>

            <div className="flex flex-col items-center p-3">
              <div className="w-12 h-12 rounded-full bg-warm-gold/10 flex items-center justify-center text-warm-gold mb-3">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <span className="font-serif text-xs md:text-sm font-bold text-wood-brown uppercase tracking-wider">Fresh Ingredients</span>
            </div>

            <div className="flex flex-col items-center p-3">
              <div className="w-12 h-12 rounded-full bg-forest-green/10 flex items-center justify-center text-forest-green mb-3">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="font-serif text-xs md:text-sm font-bold text-wood-brown uppercase tracking-wider">Family Friendly</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
