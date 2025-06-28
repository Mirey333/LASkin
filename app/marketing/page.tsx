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
    ChevronDownIcon
  } from '@heroicons/react/24/outline'

export default function AIMarketingHub() {
  const [activeTab, setActiveTab] = useState('ai-creator')
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedContent, setGeneratedContent] = useState(null)
  const [selectedTemplate, setSelectedTemplate] = useState('instagram-post')
  const [contentPrompt, setContentPrompt] = useState('')
  const [selectedTone, setSelectedTone] = useState('luxurious')
  const [selectedLanguage, setSelectedLanguage] = useState('english')
  const [publishSchedule, setPublishSchedule] = useState([])
  const [aiProgress, setAiProgress] = useState(0)

  // KI Content Templates
  const contentTemplates = [
    { 
      id: 'instagram-post', 
      name: 'Instagram Post', 
      icon: PhotoIcon, 
      description: 'Quadratisches Bild mit KI-Text',
      dimensions: '1080x1080',
      color: 'from-pink-500 to-rose-500'
    },
    { 
      id: 'instagram-story', 
      name: 'Instagram Story', 
      icon: DevicePhoneMobileIcon, 
      description: 'Vertikales Story-Format',
      dimensions: '1080x1920',
      color: 'from-purple-500 to-indigo-500'
    },
    { 
      id: 'instagram-reel', 
      name: 'Instagram Reel', 
      icon: VideoCameraIcon, 
      description: 'KI-Video mit Musik',
      dimensions: '1080x1920',
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      id: 'tiktok-video', 
      name: 'TikTok Video', 
      icon: FilmIcon, 
      description: 'Virales TikTok-Video',
      dimensions: '1080x1920',
      color: 'from-green-500 to-emerald-500'
    },
    { 
      id: 'youtube-thumbnail', 
      name: 'YouTube Thumbnail', 
      icon: PlayIcon, 
      description: 'Click-worthy Thumbnail',
      dimensions: '1280x720',
      color: 'from-red-500 to-orange-500'
    },
    { 
      id: 'landing-page', 
      name: 'Landing Page', 
      icon: ComputerDesktopIcon, 
      description: 'Komplette KI-Landingpage',
      dimensions: 'Responsive',
      color: 'from-yellow-500 to-amber-500'
    }
  ]

  // Content Tones
  const contentTones = [
    { id: 'luxurious', name: 'Luxuriös & Elegant', emoji: '✨', description: 'Exklusiv und hochwertig' },
    { id: 'friendly', name: 'Freundlich & Warm', emoji: '😊', description: 'Einladend und persönlich' },
    { id: 'professional', name: 'Professionell', emoji: '👔', description: 'Seriös und vertrauenswürdig' },
    { id: 'trendy', name: 'Trendy & Modern', emoji: '🔥', description: 'Aktuell und angesagt' },
    { id: 'educational', name: 'Informativ', emoji: '📚', description: 'Lehrreich und wertvoll' },
    { id: 'promotional', name: 'Werblich', emoji: '🎯', description: 'Verkaufsorientiert' }
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
    
    // Simuliere KI-Generierung mit Fortschrittsbalken
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
          caption: `✨ Entdecken Sie die Geheimnisse zeitloser Schönheit bei LA Skin Elite ✨\n\n🌟 Unsere exklusiven Botox-Behandlungen verwandeln Ihre Haut in ein Meisterwerk der Natur\n\n💎 Buchen Sie jetzt Ihren VIP-Termin\n\n#LASkinElite #Botox #LuxuryBeauty #AntiAging`,
          hashtags: '#LASkinElite #Botox #LuxuryBeauty #AntiAging #BeverlyHills #Schönheit #VIP #Behandlung',
          image_prompt: 'Luxury beauty clinic with golden lighting, elegant treatment room, minimalist aesthetic',
          engagement_prediction: '8.2K Likes, 340 Comments, 89% positive sentiment'
        },
        'instagram-story': {
          title: 'VIP Beauty Transformation',
          content: 'Swipe up für exklusive Einblicke in unsere Luxus-Behandlungen',
          cta: 'Jetzt Termin buchen',
          stickers: ['Standort', 'Musik', 'Umfrage', 'Link']
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

  // Scheduled Posts
  const scheduledPosts = [
    { platform: 'Instagram', type: 'Post', time: '14:00', status: 'Geplant', engagement: 'Hoch' },
    { platform: 'TikTok', type: 'Video', time: '18:30', status: 'Wird veröffentlicht', engagement: 'Sehr hoch' },
    { platform: 'Facebook', type: 'Story', time: '20:00', status: 'Geplant', engagement: 'Mittel' }
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
              KI Marketing Revolution
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Revolutionäre KI-gestützte Content-Erstellung, Social Media Automation und Landing Page Builder 
              für maximale Reichweite und Conversion
            </p>
            
            {/* Quick Stats */}
            <div className="flex justify-center mt-8 space-x-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">{performanceMetrics.totalReach}</div>
                <div className="text-sm text-gray-600">Gesamtreichweite</div>
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
                    name: '🎨 KI Content Creator', 
                    icon: SparklesIcon, 
                    gradient: 'from-purple-500 to-pink-500',
                    description: 'Erstelle magischen Content'
                  },
                  { 
                    id: 'social-automation', 
                    name: '🤖 Social Automation', 
                    icon: BoltIcon, 
                    gradient: 'from-blue-500 to-cyan-500',
                    description: 'Automatisiere alles'
                  },
                  { 
                    id: 'landing-builder', 
                    name: '🚀 Landing Builder', 
                    icon: ComputerDesktopIcon, 
                    gradient: 'from-green-500 to-emerald-500',
                    description: 'Baue konvertierende Seiten'
                  },
                  { 
                    id: 'analytics', 
                    name: '📊 Performance AI', 
                    icon: ChartBarIcon, 
                    gradient: 'from-orange-500 to-red-500',
                    description: 'Analysiere & optimiere'
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
                    <h2 className="text-3xl font-light text-gray-900">KI Content Creator</h2>
                    <p className="text-gray-600">Erstelle magischen Content mit künstlicher Intelligenz</p>
                  </div>
                </div>
                
                {/* Template Grid */}
                <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
                  {contentTemplates.map((template) => (
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
                      🎯 Content-Beschreibung
                    </label>
                    <textarea
                      value={contentPrompt}
                      onChange={(e) => setContentPrompt(e.target.value)}
                      className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/80 backdrop-blur-sm"
                      rows={4}
                      placeholder="Beschreibe deinen gewünschten Content... z.B. 'Luxuriöse Botox-Behandlung mit eleganter Atmosphäre, zeige Vorher-Nachher Transformation'"
                    />
                  </div>
                  
                  <div className="space-y-6">
                    {/* Tone Selection */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        🎭 Content-Ton
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
                          <span>KI arbeitet magisch...</span>
                        </>
                      ) : (
                        <>
                          <SparklesIcon className="h-6 w-6 group-hover:animate-pulse" />
                          <span>Content mit KI erstellen</span>
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
                      <span className="text-purple-800 font-semibold">KI generiert Ihren Content...</span>
                    </div>
                    <div className="space-y-2 text-sm text-purple-700">
                      <div className="flex items-center space-x-2">
                        <CheckCircleIcon className="h-4 w-4" />
                        <span>Analysiere Content-Anfrage</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircleIcon className="h-4 w-4" />
                        <span>Generiere optimierte Texte</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CpuChipIcon className="h-4 w-4 animate-spin" />
                        <span>Erstelle visuelle Konzepte</span>
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
                        <h3 className="text-2xl font-light text-gray-900">Generierter Content</h3>
                        <p className="text-gray-600">Bereit zum Veröffentlichen oder Anpassen</p>
                      </div>
                    </div>
                    <div className="flex space-x-3">
                      <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all">
                        <EyeIcon className="h-4 w-4" />
                        <span>Vorschau</span>
                      </button>
                      <button className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all">
                        <ArrowDownTrayIcon className="h-4 w-4" />
                        <span>Download</span>
                      </button>
                      <button className="flex items-center space-x-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all">
                        <ShareIcon className="h-4 w-4" />
                        <span>Veröffentlichen</span>
                      </button>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">📝 Generierter Text</h4>
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
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">🎨 Visuelle Konzepte</h4>
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
                    <p className="text-gray-600">Automatisiere deine gesamte Social Media Präsenz</p>
                  </div>
                </div>

                {/* Publishing Schedule */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">📅 Veröffentlichungsplan</h3>
                    <div className="space-y-3">
                      {scheduledPosts.map((post, index) => (
                        <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                          <div className="flex items-center space-x-3">
                            <div className={`w-3 h-3 rounded-full ${
                              post.status === 'Wird veröffentlicht' ? 'bg-green-500 animate-pulse' : 'bg-blue-500'
                            }`} />
                            <div>
                              <div className="font-semibold text-gray-900">{post.platform} {post.type}</div>
                              <div className="text-sm text-gray-600">{post.time} - {post.status}</div>
                            </div>
                          </div>
                          <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            post.engagement === 'Sehr hoch' ? 'bg-green-100 text-green-800' :
                            post.engagement === 'Hoch' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-blue-100 text-blue-800'
                          }`}>
                            {post.engagement}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">🎯 Automatisierungs-Features</h3>
                    <div className="space-y-4">
                      {[
                        { name: 'Auto-Posting', status: 'Aktiv', icon: ShareIcon, color: 'green' },
                        { name: 'Hashtag-Optimierung', status: 'Aktiv', icon: HashtagIcon, color: 'green' },
                        { name: 'Beste Zeit-Erkennung', status: 'Aktiv', icon: ClockIcon, color: 'green' },
                        { name: 'Story-Automation', status: 'Geplant', icon: DevicePhoneMobileIcon, color: 'yellow' },
                        { name: 'Reels-Generator', status: 'Beta', icon: VideoCameraIcon, color: 'blue' },
                        { name: 'Kommentar-Bot', status: 'Inaktiv', icon: ChatBubbleLeftIcon, color: 'gray' }
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
                    <h2 className="text-3xl font-light text-gray-900">KI Landing Page Builder</h2>
                    <p className="text-gray-600">Erstelle konvertierende Landing Pages in Minuten</p>
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
                          <span>Besucher:</span>
                          <span className="font-semibold text-blue-600">{page.visitors}</span>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <button className="flex-1 bg-purple-600 text-white py-2 rounded-lg text-sm hover:bg-purple-700 transition-all">
                          Bearbeiten
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
                    Neue Landing Page mit KI erstellen
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
                  { title: 'Gesamtreichweite', value: performanceMetrics.totalReach, change: '+23.4%', icon: UsersIcon, color: 'blue' },
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