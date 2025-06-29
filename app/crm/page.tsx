'use client'

import React, { useState } from 'react'
import Navigation from '../../components/Navigation'
import { 
  EnvelopeIcon,
  FireIcon,
  StarIcon,
  BellIcon,
  ChatBubbleBottomCenterTextIcon,
  MagnifyingGlassIcon,
  ArrowUpIcon,
  PhoneIcon,
  CalendarDaysIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline'

export default function MessageInbox() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedMessage, setSelectedMessage] = useState<number | null>(null)
  const [replyText, setReplyText] = useState('')
  const [replyMethod, setReplyMethod] = useState<'sms' | 'email' | 'whatsapp'>('email')
  const [searchQuery, setSearchQuery] = useState('')

  // Sample messages data
  const messages = [
    {
      id: 1,
      customer: 'Sarah Johnson',
      platform: 'sms',
      platformIcon: '📱',
      message: 'Emergency cancellation needed for tomorrow\'s Botox appointment due to family emergency. Please contact me urgently.',
      time: '2 min ago',
      priority: 'urgent',
      isVip: true,
      unread: true,
      avatar: 'SJ',
      phone: '+1 (555) 123-4567',
      email: 'sarah.johnson@email.com',
      appointmentDate: '2024-01-15',
      lastTreatment: 'Botox - Forehead & Crows feet'
    },
    {
      id: 2,
      customer: 'Alexandra Williams',
      platform: 'email',
      platformIcon: '📧',
      message: 'Hello! I\'m new to LA Skin and would love to book my first consultation for anti-aging treatments. I\'ve heard amazing things about your Botox and filler work.',
      time: '8 min ago',
      priority: 'normal',
      isVip: false,
      unread: true,
      avatar: 'AW',
      phone: '+1 (555) 234-5678',
      email: 'alexandra.williams@email.com',
      appointmentDate: null,
      lastTreatment: 'New Customer'
    },
    {
      id: 3,
      customer: 'Jennifer Kim',
      platform: 'whatsapp',
      platformIcon: '💬',
      message: 'Experiencing unusual swelling after yesterday\'s LATISSE consultation. Should I be concerned? Please advise next steps.',
      time: '15 min ago',
      priority: 'urgent',
      isVip: true,
      unread: true,
      avatar: 'JK',
      phone: '+1 (555) 345-6789',
      email: 'jennifer.kim@email.com',
      appointmentDate: '2024-01-12',
      lastTreatment: 'LATISSE Consultation'
    },
    {
      id: 4,
      customer: 'Maria Garcia',
      platform: 'instagram',
      platformIcon: '📸',
      message: 'Wedding emergency! Need Botox touch-up this weekend. Are you available for urgent appointments?',
      time: '25 min ago',
      priority: 'high',
      isVip: true,
      unread: true,
      avatar: 'MG',
      phone: '+1 (555) 456-7890',
      email: 'maria.garcia@email.com',
      appointmentDate: '2024-01-20',
      lastTreatment: 'Botox & Juvederm'
    }
  ]

  const filteredMessages = messages.filter(msg => {
    if (activeFilter === 'vip' && !msg.isVip) return false
    if (activeFilter === 'urgent' && msg.priority !== 'urgent') return false
    if (activeFilter === 'unread' && !msg.unread) return false
    if (activeFilter === 'sms' && msg.platform !== 'sms') return false
    if (activeFilter === 'email' && msg.platform !== 'email') return false
    if (activeFilter === 'whatsapp' && msg.platform !== 'whatsapp') return false
    if (searchQuery && !msg.customer.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !msg.message.toLowerCase().includes(searchQuery.toLowerCase())) return false
    return true
  })

  const urgentCount = messages.filter(m => m.priority === 'urgent').length
  const vipCount = messages.filter(m => m.isVip).length
  const unreadCount = messages.filter(m => m.unread).length

  const handleReply = (messageId: number) => {
    const message = messages.find(m => m.id === messageId)
    if (!message) return

    console.log(`Sending ${replyMethod} to ${message.customer}: ${replyText}`)
    setReplyText('')
    setSelectedMessage(null)
    alert(`${replyMethod.toUpperCase()} sent to ${message.customer}!`)
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent': return 'border-l-red-500 bg-red-50'
      case 'high': return 'border-l-orange-500 bg-orange-50'
      default: return 'border-l-purple-500 bg-purple-50'
    }
  }

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'urgent': return 'bg-red-500 text-white'
      case 'high': return 'bg-orange-500 text-white'
      default: return 'bg-purple-500 text-white'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">
      <Navigation />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <EnvelopeIcon className="h-8 w-8 text-purple-600 mr-3" />
              <h1 className="text-4xl font-light text-gray-900">Message Inbox</h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Central hub for all customer communications with direct reply capabilities
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white p-4 rounded-lg shadow-md border border-red-200">
              <div className="flex items-center">
                <FireIcon className="h-6 w-6 text-red-500 mr-2" />
                <div>
                  <div className="text-2xl font-bold text-red-600">{urgentCount}</div>
                  <div className="text-sm text-gray-600">Urgent</div>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md border border-yellow-200">
              <div className="flex items-center">
                <StarIcon className="h-6 w-6 text-yellow-500 mr-2" />
                <div>
                  <div className="text-2xl font-bold text-yellow-600">{vipCount}</div>
                  <div className="text-sm text-gray-600">VIP</div>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md border border-blue-200">
              <div className="flex items-center">
                <BellIcon className="h-6 w-6 text-blue-500 mr-2" />
                <div>
                  <div className="text-2xl font-bold text-blue-600">{unreadCount}</div>
                  <div className="text-sm text-gray-600">Unread</div>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md border border-purple-200">
              <div className="flex items-center">
                <ChatBubbleBottomCenterTextIcon className="h-6 w-6 text-purple-500 mr-2" />
                <div>
                  <div className="text-2xl font-bold text-purple-600">{messages.length}</div>
                  <div className="text-sm text-gray-600">Total</div>
                </div>
              </div>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search */}
              <div className="relative flex-1">
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search messages or customers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              {/* Filters */}
              <div className="flex flex-wrap gap-2">
                {[
                  { key: 'all', label: 'All', icon: '📋' },
                  { key: 'urgent', label: 'Urgent', icon: '🚨' },
                  { key: 'vip', label: 'VIP', icon: '👑' },
                  { key: 'unread', label: 'Unread', icon: '🔴' },
                  { key: 'sms', label: 'SMS', icon: '📱' },
                  { key: 'email', label: 'Email', icon: '📧' },
                  { key: 'whatsapp', label: 'WhatsApp', icon: '💬' }
                ].map(filter => (
                  <button
                    key={filter.key}
                    onClick={() => setActiveFilter(filter.key)}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      activeFilter === filter.key
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {filter.icon} {filter.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Messages List */}
          <div className="bg-white rounded-lg shadow-md">
            <div className="p-4 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">
                Messages ({filteredMessages.length})
              </h2>
            </div>

            <div className="divide-y divide-gray-200 max-h-[800px] overflow-y-auto">
              {filteredMessages.map((msg) => (
                <div key={msg.id} className={`p-4 border-l-4 ${getPriorityColor(msg.priority)} hover:bg-gray-50 transition-colors`}>
                  <div className="flex items-start space-x-4">
                    {/* Avatar */}
                    <div className="relative flex-shrink-0">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-medium ${
                        msg.priority === 'urgent' ? 'bg-gradient-to-r from-red-500 to-pink-500' : 
                        msg.isVip ? 'bg-gradient-to-r from-yellow-500 to-orange-500' :
                        'bg-gradient-to-r from-purple-500 to-indigo-500'
                      }`}>
                        {msg.avatar}
                        {msg.isVip && (
                          <StarIcon className="absolute -top-1 -right-1 h-4 w-4 text-yellow-400" />
                        )}
                        {msg.unread && (
                          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Message Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <h3 className="font-semibold text-gray-900">{msg.customer}</h3>
                          {msg.isVip && (
                            <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">
                              VIP
                            </span>
                          )}
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityBadge(msg.priority)}`}>
                            {msg.priority.toUpperCase()}
                          </span>
                          <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">
                            {msg.platformIcon} {msg.platform.toUpperCase()}
                          </span>
                        </div>
                        <span className="text-xs text-gray-500 font-medium">{msg.time}</span>
                      </div>

                      <p className="text-sm text-gray-700 mb-3 leading-relaxed">{msg.message}</p>

                      {/* Customer Info */}
                      <div className="bg-gray-50 p-3 rounded-lg mb-3">
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          <div><strong>Phone:</strong> {msg.phone}</div>
                          <div><strong>Email:</strong> {msg.email}</div>
                          <div><strong>Last Treatment:</strong> {msg.lastTreatment}</div>
                          <div><strong>Next Appointment:</strong> {msg.appointmentDate || 'None scheduled'}</div>
                        </div>
                      </div>

                      {/* Quick Reply Section */}
                      {selectedMessage === msg.id ? (
                        <div className="border border-purple-200 rounded-lg p-4 bg-purple-50">
                          <div className="flex items-center space-x-2 mb-3">
                            <span className="text-sm font-medium">Reply via:</span>
                            <div className="flex space-x-2">
                              <button
                                onClick={() => setReplyMethod('sms')}
                                className={`px-3 py-1 rounded text-xs font-medium ${
                                  replyMethod === 'sms' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'
                                }`}
                              >
                                📱 SMS
                              </button>
                              <button
                                onClick={() => setReplyMethod('email')}
                                className={`px-3 py-1 rounded text-xs font-medium ${
                                  replyMethod === 'email' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
                                }`}
                              >
                                📧 Email
                              </button>
                              <button
                                onClick={() => setReplyMethod('whatsapp')}
                                className={`px-3 py-1 rounded text-xs font-medium ${
                                  replyMethod === 'whatsapp' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700'
                                }`}
                              >
                                💬 WhatsApp
                              </button>
                            </div>
                          </div>
                          <textarea
                            value={replyText}
                            onChange={(e) => setReplyText(e.target.value)}
                            placeholder={`Type your ${replyMethod} message...`}
                            className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            rows={3}
                          />
                          <div className="flex justify-end space-x-2 mt-3">
                            <button
                              onClick={() => setSelectedMessage(null)}
                              className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                            >
                              Cancel
                            </button>
                            <button
                              onClick={() => handleReply(msg.id)}
                              className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center"
                            >
                              <ArrowUpIcon className="h-4 w-4 mr-1" />
                              Send {replyMethod.toUpperCase()}
                            </button>
                          </div>
                        </div>
                      ) : (
                        /* Quick Actions */
                        <div className="flex flex-wrap gap-2">
                          <button
                            onClick={() => setSelectedMessage(msg.id)}
                            className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 rounded text-xs font-medium transition-colors flex items-center"
                          >
                            <ArrowUpIcon className="h-3 w-3 mr-1" />
                            Reply
                          </button>
                          <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-xs font-medium transition-colors flex items-center">
                            <PhoneIcon className="h-3 w-3 mr-1" />
                            Call
                          </button>
                          <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-xs font-medium transition-colors flex items-center">
                            <CalendarDaysIcon className="h-3 w-3 mr-1" />
                            Schedule
                          </button>
                          {msg.priority === 'urgent' && (
                            <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-xs font-medium transition-colors flex items-center">
                              <ExclamationTriangleIcon className="h-3 w-3 mr-1" />
                              Escalate
                            </button>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredMessages.length === 0 && (
              <div className="p-8 text-center">
                <EnvelopeIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No messages found</h3>
                <p className="text-gray-600">Try adjusting your filters or search query.</p>
              </div>
            )}
          </div>

          {/* Bulk Actions */}
          <div className="mt-6 bg-white rounded-lg shadow-md p-4">
            <div className="flex flex-wrap gap-3 justify-center">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                Mark All as Read
              </button>
              <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                Bulk Email Template
              </button>
              <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                Bulk SMS Template
              </button>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                Export Messages
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 