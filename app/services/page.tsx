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

  const categories = [
    { id: 'all', name: 'All Treatments', count: 8 },
    { id: 'anti-aging', name: 'Anti-Aging', count: 3 },
    { id: 'enhancement', name: 'Enhancement', count: 2 },
    { id: 'skincare', name: 'Skincare', count: 3 }
  ]

  const services = [
    {
      id: 'botox-premium',
      category: 'anti-aging',
      icon: <Eye className="w-8 h-8" />,
      title: "Botox Premium",
      subtitle: "Precision Anti-Aging Injections",
      description: "Our signature Botox treatment uses the latest precision injection techniques to deliver natural-looking results that enhance your beauty without compromising your expressions.",
      longDescription: "Experience the pinnacle of anti-aging with our Premium Botox treatment. Our certified specialists use advanced micro-injection techniques and premium-grade Botox to target specific muscle groups, ensuring natural movement while reducing fine lines and wrinkles. Each treatment is customized to your facial anatomy for optimal results.",
      price: 420,
      originalPrice: 580,
      duration: "30-45 min",
      category: "Anti-Aging",
      popularity: 98,
      rating: 4.9,
      reviews: 2847,
      features: [
        "FDA-approved Botox Cosmetic",
        "Precision micro-injection technique",
        "Natural-looking results",
        "No downtime required",
        "Results last 3-6 months",
        "Complimentary consultation"
      ],
      beforeAfter: true,
      gradient: "from-purple-600 to-pink-600",
      badge: "Most Popular",
      image: "",
      results: {
        satisfaction: "98%",
        duration: "4-6 months",
        downtime: "None",
        painLevel: "Minimal"
      }
    },
    {
      id: 'juvederm-luxury',
      category: 'enhancement',
      icon: <Diamond className="w-8 h-8" />,
      title: "Juvederm Luxury",
      subtitle: "Advanced Dermal Fillers",
      description: "Premium hyaluronic acid fillers for natural volume enhancement, lip augmentation, and facial contouring with immediate, long-lasting results.",
      longDescription: "Transform your features with our Luxury Juvederm treatment. Using the latest generation of hyaluronic acid fillers, we create natural volume and definition while maintaining facial harmony. Perfect for lip enhancement, cheek augmentation, and smoothing deep lines.",
      price: 580,
      originalPrice: 750,
      duration: "45-60 min",
      category: "Enhancement",
      popularity: 94,
      rating: 4.8,
      reviews: 1923,
      features: [
        "Premium Juvederm Ultra XC",
        "Immediate visible results",
        "Natural volume enhancement",
        "Lidocaine for comfort",
        "Results last 12-18 months",
        "Expert injection technique"
      ],
      beforeAfter: true,
      gradient: "from-blue-600 to-purple-600",
      badge: "Premium",
      image: "",
      results: {
        satisfaction: "96%",
        duration: "12-18 months",
        downtime: "24-48 hours",
        painLevel: "Mild"
      }
    },
    {
      id: 'latisse-elite',
      category: 'enhancement',
      icon: <Sparkles className="w-8 h-8" />,
      title: "Latisse Elite",
      subtitle: "Eyelash Growth Enhancement",
      description: "Revolutionary FDA-approved treatment that enhances your natural lashes, making them longer, fuller, and darker over time.",
      longDescription: "Achieve stunning lashes naturally with Latisse Elite. This clinically proven treatment stimulates your lash growth cycle, resulting in longer, thicker, and darker lashes. Our comprehensive program includes application training and progress monitoring.",
      price: 340,
      originalPrice: 420,
      duration: "15 min consultation",
      category: "Enhancement",
      popularity: 89,
      rating: 4.7,
      reviews: 1456,
      features: [
        "FDA-approved formula",
        "25% longer lashes in 16 weeks",
        "Clinically proven results",
        "Easy daily application",
        "Includes applicators",
        "Progress monitoring"
      ],
      beforeAfter: true,
      gradient: "from-pink-600 to-rose-600",
      badge: "New",
      image: "",
      results: {
        satisfaction: "94%",
        duration: "Ongoing",
        downtime: "None",
        painLevel: "None"
      }
    },
    {
      id: 'clarisonic-ritual',
      category: 'skincare',
      icon: <Palette className="w-8 h-8" />,
      title: "Clarisonic Luxury Ritual",
      subtitle: "Professional Sonic Skincare",
      description: "Indulgent 60-minute skincare ceremony combining sonic cleansing technology with premium treatments for radiant, healthy skin.",
      longDescription: "Experience the ultimate in skincare luxury with our Clarisonic Ritual. This comprehensive treatment combines advanced sonic technology with premium skincare products, custom-tailored to your skin type and concerns for immediate and lasting results.",
      price: 220,
      originalPrice: 300,
      duration: "60 min",
      category: "Skincare",
      popularity: 92,
      rating: 4.8,
      reviews: 987,
      features: [
        "Professional Clarisonic device",
        "Custom skincare analysis",
        "Premium product selection",
        "Relaxing facial massage",
        "LED light therapy",
        "Take-home skincare kit"
      ],
      beforeAfter: false,
      gradient: "from-indigo-600 to-blue-600",
      badge: "Bestseller",
      image: "",
      results: {
        satisfaction: "97%",
        duration: "Immediate",
        downtime: "None",
        painLevel: "Relaxing"
      }
    },
    {
      id: 'hydrafacial-deluxe',
      category: 'skincare',
      icon: <Heart className="w-8 h-8" />,
      title: "HydraFacial Deluxe",
      subtitle: "Advanced Skin Resurfacing",
      description: "Multi-step treatment that cleanses, exfoliates, extracts, and hydrates skin using patented vortex technology for instant glow.",
      longDescription: "Transform your skin with our signature HydraFacial Deluxe treatment. This revolutionary procedure combines cleansing, exfoliation, extraction, hydration, and antioxidant protection in one treatment, resulting in immediate, noticeable results.",
      price: 380,
      originalPrice: 480,
      duration: "45 min",
      category: "Skincare",
      popularity: 96,
      rating: 4.9,
      reviews: 2156,
      features: [
        "Patented vortex technology",
        "Instant visible results",
        "No downtime required",
        "Suitable for all skin types",
        "Includes LED therapy",
        "Customized serums"
      ],
      beforeAfter: true,
      gradient: "from-teal-600 to-cyan-600",
      badge: "Trending",
      image: "",
      results: {
        satisfaction: "99%",
        duration: "Immediate",
        downtime: "None",
        painLevel: "Comfortable"
      }
    },
    {
      id: 'microneedling-elite',
      category: 'anti-aging',
      icon: <Zap className="w-8 h-8" />,
      title: "Microneedling Elite",
      subtitle: "Collagen Induction Therapy",
      description: "Advanced microneedling treatment that stimulates natural collagen production for improved skin texture, tone, and firmness.",
      longDescription: "Rejuvenate your skin with our Elite Microneedling treatment. Using precision micro-needles, we stimulate your skin's natural healing process to boost collagen production, resulting in smoother, firmer, more youthful-looking skin.",
      price: 450,
      originalPrice: 600,
      duration: "60 min",
      category: "Anti-Aging",
      popularity: 91,
      rating: 4.7,
      reviews: 1234,
      features: [
        "Professional-grade device",
        "Sterile, single-use needles",
        "Customized depth settings",
        "Growth factor serums",
        "Minimal downtime",
        "Progressive results"
      ],
      beforeAfter: true,
      gradient: "from-orange-600 to-red-600",
      badge: "Advanced",
      image: "",
      results: {
        satisfaction: "95%",
        duration: "3-6 months",
        downtime: "24-48 hours",
        painLevel: "Moderate"
      }
    },
    {
      id: 'chemical-peel-luxury',
      category: 'anti-aging',
      icon: <Shield className="w-8 h-8" />,
      title: "Chemical Peel Luxury",
      subtitle: "Professional Skin Renewal",
      description: "Customized chemical peel treatment that removes damaged skin layers to reveal smoother, more radiant skin underneath.",
      longDescription: "Reveal your skin's natural beauty with our Luxury Chemical Peel. Our experienced aestheticians select the perfect peel formulation for your skin type and concerns, ensuring optimal results with minimal discomfort.",
      price: 320,
      originalPrice: 420,
      duration: "45 min",
      category: "Anti-Aging",
      popularity: 88,
      rating: 4.6,
      reviews: 876,
      features: [
        "Customized peel formulation",
        "Professional application",
        "Post-treatment care kit",
        "Progressive improvement",
        "Safe for all skin types",
        "Expert aftercare guidance"
      ],
      beforeAfter: true,
      gradient: "from-yellow-600 to-orange-600",
      badge: "Classic",
      image: "",
      results: {
        satisfaction: "93%",
        duration: "2-4 weeks",
        downtime: "3-7 days",
        painLevel: "Mild"
      }
    },
    {
      id: 'dermaplaning-premium',
      category: 'skincare',
      icon: <Award className="w-8 h-8" />,
      title: "Dermaplaning Premium",
      subtitle: "Precision Exfoliation",
      description: "Gentle yet effective exfoliation treatment that removes dead skin cells and vellus hair for instantly smoother, brighter skin.",
      longDescription: "Experience the ultimate in skin smoothing with our Premium Dermaplaning treatment. Using a precise surgical blade, we gently remove dead skin cells and fine hair, revealing the soft, radiant skin beneath.",
      price: 280,
      originalPrice: 350,
      duration: "30 min",
      category: "Skincare",
      popularity: 90,
      rating: 4.8,
      reviews: 1567,
      features: [
        "Sterile surgical blade",
        "Immediate results",
        "No downtime required",
        "Enhanced product absorption",
        "Makeup application improvement",
        "Monthly maintenance recommended"
      ],
      beforeAfter: true,
      gradient: "from-emerald-600 to-teal-600",
      badge: "Instant Results",
      image: "",
      results: {
        satisfaction: "98%",
        duration: "3-4 weeks",
        downtime: "None",
        painLevel: "None"
      }
    }
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