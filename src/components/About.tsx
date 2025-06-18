import { User, Award, Globe, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Continuing background from Hero */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-slate-50 to-purple-50"></div>

        {/* Subtle animated elements that continue the theme */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-400/10 via-transparent to-blue-400/10 animate-mesh-continue-1"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-cyan-400/8 via-transparent to-purple-400/8 animate-mesh-continue-2"></div>
        </div>

        <div className="absolute top-1/3 right-1/3 w-56 h-56 bg-gradient-to-r from-cyan-300/6 to-blue-300/6 rounded-full blur-3xl animate-float-gentle-reverse"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
            About <span className="text-blue-600">Us</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A team of passionate creative professionals with extensive experience in web development, UI/UX design, graphic design and video editing,
            dedicated to bringing your vision to life through compelling digital experiences and visual storytelling.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <User className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Professional Journey</h3>
                  <p className="text-gray-600">
                    With over 4 years in the creative industry, I've honed my skills in web development, UI/UX design, graphic design and video editing,
                    working with diverse clients to create impactful digital experiences and visual content.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Award className="text-green-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Proven Excellence</h3>
                  <p className="text-gray-600">
                    Delivered 40+ successful projects with five-star reviews and maintained a 4.5/5 average
                    client satisfaction rating across all platforms.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <Globe className="text-purple-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Global Reach</h3>
                  <p className="text-gray-600">
                    Successfully collaborated with 50+ clients and 20+ companies both nationally and internationally,
                    bringing diverse perspectives to every project.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:pl-12">
            <div className="bg-gradient-to-br from-blue-50/90 to-purple-50/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
              <div className="text-center mb-8">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Heart className="text-white" size={48} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Digital Vision</h3>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <p className="text-gray-700">Every project tells a story worth sharing</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <p className="text-gray-700">Quality and creativity go hand in hand</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <p className="text-gray-700">Client satisfaction is my top priority</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <p className="text-gray-700">Innovation drives exceptional results</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <p className="text-gray-700">Measurable impact and proven success metrics</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;