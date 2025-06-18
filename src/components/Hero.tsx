import React from 'react';
import { ArrowRight, Download, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Elegant Animated Background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50"></div>

        {/* Animated mesh gradients */}
        <div className="absolute inset-0 opacity-60">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-400/20 via-transparent to-purple-400/20 animate-mesh-1"></div>
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-purple-400/15 via-transparent to-cyan-400/15 animate-mesh-2"></div>
          <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-tr from-cyan-400/10 via-transparent to-blue-400/10 animate-mesh-3"></div>
        </div>

        {/* Subtle floating elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-300/10 to-purple-300/10 rounded-full blur-3xl animate-float-gentle"></div>
        <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-gradient-to-r from-purple-300/8 to-cyan-300/8 rounded-full blur-3xl animate-float-gentle-delayed"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                Crafting Digital
              </span>
              <br />
              <span className="text-gray-800">Excellence</span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transforming ideas into stunning digital experiences through
              <span className="text-blue-600 font-semibold"> web development</span>,
              <span className="text-blue-600 font-semibold"> UI/UX design</span>,
              <span className="text-blue-600 font-semibold"> graphic design</span> and
              <span className="text-blue-600 font-semibold"> video editing</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <a
                href="#contact"
                className="group bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                Let's Work Together
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
              </a>

              <a
                href="#portfolio"
                className="group border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                <Play size={20} />
                View My Work
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">4+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">80+</div>
                <div className="text-gray-600">Projects Done</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">4.5★</div>
                <div className="text-gray-600">Client Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;