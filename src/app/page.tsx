// Copyright © 2025 Catenary Foundation. All rights reserved.
"use client"; // Add this directive for using state

import Image from "next/image";
import { useState } from "react"; // Import useState

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Add state for menu toggle

  return (
    // Ensured main has default bg and flex-col, added items-center
    <main className="bg-background min-h-screen w-full flex flex-col items-center"> 
      {/* Header/Navbar */}
      {/* Reverted header background, kept padding adjustments */}
      {/* Make header full width since main is now items-center */}
      <header className="sticky top-0 z-50 w-full flex items-center justify-between px-4 sm:px-8 py-2 bg-background/80 backdrop-blur-md border-b border-white/10"> {/* Reverted bg, kept padding */}
        {/* Logo */}
        <div className="flex items-center gap-2">
          {/* Adjusted logo size: smaller screens further reduced by 15%, larger screens increased by 8% */}
          <Image src="/images/catenary-logo.png" alt="Catenary Logo" width={43} height={12} className="sm:w-[108px] sm:h-[30px] object-contain" /> 
        </div>

        {/* Desktop Nav & Button (Now hidden on all screens) */}
        <div className="hidden items-center gap-6 lg:gap-8"> {/* Removed md:flex */}
          <nav className="flex gap-6 lg:gap-8 text-white font-medium text-sm lg:text-base"> {/* Adjusted gaps and font size */}
            <a href="#" className="hover:text-primary">Build</a>
            <a href="#" className="hover:text-primary">Whitepaper</a>
            <a href="#" className="hover:text-primary">Docs</a>
          </nav>
          {/* Learn More Button Removed */}
        </div>

        {/* Mobile Menu Button (Now visible on all screens) */}
        <button 
          className="text-white p-2"  // Removed md:hidden
          onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle menu state
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
           {/* Hamburger/Close Icon */}
           {isMenuOpen ? (
             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg> // Close icon
           ) : (
             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg> // Hamburger icon
           )}
        </button>

        {/* Mobile Menu Dropdown (Conditionally rendered, now visible on all screen sizes when open) */}
        {isMenuOpen && (
          <div className="absolute top-full right-0 mt-1 w-48 bg-background/90 backdrop-blur-md border border-white/10 rounded-lg shadow-lg py-2 z-50"> {/* Removed md:hidden */}
            <nav className="flex flex-col px-4 py-2 gap-3">
              {/* Build link remains href="#" as it should do nothing */}
              <a href="#" className="text-white hover:text-primary" onClick={() => setIsMenuOpen(false)}>Build</a>
              {/* Whitepaper links to the internal page */}
              <a href="/whitepaper" className="text-white hover:text-primary" onClick={() => setIsMenuOpen(false)}>Whitepaper</a>
              {/* Docs links to the external site, opens in new tab */}
              <a href="https://docs.catenary.xyz" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary" onClick={() => setIsMenuOpen(false)}>Docs</a>
            </nav>
            {/* Learn More Button Removed from Mobile Menu */}
          </div>
        )}
      </header>

      {/* Hero Section - Removed background image style, enhanced gradient/shape */}
      <section 
        className="relative flex flex-col items-center justify-center min-h-[380px] sm:min-h-[480px] md:min-h-[540px] px-4 sm:px-6 pt-16 sm:pt-20 mb-[-40px] sm:mb-[-48px] overflow-hidden"
      >
        {/* Enhanced Artistic Background */}
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          {/* Subtle radial gradient */}
          <div className="absolute inset-0 bg-gradient-radial from-primary/15 via-background/20 to-background opacity-80"></div>
          {/* Added a subtle shape/blur element - Adjusted size */}
          <div className="absolute w-[37.5%] h-[37.5%] bg-primary/10 rounded-full blur-3xl opacity-40 animate-pulse"></div>
        </div>
        <div className="relative z-10 flex flex-col items-center text-center gap-6">
          {/* Updated path to PNG logo - Increased size by 100% */}
          <Image src="/images/catenary-logo.png" alt="Catenary Logo" width={200} height={56} className="sm:w-[240px] sm:h-[68px] object-contain mb-[-10px]" />
          {/* Responsive text size - Reduced by ~50% */}
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
            Next-Gen <span style={{ color: '#ffd230' }}>Decentralized</span> Infrastructure for <span className="text-primary">Global Trade</span>
          </h1>
          {/* Removed descriptive paragraph */}
          {/* Responsive button size, updated link */}
          <a href="/whitepaper" className="bg-primary text-black font-semibold rounded-full px-6 py-2.5 sm:px-7 sm:py-3 mt-4 hover:scale-105 transition shadow-md shadow-primary/30"> 
            Read Whitepaper
          </a>
        </div>
      </section>

      {/* Why Catenary -- Feature Block */}
      <section className="relative flex flex-col items-center py-16 sm:py-24 px-4 sm:px-6 bg-background w-full">
        <div className="w-full max-w-2xl lg:max-w-3xl text-center"> {/* Centered text container */}
          <span className="text-primary font-semibold text-xs sm:text-sm uppercase">Why Catenary</span>
          <h2 className="font-bold text-2xl sm:text-3xl text-white mt-2 mb-3 sm:mb-4">Reimagining Cross-Border Finance</h2>
          <p className="text-white/80 text-base sm:text-lg">
            Traditional cross-border payments are often slow, costly, and complex, especially in emerging markets. Catenary addresses this with a specialized Layer 3 architecture, offering high-speed, low-cost trade settlement, efficient on-chain trading via a native CLOB, and seamless connectivity to existing financial systems through innovative protocols like Geass and MSAC.
          </p>
        </div>
      </section>

      {/* Explainer Cards Row */}
      {/* Reverted background, kept padding/gap adjustments, added pattern */}
      <section className="relative w-full px-4 sm:px-6 py-16 sm:py-20 bg-black flex gap-4 sm:gap-6 justify-center items-stretch flex-wrap overflow-hidden"> {/* Added relative and overflow-hidden */}
         {/* Added subtle pattern div here */}
         <div className="absolute inset-0 z-0 opacity-[0.02]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}></div>
        {/* Card 1: Optimized L3 */}
        {/* Applied primary gradient background for consistency */}
        {/* Icon removed */}
        <div className="relative z-10 bg-gradient-to-b from-primary/15 to-primary/5 border border-white/15 rounded-2xl p-4 sm:p-5 flex-1 min-w-[210px] sm:min-w-[180px] sm:max-w-xs flex flex-col gap-3 sm:gap-4 items-center text-center transition duration-300 ease-in-out shadow-inner shadow-black/10 backdrop-blur-sm hover:scale-[1.02] hover:border-2 hover:border-primary/80 hover:bg-gradient-to-b hover:from-primary/10 hover:to-white/5 hover:shadow-2xl hover:shadow-primary/30 hover:ring-2 hover:ring-primary/30 hover:ring-offset-2 hover:ring-offset-black"> {/* Changed gradient */}
          {/* Responsive text size */}
          <h3 className="font-semibold text-lg sm:text-xl text-white">Optimized <span className="text-primary">L3 Architecture</span></h3> {/* Removed mb-1 */}
          {/* Responsive text size, increased opacity */}
          <p className="text-white/90 text-xs sm:text-sm">
            Built on the OP Stack settling to Base L2, Catenary offers high TPS, low costs via EigenDA, and fast ZK-powered finality for financial applications.
          </p>
        </div>
        {/* Card 2: Native CLOB & PoL */}
        {/* Applied primary gradient background for consistency */}
        {/* Icon removed */}
        <div className="relative z-10 bg-gradient-to-b from-primary/15 to-primary/5 border border-white/15 rounded-2xl p-4 sm:p-5 flex-1 min-w-[210px] sm:min-w-[180px] sm:max-w-xs flex flex-col gap-3 sm:gap-4 items-center text-center transition duration-300 ease-in-out shadow-inner shadow-black/10 backdrop-blur-sm hover:scale-[1.02] hover:border-2 hover:border-primary/80 hover:bg-gradient-to-b hover:from-primary/10 hover:to-white/5 hover:shadow-2xl hover:shadow-primary/30 hover:ring-2 hover:ring-primary/30 hover:ring-offset-2 hover:ring-offset-black"> {/* Changed gradient */}
          {/* Responsive text size */}
          <h3 className="font-semibold text-lg sm:text-xl text-white">Native <span className="text-primary">CLOB & PoL</span></h3> {/* Removed mb-1 */}
          {/* Responsive text size, increased opacity */}
          <p className="text-white/90 text-xs sm:text-sm">
            Features an on-chain Central Limit Order Book for efficient trading, incentivized by a Proof-of-Liquidity mechanism for deep, reliable markets.
          </p>
        </div>
        {/* Card 3: Intent-Driven & Connected */}
        {/* Applied primary gradient background for consistency */}
        <div className="relative z-10 bg-gradient-to-b from-primary/15 to-primary/5 border border-white/15 rounded-2xl p-4 sm:p-5 flex-1 min-w-[210px] sm:min-w-[180px] sm:max-w-xs flex flex-col gap-3 sm:gap-4 items-center text-center transition duration-300 ease-in-out shadow-inner shadow-black/10 backdrop-blur-sm hover:scale-[1.02] hover:border-2 hover:border-primary/80 hover:bg-gradient-to-b hover:from-primary/10 hover:to-white/5 hover:shadow-2xl hover:shadow-primary/30 hover:ring-2 hover:ring-primary/30 hover:ring-offset-2 hover:ring-offset-black"> {/* Changed gradient */}
          {/* Icon with background */}
          <div className="p-2 bg-black/20 rounded-full mb-3 inline-flex"> {/* Increased mb */}
            <Image src="/images/intents.jpeg" alt="Intent System & Connectivity Icon" width={32} height={32} className="sm:w-9 sm:h-9" /> {/* Improved alt text */}
          </div>
          {/* Responsive text size */}
          <h3 className="font-semibold text-lg sm:text-xl text-white">Intent-Driven & <span className="text-primary">Connected</span></h3> {/* Removed mb-1 */}
          {/* Responsive text size, increased opacity */}
          <p className="text-white/90 text-xs sm:text-sm">
            Utilizes the Geass intent system for user simplicity and guaranteed settlement, plus the MSAC AI agent council to bridge with external systems.
          </p>
        </div>
         {/* Card 4: MSAC AI Council */}
         {/* Applied primary gradient background for consistency */}
         <div className="relative z-10 bg-gradient-to-b from-primary/15 to-primary/5 border border-white/15 rounded-2xl p-4 sm:p-5 flex-1 min-w-[210px] sm:min-w-[180px] sm:max-w-xs flex flex-col gap-3 sm:gap-4 items-center text-center transition duration-300 ease-in-out shadow-inner shadow-black/10 backdrop-blur-sm hover:scale-[1.02] hover:border-2 hover:border-primary/80 hover:bg-gradient-to-b hover:from-primary/10 hover:to-white/5 hover:shadow-2xl hover:shadow-primary/30 hover:ring-2 hover:ring-primary/30 hover:ring-offset-2 hover:ring-offset-black"> {/* Changed gradient */}
          {/* Icon with background */}
          <div className="p-2 bg-black/20 rounded-full mb-3 inline-flex"> {/* Increased mb */}
            <Image src="/images/MSAC.jpeg" alt="MSAC AI Council Icon" width={32} height={32} className="sm:w-9 sm:h-9" /> {/* Improved alt text */}
          </div>
          {/* Responsive text size */}
          <h3 className="font-semibold text-lg sm:text-xl text-white">MSAC <span className="text-primary">AI Council</span></h3> {/* Removed mb-1 */}
          {/* Corrected nested p tag, increased opacity */}
          <p className="text-white/90 text-xs sm:text-sm">
            The Mobius Sybil Agentic Council acts as a secure, intelligent bridge connecting Catenary to traditional financial systems and external data sources.
          </p>
        </div>
      </section>

      {/* Use Cases Section */}
      {/* Reverted background, kept padding/gap adjustments */}
      <section className="relative w-full flex flex-col items-center gap-8 sm:gap-12 py-16 sm:py-20 px-4 sm:px-6 bg-background"> 
        {/* Title Content */}
        <div className="text-white max-w-lg flex flex-col items-center text-center">
          {/* Responsive text size - Reduced by ~25% */}
          {/* Corrected: Only 'Real-World' has #ffd230, 'Financial Challenges' uses text-primary */}
          <h2 className="text-lg sm:text-xl md:text-2xl mb-4 font-bold leading-tight">Solving <span style={{ color: '#ffd230' }}>Real-World</span> Challenges</h2> {/* Reduced text size */}
        </div>
        {/* Cards Container */}
        {/* Adjusted gap and max-width */}
        <div className="w-full flex flex-col sm:flex-row flex-wrap justify-center gap-6 sm:gap-8 max-w-3xl lg:max-w-5xl"> {/* Increased max-width for 3 cards */}
          {/* Use Case Card 1: Cross-Border Settlement */}
          {/* Applied enhanced styling */}
          <div className="flex-1 min-w-[195px] sm:min-w-[210px] sm:max-w-xs bg-gradient-to-b from-primary/15 to-primary/5 border border-white/15 rounded-2xl p-4 sm:p-5 shadow-lg flex flex-col justify-start relative backdrop-blur-sm transition duration-300 ease-in-out hover:scale-[1.02] hover:border-2 hover:border-primary/80 hover:shadow-2xl hover:shadow-primary/30 text-center gap-2">
            {/* TODO: Add relevant icon */}
            <span className="uppercase text-xs text-primary tracking-wide font-semibold">Cross-Border Settlement</span>
            <h3 className="font-semibold text-base sm:text-lg text-white leading-snug">Accelerated Trade Clearance</h3>
            <p className="text-white/90 text-xs sm:text-sm">
              Leverage L3 speed, ZK finality, and Geass intents for near-instant, low-cost international payments, bypassing traditional delays.
            </p>
          </div>
          {/* Use Case Card 2: Asset Tokenization */}
          {/* Applied enhanced styling */}
          <div className="flex-1 min-w-[195px] sm:min-w-[210px] sm:max-w-xs bg-gradient-to-b from-primary/15 to-primary/5 border border-white/15 rounded-2xl p-4 sm:p-5 shadow-lg flex flex-col justify-start relative backdrop-blur-sm transition duration-300 ease-in-out hover:scale-[1.02] hover:border-2 hover:border-primary/80 hover:shadow-2xl hover:shadow-primary/30 text-center gap-2">
            {/* TODO: Add relevant icon */}
            <span className="uppercase text-xs text-primary tracking-wide font-semibold">Asset Tokenization & Trading</span>
            <h3 className="font-semibold text-base sm:text-lg text-white leading-snug">Frictionless Asset Trading</h3>
            <p className="text-white/90 text-xs sm:text-sm">
              Turn real-world assets (bonds, property) into tradable tokens on the native CLOB, verified via MSAC, unlocking liquidity and fractional ownership.
            </p>
          </div>
          {/* Use Case Card 3: Programmable Finance */}
          {/* Applied enhanced styling */}
          <div className="flex-1 min-w-[195px] sm:min-w-[210px] sm:max-w-xs bg-gradient-to-b from-primary/15 to-primary/5 border border-white/15 rounded-2xl p-4 sm:p-5 shadow-lg flex flex-col justify-start relative backdrop-blur-sm transition duration-300 ease-in-out hover:scale-[1.02] hover:border-2 hover:border-primary/80 hover:shadow-2xl hover:shadow-primary/30 text-center gap-2">
            {/* TODO: Add relevant icon */}
            <span className="uppercase text-xs text-primary tracking-wide font-semibold">Programmable Finance</span>
            <h3 className="font-semibold text-base sm:text-lg text-white leading-snug">Automated Financial Products</h3>
            <p className="text-white/90 text-xs sm:text-sm">
              Utilize native stablecoins and Geass intents to build automated payment streams, escrows, or complex DeFi services directly on the L3.
            </p>
          </div>
        </div>
      </section>
      {/* Removed the duplicated content wrapper div */}

      {/* Combined Footer Section */}
      {/* Removed border-t, Added mt-auto to push footer down */}
      <footer className="relative w-full bg-black py-4 overflow-hidden mt-auto"> {/* Minimal vertical padding */}
        {/* Background Gradient */}
        <div className="absolute inset-0 flex items-center justify-center z-0">
          <div className="absolute -bottom-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/15 via-primary/5 to-transparent rounded-full opacity-40 blur-3xl"></div> {/* Adjusted gradient */}
        </div>

        {/* Content Container - Centered */}
        {/* Added mx-auto for explicit centering */}
        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 flex flex-col items-center justify-center gap-4"> 
             {/* Copyright */}
             {/* Removed sm:mt-0 as gap-4 handles spacing */}
            <div className="text-white text-xs opacity-50">© Catenary Foundation 2025</div>
          {/* Community Links & Copyright Wrapper */}
          {/* Always column, centered items */}
          <div className="flex flex-col items-center gap-4">
             {/* Community Links */}
            <div className="flex items-center justify-center gap-4">
               <a href="https://discord.com/invite/catenary" className="w-5 h-5 flex items-center justify-center rounded-full bg-white/10 border border-white/20 text-white hover:bg-primary hover:text-black hover:border-primary transition duration-300 ease-in-out group"> {/* Smaller icons */}
                <span className="sr-only">Join Discord</span>
                <Image src="https://ext.same-assets.com/1362928982/707092620.png" alt="Catenary Discord Community" width={20} height={20} className="opacity-80 group-hover:opacity-100 transition"/> {/* Improved alt text */}
              </a>
              <a href="https://x.com/CatenaryFDN" className="w-5 h-5 flex items-center justify-center rounded-full bg-white/10 border border-white/20 text-white hover:bg-primary hover:text-black hover:border-primary transition duration-300 ease-in-out group"> {/* Smaller icons */}
                <span className="sr-only">Follow on X</span>
                <Image src="https://ext.same-assets.com/1362928982/3494765293.png" alt="Catenary on X (formerly Twitter)" width={20} height={20} className="opacity-80 group-hover:opacity-100 transition"/> {/* Improved alt text */}
              </a>
            </div>
          </div>
          {/* Removed Email Form and Litepaper Link */}
        </div>
      </footer>
    </main>
  );
}
