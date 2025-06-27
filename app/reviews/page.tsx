'use client'

import { useState, useEffect } from 'react'
import Navigation from '../../components/Navigation'
import { 
  StarIcon, 
  ChatBubbleLeftRightIcon,
  UserIcon,
  CalendarIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  HeartIcon,
  EyeIcon,
  HandThumbUpIcon,
  HandThumbDownIcon,
  FlagIcon,
  ShareIcon,
  ChartBarIcon,
  CpuChipIcon,
  LightBulbIcon,
  BoltIcon,
  MegaphoneIcon,
  DocumentTextIcon,
  PhotoIcon,
  VideoCameraIcon,
  PlusIcon,
  FunnelIcon,
  ArrowPathIcon,
  ClockIcon,
  GlobeAltIcon,
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  BuildingOfficeIcon,
  MapPinIcon,
  FireIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'

interface Review {
  id: string
  customerName: string
  customerAvatar: string
  rating: number
  title: string
  content: string
  date: string
  treatment: string
  practitioner: string
  verified: boolean
  helpful: number
  responses: ReviewResponse[]
  sentiment: 'positive' | 'neutral' | 'negative'
  categories: string[]
  aiInsights: string[]
  photos?: string[]
  source: 'website' | 'google' | 'facebook' | 'yelp'
  location: string
  isVip: boolean
}

interface ReviewResponse {
  id: string
  author: string
  role: 'management' | 'practitioner' | 'customer'
  content: string
  date: string
}

interface ReviewAnalytics {
  totalReviews: number
  averageRating: number
  ratingDistribution: { [key: number]: number }
  sentimentBreakdown: { positive: number; neutral: number; negative: number }
  trendingTopics: string[]
  responseRate: number
  responseTime: string
  nps: number
}

interface AIInsight {
  type: 'opportunity' | 'warning' | 'trend' | 'action'
  title: string
  description: string
  confidence: number
  impact: 'high' | 'medium' | 'low'
  actionItems: string[]
}

export default function IntelligentReviewSystemPage() {
  const [activeTab, setActiveTab] = useState('overview')
  const [selectedFilter, setSelectedFilter] = useState('all')
  const [selectedSentiment, setSelectedSentiment] = useState('all')
  const [selectedRating, setSelectedRating] = useState('all')
  const [reviews, setReviews] = useState<Review[]>([])
  const [analytics, setAnalytics] = useState<ReviewAnalytics | null>(null)
  const [aiInsights, setAiInsights] = useState<AIInsight[]>([])
  const [isLoading, setIsLoading] = useState(false)

  // Sample data
  useEffect(() => {
    generateSampleData()
    generateAIInsights()
  }, [])

  const generateSampleData = () => {
    const sampleReviews: Review[] = [
      {
        id: '1',
        customerName: 'Sarah Johnson',
        customerAvatar: '/api/placeholder/50/50',
        rating: 5,
        title: 'Absolutely Amazing Experience!',
        content: 'Dr. Smith was incredible! The Botox treatment exceeded my expectations. The staff was professional, the facility was pristine, and the results are natural-looking. I feel so much more confident now. Will definitely be returning!',
        date: '2024-01-20',
        treatment: 'Botox Premium',
        practitioner: 'Dr. Sarah Smith',
        verified: true,
        helpful: 23,
        responses: [
          {
            id: '1',
            author: 'LA Skin Team',
            role: 'management',
            content: 'Thank you so much for your wonderful review, Sarah! We\'re thrilled that you had such a positive experience with Dr. Smith. Your confidence means everything to us!',
            date: '2024-01-21'
          }
        ],
        sentiment: 'positive',
        categories: ['Service Quality', 'Staff', 'Results', 'Facility'],
        aiInsights: ['High satisfaction with practitioner expertise', 'Positive facility experience', 'Strong likelihood of return visit'],
        photos: ['/api/placeholder/200/150'],
        source: 'website',
        location: 'Beverly Hills',
        isVip: true
      },
      {
        id: '2',
        customerName: 'Michael Chen',
        customerAvatar: '/api/placeholder/50/50',
        rating: 4,
        title: 'Great Results, Minor Wait Time',
        content: 'The Juvederm treatment turned out fantastic. Dr. Jones really knows what he\'s doing. Only complaint was waiting about 20 minutes past my appointment time, but the results made it worth it.',
        date: '2024-01-18',
        treatment: 'Juvederm Luxury',
        practitioner: 'Dr. Michael Jones',
        verified: true,
        helpful: 15,
        responses: [
          {
            id: '2',
            author: 'Dr. Michael Jones',
            role: 'practitioner',
            content: 'Thank you for your feedback, Michael! I apologize for the wait time - we\'re working on improving our scheduling. So glad you\'re happy with the results!',
            date: '2024-01-19'
          }
        ],
        sentiment: 'positive',
        categories: ['Results', 'Wait Time', 'Practitioner Skill'],
        aiInsights: ['Scheduling improvement opportunity', 'High treatment satisfaction', 'Practitioner expertise recognized'],
        source: 'google',
        location: 'Beverly Hills',
        isVip: false
      },
      {
        id: '3',
        customerName: 'Emma Rodriguez',
        customerAvatar: '/api/placeholder/50/50',
        rating: 2,
        title: 'Disappointed with Service',
        content: 'The treatment itself was okay, but the customer service was lacking. The receptionist seemed rushed and didn\'t explain the aftercare properly. Expected more for the price paid.',
        date: '2024-01-15',
        treatment: 'HydraFacial',
        practitioner: 'Jessica Martinez',
        verified: true,
        helpful: 8,
        responses: [
          {
            id: '3',
            author: 'LA Skin Management',
            role: 'management',
            content: 'We sincerely apologize for not meeting your expectations, Emma. We have addressed this with our team and would love the opportunity to make this right. Please contact us directly.',
            date: '2024-01-16'
          }
        ],
        sentiment: 'negative',
        categories: ['Customer Service', 'Communication', 'Value'],
        aiInsights: ['Customer service training needed', 'Communication protocol review required', 'Follow-up opportunity'],
        source: 'yelp',
        location: 'Beverly Hills',
        isVip: false
      },
      {
        id: '4',
        customerName: 'Lisa Thompson',
        customerAvatar: '/api/placeholder/50/50',
        rating: 5,
        title: 'VIP Experience Worth Every Penny',
        content: 'The VIP treatment is absolutely incredible! Private suite, personal attention, and phenomenal results. Dr. Brown is an artist. This is luxury skincare at its finest.',
        date: '2024-01-22',
        treatment: 'Vampire Facial Premium',
        practitioner: 'Dr. Emily Brown',
        verified: true,
        helpful: 31,
        responses: [],
        sentiment: 'positive',
        categories: ['VIP Experience', 'Luxury', 'Results', 'Practitioner Skill'],
        aiInsights: ['VIP service highly valued', 'Premium pricing justified', 'Excellent practitioner performance'],
        photos: ['/api/placeholder/200/150', '/api/placeholder/200/150'],
        source: 'website',
        location: 'Beverly Hills',
        isVip: true
      },
      {
        id: '5',
        customerName: 'David Park',
        customerAvatar: '/api/placeholder/50/50',
        rating: 3,
        title: 'Mixed Experience',
        content: 'Results were good but not great. The staff was friendly enough. Facility is nice but parking was a hassle. Might try somewhere else next time.',
        date: '2024-01-12',
        treatment: 'Latisse Treatment',
        practitioner: 'Dr. James Wilson',
        verified: false,
        helpful: 5,
        responses: [],
        sentiment: 'neutral',
        categories: ['Results', 'Parking', 'Staff'],
        aiInsights: ['Parking solution needed', 'Moderate satisfaction level', 'Risk of customer churn'],
        source: 'facebook',
        location: 'Beverly Hills',
        isVip: false
      }
    ]

    setReviews(sampleReviews)

    // Generate analytics
    const totalReviews = sampleReviews.length
    const averageRating = sampleReviews.reduce((sum, review) => sum + review.rating, 0) / totalReviews
    const ratingDistribution = sampleReviews.reduce((acc, review) => {
      acc[review.rating] = (acc[review.rating] || 0) + 1
      return acc
    }, {} as { [key: number]: number })

    const sentimentBreakdown = sampleReviews.reduce((acc, review) => {
      acc[review.sentiment]++
      return acc
    }, { positive: 0, neutral: 0, negative: 0 })

    setAnalytics({
      totalReviews,
      averageRating,
      ratingDistribution,
      sentimentBreakdown,
      trendingTopics: ['Service Quality', 'Results', 'Staff', 'Wait Time', 'VIP Experience'],
      responseRate: 80,
      responseTime: '4.2 hours',
      nps: 72
    })
  }

  const generateAIInsights = () => {
    const insights: AIInsight[] = [
      {
        type: 'warning',
        title: 'Customer Service Training Needed',
        description: 'AI detected recurring themes about reception staff communication in recent reviews. 3 negative mentions in the past week.',
        confidence: 92,
        impact: 'high',
        actionItems: [
          'Schedule customer service training session',
          'Review communication protocols',
          'Implement greeting standardization',
          'Monitor reception interactions'
        ]
      },
      {
        type: 'opportunity',
        title: 'VIP Experience Driving Premium Value',
        description: 'VIP customers consistently rate experiences 4.8+ stars and mention luxury aspects. Strong ROI indicator for premium services.',
        confidence: 96,
        impact: 'high',
        actionItems: [
          'Expand VIP service offerings',
          'Create VIP upgrade campaigns',
          'Highlight luxury amenities in marketing',
          'Train staff on VIP protocols'
        ]
      },
      {
        type: 'trend',
        title: 'Parking Concerns Emerging',
        description: 'Parking-related complaints increased 40% this month. May impact customer satisfaction and retention.',
        confidence: 87,
        impact: 'medium',
        actionItems: [
          'Explore valet service options',
          'Partner with nearby parking facilities',
          'Provide parking validation',
          'Add parking info to booking confirmations'
        ]
      },
      {
        type: 'action',
        title: 'Response Time Optimization',
        description: 'Reviews with management responses within 24 hours show 34% higher customer retention rates.',
        confidence: 94,
        impact: 'medium',
        actionItems: [
          'Set up review notification system',
          'Create response templates',
          'Assign dedicated response team',
          'Track response time metrics'
        ]
      }
    ]

    setAiInsights(insights)
  }

  const filteredReviews = reviews.filter(review => {
    if (selectedFilter !== 'all' && review.source !== selectedFilter) return false
    if (selectedSentiment !== 'all' && review.sentiment !== selectedSentiment) return false
    if (selectedRating !== 'all' && review.rating.toString() !== selectedRating) return false
    return true
  })

  const renderStars = (rating: number, size: 'sm' | 'md' | 'lg' = 'md') => {
    const sizeClass = size === 'sm' ? 'h-3 w-3' : size === 'lg' ? 'h-6 w-6' : 'h-4 w-4'
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <StarIcon
            key={i}
            className={`${sizeClass} ${
              i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    )
  }

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case 'positive': return 'text-green-600 bg-green-100'
      case 'negative': return 'text-red-600 bg-red-100'
      default: return 'text-yellow-600 bg-yellow-100'
    }
  }

  const getSourceIcon = (source: string) => {
    switch (source) {
      case 'website': return '🌐'
      case 'google': return '🔍'
      case 'facebook': return '📘'
      case 'yelp': return '⭐'
      default: return '📝'
    }
  }

  const renderOverview = () => (
    <div className="space-y-8">
      {/* Analytics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="minimal-card p-6 text-center">
          <StarIcon className="h-8 w-8 text-yellow-600 mx-auto mb-3" />
          <div className="text-3xl font-light text-gray-900 mb-1">
            {analytics?.averageRating.toFixed(1)}
          </div>
          <div className="text-sm text-gray-600">Average Rating</div>
          <div className="mt-2">{renderStars(Math.round(analytics?.averageRating || 0))}</div>
        </div>
        
        <div className="minimal-card p-6 text-center">
          <ChatBubbleLeftRightIcon className="h-8 w-8 text-blue-600 mx-auto mb-3" />
          <div className="text-3xl font-light text-gray-900 mb-1">
            {analytics?.totalReviews}
          </div>
          <div className="text-sm text-gray-600">Total Reviews</div>
          <div className="text-xs text-green-600 mt-1">+12% this month</div>
        </div>
        
        <div className="minimal-card p-6 text-center">
          <CheckCircleIcon className="h-8 w-8 text-green-600 mx-auto mb-3" />
          <div className="text-3xl font-light text-gray-900 mb-1">
            {analytics?.responseRate}%
          </div>
          <div className="text-sm text-gray-600">Response Rate</div>
          <div className="text-xs text-blue-600 mt-1">{analytics?.responseTime} avg</div>
        </div>
        
        <div className="minimal-card p-6 text-center">
          <ArrowTrendingUpIcon className="h-8 w-8 text-purple-600 mx-auto mb-3" />
          <div className="text-3xl font-light text-gray-900 mb-1">
            {analytics?.nps}
          </div>
          <div className="text-sm text-gray-600">Net Promoter Score</div>
          <div className="text-xs text-green-600 mt-1">Excellent</div>
        </div>
      </div>

      {/* Rating Distribution */}
      <div className="minimal-card p-6">
        <h3 className="text-2xl font-light text-gray-900 mb-6">Rating Distribution</h3>
        <div className="space-y-4">
          {[5, 4, 3, 2, 1].map((rating) => {
            const count = analytics?.ratingDistribution[rating] || 0
            const percentage = analytics ? (count / analytics.totalReviews) * 100 : 0
            
            return (
              <div key={rating} className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 w-20">
                  <span className="text-sm font-medium text-gray-700">{rating}</span>
                  <StarIcon className="h-4 w-4 text-yellow-400 fill-current" />
                </div>
                <div className="flex-1 bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-yellow-400 h-3 rounded-full transition-all duration-300"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                <div className="w-12 text-sm text-gray-600 text-right">
                  {count}
                </div>
                <div className="w-12 text-sm text-gray-500 text-right">
                  {percentage.toFixed(0)}%
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Sentiment Analysis */}
      <div className="minimal-card p-6">
        <h3 className="text-2xl font-light text-gray-900 mb-6 flex items-center">
          <CpuChipIcon className="h-6 w-6 mr-3 text-purple-600" />
          AI Sentiment Analysis
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-green-50 rounded-2xl">
            <div className="text-3xl font-light text-green-600 mb-2">
              {analytics?.sentimentBreakdown.positive || 0}
            </div>
            <div className="text-sm font-medium text-green-800 mb-1">Positive</div>
            <div className="text-xs text-green-600">
              {analytics ? ((analytics.sentimentBreakdown.positive / analytics.totalReviews) * 100).toFixed(1) : 0}%
            </div>
          </div>
          
          <div className="text-center p-6 bg-yellow-50 rounded-2xl">
            <div className="text-3xl font-light text-yellow-600 mb-2">
              {analytics?.sentimentBreakdown.neutral || 0}
            </div>
            <div className="text-sm font-medium text-yellow-800 mb-1">Neutral</div>
            <div className="text-xs text-yellow-600">
              {analytics ? ((analytics.sentimentBreakdown.neutral / analytics.totalReviews) * 100).toFixed(1) : 0}%
            </div>
          </div>
          
          <div className="text-center p-6 bg-red-50 rounded-2xl">
            <div className="text-3xl font-light text-red-600 mb-2">
              {analytics?.sentimentBreakdown.negative || 0}
            </div>
            <div className="text-sm font-medium text-red-800 mb-1">Negative</div>
            <div className="text-xs text-red-600">
              {analytics ? ((analytics.sentimentBreakdown.negative / analytics.totalReviews) * 100).toFixed(1) : 0}%
            </div>
          </div>
        </div>
      </div>

      {/* Trending Topics */}
      <div className="minimal-card p-6">
        <h3 className="text-2xl font-light text-gray-900 mb-6">Trending Topics</h3>
        <div className="flex flex-wrap gap-3">
          {analytics?.trendingTopics.map((topic, index) => (
            <div
              key={index}
              className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
            >
              {topic}
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  const renderReviews = () => (
    <div className="space-y-8">
      {/* Filters */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center space-x-4">
          <select
            value={selectedFilter}
            onChange={(e) => setSelectedFilter(e.target.value)}
            className="input-minimal"
          >
            <option value="all">All Sources</option>
            <option value="website">Website</option>
            <option value="google">Google</option>
            <option value="facebook">Facebook</option>
            <option value="yelp">Yelp</option>
          </select>
          
          <select
            value={selectedSentiment}
            onChange={(e) => setSelectedSentiment(e.target.value)}
            className="input-minimal"
          >
            <option value="all">All Sentiments</option>
            <option value="positive">Positive</option>
            <option value="neutral">Neutral</option>
            <option value="negative">Negative</option>
          </select>
          
          <select
            value={selectedRating}
            onChange={(e) => setSelectedRating(e.target.value)}
            className="input-minimal"
          >
            <option value="all">All Ratings</option>
            <option value="5">5 Stars</option>
            <option value="4">4 Stars</option>
            <option value="3">3 Stars</option>
            <option value="2">2 Stars</option>
            <option value="1">1 Star</option>
          </select>
        </div>
        
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setIsLoading(true)}
            disabled={isLoading}
            className="btn-minimal flex items-center space-x-2"
          >
            <ArrowPathIcon className={`h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
            <span>Refresh</span>
          </button>
        </div>
      </div>

      {/* Reviews List */}
      <div className="space-y-6">
        {filteredReviews.map((review) => (
          <div key={review.id} className="minimal-card p-6">
            {/* Review Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-4">
                <img
                  src={review.customerAvatar}
                  alt={review.customerName}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="flex items-center space-x-2">
                    <h4 className="font-medium text-gray-900">{review.customerName}</h4>
                    {review.verified && (
                      <CheckCircleIcon className="h-4 w-4 text-green-600" />
                    )}
                    {review.isVip && (
                      <span className="px-2 py-1 bg-purple-100 text-purple-600 text-xs rounded-full font-medium">
                        VIP
                      </span>
                    )}
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                    <span>{new Date(review.date).toLocaleDateString()}</span>
                    <span>{review.treatment}</span>
                    <span>Dr. {review.practitioner}</span>
                  </div>
                </div>
              </div>
              
              <div className="text-right">
                <div className="flex items-center space-x-2 mb-2">
                  {renderStars(review.rating)}
                  <span className="text-sm text-gray-600">({review.rating}/5)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-lg">{getSourceIcon(review.source)}</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSentimentColor(review.sentiment)}`}>
                    {review.sentiment}
                  </span>
                </div>
              </div>
            </div>

            {/* Review Content */}
            <div className="mb-4">
              <h5 className="font-medium text-gray-900 mb-2">{review.title}</h5>
              <p className="text-gray-700 leading-relaxed">{review.content}</p>
            </div>

            {/* Review Photos */}
            {review.photos && review.photos.length > 0 && (
              <div className="flex space-x-3 mb-4">
                {review.photos.map((photo, index) => (
                  <img
                    key={index}
                    src={photo}
                    alt={`Review photo ${index + 1}`}
                    className="w-20 h-20 rounded-xl object-cover"
                  />
                ))}
              </div>
            )}

            {/* AI Insights */}
            {review.aiInsights.length > 0 && (
              <div className="mb-4 p-4 bg-blue-50 rounded-xl">
                <div className="flex items-center space-x-2 mb-2">
                  <CpuChipIcon className="h-4 w-4 text-blue-600" />
                  <span className="text-sm font-medium text-blue-900">AI Insights</span>
                </div>
                <div className="space-y-1">
                  {review.aiInsights.map((insight, index) => (
                    <div key={index} className="text-sm text-blue-700">
                      • {insight}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Categories */}
            <div className="flex flex-wrap gap-2 mb-4">
              {review.categories.map((category, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs"
                >
                  {category}
                </span>
              ))}
            </div>

            {/* Review Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-2 text-gray-600 hover:text-green-600">
                  <HandThumbUpIcon className="h-4 w-4" />
                  <span className="text-sm">{review.helpful} helpful</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600">
                  <ShareIcon className="h-4 w-4" />
                  <span className="text-sm">Share</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-600 hover:text-red-600">
                  <FlagIcon className="h-4 w-4" />
                  <span className="text-sm">Report</span>
                </button>
              </div>
              
              {review.responses.length === 0 && (
                <button className="btn-minimal text-sm">
                  Respond
                </button>
              )}
            </div>

            {/* Responses */}
            {review.responses.length > 0 && (
              <div className="mt-6 space-y-4">
                {review.responses.map((response) => (
                  <div key={response.id} className="pl-6 border-l-2 border-blue-200">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="font-medium text-gray-900">{response.author}</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        response.role === 'management' ? 'bg-blue-100 text-blue-800' :
                        response.role === 'practitioner' ? 'bg-green-100 text-green-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {response.role}
                      </span>
                      <span className="text-xs text-gray-500">
                        {new Date(response.date).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="text-gray-700 text-sm">{response.content}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )

  const renderAIInsights = () => (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-light text-gray-900 mb-2">AI-Powered Review Insights</h2>
        <p className="text-gray-600">Intelligent analysis and actionable recommendations</p>
      </div>

      <div className="space-y-6">
        {aiInsights.map((insight, index) => (
          <div key={index} className="minimal-card p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className={`p-3 rounded-2xl ${
                  insight.type === 'opportunity' ? 'bg-green-100 text-green-600' :
                  insight.type === 'warning' ? 'bg-red-100 text-red-600' :
                  insight.type === 'trend' ? 'bg-blue-100 text-blue-600' :
                  'bg-purple-100 text-purple-600'
                }`}>
                  {insight.type === 'opportunity' ? <LightBulbIcon className="h-6 w-6" /> :
                   insight.type === 'warning' ? <ExclamationTriangleIcon className="h-6 w-6" /> :
                   insight.type === 'trend' ? <ArrowTrendingUpIcon className="h-6 w-6" /> :
                   <BoltIcon className="h-6 w-6" />}
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-900">{insight.title}</h3>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      insight.impact === 'high' ? 'bg-red-100 text-red-800' :
                      insight.impact === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {insight.impact.toUpperCase()} IMPACT
                    </span>
                    <span className="text-xs text-gray-500">
                      {insight.confidence}% confidence
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            <p className="text-gray-700 mb-6">{insight.description}</p>
            
            <div className="space-y-3">
              <h4 className="font-medium text-gray-900">Recommended Actions:</h4>
              {insight.actionItems.map((action, actionIndex) => (
                <div key={actionIndex} className="flex items-center space-x-3">
                  <CheckCircleIcon className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{action}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-6 flex space-x-3">
              <button className="btn-minimal bg-black text-white hover:bg-gray-800">
                Implement Actions
              </button>
              <button className="btn-minimal">
                Mark as Reviewed
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  const renderManagement = () => (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-light text-gray-900 mb-2">Review Management Tools</h2>
        <p className="text-gray-600">Streamline your review response and reputation management</p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="minimal-card p-6 text-center">
          <MegaphoneIcon className="h-8 w-8 text-blue-600 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Request Reviews</h3>
          <p className="text-gray-600 text-sm mb-4">Send automated review requests to recent customers</p>
          <button className="btn-minimal w-full">
            Launch Campaign
          </button>
        </div>
        
        <div className="minimal-card p-6 text-center">
          <DocumentTextIcon className="h-8 w-8 text-green-600 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Response Templates</h3>
          <p className="text-gray-600 text-sm mb-4">Create and manage professional response templates</p>
          <button className="btn-minimal w-full">
            Manage Templates
          </button>
        </div>
        
        <div className="minimal-card p-6 text-center">
          <ChartBarIcon className="h-8 w-8 text-purple-600 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Analytics Report</h3>
          <p className="text-gray-600 text-sm mb-4">Generate comprehensive review analytics reports</p>
          <button className="btn-minimal w-full">
            Generate Report
          </button>
        </div>
      </div>

      {/* Response Templates */}
      <div className="minimal-card p-6">
        <h3 className="text-2xl font-light text-gray-900 mb-6">Response Templates</h3>
        
        <div className="space-y-4">
          {[
            {
              name: 'Positive Review Response',
              content: 'Thank you so much for your wonderful review! We\'re thrilled that you had such a positive experience with our team. Your satisfaction means everything to us, and we look forward to seeing you again soon!',
              usage: 'Used 23 times'
            },
            {
              name: 'Negative Review Response',
              content: 'We sincerely apologize for not meeting your expectations. Your feedback is valuable to us, and we\'d love the opportunity to make this right. Please contact us directly so we can address your concerns.',
              usage: 'Used 8 times'
            },
            {
              name: 'Neutral Review Response',
              content: 'Thank you for taking the time to share your feedback. We appreciate your input and are always looking for ways to improve our service. We hope to see you again soon!',
              usage: 'Used 12 times'
            }
          ].map((template, index) => (
            <div key={index} className="p-4 border border-gray-200 rounded-2xl">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-medium text-gray-900">{template.name}</h4>
                <div className="flex items-center space-x-2">
                  <span className="text-xs text-gray-500">{template.usage}</span>
                  <button className="text-blue-600 hover:text-blue-700 text-sm">Edit</button>
                </div>
              </div>
              <p className="text-gray-700 text-sm">{template.content}</p>
            </div>
          ))}
        </div>
        
        <button className="btn-minimal mt-6 flex items-center space-x-2">
          <PlusIcon className="h-4 w-4" />
          <span>Add New Template</span>
        </button>
      </div>

      {/* Review Monitoring */}
      <div className="minimal-card p-6">
        <h3 className="text-2xl font-light text-gray-900 mb-6">Review Monitoring</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-gray-900 mb-4">Platform Monitoring</h4>
            <div className="space-y-3">
              {[
                { platform: 'Google Reviews', status: 'Active', lastCheck: '2 min ago' },
                { platform: 'Yelp', status: 'Active', lastCheck: '5 min ago' },
                { platform: 'Facebook', status: 'Active', lastCheck: '3 min ago' },
                { platform: 'Website Reviews', status: 'Active', lastCheck: '1 min ago' }
              ].map((monitor, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="font-medium text-gray-900">{monitor.platform}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-green-600">{monitor.status}</div>
                    <div className="text-xs text-gray-500">{monitor.lastCheck}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-900 mb-4">Alert Settings</h4>
            <div className="space-y-3">
              {[
                'New review notification',
                'Negative review alert',
                'Response reminder',
                'Weekly summary report'
              ].map((alert, index) => (
                <label key={index} className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    defaultChecked={true}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-gray-700">{alert}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const tabs = [
    { id: 'overview', label: 'Overview', icon: ChartBarIcon },
    { id: 'reviews', label: 'Reviews', icon: ChatBubbleLeftRightIcon },
    { id: 'insights', label: 'AI Insights', icon: CpuChipIcon },
    { id: 'management', label: 'Management', icon: DocumentTextIcon }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Navigation />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <StarIcon className="h-8 w-8 text-yellow-500 mr-3" />
              <h1 className="text-4xl font-light text-black">Intelligent Review System</h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AI-powered review management with sentiment analysis, automated responses, and reputation insights
            </p>
          </div>

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
          {activeTab === 'reviews' && renderReviews()}
          {activeTab === 'insights' && renderAIInsights()}
          {activeTab === 'management' && renderManagement()}
        </div>
      </div>
    </div>
  )
} 