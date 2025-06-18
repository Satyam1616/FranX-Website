import React from 'react';
import { Palette, Video, Megaphone, Smartphone, Award, Zap, Globe, Layout } from 'lucide-react';

const Services = () => {
  const services = [
    {
      category: 'Website Development',
      icon: Globe,
      color: 'from-orange-400 to-pink-500',
      bgColor: 'from-orange-50 to-pink-50',
      services: [
        'Responsive Web Design',
        'E-commerce Solutions',
        'Custom Web Applications',
        'Website Maintenance',
        'Performance Optimization'
      ]
    },
    {
      category: 'UI/UX Design',
      icon: Layout,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-50 to-indigo-50',
      services: [
        'User Interface Design',
        'User Experience Design',
        'Wireframing & Prototyping',
        'User Research & Testing',
        'Design Systems'
      ]
    },
    {
      category: 'Graphic Design',
      icon: Palette,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-50 to-pink-50',
      services: [
        'Brand Identity & Logos',
        'Product Design & Packaging',
        'Marketing Materials',
        'Print Design',
        'Visual Branding'
      ]
    },
    {
      category: 'Video Editing',
      icon: Video,
      color: 'from-green-500 to-green-600',
      bgColor: 'from-green-50 to-emerald-50',
      services: [
        'Video Editing',
        'Motion Graphics',
        'Explainer Videos',
        'Content Creation',
        'Post-Production'
      ]
    }
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
            Our <span className="text-blue-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive creative solutions tailored to elevate your brand and engage your audience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className={`bg-gradient-to-br ${service.bgColor} rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100 flex flex-col h-full`}>
              <div className="text-center mb-8">
                <div className={`inline-flex p-4 rounded-full bg-white/80 backdrop-blur-sm mb-6`}>
                  <service.icon className={`bg-gradient-to-r ${service.color} bg-clip-text text-transparent`} size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.category}</h3>
              </div>

              <ul className="space-y-3 flex-grow">
                {service.services.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`}></div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <a
                  href="#contact"
                  className={`w-full block text-center bg-gradient-to-r ${service.color} text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 hover:scale-105`}
                >
                  Get Started
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-orange-100 p-3 rounded-xl">
                <Award className="text-orange-600" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Premium Quality</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Every project is crafted with meticulous attention to detail, ensuring professional-grade
              results that exceed expectations and drive real business impact.
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-green-100 p-3 rounded-xl">
                <Zap className="text-green-600" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Fast Turnaround</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Quick delivery without compromising quality. I understand the importance of deadlines
              and ensure your projects are completed efficiently and on schedule.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;