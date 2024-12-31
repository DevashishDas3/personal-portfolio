'use client'

import { useState } from 'react'
import { Star, X } from 'lucide-react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

interface MediaItem {
  id: number;
  title: string;
  type: string;
  rating: number;
  review: string;
  image: string;
}

const mediaItems: MediaItem[] = [
  {
    id: 1,
    title: 'Inception',
    type: 'Movie',
    rating: -1,
    review: 'Mind-bending thriller that keeps you guessing until the end.',
    image: 'https://placehold.co/600x400'
  },
  {
    id: 2,
    title: 'Breaking Bad',
    type: 'TV Show',
    rating: 5,
    review: 'One of the greatest television series ever made.',
    image: 'https://placehold.co/600x400'
  },
  {
    id: 3,
    title: 'The Last of Us',
    type: 'Video Game',
    rating: 4,
    review: 'Emotionally gripping story with intense gameplay.',
    image: 'https://placehold.co/600x400'
  },
  {
    id: 4,
    title: 'Dune',
    type: 'Book',
    rating: 5,
    review: 'A masterpiece of science fiction literature.',
    image: 'https://placehold.co/600x400'
  },
  {
    id: 5,
    title: 'The Queen\'s Gambit',
    type: 'TV Show',
    rating: 4,
    review: 'A captivating story of chess and personal growth.',
    image: 'https://placehold.co/600x400'
  },
  {
    id: 6,
    title: 'Hades',
    type: 'Video Game',
    rating: 5,
    review: 'Addictive gameplay with beautiful art and storytelling.',
    image: 'https://placehold.co/600x400'
  },
]

export default function Media() {
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null)

  return (
    <div className="container mx-auto px-6 pt-24">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-12">
        REVIEWING/DISCUSSING STUFF
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {mediaItems.map((item) => (
          <div
            key={item.id}
            className="group cursor-pointer bg-white shadow-md hover:shadow-xl transition-shadow duration-300"
            onClick={() => setSelectedItem(item)}
          >
            <div className="aspect-[16/9] relative overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-medium mb-2">{item.title}</h2>
              <p className="text-sm text-black/70 mb-3">{item.type}</p>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  i < item.rating && item.rating !== -1 ? (
                    <Star
                      key={i}
                      size={20}
                      className="fill-[#96c5b4]"
                    />
                  ) : null
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-[#f8f6f3] p-8 max-w-2xl w-full relative rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 text-black/50 hover:text-black transition-colors"
              >
                <X size={24} />
              </button>
              <div className="aspect-video relative mb-6 rounded-lg overflow-hidden">
                <Image
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h2 className="text-3xl font-bold tracking-tighter mb-2">
                {selectedItem.title}
              </h2>
              <p className="text-sm text-black/70 mb-4">{selectedItem.type}</p>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  i < selectedItem.rating && selectedItem.rating !== -1 ? (
                    <Star
                      key={i}
                      size={20}
                      className="fill-[#96c5b4]"
                    />
                  ) : null
                ))}
              </div>
              <p className="text-black/80 leading-relaxed">{selectedItem.review}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

