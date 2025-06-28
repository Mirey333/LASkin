'use client'

import React, { useState } from 'react'
import Navigation from '../../components/Navigation'
import { 
  UserGroupIcon,
  SparklesIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
  TrophyIcon,
  StarIcon,
  ShieldCheckIcon,
  UserCircleIcon,
  PaperAirplaneIcon,
  EyeIcon,
  LightBulbIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  EnvelopeIcon,
  ChatBubbleBottomCenterTextIcon,
  PhoneIcon,
  CalendarDaysIcon,
  PlusIcon,
  DocumentTextIcon,
  ClockIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'

export default function CRMSystem() {
  const [activeTab, setActiveTab] = useState('customers')
  const [aiChatOpen, setAiChatOpen] = useState(false)
  const [selectedMessage, setSelectedMessage] = useState<number | null>(null)
  const [messageReply, setMessageReply] = useState('')
  const [activeTemplate, setActiveTemplate] = useState<'sms' | 'email' | 'instagram' | 'facebook' | 'twitter'>('email')

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Navigation />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <UserGroupIcon className="h-8 w-8 text-black mr-3" />
              <h1 className="text-4xl font-light text-gray-900">Customer Management</h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Streamlined customer communications and appointment management
            </p>
          </div>

          {/* PRIORITY MESSAGES CHATBOX - ALWAYS ON TOP */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 mb-8">
            <div className="bg-black text-white p-4 rounded-t-xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                  <h2 className="text-xl font-semibold">Priority Messages</h2>
                  <span className="bg-white text-black px-2 py-1 rounded-full text-sm font-medium">LIVE</span>
                </div>
                <div className="text-sm">
                  <span className="bg-gray-800 px-3 py-1 rounded-full">3 urgent • 15 normal</span>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              {/* Priority Messages */}
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {[
                  {
                    id: 1,
                    customer: 'Sarah Johnson',
                    platform: 'phone',
                    message: 'Emergency cancellation needed for tomorrow\'s Botox appointment due to family emergency. Please contact me urgently.',
                    time: '2 min ago',
                    priority: 'urgent',
                    unread: true,
                    avatar: 'SJ'
                  },
                  {
                    id: 2,
                    customer: 'Alexandra Williams',
                    platform: 'email',
                    message: 'Hello! I\'m new to LA Skin and would love to book my first consultation for anti-aging treatments. I\'ve heard amazing things about your Botox and filler work. What would you recommend for a 35-year-old looking to prevent wrinkles? Available any weekday next week.',
                    time: '8 min ago',
                    priority: 'normal',
                    unread: true,
                    avatar: 'AW'
                  },
                  {
                    id: 3,
                    customer: 'Jennifer Kim',
                    platform: 'text',
                    message: 'Experiencing unusual swelling after yesterday\'s LATISSE consultation. Should I be concerned? Please advise next steps.',
                    time: '15 min ago',
                    priority: 'urgent',
                    unread: true,
                    avatar: 'JK'
                  },
                  {
                    id: 4,
                    customer: 'Maria Garcia',
                    platform: 'instagram',
                    message: 'Wedding emergency! Need Botox touch-up this weekend. Are you available for urgent appointments?',
                    time: '25 min ago',
                    priority: 'normal',
                    unread: true,
                    avatar: 'MG'
                  }
                ].map((msg) => (
                  <div
                    key={msg.id}
                    className={`p-4 rounded-lg border-l-4 transition-all hover:shadow-md cursor-pointer ${
                      msg.priority === 'urgent' 
                        ? 'border-l-black bg-gray-50 hover:bg-gray-100' 
                        : 'border-l-gray-400 bg-white hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <div className={`relative flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-medium ${
                        msg.priority === 'urgent' ? 'bg-black' : 'bg-gray-600'
                      }`}>
                        {msg.avatar}
                        {msg.unread && (
                          <div className="absolute -top-1 -right-1 w-4 h-4 bg-black rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          </div>
                        )}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <h4 className="font-semibold text-gray-900">{msg.customer}</h4>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              msg.priority === 'urgent' 
                                ? 'bg-black text-white' 
                                : 'bg-gray-200 text-gray-700'
                            }`}>
                              {msg.priority === 'urgent' ? 'URGENT' : 'NORMAL'}
                            </span>
                            <span className="px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                              {msg.platform.toUpperCase()}
                            </span>
                          </div>
                          <span className="text-xs text-gray-500 font-medium">{msg.time}</span>
                        </div>
                        <p className="text-sm text-gray-700 mt-2 leading-relaxed">{msg.message}</p>
                        
                        {/* Quick Actions */}
                        <div className="mt-3 flex flex-wrap gap-2">
                          <button className="bg-black hover:bg-gray-800 text-white px-3 py-1 rounded text-xs font-medium transition-colors">
                            Reply
                          </button>
                          <button className="bg-gray-600 hover:bg-gray-700 text-white px-3 py-1 rounded text-xs font-medium transition-colors">
                            Call
                          </button>
                          <button className="bg-gray-400 hover:bg-gray-500 text-white px-3 py-1 rounded text-xs font-medium transition-colors">
                            Schedule
                          </button>
                          {msg.priority === 'urgent' && (
                            <button className="bg-gray-800 hover:bg-black text-white px-3 py-1 rounded text-xs font-medium transition-colors">
                              Escalate
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Quick Action Bar */}
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <div className="flex flex-wrap gap-3 justify-center">
                  <button className="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center">
                    Mark All Read
                  </button>
                  <button className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center">
                    Bulk Templates
                  </button>
                  <button className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center">
                    Analytics
                  </button>
                  <button 
                    onClick={() => setActiveTab('messages')}
                    className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center"
                  >
                    📬 View All Messages
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* AI Butler Alert */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-6 mb-8 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <SparklesIcon className="h-8 w-8 mr-4" />
                <div>
                  <h3 className="text-xl font-semibold mb-1">KI-Butler ist aktiv</h3>
                  <p className="text-blue-100">3 neue Empfehlungen • 12 automatisierte Aktionen heute</p>
                </div>
              </div>
              <button
                onClick={() => setAiChatOpen(true)}
                className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-all"
              >
                Butler öffnen
              </button>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-xl p-2 shadow-lg border">
              <button
                onClick={() => setActiveTab('customers')}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all ${
                  activeTab === 'customers'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                <UserGroupIcon className="h-5 w-5" />
                <span>VIP Customers</span>
              </button>
              <button
                onClick={() => setActiveTab('regular')}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all ${
                  activeTab === 'regular'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                <UserCircleIcon className="h-5 w-5" />
                <span>Customers</span>
              </button>
              <button
                onClick={() => setActiveTab('campaigns')}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all ${
                  activeTab === 'campaigns'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                <PaperAirplaneIcon className="h-5 w-5" />
                <span>Campaigns</span>
              </button>
              <button
                onClick={() => setActiveTab('analytics')}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all ${
                  activeTab === 'analytics'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                <ChartBarIcon className="h-5 w-5" />
                <span>Analytics</span>
              </button>
              <button
                onClick={() => setActiveTab('messages')}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all ${
                  activeTab === 'messages'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                <PaperAirplaneIcon className="h-5 w-5" />
                <span>Messages</span>
              </button>
            </div>
          </div>

          {/* Customer Management */}
          {activeTab === 'customers' && (
            <div className="space-y-8">
              
              {/* Customer Stats */}
              <div className="grid md:grid-cols-4 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-lg border text-center">
                  <TrophyIcon className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                  <div className="text-3xl font-light text-gray-900 mb-1">45</div>
                  <div className="text-sm text-gray-600">Platinum VIPs</div>
                  <div className="text-sm text-purple-600 mt-1">95% Retention</div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-lg border text-center">
                  <StarIcon className="h-8 w-8 text-yellow-600 mx-auto mb-3" />
                  <div className="text-3xl font-light text-gray-900 mb-1">78</div>
                  <div className="text-sm text-gray-600">Gold Members</div>
                  <div className="text-sm text-yellow-600 mt-1">23% Upgrade Rate</div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-lg border text-center">
                  <ShieldCheckIcon className="h-8 w-8 text-gray-600 mx-auto mb-3" />
                  <div className="text-3xl font-light text-gray-900 mb-1">156</div>
                  <div className="text-sm text-gray-600">Silver Clients</div>
                  <div className="text-sm text-gray-600 mt-1">Growth Potential</div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-lg border text-center">
                  <CurrencyDollarIcon className="h-8 w-8 text-green-600 mx-auto mb-3" />
                  <div className="text-3xl font-light text-gray-900 mb-1">$8,420</div>
                  <div className="text-sm text-gray-600">Avg. Customer Value</div>
                  <div className="text-sm text-green-600 mt-1">+18% vs. Vorjahr</div>
                </div>
              </div>

              {/* Sample Customer Cards */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-lg border">
                  <div className="flex items-center mb-4">
                    <div className="h-12 w-12 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-medium">
                      SJ
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-900">Sarah Johnson</h4>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                        <TrophyIcon className="h-3 w-3 mr-1" />
                        Platinum
                      </span>
                    </div>
                  </div>
                                      <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Spending:</span>
                      <span className="font-medium">$12,450</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Satisfaction:</span>
                      <div className="flex items-center">
                        <StarIcon className="h-4 w-4 text-yellow-400 mr-1" />
                        <span>4.9</span>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Referrals:</span>
                      <span className="font-medium">3 Customers</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-lg border">
                  <div className="flex items-center mb-4">
                    <div className="h-12 w-12 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full flex items-center justify-center text-white font-medium">
                      EW
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-900">Emma Wilson</h4>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                        <StarIcon className="h-3 w-3 mr-1" />
                        Gold
                      </span>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Ausgaben:</span>
                      <span className="font-medium">$8,200</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Zufriedenheit:</span>
                      <div className="flex items-center">
                        <StarIcon className="h-4 w-4 text-yellow-400 mr-1" />
                        <span>4.7</span>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Upgrade-Potenzial:</span>
                      <span className="text-green-600 font-medium">Hoch</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-lg border">
                  <div className="flex items-center mb-4">
                    <div className="h-12 w-12 bg-gradient-to-r from-gray-500 to-gray-600 rounded-full flex items-center justify-center text-white font-medium">
                      LC
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-900">Lisa Chen</h4>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                        <ShieldCheckIcon className="h-3 w-3 mr-1" />
                        Silver
                      </span>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Ausgaben:</span>
                      <span className="font-medium">$3,400</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Zufriedenheit:</span>
                      <div className="flex items-center">
                        <StarIcon className="h-4 w-4 text-yellow-400 mr-1" />
                        <span>4.5</span>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Status:</span>
                      <span className="text-blue-600 font-medium">Neue Kundin</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Regular Customer Management */}
          {activeTab === 'regular' && (
            <div className="space-y-8">
              
              {/* Regular Customer Stats */}
              <div className="grid md:grid-cols-4 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-lg border text-center">
                  <UserCircleIcon className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <div className="text-3xl font-light text-gray-900 mb-1">834</div>
                  <div className="text-sm text-gray-600">Total Customers</div>
                  <div className="text-sm text-blue-600 mt-1">78% Return Rate</div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-lg border text-center">
                  <CheckCircleIcon className="h-8 w-8 text-green-600 mx-auto mb-3" />
                  <div className="text-3xl font-light text-gray-900 mb-1">89</div>
                                      <div className="text-sm text-gray-600">New Customers (30 days)</div>
                    <div className="text-sm text-green-600 mt-1">+23% vs. last month</div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-lg border text-center">
                  <CurrencyDollarIcon className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                  <div className="text-3xl font-light text-gray-900 mb-1">$2,150</div>
                                      <div className="text-sm text-gray-600">Average Value</div>
                    <div className="text-sm text-purple-600 mt-1">VIP Potential</div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-lg border text-center">
                  <LightBulbIcon className="h-8 w-8 text-orange-600 mx-auto mb-3" />
                  <div className="text-3xl font-light text-gray-900 mb-1">142</div>
                                      <div className="text-sm text-gray-600">Upgrade Candidates</div>
                    <div className="text-sm text-orange-600 mt-1">Ready for VIP</div>
                </div>
              </div>

              {/* Customer Filter & Search */}
              <div className="bg-white rounded-xl p-6 shadow-lg border">
                <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-gray-900">Manage Customers</h3>
                  <div className="flex items-center space-x-4">
                    <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
                      <option value="all">All Customers</option>
                      <option value="new">New Customers</option>
                      <option value="frequent">Regular Customers</option>
                      <option value="potential">VIP Potential</option>
                      <option value="inactive">Inactive</option>
                    </select>
                    <input 
                      type="text" 
                      placeholder="Search customer..." 
                      className="border border-gray-300 rounded-lg px-3 py-2 text-sm w-64"
                    />
                  </div>
                </div>
              </div>

              {/* Regular Customer Cards */}
              <div className="grid md:grid-cols-3 gap-6">
                
                {/* Regular Customer 1 */}
                <div className="bg-white rounded-xl p-6 shadow-lg border hover:shadow-xl transition-all">
                  <div className="flex items-center mb-4">
                    <div className="h-12 w-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-medium">
                      MR
                    </div>
                    <div className="ml-4 flex-1">
                      <h4 className="font-semibold text-gray-900">Maria Rodriguez</h4>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        Regular Customer
                      </span>
                    </div>
                    <div className="text-right">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Spending:</span>
                      <span className="font-medium">$2,840</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Appointments:</span>
                      <span className="font-medium">8 completed</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Last Visit:</span>
                      <span className="text-gray-500">2024-01-15</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">VIP Potential:</span>
                      <span className="text-orange-600 font-medium">High</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="flex space-x-2">
                      <button className="flex-1 bg-blue-600 text-white text-xs py-2 px-3 rounded-lg hover:bg-blue-700">
                        Contact
                      </button>
                      <button className="flex-1 bg-gray-100 text-gray-700 text-xs py-2 px-3 rounded-lg hover:bg-gray-200">
                        Profile
                      </button>
                    </div>
                  </div>
                </div>

                {/* Regular Customer 2 */}
                <div className="bg-white rounded-xl p-6 shadow-lg border hover:shadow-xl transition-all">
                  <div className="flex items-center mb-4">
                    <div className="h-12 w-12 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center text-white font-medium">
                      JB
                    </div>
                    <div className="ml-4 flex-1">
                      <h4 className="font-semibold text-gray-900">Jennifer Brown</h4>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        New Customer
                      </span>
                    </div>
                    <div className="text-right">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Spending:</span>
                      <span className="font-medium">$420</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Appointments:</span>
                      <span className="font-medium">1 completed</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">First Treatment:</span>
                      <span className="text-gray-500">2024-01-20</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Follow-up:</span>
                      <span className="text-blue-600 font-medium">Scheduled</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="flex space-x-2">
                      <button className="flex-1 bg-green-600 text-white text-xs py-2 px-3 rounded-lg hover:bg-green-700">
                        Follow-up
                      </button>
                      <button className="flex-1 bg-gray-100 text-gray-700 text-xs py-2 px-3 rounded-lg hover:bg-gray-200">
                        Profil
                      </button>
                    </div>
                  </div>
                </div>

                {/* Regular Customer 3 */}
                <div className="bg-white rounded-xl p-6 shadow-lg border hover:shadow-xl transition-all">
                  <div className="flex items-center mb-4">
                    <div className="h-12 w-12 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white font-medium">
                      AD
                    </div>
                    <div className="ml-4 flex-1">
                      <h4 className="font-semibold text-gray-900">Anna Davis</h4>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                        Upgrade-Kandidat
                      </span>
                    </div>
                    <div className="text-right">
                      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Ausgaben:</span>
                      <span className="font-medium">$4,680</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Termine:</span>
                      <span className="font-medium">12 abgeschlossen</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Zufriedenheit:</span>
                      <div className="flex items-center">
                        <StarIcon className="h-4 w-4 text-yellow-400 mr-1" />
                        <span>4.8</span>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">VIP-Ready:</span>
                      <span className="text-green-600 font-medium">Yes</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="flex space-x-2">
                      <button className="flex-1 bg-purple-600 text-white text-xs py-2 px-3 rounded-lg hover:bg-purple-700">
                        VIP Upgrade
                      </button>
                      <button className="flex-1 bg-gray-100 text-gray-700 text-xs py-2 px-3 rounded-lg hover:bg-gray-200">
                        Details
                      </button>
                    </div>
                  </div>
                </div>

                {/* Regular Customer 4 */}
                <div className="bg-white rounded-xl p-6 shadow-lg border hover:shadow-xl transition-all">
                  <div className="flex items-center mb-4">
                    <div className="h-12 w-12 bg-gradient-to-r from-pink-400 to-pink-600 rounded-full flex items-center justify-center text-white font-medium">
                      ST
                    </div>
                    <div className="ml-4 flex-1">
                      <h4 className="font-semibold text-gray-900">Sophie Turner</h4>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                        Occasional Customer
                      </span>
                    </div>
                    <div className="text-right">
                      <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Ausgaben:</span>
                      <span className="font-medium">$680</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Termine:</span>
                      <span className="font-medium">2 abgeschlossen</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Letzter Besuch:</span>
                      <span className="text-gray-500">2023-11-20</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Status:</span>
                      <span className="text-yellow-600 font-medium">Re-Engagement</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="flex space-x-2">
                      <button className="flex-1 bg-pink-600 text-white text-xs py-2 px-3 rounded-lg hover:bg-pink-700">
                        Reactivate
                      </button>
                      <button className="flex-1 bg-gray-100 text-gray-700 text-xs py-2 px-3 rounded-lg hover:bg-gray-200">
                        History
                      </button>
                    </div>
                  </div>
                </div>

                {/* Regular Customer 5 */}
                <div className="bg-white rounded-xl p-6 shadow-lg border hover:shadow-xl transition-all">
                  <div className="flex items-center mb-4">
                    <div className="h-12 w-12 bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-full flex items-center justify-center text-white font-medium">
                      KL
                    </div>
                    <div className="ml-4 flex-1">
                      <h4 className="font-semibold text-gray-900">Katie Lewis</h4>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                        Regular
                      </span>
                    </div>
                    <div className="text-right">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Ausgaben:</span>
                      <span className="font-medium">$1,960</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Termine:</span>
                      <span className="font-medium">5 abgeschlossen</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Next Appointment:</span>
                      <span className="text-blue-600">2024-02-05</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Preference:</span>
                      <span className="text-gray-500">Botox</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="flex space-x-2">
                      <button className="flex-1 bg-indigo-600 text-white text-xs py-2 px-3 rounded-lg hover:bg-indigo-700">
                        View Appointment
                      </button>
                      <button className="flex-1 bg-gray-100 text-gray-700 text-xs py-2 px-3 rounded-lg hover:bg-gray-200">
                        Contact
                      </button>
                    </div>
                  </div>
                </div>

                {/* Regular Customer 6 */}
                <div className="bg-white rounded-xl p-6 shadow-lg border hover:shadow-xl transition-all">
                  <div className="flex items-center mb-4">
                    <div className="h-12 w-12 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full flex items-center justify-center text-white font-medium">
                      RM
                    </div>
                    <div className="ml-4 flex-1">
                      <h4 className="font-semibold text-gray-900">Rachel Miller</h4>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                        Follow-up nötig
                      </span>
                    </div>
                    <div className="text-right">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Ausgaben:</span>
                      <span className="font-medium">$1,120</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Termine:</span>
                      <span className="font-medium">3 abgeschlossen</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Letztes Treatment:</span>
                      <span className="text-gray-500">Juvederm</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Follow-up:</span>
                      <span className="text-red-600 font-medium">Überfällig</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="flex space-x-2">
                      <button className="flex-1 bg-red-600 text-white text-xs py-2 px-3 rounded-lg hover:bg-red-700">
                        Contact Immediately
                      </button>
                      <button className="flex-1 bg-gray-100 text-gray-700 text-xs py-2 px-3 rounded-lg hover:bg-gray-200">
                        Notes
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions for Regular Customers */}
              <div className="bg-white rounded-xl p-6 shadow-lg border">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                <div className="grid md:grid-cols-4 gap-4">
                  <button className="flex items-center space-x-2 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-all">
                    <PaperAirplaneIcon className="h-5 w-5 text-blue-600" />
                    <span className="font-medium text-blue-900">Bulk Email senden</span>
                  </button>
                  <button className="flex items-center space-x-2 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-all">
                    <TrophyIcon className="h-5 w-5 text-green-600" />
                    <span className="font-medium text-green-900">VIP Upgrades</span>
                  </button>
                  <button className="flex items-center space-x-2 p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-all">
                    <ExclamationTriangleIcon className="h-5 w-5 text-purple-600" />
                    <span className="font-medium text-purple-900">Follow-up Liste</span>
                  </button>
                  <button className="flex items-center space-x-2 p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-all">
                    <LightBulbIcon className="h-5 w-5 text-orange-600" />
                    <span className="font-medium text-orange-900">Reaktivierung</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Campaign Management */}
          {activeTab === 'campaigns' && (
            <div className="space-y-8">
              
              {/* Campaign Stats */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-lg border text-center">
                  <PaperAirplaneIcon className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <div className="text-3xl font-light text-gray-900 mb-1">12</div>
                  <div className="text-sm text-gray-600">Aktive Kampagnen</div>
                  <div className="text-sm text-blue-600 mt-1">24/7 Automatisiert</div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-lg border text-center">
                  <EyeIcon className="h-8 w-8 text-green-600 mx-auto mb-3" />
                  <div className="text-3xl font-light text-gray-900 mb-1">68.4%</div>
                  <div className="text-sm text-gray-600">Öffnungsrate</div>
                  <div className="text-sm text-green-600 mt-1">+12% vs. Branche</div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-lg border text-center">
                  <CurrencyDollarIcon className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                  <div className="text-3xl font-light text-gray-900 mb-1">$43.4K</div>
                  <div className="text-sm text-gray-600">Campaign Revenue</div>
                  <div className="text-sm text-purple-600 mt-1">ROI: 420%</div>
                </div>
              </div>

              {/* Sample Campaigns */}
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-lg border">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">VIP Platinum Appreciation</h4>
                      <div className="flex items-center space-x-4 mt-1">
                        <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">Active</span>
                        <span className="text-sm text-gray-600">Retention Campaign</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-semibold text-green-600">$15,400</div>
                      <div className="text-sm text-gray-500">Revenue</div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-light text-gray-900">45</div>
                      <div className="text-xs text-gray-500">Sent</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-light text-gray-900">38</div>
                      <div className="text-xs text-gray-500">Opened</div>
                      <div className="text-xs text-green-600">84.4%</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-light text-gray-900">28</div>
                      <div className="text-xs text-gray-500">Clicked</div>
                      <div className="text-xs text-blue-600">73.7%</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-light text-gray-900">12</div>
                      <div className="text-xs text-gray-500">Converted</div>
                      <div className="text-xs text-purple-600">42.9%</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-lg border">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">New Year Beauty Goals</h4>
                      <div className="flex items-center space-x-4 mt-1">
                        <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">Automated</span>
                        <span className="text-sm text-gray-600">Acquisition Campaign</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-semibold text-green-600">$23,800</div>
                      <div className="text-sm text-gray-500">Revenue</div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-light text-gray-900">1,250</div>
                      <div className="text-xs text-gray-500">Sent</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-light text-gray-900">892</div>
                      <div className="text-xs text-gray-500">Opened</div>
                      <div className="text-xs text-green-600">71.4%</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-light text-gray-900">234</div>
                      <div className="text-xs text-gray-500">Clicked</div>
                      <div className="text-xs text-blue-600">26.2%</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-light text-gray-900">67</div>
                      <div className="text-xs text-gray-500">Converted</div>
                      <div className="text-xs text-purple-600">28.6%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Analytics Dashboard */}
          {activeTab === 'analytics' && (
            <div className="space-y-8">
              
              {/* Performance Overview */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl p-6 shadow-lg border">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Customer Lifetime Value</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <TrophyIcon className="h-4 w-4 text-purple-600 mr-2" />
                        <span className="font-medium text-gray-900">Platinum</span>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-gray-900">$15,200</div>
                        <div className="text-sm text-gray-500">Durchschnitt</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <StarIcon className="h-4 w-4 text-yellow-600 mr-2" />
                        <span className="font-medium text-gray-900">Gold</span>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-gray-900">$8,400</div>
                        <div className="text-sm text-gray-500">Durchschnitt</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <ShieldCheckIcon className="h-4 w-4 text-gray-600 mr-2" />
                        <span className="font-medium text-gray-900">Silver</span>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-gray-900">$3,800</div>
                        <div className="text-sm text-gray-500">Durchschnitt</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-lg border">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Retention Rates</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-900">30 Days</span>
                      <div className="flex items-center space-x-3">
                        <div className="w-24 bg-gray-200 rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{width: '95%'}}></div>
                        </div>
                        <span className="font-semibold text-gray-900">95%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-900">90 Days</span>
                      <div className="flex items-center space-x-3">
                        <div className="w-24 bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-500 h-2 rounded-full" style={{width: '87%'}}></div>
                        </div>
                        <span className="font-semibold text-gray-900">87%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-900">1 Year</span>
                      <div className="flex items-center space-x-3">
                        <div className="w-24 bg-gray-200 rounded-full h-2">
                          <div className="bg-purple-500 h-2 rounded-full" style={{width: '78%'}}></div>
                        </div>
                        <span className="font-semibold text-gray-900">78%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* AI Insights */}
              <div className="bg-white rounded-xl p-8 shadow-lg border">
                <div className="flex items-center mb-6">
                  <LightBulbIcon className="h-6 w-6 text-yellow-500 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">AI Insights & Recommendations</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="border border-green-200 rounded-lg p-4 bg-green-50">
                      <div className="flex items-center mb-2">
                        <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2" />
                        <span className="font-medium text-green-900">Upselling Opportunity</span>
                      </div>
                      <p className="text-sm text-green-800">
                        23 Gold customers show Platinum potential. Recommended action: Exclusive upgrade invitation.
                      </p>
                    </div>
                    
                    <div className="border border-blue-200 rounded-lg p-4 bg-blue-50">
                      <div className="flex items-center mb-2">
                        <InformationCircleIcon className="h-5 w-5 text-blue-600 mr-2" />
                        <span className="font-medium text-blue-900">Retention Alert</span>
                      </div>
                      <p className="text-sm text-blue-800">
                        12 customers haven't booked for 60+ days. Automatic re-engagement campaign started.
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="border border-purple-200 rounded-lg p-4 bg-purple-50">
                      <div className="flex items-center mb-2">
                        <SparklesIcon className="h-5 w-5 text-purple-600 mr-2" />
                        <span className="font-medium text-purple-900">Cross-Sell Potential</span>
                      </div>
                      <p className="text-sm text-purple-800">
                        Botox customers show 78% interest in Juvederm. Personalized offers are being prepared.
                      </p>
                    </div>
                    
                    <div className="border border-yellow-200 rounded-lg p-4 bg-yellow-50">
                      <div className="flex items-center mb-2">
                        <ExclamationTriangleIcon className="h-5 w-5 text-yellow-600 mr-2" />
                        <span className="font-medium text-yellow-900">Churn Risk</span>
                      </div>
                      <p className="text-sm text-yellow-800">
                        3 Platinum customers show churn risk. Immediate personal attention recommended.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Messages & Communication Center */}
          {activeTab === 'messages' && (
            <div className="space-y-8">
              
              {/* Message Overview Dashboard */}
              <div className="grid md:grid-cols-4 gap-6">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl p-6 shadow-lg border text-center transform hover:scale-105 transition-all">
                  <CalendarDaysIcon className="h-10 w-10 mx-auto mb-3 opacity-90" />
                  <div className="text-3xl font-bold mb-1">47</div>
                  <div className="text-sm opacity-90">Appointment Requests</div>
                  <div className="text-sm font-semibold mt-2 bg-white bg-opacity-20 rounded-full px-3 py-1">15 today</div>
                </div>
                
                <div className="bg-gradient-to-br from-red-500 to-red-600 text-white rounded-xl p-6 shadow-lg border text-center transform hover:scale-105 transition-all">
                  <ExclamationTriangleIcon className="h-10 w-10 mx-auto mb-3 opacity-90 animate-pulse" />
                  <div className="text-3xl font-bold mb-1">8</div>
                  <div className="text-sm opacity-90">Urgent Messages</div>
                  <div className="text-sm font-semibold mt-2 bg-white bg-opacity-20 rounded-full px-3 py-1">Action needed</div>
                </div>
                
                <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-xl p-6 shadow-lg border text-center transform hover:scale-105 transition-all">
                  <ChatBubbleBottomCenterTextIcon className="h-10 w-10 mx-auto mb-3 opacity-90" />
                  <div className="text-3xl font-bold mb-1">156</div>
                  <div className="text-sm opacity-90">General Inquiries</div>
                  <div className="text-sm font-semibold mt-2 bg-white bg-opacity-20 rounded-full px-3 py-1">+18% today</div>
                </div>
                
                <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 text-white rounded-xl p-6 shadow-lg border text-center transform hover:scale-105 transition-all">
                  <StarIcon className="h-10 w-10 mx-auto mb-3 opacity-90" />
                  <div className="text-3xl font-bold mb-1">23</div>
                  <div className="text-sm opacity-90">Reviews & Feedback</div>
                  <div className="text-sm font-semibold mt-2 bg-white bg-opacity-20 rounded-full px-3 py-1">4.8 ⭐ avg</div>
                </div>
              </div>

              {/* Priority Message Categories */}
              <div className="grid lg:grid-cols-2 gap-8">
                
                {/* Appointment Requests - Priority Section */}
                <div className="bg-white rounded-xl shadow-xl border border-blue-200">
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-6 rounded-t-xl">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <CalendarDaysIcon className="h-7 w-7" />
                        <h3 className="text-xl font-bold">📅 Appointment Requests</h3>
                      </div>
                      <span className="bg-white text-blue-700 px-4 py-2 rounded-full text-sm font-bold shadow-lg">47 pending</span>
                    </div>
                    <div className="mt-2 text-sm opacity-90">High priority booking requests requiring immediate attention</div>
                  </div>
                  
                  <div className="p-6 max-h-96 overflow-y-auto bg-gradient-to-b from-blue-50 to-white">
                    <div className="space-y-4">
                      {[
                        {
                          id: 1,
                          customer: 'Sarah Johnson',
                          type: 'New Appointment',
                          treatment: 'Botox Treatment',
                          message: 'Hi! I would like to book an appointment for a Botox treatment. Do you have availability next week? I prefer afternoons.',
                          preferredDate: 'Next week afternoons',
                          priority: 'high',
                          platform: 'email',
                          time: '15 min ago',
                          isUrgent: false,
                          phone: '+1 (555) 123-4567'
                        },
                        {
                          id: 2,
                          customer: 'Emma Rodriguez',
                          type: 'URGENT Appointment',
                          treatment: 'Juvederm Follow-up',
                          message: '🚨 URGENT: My lips are very swollen after the Juvederm treatment. Can I come in today? I\'m quite concerned.',
                          preferredDate: 'Today ASAP',
                          priority: 'urgent',
                          platform: 'sms',
                          time: '5 min ago',
                          isUrgent: true,
                          phone: '+1 (555) 987-6543'
                        },
                        {
                          id: 3,
                          customer: 'Maria Garcia',
                          type: 'Reschedule Request',
                          treatment: 'LATISSE Consultation',
                          message: 'Hi! I need to reschedule my appointment for tomorrow. Family emergency. When would be the next available slot?',
                          preferredDate: 'Flexible',
                          priority: 'medium',
                          platform: 'instagram',
                          time: '1 hour ago',
                          isUrgent: false,
                          phone: '+1 (555) 456-7890'
                        },
                        {
                          id: 4,
                          customer: 'Jennifer Kim',
                          type: 'Follow-up Appointment',
                          treatment: 'Botox Touch-up',
                          message: 'Hello! It\'s time for my 3-month Botox touch-up. When do you have availability? I\'m flexible with timing.',
                          preferredDate: 'This week',
                          priority: 'medium',
                          platform: 'email',
                          time: '2 hours ago',
                          isUrgent: false,
                          phone: '+1 (555) 234-5678'
                        },
                        {
                          id: 5,
                          customer: 'Lisa Chen',
                          type: 'Initial Consultation',
                          treatment: 'Anti-Aging Consultation',
                          message: 'I\'m 35 and interested in an anti-aging consultation. What treatments would you recommend? I\'m new to cosmetic procedures.',
                          preferredDate: 'Next week',
                          priority: 'low',
                          platform: 'facebook',
                          time: '3 hours ago',
                          isUrgent: false,
                          phone: '+1 (555) 345-6789'
                        },
                        {
                          id: 6,
                          customer: 'Michael Torres',
                          type: 'Same Day Booking',
                          treatment: 'Emergency Consultation',
                          message: 'Do you have any cancellations today? I had a reaction to another clinic\'s treatment and need professional advice ASAP.',
                          preferredDate: 'Today',
                          priority: 'urgent',
                          platform: 'phone',
                          time: '45 min ago',
                          isUrgent: true,
                          phone: '+1 (555) 567-8901'
                        }
                      ].map((appointment) => (
                        <div
                          key={appointment.id}
                          className={`p-5 rounded-xl border-l-4 transition-all hover:shadow-lg cursor-pointer transform hover:scale-[1.02] ${
                            appointment.isUrgent 
                              ? 'border-l-red-500 bg-gradient-to-r from-red-50 to-red-100 hover:from-red-100 hover:to-red-200 shadow-red-200' 
                              : appointment.priority === 'high'
                              ? 'border-l-blue-500 bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 shadow-blue-200'
                              : 'border-l-indigo-300 bg-gradient-to-r from-gray-50 to-indigo-50 hover:from-indigo-50 hover:to-indigo-100'
                          }`}
                        >
                          <div className="flex items-start space-x-4">
                            <div className={`w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg ${
                              appointment.platform === 'email' ? 'bg-gradient-to-r from-blue-500 to-blue-600' : 
                              appointment.platform === 'sms' ? 'bg-gradient-to-r from-green-500 to-green-600' :
                              appointment.platform === 'instagram' ? 'bg-gradient-to-r from-pink-500 to-pink-600' :
                              appointment.platform === 'facebook' ? 'bg-gradient-to-r from-blue-600 to-blue-700' : 
                              appointment.platform === 'phone' ? 'bg-gradient-to-r from-purple-500 to-purple-600' : 'bg-gray-500'
                            }`}>
                              {appointment.customer.split(' ').map(n => n[0]).join('')}
                            </div>
                            
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between mb-3">
                                <div>
                                  <h4 className="font-bold text-gray-900 text-lg">{appointment.customer}</h4>
                                  <div className="text-xs text-gray-600 font-medium">{appointment.phone}</div>
                                </div>
                                <span className="text-xs text-gray-500 bg-white px-3 py-1 rounded-full shadow">{appointment.time}</span>
                              </div>
                              
                              <div className="flex flex-wrap gap-2 mb-3">
                                <span className={`px-3 py-1 rounded-full text-xs font-bold shadow-sm ${
                                  appointment.isUrgent 
                                    ? 'bg-red-500 text-white animate-pulse' 
                                    : appointment.priority === 'high'
                                    ? 'bg-blue-500 text-white'
                                    : appointment.priority === 'medium'
                                    ? 'bg-indigo-500 text-white'
                                    : 'bg-gray-500 text-white'
                                }`}>
                                  {appointment.isUrgent ? '🚨 URGENT' : appointment.type}
                                </span>
                                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium shadow-sm">
                                  💉 {appointment.treatment}
                                </span>
                                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium shadow-sm">
                                  📅 {appointment.preferredDate}
                                </span>
                              </div>
                              
                              <p className="text-sm text-gray-700 mb-4 leading-relaxed bg-white p-3 rounded-lg shadow-sm">{appointment.message}</p>
                              
                              <div className="flex flex-wrap gap-2">
                                <button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-4 py-2 rounded-lg text-xs font-medium shadow-md transform hover:scale-105 transition-all">
                                  ✅ Confirm Appointment
                                </button>
                                <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-4 py-2 rounded-lg text-xs font-medium shadow-md transform hover:scale-105 transition-all">
                                  📞 Call Now
                                </button>
                                <button className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-4 py-2 rounded-lg text-xs font-medium shadow-md transform hover:scale-105 transition-all">
                                  📅 Open Calendar
                                </button>
                                {appointment.isUrgent && (
                                  <button className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-4 py-2 rounded-lg text-xs font-medium shadow-md animate-pulse">
                                    🚨 Emergency Slot
                                  </button>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Emergency & Urgent Messages */}
                <div className="bg-white rounded-xl shadow-xl border border-red-200">
                  <div className="bg-gradient-to-r from-red-600 to-pink-700 text-white p-6 rounded-t-xl">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <ExclamationTriangleIcon className="h-7 w-7 animate-pulse" />
                        <h3 className="text-xl font-bold">🚨 Emergency & Urgent Messages</h3>
                      </div>
                      <span className="bg-white text-red-700 px-4 py-2 rounded-full text-sm font-bold animate-pulse shadow-lg">8 critical</span>
                    </div>
                    <div className="mt-2 text-sm opacity-90">Critical issues requiring immediate medical attention</div>
                  </div>
                  
                  <div className="p-6 max-h-96 overflow-y-auto bg-gradient-to-b from-red-50 to-white">
                    <div className="space-y-4">
                      {[
                        {
                          id: 1,
                          customer: 'Anna Schmidt',
                          type: 'Allergic Reaction',
                          message: 'HELP! I\'m having an allergic reaction to LATISSE. My eyes are red and swollen. What should I do?',
                          platform: 'sms',
                          time: '2 min ago',
                          severity: 'critical',
                          phone: '+1 (555) 911-1234'
                        },
                        {
                          id: 2,
                          customer: 'David Miller',
                          type: 'Post-Treatment Complication',
                          message: 'After yesterday\'s Botox treatment I have severe headaches and nausea. Is this normal? I\'m very concerned.',
                          platform: 'email',
                          time: '8 min ago',
                          severity: 'high',
                          phone: '+1 (555) 222-3456'
                        },
                        {
                          id: 3,
                          customer: '@beauty_queen_2024',
                          type: 'Persistent Side Effect',
                          message: 'My Juvederm treatment was 3 days ago and I still have severe pain and unusual swelling. Can you help?',
                          platform: 'instagram',
                          time: '20 min ago',
                          severity: 'high',
                          phone: '+1 (555) 333-4567'
                        },
                        {
                          id: 4,
                          customer: 'Patricia Wong',
                          type: 'Emergency Consultation',
                          message: 'I had a Botox treatment at another clinic yesterday and my face is completely numb. I need help ASAP!',
                          platform: 'phone',
                          time: '35 min ago',
                          severity: 'critical',
                          phone: '+1 (555) 444-5678'
                        }
                      ].map((emergency) => (
                        <div
                          key={emergency.id}
                          className={`p-5 rounded-xl border-l-4 transition-all hover:shadow-lg cursor-pointer transform hover:scale-[1.02] ${
                            emergency.severity === 'critical' 
                              ? 'border-l-red-600 bg-gradient-to-r from-red-100 to-red-200 hover:from-red-200 hover:to-red-300 animate-pulse shadow-red-300' 
                              : 'border-l-orange-500 bg-gradient-to-r from-orange-50 to-orange-100 hover:from-orange-100 hover:to-orange-200 shadow-orange-200'
                          }`}
                        >
                          <div className="flex items-start space-x-4">
                            <div className={`w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg ${
                              emergency.severity === 'critical' 
                                ? 'bg-gradient-to-r from-red-600 to-red-700 animate-pulse' 
                                : 'bg-gradient-to-r from-orange-500 to-orange-600'
                            }`}>
                              {emergency.customer.startsWith('@') 
                                ? emergency.customer.substring(1, 3).toUpperCase()
                                : emergency.customer.split(' ').map(n => n[0]).join('')
                              }
                            </div>
                            
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between mb-3">
                                <div>
                                  <h4 className="font-bold text-gray-900 text-lg">{emergency.customer}</h4>
                                  <div className="text-xs text-gray-600 font-medium">{emergency.phone}</div>
                                </div>
                                <span className="text-xs text-gray-500 bg-white px-3 py-1 rounded-full shadow">{emergency.time}</span>
                              </div>
                              
                              <div className="flex flex-wrap gap-2 mb-3">
                                <span className={`px-3 py-1 rounded-full text-xs font-bold text-white shadow-sm ${
                                  emergency.severity === 'critical' 
                                    ? 'bg-red-600 animate-pulse' 
                                    : 'bg-orange-500'
                                }`}>
                                  {emergency.severity === 'critical' ? '🚨 CRITICAL' : '⚠️ URGENT'}
                                </span>
                                <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-xs font-medium shadow-sm">
                                  🏥 {emergency.type}
                                </span>
                              </div>
                              
                              <p className="text-sm text-gray-700 mb-4 font-medium leading-relaxed bg-white p-3 rounded-lg shadow-sm border border-red-100">{emergency.message}</p>
                              
                              <div className="flex flex-wrap gap-2">
                                <button className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-4 py-2 rounded-lg text-xs font-bold shadow-md animate-pulse">
                                  🚨 Call Immediately
                                </button>
                                <button className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-4 py-2 rounded-lg text-xs font-medium shadow-md">
                                  👨‍⚕️ Doctor Consult
                                </button>
                                <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-4 py-2 rounded-lg text-xs font-medium shadow-md">
                                  📋 Create Report
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* General Inquiries & Reviews */}
              <div className="grid lg:grid-cols-2 gap-8">
                
                {/* General Inquiries */}
                <div className="bg-white rounded-xl shadow-xl border border-green-200">
                  <div className="bg-gradient-to-r from-green-600 to-teal-700 text-white p-6 rounded-t-xl">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <ChatBubbleBottomCenterTextIcon className="h-7 w-7" />
                        <h3 className="text-xl font-bold">💬 General Inquiries</h3>
                      </div>
                      <span className="bg-white text-green-700 px-4 py-2 rounded-full text-sm font-bold shadow-lg">156 active</span>
                    </div>
                    <div className="mt-2 text-sm opacity-90">Customer questions and consultation requests</div>
                  </div>
                  
                  <div className="p-6 max-h-96 overflow-y-auto bg-gradient-to-b from-green-50 to-white">
                    <div className="space-y-4">
                      {[
                        {
                          id: 1,
                          customer: 'Sophie Wagner',
                          type: 'Consultation Request',
                          message: 'Hello! I\'m 28 and interested in preventive anti-aging treatments. What would you recommend for someone my age?',
                          platform: 'email',
                          time: '45 min ago',
                          phone: '+1 (555) 123-9876'
                        },
                        {
                          id: 2,
                          customer: '@skincare_enthusiast',
                          type: 'Product Question',
                          message: 'How long does it take for LATISSE to work? I\'ve been using it for 3 weeks and don\'t see any changes yet.',
                          platform: 'instagram',
                          time: '1 hour ago',
                          phone: '+1 (555) 234-8765'
                        },
                        {
                          id: 3,
                          customer: 'Michael Brown',
                          type: 'Pricing Inquiry',
                          message: 'Could you please send me the pricing for Botox and Juvederm treatments? Do you offer any package deals?',
                          platform: 'facebook',
                          time: '2 hours ago',
                          phone: '+1 (555) 345-7654'
                        },
                        {
                          id: 4,
                          customer: 'Amanda Taylor',
                          type: 'Treatment Comparison',
                          message: 'I\'m trying to decide between Botox and Dysport. What are the main differences? Which would be better for forehead lines?',
                          platform: 'email',
                          time: '3 hours ago',
                          phone: '+1 (555) 456-6543'
                        }
                      ].map((inquiry) => (
                        <div
                          key={inquiry.id}
                          className="p-5 rounded-xl border border-green-200 hover:shadow-lg transition-all cursor-pointer transform hover:scale-[1.02] bg-gradient-to-r from-green-50 to-teal-50 hover:from-green-100 hover:to-teal-100"
                        >
                          <div className="flex items-start space-x-4">
                            <div className={`w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg ${
                              inquiry.platform === 'email' ? 'bg-gradient-to-r from-blue-500 to-blue-600' : 
                              inquiry.platform === 'instagram' ? 'bg-gradient-to-r from-pink-500 to-pink-600' :
                              'bg-gradient-to-r from-blue-600 to-blue-700'
                            }`}>
                              {inquiry.customer.startsWith('@') 
                                ? inquiry.customer.substring(1, 3).toUpperCase()
                                : inquiry.customer.split(' ').map(n => n[0]).join('')
                              }
                            </div>
                            
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between mb-3">
                                <div>
                                  <h4 className="font-bold text-gray-900 text-lg">{inquiry.customer}</h4>
                                  <div className="text-xs text-gray-600 font-medium">{inquiry.phone}</div>
                                </div>
                                <span className="text-xs text-gray-500 bg-white px-3 py-1 rounded-full shadow">{inquiry.time}</span>
                              </div>
                              
                              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium mb-3 inline-block shadow-sm">
                                💬 {inquiry.type}
                              </span>
                              
                              <p className="text-sm text-gray-700 mb-4 leading-relaxed bg-white p-3 rounded-lg shadow-sm">{inquiry.message}</p>
                              
                              <div className="flex gap-2">
                                <button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-4 py-2 rounded-lg text-xs font-medium shadow-md transform hover:scale-105 transition-all">
                                  ✅ Reply Now
                                </button>
                                <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-4 py-2 rounded-lg text-xs font-medium shadow-md transform hover:scale-105 transition-all">
                                  📞 Call
                                </button>
                                <button className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-4 py-2 rounded-lg text-xs font-medium shadow-md transform hover:scale-105 transition-all">
                                  📅 Schedule
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Reviews & Feedback */}
                <div className="bg-white rounded-xl shadow-xl border border-yellow-200">
                  <div className="bg-gradient-to-r from-yellow-600 to-orange-700 text-white p-6 rounded-t-xl">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <StarIcon className="h-7 w-7" />
                        <h3 className="text-xl font-bold">⭐ Reviews & Feedback</h3>
                      </div>
                      <span className="bg-white text-yellow-700 px-4 py-2 rounded-full text-sm font-bold shadow-lg">4.8 ⭐</span>
                    </div>
                    <div className="mt-2 text-sm opacity-90">Customer testimonials and treatment reviews</div>
                  </div>
                  
                  <div className="p-6 max-h-96 overflow-y-auto bg-gradient-to-b from-yellow-50 to-white">
                    <div className="space-y-4">
                      {[
                        {
                          id: 1,
                          customer: 'Laura Mitchell',
                          rating: 5,
                          message: '⭐⭐⭐⭐⭐ Fantastic Botox treatment! The results are perfect and very natural. Thank you so much!',
                          platform: 'google',
                          time: '25 min ago',
                          phone: '+1 (555) 678-9012'
                        },
                        {
                          id: 2,
                          customer: '@happy_customer_2024',
                          rating: 5,
                          message: 'Best LATISSE consultation ever! My lashes are now so long and thick. Absolutely recommend! 💕',
                          platform: 'instagram',
                          time: '1 hour ago',
                          phone: '+1 (555) 789-0123'
                        },
                        {
                          id: 3,
                          customer: 'Robert Johnson',
                          rating: 4,
                          message: 'Very professional Juvederm treatment. Minor swelling was gone after 2 days. Will come back!',
                          platform: 'facebook',
                          time: '2 hours ago',
                          phone: '+1 (555) 890-1234'
                        },
                        {
                          id: 4,
                          customer: 'Catherine Lee',
                          rating: 5,
                          message: 'Amazing results from my anti-aging consultation! The staff is so knowledgeable and caring. 5 stars!',
                          platform: 'google',
                          time: '4 hours ago',
                          phone: '+1 (555) 901-2345'
                        }
                      ].map((review) => (
                        <div
                          key={review.id}
                          className="p-5 rounded-xl border border-yellow-200 hover:shadow-lg transition-all cursor-pointer bg-gradient-to-r from-yellow-50 to-orange-50 hover:from-yellow-100 hover:to-orange-100 transform hover:scale-[1.02]"
                        >
                          <div className="flex items-start space-x-4">
                            <div className="w-14 h-14 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                              {review.customer.startsWith('@') 
                                ? review.customer.substring(1, 3).toUpperCase()
                                : review.customer.split(' ').map(n => n[0]).join('')
                              }
                            </div>
                            
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between mb-3">
                                <div>
                                  <h4 className="font-bold text-gray-900 text-lg">{review.customer}</h4>
                                  <div className="text-xs text-gray-600 font-medium">{review.phone}</div>
                                </div>
                                <span className="text-xs text-gray-500 bg-white px-3 py-1 rounded-full shadow">{review.time}</span>
                              </div>
                              
                              <div className="flex items-center gap-2 mb-3">
                                <div className="flex">
                                  {[...Array(5)].map((_, i) => (
                                    <StarIcon
                                      key={i}
                                      className={`h-5 w-5 ${
                                        i < review.rating ? 'text-yellow-400' : 'text-gray-300'
                                      }`}
                                    />
                                  ))}
                                </div>
                                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium shadow-sm">
                                  📍 {review.platform}
                                </span>
                              </div>
                              
                              <p className="text-sm text-gray-700 mb-4 leading-relaxed bg-white p-3 rounded-lg shadow-sm">{review.message}</p>
                              
                              <div className="flex gap-2">
                                <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white px-4 py-2 rounded-lg text-xs font-medium shadow-md transform hover:scale-105 transition-all">
                                  💖 Thank Customer
                                </button>
                                <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-4 py-2 rounded-lg text-xs font-medium shadow-md transform hover:scale-105 transition-all">
                                  📤 Share Review
                                </button>
                                <button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-4 py-2 rounded-lg text-xs font-medium shadow-md transform hover:scale-105 transition-all">
                                  📞 Follow Up
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions Hub */}
              <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl shadow-xl border border-blue-200 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="text-2xl mr-3">⚡</span>
                  Quick Actions Hub
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white p-6 rounded-xl text-left transition-all transform hover:scale-105 shadow-lg">
                    <div className="flex items-center space-x-4">
                      <CalendarDaysIcon className="h-10 w-10 opacity-90" />
                      <div>
                        <div className="font-bold text-lg">📅 Open Calendar</div>
                        <div className="text-sm opacity-90">View available appointments</div>
                      </div>
                    </div>
                  </button>
                  
                  <button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-6 rounded-xl text-left transition-all transform hover:scale-105 shadow-lg">
                    <div className="flex items-center space-x-4">
                      <DocumentTextIcon className="h-10 w-10 opacity-90" />
                      <div>
                        <div className="font-bold text-lg">📝 Message Templates</div>
                        <div className="text-sm opacity-90">Pre-written responses</div>
                      </div>
                    </div>
                  </button>
                  
                  <button className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white p-6 rounded-xl text-left transition-all transform hover:scale-105 shadow-lg">
                    <div className="flex items-center space-x-4">
                      <ChartBarIcon className="h-10 w-10 opacity-90" />
                      <div>
                        <div className="font-bold text-lg">📊 Message Analytics</div>
                        <div className="text-sm opacity-90">View performance stats</div>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* AI Butler Chat Modal */}
          {aiChatOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white rounded-xl shadow-2xl w-full max-w-md mx-4">
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <SparklesIcon className="h-6 w-6 text-blue-600 mr-2" />
                      <h3 className="text-lg font-semibold text-gray-900">AI Butler</h3>
                    </div>
                    <button
                      onClick={() => setAiChatOpen(false)}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      ×
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-gray-900">Customer birthday today</span>
                        <span className="text-xs text-gray-500">09:30</span>
                      </div>
                                              <p className="text-sm text-gray-600 mb-2">Sarah Johnson has a birthday today - automatic birthday wishes with 15% discount code sent</p>
                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Gift voucher created</span>
                    </div>
                    
                    <div className="border-l-4 border-green-500 pl-4">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-gray-900">Upselling opportunity detected</span>
                        <span className="text-xs text-gray-500">11:15</span>
                      </div>
                                              <p className="text-sm text-gray-600 mb-2">Emma Wilson shows interest in Juvederm - optimal time for consultation</p>
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Consultation appointment suggested</span>
                    </div>
                  </div>
                </div>
                <div className="p-6 border-t border-gray-200">
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      placeholder="Ask the AI Butler..."
                      className="flex-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 