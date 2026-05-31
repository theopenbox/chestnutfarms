import React from "react";
import { CowIcon, PigIcon, SheepIcon, GoatIcon } from "./AnimalIcons";

export default function Footer() {
  const mapQuery = encodeURIComponent("7355 Burgess Falls Road, Sparta, TN 38583");
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${mapQuery}`;

  return (
    <footer id="hours-location" className="bg-forest-green text-cream border-t-4 border-barn-red relative z-10">
      {/* Decorative farm motif overlay */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-repeat" style={{ backgroundImage: "url('/images/hero_bg.png')" }} />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-16 md:py-20 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
        
        {/* Column 1: Brand & About */}
        <div className="flex flex-col space-y-6">
          <div>
            <h4 className="font-serif text-2xl font-extrabold text-cream flex items-center gap-2">
              Chestnut Oaks
            </h4>
            <span className="font-serif text-sm italic text-warm-gold block mt-0.5">
              Farm Store & Kitchen
            </span>
          </div>
          
          <p className="text-sm text-cream/80 leading-relaxed font-serif">
            Offering local wood-smoked barbecue, slow cooked homestyle meals, and local crafts in Sparta, Tennessee. Stop by today and experience honest, farm-fresh cooking.
          </p>

          <div className="flex items-center gap-3 text-warm-gold/75 pt-2">
            <CowIcon className="w-6 h-6" />
            <PigIcon className="w-6 h-6" />
            <GoatIcon className="w-6 h-6" />
            <SheepIcon className="w-6 h-6" />
          </div>
        </div>

        {/* Column 2: Hours of Operation */}
        <div className="flex flex-col space-y-4">
          <h4 className="font-serif text-lg font-bold text-warm-gold uppercase tracking-wider border-b border-cream/10 pb-2">
            Kitchen Hours
          </h4>
          <ul className="space-y-2.5 text-sm font-serif">
            <li className="flex justify-between">
              <span className="font-semibold text-cream/90">Monday:</span>
              <span className="text-cream/85">11:00 am - 5:00 pm</span>
            </li>
            <li className="flex justify-between text-cream/50 italic">
              <span>Tuesday:</span>
              <span>Closed</span>
            </li>
            <li className="flex justify-between text-cream/50 italic">
              <span>Wednesday:</span>
              <span>Closed</span>
            </li>
            <li className="flex justify-between">
              <span className="font-semibold text-cream/90">Thursday:</span>
              <span className="text-cream/85">11:00 am - 5:00 pm</span>
            </li>
            <li className="flex justify-between">
              <span className="font-semibold text-cream/90">Friday:</span>
              <span className="text-cream/85 font-semibold text-warm-gold">11:00 am - 7:00 pm</span>
            </li>
            <li className="flex justify-between">
              <span className="font-semibold text-cream/90">Saturday:</span>
              <span className="text-cream/85">11:00 am - 6:00 pm</span>
            </li>
            <li className="flex justify-between text-cream/50 italic">
              <span>Sunday:</span>
              <span>Closed</span>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact & Directions */}
        <div className="flex flex-col space-y-5">
          <h4 className="font-serif text-lg font-bold text-warm-gold uppercase tracking-wider border-b border-cream/10 pb-2">
            Contact & Location
          </h4>
          
          <div className="space-y-4 text-sm font-serif">
            {/* Address */}
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-warm-gold mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div>
                <p className="font-semibold text-cream">Our Storefront:</p>
                <a 
                  href={directionsUrl}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-warm-gold underline transition-colors block text-cream/80"
                >
                  7355 Burgess Falls Road<br />Sparta, TN 38583
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-warm-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h2.28a1 1 0 01.94.725l.548 2.2a1 1 0 00.096.868l-1.648 1.65a18.847 18.847 0 005.197 5.197l1.649-1.649a1 1 0 00.868-.096l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <div>
                <p className="font-semibold text-cream">Give Us a Call:</p>
                <a 
                  href="tel:9317613276" 
                  className="hover:text-warm-gold font-bold transition-colors text-cream/80"
                >
                  931-761-FARM (3276)
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-warm-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <div>
                <p className="font-semibold text-cream">Email Address:</p>
                <a 
                  href="mailto:chestnutoaksfarmstore@gmail.com" 
                  className="hover:text-warm-gold transition-colors text-cream/80 break-all"
                >
                  chestnutoaksfarmstore@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Sub-footer copyright */}
      <div className="bg-wood-brown text-cream/60 py-6 border-t border-cream/5 text-center text-xs font-serif">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p>&copy; {new Date().getFullYear()} Chestnut Oaks Farm Store and Kitchen. All Rights Reserved.</p>
          <a 
            href={directionsUrl}
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-warm-gold underline transition-colors"
          >
            Sparta, TN &bull; Directions
          </a>
        </div>
      </div>
    </footer>
  );
}
