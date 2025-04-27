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
        className="relative flex flex-col items-center justify-center min-h-[380px] sm:min-h-[480px] md:min-h-[540px] px-8 sm:px-6 pt-16 sm:pt-20 mb-[-40px] sm:mb-[-48px] overflow-hidden" /* Further increased mobile px */
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
          {/* Responsive text size */}
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
            <span style={{ color: '#ffd230' }}>Catenary</span>
          </h1>
          {/* Added tagline placeholder, reduced top margin */}
          <p className="text-white/80 text-base sm:text-lg mt-1.5"> 
            Settlement Layer for Emerging Economies and Network States
          </p>
          {/* Responsive button size, updated link */}
          <a href="/whitepaper" className="bg-primary text-black font-semibold rounded-full px-6 py-2.5 sm:px-7 sm:py-3 mt-4 hover:scale-105 transition shadow-md shadow-primary/30"> 
            Read Whitepaper
          </a>
        </div>
      </section>

      {/* Why Catenary -- Feature Block - Reduced bottom padding */}
      <section className="relative w-full flex flex-col items-center pt-16 sm:pt-24 pb-8 sm:pb-12 px-8 sm:px-6 bg-background w-full"> {/* Further increased mobile px */}
        <div className="w-full max-w-2xl lg:max-w-3xl text-center"> {/* Centered text container */}
          <span className="text-primary font-semibold text-xs sm:text-sm uppercase">Why Catenary</span>
          <h2 className="font-bold text-2xl sm:text-3xl text-white mt-2 mb-3 sm:mb-4">Decentralizing the Monetary Layer</h2>
          {/* Reduced font size by ~25% */}
          <p className="text-white/80 text-sm sm:text-base"> 
            Traditional cross-border payments are often slow, costly, and complex, especially in emerging markets. Catenary addresses this with a specialized Layer 3 architecture, offering high-speed, low-cost trade settlement, efficient on-chain trading via a native CLOB, and seamless connectivity to existing financial systems through innovative protocols like Geass and MSAC.
          </p>
        </div>
      </section>

      {/* Explainer Cards Row - Reduced top/bottom padding */}
      <section className="relative w-full px-8 sm:px-6 pt-8 sm:pt-10 pb-8 sm:pb-10 bg-black flex flex-col items-center sm:flex-row sm:justify-center sm:items-stretch gap-4 sm:gap-6 overflow-hidden"> {/* Further increased mobile px */}
         {/* Added subtle pattern div here */}
         <div className="absolute inset-0 z-0 opacity-[0.02]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}></div>
        {/* Card 1: Optimized L3 - Reverted mobile width, kept reduced gap/text */}
        <div className="relative z-10 bg-gradient-to-b from-primary/8 to-primary/4 border border-primary/30 rounded-2xl p-2 sm:p-4 max-w-xs sm:w-auto flex-1 sm:min-w-[200px] flex flex-col gap-1 sm:gap-3 items-center text-center transition duration-300 ease-in-out shadow-lg shadow-black/20 backdrop-blur-sm hover:scale-[1.03] hover:border-primary/70 hover:shadow-xl hover:shadow-primary/20 hover:bg-gradient-to-b hover:from-primary/11 hover:to-primary/8">
          {/* Reduced mobile text size */}
          <h3 className="font-semibold text-xs sm:text-lg text-white leading-snug">Optimized <span className="text-primary">L3 Architecture</span></h3>
          {/* Reduced mobile text size */}
          <p className="text-white/80 text-[10px] sm:text-xs leading-relaxed">
            Built on the OP Stack settling to Base L2, Catenary offers high TPS, low costs via EigenDA, and fast ZK-powered finality for financial applications.
          </p>
        </div>
        {/* Card 2: Native CLOB & PoL - Reverted mobile width, kept reduced gap/text */}
        <div className="relative z-10 bg-gradient-to-b from-primary/8 to-primary/4 border border-primary/30 rounded-2xl p-2 sm:p-4 max-w-xs sm:w-auto flex-1 sm:min-w-[200px] flex flex-col gap-1 sm:gap-3 items-center text-center transition duration-300 ease-in-out shadow-lg shadow-black/20 backdrop-blur-sm hover:scale-[1.03] hover:border-primary/70 hover:shadow-xl hover:shadow-primary/20 hover:bg-gradient-to-b hover:from-primary/11 hover:to-primary/8">
          {/* Reduced mobile text size */}
          <h3 className="font-semibold text-xs sm:text-lg text-white leading-snug">Native <span className="text-primary">CLOB & PoL</span></h3>
          {/* Reduced mobile text size */}
          <p className="text-white/80 text-[10px] sm:text-xs leading-relaxed">
            Features an on-chain Central Limit Order Book for efficient trading, incentivized by a Proof-of-Liquidity mechanism for deep, reliable markets.
          </p>
        </div>
         {/* Card 3: Intent-Driven & Connected - Reverted mobile width, kept reduced gap/text */}
         <div className="relative z-10 bg-gradient-to-b from-primary/8 to-primary/4 border border-primary/30 rounded-2xl p-2 sm:p-4 max-w-xs sm:w-auto flex-1 sm:min-w-[200px] flex flex-col gap-1 sm:gap-3 items-center text-center transition duration-300 ease-in-out shadow-lg shadow-black/20 backdrop-blur-sm hover:scale-[1.03] hover:border-primary/70 hover:shadow-xl hover:shadow-primary/20 hover:bg-gradient-to-b hover:from-primary/11 hover:to-primary/8">
          {/* Reduced mobile text size */}
          <h3 className="font-semibold text-xs sm:text-lg text-white leading-snug">Intent-Driven & <span className="text-primary">Connected</span></h3>
          {/* Reduced mobile text size */}
          <p className="text-white/80 text-[10px] sm:text-xs leading-relaxed">
            Utilizes the Geass intent system for user simplicity and guaranteed settlement, plus the MSAC AI agent council to bridge with external systems.
          </p>
        </div>
         {/* Card 4: MSAC AI Council - Reverted mobile width, kept reduced gap/text */}
         <div className="relative z-10 bg-gradient-to-b from-primary/8 to-primary/4 border border-primary/30 rounded-2xl p-2 sm:p-4 max-w-xs sm:w-auto flex-1 sm:min-w-[200px] flex flex-col gap-1 sm:gap-3 items-center text-center transition duration-300 ease-in-out shadow-lg shadow-black/20 backdrop-blur-sm hover:scale-[1.03] hover:border-primary/70 hover:shadow-xl hover:shadow-primary/20 hover:bg-gradient-to-b hover:from-primary/11 hover:to-primary/8">
          {/* Reduced mobile text size */}
          <h3 className="font-semibold text-xs sm:text-lg text-white leading-snug">MSAC <span className="text-primary">AI Council</span></h3>
          {/* Reduced mobile text size */}
          <p className="text-white/80 text-[10px] sm:text-xs leading-relaxed">
            The Mobius Sybil Agentic Council acts as a secure, intelligent bridge connecting Catenary to traditional financial systems and external data sources.
          </p>
        </div>
      </section>

      {/* Use Cases Section */}
      {/* Adjusted top padding */}
      <section className="relative w-full flex flex-col items-center gap-8 sm:gap-12 pt-8 sm:pt-10 pb-16 sm:pb-20 px-8 sm:px-6 bg-background"> {/* Further increased mobile px */}
        {/* Title Content */}
        <div className="text-white max-w-lg flex flex-col items-center text-center">
          {/* Adjusted text size */}
          <h2 className="text-xl sm:text-2xl md:text-3xl mb-4 font-bold leading-tight">Solving <span style={{ color: '#ffd230' }}>Real-World</span> Challenges</h2> 
        </div>
        {/* Cards Container */}
        {/* Added items-center for mobile column centering */}
        <div className="w-full flex flex-col items-center sm:items-stretch sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 max-w-4xl lg:max-w-5xl"> 
          {/* Use Case Card 1: Cross-Border Settlement - Reverted mobile width */}
          <div className="bg-gradient-to-b from-primary/8 to-primary/4 border border-primary/30 rounded-2xl p-2 sm:p-4 w-full max-w-xs sm:w-auto flex-1 min-w-[180px] sm:min-w-[200px] shadow-lg flex flex-col items-center text-center gap-1 sm:gap-1.5 backdrop-blur-sm transition duration-300 ease-in-out hover:scale-[1.03] hover:border-primary/70 hover:shadow-xl hover:shadow-primary/20 hover:bg-gradient-to-b hover:from-primary/11 hover:to-primary/8">
            {/* Reduced text size */}
            <span className="uppercase text-[10px] sm:text-[11px] text-primary tracking-wider font-semibold">For Cross-Border Settlement</span>
            {/* Reduced mobile text size */}
            <h3 className="font-semibold text-xs sm:text-sm text-white leading-snug mt-1">Overcome traditional barriers with near-instant, low-cost cross-border payments.</h3>
            {/* Reduced mobile text size */}
            <p className="text-white/80 text-[9px] sm:text-[10px] leading-relaxed">
            Our L3 executes atomic settlements, Geass simplifies complex multi-currency flows via the native CLOB, ZK proofs ensure rapid finality, and MSAC bridges to external systems.
            </p>
          </div>
          {/* Use Case Card 2: Asset Tokenization - Reverted mobile width */}
          <div className="bg-gradient-to-b from-primary/8 to-primary/4 border border-primary/30 rounded-2xl p-2 sm:p-4 w-full max-w-xs sm:w-auto flex-1 min-w-[180px] sm:min-w-[200px] shadow-lg flex flex-col items-center text-center gap-1 sm:gap-1.5 backdrop-blur-sm transition duration-300 ease-in-out hover:scale-[1.03] hover:border-primary/70 hover:shadow-xl hover:shadow-primary/20 hover:bg-gradient-to-b hover:from-primary/11 hover:to-primary/8">
            {/* Reduced text size */}
            <span className="uppercase text-[10px] sm:text-[11px] text-primary tracking-wider font-semibold">For Asset Tokenization & Trading</span>
            {/* Reduced mobile text size */}
            <h3 className="font-semibold text-xs sm:text-sm text-white leading-snug mt-1">Unlock liquidity for traditionally illiquid real-world assets like real estate or private debt.</h3>
            {/* Reduced mobile text size */}
            <p className="text-white/80 text-[9px] sm:text-[10px] leading-relaxed">
            Tokenize assets on our L3, leverage MSAC for verifiable links to off-chain data, and enable seamless fractional trading on the high-performance native CLOB.
            </p>
          </div>
          {/* Use Case Card 3: Programmable Finance - Reverted mobile width */}
          <div className="bg-gradient-to-b from-primary/8 to-primary/4 border border-primary/30 rounded-2xl p-2 sm:p-4 w-full max-w-xs sm:w-auto flex-1 min-w-[180px] sm:min-w-[200px] shadow-lg flex flex-col items-center text-center gap-1 sm:gap-1.5 backdrop-blur-sm transition duration-300 ease-in-out hover:scale-[1.03] hover:border-primary/70 hover:shadow-xl hover:shadow-primary/20 hover:bg-gradient-to-b hover:from-primary/11 hover:to-primary/8">
            {/* Reduced text size */}
            <span className="uppercase text-[10px] sm:text-[11px] text-primary tracking-wider font-semibold">For Programmable Finance</span>
            {/* Reduced mobile text size */}
            <h3 className="font-semibold text-xs sm:text-sm text-white leading-snug mt-1">Build sophisticated, automated financial services directly on Catenary.</h3>
            {/* Reduced mobile text size */}
            <p className="text-white/80 text-[9px] sm:text-[10px] leading-relaxed">
            Utilize Geass intents to define complex logic for payment streams, escrows, or custom DeFi protocols, powered by our programmable L3 environment and native stablecoins.
            </p>
          </div>
        </div>
      </section>

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
