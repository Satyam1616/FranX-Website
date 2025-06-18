import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'John D.',
      role: 'Startup Founder',
      company: 'TechVenture Inc.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      content: 'Prashant elevated our branding and video quality beyond expectations. The attention to detail and creative vision transformed our entire brand presence.',
      rating: 5,
      project: 'Brand Identity & Video Campaign'
    },
    {
      id: 2,
      name: 'Ayesha R.',
      role: 'Content Creator',
      company: 'Digital Minds Podcast',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400',
      content: 'The podcast edits were stunning and timely. Totally reliable! Every episode sounds professional and engaging. Couldn\'t ask for better quality.',
      rating: 5,
      project: 'Podcast Editing & Production'
    },
    {
      id: 3,
      name: 'Mark T.',
      role: 'Content Strategist',
      company: 'Viral Media Co.',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      content: 'From zero to viral – our short-form videos hit 1M+ views! Prashant understands what makes content engaging and shareable.',
      rating: 5,
      project: 'Short-form Video Strategy'
    },
    {
      id: 4,
      name: 'Sarah K.',
      role: 'Marketing Director',
      company: 'Growth Solutions Ltd.',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400',
      content: 'Outstanding design work that boosted our conversion rates by 40%. The strategic approach to visual design made all the difference.',
      rating: 5,
      project: 'Marketing Campaign Design'
    },
    {
      id: 5,
      name: 'David L.',
      role: 'CEO',
      company: 'InnovateTech',
      image: 'https://images.pexels.com/photos/2182969/pexels-photo-2182969.jpeg?auto=compress&cs=tinysrgb&w=400',
      content: 'Professional, creative, and delivers on time every single time. Our video content engagement increased by 300% after working with Prashant.',
      rating: 5,
      project: 'Corporate Video Editing'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
            Client <span className="text-blue-600">Testimonials</span>
          </h2>
          <p className="text-xl text-gray-600">
            Don't just take my word for it – hear from satisfied clients
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12">
            <div className="text-center mb-8">
              <Quote className="text-blue-600 mx-auto mb-6" size={48} />
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={24} />
                ))}
              </div>
            </div>

            <div className="text-center">
              <p className="text-xl text-gray-700 leading-relaxed mb-8 italic">
                "{testimonials[currentTestimonial].content}"
              </p>

              <div className="flex items-center justify-center gap-4 mb-6">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="text-left">
                  <h4 className="font-semibold text-gray-800 text-lg">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-blue-600 font-medium">
                    {testimonials[currentTestimonial].role}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {testimonials[currentTestimonial].company}
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4">
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Project:</span> {testimonials[currentTestimonial].project}
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-gray-100 hover:bg-blue-600 hover:text-white transition-colors duration-200"
              >
                <ChevronLeft size={20} />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-200 ${index === currentTestimonial ? 'bg-blue-600' : 'bg-gray-300'
                      }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-gray-100 hover:bg-blue-600 hover:text-white transition-colors duration-200"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">4.5★</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">90%</div>
            <div className="text-gray-600">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">85%</div>
            <div className="text-gray-600">Repeat Clients</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;