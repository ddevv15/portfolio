"use client"

import React, { useState, useEffect, useRef } from "react"
import dynamic from "next/dynamic"
import {
  galleryItems,
  getAllCategories,
  getItemsByCategory,
} from "@/app/data/galleryData"

// Dynamic imports to avoid SSR issues
const Masonry = dynamic(() => import("@/app/components/custom/Masonry"), {
  ssr: false,
})

const Lightning = dynamic(() => import("@/app/components/custom/Lightning"), {
  ssr: false,
})

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [galleryHeight, setGalleryHeight] = useState(3000)
  const galleryRef = useRef<HTMLDivElement>(null)

  // Get filtered items based on selected category
  const filteredItems =
    selectedCategory === "all"
      ? galleryItems
      : getItemsByCategory(selectedCategory)

  const categories = ["all", ...getAllCategories()]

  // Calculate dynamic height based on content
  useEffect(() => {
    const calculateHeight = () => {
      if (galleryRef.current) {
        const contentHeight = galleryRef.current.scrollHeight
        setGalleryHeight(Math.max(contentHeight + 200, 3000))
      }
    }

    // Initial calculation
    setTimeout(calculateHeight, 1000)

    // Recalculate when window resizes or category changes
    window.addEventListener("resize", calculateHeight)

    return () => window.removeEventListener("resize", calculateHeight)
  }, [filteredItems, selectedCategory])

  return (
    <div
      id="gallery-page"
      ref={galleryRef}
      className="relative overflow-hidden bg-black"
      style={{ minHeight: `${galleryHeight}px` }}
    >
      {/* Dynamic Background */}
      <Lightning
        hue={200} // Blue hue for gallery
        xOffset={0}
        speed={0.3}
        intensity={0.8}
        size={0.8}
      />
      {/* Content Wrapper */}
      <div className="relative z-10 pt-20">
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

        {/* Category Filter */}
        <div className="container mx-auto px-4 mb-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition duration-300 capitalize ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-cyan-400 to-yellow-300 text-black"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                {category}{" "}
                {category === "all"
                  ? `(${galleryItems.length})`
                  : `(${getItemsByCategory(category).length})`}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry Gallery */}
        <div className="container mx-auto px-4 pb-20">
          <div
            className="relative"
            style={{
              height:
                filteredItems.length > 50
                  ? "4000px"
                  : filteredItems.length > 20
                  ? "3000px"
                  : "2000px",
            }}
          >
            <Masonry
              items={filteredItems.map(item => ({...item, id: item.id.toString()}))}
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
              Showing {filteredItems.length} of {galleryItems.length} items •{" "}
              {selectedCategory === "all"
                ? "All Categories"
                : `${
                    selectedCategory.charAt(0).toUpperCase() +
                    selectedCategory.slice(1)
                  } Category`}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 