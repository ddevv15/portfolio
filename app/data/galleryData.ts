// Auto-generated gallery data - 2025-07-28T01:07:42.016Z

export interface GalleryItem {
  id: number
  img: string
  height: number
  url: string
  title: string
  category: string
  type?: "image" | "video"
}

export const galleryItems: GalleryItem[] = [
  {
    "id": 1,
    "img": "/images/one.jpg",
    "height": 400,
    "url": "/images/one.jpg",
    "title": "FaceWay Project",
    "category": "project"
  },
  {
    "id": 2,
    "img": "/images/two.jpg",
    "height": 600,
    "url": "/images/two.jpg",
    "title": "GenVars Project",
    "category": "project"
  },
  {
    "id": 3,
    "img": "/images/three.jpg",
    "height": 500,
    "url": "/images/three.jpg",
    "title": "PantryConnect Project",
    "category": "project"
  },
  {
    "id": 4,
    "img": "/images/four.jpg",
    "height": 450,
    "url": "/images/four.jpg",
    "title": "TaskFlow Project",
    "category": "project"
  },
  {
    "id": 5,
    "img": "/images/five.JPG",
    "height": 550,
    "url": "/images/five.JPG",
    "title": "OpenStreetMaps Project",
    "category": "project"
  },
  {
    "id": 6,
    "img": "/images/6.jpeg",
    "height": 650,
    "url": "/images/6.jpeg",
    "title": "Photo 6",
    "category": "photo",
    "type": "image"
  },
  {
    "id": 7,
    "img": "/images/7.jpeg",
    "height": 650,
    "url": "/images/7.jpeg",
    "title": "Photo 7",
    "category": "photo",
    "type": "image"
  },
  {
    "id": 8,
    "img": "/images/8.mov",
    "height": 650,
    "url": "/images/8.mov",
    "title": "Video 8",
    "category": "video",
    "type": "video"
  },
  {
    "id": 9,
    "img": "/images/9.mov",
    "height": 500,
    "url": "/images/9.mov",
    "title": "Video 9",
    "category": "video",
    "type": "video"
  },
  {
    "id": 10,
    "img": "/images/10.mov",
    "height": 350,
    "url": "/images/10.mov",
    "title": "Video 10",
    "category": "video",
    "type": "video"
  }
]

export const addGalleryItem = (newItem: GalleryItem): void => {
  galleryItems.push(newItem)
}

export const getItemsByCategory = (category: string): GalleryItem[] => {
  return galleryItems.filter(item => item.category === category)
}

export const getAllCategories = (): string[] => {
  const categories = new Set(galleryItems.map(item => item.category))
  return Array.from(categories)
}

export const getImages = (): GalleryItem[] => {
  return galleryItems.filter(item => item.type === "image" || !item.type)
}

export const getVideos = (): GalleryItem[] => {
  return galleryItems.filter(item => item.type === "video")
} 