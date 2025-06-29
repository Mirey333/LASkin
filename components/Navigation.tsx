'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
    Bars3Icon, 
    XMarkIcon,
    HomeIcon,
    CalendarIcon,
    ChartBarIcon,
    UserCircleIcon,
    ShoppingBagIcon,
    CameraIcon,
    SparklesIcon,
    StarIcon,
    BeakerIcon,
    BuildingOfficeIcon,
    UsersIcon,
    ShieldCheckIcon,
    EyeIcon,
    RocketLaunchIcon,
    ChevronRightIcon,
    ChevronDownIcon,
    ChevronLeftIcon,
    ChatBubbleLeftRightIcon,
    MapPinIcon,
    PhoneIcon
  } from '@heroicons/react/24/outline'
import { 
  FaFacebook, 
  FaInstagram, 
  FaTwitter, 
  FaYoutube 
} from 'react-icons/fa'
import ChatWidget from './ChatWidget'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [businessCollapsed, setBusinessCollapsed] = useState(true)
  const pathname = usePathname()

  // Auto-open business menu when on business pages
  useEffect(() => {
    const businessPaths = ['/dashboard', '/analytics', '/crm', '/smart-booking', '/marketing', '/reviews', '/admin', '/reports']
    const isBusinessPage = businessPaths.includes(pathname)
    
    if (isBusinessPage && businessCollapsed) {
      setBusinessCollapsed(false)
    }
  }, [pathname])

  // Direct layout adjustment for business menu state
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mainContent = document.getElementById('main-content')
      if (mainContent) {
        if (!businessCollapsed && window.innerWidth >= 1024) {
          // Desktop: shift content right when menu is open
          mainContent.style.marginLeft = '288px'
          mainContent.style.transition = 'margin-left 0.3s ease-in-out'
        } else {
          // Mobile or closed menu: no margin
          mainContent.style.marginLeft = '0px'
          mainContent.style.transition = 'margin-left 0.3s ease-in-out'
        }
      }
    }

    // Handle window resize
    const handleResize = () => {
      const mainContent = document.getElementById('main-content')
      if (mainContent && window.innerWidth < 1024) {
        mainContent.style.marginLeft = '0px'
      } else if (mainContent && !businessCollapsed && window.innerWidth >= 1024) {
        mainContent.style.marginLeft = '288px'
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [businessCollapsed])



  // Customer area (public)


  const customerItems = [
    { name: 'Home', href: '/', icon: HomeIcon },
    { name: 'Treatments', href: '/services', icon: BeakerIcon },
    { name: 'Booking', href: '/booking', icon: CalendarIcon },
    { name: 'Shop', href: '/shop', icon: ShoppingBagIcon },
    { name: 'Blog', href: '/blog', icon: CameraIcon },
    { name: 'VIP Portal', href: '/customer-portal', icon: StarIcon }
  ]

  // Business area (internal)
  const businessItems = [
    { name: 'Dashboard', href: '/dashboard', icon: UserCircleIcon },
    { name: 'Analytics', href: '/analytics', icon: ChartBarIcon },
    { name: 'CRM System', href: '/crm', icon: UsersIcon },
    { name: 'Smart Booking', href: '/smart-booking', icon: CalendarIcon },
    { name: 'Marketing Hub', href: '/marketing', icon: RocketLaunchIcon },
    { name: 'Reviews', href: '/reviews', icon: StarIcon },
    { name: 'Admin Panel', href: '/admin', icon: ShieldCheckIcon },
    { name: 'Reports', href: '/reports', icon: EyeIcon }
  ]

  return (
    <>
      {/* Top Navigation Bar - Customer Area */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-sm">
        <div className="flex items-center h-16 px-6">
          
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 mr-8">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <SparklesIcon className="h-5 w-5 text-white" />
            </div>
            <span className="text-lg font-light text-black">LA Skin</span>
          </Link>

          {/* Customer Navigation - Horizontal */}
          <div className="hidden lg:flex items-center space-x-1 flex-1">
            <div className="flex items-center space-x-2 text-blue-600 font-semibold text-sm mr-4">
              <UsersIcon className="h-4 w-4" />
              <span>CUSTOMER AREA</span>
            </div>
            
            <div className="flex items-center space-x-1">
              {customerItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all text-sm ${
                      isActive 
                        ? 'bg-blue-600 text-white shadow-md' 
                        : 'text-gray-700 hover:bg-blue-50 hover:text-blue-700'
                    }`}
                  >
                    <item.icon className="h-4 w-4" />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Right Side - Store Locator, Social Links */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Store Locator */}
            <Link 
              href="/store-locator"
              className="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors text-sm"
            >
              <MapPinIcon className="h-4 w-4" />
              <span>Locations</span>
            </Link>

            {/* Phone */}
            <a 
              href="tel:+1-555-LASKIN"
              className="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors text-sm"
            >
              <PhoneIcon className="h-4 w-4" />
              <span className="hidden xl:block">+1-555-LASKIN</span>
            </a>

            {/* Social Links */}
            <div className="flex items-center space-x-3 pl-4 border-l border-gray-200">
              <a 
                href="https://instagram.com/laskinla" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-pink-600 transition-colors"
                title="Follow us on Instagram"
              >
                <FaInstagram className="h-5 w-5" />
              </a>
              <a 
                href="https://facebook.com/laskinla" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
                title="Like us on Facebook"
              >
                <FaFacebook className="h-5 w-5" />
              </a>
              <a 
                href="https://youtube.com/laskinla" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-red-600 transition-colors"
                title="Subscribe to our YouTube"
              >
                <FaYoutube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:text-black hover:bg-gray-50"
          >
            {isOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Business Sidebar - Left - Simple Show/Hide */}
      {!businessCollapsed && (
        <div className="fixed top-16 left-0 bottom-0 w-72 bg-white border-r border-gray-200 shadow-lg z-40 hidden lg:flex flex-col">
        <div className="p-4 flex-1 flex flex-col">
          
            {/* Header with Close Button */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2 text-red-600 font-semibold text-xs">
                <BuildingOfficeIcon className="h-4 w-4" />
                <span>BUSINESS AREA</span>
              </div>
              <button
                onClick={() => setBusinessCollapsed(true)}
                className="p-2 bg-red-50 rounded-lg hover:bg-red-100 transition-all text-red-600 hover:text-red-800"
                title="Close Business Menu"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            </div>

            {/* Business Menu Items */}
            <div className="space-y-1 flex-1 overflow-y-auto">
              {businessItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center space-x-3 p-3 rounded-lg transition-all group ${
                      isActive 
                        ? 'bg-red-600 text-white shadow-md' 
                        : 'text-gray-700 hover:bg-red-50 hover:text-red-700'
                    }`}
                  >
                    <item.icon className="h-5 w-5" />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                )
              })}
            </div>

            {/* Status Info */}
            <div className="pt-6 border-t border-gray-200">
              <div className="text-xs text-gray-500 text-center">
                <div className="font-medium">LA Skin Business Portal</div>
                <div className="mt-1">Management Dashboard 💼</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Business Menu Toggle Button - Floating */}
      {businessCollapsed && (
        <button
          onClick={() => setBusinessCollapsed(false)}
          className="fixed top-20 left-4 z-50 bg-red-600 text-white p-3 rounded-full shadow-lg hover:bg-red-700 transition-all hidden lg:block"
          title="Open Business Menu"
        >
          <BuildingOfficeIcon className="h-5 w-5" />
        </button>
      )}

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-white">
          <div className="flex flex-col h-full">
            
            {/* Mobile Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                  <SparklesIcon className="h-5 w-5 text-white" />
                </div>
                <span className="text-lg font-light text-black">LA Skin</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-lg text-gray-700 hover:text-black hover:bg-gray-50"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>

            {/* Mobile Content */}
            <div className="flex-1 overflow-y-auto p-6">
              
              {/* Customer Area Mobile */}
              <div className="mb-8">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                    <UsersIcon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-base font-bold text-blue-900">CUSTOMER AREA</div>
                    <div className="text-sm text-blue-600">Public Services</div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  {customerItems.map((item) => {
                    const isActive = pathname === item.href
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center space-x-4 p-4 rounded-xl transition-all ${
                          isActive 
                            ? 'bg-blue-600 text-white shadow-lg' 
                            : 'text-gray-700 hover:bg-blue-50 hover:text-blue-700'
                        }`}
                      >
                        <item.icon className="h-6 w-6" />
                        <span className="font-medium text-lg">{item.name}</span>
                      </Link>
                    )
                  })}
                </div>
              </div>

              {/* Business Area Mobile */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center">
                      <BuildingOfficeIcon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-base font-bold text-red-900">BUSINESS AREA</div>
                      <div className="text-sm text-red-600">Internal Management</div>
                    </div>
                  </div>
                  <button
                    onClick={() => setBusinessCollapsed(!businessCollapsed)}
                    className="flex items-center px-2 py-1 rounded-md text-red-600 hover:text-red-800 hover:bg-red-50 transition-all"
                  >
                    {businessCollapsed ? (
                      <ChevronRightIcon className="h-6 w-6" />
                    ) : (
                      <ChevronLeftIcon className="h-6 w-6" />
                    )}
                  </button>
                </div>
                
                {!businessCollapsed && (
                  <div className="space-y-2">
                    {businessItems.map((item) => {
                      const isActive = pathname === item.href
                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className={`flex items-center space-x-4 p-4 rounded-xl transition-all ${
                            isActive 
                              ? 'bg-red-600 text-white shadow-lg' 
                              : 'text-gray-700 hover:bg-red-50 hover:text-red-700'
                          }`}
                        >
                          <item.icon className="h-6 w-6" />
                          <span className="font-medium text-lg">{item.name}</span>
                        </Link>
                      )
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Chat Widget */}
      <ChatWidget />
    </>
  )
} 