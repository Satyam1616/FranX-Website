import React, { useState } from 'react';
import { Mail, MapPin, Send, Star, Linkedin, Instagram, Twitter } from 'lucide-react';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    service: ''
  });

  const [reviewData, setReviewData] = useState({
    name: '',
    rating: 5,
    review: ''
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: false,
    message: ''
  });

  const [reviewStatus, setReviewStatus] = useState({
    loading: false,
    success: false,
    error: false,
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleReviewChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setReviewData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: false, message: '' });

    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          loading: false,
          success: true,
          error: false,
          message: 'Message sent successfully!'
        });
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          service: ''
        });
      } else {
        throw new Error(data.message || 'Something went wrong');
      }
    } catch (error) {
      setStatus({
        loading: false,
        success: false,
        error: true,
        message: error instanceof Error ? error.message : 'Failed to send message'
      });
    }
  };

  const handleReviewSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setReviewStatus({ loading: true, success: false, error: false, message: '' });

    try {
      const response = await fetch(`${API_URL}/api/reviews`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reviewData),
      });

      const data = await response.json();

      if (response.ok) {
        setReviewStatus({
          loading: false,
          success: true,
          error: false,
          message: 'Thank you for your review!'
        });
        setReviewData({
          name: '',
          rating: 5,
          review: ''
        });
      } else {
        throw new Error(data.message || 'Something went wrong');
      }
    } catch (error) {
      setReviewStatus({
        loading: false,
        success: false,
        error: true,
        message: error instanceof Error ? error.message : 'Failed to submit review. Please try again.'
      });
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
            Let's Build Something <span className="text-blue-600">Amazing Together</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to elevate your brand with stunning visuals and compelling video content?
            Let's discuss your project and bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Me a Message</h3>

            {status.message && (
              <div className={`mb-6 p-4 rounded-xl ${status.success ? 'bg-green-100 text-green-700' :
                status.error ? 'bg-red-100 text-red-700' :
                  'bg-blue-100 text-blue-700'
                }`}>
                {status.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  Service Needed
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                >
                  <option value="">Select a service</option>
                  <option value="graphic-design">Graphic Design</option>
                  <option value="video-editing">Video Editing</option>
                  <option value="branding">Brand Identity</option>
                  <option value="short-form">Short-form Content</option>
                  <option value="consultation">Social Media</option>
                </select>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                  placeholder="Project subject"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 resize-none"
                  placeholder="Tell me about your project, timeline, and any specific requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status.loading}
                className={`w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-6 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2 ${status.loading ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
              >
                {status.loading ? (
                  'Sending...'
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Get In Touch</h3>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-xl">
                    <Mail className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Email</p>
                    <p className="text-gray-600">franxstudios@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-purple-100 p-3 rounded-xl">
                    <MapPin className="text-purple-600" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Location</p>
                    <p className="text-gray-600">India (Remote Worldwide)</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600 mb-4">Follow me on social media</p>
                <div className="flex gap-4">
                  <a href="#" className="bg-blue-600 text-white p-3 rounded-xl hover:bg-blue-700 transition-colors duration-200">
                    <Linkedin size={20} />
                  </a>
                  <a href="#" className="bg-pink-600 text-white p-3 rounded-xl hover:bg-pink-700 transition-colors duration-200">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="bg-blue-400 text-white p-3 rounded-xl hover:bg-blue-500 transition-colors duration-200">
                    <Twitter size={20} />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Share Your Experience</h3>
              <p className="mb-6 opacity-90">
                Help others by sharing your experience working with FranX Studios.
              </p>

              {reviewStatus.message && (
                <div className={`mb-6 p-4 rounded-xl ${reviewStatus.success ? 'bg-white/20 text-white' :
                  reviewStatus.error ? 'bg-red-500/20 text-white' :
                    'bg-white/10 text-white'
                  }`}>
                  {reviewStatus.message}
                </div>
              )}

              <form onSubmit={handleReviewSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={reviewData.name}
                    onChange={handleReviewChange}
                    required
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:ring-2 focus:ring-white/30 focus:border-transparent transition-colors duration-200"
                  />
                </div>
                <div>
                  <textarea
                    name="review"
                    value={reviewData.review}
                    onChange={handleReviewChange}
                    required
                    rows={3}
                    placeholder="Write your review..."
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:ring-2 focus:ring-white/30 focus:border-transparent transition-colors duration-200 resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={reviewStatus.loading}
                  className={`w-full bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2 ${reviewStatus.loading ? 'opacity-75 cursor-not-allowed' : ''
                    }`}
                >
                  {reviewStatus.loading ? (
                    'Submitting...'
                  ) : (
                    <>
                      <Star size={20} />
                      Submit Review
                    </>
                  )}
                </button>
              </form>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Response Guarantee</h3>
              <p className="text-gray-700 mb-4">
                I typically respond to all inquiries within 24 hours. For urgent projects,
                I'm available for same-day consultation calls.
              </p>
              <div className="flex items-center gap-2 text-green-600">
                <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Currently available for new projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;