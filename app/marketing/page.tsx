'use client'

import React, { useState, useEffect } from 'react'
import Navigation from '../../components/Navigation'
import { 
  SparklesIcon,
  PhotoIcon,
  VideoCameraIcon,
  DocumentTextIcon,
  ShareIcon,
  ChartBarIcon,
  PlusIcon,
  PlayIcon,
  EyeIcon,
  ArrowDownTrayIcon,
  AdjustmentsHorizontalIcon,
  LightBulbIcon,
  RocketLaunchIcon,
  CameraIcon,
  FilmIcon,
  PencilSquareIcon,
  ChatBubbleLeftRightIcon,
  HashtagIcon,
  CalendarDaysIcon,
  ClockIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  ArrowTrendingUpIcon,
  UsersIcon,
  CurrencyDollarIcon,
  GlobeAltIcon,
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  MegaphoneIcon,
  BoltIcon,
  FireIcon,
  StarIcon,
  HeartIcon,
  ChatBubbleLeftIcon,
  UserGroupIcon,
  TrophyIcon,
  BeakerIcon,
  PaintBrushIcon,
  CommandLineIcon,
  CpuChipIcon,
  CloudArrowUpIcon,
  ClipboardDocumentListIcon,
  ChevronDownIcon,
  MicrophoneIcon
  } from '@heroicons/react/24/outline'

export default function AIMarketingHub() {
  const [activeTab, setActiveTab] = useState('ai-creator')
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedContent, setGeneratedContent] = useState<any>(null)
  const [selectedTemplate, setSelectedTemplate] = useState('instagram-post')
  const [activeCategory, setActiveCategory] = useState('Meta Platforms')
  const [contentPrompt, setContentPrompt] = useState('')
  const [selectedTone, setSelectedTone] = useState('luxurious')
  const [selectedLanguage, setSelectedLanguage] = useState('english')
  const [publishSchedule, setPublishSchedule] = useState([])
  const [aiProgress, setAiProgress] = useState(0)

  // KI Content Templates - Gruppiert nach Kanälen
  const contentTemplateGroups = {
    'Meta Platforms': {
      icon: ShareIcon,
      color: 'from-blue-500 to-purple-500',
      templates: [
        { 
          id: 'instagram-post', 
          name: 'Instagram Post', 
          icon: PhotoIcon, 
          description: 'Square image with AI text',
          dimensions: '1080x1080',
          color: 'from-pink-500 to-rose-500'
        },
        { 
          id: 'instagram-story', 
          name: 'Instagram Story', 
          icon: DevicePhoneMobileIcon, 
          description: 'Vertical story format',
          dimensions: '1080x1920',
          color: 'from-purple-500 to-indigo-500'
        },
        { 
          id: 'instagram-reel', 
          name: 'Instagram Reel', 
          icon: VideoCameraIcon, 
          description: 'AI video with music',
          dimensions: '1080x1920',
          color: 'from-blue-500 to-cyan-500'
        },
        { 
          id: 'facebook-post', 
          name: 'Facebook Post', 
          icon: ShareIcon, 
          description: 'Facebook timeline post',
          dimensions: '1200x630',
          color: 'from-blue-600 to-indigo-600'
        },
        { 
          id: 'facebook-story', 
          name: 'Facebook Story', 
          icon: DevicePhoneMobileIcon, 
          description: 'Facebook story format',
          dimensions: '1080x1920',
          color: 'from-blue-500 to-purple-500'
        },
        { 
          id: 'whatsapp-status', 
          name: 'WhatsApp Status', 
          icon: ChatBubbleLeftRightIcon, 
          description: 'WhatsApp status update',
          dimensions: '1080x1920',
          color: 'from-green-600 to-emerald-600'
        },
        { 
          id: 'threads-post', 
          name: 'Threads Post', 
          icon: ChatBubbleLeftIcon, 
          description: 'Meta Threads content',
          dimensions: '1080x1080',
          color: 'from-gray-900 to-black'
        }
      ]
    },
    'Google/YouTube': {
      icon: PlayIcon,
      color: 'from-red-500 to-orange-500',
      templates: [
        { 
          id: 'youtube-thumbnail', 
          name: 'YouTube Thumbnail', 
          icon: PlayIcon, 
          description: 'Click-worthy thumbnail',
          dimensions: '1280x720',
          color: 'from-red-500 to-orange-500'
        },
        { 
          id: 'youtube-short', 
          name: 'YouTube Short', 
          icon: FilmIcon, 
          description: 'Vertical YouTube content',
          dimensions: '1080x1920',
          color: 'from-red-600 to-pink-600'
        }
      ]
    },
    'Professional': {
      icon: DocumentTextIcon,
      color: 'from-blue-700 to-cyan-600',
      templates: [
        { 
          id: 'linkedin-post', 
          name: 'LinkedIn Post', 
          icon: DocumentTextIcon, 
          description: 'Professional LinkedIn content',
          dimensions: '1200x627',
          color: 'from-blue-700 to-cyan-600'
        },
        { 
          id: 'linkedin-carousel', 
          name: 'LinkedIn Carousel', 
          icon: PhotoIcon, 
          description: 'Multi-slide LinkedIn post',
          dimensions: '1080x1080',
          color: 'from-blue-800 to-blue-600'
        }
      ]
    },
    'Short-Form Video': {
      icon: FilmIcon,
      color: 'from-green-500 to-emerald-500',
      templates: [
        { 
          id: 'tiktok-video', 
          name: 'TikTok Video', 
          icon: FilmIcon, 
          description: 'Viral TikTok video',
          dimensions: '1080x1920',
          color: 'from-green-500 to-emerald-500'
        },
        { 
          id: 'snapchat-ad', 
          name: 'Snapchat Ad', 
          icon: CameraIcon, 
          description: 'Snapchat advertising content',
          dimensions: '1080x1920',
          color: 'from-yellow-400 to-yellow-600'
        },
        { 
          id: 'bereal-post', 
          name: 'BeReal Post', 
          icon: CameraIcon, 
          description: 'Authentic BeReal format',
          dimensions: '1080x1920',
          color: 'from-gray-700 to-gray-900'
        }
      ]
    },
    'Visual Discovery': {
      icon: PhotoIcon,
      color: 'from-red-500 to-rose-500',
      templates: [
        { 
          id: 'pinterest-pin', 
          name: 'Pinterest Pin', 
          icon: PhotoIcon, 
          description: 'Vertical Pinterest pin',
          dimensions: '735x1102',
          color: 'from-red-500 to-rose-500'
        },
        { 
          id: 'pinterest-story', 
          name: 'Pinterest Story', 
          icon: DevicePhoneMobileIcon, 
          description: 'Pinterest story pin',
          dimensions: '1080x1920',
          color: 'from-red-600 to-pink-500'
        }
      ]
    },
    'Social & Community': {
      icon: ChatBubbleLeftIcon,
      color: 'from-gray-800 to-black',
      templates: [
        { 
          id: 'twitter-post', 
          name: 'Twitter/X Post', 
          icon: ChatBubbleLeftIcon, 
          description: 'Tweet with image',
          dimensions: '1024x512',
          color: 'from-gray-800 to-black'
        },
        { 
          id: 'reddit-post', 
          name: 'Reddit Post', 
          icon: ChatBubbleLeftIcon, 
          description: 'Reddit community post',
          dimensions: '1200x600',
          color: 'from-orange-500 to-red-500'
        },
        { 
          id: 'mastodon-post', 
          name: 'Mastodon Post', 
          icon: GlobeAltIcon, 
          description: 'Mastodon social post',
          dimensions: '1024x512',
          color: 'from-blue-600 to-purple-600'
        }
      ]
    },
    'Messaging & Chat': {
      icon: ChatBubbleLeftIcon,
      color: 'from-blue-500 to-sky-500',
      templates: [
        { 
          id: 'telegram-post', 
          name: 'Telegram Post', 
          icon: ChatBubbleLeftIcon, 
          description: 'Telegram channel post',
          dimensions: '1280x720',
          color: 'from-blue-500 to-sky-500'
        },
        { 
          id: 'discord-banner', 
          name: 'Discord Banner', 
          icon: ComputerDesktopIcon, 
          description: 'Discord server banner',
          dimensions: '960x540',
          color: 'from-indigo-600 to-purple-600'
        }
      ]
    },
    'Live & Audio': {
      icon: MicrophoneIcon,
      color: 'from-purple-600 to-indigo-600',
      templates: [
        { 
          id: 'twitch-overlay', 
          name: 'Twitch Overlay', 
          icon: VideoCameraIcon, 
          description: 'Twitch stream overlay',
          dimensions: '1920x1080',
          color: 'from-purple-600 to-indigo-600'
        },
        { 
          id: 'clubhouse-cover', 
          name: 'Clubhouse Room', 
          icon: MicrophoneIcon, 
          description: 'Clubhouse room cover',
          dimensions: '1080x1080',
          color: 'from-green-400 to-teal-500'
        }
      ]
    },
    'Web & Landing': {
      icon: ComputerDesktopIcon,
      color: 'from-yellow-500 to-amber-500',
      templates: [
        { 
          id: 'landing-page', 
          name: 'Landing Page', 
          icon: ComputerDesktopIcon, 
          description: 'Complete AI landing page',
          dimensions: 'Responsive',
          color: 'from-yellow-500 to-amber-500'
        }
      ]
    }
  }

  // Flache Liste für Kompatibilität
  const contentTemplates = Object.values(contentTemplateGroups).flatMap(group => group.templates)

  // Content Tones
  const contentTones = [
    { id: 'luxurious', name: 'Luxurious & Elegant', emoji: '✨', description: 'Exclusive and premium' },
    { id: 'friendly', name: 'Friendly & Warm', emoji: '😊', description: 'Inviting and personal' },
    { id: 'professional', name: 'Professional', emoji: '👔', description: 'Serious and trustworthy' },
    { id: 'trendy', name: 'Trendy & Modern', emoji: '🔥', description: 'Current and trending' },
    { id: 'educational', name: 'Educational', emoji: '📚', description: 'Informative and valuable' },
    { id: 'promotional', name: 'Promotional', emoji: '🎯', description: 'Sales-oriented' }
  ]

  // Languages
  const languages = [
    { id: 'english', name: 'English', flag: '🇺🇸' },
    { id: 'spanish', name: 'Español', flag: '🇪🇸' },
    { id: 'french', name: 'Français', flag: '🇫🇷' },
    { id: 'german', name: 'Deutsch', flag: '🇩🇪' },
    { id: 'italian', name: 'Italiano', flag: '🇮🇹' }
  ]

  // KI Content Generation
  const generateAIContent = async () => {
    setIsGenerating(true)
    setAiProgress(0)
    
    // Simulate AI generation with progress bar
    const progressInterval = setInterval(() => {
      setAiProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 200)
    
    setTimeout(() => {
      const mockContent = {
        'instagram-post': {
          caption: `✨ Discover the secrets of timeless beauty at LA Skin Elite ✨\n\n🌟 Our exclusive Botox treatments transform your skin into a masterpiece of nature\n\n💎 Book your VIP appointment now\n\n#LASkinElite #Botox #LuxuryBeauty #AntiAging`,
          hashtags: '#LASkinElite #Botox #LuxuryBeauty #AntiAging #BeverlyHills #Beauty #VIP #Treatment',
          image_prompt: 'Luxury beauty clinic with golden lighting, elegant treatment room, minimalist aesthetic',
          engagement_prediction: '8.2K Likes, 340 Comments, 89% positive sentiment'
        },
        'instagram-story': {
          title: 'VIP Beauty Transformation',
          content: 'Swipe up for exclusive insights into our luxury treatments',
          cta: 'Book appointment now',
                      stickers: ['Location', 'Music', 'Poll', 'Link']
        },
        'linkedin-post': {
          caption: `🏆 LA Skin Elite: Wo Wissenschaft auf Luxus trifft\n\nAls führende Klinik für ästhetische Medizin setzen wir auf:\n• Modernste Botox-Technologien\n• Zertifizierte Fachärzte\n• Individuelle Behandlungskonzepte\n• Höchste Sicherheitsstandards\n\nVertrauen Sie auf über 15 Jahre Erfahrung in der Schönheitsmedizin.\n\n#Fachkompetenz #ÄsthetischeMedizin #Botox #Qualität`,
          hashtags: '#LASkinElite #Botox #ÄsthetischeMedizin #Fachkompetenz #Qualität #Sicherheit',
          image_prompt: 'Professional medical team in elegant clinic, modern equipment, confident medical professionals',
          engagement_prediction: '2.1K Likes, 89 Comments, 94% professional sentiment'
        },
        'tiktok-video': {
          caption: `❌ Botox-Mythen vs. ✅ Realität bei LA Skin Elite\n\n🎬 Unser Facharzt klärt auf!\n\n#BotoxFacts #LASkinElite #Aufklärung #Schönheit`,
          hashtags: '#BotoxFacts #LASkinElite #Aufklärung #Schönheit #Wahrheit #viral',
          video_concept: 'Quick myth-busting format with before/after, doctor explaining, trending audio',
          engagement_prediction: '45.6K Views, 3.2K Likes, 89% completion rate'
        },
        'pinterest-pin': {
          caption: `💡 Die 5 wichtigsten Botox-Aftercare Tipps\n\n✨ Für optimale Ergebnisse nach Ihrer Behandlung bei LA Skin Elite\n\n📌 Speichern & teilen!`,
          hashtags: '#BotoxAftercare #Schönheitstipps #LASkinElite #ÄsthetischeMedizin #Hautpflege',
          image_prompt: 'Infographic with 5 aftercare tips, elegant design, professional medical aesthetic',
          engagement_prediction: '12.8K Saves, 892 Clicks, 95% female audience'
        },
        'twitter-post': {
          caption: `🔬 Innovation in der ästhetischen Medizin:\n\nUnsere neuen Botox-Techniken bei @LASkinElite sorgen für noch natürlichere Ergebnisse.\n\n#MedicalAesthetics #Innovation #BotoxTech`,
          hashtags: '#LASkinElite #MedicalAesthetics #Innovation #BotoxTech #Wissenschaft',
          image_prompt: 'Clean, modern medical technology, sophisticated clinic environment',
          engagement_prediction: '347 Retweets, 1.2K Likes, 89% positive sentiment'
        },
        'youtube-short': {
          caption: `30 Sekunden Botox-Behandlung bei LA Skin Elite 🎬\n\nVon der Beratung bis zum Ergebnis - so läuft's ab!\n\n#BotoxBehandlung #LASkinElite #Shorts`,
          hashtags: '#BotoxBehandlung #LASkinElite #Shorts #Behandlung #Schönheit',
          video_concept: 'Fast-paced treatment overview, calming music, professional presentation',
          engagement_prediction: '78.3K Views, 4.1K Likes, 92% retention rate'
        },
        'facebook-post': {
          caption: `👥 Über 5.000 zufriedene Kunden vertrauen LA Skin Elite\n\n⭐ 4.9/5 Sterne Bewertung\n🏆 Ausgezeichnet als "Beste Botox-Klinik 2024"\n📍 Beverly Hills Premium Location\n\nIhr Vertrauen ist unser Antrieb! 💪`,
          hashtags: '#LASkinElite #Kundenzufriedenheit #Botox #Auszeichnung #BeverlyHills',
          image_prompt: 'Customer testimonials collage, awards, elegant clinic interior',
          engagement_prediction: '4.7K Reactions, 234 Comments, 156 Shares'
        },
        'whatsapp-status': {
          caption: `🌟 LA Skin Elite Tipp des Tages:\n\nNach Botox 4h nicht hinlegen! ✅\n\nSo bleiben die Ergebnisse optimal 💯`,
          hashtags: '#BotoxTipps #LASkinElite #Hautpflege',
          image_prompt: 'Simple, clean tip graphic with LA Skin Elite branding',
          engagement_prediction: '89% View Rate, 23% Screenshot Rate'
        },
        'reddit-post': {
          caption: `Botox Erfahrungsbericht: LA Skin Elite (Beverly Hills)\n\n3 Monate nach der Behandlung - ehrlicher Review\n\nAMA in den Kommentaren! 🤔`,
          hashtags: 'r/PlasticSurgery r/30PlusSkinCare r/SkincareAddiction',
          image_prompt: 'Before/after comparison, professional medical setting',
          engagement_prediction: '87% Upvote Rate, 156 Comments, 45 Awards'
        },
        'landing-page': {
          headline: 'Zeitlose Schönheit. Exklusive Behandlungen. Ihre Transformation.',
          subheadline: 'Entdecken Sie die Geheimnisse der Stars in Beverly Hills Premium Beauty Clinic',
          sections: ['Hero', 'Services', 'Before/After', 'Testimonials', 'Booking'],
          conversion_rate: '12.4% erwartete Conversion Rate'
        }
      }
      setGeneratedContent(mockContent)
      setIsGenerating(false)
      clearInterval(progressInterval)
      setAiProgress(100)
    }, 4000)
  }

  // Performance Metrics
  const performanceMetrics = {
    totalReach: '127.5K',
    engagement: '12.4%',
    conversion: '8.9%',
    revenue: '$45,230',
    roi: '340%',
    followers: '+2.8K'
  }

  // Scheduled Posts - Extended with all channels
  const scheduledPosts = [
    { platform: 'Instagram', type: 'Post', time: '14:00', status: 'Scheduled', engagement: 'High' },
    { platform: 'TikTok', type: 'Video', time: '18:30', status: 'Publishing', engagement: 'Very High' },
    { platform: 'Facebook', type: 'Story', time: '20:00', status: 'Scheduled', engagement: 'Medium' },
    { platform: 'LinkedIn', type: 'Carousel', time: '09:00', status: 'Scheduled', engagement: 'High' },
    { platform: 'YouTube', type: 'Short', time: '16:00', status: 'Scheduled', engagement: 'Very High' },
    { platform: 'Pinterest', type: 'Pin', time: '11:30', status: 'Scheduled', engagement: 'High' },
    { platform: 'Twitter/X', type: 'Thread', time: '13:15', status: 'Publishing', engagement: 'Medium' },
    { platform: 'WhatsApp', type: 'Status', time: '19:45', status: 'Scheduled', engagement: 'High' },
    { platform: 'Snapchat', type: 'Ad', time: '17:30', status: 'Scheduled', engagement: 'Very High' },
    { platform: 'Telegram', type: 'Post', time: '12:00', status: 'Scheduled', engagement: 'Medium' },
    { platform: 'Reddit', type: 'Post', time: '21:00', status: 'Scheduled', engagement: 'High' },
    { platform: 'Threads', type: 'Post', time: '15:30', status: 'Scheduled', engagement: 'Medium' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      <Navigation />
      
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-6">
          
          {/* Revolutionary Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="relative">
                <RocketLaunchIcon className="h-12 w-12 text-purple-600 animate-bounce" />
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                  <SparklesIcon className="h-3 w-3 text-white" />
                </div>
              </div>
            </div>
            <h1 className="text-5xl font-light text-gray-900 mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              AI Marketing Revolution
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Revolutionary AI-powered content creation, social media automation and landing page builder 
              for maximum reach and conversion
            </p>
            
            {/* Quick Stats */}
            <div className="flex justify-center mt-8 space-x-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">{performanceMetrics.totalReach}</div>
                <div className="text-sm text-gray-600">Total Reach</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-pink-600">{performanceMetrics.engagement}</div>
                <div className="text-sm text-gray-600">Engagement Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">{performanceMetrics.roi}</div>
                <div className="text-sm text-gray-600">ROI</div>
              </div>
            </div>
          </div>

          {/* Revolutionary Tab Navigation */}
          <div className="mb-12">
            <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-3 shadow-xl border border-white/20">
              <nav className="flex space-x-2">
                {[
                  { 
                    id: 'ai-creator', 
                    name: '🎨 AI Content Creator', 
                    icon: SparklesIcon, 
                    gradient: 'from-purple-500 to-pink-500',
                    description: 'Create magical content'
                  },
                  { 
                    id: 'social-automation', 
                    name: '🤖 Social Automation', 
                    icon: BoltIcon, 
                    gradient: 'from-blue-500 to-cyan-500',
                    description: 'Automate everything'
                  },
                  { 
                    id: 'landing-builder', 
                    name: '🚀 Landing Builder', 
                    icon: ComputerDesktopIcon, 
                    gradient: 'from-green-500 to-emerald-500',
                    description: 'Build converting pages'
                  },
                  { 
                    id: 'analytics', 
                    name: '📊 Performance AI', 
                    icon: ChartBarIcon, 
                    gradient: 'from-orange-500 to-red-500',
                    description: 'Analyze & optimize'
                  }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`group flex flex-col items-center space-y-2 px-6 py-4 rounded-2xl font-medium text-sm transition-all duration-300 ${
                      activeTab === tab.id
                        ? `bg-gradient-to-r ${tab.gradient} text-white shadow-lg transform scale-105 shadow-purple-500/25`
                        : 'text-gray-600 hover:text-gray-900 hover:bg-white/60 hover:shadow-md'
                    }`}
                  >
                    <tab.icon className={`h-6 w-6 transition-all ${activeTab === tab.id ? 'animate-pulse' : 'group-hover:scale-110'}`} />
                    <span className="font-semibold">{tab.name}</span>
                    <span className={`text-xs opacity-80 ${activeTab === tab.id ? 'text-white/90' : 'text-gray-500'}`}>
                      {tab.description}
                    </span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* KI Content Creator */}
          {activeTab === 'ai-creator' && (
            <div className="space-y-8">
              
              {/* Content Templates Selection */}
              <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white/20">
                <div className="flex items-center mb-8">
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mr-4">
                    <SparklesIcon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-light text-gray-900">AI Content Creator</h2>
                    <p className="text-gray-600">Create magical content with artificial intelligence</p>
                  </div>
                </div>
                
                {/* Kategorie-Navigation */}
                <div className="mb-8">
                  <div className="flex flex-wrap gap-3 mb-6">
                    {Object.entries(contentTemplateGroups).map(([categoryName, category]) => (
                      <button
                        key={categoryName}
                        onClick={() => setActiveCategory(categoryName)}
                        className={`flex items-center space-x-2 px-4 py-3 rounded-xl border-2 transition-all duration-300 ${
                          activeCategory === categoryName
                            ? `bg-gradient-to-r ${category.color} text-white border-transparent shadow-lg`
                            : 'bg-white/60 border-gray-200 hover:border-purple-300 hover:shadow-md text-gray-700'
                        }`}
                      >
                        <category.icon className={`h-5 w-5 ${
                          activeCategory === categoryName ? 'text-white' : 'text-gray-600'
                        }`} />
                        <span className="font-medium">{categoryName}</span>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          activeCategory === categoryName 
                            ? 'bg-white/20 text-white' 
                            : 'bg-gray-100 text-gray-600'
                        }`}>
                          {category.templates.length}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Template Grid für aktive Kategorie */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
                  {contentTemplateGroups[activeCategory]?.templates.map((template) => (
                    <button
                      key={template.id}
                      onClick={() => setSelectedTemplate(template.id)}
                      className={`group relative p-6 rounded-2xl border-2 transition-all duration-300 hover:scale-105 ${
                        selectedTemplate === template.id
                          ? `bg-gradient-to-br ${template.color} text-white border-transparent shadow-lg`
                          : 'bg-white/60 border-gray-200 hover:border-purple-300 hover:shadow-md'
                      }`}
                    >
                      <template.icon className={`h-8 w-8 mx-auto mb-3 transition-all ${
                        selectedTemplate === template.id ? 'text-white animate-pulse' : 'text-gray-600 group-hover:text-purple-600'
                      }`} />
                      <div className={`text-sm font-semibold mb-1 ${
                        selectedTemplate === template.id ? 'text-white' : 'text-gray-900'
                      }`}>
                        {template.name}
                      </div>
                      <div className={`text-xs ${
                        selectedTemplate === template.id ? 'text-white/90' : 'text-gray-600'
                      }`}>
                        {template.description}
                      </div>
                      <div className={`text-xs mt-2 font-mono ${
                        selectedTemplate === template.id ? 'text-white/80' : 'text-gray-500'
                      }`}>
                        {template.dimensions}
                      </div>
                    </button>
                  ))}
                </div>

                {/* Content Configuration */}
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      🎯 Content Description
                    </label>
                    <textarea
                      value={contentPrompt}
                      onChange={(e) => setContentPrompt(e.target.value)}
                      className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/80 backdrop-blur-sm"
                      rows={4}
                      placeholder="Describe your desired content... e.g. 'Luxurious Botox treatment with elegant atmosphere, show before-after transformation'"
                    />
                  </div>
                  
                  <div className="space-y-6">
                    {/* Tone Selection */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        🎭 Content Tone
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        {contentTones.map((tone) => (
                          <button
                            key={tone.id}
                            onClick={() => setSelectedTone(tone.id)}
                            className={`flex items-center space-x-3 p-3 rounded-xl border-2 transition-all ${
                              selectedTone === tone.id
                                ? 'border-purple-500 bg-purple-50 text-purple-700'
                                : 'border-gray-200 hover:border-purple-300 bg-white/60'
                            }`}
                          >
                            <span className="text-lg">{tone.emoji}</span>
                            <div className="text-left">
                              <div className="text-sm font-semibold">{tone.name}</div>
                              <div className="text-xs text-gray-600">{tone.description}</div>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Language Selection */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        🌍 Language
                      </label>
                      <div className="flex space-x-2">
                        {languages.map((lang) => (
                          <button
                            key={lang.id}
                            onClick={() => setSelectedLanguage(lang.id)}
                            className={`flex items-center space-x-2 px-4 py-2 rounded-lg border-2 transition-all ${
                              selectedLanguage === lang.id
                                ? 'border-purple-500 bg-purple-50 text-purple-700'
                                : 'border-gray-200 hover:border-purple-300 bg-white/60'
                            }`}
                          >
                            <span>{lang.flag}</span>
                            <span className="text-sm font-medium">{lang.name}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Generate Button */}
                <div className="text-center">
                  <button
                    onClick={generateAIContent}
                    disabled={isGenerating || !contentPrompt.trim()}
                    className="group relative bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-4 rounded-2xl font-semibold text-lg hover:shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105"
                  >
                    <div className="flex items-center space-x-3">
                      {isGenerating ? (
                        <>
                          <CpuChipIcon className="h-6 w-6 animate-spin" />
                          <span>AI working magically...</span>
                        </>
                      ) : (
                        <>
                          <SparklesIcon className="h-6 w-6 group-hover:animate-pulse" />
                          <span>Create Content with AI</span>
                        </>
                      )}
                    </div>
                    
                    {/* Progress Bar */}
                    {isGenerating && (
                      <div className="absolute bottom-0 left-0 h-1 bg-white/30 rounded-full overflow-hidden w-full">
                        <div 
                          className="h-full bg-white transition-all duration-300"
                          style={{ width: `${aiProgress}%` }}
                        />
                      </div>
                    )}
                  </button>
                </div>

                {/* AI Progress */}
                {isGenerating && (
                  <div className="mt-6 bg-purple-50 rounded-2xl p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <CpuChipIcon className="h-6 w-6 text-purple-600 animate-pulse" />
                      <span className="text-purple-800 font-semibold">AI is generating your content...</span>
                    </div>
                    <div className="space-y-2 text-sm text-purple-700">
                      <div className="flex items-center space-x-2">
                        <CheckCircleIcon className="h-4 w-4" />
                        <span>Analyzing content request</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircleIcon className="h-4 w-4" />
                        <span>Generating optimized texts</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CpuChipIcon className="h-4 w-4 animate-spin" />
                        <span>Creating visual concepts</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Generated Content Display */}
              {generatedContent && (
                <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white/20">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl mr-4">
                        <CheckCircleIcon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-light text-gray-900">Generated Content</h3>
                        <p className="text-gray-600">Ready to publish or customize</p>
                      </div>
                    </div>
                    <div className="flex space-x-3">
                      <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all">
                        <EyeIcon className="h-4 w-4" />
                        <span>Preview</span>
                      </button>
                      <button className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all">
                        <ArrowDownTrayIcon className="h-4 w-4" />
                        <span>Download</span>
                      </button>
                      <button className="flex items-center space-x-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all">
                        <ShareIcon className="h-4 w-4" />
                        <span>Publish</span>
                      </button>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">📝 Generated Text</h4>
                      <div className="bg-gray-50 rounded-xl p-6">
                        <p className="text-gray-800 leading-relaxed mb-4">
                          {generatedContent[selectedTemplate]?.caption || generatedContent[selectedTemplate]?.content}
                        </p>
                        {generatedContent[selectedTemplate]?.hashtags && (
                          <div className="border-t pt-4">
                            <p className="text-blue-600 text-sm">
                              {generatedContent[selectedTemplate].hashtags}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">🎨 Visual Concepts</h4>
                      <div className="bg-gray-50 rounded-xl p-6">
                        <p className="text-gray-700 text-sm mb-4">
                          {generatedContent[selectedTemplate]?.image_prompt}
                        </p>
                        <div className="bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg h-32 flex items-center justify-center text-white font-semibold">
                          KI-Generiertes Bild Konzept
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Performance Prediction */}
                  {generatedContent[selectedTemplate]?.engagement_prediction && (
                    <div className="mt-6 bg-green-50 rounded-xl p-6">
                      <h4 className="text-lg font-semibold text-green-800 mb-2">📈 KI Performance-Vorhersage</h4>
                      <p className="text-green-700">
                        {generatedContent[selectedTemplate].engagement_prediction}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Social Media Automation */}
          {activeTab === 'social-automation' && (
            <div className="space-y-8">
              <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white/20">
                <div className="flex items-center mb-8">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl mr-4">
                    <BoltIcon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-light text-gray-900">Social Media Automation</h2>
                    <p className="text-gray-600">Automate your entire social media presence</p>
                  </div>
                </div>

                {/* Publishing Schedule */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">📅 Publishing Schedule</h3>
                    <div className="space-y-3">
                      {scheduledPosts.map((post, index) => (
                        <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                          <div className="flex items-center space-x-3">
                            <div className={`w-3 h-3 rounded-full ${
                              post.status === 'Publishing' ? 'bg-green-500 animate-pulse' : 'bg-blue-500'
                            }`} />
                            <div>
                              <div className="font-semibold text-gray-900">{post.platform} {post.type}</div>
                              <div className="text-sm text-gray-600">{post.time} - {post.status}</div>
                            </div>
                          </div>
                          <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            post.engagement === 'Very High' ? 'bg-green-100 text-green-800' :
                            post.engagement === 'High' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-blue-100 text-blue-800'
                          }`}>
                            {post.engagement}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">🎯 Automation Features</h3>
                    <div className="space-y-4">
                      {[
                        { name: 'Auto-Posting (All Channels)', status: 'Active', icon: ShareIcon, color: 'green' },
                        { name: 'Hashtag Optimization', status: 'Active', icon: HashtagIcon, color: 'green' },
                        { name: 'Best Time Detection', status: 'Active', icon: ClockIcon, color: 'green' },
                        { name: 'Story Automation', status: 'Active', icon: DevicePhoneMobileIcon, color: 'green' },
                        { name: 'Reels/Shorts Generator', status: 'Active', icon: VideoCameraIcon, color: 'green' },
                        { name: 'LinkedIn Automation', status: 'Active', icon: DocumentTextIcon, color: 'green' },
                        { name: 'Pinterest Scheduler', status: 'Active', icon: PhotoIcon, color: 'green' },
                        { name: 'Twitter/X Threads', status: 'Beta', icon: ChatBubbleLeftIcon, color: 'blue' },
                        { name: 'WhatsApp Status', status: 'Planned', icon: ChatBubbleLeftRightIcon, color: 'yellow' },
                        { name: 'Snapchat Ads', status: 'Beta', icon: CameraIcon, color: 'blue' },
                        { name: 'Telegram Broadcast', status: 'Planned', icon: ChatBubbleLeftIcon, color: 'yellow' },
                        { name: 'Reddit Poster', status: 'Beta', icon: GlobeAltIcon, color: 'blue' },
                        { name: 'Twitch Overlays', status: 'Inactive', icon: VideoCameraIcon, color: 'gray' },
                        { name: 'Comment Bot', status: 'Active', icon: ChatBubbleLeftIcon, color: 'green' },
                        { name: 'Cross-Platform Sync', status: 'Active', icon: BoltIcon, color: 'green' }
                      ].map((feature, index) => (
                        <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                          <div className="flex items-center space-x-3">
                            <feature.icon className={`h-5 w-5 text-${feature.color}-600`} />
                            <span className="font-medium text-gray-900">{feature.name}</span>
                          </div>
                          <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            feature.color === 'green' ? 'bg-green-100 text-green-800' :
                            feature.color === 'yellow' ? 'bg-yellow-100 text-yellow-800' :
                            feature.color === 'blue' ? 'bg-blue-100 text-blue-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {feature.status}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Landing Page Builder */}
          {activeTab === 'landing-builder' && (
            <div className="space-y-8">
              <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white/20">
                <div className="flex items-center mb-8">
                  <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl mr-4">
                    <ComputerDesktopIcon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-light text-gray-900">AI Landing Page Builder</h2>
                    <p className="text-gray-600">Create converting landing pages in minutes</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { name: 'Botox Special', conversion: '12.4%', visitors: '2.8K', status: 'Live' },
                    { name: 'Juvederm Launch', conversion: '8.9%', visitors: '1.2K', status: 'Draft' },
                    { name: 'VIP Membership', conversion: '15.7%', visitors: '3.4K', status: 'Live' }
                  ].map((page, index) => (
                    <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-gray-900">{page.name}</h3>
                        <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          page.status === 'Live' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {page.status}
                        </div>
                      </div>
                                              <div className="space-y-2 text-sm text-gray-600 mb-4">
                        <div className="flex justify-between">
                          <span>Conversion Rate:</span>
                          <span className="font-semibold text-green-600">{page.conversion}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Visitors:</span>
                          <span className="font-semibold text-blue-600">{page.visitors}</span>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <button className="flex-1 bg-purple-600 text-white py-2 rounded-lg text-sm hover:bg-purple-700 transition-all">
                          Edit
                        </button>
                        <button className="px-3 py-2 bg-gray-200 text-gray-700 rounded-lg text-sm hover:bg-gray-300 transition-all">
                          <EyeIcon className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 text-center">
                  <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-lg transition-all hover:scale-105">
                    <PlusIcon className="h-6 w-6 inline mr-2" />
                    Create New Landing Page with AI
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Performance Analytics */}
          {activeTab === 'analytics' && (
            <div className="space-y-8">
              
              {/* KPI Cards */}
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { title: 'Total Reach', value: performanceMetrics.totalReach, change: '+23.4%', icon: UsersIcon, color: 'blue' },
                  { title: 'Engagement Rate', value: performanceMetrics.engagement, change: '+8.7%', icon: HeartIcon, color: 'pink' },
                  { title: 'Conversion Rate', value: performanceMetrics.conversion, change: '+12.1%', icon: ArrowTrendingUpIcon, color: 'green' },
                  { title: 'Revenue', value: performanceMetrics.revenue, change: '+34.2%', icon: CurrencyDollarIcon, color: 'yellow' }
                ].map((metric, index) => (
                  <div key={index} className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20 hover:scale-105 transition-all">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 bg-gradient-to-r from-${metric.color}-400 to-${metric.color}-600 rounded-xl`}>
                        <metric.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className={`text-sm font-semibold text-${metric.color}-600`}>
                        {metric.change}
                      </div>
                    </div>
                    <div className="text-3xl font-light text-gray-900 mb-1">{metric.value}</div>
                    <div className="text-sm text-gray-600">{metric.title}</div>
                  </div>
                ))}
              </div>

              {/* AI Insights */}
              <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white/20">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl mr-4">
                    <LightBulbIcon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-light text-gray-900">KI Performance-Insights</h2>
                    <p className="text-gray-600">Intelligente Empfehlungen für maximalen Erfolg</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      title: '🚀 Botox + Juvederm Bundle',
                      description: 'Erstelle Kombi-Angebote für 23% höhere Conversion',
                      impact: '+15% Revenue',
                      priority: 'Hoch',
                      color: 'green'
                    },
                    {
                      title: '📱 TikTok Expansion',
                      description: 'Zielgruppe 18-35 ist 67% aktiver auf TikTok',
                      impact: '+40% Reach',
                      priority: 'Hoch',
                      color: 'blue'
                    },
                    {
                      title: '⏰ Optimale Posting-Zeit',
                      description: 'Dienstag 14:30 Uhr zeigt 89% höhere Engagement',
                      impact: '+12% Engagement',
                      priority: 'Mittel',
                      color: 'yellow'
                    },
                    {
                      title: '💎 VIP Upgrade Campaign',
                      description: 'Silver-Kunden sind bereit für Gold-Upgrade',
                      impact: '+25% ARPU',
                      priority: 'Hoch',
                      color: 'purple'
                    }
                  ].map((insight, index) => (
                    <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-gray-900">{insight.title}</h3>
                        <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          insight.priority === 'Hoch' ? 'bg-red-100 text-red-800' :
                          insight.priority === 'Mittel' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-green-100 text-green-800'
                        }`}>
                          {insight.priority}
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4">{insight.description}</p>
                      <div className="flex items-center justify-between">
                        <div className={`text-${insight.color}-600 font-semibold`}>
                          {insight.impact}
                        </div>
                        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-700 transition-all">
                          Umsetzen
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 