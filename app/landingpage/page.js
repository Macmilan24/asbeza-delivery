import Navbar from "@/components/main/Navbar";
import React from "react";
import Hero from "./components/Hero";
import Features from "./components/Features";
import HIW from "./components/HIW";
import Footer from "@/components/main/Footer";

export default function LandingPage() {
  return (
    <div className="w-full relative overflow-x-hidden bg-[#f8f9e9]">
      <Navbar />
      <Hero />
      <Features />
      <HIW />
      <Footer />
    </div>
  );
}
