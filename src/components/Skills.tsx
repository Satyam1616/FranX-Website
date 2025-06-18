import React from 'react';
import { Palette, Video, Wand2, Brain, Code, Layout, Camera, PenTool } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Web Development',
      icon: Code,
      skills: [
        { name: 'React/Next.js', level: 95, color: 'bg-blue-500' },
        { name: 'Node.js', level: 90, color: 'bg-green-500' },
        { name: 'TypeScript', level: 85, color: 'bg-indigo-500' },
        { name: 'Tailwind CSS', level: 95, color: 'bg-cyan-500' },
      ]
    },
    {
      title: 'UI/UX Design',
      icon: Layout,
      skills: [
        { name: 'Figma', level: 95, color: 'bg-purple-500' },
        { name: 'User Research', level: 85, color: 'bg-pink-500' },
        { name: 'Wireframing', level: 90, color: 'bg-blue-500' },
        { name: 'Prototyping', level: 90, color: 'bg-red-500' },
      ]
    },
    {
      title: 'Graphic Design',
      icon: PenTool,
      skills: [
        { name: 'Photoshop', level: 90, color: 'bg-blue-500' },
        { name: 'Illustrator', level: 85, color: 'bg-orange-500' },
        { name: 'InDesign', level: 80, color: 'bg-red-500' },
        { name: 'Brand Identity', level: 90, color: 'bg-purple-500' },
      ]
    },
    {
      title: 'Video Editing',
      icon: Camera,
      skills: [
        { name: 'Premiere Pro', level: 95, color: 'bg-purple-500' },
        { name: 'After Effects', level: 90, color: 'bg-indigo-500' },
        { name: 'Motion Graphics', level: 85, color: 'bg-blue-500' },
        { name: 'Color Grading', level: 90, color: 'bg-green-500' },
      ]
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
            Our <span className="text-blue-600">Expertise</span>
          </h2>
          <p className="text-xl text-gray-600">
            Comprehensive digital solutions for your creative needs
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-3 rounded-xl">
                  <category.icon className="text-blue-600" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">{category.title}</h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div
                        className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out group-hover:shadow-lg`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
          <div className="text-center">
            <Wand2 className="mx-auto mb-6" size={48} />
            <h3 className="text-2xl font-bold mb-4">Excellence Through Innovation</h3>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              We push the boundaries of digital creativity, staying ahead of industry trends to deliver
              solutions that not only meet but exceed your expectations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;