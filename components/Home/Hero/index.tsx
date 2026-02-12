"use client";
import Link from 'next/link';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const logos = [
  '/logo/client-01.webp',
  '/logo/client-02.webp',
  '/logo/client-03.webp',
  '/logo/client-04.webp',
  '/logo/client-05.webp',
  '/logo/client-09.webp',
  '/logo/client-07.webp',
  '/logo/client-08.webp',
  '/logo/client-10.webp',
  '/logo/client-12.webp',
  '/logo/client-13.webp',
  '/logo/client-14.webp',
];

const IndexPage = () => {
  const items = ['agency', 'SaaS startup', 'marketplace', 'ecommerce'];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []); 
  const slidingLogos = logos.concat(logos);

  return (
    <div className="min-h-screen bg-[#050b1f] flex flex-col items-center justify-center px-4 py-16 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-blue-500/5 blur-3xl"></div>
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-blue-600/5 blur-3xl"></div>
      </div>

      <div className="inline-flex items-center gap-2 bg-[#0a1634] rounded-full px-5 py-2 font-medium text-sm mb-16 z-10">
        <Image
          src="/icon-title"
          width={16}
          height={16}
          alt="OpenAI Logo"
          loading="lazy"
        />
        <span className="text-sm text-blue-400 font-medium">OpenAI Powered</span>
      </div>

      <h1 className="text-5xl md:text-7xl font-bold text-center max-w-5xl mb-6 z-10">
        <span className="text-blue-500">AI-Powered support </span>
        <br />
        <span className="text-white transition-all  duration-500 ease-in-out">
          for your {items[index]}.
        </span>
      </h1>

      <p className="text-center text-gray-300 max-w-2xl mb-12 text-lg z-10">
        Help your users help themselves with an AI-Powered chatbot, knowledge base, AI-Assisted ticketing, and email
        support.
      </p>

      <Link
        href="/signup"
        className="bg-blue-500 hover:bg-blue-600 transition-colors text-white font-medium  rounded-lg px-5 py-3 text-lg "
      >
        Get Started
      </Link>

      <div className="relative flex justify-center mt-16 z-10">
        <div className="relative w-[1500px] h-[500px]">
          <Image
            src="/image/hero-layer-1.webp"
            alt="Hero Layer 1"
            fill
            className="object-contain rounded-2xl shadow-2xl"
          />
          <Image
            src="/image/hero-layer-2.webp"
            alt="Hero Layer 2"
            fill
            className="object-contain rounded-2xl shadow-2xl absolute top-12 left-12 opacity-95 z-30"
          />
        </div>
      </div>

      <div className="w-full flex justify-center bg-[#050b1f] py-10">
        <div className="overflow-hidden w-full max-w-4xl">
          <div className="whitespace-nowrap flex gap-8 animate-slide">
            {slidingLogos.map((logoPath) => (
              <div key={logoPath} className="inline-flex items-center justify-center min-w-[150px] h-20">
                <Image
                  src={logoPath}
                  alt={`logo-${logoPath.split('/').pop()}`}
                  width={140}
                  height={100}
                  className="object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
