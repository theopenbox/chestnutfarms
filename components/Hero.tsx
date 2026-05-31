import React from "react";
import { CowIcon, PigIcon, SheepIcon, GoatIcon } from "./AnimalIcons";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[90vh] py-24 text-cream overflow-hidden">
      {/* Background Image with Dark Wood Warm Vignette Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out hover:scale-105"
        style={{
          backgroundImage: "url('/images/hero_bg.png')",
        }}
      />
      <div className="absolute inset-0 bg-black/55 bg-gradient-to-t from-wood-brown via-black/40 to-black/60" />

      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-barn-red z-20" />

      {/* Main Signboard Content Container */}
      <div className="relative z-10 w-full max-w-4xl px-4 flex flex-col items-center text-center">
        {/* Double Border Wooden Sign Styling */}
        <div className="w-full max-w-2xl p-8 md:p-12 bg-wood-brown/95 border-double border-4 border-warm-gold rounded shadow-2xl backdrop-blur-[2px]">
          {/* Row of Farm Animals SVGs */}
          <div className="flex justify-center items-center gap-4 md:gap-6 mb-6 text-warm-gold/90">
            <CowIcon className="w-8 h-8 md:w-10 md:h-10 hover:scale-110 transition-transform cursor-pointer" title="Cows" />
            <PigIcon className="w-8 h-8 md:w-10 md:h-10 hover:scale-110 transition-transform cursor-pointer" title="Pigs" />
            <GoatIcon className="w-8 h-8 md:w-10 md:h-10 hover:scale-110 transition-transform cursor-pointer" title="Goats" />
            <SheepIcon className="w-8 h-8 md:w-10 md:h-10 hover:scale-110 transition-transform cursor-pointer" title="Sheep" />
          </div>

          <h1 className="font-serif text-4xl md:text-6xl font-extrabold tracking-tight text-cream mb-2 drop-shadow-md">
            Chestnut Oaks
          </h1>
          <p className="font-serif text-2xl md:text-3xl font-normal italic text-warm-gold mt-1 drop-shadow">
            Farm Store & Kitchen
          </p>

          <div className="w-24 h-[2px] bg-warm-gold mx-auto my-6 rounded-full" />

          {/* Tagline */}
          <p className="font-serif text-xl md:text-2xl italic text-cream/90 max-w-md mx-auto mb-8 tracking-wide">
            &ldquo;Farm to Table&rdquo;
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#menu"
              className="inline-block px-8 py-3.5 bg-barn-red text-cream font-bold font-serif uppercase tracking-wider rounded border border-barn-red-hover shadow-lg hover:bg-barn-red-hover transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0 text-sm"
            >
              View Menu
            </a>
            <a
              href="#hours-location"
              className="inline-block px-8 py-3.5 bg-forest-green text-cream font-bold font-serif uppercase tracking-wider rounded border border-forest-green-hover shadow-lg hover:bg-forest-green-hover transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0 text-sm"
            >
              Store Hours & Info
            </a>
          </div>
        </div>

        {/* Decorative Scroll Down Indicator */}
        <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-80 animate-bounce">
          <span className="text-xs uppercase tracking-widest font-serif text-warm-gold drop-shadow-sm font-semibold">
            Scroll to Explore
          </span>
          <svg
            className="w-5 h-5 text-warm-gold drop-shadow-sm"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M19 13l-7 7-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
