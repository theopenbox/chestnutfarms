"use client";

import React, { useState, useMemo } from "react";
import menuData from "@/data/menu.json";

interface MenuItem {
  name: string;
  description?: string;
  note?: string;
  prices: Record<string, number>;
  isSmoked: boolean;
}

interface MenuCategory {
  id: string;
  name: string;
  subtitle: string;
  items: MenuItem[];
}

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = menuData.categories as MenuCategory[];
  const footnotes = menuData.footnotes;

  // Handle category switching
  const handleCategorySelect = (id: string) => {
    setActiveCategory(id);
  };

  // Filter items based on active category and search query
  const filteredCategories = useMemo(() => {
    return categories
      .map((cat) => {
        // If a specific category is active and doesn't match this category's ID, skip it (unless "all" is active)
        if (activeCategory !== "all" && cat.id !== activeCategory) {
          return null;
        }

        // Filter items in this category by search query
        const matchedItems = cat.items.filter((item) => {
          const nameMatch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
          const descMatch = item.description?.toLowerCase().includes(searchQuery.toLowerCase()) || false;
          const noteMatch = item.note?.toLowerCase().includes(searchQuery.toLowerCase()) || false;
          return nameMatch || descMatch || noteMatch;
        });

        if (matchedItems.length === 0) return null;

        return {
          ...cat,
          items: matchedItems,
        };
      })
      .filter((cat): cat is MenuCategory => cat !== null);
  }, [activeCategory, searchQuery, categories]);

  // Helper to render pricing structure dynamically
  const renderPrices = (prices: Record<string, number>) => {
    return (
      <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm font-bold font-serif mt-1">
        {Object.entries(prices).map(([key, val]) => {
          let label = key.charAt(0).toUpperCase() + key.slice(1);
          
          if (key === "single") {
            return (
              <span key={key} className="text-barn-red text-base md:text-lg">
                ${val.toFixed(2)}
              </span>
            );
          }

          return (
            <span key={key} className="text-wood-brown flex items-center gap-1">
              <span className="text-[10px] uppercase font-sans font-bold tracking-wider text-wood-brown-light/75 bg-wood-brown-light/5 px-1.5 py-0.5 rounded">
                {label}
              </span>
              <span className="text-barn-red text-sm md:text-base">${val.toFixed(2)}</span>
            </span>
          );
        })}
      </div>
    );
  };

  return (
    <section id="menu" className="py-20 px-4 md:px-8 bg-cream scroll-mt-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-12 h-1 bg-barn-red mx-auto mb-4" />
          <h2 className="font-serif text-4xl md:text-5xl font-extrabold text-wood-brown mb-3">
            Our Kitchen Menu
          </h2>
          <p className="font-serif italic text-wood-brown-light max-w-xl mx-auto">
            Hickory smoked meats, slow-baked potatoes, farm fresh salads, and delicious country treats.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="mb-10 space-y-4">
          {/* Search bar */}
          <div className="max-w-md mx-auto relative">
            <input
              type="text"
              placeholder="Search the menu (e.g. brisket, fries)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full border border-wood-brown-light/20 bg-cream-dark/20 text-wood-brown font-serif placeholder-wood-brown-light/50 focus:outline-none focus:ring-2 focus:ring-forest-green focus:border-transparent text-sm transition-all"
            />
            <svg
              className="w-5 h-5 text-wood-brown-light/50 absolute left-3.5 top-1/2 -translate-y-1/2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-wood-brown-light/50 hover:text-wood-brown text-xs"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Tabs (Horizontally scrollable on mobile) */}
          <div className="flex overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-none justify-start md:justify-center gap-2">
            <button
              onClick={() => handleCategorySelect("all")}
              className={`flex-shrink-0 px-4 py-2 rounded-full font-serif text-sm font-semibold tracking-wider transition-all duration-200 border ${
                activeCategory === "all"
                  ? "bg-forest-green text-cream border-forest-green shadow-md"
                  : "bg-cream-dark/30 hover:bg-cream-dark/60 text-wood-brown-light border-wood-brown-light/10"
              }`}
            >
              Full Menu
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategorySelect(cat.id)}
                className={`flex-shrink-0 px-4 py-2 rounded-full font-serif text-sm font-semibold tracking-wider transition-all duration-200 border ${
                  activeCategory === cat.id
                    ? "bg-forest-green text-cream border-forest-green shadow-md"
                    : "bg-cream-dark/30 hover:bg-cream-dark/60 text-wood-brown-light border-wood-brown-light/10"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Smoked Warning Alert Bar */}
        <div className="mb-8 p-4 bg-barn-red/5 border border-barn-red/20 rounded text-center text-sm text-wood-brown max-w-3xl mx-auto flex items-center justify-center gap-3">
          <span className="text-barn-red text-xl font-bold font-serif animate-pulse">*</span>
          <p className="font-serif italic text-xs md:text-sm text-wood-brown-light">
            Starred items (<strong className="text-barn-red">*</strong>) contain our signature wood-smoked meats. Smoked meats naturally retain a pink coloring inside, cooked perfectly to temperature.
          </p>
        </div>

        {/* Menu Listings */}
        {filteredCategories.length > 0 ? (
          <div className="space-y-16">
            {filteredCategories.map((category) => (
              <div key={category.id} className="scroll-mt-24">
                {/* Category Header */}
                <div className="border-b-2 border-wood-brown-light/10 pb-3 mb-8">
                  <h3 className="font-serif text-2xl md:text-3xl font-extrabold text-forest-green flex items-center gap-2">
                    {category.name}
                  </h3>
                  <p className="text-xs md:text-sm italic text-wood-brown-light mt-1 font-serif">
                    {category.subtitle}
                  </p>
                </div>

                {/* Items Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                  {category.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="group flex flex-col justify-between p-4 bg-cream border border-transparent rounded hover:border-wood-brown-light/10 hover:bg-cream-dark/10 transition-all duration-200"
                    >
                      <div>
                        {/* Name and Price Line */}
                        <div className="flex items-start justify-between gap-4">
                          <h4 className="font-serif text-base md:text-lg font-bold text-wood-brown group-hover:text-forest-green transition-colors flex items-center gap-1">
                            {item.name}
                            {item.isSmoked && (
                              <span className="text-barn-red font-bold text-base md:text-lg leading-none" title="Slow Wood-Smoked Meat">*</span>
                            )}
                          </h4>
                          {/* Sells simple prices in-line if it's only one price */}
                          {"single" in item.prices && (
                            <span className="font-serif font-bold text-barn-red text-base md:text-lg flex-shrink-0">
                              ${item.prices.single.toFixed(2)}
                            </span>
                          )}
                        </div>

                        {/* Description */}
                        {item.description && (
                          <p className="text-xs md:text-sm text-wood-brown-light/80 mt-1 leading-relaxed">
                            {item.description}
                          </p>
                        )}

                        {/* Special Custom Notes (e.g. "Includes Drink", "Add cheese $0.75") */}
                        {item.note && (
                          <span className="inline-block text-[11px] font-semibold text-warm-gold font-serif italic mt-1.5 bg-warm-gold/5 px-2 py-0.5 rounded border border-warm-gold/10">
                            {item.note}
                          </span>
                        )}
                      </div>

                      {/* Render Multi-Pricing (e.g. Sandwich vs Meal, Small vs Large) */}
                      {! ("single" in item.prices) && (
                        <div className="mt-2.5 pt-2.5 border-t border-dashed border-wood-brown-light/10 flex justify-end">
                          {renderPrices(item.prices)}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-cream-dark/10 border border-dashed border-wood-brown-light/10 rounded-lg max-w-md mx-auto">
            <svg className="w-10 h-10 text-wood-brown-light/35 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <p className="font-serif font-bold text-wood-brown mb-1">No items found</p>
            <p className="text-xs text-wood-brown-light">Try adjusting your search filters or check your spelling.</p>
          </div>
        )}

        {/* Footer Notes/Disclaimers */}
        <div className="mt-16 pt-8 border-t border-wood-brown-light/20 max-w-4xl mx-auto space-y-3">
          <h5 className="font-serif text-xs md:text-sm font-extrabold text-wood-brown uppercase tracking-wider">
            Important Menu Notes:
          </h5>
          <ul className="list-disc pl-5 space-y-2 text-xs md:text-sm text-wood-brown-light/80 font-serif leading-relaxed">
            {footnotes.map((fn, idx) => (
              <li key={idx} className={fn.startsWith("*") ? "text-barn-red/90 font-medium" : ""}>
                {fn}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
