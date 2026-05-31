import React from "react";
import Hero from "@/components/Hero";
import Welcome from "@/components/Welcome";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Main content sections */}
      <main className="flex-grow">
        <Hero />
        <Welcome />
        <Menu />
      </main>
      
      {/* Site-wide footer */}
      <Footer />
    </>
  );
}
