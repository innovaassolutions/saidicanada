'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface VideoHeroProps {
  title: string;
  titleHighlight: string;
  badge: string;
  description: string;
  cta1Text: string;
  cta2Text: string;
  cta1Href: string;
  cta2Href: string;
}

export default function VideoHero({
  title,
  titleHighlight,
  badge,
  description,
  cta1Text,
  cta2Text,
  cta1Href,
  cta2Href,
}: VideoHeroProps) {
  const [mounted, setMounted] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [posterError, setPosterError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setMounted(true);
    setPrefersReducedMotion(
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    );
  }, []);

  const showVideo = mounted && !prefersReducedMotion && !videoError;
  const fallbackSrc = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80';
  const posterSrc = posterError ? fallbackSrc : '/videos/hero-poster.jpg';

  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 z-0">
        {/* Always render poster image for instant display + mobile */}
        <Image
          src={posterSrc}
          alt="SAIDI Canada data centre"
          fill
          className="object-cover"
          priority
          onError={() => setPosterError(true)}
        />
        {/* Layer video on top when available — works on both desktop and mobile */}
        {showVideo && (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            poster={posterSrc}
            className="absolute inset-0 w-full h-full object-cover"
            onError={() => setVideoError(true)}
          >
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/80 via-forest/60 to-transparent" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-2xl">
          <span className="inline-block bg-sage/20 text-white border border-sage/30 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            {badge}
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
            {title}{' '}
            <span className="text-sage-light">{titleHighlight}</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-10 max-w-xl">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={cta1Href}
              className="bg-white text-forest px-8 py-4 rounded-lg text-base font-semibold hover:bg-sage-light hover:text-forest-dark transition-colors text-center"
            >
              {cta1Text}
            </a>
            <a
              href={cta2Href}
              className="border-2 border-white/40 text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-white/10 transition-colors text-center"
            >
              {cta2Text}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
