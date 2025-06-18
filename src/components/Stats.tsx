import React, { useState, useEffect, useRef } from 'react';
import { Users, Briefcase, Star, Globe } from 'lucide-react';

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({ clients: 0, projects: 0, rating: 0, companies: 0 });
  const sectionRef = useRef(null);
  const animationFrameId = useRef<number | null>(null);

  const finalCounts = { clients: 50, projects: 80, rating: 4.5, companies: 20 };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000; // milliseconds
      const startTimestamp = Date.now();

      const animate = () => {
        const elapsedTime = Date.now() - startTimestamp;
        let progress = Math.min(elapsedTime / duration, 1);

        setCounts({
          clients: Math.round(finalCounts.clients * progress),
          projects: Math.round(finalCounts.projects * progress),
          rating: parseFloat((finalCounts.rating * progress).toFixed(1)),
          companies: Math.round(finalCounts.companies * progress),
        });

        if (progress < 1) {
          animationFrameId.current = requestAnimationFrame(animate);
        } else {
          setCounts(finalCounts); // Ensure final values are exact
        }
      };

      animationFrameId.current = requestAnimationFrame(animate); // Start animation

      return () => {
        if (animationFrameId.current) {
          cancelAnimationFrame(animationFrameId.current);
        }
      };
    }
  }, [isVisible]);

  const stats = [
    {
      icon: Users,
      value: `${counts.clients}+`,
      label: 'Happy Clients',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Briefcase,
      value: `${counts.projects}+`,
      label: 'Projects Completed',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
    },
    {
      icon: Star,
      value: `${counts.rating}★`,
      label: 'Average Rating',
      color: 'from-yellow-500 to-yellow-600',
      bgColor: 'bg-yellow-50',
    },
    {
      icon: Globe,
      value: `${counts.companies}+`,
      label: 'Companies Served',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
            Track <span className="text-blue-600">Record</span>
          </h2>
          <p className="text-xl text-gray-600">
            Numbers that speak for themselves
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100"
            >
              <div className="text-center">
                <div className={`inline-flex p-4 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 mb-6`}>
                  <stat.icon className={`text-2xl ${stat.color.split(' ')[1]}`} size={32} />
                </div>
                <div className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Why Choose Us?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex items-center justify-center gap-3">
                <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700 font-medium">Rapid Project Completion</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
                <span className="text-gray-700 font-medium">On-Time Delivery</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700 font-medium">Consistent Quality</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
                <span className="text-gray-700 font-medium">Client Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;