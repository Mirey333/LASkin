'use client'

import React, { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { 
  ArrowLeft, Calendar, Clock, User, Eye, Heart, Share2, 
  PlayCircle, Camera, Bookmark, ChevronRight, ThumbsUp,
  MessageCircle, Star, Tag, FacebookIcon, TwitterIcon
} from 'lucide-react'
import Navigation from '../../../components/Navigation'

export default function BlogPostPage() {
  const params = useParams()
  const postId = params?.postId ? (Array.isArray(params.postId) ? params.postId[0] : params.postId) : '1'
  
  const [isLiked, setIsLiked] = useState(false)
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [selectedImage, setSelectedImage] = useState(0)

  // Sample blog post data (in real app this would come from API/database)
  const blogPosts = {
    '1': {
      id: 1,
      category: 'tutorials',
      type: 'video',
      title: 'Complete LATISSE® Application Tutorial',
      excerpt: 'Learn the proper technique for applying LATISSE® to achieve maximum lash growth results safely and effectively.',
      content: `
        <h2>Master the Art of LATISSE® Application</h2>
        
        <p>Welcome to our comprehensive LATISSE® application tutorial. In this detailed guide, we'll walk you through every step of the process to ensure you achieve the best possible results while maintaining safety.</p>
        
        <h3>What You'll Need</h3>
        <ul>
          <li>LATISSE® solution (prescription required)</li>
          <li>Single-use sterile applicators</li>
          <li>Clean towel</li>
          <li>Mirror with good lighting</li>
          <li>Makeup remover (if wearing makeup)</li>
        </ul>
        
        <h3>Step-by-Step Application Process</h3>
        
        <h4>Step 1: Preparation</h4>
        <p>Start by thoroughly cleansing your face and removing all makeup, especially around the eye area. Your skin should be completely clean and dry before application.</p>
        
        <h4>Step 2: Application</h4>
        <p>Using a fresh, sterile applicator for each eye, place one drop of LATISSE® on the applicator. Gently draw the applicator across the upper eyelash line, from the inner corner to the outer corner.</p>
        
        <h4>Step 3: Clean Up</h4>
        <p>Immediately dispose of the applicator and blot any excess solution with a clean tissue. Do not reuse applicators.</p>
        
        <h3>Important Safety Tips</h3>
        <ul>
          <li>Use only once daily in the evening</li>
          <li>Apply only to the upper eyelash line</li>
          <li>Do not apply to lower eyelashes</li>
          <li>Use fresh applicator for each eye</li>
          <li>Contact lens wearers should remove lenses before application</li>
        </ul>
        
        <h3>What to Expect</h3>
        <p>Results with LATISSE® are gradual. You may begin to see increased length and fullness of your eyelashes at 8 weeks, with full results at 16 weeks. Continued use is required to maintain results.</p>
        
        <h3>Potential Side Effects</h3>
        <p>While LATISSE® is generally well-tolerated, some users may experience:</p>
        <ul>
          <li>Mild eye irritation</li>
          <li>Temporary redness</li>
          <li>Darkening of the eyelid skin (usually reversible)</li>
        </ul>
        
        <p>If you experience any concerning side effects, discontinue use and consult with our skincare specialists immediately.</p>
      `,
      image: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=800&h=500&fit=crop',
      videoUrl: 'https://example.com/latisse-tutorial',
      gallery: [
        'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=800&h=500&fit=crop',
        'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&h=500&fit=crop',
        'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&h=500&fit=crop'
      ],
      author: 'Dr. Sarah Martinez',
      authorImage: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop',
      authorBio: 'Dr. Sarah Martinez is a board-certified dermatologist with over 15 years of experience in cosmetic dermatology and aesthetic medicine.',
      date: '2024-01-15',
      readTime: '8 min read',
      views: 1247,
      likes: 89,
      featured: true,
      tags: ['LATISSE', 'Application', 'Tutorial', 'Lashes', 'Beauty', 'Skincare']
    },
    '2': {
      id: 2,
      category: 'before-after',
      type: 'gallery',
      title: 'Botox Before & After: 6-Month Journey',
      excerpt: 'See amazing transformation results from our Botox Premium treatment over a 6-month period.',
      content: `
        <h2>A Complete Botox Transformation Journey</h2>
        
        <p>Follow Sarah's incredible 6-month Botox journey at LA Skin Laboratories. This comprehensive before-and-after showcase demonstrates the gradual improvements in fine lines and wrinkles achieved through our premium Botox treatments.</p>
        
        <h3>Patient Profile</h3>
        <ul>
          <li><strong>Age:</strong> 42 years old</li>
          <li><strong>Skin Type:</strong> Combination, showing early signs of aging</li>
          <li><strong>Main Concerns:</strong> Forehead lines, crow's feet, frown lines</li>
          <li><strong>Treatment Goal:</strong> Natural-looking wrinkle reduction</li>
        </ul>
        
        <h3>Treatment Timeline</h3>
        
        <h4>Initial Consultation (Month 0)</h4>
        <p>During the initial consultation, we assessed Sarah's facial anatomy and discussed her aesthetic goals. We developed a customized treatment plan targeting her specific areas of concern.</p>
        
        <h4>First Treatment (Month 1)</h4>
        <p>Sarah received her first Botox Premium treatment, focusing on:</p>
        <ul>
          <li>Forehead lines (frontalis muscle)</li>
          <li>Glabellar lines (procerus and corrugator muscles)</li>
          <li>Lateral canthal lines (orbicularis oculi)</li>
        </ul>
        
        <h4>Follow-up (Month 2)</h4>
        <p>At the 4-week mark, we assessed the initial results and made minor adjustments to ensure optimal outcomes.</p>
        
        <h4>Second Treatment (Month 4)</h4>
        <p>Sarah received her second treatment to maintain and enhance the results achieved from the first session.</p>
        
        <h4>Final Results (Month 6)</h4>
        <p>The final results show significant improvement in all treated areas while maintaining natural facial expressions.</p>
        
        <h3>Key Results Achieved</h3>
        <ul>
          <li>90% reduction in forehead lines</li>
          <li>85% improvement in crow's feet</li>
          <li>95% reduction in frown lines</li>
          <li>Natural-looking, refreshed appearance</li>
          <li>No loss of facial expression</li>
        </ul>
        
        <h3>Patient Testimonial</h3>
        <blockquote>
          "I'm absolutely thrilled with my results! The treatment was comfortable, and the results look completely natural. I feel like myself, just refreshed and more confident. The team at LA Skin Laboratories is incredibly professional and made the entire experience wonderful."
        </blockquote>
        
        <h3>Why Choose LA Skin Laboratories for Botox?</h3>
        <ul>
          <li>Board-certified practitioners</li>
          <li>Premium Botox products</li>
          <li>Customized treatment plans</li>
          <li>Natural-looking results</li>
          <li>Comprehensive aftercare</li>
        </ul>
      `,
      image: 'https://images.unsplash.com/photo-1616391182219-e080b4d1043a?w=800&h=500&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1616391182219-e080b4d1043a?w=800&h=500&fit=crop',
        'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&h=500&fit=crop',
        'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&h=500&fit=crop',
        'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=800&h=500&fit=crop'
      ],
      author: 'LA Skin Team',
      authorImage: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=100&h=100&fit=crop',
      authorBio: 'Our expert team of aesthetic specialists and dermatologists at LA Skin Laboratories.',
      date: '2024-01-12',
      readTime: '5 min read',
      views: 2103,
      likes: 156,
      featured: true,
      tags: ['Botox', 'Before/After', 'Results', 'Anti-Aging', 'Wrinkles', 'Transformation']
    }
  }

  const post = blogPosts[postId] || blogPosts['1']

  const relatedPosts = [
    {
      id: 3,
      title: 'Multi-Step Acne Treatment Routine',
      excerpt: 'Build an effective acne treatment routine using LA Skin Laboratories products.',
      image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=250&fit=crop',
      date: '2024-01-10',
      readTime: '12 min read'
    },
    {
      id: 4,
      title: 'Juvéderm Lip Enhancement Results',
      excerpt: 'Natural lip enhancement results using Juvéderm fillers.',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=250&fit=crop',
      date: '2024-01-08',
      readTime: '4 min read'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-purple-900 via-indigo-900 to-black text-white">
        <div className="absolute inset-0 bg-black/30" />
        
        <div className="relative z-10 container mx-auto px-6">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-white/70 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">{post.title}</span>
          </div>

          {/* Post Header */}
          <div className="max-w-4xl">
            <div className="flex items-center space-x-3 mb-6">
              <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                {post.category.charAt(0).toUpperCase() + post.category.slice(1).replace('-', ' ')}
              </span>
              {post.type === 'video' && (
                <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                  <PlayCircle className="w-3 h-3 mr-1" />
                  Video
                </span>
              )}
              {post.type === 'gallery' && (
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                  <Camera className="w-3 h-3 mr-1" />
                  Gallery
                </span>
              )}
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              {post.excerpt}
            </p>

            {/* Author & Meta */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <img 
                  src={post.authorImage} 
                  alt={post.author}
                  className="w-12 h-12 rounded-full border-2 border-white/20"
                />
                <div>
                  <p className="font-semibold text-white">{post.author}</p>
                  <div className="flex items-center space-x-4 text-white/70 text-sm">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye className="w-4 h-4" />
                      <span>{post.views} views</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setIsLiked(!isLiked)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                    isLiked 
                      ? 'bg-red-600 text-white' 
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
                  <span>{post.likes + (isLiked ? 1 : 0)}</span>
                </button>
                
                <button
                  onClick={() => setIsBookmarked(!isBookmarked)}
                  className={`p-2 rounded-lg transition-all ${
                    isBookmarked 
                      ? 'bg-purple-600 text-white' 
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
                </button>
                
                <button className="p-2 bg-white/10 text-white hover:bg-white/20 rounded-lg transition-all">
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Article Content */}
            <div className="lg:col-span-2">
              {/* Featured Image/Video */}
              <div className="relative mb-8">
                {post.type === 'video' ? (
                  <div className="relative bg-black rounded-2xl overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-96 object-cover opacity-70"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                        <PlayCircle className="w-10 h-10 text-red-600" />
                      </button>
                    </div>
                  </div>
                ) : post.type === 'gallery' ? (
                  <div className="space-y-4">
                    <div className="relative">
                      <img 
                        src={post.gallery[selectedImage]} 
                        alt={post.title}
                        className="w-full h-96 object-cover rounded-2xl"
                      />
                      <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                        {selectedImage + 1} / {post.gallery.length}
                      </div>
                    </div>
                    <div className="flex space-x-2 overflow-x-auto">
                      {post.gallery.map((image, index) => (
                        <button
                          key={index}
                          onClick={() => setSelectedImage(index)}
                          className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                            selectedImage === index 
                              ? 'border-purple-500' 
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <img 
                            src={image} 
                            alt={`${post.title} ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-96 object-cover rounded-2xl"
                  />
                )}
              </div>

              {/* Article Body */}
              <div className="prose prose-lg max-w-none">
                <div 
                  dangerouslySetInnerHTML={{ __html: post.content }}
                  className="text-gray-700 leading-relaxed"
                />
              </div>

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm flex items-center space-x-1"
                    >
                      <Tag className="w-3 h-3" />
                      <span>{tag}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Author Bio */}
              <div className="mt-8 p-6 bg-white rounded-2xl border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">About the Author</h3>
                <div className="flex items-start space-x-4">
                  <img 
                    src={post.authorImage} 
                    alt={post.author}
                    className="w-16 h-16 rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">{post.author}</h4>
                    <p className="text-gray-600">{post.authorBio}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Share */}
              <div className="bg-white p-6 rounded-2xl border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-4">Share this article</h3>
                <div className="space-y-3">
                  <button className="w-full flex items-center space-x-3 p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    <Share2 className="w-4 h-4" />
                    <span>Share on Facebook</span>
                  </button>
                  <button className="w-full flex items-center space-x-3 p-3 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition-colors">
                    <Share2 className="w-4 h-4" />
                    <span>Share on Twitter</span>
                  </button>
                  <button className="w-full flex items-center space-x-3 p-3 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-colors">
                    <Share2 className="w-4 h-4" />
                    <span>Copy Link</span>
                  </button>
                </div>
              </div>

              {/* Related Posts */}
              <div className="bg-white p-6 rounded-2xl border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-4">Related Articles</h3>
                <div className="space-y-4">
                  {relatedPosts.map((relatedPost) => (
                    <Link
                      key={relatedPost.id}
                      href={`/blog/${relatedPost.id}`}
                      className="block group"
                    >
                      <div className="flex space-x-3">
                        <img 
                          src={relatedPost.image} 
                          alt={relatedPost.title}
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900 group-hover:text-purple-600 transition-colors text-sm leading-tight mb-2">
                            {relatedPost.title}
                          </h4>
                          <div className="text-xs text-gray-500">
                            {new Date(relatedPost.date).toLocaleDateString()} • {relatedPost.readTime}
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-6 rounded-2xl text-white">
                <h3 className="font-semibold mb-3">Ready to Transform Your Skin?</h3>
                <p className="text-purple-100 text-sm mb-4">
                  Book a consultation with our expert team and start your skincare journey today.
                </p>
                <Link 
                  href="/booking"
                  className="block w-full bg-white text-purple-600 text-center py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
                >
                  Book Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Blog */}
      <section className="py-8 bg-white border-t">
        <div className="container mx-auto px-6">
          <Link 
            href="/blog"
            className="inline-flex items-center space-x-2 text-purple-600 hover:text-purple-700 font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Blog</span>
          </Link>
        </div>
      </section>
    </div>
  )
} 