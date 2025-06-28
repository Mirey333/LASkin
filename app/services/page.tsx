'use client'

import React, { useState, useEffect } from 'react'
import { 
  Eye, Diamond, Sparkles, Palette, ArrowRight, CheckCircle, Star, Clock, 
  Award, Shield, Zap, Heart, Users, TrendingUp, Calendar, MapPin, Phone,
  Mail, Instagram, Facebook, Twitter, ChevronRight, Play, Pause
} from 'lucide-react'
import Navigation from '../../components/Navigation'
import Link from 'next/link'

export default function PremiumTreatmentsPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedService, setSelectedService] = useState(null)
  const [isVisible, setIsVisible] = useState(false)
  const [videoPlaying, setVideoPlaying] = useState(false)

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100)
  }, [])

  const services = [
    {
      id: 'latisse-treatment',
      category: 'enhancement',
      icon: <Eye className="w-8 h-8" />,
      title: "LATISSE® Treatment",
      subtitle: "Prescription Eyelash Growth",
      description: "LATISSE® solution is a prescription treatment for hypotrichosis used to grow eyelashes, making them longer, thicker and darker.",
      longDescription: "Transform your lashes with LATISSE®, the only FDA-approved prescription treatment for inadequate or not enough eyelashes (hypotrichosis). This clinically proven solution helps grow eyelashes, making them longer, thicker and darker over time.",
      price: 180,
      originalPrice: 220,
      duration: "Consultation + Kit",
      popularity: 95,
      rating: 4.9,
      reviews: 1247,
      features: [
        "FDA-approved prescription treatment",
        "Grows longer, thicker, darker lashes",
        "Clinically proven results",
        "Professional consultation included",
        "Complete application kit",
        "Follow-up appointments"
      ],
      beforeAfter: true,
      gradient: "from-pink-600 to-rose-600",
      badge: "FDA Approved",
      image: "http://www.laskinla.com/Products/coupon_latisse.jpg",
      results: {
        satisfaction: "96%",
        duration: "16 weeks for full results",
        downtime: "None",
        painLevel: "None"
      }
    },
    {
      id: 'clarisonic-treatment',
      category: 'skincare',
      icon: <Sparkles className="w-8 h-8" />,
      title: "Clarisonic Luxury Ritual",
      subtitle: "Professional Sonic Cleansing",
      description: "Experience the ultimate in facial cleansing with our professional Clarisonic treatment and take-home device consultation.",
      longDescription: "Discover the power of sonic cleansing technology with our Clarisonic Luxury Ritual. This treatment includes a professional deep-cleansing session using advanced Clarisonic devices, followed by a personalized consultation to find the perfect Clarisonic system for your home routine.",
      price: 150,
      originalPrice: 200,
      duration: "60 min",
      popularity: 88,
      rating: 4.7,
      reviews: 892,
      features: [
        "Professional sonic cleansing session",
        "Clarisonic device consultation",
        "Personalized brush head selection",
        "Deep pore cleansing",
        "Skin texture improvement",
        "Take-home care recommendations"
      ],
      beforeAfter: true,
      gradient: "from-blue-600 to-cyan-600",
      badge: "Sonic Technology",
      image: "http://www.laskinla.com/Products/clarisonics.jpg",
      results: {
        satisfaction: "94%",
        duration: "Immediate glow",
        downtime: "None",
        painLevel: "Comfortable"
      }
    },
    {
      id: 'botox-treatment',
      category: 'antiaging',
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Botox® Premium",
      subtitle: "Advanced Wrinkle Reduction",
      description: "Professional Botox® injections for smooth, youthful-looking skin with natural results and expert precision.",
      longDescription: "Achieve smoother, younger-looking skin with our premium Botox® treatments. Our experienced practitioners use advanced injection techniques to target dynamic wrinkles while maintaining natural facial expressions and movement.",
      price: 480,
      originalPrice: 600,
      duration: "30-45 min",
      popularity: 97,
      rating: 4.9,
      reviews: 1856,
      features: [
        "FDA-approved Botox® Cosmetic",
        "Expert injection techniques",
        "Natural-looking results",
        "Forehead, crow's feet & frown lines",
        "Minimal discomfort",
        "Quick recovery time"
      ],
      beforeAfter: true,
      gradient: "from-purple-600 to-indigo-600",
      badge: "Premium Injectable",
      image: "https://images.unsplash.com/photo-1616391182219-e080b4d1043a?w=400&h=300&fit=crop",
      results: {
        satisfaction: "98%",
        duration: "3-6 months",
        downtime: "Minimal",
        painLevel: "Minimal"
      }
    },
    {
      id: 'juvederm-treatment',
      category: 'enhancement',
      icon: <Heart className="w-8 h-8" />,
      title: "Juvéderm® Luxury",
      subtitle: "Premium Dermal Fillers",
      description: "Advanced dermal filler treatments for volume restoration, lip enhancement, and facial contouring with natural-looking results.",
      longDescription: "Restore youthful volume and enhance your natural beauty with our comprehensive Juvéderm® filler treatments. Our skilled practitioners use the latest techniques to create natural-looking results that enhance your unique features.",
      price: 650,
      originalPrice: 800,
      duration: "45-60 min",
      popularity: 94,
      rating: 4.8,
      reviews: 1534,
      features: [
        "Premium Juvéderm® collection",
        "Lip enhancement & volume",
        "Cheek & facial contouring",
        "Nasolabial fold treatment",
        "Natural hyaluronic acid",
        "Long-lasting results"
      ],
      beforeAfter: true,
      gradient: "from-rose-600 to-pink-600",
      badge: "Luxury Filler",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=300&fit=crop",
      results: {
        satisfaction: "97%",
        duration: "12-18 months",
        downtime: "Minimal",
        painLevel: "Mild"
      }
    }
  ]

  const categories = [
    { id: 'all', name: 'All Treatments', count: services.length },
    { id: 'enhancement', name: 'Enhancement', count: services.filter(s => s.category === 'enhancement').length },
    { id: 'antiaging', name: 'Anti-Aging', count: services.filter(s => s.category === 'antiaging').length },
    { id: 'skincare', name: 'Skincare', count: services.filter(s => s.category === 'skincare').length }
  ]

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => service.category === activeCategory)

  const testimonials = [
    {
      name: "Emma Richardson",
      treatment: "Botox Premium",
      text: "Absolutely incredible results! The precision and care taken during my treatment was exceptional. I look refreshed and natural.",
      rating: 5,
      image: "",
      location: "Beverly Hills"
    },
    {
      name: "Sophia Chen",
      treatment: "Juvederm Luxury",
      text: "The best lip enhancement I've ever had. Perfect volume and shape, exactly what I wanted. The team is incredibly skilled.",
      rating: 5,
      image: "",
      location: "Hollywood"
    },
    {
      name: "Isabella Martinez",
      treatment: "HydraFacial Deluxe",
      text: "My skin has never looked better! The immediate glow and long-term improvements are amazing. Worth every penny.",
      rating: 5,
      image: "",
      location: "Malibu"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-purple-900 via-indigo-900 to-black text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 animate-pulse" />
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-sm mb-6 border border-white/20">
              Premium Beauty Treatments
            </div>
            
            <h1 className="text-6xl md:text-8xl font-thin mb-6 tracking-tight">
              Premium <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Treatments</span>
            </h1>
            
            <p className="text-2xl text-white/80 mb-12 font-light max-w-4xl mx-auto leading-relaxed">
              Discover our signature treatments, crafted with precision and delivered with excellence.<br />
              Transform your beauty with cutting-edge technology and expert care.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/booking" className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-4 rounded-2xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
                <span className="relative z-10 flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Consultation
                </span>
              </Link>
              
              <button 
                onClick={() => setVideoPlaying(!videoPlaying)}
                className="group flex items-center text-white border-2 border-white/30 px-10 py-4 rounded-2xl font-medium hover:bg-white/10 hover:border-white/50 transition-all duration-300"
              >
                {videoPlaying ? <Pause className="w-5 h-5 mr-2" /> : <Play className="w-5 h-5 mr-2" />}
                Watch Our Process
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-8 py-3 rounded-2xl font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredServices.map((service, index) => (
              <div 
                key={service.id}
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
                  
                  <h3 className="text-2xl font-semibold mb-2 text-gray-900">
                    {service.title}
                  </h3>
                  
                  <p className="text-purple-600 font-medium mb-4">
                    {service.subtitle}
                  </p>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Ratings */}
                  <div className="flex items-center mb-4">
                    <div className="flex items-center mr-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                      ))}
                      <span className="ml-2 text-sm text-gray-600">{service.rating} ({service.reviews})</span>
                    </div>
                  </div>
                  
                  {/* Price */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <div className="text-3xl font-bold text-gray-900">
                        ${service.price}
                      </div>
                      {service.originalPrice && (
                        <div className="text-lg text-gray-500 line-through ml-2">
                          ${service.originalPrice}
                        </div>
                      )}
                    </div>
                    <div className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {service.duration}
                    </div>
                  </div>
                  
                  {/* Quick Results */}
                  <div className="grid grid-cols-2 gap-3 mb-6 text-xs">
                    <div className="bg-gray-50 p-3 rounded-xl text-center">
                      <div className="font-semibold text-gray-900">{service.results.satisfaction}</div>
                      <div className="text-gray-600">Satisfaction</div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-xl text-center">
                      <div className="font-semibold text-gray-900">{service.results.duration}</div>
                      <div className="text-gray-600">Duration</div>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <Link 
                      href="/booking" 
                      className="flex-1 text-center bg-gradient-to-r from-gray-900 to-black text-white py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                    >
                      Book Now
                    </Link>
                    <button 
                      onClick={() => setSelectedService(service)}
                      className="px-4 py-3 border-2 border-gray-200 rounded-xl hover:border-purple-300 transition-colors"
                    >
                      <ChevronRight className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-thin mb-6 bg-gradient-to-r from-gray-900 to-purple-600 bg-clip-text text-transparent">
              Why Choose LA Skin?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference that expertise, technology, and care make
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="minimal-card p-8 text-center group hover:scale-105 transition-all duration-500">
              <div className="text-purple-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-12 h-12 mx-auto" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Expert Practitioners</h3>
              <p className="text-gray-600 leading-relaxed">
                Our certified specialists have years of experience and ongoing training in the latest techniques and technologies.
              </p>
            </div>
            
            <div className="minimal-card p-8 text-center group hover:scale-105 transition-all duration-500">
              <div className="text-purple-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-12 h-12 mx-auto" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Safety First</h3>
              <p className="text-gray-600 leading-relaxed">
                We use only FDA-approved products and maintain the highest safety standards in all our treatments.
              </p>
            </div>
            
            <div className="minimal-card p-8 text-center group hover:scale-105 transition-all duration-500">
              <div className="text-purple-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-12 h-12 mx-auto" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Personalized Care</h3>
              <p className="text-gray-600 leading-relaxed">
                Every treatment is customized to your unique needs, goals, and skin type for optimal results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-thin mb-6 bg-gradient-to-r from-gray-900 to-purple-600 bg-clip-text text-transparent">
              Client Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our satisfied clients who've experienced transformative results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="minimal-card p-8 text-center group hover:scale-105 transition-all duration-500"
              >
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
                    {testimonial.treatment}
                  </div>
                  <div className="text-gray-500 text-sm">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-indigo-900 to-black text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-6xl font-thin mb-8 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Ready to Begin?
          </h2>
          
          <p className="text-2xl text-purple-100 mb-12 font-light max-w-4xl mx-auto leading-relaxed">
            Schedule your complimentary consultation today and discover which treatment is perfect for you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Link 
              href="/booking" 
              className="group relative overflow-hidden bg-gradient-to-r from-white to-purple-100 text-purple-900 px-12 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/25"
            >
              <span className="relative z-10 flex items-center">
                <Calendar className="w-6 h-6 mr-3" />
                Book Free Consultation
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            
            <div className="flex items-center text-purple-200">
              <Phone className="w-5 h-5 mr-2" />
              <span className="text-lg">(310) 555-SKIN</span>
            </div>
          </div>
          
          <div className="flex justify-center space-x-6 text-purple-300">
            <MapPin className="w-5 h-5" />
            <span>Beverly Hills • Hollywood • Malibu</span>
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-3xl font-semibold mb-2">{selectedService.title}</h3>
                  <p className="text-purple-600 font-medium text-lg">{selectedService.subtitle}</p>
                </div>
                <button 
                  onClick={() => setSelectedService(null)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>
              
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                {selectedService.longDescription}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-xl font-semibold mb-4">Treatment Features</h4>
                  <ul className="space-y-3">
                    {selectedService.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <CheckCircle className="w-5 h-5 mr-3 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold mb-4">Treatment Results</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Client Satisfaction:</span>
                      <span className="font-semibold">{selectedService.results.satisfaction}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Results Duration:</span>
                      <span className="font-semibold">{selectedService.results.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Downtime:</span>
                      <span className="font-semibold">{selectedService.results.downtime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Pain Level:</span>
                      <span className="font-semibold">{selectedService.results.painLevel}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4">
                <Link 
                  href="/booking" 
                  className={`flex-1 text-center bg-gradient-to-r ${selectedService.gradient} text-white py-4 rounded-2xl font-semibold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                >
                  Book This Treatment
                </Link>
                <button 
                  onClick={() => setSelectedService(null)}
                  className="px-8 py-4 border-2 border-gray-200 rounded-2xl hover:border-purple-300 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 