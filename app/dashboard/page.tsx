'use client'

import { useState, useEffect } from 'react'
import Navigation from '../../components/Navigation'
import { 
  UserIcon, 
  CalendarIcon, 
  ClockIcon, 
  StarIcon, 
  CurrencyDollarIcon,
  BellIcon,
  CameraIcon,
  DocumentTextIcon,
  HeartIcon,
  GiftIcon,
  SparklesIcon,
  ChatBubbleLeftRightIcon,
  UserGroupIcon,
  TrophyIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  CpuChipIcon,
  PhotoIcon,
  VideoCameraIcon,
  MegaphoneIcon,
  AcademicCapIcon,
  BeakerIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  ArrowRightIcon,
  PlusIcon,
  EyeIcon,
  HandThumbUpIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline'

interface Treatment {
  id: string
  name: string
  date: string
  practitioner: string
  status: 'completed' | 'scheduled' | 'cancelled'
  results?: string
  photos?: string[]
  notes?: string
  rating?: number
  price: number
}

interface VIPBenefit {
  title: string
  description: string
  icon: any
  unlocked: boolean
  value?: string
}

interface Recommendation {
  id: string
  type: 'treatment' | 'product' | 'lifestyle'
  title: string
  description: string
  confidence: number
  estimatedValue?: string
  urgency: 'high' | 'medium' | 'low'
  aiReason: string
}

interface CommunityPost {
  id: string
  author: string
  avatar: string
  content: string
  image?: string
  likes: number
  comments: number
  timeAgo: string
  isVip: boolean
}

export default function CustomerPortalPage() {
  const [activeTab, setActiveTab] = useState('overview')
  const [customerData, setCustomerData] = useState({
    name: 'Sarah Johnson',
    email: 'sarah.johnson@email.com',
    phone: '+1 (555) 123-4567',
    memberSince: '2022-03-15',
    vipLevel: 'Platinum',
    totalSpent: 12450,
    appointmentsCompleted: 23,
    loyaltyPoints: 3420,
    nextAppointment: '2024-01-25 14:00',
    profilePhoto: '/api/placeholder/100/100'
  })

  const [treatments, setTreatments] = useState<Treatment[]>([
    {
      id: '1',
      name: 'Botox Premium Treatment',
      date: '2024-01-15',
      practitioner: 'Dr. Sarah Smith',
      status: 'completed',
      results: 'Excellent results, visible improvement in fine lines',
      rating: 5,
      price: 420
    },
    {
      id: '2',
      name: 'Juvederm Luxury Enhancement',
      date: '2024-01-25',
      practitioner: 'Dr. Michael Jones',
      status: 'scheduled',
      price: 580
    },
    {
      id: '3',
      name: 'HydraFacial Deluxe',
      date: '2023-12-10',
      practitioner: 'Dr. Emily Brown',
      status: 'completed',
      results: 'Skin texture significantly improved, glowing complexion',
      rating: 5,
      price: 350
    }
  ])

  const [aiRecommendations, setAiRecommendations] = useState<Recommendation[]>([
    {
      id: '1',
      type: 'treatment',
      title: 'Vitamin C Infusion Treatment',
      description: 'Based on your skin analysis and previous treatments, this would enhance your current results.',
      confidence: 94,
      estimatedValue: '$280',
      urgency: 'medium',
      aiReason: 'Optimal timing based on your last Botox treatment and skin type analysis'
    },
    {
      id: '2',
      type: 'product',
      title: 'Premium Retinol Night Serum',
      description: 'AI analysis suggests this product will complement your recent treatments perfectly.',
      confidence: 89,
      estimatedValue: '$135',
      urgency: 'low',
      aiReason: 'Your skin responds well to active ingredients based on treatment history'
    },
    {
      id: '3',
      type: 'lifestyle',
      title: 'Hydration Optimization Plan',
      description: 'Personalized hydration schedule to maximize treatment effectiveness.',
      confidence: 96,
      urgency: 'high',
      aiReason: 'Critical for maintaining Juvederm results and overall skin health'
    }
  ])

  const [communityPosts, setCommunityPosts] = useState<CommunityPost[]>([
    {
      id: '1',
      author: 'Emma Wilson',
      avatar: '/api/placeholder/40/40',
      content: 'Just had my first Botox treatment with Dr. Smith! The results are amazing and the whole experience was so comfortable. Highly recommend! ✨',
      image: '/api/placeholder/300/200',
      likes: 24,
      comments: 8,
      timeAgo: '2 hours ago',
      isVip: true
    },
    {
      id: '2',
      author: 'Jessica Chen',
      avatar: '/api/placeholder/40/40',
      content: 'The VIP lounge experience is incredible! The personalized consultation and aftercare made all the difference. Thank you LA Skin team! 💎',
      likes: 31,
      comments: 12,
      timeAgo: '5 hours ago',
      isVip: true
    },
    {
      id: '3',
      author: 'Maria Rodriguez',
      avatar: '/api/placeholder/40/40',
      content: 'One month after my Juvederm treatment and I\'m still glowing! The natural results exceeded my expectations. Already booking my next appointment! 🌟',
      likes: 18,
      comments: 6,
      timeAgo: '1 day ago',
      isVip: false
    }
  ])

  const vipBenefits: VIPBenefit[] = [
    {
      title: 'Priority Booking',
      description: 'Skip the waitlist and get first access to premium time slots',
      icon: CalendarIcon,
      unlocked: true,
      value: 'Active'
    },
    {
      title: 'Private VIP Suite',
      description: 'Exclusive treatment rooms with luxury amenities',
      icon: SparklesIcon,
      unlocked: true,
      value: 'Suite A'
    },
    {
      title: 'Personal Concierge',
      description: '24/7 dedicated support for all your beauty needs',
      icon: UserIcon,
      unlocked: true,
      value: 'Maria S.'
    },
    {
      title: 'Complimentary Products',
      description: 'Monthly selection of premium skincare products',
      icon: GiftIcon,
      unlocked: true,
      value: '$200/month'
    },
    {
      title: 'AI Beauty Advisor',
      description: 'Personalized AI-powered skincare and treatment recommendations',
      icon: CpuChipIcon,
      unlocked: true,
      value: 'Active'
    },
    {
      title: 'Exclusive Events',
      description: 'VIP-only beauty workshops and product launches',
      icon: TrophyIcon,
      unlocked: true,
      value: 'Next: Jan 30'
    }
  ]

  const renderOverview = () => (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="minimal-card p-8 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="flex items-center space-x-6">
          <div className="relative">
            <img 
              src={customerData.profilePhoto} 
              alt="Profile" 
              className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
            />
            <div className="absolute -bottom-2 -right-2 bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center">
              <SparklesIcon className="h-4 w-4" />
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-light text-gray-900 mb-2">
              Welcome back, {customerData.name}! ✨
            </h2>
            <p className="text-gray-600 mb-4">
              {customerData.vipLevel} Member since {new Date(customerData.memberSince).toLocaleDateString()}
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <CurrencyDollarIcon className="h-4 w-4 text-green-600" />
                <span>${customerData.totalSpent.toLocaleString()} lifetime value</span>
              </div>
              <div className="flex items-center space-x-2">
                <CalendarIcon className="h-4 w-4 text-blue-600" />
                <span>{customerData.appointmentsCompleted} treatments completed</span>
              </div>
              <div className="flex items-center space-x-2">
                <StarIcon className="h-4 w-4 text-yellow-600" />
                <span>{customerData.loyaltyPoints} loyalty points</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="minimal-card p-6 text-center">
          <CalendarIcon className="h-8 w-8 text-blue-600 mx-auto mb-3" />
          <div className="text-2xl font-light text-gray-900 mb-1">Next Appointment</div>
          <div className="text-sm text-gray-600">Jan 25, 2:00 PM</div>
        </div>
        
        <div className="minimal-card p-6 text-center">
          <StarIcon className="h-8 w-8 text-yellow-600 mx-auto mb-3" />
          <div className="text-2xl font-light text-gray-900 mb-1">Loyalty Points</div>
          <div className="text-sm text-gray-600">{customerData.loyaltyPoints} points</div>
        </div>
        
        <div className="minimal-card p-6 text-center">
          <TrophyIcon className="h-8 w-8 text-purple-600 mx-auto mb-3" />
          <div className="text-2xl font-light text-gray-900 mb-1">VIP Level</div>
          <div className="text-sm text-gray-600">{customerData.vipLevel}</div>
        </div>
        
        <div className="minimal-card p-6 text-center">
          <HeartIcon className="h-8 w-8 text-rose-600 mx-auto mb-3" />
          <div className="text-2xl font-light text-gray-900 mb-1">Satisfaction</div>
          <div className="text-sm text-gray-600">4.9/5 average</div>
        </div>
      </div>

      {/* AI Recommendations */}
      <div className="minimal-card p-6">
        <h3 className="text-2xl font-light text-gray-900 mb-6 flex items-center">
          <CpuChipIcon className="h-6 w-6 mr-3 text-purple-600" />
          AI-Powered Recommendations for You
        </h3>
        
        <div className="space-y-4">
          {aiRecommendations.map((rec) => (
            <div key={rec.id} className="p-4 border border-gray-200 rounded-2xl hover:shadow-md transition-all">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-xl ${
                    rec.type === 'treatment' ? 'bg-blue-100 text-blue-600' :
                    rec.type === 'product' ? 'bg-green-100 text-green-600' :
                    'bg-purple-100 text-purple-600'
                  }`}>
                    {rec.type === 'treatment' ? <BeakerIcon className="h-4 w-4" /> :
                     rec.type === 'product' ? <GiftIcon className="h-4 w-4" /> :
                     <LightBulbIcon className="h-4 w-4" />}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{rec.title}</h4>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        rec.urgency === 'high' ? 'bg-red-100 text-red-800' :
                        rec.urgency === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {rec.urgency.toUpperCase()} PRIORITY
                      </span>
                      <span className="text-xs text-gray-500">{rec.confidence}% AI confidence</span>
                    </div>
                  </div>
                </div>
                {rec.estimatedValue && (
                  <div className="text-right">
                    <div className="text-lg font-light text-gray-900">{rec.estimatedValue}</div>
                    <div className="text-xs text-gray-500">Estimated value</div>
                  </div>
                )}
              </div>
              
              <p className="text-gray-700 text-sm mb-3">{rec.description}</p>
              
              <div className="flex items-center justify-between">
                <div className="text-xs text-gray-500 italic">
                  AI Insight: {rec.aiReason}
                </div>
                <button className="btn-minimal text-sm">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="minimal-card p-6">
        <h3 className="text-2xl font-light text-gray-900 mb-6">Recent Activity</h3>
        
        <div className="space-y-4">
          <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-xl">
            <CheckCircleIcon className="h-6 w-6 text-green-600" />
            <div className="flex-1">
              <div className="font-medium text-gray-900">Treatment Completed</div>
              <div className="text-sm text-gray-600">Botox Premium Treatment - Excellent results!</div>
            </div>
            <div className="text-sm text-gray-500">Jan 15</div>
          </div>
          
          <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-xl">
            <CalendarIcon className="h-6 w-6 text-blue-600" />
            <div className="flex-1">
              <div className="font-medium text-gray-900">Appointment Scheduled</div>
              <div className="text-sm text-gray-600">Juvederm Luxury Enhancement with Dr. Jones</div>
            </div>
            <div className="text-sm text-gray-500">Jan 25</div>
          </div>
          
          <div className="flex items-center space-x-4 p-4 bg-purple-50 rounded-xl">
            <GiftIcon className="h-6 w-6 text-purple-600" />
            <div className="flex-1">
              <div className="font-medium text-gray-900">VIP Benefits Activated</div>
              <div className="text-sm text-gray-600">Monthly product selection delivered</div>
            </div>
            <div className="text-sm text-gray-500">Jan 1</div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderTreatments = () => (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-light text-gray-900">Treatment History</h2>
        <button className="btn-minimal flex items-center space-x-2">
          <PlusIcon className="h-4 w-4" />
          <span>Book New Treatment</span>
        </button>
      </div>

      <div className="space-y-6">
        {treatments.map((treatment) => (
          <div key={treatment.id} className="minimal-card p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-4">
                <div className={`p-3 rounded-2xl ${
                  treatment.status === 'completed' ? 'bg-green-100 text-green-600' :
                  treatment.status === 'scheduled' ? 'bg-blue-100 text-blue-600' :
                  'bg-gray-100 text-gray-600'
                }`}>
                  {treatment.status === 'completed' ? <CheckCircleIcon className="h-6 w-6" /> :
                   treatment.status === 'scheduled' ? <CalendarIcon className="h-6 w-6" /> :
                   <ExclamationTriangleIcon className="h-6 w-6" />}
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-900">{treatment.name}</h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                    <span>Dr. {treatment.practitioner}</span>
                    <span>{new Date(treatment.date).toLocaleDateString()}</span>
                    <span>${treatment.price}</span>
                  </div>
                </div>
              </div>
              
              <div className="text-right">
                <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                  treatment.status === 'completed' ? 'bg-green-100 text-green-800' :
                  treatment.status === 'scheduled' ? 'bg-blue-100 text-blue-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {treatment.status.toUpperCase()}
                </div>
                {treatment.rating && (
                  <div className="flex items-center mt-2">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon 
                        key={i} 
                        className={`h-4 w-4 ${i < treatment.rating! ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
            
            {treatment.results && (
              <div className="p-4 bg-green-50 rounded-xl mb-4">
                <div className="font-medium text-green-900 mb-2">Treatment Results</div>
                <p className="text-green-700 text-sm">{treatment.results}</p>
              </div>
            )}
            
            <div className="flex items-center space-x-4">
              <button className="btn-minimal text-sm flex items-center space-x-2">
                <PhotoIcon className="h-4 w-4" />
                <span>View Photos</span>
              </button>
              <button className="btn-minimal text-sm flex items-center space-x-2">
                <DocumentTextIcon className="h-4 w-4" />
                <span>Download Report</span>
              </button>
              {treatment.status === 'completed' && (
                <button className="btn-minimal text-sm flex items-center space-x-2">
                  <CalendarIcon className="h-4 w-4" />
                  <span>Book Follow-up</span>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  const renderVIPBenefits = () => (
    <div className="space-y-8">
      <div className="text-center">
        <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full mb-4">
          <TrophyIcon className="h-6 w-6" />
          <span className="font-medium">{customerData.vipLevel} Member</span>
        </div>
        <h2 className="text-3xl font-light text-gray-900 mb-2">Your VIP Benefits</h2>
        <p className="text-gray-600">Exclusive perks and privileges for our most valued customers</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {vipBenefits.map((benefit, index) => (
          <div key={index} className="minimal-card p-6 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-2xl ${benefit.unlocked ? 'bg-purple-100 text-purple-600' : 'bg-gray-100 text-gray-400'}`}>
                <benefit.icon className="h-6 w-6" />
              </div>
              {benefit.unlocked ? (
                <CheckCircleIcon className="h-6 w-6 text-green-600" />
              ) : (
                <div className="w-6 h-6 border-2 border-gray-300 rounded-full"></div>
              )}
            </div>
            
            <h3 className="text-lg font-medium text-gray-900 mb-2">{benefit.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{benefit.description}</p>
            
            {benefit.value && benefit.unlocked && (
              <div className="p-3 bg-purple-50 rounded-xl">
                <div className="text-sm font-medium text-purple-900">Current Status</div>
                <div className="text-purple-700">{benefit.value}</div>
              </div>
            )}
            
            {!benefit.unlocked && (
              <button className="btn-minimal text-sm w-full">
                Upgrade to Unlock
              </button>
            )}
          </div>
        ))}
      </div>

      {/* VIP Stats */}
      <div className="minimal-card p-8 bg-gradient-to-r from-purple-50 to-pink-50">
        <h3 className="text-2xl font-light text-gray-900 mb-6 text-center">Your VIP Impact</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-light text-purple-600 mb-2">$2,450</div>
            <div className="text-sm text-gray-600">VIP Savings This Year</div>
          </div>
          
          <div className="text-center">
            <div className="text-3xl font-light text-pink-600 mb-2">15</div>
            <div className="text-sm text-gray-600">Priority Bookings Used</div>
          </div>
          
          <div className="text-center">
            <div className="text-3xl font-light text-indigo-600 mb-2">8</div>
            <div className="text-sm text-gray-600">Exclusive Events Attended</div>
          </div>
          
          <div className="text-center">
            <div className="text-3xl font-light text-emerald-600 mb-2">100%</div>
            <div className="text-sm text-gray-600">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderCommunity = () => (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-light text-gray-900 mb-2">VIP Community</h2>
        <p className="text-gray-600">Connect with fellow beauty enthusiasts and share your journey</p>
      </div>

      {/* Community Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="minimal-card p-6 text-center">
          <UserGroupIcon className="h-8 w-8 text-purple-600 mx-auto mb-3" />
          <div className="text-2xl font-light text-gray-900 mb-1">2,847</div>
          <div className="text-sm text-gray-600">VIP Members</div>
        </div>
        
        <div className="minimal-card p-6 text-center">
          <ChatBubbleLeftRightIcon className="h-8 w-8 text-blue-600 mx-auto mb-3" />
          <div className="text-2xl font-light text-gray-900 mb-1">1,234</div>
          <div className="text-sm text-gray-600">Active Discussions</div>
        </div>
        
        <div className="minimal-card p-6 text-center">
          <PhotoIcon className="h-8 w-8 text-green-600 mx-auto mb-3" />
          <div className="text-2xl font-light text-gray-900 mb-1">5,678</div>
          <div className="text-sm text-gray-600">Shared Photos</div>
        </div>
      </div>

      {/* Create Post */}
      <div className="minimal-card p-6">
        <div className="flex items-center space-x-4 mb-4">
          <img 
            src={customerData.profilePhoto} 
            alt="Your avatar" 
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="flex-1">
            <textarea 
              placeholder="Share your beauty journey with the community..."
              className="w-full p-4 border border-gray-200 rounded-2xl resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
              rows={3}
            />
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2 text-gray-600 hover:text-purple-600">
              <PhotoIcon className="h-5 w-5" />
              <span className="text-sm">Photo</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-600 hover:text-purple-600">
              <VideoCameraIcon className="h-5 w-5" />
              <span className="text-sm">Video</span>
            </button>
          </div>
          
          <button className="btn-minimal bg-purple-600 text-white hover:bg-purple-700">
            Share Post
          </button>
        </div>
      </div>

      {/* Community Posts */}
      <div className="space-y-6">
        {communityPosts.map((post) => (
          <div key={post.id} className="minimal-card p-6">
            <div className="flex items-center space-x-4 mb-4">
              <img 
                src={post.avatar} 
                alt={post.author} 
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <h4 className="font-medium text-gray-900">{post.author}</h4>
                  {post.isVip && (
                    <div className="bg-purple-100 text-purple-600 px-2 py-1 rounded-full text-xs font-medium">
                      VIP
                    </div>
                  )}
                </div>
                <div className="text-sm text-gray-500">{post.timeAgo}</div>
              </div>
            </div>
            
            <p className="text-gray-700 mb-4">{post.content}</p>
            
            {post.image && (
              <img 
                src={post.image} 
                alt="Post content" 
                className="w-full rounded-2xl mb-4 max-h-64 object-cover"
              />
            )}
            
            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <div className="flex items-center space-x-6">
                <button className="flex items-center space-x-2 text-gray-600 hover:text-red-600">
                  <HandThumbUpIcon className="h-5 w-5" />
                  <span className="text-sm">{post.likes}</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600">
                  <ChatBubbleOvalLeftEllipsisIcon className="h-5 w-5" />
                  <span className="text-sm">{post.comments}</span>
                </button>
              </div>
              
              <button className="text-gray-500 hover:text-gray-700">
                <ArrowRightIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  const renderProfile = () => (
    <div className="space-y-8">
      <h2 className="text-3xl font-light text-gray-900">Profile Settings</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Photo */}
        <div className="minimal-card p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Profile Photo</h3>
          <div className="text-center">
            <img 
              src={customerData.profilePhoto} 
              alt="Profile" 
              className="w-32 h-32 rounded-full object-cover mx-auto mb-4 border-4 border-gray-100"
            />
            <button className="btn-minimal flex items-center space-x-2 mx-auto">
              <CameraIcon className="h-4 w-4" />
              <span>Change Photo</span>
            </button>
          </div>
        </div>
        
        {/* Contact Information */}
        <div className="lg:col-span-2 minimal-card p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-6">Contact Information</h3>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
              <div className="relative">
                <UserIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  value={customerData.name}
                  className="input-minimal pl-12"
                  onChange={(e) => setCustomerData(prev => ({ ...prev, name: e.target.value }))}
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <div className="relative">
                <EnvelopeIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="email"
                  value={customerData.email}
                  className="input-minimal pl-12"
                  onChange={(e) => setCustomerData(prev => ({ ...prev, email: e.target.value }))}
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
              <div className="relative">
                <PhoneIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="tel"
                  value={customerData.phone}
                  className="input-minimal pl-12"
                  onChange={(e) => setCustomerData(prev => ({ ...prev, phone: e.target.value }))}
                />
              </div>
            </div>
            
            <button className="btn-minimal bg-black text-white hover:bg-gray-800">
              Save Changes
            </button>
          </div>
        </div>
      </div>
      
      {/* Preferences */}
      <div className="minimal-card p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-6">Preferences & Notifications</h3>
        
        <div className="space-y-6">
          <div>
            <h4 className="font-medium text-gray-900 mb-4">Notification Preferences</h4>
            <div className="space-y-3">
              {[
                'Email reminders for appointments',
                'SMS notifications for confirmations',
                'VIP exclusive offers and events',
                'Treatment follow-up communications',
                'Community activity updates',
                'AI-powered recommendations'
              ].map((pref, index) => (
                <label key={index} className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    defaultChecked={true}
                    className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                  />
                  <span className="text-gray-700">{pref}</span>
                </label>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-900 mb-4">Privacy Settings</h4>
            <div className="space-y-3">
              {[
                'Share treatment results in community (anonymous)',
                'Allow AI analysis of treatment history',
                'Participate in satisfaction surveys',
                'Receive personalized product recommendations'
              ].map((pref, index) => (
                <label key={index} className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    defaultChecked={index < 2}
                    className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                  />
                  <span className="text-gray-700">{pref}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const tabs = [
    { id: 'overview', label: 'Overview', icon: UserIcon },
    { id: 'treatments', label: 'Treatments', icon: BeakerIcon },
    { id: 'vip', label: 'VIP Benefits', icon: TrophyIcon },
    { id: 'community', label: 'Community', icon: UserGroupIcon },
    { id: 'profile', label: 'Profile', icon: UserIcon }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Navigation />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Tab Navigation */}
          <div className="flex flex-wrap items-center justify-center mb-12 space-x-1 bg-gray-100 rounded-2xl p-2 max-w-2xl mx-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <tab.icon className="h-5 w-5" />
                <span className="font-medium">{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {activeTab === 'overview' && renderOverview()}
          {activeTab === 'treatments' && renderTreatments()}
          {activeTab === 'vip' && renderVIPBenefits()}
          {activeTab === 'community' && renderCommunity()}
          {activeTab === 'profile' && renderProfile()}
        </div>
      </div>
    </div>
  )
} 