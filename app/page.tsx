'use client'

import React, { useState, useEffect } from 'react'
import { Eye, Diamond, Sparkles, Palette, ArrowRight, CheckCircle, Star, Play, ChevronDown, Zap, Award, Users, TrendingUp } from 'lucide-react'
import Navigation from '../components/Navigation'
import Link from 'next/link'

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('mousemove', handleMouseMove)
    
    setTimeout(() => setIsVisible(true), 100)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const services = [
    {
      icon: <Eye className="service-icon" />,
      title: "Botox Premium",
      description: "Precision anti-aging injections for natural rejuvenation",
      price: "$420",
      duration: "30 min",
      features: ["Natural results", "No downtime", "FDA approved"],
      gradient: "from-purple-600 to-pink-600",
      badge: "Most Popular"
    },
    {
      icon: <Diamond className="service-icon" />,
      title: "Juvederm Luxury",
      description: "Advanced dermal fillers for perfect lip enhancement",
      price: "$580",
      duration: "45 min",
      features: ["Long-lasting", "Natural volume", "Immediate results"],
      gradient: "from-blue-600 to-purple-600",
      badge: "Premium"
    },
    {
      icon: <Sparkles className="service-icon" />,
      title: "Latisse Elite",
      description: "Revolutionary eyelash growth enhancement system",
      price: "$340",
      duration: "15 min",
      features: ["Clinically proven", "25% longer lashes", "Easy application"],
      gradient: "from-pink-600 to-rose-600",
      badge: "New"
    },
    {
      icon: <Palette className="service-icon" />,
      title: "Clarisonic Ritual",
      description: "Professional skincare ceremony with sonic technology",
      price: "$220",
      duration: "60 min",
      features: ["Deep cleansing", "Radiant skin", "Relaxing experience"],
      gradient: "from-indigo-600 to-blue-600",
      badge: "Bestseller"
    }
  ]

  const testimonials = [
    {
      name: "Isabella Sterling",
      title: "VIP Client",
      text: "The precision and artistry are unmatched. Every treatment exceeds expectations.",
      rating: 5,
      image: "👑",
      location: "Beverly Hills"
    },
    {
      name: "Victoria Chen",
      title: "Platinum Member",
      text: "Minimalist elegance meets scientific excellence. Simply perfect.",
      rating: 5,
      image: "💎",
      location: "Hollywood"
    },
    {
      name: "Sophia Martinez",
      title: "Elite Member",
      text: "The most refined beauty experience in Los Angeles. Exceptional quality.",
      rating: 5,
      image: "✨",
      location: "Malibu"
    }
  ]

  const stats = [
    { number: "98%", label: "Client Satisfaction", icon: <Star className="w-8 h-8" /> },
    { number: "15K+", label: "Treatments", icon: <Users className="w-8 h-8" /> },
    { number: "25", label: "Years Experience", icon: <Award className="w-8 h-8" /> },
    { number: "5★", label: "Rating", icon: <TrendingUp className="w-8 h-8" /> }
  ]

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navigation />
      
      {/* Floating Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            top: '10%',
            left: '10%'
          }}
        />
        <div 
          className="absolute w-80 h-80 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * -0.015}px, ${mousePosition.y * -0.015}px)`,
            top: '60%',
            right: '10%'
          }}
        />
        <div 
          className="absolute w-64 h-64 bg-gradient-to-r from-rose-400/20 to-orange-400/20 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
            bottom: '20%',
            left: '20%'
          }}
        />
      </div>

      {/* Hero Section - Ultra Modern */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900">
        <div className="absolute inset-0 bg-black/20" />
        
        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-20 grid-rows-20 h-full w-full">
            {Array.from({ length: 400 }).map((_, i) => (
              <div 
                key={i} 
                className="border border-white/10 animate-pulse"
                style={{ animationDelay: `${i * 0.01}s` }}
              />
            ))}
          </div>
        </div>

        <div className={`relative z-10 text-center px-6 transition-all duration-2000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-8">
            <div className="inline-block px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-sm mb-6 border border-white/20">
              🏆 #1 Premium Beauty Lab in LA
            </div>
          </div>
          
          <h1 className="text-7xl md:text-9xl font-thin text-white mb-6 tracking-tight">
            LA <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Skin</span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-white/80 mb-8 font-light max-w-4xl mx-auto leading-relaxed">
            Where <span className="text-purple-300">precision</span> meets <span className="text-pink-300">artistry</span>.<br />
            Experience the future of aesthetic medicine.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Link href="/booking" className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-4 rounded-2xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
              <span className="relative z-10 flex items-center">
                <Zap className="w-5 h-5 mr-2" />
                Book Consultation
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
            
            <Link href="/services" className="group flex items-center text-white border-2 border-white/30 px-10 py-4 rounded-2xl font-medium hover:bg-white/10 hover:border-white/50 transition-all duration-300">
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Explore Services
            </Link>
          </div>
          
          <div className="animate-bounce">
            <ChevronDown className="w-8 h-8 text-white/60 mx-auto" />
          </div>
        </div>
      </section>

      {/* Stats Section - Glassmorphism */}
      <section className="py-20 bg-gradient-to-r from-purple-50 to-pink-50 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className={`minimal-card p-8 text-center group hover:scale-105 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-purple-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-5xl font-light mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - Modern Cards */}
      <section className="py-32 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-thin mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Premium Treatments
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our signature treatments, crafted with precision and delivered with excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`group relative overflow-hidden bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Badge */}
                <div className={`absolute top-4 right-4 z-10 px-3 py-1 bg-gradient-to-r ${service.gradient} text-white text-xs font-medium rounded-full`}>
                  {service.badge}
                </div>
                
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <div className="relative p-8">
                  <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-3xl font-bold text-gray-900">
                      {service.price}
                    </div>
                    <div className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      {service.duration}
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 mr-3 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    href="/booking" 
                    className={`block w-full text-center bg-gradient-to-r ${service.gradient} text-white py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Enhanced */}
      <section className="py-32 bg-gradient-to-br from-gray-50 to-purple-50 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-thin mb-6 bg-gradient-to-r from-gray-900 to-purple-600 bg-clip-text text-transparent">
              Client Experience
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our satisfied clients who've experienced the LA Skin difference
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`minimal-card p-8 text-center group hover:scale-105 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {testimonial.image}
                </div>
                
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-6 italic text-lg leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t pt-6">
                  <div className="font-semibold text-gray-900 text-lg">
                    {testimonial.name}
                  </div>
                  <div className="text-purple-600 font-medium">
                    {testimonial.title}
                  </div>
                  <div className="text-gray-500 text-sm">
                    📍 {testimonial.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Ultra Modern */}
      <section className="py-32 bg-gradient-to-br from-purple-900 via-indigo-900 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 animate-pulse" />
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h2 className="text-7xl font-thin mb-8 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Begin Your Journey
          </h2>
          
          <p className="text-2xl text-purple-100 mb-12 font-light max-w-4xl mx-auto leading-relaxed">
            Experience the pinnacle of aesthetic medicine. 
            Schedule your consultation today and discover what makes LA Skin extraordinary.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              href="/booking" 
              className="group relative overflow-hidden bg-gradient-to-r from-white to-purple-100 text-purple-900 px-12 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/25"
            >
              <span className="relative z-10 flex items-center">
                Book Consultation
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            
            <Link 
              href="/services" 
              className="text-white border-2 border-white/30 px-12 py-5 rounded-2xl font-semibold text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Footer - Enhanced */}
      <footer className="py-20 bg-black text-white">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h3 className="text-4xl font-thin mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              LA Skin Elite
            </h3>
            <p className="text-purple-200 mb-8 text-lg">
              Premium Beauty Laboratory<br />
              Beverly Hills, Los Angeles
            </p>
            <div className="flex justify-center space-x-8 text-purple-300">
              <Link href="/services" className="hover:text-white transition-colors text-lg">Services</Link>
              <Link href="/booking" className="hover:text-white transition-colors text-lg">Booking</Link>
              <Link href="/shop" className="hover:text-white transition-colors text-lg">Shop</Link>
              <Link href="/analytics" className="hover:text-white transition-colors text-lg">Analytics</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
} 