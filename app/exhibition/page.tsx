// Note: All image extensions have been changed from .jpg to .webp
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Exhibition() {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    setImagesLoaded(true);
  }, []);

  return (
    <main className="relative w-full">
      {imagesLoaded && (
        <div className="max-w-5xl mx-auto pb-20 md:pb-32 min-h-screen h-screen snap-y snap-mandatory overflow-y-scroll">
          <section className="snap-center min-h-screen relative flex justify-center items-center">
            <h2 className="text-4xl text-yellow-400">
              Welcome to our exhibition
            </h2>
          </section>
          <section className="snap-center min-h-screen relative flex">
            <div className="bg-wrap">
              <Image
                src={`/images/01.webp`}
                alt="Exhibition Image"
                fill
                sizes="100vw"
                quality={90}
                className="fixed-bg object-cover h-auto transition-all duration-300"
              />
            </div>
          </section>
          <section className="snap-center min-h-screen relative flex">
            <div className="bg-wrap">
              <Image
                src={`/images/02.webp`}
                alt="Exhibition Image"
                width={800}
                height={600}
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={90}
                className="w-full h-auto object-cover"
              />
              <Image
                src={`/images/03.webp`}
                alt="Exhibition Image"
                width={800}
                height={600}
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={90}
                className="w-full h-auto object-cover"
              />
            </div>
          </section>
          <section className="snap-center min-h-screen relative flex">
            <div className="bg-wrap">
              <Image
                src={`/images/04.webp`}
                alt="Exhibition Image"
                fill
                sizes="100vw"
                quality={90}
                className="fixed-bg object-cover h-auto transition-all duration-300"
              />
            </div>
          </section>
          <section className="snap-center min-h-screen relative flex">
            <div className="bg-wrap">
              <Image
                src={`/images/05.webp`}
                alt="Exhibition Image"
                fill
                sizes="100vw"
                quality={90}
                className="fixed-bg object-cover h-auto transition-all duration-300"
              />
            </div>
          </section>
          <section className="snap-center min-h-screen relative flex">
            <div className="bg-wrap">
              <Image
                src={`/images/06.webp`}
                alt="Exhibition Image"
                fill
                sizes="100vw"
                quality={90}
                className="fixed-bg object-cover h-auto transition-all duration-300"
              />
            </div>
          </section>
          <section className="snap-center min-h-screen relative flex">
            <div className="bg-wrap">
              <Image
                src={`/images/07.webp`}
                alt="Exhibition Image"
                fill
                sizes="100vw"
                quality={90}
                className="fixed-bg object-cover h-auto transition-all duration-300"
              />
            </div>
          </section>
          <section className="snap-center min-h-screen relative flex">
            <div className="bg-wrap">
              <Image
                src={`/images/08.webp`}
                alt="Exhibition Image"
                fill
                sizes="100vw"
                quality={90}
                className="fixed-bg object-cover h-auto transition-all duration-300"
              />
            </div>
          </section>
          <section className="snap-center min-h-screen relative flex">
            <div className="bg-wrap">
              <Image
                src={`/images/09.webp`}
                alt="Exhibition Image"
                fill
                sizes="100vw"
                quality={90}
                className="fixed-bg object-cover h-auto transition-all duration-300"
              />
            </div>
          </section>
          <section className="snap-center min-h-screen relative flex">
            <div className="bg-wrap">
              <Image
                src={`/images/10.webp`}
                alt="Exhibition Image"
                fill
                sizes="100vw"
                quality={90}
                className="fixed-bg object-cover h-auto transition-all duration-300"
              />
            </div>
          </section>
          <section className="snap-center min-h-screen relative flex">
            <div className="bg-wrap">
              <Image
                src={`/images/11.webp`}
                alt="Exhibition Image"
                fill
                sizes="100vw"
                quality={90}
                className="fixed-bg object-cover h-auto transition-all duration-300"
              />
            </div>
          </section>
          <section className="snap-center min-h-screen relative flex justify-center items-center">
            <div className="flex">
              <Image
                src={`/images/12.webp`}
                alt="Exhibition Image"
                width={800}
                height={600}
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={90}
                className="w-full h-auto object-cover"
              />
              <Image
                src={`/images/13.webp`}
                alt="Exhibition Image"
                width={800}
                height={600}
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={90}
                className="w-full h-auto object-cover"
              />
            </div>
          </section>
          <section className="snap-center min-h-screen relative flex">
            <div className="bg-wrap">
              <Image
                src={`/images/14.webp`}
                alt="Exhibition Image"
                fill
                sizes="100vw"
                quality={90}
                className="fixed-bg object-cover h-auto transition-all duration-300"
              />
            </div>
          </section>
          <section className="snap-center min-h-screen relative flex">
            <div className="bg-wrap">
              <Image
                src={`/images/15.webp`}
                alt="Exhibition Image"
                fill
                sizes="100vw"
                quality={90}
                className="fixed-bg object-cover h-auto transition-all duration-300"
              />
            </div>
          </section>
          <section className="snap-center min-h-screen relative flex">
            <div className="bg-wrap">
              <Image
                src={`/images/16.webp`}
                alt="Exhibition Image"
                fill
                sizes="100vw"
                quality={90}
                className="fixed-bg object-cover h-auto transition-all duration-300"
              />
            </div>
          </section>
          <section className="snap-center min-h-screen relative flex">
            <div className="bg-wrap">
              <Image
                src={`/images/17.webp`}
                alt="Exhibition Image"
                fill
                sizes="100vw"
                quality={90}
                className="fixed-bg object-cover h-auto transition-all duration-300"
              />
            </div>
          </section>
          <section className="snap-center min-h-screen relative flex">
            <div className="bg-wrap">
              <Image
                src={`/images/18.webp`}
                alt="Exhibition Image"
                fill
                sizes="100vw"
                quality={90}
                className="fixed-bg object-cover h-auto transition-all duration-300"
              />
            </div>
          </section>
          <section className="snap-center min-h-screen relative flex">
            <div className="bg-wrap">
              <Image
                src={`/images/19.webp`}
                alt="Exhibition Image"
                fill
                sizes="100vw"
                quality={90}
                className="fixed-bg object-cover h-auto transition-all duration-300"
              />
            </div>
          </section>
          <section className="snap-center min-h-screen relative flex">
            <div className="bg-wrap">
              <Image
                src={`/images/20.webp`}
                alt="Exhibition Image"
                fill
                sizes="100vw"
                quality={90}
                className="fixed-bg object-cover h-auto transition-all duration-300"
              />
            </div>
          </section>
          <section className="snap-center min-h-screen relative flex">
            <div className="bg-wrap">
              <Image
                src={`/images/21.webp`}
                alt="Exhibition Image"
                fill
                sizes="100vw"
                quality={90}
                className="fixed-bg object-cover h-auto transition-all duration-300"
              />
            </div>
          </section>
          <section className="snap-center min-h-screen relative flex justify-center items-center">
            <div className="flex">
              <Image
                src={`/images/22.webp`}
                alt="Exhibition Image"
                width={800}
                height={600}
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={90}
                className="w-full h-auto object-cover"
              />
              <Image
                src={`/images/23.webp`}
                alt="Exhibition Image"
                width={800}
                height={600}
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={90}
                className="w-full h-auto object-cover"
              />
            </div>
          </section>
          <section className="snap-center min-h-screen relative flex">
            <div className="bg-wrap">
              <Image
                src={`/images/24.webp`}
                alt="Exhibition Image"
                fill
                sizes="100vw"
                quality={90}
                className="fixed-bg object-cover h-auto transition-all duration-300"
              />
            </div>
          </section>
          <section className="snap-center min-h-screen relative flex">
            <div className="bg-wrap">
              <Image
                src={`/images/25.webp`}
                alt="Exhibition Image"
                fill
                sizes="100vw"
                quality={90}
                className="fixed-bg object-cover h-auto transition-all duration-300"
              />
            </div>
          </section>
          <section className="snap-center min-h-screen relative flex">
            <div className="bg-wrap">
              <Image
                src={`/images/26.webp`}
                alt="Exhibition Image"
                fill
                sizes="100vw"
                quality={90}
                className="fixed-bg object-cover h-auto transition-all duration-300"
              />
            </div>
          </section>
          <section className="snap-center min-h-screen relative flex">
            <div className="bg-wrap">
              <Image
                src={`/images/27.webp`}
                alt="Exhibition Image"
                fill
                sizes="100vw"
                quality={90}
                className="fixed-bg object-cover h-auto transition-all duration-300"
              />
            </div>
          </section>
          <section className="snap-center min-h-screen relative flex">
            <div className="bg-wrap">
              <Image
                src={`/images/28.webp`}
                alt="Exhibition Image"
                fill
                sizes="100vw"
                quality={90}
                className="fixed-bg object-cover h-auto transition-all duration-300"
              />
            </div>
          </section>
          <section className="snap-center min-h-screen relative flex">
            <div className="bg-wrap">
              <Image
                src={`/images/29.webp`}
                alt="Exhibition Image"
                fill
                sizes="100vw"
                quality={90}
                className="fixed-bg object-cover h-auto transition-all duration-300"
              />
            </div>
          </section>
          <section className="snap-center min-h-screen relative flex">
            <div className="bg-wrap">
              <Image
                src={`/images/30.webp`}
                alt="Exhibition Image"
                fill
                sizes="100vw"
                quality={90}
                className="fixed-bg object-cover h-auto transition-all duration-300"
              />
            </div>
          </section>
          <section className="snap-center min-h-screen relative flex">
            <div className="bg-wrap">
              <Image
                src={`/images/31.webp`}
                alt="Exhibition Image"
                fill
                sizes="100vw"
                quality={90}
                className="fixed-bg object-cover h-auto transition-all duration-300"
              />
            </div>
          </section>
          <section className="snap-center min-h-screen relative flex justify-center items-center">
            <div className="flex">
              <Image
                src={`/images/32.webp`}
                alt="Exhibition Image"
                width={800}
                height={600}
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={90}
                className="w-full h-auto object-cover"
              />
              <Image
                src={`/images/33.webp`}
                alt="Exhibition Image"
                width={800}
                height={600}
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={90}
                className="w-full h-auto object-cover"
              />
            </div>
          </section>
          <section className="snap-center min-h-screen relative flex">
            <div className="bg-wrap">
              <Image
                src={`/images/34.webp`}
                alt="Exhibition Image"
                fill
                sizes="100vw"
                quality={90}
                className="fixed-bg object-cover h-auto transition-all duration-300"
              />
            </div>
          </section>
          <section className="snap-center min-h-screen relative flex">
            <div className="bg-wrap">
              <Image
                src={`/images/35.webp`}
                alt="Exhibition Image"
                fill
                sizes="100vw"
                quality={90}
                className="fixed-bg object-cover h-auto transition-all duration-300"
              />
            </div>
          </section>
          <section className="snap-center min-h-screen relative flex">
            <div className="bg-wrap">
              <Image
                src={`/images/36.webp`}
                alt="Exhibition Image"
                fill
                sizes="100vw"
                quality={90}
                className="fixed-bg object-cover h-auto transition-all duration-300"
              />
            </div>
          </section>
          <section className="snap-center min-h-screen relative flex">
            <div className="bg-wrap">
              <Image
                src={`/images/37.webp`}
                alt="Exhibition Image"
                fill
                sizes="100vw"
                quality={90}
                className="fixed-bg object-cover h-auto transition-all duration-300"
              />
            </div>
          </section>
          <section className="snap-center min-h-screen relative flex">
            <div className="bg-wrap">
              <Image
                src={`/images/38.webp`}
                alt="Exhibition Image"
                fill
                sizes="100vw"
                quality={90}
                className="fixed-bg object-cover h-auto transition-all duration-300"
              />
            </div>
          </section>
          <section className="snap-center min-h-screen relative flex">
            <div className="bg-wrap">
              <Image
                src={`/images/39.webp`}
                alt="Exhibition Image"
                fill
                sizes="100vw"
                quality={90}
                className="fixed-bg object-cover h-auto transition-all duration-300"
              />
            </div>
          </section>
          <section className="snap-center min-h-screen relative flex">
            <div className="bg-wrap">
              <Image
                src={`/images/40.webp`}
                alt="Exhibition Image"
                fill
                sizes="100vw"
                quality={90}
                className="fixed-bg object-cover h-auto transition-all duration-300"
              />
            </div>
          </section>
          <section className="snap-center min-h-screen relative flex">
            <div className="bg-wrap">
              <Image
                src={`/images/41.webp`}
                alt="Exhibition Image"
                fill
                sizes="100vw"
                quality={90}
                className="fixed-bg object-cover h-auto transition-all duration-300"
              />
            </div>
          </section>
          <section className="snap-center min-h-screen relative flex justify-center items-center">
            <div className="flex">
              <Image
                src={`/images/42.webp`}
                alt="Exhibition Image"
                width={800}
                height={600}
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={90}
                className="w-full h-auto object-cover"
              />
              <Image
                src={`/images/43.webp`}
                alt="Exhibition Image"
                width={800}
                height={600}
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={90}
                className="w-full h-auto object-cover"
              />
              <Image
                src={`/images/44.webp`}
                alt="Exhibition Image"
                width={800}
                height={600}
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={90}
                className="w-full h-auto object-cover"
              />
            </div>
          </section>
          <section className="snap-center min-h-screen relative flex">
            <div className="bg-wrap">
              <Image
                src={`/images/45.webp`}
                alt="Exhibition Image"
                fill
                sizes="100vw"
                quality={90}
                className="fixed-bg object-cover h-auto transition-all duration-300"
              />
            </div>
          </section>
          <section className="snap-center min-h-screen relative flex">
            <div className="bg-wrap">
              <Image
                src={`/images/46.webp`}
                alt="Exhibition Image"
                fill
                sizes="100vw"
                quality={90}
                className="fixed-bg object-cover h-auto transition-all duration-300"
              />
            </div>
          </section>
          <section className="snap-center min-h-screen relative flex">
            <div className="bg-wrap">
              <Image
                src={`/images/47.webp`}
                alt="Exhibition Image"
                fill
                sizes="100vw"
                quality={90}
                className="fixed-bg object-cover h-auto transition-all duration-300"
              />
            </div>
          </section>
          <section className="snap-center min-h-screen relative flex">
            <div className="bg-wrap">
              <Image
                src={`/images/48.webp`}
                alt="Exhibition Image"
                fill
                sizes="100vw"
                quality={90}
                className="fixed-bg object-cover h-auto transition-all duration-300"
              />
            </div>
          </section>
          <section className="snap-center min-h-screen relative flex">
            <div className="bg-wrap">
              <Image
                src={`/images/49.webp`}
                alt="Exhibition Image"
                fill
                sizes="100vw"
                quality={90}
                className="fixed-bg object-cover h-auto transition-all duration-300"
              />
            </div>
          </section>
          <section className="snap-center min-h-screen relative flex">
            <div className="bg-wrap">
              <Image
                src={`/images/50.webp`}
                alt="Exhibition Image"
                fill
                sizes="100vw"
                quality={90}
                className="fixed-bg object-cover h-auto transition-all duration-300"
              />
            </div>
          </section>
          <section className="snap-center min-h-screen relative flex">
            <div className="bg-wrap">
              <Image
                src={`/images/51.webp`}
                alt="Exhibition Image"
                fill
                sizes="100vw"
                quality={90}
                className="fixed-bg object-cover h-auto transition-all duration-300"
              />
            </div>
          </section>
          <section className="snap-center min-h-screen relative flex">
            <div className="bg-wrap">
              <Image
                src={`/images/52.webp`}
                alt="Exhibition Image"
                fill
                sizes="100vw"
                quality={90}
                className="fixed-bg object-cover h-auto transition-all duration-300"
              />
            </div>
          </section>
          <section className="snap-center min-h-screen relative flex">
            <div className="bg-wrap">
              <Image
                src={`/images/53.webp`}
                alt="Exhibition Image"
                fill
                sizes="100vw"
                quality={90}
                className="fixed-bg object-cover h-auto transition-all duration-300"
              />
            </div>
          </section>
          <section className="snap-center min-h-screen relative flex">
            <div className="bg-wrap">
              <Image
                src={`/images/54.webp`}
                alt="Exhibition Image"
                fill
                sizes="100vw"
                quality={90}
                className="fixed-bg object-cover h-auto transition-all duration-300"
              />
            </div>
          </section>
          <section className="snap-center min-h-screen relative flex">
            <div className="bg-wrap">
              <Image
                src={`/images/55.webp`}
                alt="Exhibition Image"
                fill
                sizes="100vw"
                quality={90}
                className="fixed-bg object-cover h-auto transition-all duration-300"
              />
            </div>
          </section>
        </div>
      )}
    </main>
  );
}

