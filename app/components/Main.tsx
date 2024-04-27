'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Fade, Slide } from 'react-awesome-reveal';



const Main = () => {
  return (
    <div className="container mx-auto px-6 md:flex md:items-center">
            <div className="md:w-1/2 md:mr-10 text-black">
              {" "}
              {/* Text color changed to black */}
              <Slide>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                Welcome to TourTrail
              </h1>
              </Slide>
              <Fade delay={1e3} cascade damping={1e-1} className="text-lg md:text-xl mb-8">
              Empowering Travel and Hospitality: Your Home Away From Home!
              </Fade>
    
              {/* <p className="text-lg md:text-xl mb-8">
              Transform your short-term rental business with our customizable Airbnb clone app. Featuring guest and host apps, web panel, and admin panel, it streamlines operations and enhances guest experiences. Stand out with captivating descriptions, tailored to your target audience, and boost your online visibility with SEO-optimized keywords. Utilize Hostaway's Airbnb management software for an enticing and successful listing.
              </p> */}
              <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
              <Link href="/#categories">
                <button className="bg-blue-100 text-blue-600 hover:bg-[#60A5FA] hover:text-black py-2 px-6 rounded-full shadow-md transition duration-300">
                  Browse Categories
                </button>
                </Link>
                <Link href="/#listings">
                <button className="bg-blue-100 text-blue-600 hover:bg-[#60A5FA] hover:text-black py-2 px-6 rounded-full shadow-md transition duration-300">
                  Show Hotels
                </button>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <div className="relative">

                <Image
                  src={"/roadtrip.gif"}
                  alt="roadtrip image"
                  width={800}
                  height={600}
            className="rounded-lg shadow-xl"
            unoptimized
                />
              </div>
            </div>
          </div>
  );
}

export default Main;
