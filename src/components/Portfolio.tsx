import React, { useState } from 'react';
import { Filter, ExternalLink, Play, X } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState('');

  const filters = ['All', 'Branding', 'Short-form', 'Product Design', 'Website Development', 'UI/UX Design'];

  const portfolioItems = [
    // Web Development (2 items)
    {
      id: 1,
      title: 'Hackathon Website',
      category: 'Website Development',
      type: 'Web',
      image: './devsummitPage.png',
      description: 'Modern e-commerce website with seamless UX',
      link: 'https://devsummit.jagannathuniversity.org/'
    },
    {
      id: 2,
      title: 'Company Portfolio',
      category: 'Website Development',
      type: 'Web',
      image: '/BrainitixPage.png',
      description: 'Professional corporate website design',
      link: 'https://www.brainitix.com/'
    },
    // UI/UX Design (2 items)
    {
      id: 3,
      title: 'UI Design',
      category: 'UI/UX Design',
      type: 'Design',
      image: '/DevMatch.png',
      description: 'Modern dashboard interface design',
      link: 'https://drive.google.com/file/d/1DtIMrcujmnddQxu2AV3EUX8Nh2L5pw6N/view?usp=sharing'
    },
    {
      id: 4,
      title: 'UI/UX Design',
      category: 'UI/UX Design',
      type: 'Design',
      image: '/PrashantPortfolio.png',
      description: 'User-friendly mobile application design',
      link: 'https://drive.google.com/file/d/1abwB3-Tlbu-c_q_K7aOIgnZlvhwWkc0C/view?usp=drive_link'
    },
    // Graphics Design (2 items)
    {
      id: 5,
      title: 'Tharun Video Project',
      category: 'Short-form',
      type: 'Video',
      image: '/tharunvideo.png',
      description: 'A video editing project for Tharun',
      link: 'https://drive.google.com/file/d/1Iw-p1KsOMRinkAfn9ZZfwDwWHgD4aGgw/preview'
    },
    {
      id: 6,
      title: 'Facemax App Promo',
      category: 'Short-form',
      type: 'Video',
      image: '/facemax.png',
      description: 'Promotional video for the Facemax app',
      link: 'https://drive.google.com/file/d/1Wri_SzX9GofhlR-k_2ri0gdYLend1JAE/preview'
    },
    // Video Editing (2 items)
    {
      id: 7,
      title: 'Graphic Design Project',
      category: 'Branding',
      type: 'Design',
      image: '/graphics1.png',
      description: 'My first graphic design portfolio piece',
      link: 'https://www.behance.net/gallery/186545215/Social-Media-Post-Design-Portfolio'
    },
    {
      id: 8,
      title: 'Restaurant Graphics',
      category: 'Branding',
      type: 'Design',
      image: '/graphics2.png',
      description: 'Graphic design for a restaurant brand',
      link: '#'
    }
  ];

  const filteredItems = activeFilter === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeFilter);

  const openVideoModal = (videoUrl: string) => {
    setCurrentVideoUrl(videoUrl);
    setIsVideoModalOpen(true);
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
    setCurrentVideoUrl(''); // Clear URL when closing
  };

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
            Our <span className="text-blue-600">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            A collection of innovative digital solutions and creative projects that drive business growth
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 hover:scale-105 ${activeFilter === filter
                  ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => item.type === 'Video' ? openVideoModal(item.link) : window.open(item.link, '_blank', 'noopener noreferrer')}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-contain bg-white"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-3">
                    {item.type === 'Video' ? (
                      <button className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors duration-200">
                        <Play size={20} />
                      </button>
                    ) : (
                      <button className="bg-white/90 text-gray-800 p-3 rounded-full hover:bg-white transition-colors duration-200">
                        <ExternalLink size={20} />
                      </button>
                    )}
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                    {item.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-200 hover:scale-105"
          >
            <Filter size={20} />
            View More Projects
          </a>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative bg-white rounded-lg p-4 w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
            <button
              onClick={closeVideoModal}
              className="absolute top-3 right-3 bg-gray-200 hover:bg-gray-300 text-gray-700 p-2 rounded-full z-10"
            >
              <X size={20} />
            </button>
            <div className="relative pt-[56.25%] w-full">
              {/* 16:9 Aspect Ratio */}
              <iframe
                src={currentVideoUrl}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full rounded-md"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;