import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryImage {
  src: string;
  alt: string;
  date: string;
  caption?: string;
}

interface GalleryItem {
  images: GalleryImage[];
}

export const GalleryPage: React.FC = () => {
  const galleryItems: GalleryItem[] = [
     //Gardi Hackathon
    {
      images: [
        {
          src: '/images/Gallery/Rudrax.jpg',
          alt: 'Winning Hackathon',
          date: '04 Feb 2024',
          caption: 'Winning Hackathon Moment',
        },
        {
          src: '/images/Gallery/Rudrax2.jpg',
          alt: 'Winning Hackathon - Detail',
          date: '04 Feb 2025',
          caption: 'Additional view from the Hackathon',
        },
      ],
    },

    //Army Internship
    {
      images: [
        {
          src: '/images/Gallery/AI_Intern.jpg',
          alt: 'Internship Memories',
          date: 'Nov 2024',
          caption: 'Indian Army Internship',
        },
        {
          src: '/images/Gallery/AI_Intern_Training.jpg',
          alt: 'Internship Team',
          date: 'Nov 2024',
          caption: 'Indian Army Internship',
        },
        {
          src: '/images/Gallery/AI_intern_training2.jpg',
          alt: 'Internship Team',
          date: '19 Nov 2024',
          caption: 'Indian Army Internship',
        },
      ],
    },
    //Army Internship
    {
     images: [
       {
         src: '/images/Gallery/train.jpg',
         alt: 'Internship Memories',
         date: 'Nov 2024',
         caption: 'Indian Army Training',
       },
       {
         src: '/images/Gallery/train2.jpg',
         alt: 'Internship Team',
         date: 'Nov 2024',
         caption: 'Indian Army Internship',
       },
       {
         src: '/images/Gallery/train3.jpg',
         alt: 'Internship Team',
         date: '19 Nov 2024',
         caption: 'Indian Army Internship',
       },
       {
          src: '/images/Gallery/train4.jpg',
          alt: 'Internship Team',
          date: '19 Nov 2024',
          caption: 'Indian Army Internship',
        },
        {
          src: '/images/Gallery/train5.jpg',
          alt: 'Internship Team',
          date: '19 Nov 2024',
          caption: 'Indian Army Internship',
        },
     ],
   },
//     Cyber Quest
    {
     images: [
       {
         src: '/images/Gallery/cyber_quest1.jpg',
         alt: 'Internship Memories',
         date: '05 Oct 2024',
         caption: 'Cyber Quest 2024',
       },
       {
         src: '/images/Gallery/cyber_quest2.jpg',
         alt: 'Internship Team',
         date: '05 Oct 2024',
         caption: 'Cyber Quest Finalist',
       },
     ],
   },
//HTM
    {
      images: [
        {
          src: '/images/Gallery/team.jpg',
          alt: 'HTM Event',
          date: '15 Sept 2024',
          caption: 'Hack The Mountain',
        },
      ],
    },
    // Add more items as needed...
    {
     images: [
       {
         src: '/images/Gallery/gardi.jpg',
         alt: 'Gardi Events',
         date: '27 March 2024',
         caption: 'Gardi Bidyapith Events',
       },
       {
          src: '/images/Gallery/gardi1.jpg',
          alt: 'Gardi Events',
          date: '27 March 2024',
          caption: 'Gardi Bidyapith Events',
        },

     ],
   },

   // Atiya
   {
     images: [
       {
         src: '/images/Gallery/atmiya.jpg',
         alt: 'Gardi Events',
         date: '01 March 2024',
         caption: 'Atmiya University',
       },
     ],
   },



  ];

  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (item: GalleryItem) => {
    setSelectedItem(item);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedItem) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? selectedItem.images.length - 1 : prevIndex - 1
      );
    }
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedItem) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === selectedItem.images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  return (
    <section className="py-16 px-4 bg-gray-900 text-white">
      <div className="max-w-6x1 mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-8"
        >
          Gallery
        </motion.h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer"
              onClick={() => openModal(item)}
            >
              {/* Display the first image as a thumbnail */}
              <img
                src={item.images[0].src}
                alt={item.images[0].alt}
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              {item.images[0].caption && (
                <p className="mt-2 text-center text-gray-400">
                  {item.images[0].caption}
                </p>
              )}
              {/* Display the date of the first image */}
              <p className="mt-1 text-center text-gray-500 text-sm">
                {item.images[0].date}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Photo Modal */}
        {selectedItem && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/75"
            onClick={closeModal}
          >
            <div className="relative max-w-2xl w-80 bg-gray-800 p-4 rounded-lg">
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-white hover:text-gray-300"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="relative">
                <img
                  src={selectedItem.images[currentImageIndex].src}
                  alt={selectedItem.images[currentImageIndex].alt}
                  className="w-full h-auto rounded-lg"
                />
                {selectedItem.images[currentImageIndex].caption && (
                  <p className="mt-2 text-center text-gray-300">
                    {selectedItem.images[currentImageIndex].caption}
                  </p>
                )}
                <p className="mt-1 text-center text-gray-500 text-sm">
                  {selectedItem.images[currentImageIndex].date}
                </p>
              </div>
              {selectedItem.images.length > 1 && (
                <div className="flex justify-between items-center mt-4">
                  <button
                    onClick={prevImage}
                    className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 text-white"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 text-white"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
