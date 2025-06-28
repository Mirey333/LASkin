'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { 
  Search, Calendar, Clock, Eye, Heart, 
  PlayCircle, Camera
} from 'lucide-react'
import Navigation from '../../components/Navigation'

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100)
  }, [])

  const categories = [
    { id: 'all', name: 'All Content', count: 24 },
    { id: 'tutorials', name: 'Tutorials', count: 8 },
    { id: 'before-after', name: 'Before/After', count: 6 },
    { id: 'skincare-tips', name: 'Skincare Tips', count: 5 },
    { id: 'product-guides', name: 'Product Guides', count: 3 },
    { id: 'expert-advice', name: 'Expert Advice', count: 2 }
  ]

  const blogPosts = [
    {
      id: 1,
      category: 'tutorials',
      type: 'video',
      title: 'Complete LATISSE® Application Tutorial',
      excerpt: 'Learn the proper technique for applying LATISSE® to achieve maximum lash growth results safely and effectively.',
      image: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=600&h=400&fit=crop',
      author: 'Dr. Sarah Martinez',
      authorImage: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop',
      date: '2024-01-15',
      readTime: '8 min read',
      views: 1247,
      likes: 89,
      featured: true,
      tags: ['LATISSE', 'Application', 'Tutorial', 'Lashes']
    },
    {
      id: 2,
      category: 'before-after',
      type: 'gallery',
      title: 'Botox Before & After: 6-Month Journey',
      excerpt: 'See amazing transformation results from our Botox Premium treatment over a 6-month period.',
      image: 'https://images.unsplash.com/photo-1616391182219-e080b4d1043a?w=600&h=400&fit=crop',
      author: 'LA Skin Team',
      authorImage: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=100&h=100&fit=crop',
      date: '2024-01-12',
      readTime: '5 min read',
      views: 2103,
      likes: 156,
      featured: true,
      tags: ['Botox', 'Before/After', 'Results', 'Anti-Aging']
    },
    {
      id: 3,
      category: 'tutorials',
      type: 'article',
      title: 'Multi-Step Acne Treatment Routine',
      excerpt: 'Build an effective acne treatment routine using LA Skin Laboratories products for clear, healthy skin.',
      image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&h=400&fit=crop',
      author: 'Emma Thompson',
      authorImage: 'https://images.unsplash.com/photo-1494790108755-2616c0763400?w=100&h=100&fit=crop',
      date: '2024-01-10',
      readTime: '12 min read',
      views: 891,
      likes: 67,
      featured: false,
      tags: ['Acne', 'Routine', 'Skincare', 'Products']
    },
    {
      id: 4,
      category: 'before-after',
      type: 'gallery',
      title: 'Juvéderm Lip Enhancement Results',
      excerpt: 'Natural lip enhancement results using Juvéderm fillers - see the subtle yet stunning transformation.',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=400&fit=crop',
      author: 'Dr. Michael Chen',
      authorImage: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop',
      date: '2024-01-08',
      readTime: '4 min read',
      views: 1456,
      likes: 98,
      featured: false,
      tags: ['Juvéderm', 'Lip Enhancement', 'Fillers', 'Natural']
    },
    {
      id: 5,
      category: 'skincare-tips',
      type: 'article',
      title: 'Retinol: Your Complete Beginner Guide',
      excerpt: 'Everything you need to know about incorporating retinol into your skincare routine safely and effectively.',
      image: 'https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=600&h=400&fit=crop',
      author: 'Dr. Lisa Rodriguez',
      authorImage: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop',
      date: '2024-01-05',
      readTime: '15 min read',
      views: 2247,
      likes: 187,
      featured: false,
      tags: ['Retinol', 'Beginners', 'Anti-Aging', 'Guide']
    }
  ]

  const featuredPosts = blogPosts.filter(post => post.featured)
  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts.filter(post => !post.featured)
    : blogPosts.filter(post => post.category === selectedCategory && !post.featured)

  const searchedPosts = searchQuery
    ? filteredPosts.filter(post => 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : filteredPosts

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-purple-900 via-indigo-900 to-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20"></div>
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="mb-8">
              <div className="inline-block px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm mb-6 border border-white/20">
                ✨ Expert Beauty Knowledge
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-thin mb-6">
              Beauty <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Insights</span>
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              Expert tutorials, before/after transformations, and professional skincare advice from LA's leading beauty specialists
            </p>

            <div className="flex justify-center items-center space-x-8 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold">24+</div>
                <div className="text-white/70 text-sm">Expert Articles</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">8</div>
                <div className="text-white/70 text-sm">Video Tutorials</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">15k+</div>
                <div className="text-white/70 text-sm">Monthly Readers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles, tutorials..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-purple-100 hover:text-purple-700'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {selectedCategory === 'all' && (
        <section className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Content</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.id}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 flex space-x-2">
                      <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                        Featured
                      </span>
                      {post.type === 'video' && (
                        <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center">
                          <PlayCircle className="w-3 h-3 mr-1" />
                          Video
                        </span>
                      )}
                      {post.type === 'gallery' && (
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center">
                          <Camera className="w-3 h-3 mr-1" />
                          Gallery
                        </span>
                      )}
                    </div>
                    
                    {post.type === 'video' && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                          <PlayCircle className="w-8 h-8 text-purple-600" />
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <img 
                        src={post.authorImage} 
                        alt={post.author}
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <p className="font-medium text-gray-900">{post.author}</p>
                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                          <span>•</span>
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 2).map((tag, index) => (
                          <span 
                            key={index}
                            className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Eye className="w-4 h-4" />
                          <span>{post.views}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Heart className="w-4 h-4" />
                          <span>{post.likes}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              {selectedCategory === 'all' ? 'Latest Articles' : categories.find(c => c.id === selectedCategory)?.name}
            </h2>
            
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">{searchedPosts.length} articles found</span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {searchedPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.id}`}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 flex space-x-2">
                    {post.type === 'video' && (
                      <span className="bg-red-600 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center">
                        <PlayCircle className="w-3 h-3 mr-1" />
                        Video
                      </span>
                    )}
                    {post.type === 'gallery' && (
                      <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center">
                        <Camera className="w-3 h-3 mr-1" />
                        Gallery
                      </span>
                    )}
                  </div>
                  
                  {post.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <PlayCircle className="w-6 h-6 text-red-600" />
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="p-5">
                  <div className="flex items-center space-x-3 mb-3">
                    <img 
                      src={post.authorImage} 
                      alt={post.author}
                      className="w-8 h-8 rounded-full"
                    />
                    <div>
                      <p className="text-sm font-medium text-gray-900">{post.author}</p>
                      <div className="flex items-center space-x-2 text-xs text-gray-500">
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {post.tags.slice(0, 2).map((tag, index) => (
                        <span 
                          key={index}
                          className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center space-x-3 text-xs text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Eye className="w-3 h-3" />
                        <span>{post.views}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Heart className="w-3 h-3" />
                        <span>{post.likes}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Stay Updated with Expert Beauty Tips
            </h3>
            <p className="text-purple-100 mb-8">
              Get the latest tutorials, before/after showcases, and exclusive skincare advice delivered to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-xl border-0 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="bg-white text-purple-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
            
            <p className="text-purple-200 text-sm mt-4">
              Join 5,000+ beauty enthusiasts who get our weekly newsletter.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
} 