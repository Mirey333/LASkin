'use client'

import React, { useState, useRef, useEffect } from 'react'
import { 
  ChatBubbleLeftRightIcon,
  XMarkIcon,
  PaperAirplaneIcon,
  UserIcon,
  StarIcon,
  PhoneIcon,
  CalendarDaysIcon
} from '@heroicons/react/24/outline'

interface Message {
  id: number
  sender: 'user' | 'agent'
  text: string
  timestamp: Date
  agentName?: string
  agentAvatar?: string
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: 'agent',
      text: 'Hallo! Willkommen bei LA Skin Laboratories. Ich bin Maria, Ihre persönliche Beauty-Beraterin. Wie kann ich Ihnen heute helfen?',
      timestamp: new Date(),
      agentName: 'Maria Rodriguez',
      agentAvatar: 'MR'
    }
  ])
  const [inputMessage, setInputMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const simulateAgentResponse = (userMessage: string) => {
    setIsTyping(true)
    
    setTimeout(() => {
      let response = ''
      let agentName = 'Maria Rodriguez'
      let agentAvatar = 'MR'
      
      const lowerMessage = userMessage.toLowerCase()
      
      if (lowerMessage.includes('botox') || lowerMessage.includes('anti-aging')) {
        response = 'Botox® ist eine unserer beliebtesten Behandlungen! Wir bieten Premium-Botox-Behandlungen ab $480. Möchten Sie einen Beratungstermin vereinbaren?'
      } else if (lowerMessage.includes('juvederm') || lowerMessage.includes('filler')) {
        response = 'Juvéderm® ist perfekt für natürliche Volumen-Ergebnisse. Unsere Luxury-Behandlung kostet $650. Soll ich Ihnen unsere Standorte zeigen?'
      } else if (lowerMessage.includes('latisse') || lowerMessage.includes('wimpern')) {
        response = 'LATISSE® ist FDA-zugelassen für längere, vollere Wimpern. Die Behandlung kostet $180. Wann hätten Sie Zeit für eine Beratung?'
      } else if (lowerMessage.includes('produkt') || lowerMessage.includes('serum') || lowerMessage.includes('creme')) {
        response = 'Wir haben über 20 authentische LA Skin Labs-Produkte. Welche Hautprobleme möchten Sie angehen? Akne, Anti-Aging oder Pigmentierung?'
      } else if (lowerMessage.includes('termin') || lowerMessage.includes('appointment')) {
        response = 'Gerne vereinbare ich einen Termin für Sie! Wir haben Standorte in Beverly Hills, Hollywood, Santa Monica und West Hollywood. Welcher wäre am besten für Sie?'
      } else if (lowerMessage.includes('preis') || lowerMessage.includes('kosten') || lowerMessage.includes('price')) {
        response = 'Unsere Preise beginnen bei:\n• LATISSE® Treatment: $180\n• Clarisonic Luxury: $150\n• Botox® Premium: $480\n• Juvéderm® Luxury: $650\n\nMöchten Sie Details zu einer bestimmten Behandlung?'
      } else if (lowerMessage.includes('standort') || lowerMessage.includes('location') || lowerMessage.includes('wo')) {
        response = 'Wir haben 4 Premium-Standorte:\n• Beverly Hills - Rodeo Drive\n• Hollywood - Sunset Boulevard\n• Santa Monica - 3rd Street\n• West Hollywood - Melrose Avenue\n\nWelcher ist für Sie am bequemsten?'
      } else if (lowerMessage.includes('öffnungszeiten') || lowerMessage.includes('hours')) {
        response = 'Unsere Öffnungszeiten:\n• Mo-Fr: 9:00-19:00\n• Sa: 9:00-17:00\n• So: 11:00-16:00\n\nMöchten Sie einen Termin vereinbaren?'
      } else {
        response = 'Vielen Dank für Ihre Nachricht! Ich kann Ihnen bei Fragen zu unseren Behandlungen (Botox®, Juvéderm®, LATISSE®) und Produkten helfen. Oder möchten Sie direkt einen Beratungstermin vereinbaren?'
      }
      
      setMessages(prev => [...prev, {
        id: Date.now(),
        sender: 'agent',
        text: response,
        timestamp: new Date(),
        agentName,
        agentAvatar
      }])
      setIsTyping(false)
    }, 1500)
  }

  const sendMessage = () => {
    if (!inputMessage.trim()) return
    
    const newMessage: Message = {
      id: Date.now(),
      sender: 'user',
      text: inputMessage,
      timestamp: new Date()
    }
    
    setMessages(prev => [...prev, newMessage])
    setInputMessage('')
    
    // Simulate agent response
    simulateAgentResponse(inputMessage)
  }

  const quickActions = [
    { text: 'Termin vereinbaren', icon: CalendarDaysIcon },
    { text: 'Preise anfragen', icon: StarIcon },
    { text: 'Anrufen', icon: PhoneIcon }
  ]

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 ${
          isOpen ? 'hidden' : 'block'
        }`}
      >
        <ChatBubbleLeftRightIcon className="h-6 w-6" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-96 bg-white rounded-xl shadow-2xl border z-50 flex flex-col">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-t-xl flex items-center justify-between">
            <div className="flex items-center">
              <div className="h-8 w-8 bg-white/20 rounded-full flex items-center justify-center text-sm font-medium mr-3">
                MR
              </div>
              <div>
                <h3 className="font-semibold text-sm">Maria Rodriguez</h3>
                <p className="text-xs text-blue-100">Beauty Consultant • Online</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 p-1 rounded-full transition-colors"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} items-start space-x-2`}
              >
                {message.sender === 'agent' && (
                  <div className="h-8 w-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xs font-medium flex-shrink-0">
                    {message.agentAvatar}
                  </div>
                )}
                <div className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                  message.sender === 'user'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-900'
                }`}>
                  <p className="whitespace-pre-line">{message.text}</p>
                  <p className={`text-xs mt-1 ${
                    message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
                  }`}>
                    {message.timestamp.toLocaleTimeString('de-DE', { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </p>
                </div>
                {message.sender === 'user' && (
                  <div className="h-8 w-8 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                    <UserIcon className="h-4 w-4 text-gray-600" />
                  </div>
                )}
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start items-start space-x-2">
                <div className="h-8 w-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xs font-medium">
                  MR
                </div>
                <div className="bg-gray-100 px-3 py-2 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions */}
          <div className="px-4 py-2 border-t">
            <div className="flex space-x-2">
              {quickActions.map((action, index) => (
                <button
                  key={index}
                  onClick={() => setInputMessage(action.text)}
                  className="flex items-center space-x-1 px-2 py-1 bg-gray-100 hover:bg-gray-200 rounded-lg text-xs transition-colors"
                >
                  <action.icon className="h-3 w-3" />
                  <span>{action.text}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="p-4 border-t">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                placeholder="Schreiben Sie eine Nachricht..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
              <button
                onClick={sendMessage}
                className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-colors"
              >
                <PaperAirplaneIcon className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
} 