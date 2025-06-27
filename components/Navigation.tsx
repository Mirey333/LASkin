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
  ChevronLeftIcon
} from '@heroicons/react/24/outline'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [businessCollapsed, setBusinessCollapsed] = useState(false)
  const pathname = usePathname()

  // Set CSS variable for sidebar width
  useEffect(() => {
    document.documentElement.style.setProperty(
      '--sidebar-width', 
      businessCollapsed ? '64px' : '288px'
    )
  }, [businessCollapsed])

  // Customer area (public)
  const customerItems = [
    { name: 'Home', href: '/', icon: HomeIcon },
    { name: 'Treatments', href: '/services', icon: BeakerIcon },
    { name: 'Booking', href: '/booking', icon: CalendarIcon },
    { name: 'Shop', href: '/shop', icon: ShoppingBagIcon },
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

      {/* Business Sidebar - Left - Collapsible */}
      <div className={`fixed top-16 left-0 bottom-0 ${businessCollapsed ? 'w-16' : 'w-72'} bg-white border-r border-gray-200 shadow-lg z-40 hidden lg:block overflow-y-auto transition-all duration-300`}>
        <div className="p-4">
          
          {/* Collapse Toggle Button */}
          <div className="flex items-center justify-between mb-4">
            {!businessCollapsed && (
              <div className="flex items-center space-x-2 text-red-600 font-semibold text-xs">
                <BuildingOfficeIcon className="h-4 w-4" />
                <span>BUSINESS AREA</span>
              </div>
            )}
            <button
              onClick={() => setBusinessCollapsed(!businessCollapsed)}
              className={`p-2 bg-red-50 rounded-lg hover:bg-red-100 transition-all text-red-600 hover:text-red-800 ${businessCollapsed ? 'w-full flex justify-center' : ''}`}
              title={businessCollapsed ? 'Expand Business Menu' : 'Collapse Business Menu'}
            >
              {businessCollapsed ? (
                <ChevronRightIcon className="h-5 w-5" />
              ) : (
                <ChevronLeftIcon className="h-5 w-5" />
              )}
            </button>
          </div>

          {/* Business Menu Items */}
          <div className="space-y-1">
            {businessItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center ${businessCollapsed ? 'justify-center p-3' : 'space-x-3 p-3'} rounded-lg transition-all group ${
                    isActive 
                      ? 'bg-red-600 text-white shadow-md' 
                      : 'text-gray-700 hover:bg-red-50 hover:text-red-700'
                  }`}
                  title={businessCollapsed ? item.name : ''}
                >
                  <item.icon className={`h-5 w-5 ${businessCollapsed ? 'mx-auto' : ''}`} />
                  {!businessCollapsed && (
                    <span className="font-medium">{item.name}</span>
                  )}
                </Link>
              )
            })}
          </div>

          {/* Status Info - Only show when expanded */}
          {!businessCollapsed && (
            <div className="mt-auto pt-6 border-t border-gray-200">
              <div className="text-xs text-gray-500 text-center">
                <div className="font-medium">Jenny's Xpandia Platform</div>
                <div className="mt-1">Fully Implemented ✨</div>
              </div>
            </div>
          )}
        </div>
      </div>

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
                
                {businessCollapsed && (
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
    </>
  )
} 