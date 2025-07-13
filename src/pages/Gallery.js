import React from "react";
import Masonry from "../components/Masonry/Masonry.jsx";

function Gallery() {
  // Enhanced photo data with more variety
  const galleryItems = [
    {
      id: 1,
      img: "/images/one.jpg",
      height: 400,
      url: "/images/one.jpg",
      title: "FaceWay Project",
    },
    {
      id: 2,
      img: "/images/two.jpg",
      height: 600,
      url: "/images/two.jpg",
      title: "GenVars Project",
    },
    {
      id: 3,
      img: "/images/three.jpg",
      height: 500,
      url: "/images/three.jpg",
      title: "PantryConnect Project",
    },
    {
      id: 4,
      img: "/images/four.jpg",
      height: 450,
      url: "/images/four.jpg",
      title: "TaskFlow Project",
    },
    {
      id: 5,
      img: "/images/five.JPG",
      height: 550,
      url: "/images/five.JPG",
      title: "OpenStreetMaps Project",
    },
    {
      id: 6,
      img: "/images/dev_headshot.jpg",
      height: 600,
      url: "/images/dev_headshot.jpg",
      title: "Professional Headshot",
    },
    {
      id: 7,
      img: "/images/dev.jpeg",
      height: 500,
      url: "/images/dev.jpeg",
      title: "Personal Portrait",
    },
  ];

  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Hero Section for Gallery */}
      <div className="relative py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Photo Gallery
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto">
            A curated collection of project screenshots, professional photos,
            and memorable moments
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-yellow-300 mx-auto rounded-full"></div>
        </div>
      </div>

      {/* Masonry Gallery */}
      <div className="container mx-auto px-4 pb-20">
        <div className="relative" style={{ height: "1000px" }}>
          <Masonry
            items={galleryItems}
            animateFrom="random"
            duration={1.0}
            stagger={0.15}
            scaleOnHover={true}
            hoverScale={0.95}
            blurToFocus={true}
            colorShiftOnHover={true}
            ease="power3.out"
          />
        </div>

        {/* Gallery Info */}
        <div className="text-center mt-16">
          <p className="text-white/60 text-lg mb-4">
            Click on any image to view it in full size
          </p>
          <p className="text-white/40 text-sm">
            {galleryItems.length} photos • Professional & Project Portfolio
          </p>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
