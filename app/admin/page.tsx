'use client'

import React, { useState } from 'react'
import Navigation from '../../components/Navigation'
import {
  ShieldCheckIcon,
  UsersIcon,
  CogIcon,
  KeyIcon,
  ExclamationTriangleIcon,
  ChartBarIcon,
  DocumentTextIcon,
  ServerIcon,
  BellIcon,
  EyeIcon
} from '@heroicons/react/24/outline'

export default function AdminPanelPage() {
  const [activeTab, setActiveTab] = useState('users')

  const adminStats = [
    { name: 'Active Users', value: '2,847', change: '+12%', icon: UsersIcon, color: 'text-blue-600' },
    { name: 'System Health', value: '99.9%', change: '+0.1%', icon: ServerIcon, color: 'text-green-600' },
    { name: 'Security Alerts', value: '3', change: '-2', icon: ExclamationTriangleIcon, color: 'text-red-600' },
    { name: 'API Calls', value: '1.2M', change: '+15%', icon: ChartBarIcon, color: 'text-purple-600' }
  ]

  const recentActivities = [
    { action: 'User Login', user: 'jenny@laskin.com', time: '2 min ago', type: 'success' },
    { action: 'Data Backup', user: 'System', time: '15 min ago', type: 'info' },
    { action: 'Security Scan', user: 'System', time: '1 hour ago', type: 'success' },
    { action: 'Failed Login', user: 'unknown@test.com', time: '2 hours ago', type: 'warning' }
  ]

  const systemSettings = [
    { name: 'Automatic Backups', description: 'Daily system backups at 3 AM', enabled: true },
    { name: 'Security Monitoring', description: '24/7 threat detection', enabled: true },
    { name: 'Email Notifications', description: 'Admin alerts and reports', enabled: true },
    { name: 'API Rate Limiting', description: 'Protect against abuse', enabled: false }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center">
                <ShieldCheckIcon className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-light text-gray-900">Admin Panel</h1>
                <p className="text-gray-600">System administration and security management</p>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {adminStats.map((stat) => (
              <div key={stat.name} className="minimal-card p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">{stat.name}</p>
                    <p className="text-2xl font-light text-gray-900">{stat.value}</p>
                    <p className={`text-sm ${stat.change.startsWith('+') ? 'text-green-600' : stat.change.startsWith('-') ? 'text-red-600' : 'text-gray-600'}`}>
                      {stat.change}
                    </p>
                  </div>
                  <div className={`w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center ${stat.color}`}>
                    <stat.icon className="h-6 w-6" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tab Navigation */}
          <div className="mb-8">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8">
                {[
                  { id: 'users', name: 'User Management', icon: UsersIcon },
                  { id: 'security', name: 'Security', icon: ShieldCheckIcon },
                  { id: 'system', name: 'System Settings', icon: CogIcon },
                  { id: 'logs', name: 'Activity Logs', icon: DocumentTextIcon }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm ${
                      activeTab === tab.id
                        ? 'border-red-600 text-red-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <tab.icon className="h-5 w-5" />
                    <span>{tab.name}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Tab Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {activeTab === 'users' && (
                <div className="minimal-card p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">User Management</h3>
                  <div className="space-y-4">
                    {[
                      { name: 'Jenny Schmidt', email: 'jenny@laskin.com', role: 'Super Admin', status: 'Active' },
                      { name: 'Dr. Sarah Wilson', email: 'sarah@laskin.com', role: 'Doctor', status: 'Active' },
                      { name: 'Mike Johnson', email: 'mike@laskin.com', role: 'Receptionist', status: 'Inactive' },
                      { name: 'Lisa Chen', email: 'lisa@laskin.com', role: 'Marketing', status: 'Active' }
                    ].map((user, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                            <UsersIcon className="h-5 w-5 text-gray-600" />
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">{user.name}</p>
                            <p className="text-sm text-gray-600">{user.email}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <span className="text-sm text-gray-600">{user.role}</span>
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            user.status === 'Active' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-gray-100 text-gray-800'
                          }`}>
                            {user.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'security' && (
                <div className="minimal-card p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Security Overview</h3>
                  <div className="space-y-6">
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <ShieldCheckIcon className="h-5 w-5 text-green-600" />
                        <span className="font-medium text-green-800">System Secure</span>
                      </div>
                      <p className="text-sm text-green-700 mt-2">All security checks passed. Last scan: 15 minutes ago</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 border border-gray-200 rounded-lg">
                        <h4 className="font-medium text-gray-900 mb-2">SSL Certificate</h4>
                        <p className="text-sm text-green-600">Valid until Dec 2024</p>
                      </div>
                      <div className="p-4 border border-gray-200 rounded-lg">
                        <h4 className="font-medium text-gray-900 mb-2">Firewall Status</h4>
                        <p className="text-sm text-green-600">Active & Monitoring</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'system' && (
                <div className="minimal-card p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">System Settings</h3>
                  <div className="space-y-4">
                    {systemSettings.map((setting, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                        <div>
                          <p className="font-medium text-gray-900">{setting.name}</p>
                          <p className="text-sm text-gray-600">{setting.description}</p>
                        </div>
                        <button
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            setting.enabled ? 'bg-red-600' : 'bg-gray-200'
                          }`}
                        >
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                              setting.enabled ? 'translate-x-6' : 'translate-x-1'
                            }`}
                          />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'logs' && (
                <div className="minimal-card p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Activity</h3>
                  <div className="space-y-4">
                    {recentActivities.map((activity, index) => (
                      <div key={index} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg">
                        <div className={`w-2 h-2 rounded-full ${
                          activity.type === 'success' ? 'bg-green-500' :
                          activity.type === 'warning' ? 'bg-yellow-500' :
                          'bg-blue-500'
                        }`} />
                        <div className="flex-1">
                          <p className="font-medium text-gray-900">{activity.action}</p>
                          <p className="text-sm text-gray-600">{activity.user}</p>
                        </div>
                        <span className="text-sm text-gray-500">{activity.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Actions */}
              <div className="minimal-card p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <button className="w-full btn-minimal justify-start">
                    <BellIcon className="h-4 w-4 mr-2" />
                    Send System Alert
                  </button>
                  <button className="w-full btn-minimal justify-start">
                    <ServerIcon className="h-4 w-4 mr-2" />
                    Run System Backup
                  </button>
                  <button className="w-full btn-minimal justify-start">
                    <EyeIcon className="h-4 w-4 mr-2" />
                    View System Logs
                  </button>
                  <button className="w-full btn-minimal justify-start">
                    <KeyIcon className="h-4 w-4 mr-2" />
                    Reset API Keys
                  </button>
                </div>
              </div>

              {/* System Status */}
              <div className="minimal-card p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">System Status</h3>
                <div className="space-y-3">
                  {[
                    { name: 'Database', status: 'Healthy', color: 'green' },
                    { name: 'API Server', status: 'Healthy', color: 'green' },
                    { name: 'File Storage', status: 'Warning', color: 'yellow' },
                    { name: 'Email Service', status: 'Healthy', color: 'green' }
                  ].map((service, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-sm text-gray-700">{service.name}</span>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        service.color === 'green' ? 'bg-green-100 text-green-800' :
                        service.color === 'yellow' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {service.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 