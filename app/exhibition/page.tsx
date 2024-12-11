"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

const images = Array.from({ length: 55 }, (_, i) => `/images/${String(i + 1).padStart(2, '0')}.jpg`);

interface ImageSectionProps {
  src: string;
  alt: string;
  speed?: number;
}

const ImageSection: React.FC<ImageSectionProps> = ({ src, alt, speed = -5 }) => (
  <section className="snap-center min-h-screen relative flex items-center justify-center overflow-hidden">
    <Parallax speed={speed} className="w-full h-full absolute">
      <div className="relative w-full h-full">
        <Image
          src={src}
          fill
          alt={alt}
          sizes="100vw"
          className="object-cover"
        />
      </div>
    </Parallax>
  </section>
);

const MultiImageSection: React.FC<{ images: string[] }> = ({ images }) => (
  <section className="snap-center min-h-screen relative flex justify-center items-center overflow-hidden">
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {images.map((src, index) => (
        <Parallax key={index} speed={index % 2 === 0 ? 10 : -10}>
          <div className="relative w-full sm:w-80 h-60 md:h-80">
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              fill
              sizes="(max-width: 640px) 100vw, 320px"
              className="object-cover rounded-lg"
            />
          </div>
        </Parallax>
      ))}
    </div>
  </section>
);

export default function Exhibition() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const scrollAmount = e.deltaY > 0 ? 1 : -1;
      const nextScrollTop = scrollContainer.scrollTop + scrollAmount * window.innerHeight;
      scrollContainer.scrollTo({
        top: nextScrollTop,
        behavior: 'smooth'
      });
    };

    scrollContainer.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      scrollContainer.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <ParallaxProvider>
      <main className="relative w-full h-screen overflow-hidden">
        <div 
          ref={scrollContainerRef}
          className="h-full snap-y snap-mandatory overflow-y-scroll scroll-smooth"
        >
          <section className="snap-center min-h-screen relative flex justify-center items-center">
            <Parallax speed={-5}>
              <h2 className="text-4xl md:text-6xl text-yellow-400 font-bold">
                Welcome to our exhibition
              </h2>
            </Parallax>
          </section>
          
          {images.map((src, index) => {
            if ([1, 11, 21, 31].includes(index)) {
              return <MultiImageSection key={index} images={[src, images[index + 1]]} />;
            } else if (index === 41) {
              return <MultiImageSection key={index} images={[src, images[index + 1], images[index + 2]]} />;
            } else if (![2, 12, 22, 32, 42, 43].includes(index)) {
              return <ImageSection key={index} src={src} alt={`Exhibition Image ${index + 1}`} speed={index % 2 === 0 ? -5 : 5} />;
            }
            return null;
          })}
        </div>
      </main>
    </ParallaxProvider>
  );
}

