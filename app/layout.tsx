import React from 'react'
import './globals.css'
import Navigation from '../components/Navigation'
import ChatWidget from '../components/ChatWidget'

export const metadata = {
  title: '✨ LA Skin Elite - Luxury Beauty & Skincare Platform',
  description: 'Premium Botox, Juvederm, Latisse & exclusive skincare treatments. Experience the elite of aesthetic medicine with cutting-edge AI technology.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&family=Cormorant+Garamond:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <meta name="theme-color" content="#e17d28" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body className="antialiased bg-luxury-gradient min-h-screen">
        <div className="relative">
          {/* Luxury Background Pattern */}
          <div className="fixed inset-0 opacity-5 pointer-events-none">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%239C92AC&quot; fill-opacity=&quot;0.1&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;4&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
          </div>
          
          {/* Navigation */}
          <Navigation />
          
          {/* Main Content */}
          <div className="relative z-10 pt-16">
            {children}
          </div>
          
          {/* Floating Elements */}
          <div className="fixed top-20 right-10 w-3 h-3 bg-gold-400 rounded-full opacity-30 animate-pulse"></div>
          <div className="fixed bottom-20 left-10 w-2 h-2 bg-rose-400 rounded-full opacity-40 animate-pulse"></div>
          <div className="fixed top-1/2 left-20 w-1 h-1 bg-primary-400 rounded-full opacity-50 animate-pulse"></div>
          
          {/* Chat Widget */}
          <ChatWidget />
        </div>
      </body>
    </html>
  )
} 