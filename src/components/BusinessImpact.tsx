import React from 'react';
import { TrendingUp, Target, Clock, DollarSign, Code, BarChart3, Users, Zap, Layout, Cpu, Rocket, Shield } from 'lucide-react';

const BusinessImpact = () => {
  const impacts = [
    {
      icon: Code,
      metric: '60%',
      title: 'Performance Boost',
      description: 'Optimized web applications and faster load times',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Layout,
      metric: '3x',
      title: 'User Engagement',
      description: 'Intuitive UI/UX design increases user interaction',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: Cpu,
      metric: '40%',
      title: 'Development Speed',
      description: 'Modern tech stack accelerates project delivery',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: DollarSign,
      metric: '2.5x',
      title: 'Revenue Growth',
      description: 'Strategic digital solutions drive business growth',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      icon: Rocket,
      metric: '85%',
      title: 'Market Reach',
      description: 'Expanded audience through digital presence',
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: Shield,
      metric: '99.9%',
      title: 'System Reliability',
      description: 'Robust architecture ensures consistent performance',
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'bg-indigo-50'
    },
    {
      icon: Users,
      metric: '4.8/5',
      title: 'User Satisfaction',
      description: 'High ratings from end-users and clients',
      color: 'from-teal-500 to-teal-600',
      bgColor: 'bg-teal-50'
    },
    {
      icon: Zap,
      metric: '50%',
      title: 'Cost Efficiency',
      description: 'Optimized solutions reduce operational costs',
      color: 'from-pink-500 to-pink-600',
      bgColor: 'bg-pink-50'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
            Transforming Ideas into <span className="text-blue-600">Digital Success</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Combining technical excellence with creative innovation to deliver measurable results
            that drive your business forward in the digital age.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {impacts.map((impact, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100">
              <div className="text-center">
                <div className={`inline-flex p-3 rounded-full ${impact.bgColor} mb-4`}>
                  <impact.icon className={`bg-gradient-to-r ${impact.color} bg-clip-text text-transparent`} size={24} />
                </div>
                <div className={`text-3xl font-bold bg-gradient-to-r ${impact.color} bg-clip-text text-transparent mb-2`}>
                  {impact.metric}
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">{impact.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{impact.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 lg:p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Ready to Transform Your Digital Presence?</h3>
              <p className="text-lg opacity-90 mb-8">
                Join the growing list of successful businesses that have elevated their digital presence
                and achieved remarkable results through innovative solutions and strategic implementation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-200 hover:scale-105 text-center"
                >
                  Start Your Project
                </a>
                <a
                  href="#portfolio"
                  className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200 hover:scale-105 text-center"
                >
                  View Case Studies
                </a>
              </div>
            </div>
            <div className="text-center lg:text-right">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-2xl font-bold">4+ Years</div>
                  <div className="text-sm opacity-80">Experience</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-2xl font-bold">50+ Clients</div>
                  <div className="text-sm opacity-80">Worldwide</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessImpact;