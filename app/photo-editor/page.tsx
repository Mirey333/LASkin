'use client'

import React, { useState, useRef, useCallback } from 'react'
import Navigation from '../../components/Navigation'

export default function PhotoEditorPage() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [processedImage, setProcessedImage] = useState(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [activeFilter, setActiveFilter] = useState('none')
  const [showBeforeAfter, setShowBeforeAfter] = useState(false)
  const fileInputRef = useRef(null)

  const treatmentPreviews = [
    {
      id: 'none',
      name: 'Current Look',
      description: 'Your natural appearance',
      premium: false
    },
    {
      id: 'botox-preview',
      name: 'Botox Result Preview',
      description: 'See how Botox will smooth your wrinkles',
      premium: true,
      effect: 'Smoother forehead and eye area'
    },
    {
      id: 'juvederm-lips',
      name: 'Juvederm Lip Enhancement',
      description: 'Preview fuller, more defined lips',
      premium: true,
      effect: 'Natural-looking lip volume increase'
    },
    {
      id: 'hydrafacial-glow',
      name: 'HydraFacial Glow',
      description: 'Radiant, glowing skin preview',
      premium: true,
      effect: 'Clearer, more radiant complexion'
    },
    {
      id: 'dermal-filler',
      name: 'Dermal Filler Preview',
      description: 'See enhanced facial contours',
      premium: true,
      effect: 'Subtle facial volume enhancement'
    },
    {
      id: 'complete-makeover',
      name: 'Complete Treatment Plan',
      description: 'Preview your full transformation',
      premium: true,
      effect: 'Combined treatment results'
    }
  ]

  const handleImageUpload = useCallback((file) => {
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setSelectedImage(e.target.result)
        setProcessedImage(null)
        setActiveFilter('none')
        setShowBeforeAfter(false)
      }
      reader.readAsDataURL(file)
    }
  }, [])

  const handleDrop = useCallback((e) => {
    e.preventDefault()
    const file = e.dataTransfer.files[0]
    handleImageUpload(file)
  }, [handleImageUpload])

  const handleDragOver = useCallback((e) => {
    e.preventDefault()
  }, [])

  const applyFilter = async (filterId) => {
    if (!selectedImage || filterId === 'none') {
      setActiveFilter(filterId)
      setProcessedImage(null)
      return
    }

    setIsProcessing(true)
    setActiveFilter(filterId)
    
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setProcessedImage(selectedImage)
    setIsProcessing(false)
    setShowBeforeAfter(true)
  }

  const downloadImage = () => {
    if (processedImage) {
      const link = document.createElement('a')
      link.download = 'la-skin-enhanced-photo.jpg'
      link.href = processedImage
      link.click()
    }
  }

  const resetEditor = () => {
    setSelectedImage(null)
    setProcessedImage(null)
    setActiveFilter('none')
    setShowBeforeAfter(false)
    setIsProcessing(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50">
      <Navigation />
      
      <div className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-light text-black mb-4">
              Virtual Beauty Preview
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See how you'll look after your treatments! Our AI technology shows realistic 
              previews of your potential results before you book.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2">
            <div className="minimal-card p-8 mb-8">
              {!selectedImage ? (
                <div
                  className="border-2 border-dashed border-gray-300 rounded-2xl p-12 text-center hover:border-gray-400 transition-colors cursor-pointer"
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                  onClick={() => fileInputRef.current?.click()}
                >
                  <div className="w-16 h-16 text-gray-400 mx-auto mb-4 text-4xl">📤</div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">
                    Upload Your Photo
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Drag and drop your image here, or click to browse
                  </p>
                  <p className="text-sm text-gray-500">
                    Supports JPG, PNG, WEBP up to 10MB
                  </p>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => handleImageUpload(e.target.files[0])}
                  />
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="relative">
                    {showBeforeAfter && processedImage ? (
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <h4 className="text-sm font-medium text-gray-700">Before</h4>
                          <img
                            src={selectedImage}
                            alt="Original"
                            className="w-full h-80 object-cover rounded-xl"
                          />
                        </div>
                        <div className="space-y-2">
                          <h4 className="text-sm font-medium text-gray-700">After</h4>
                          <div className="relative">
                            <img
                              src={processedImage}
                              alt="Enhanced"
                              className="w-full h-80 object-cover rounded-xl"
                            />
                            <div className="absolute top-2 right-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-2 py-1 rounded-lg text-xs font-medium">
                              AI Enhanced
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="relative">
                        <img
                          src={selectedImage}
                          alt="Original"
                          className="w-full h-96 object-cover rounded-xl"
                        />
                        {isProcessing && (
                          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl flex items-center justify-center">
                            <div className="text-center text-white">
                              <div className="w-8 h-8 animate-spin mx-auto mb-2 text-2xl">⚡</div>
                              <p className="text-sm">AI Processing...</p>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <button
                      onClick={() => setShowBeforeAfter(!showBeforeAfter)}
                      disabled={!processedImage}
                      className="btn-minimal disabled:opacity-50"
                    >
                      {showBeforeAfter ? '← Single View' : 'Compare →'}
                    </button>
                    
                    <button
                      onClick={downloadImage}
                      disabled={!processedImage}
                      className="btn-minimal disabled:opacity-50"
                    >
                      📥 Download
                    </button>
                    
                    <button
                      onClick={resetEditor}
                      className="btn-minimal"
                    >
                      🔄 Reset
                    </button>
                    
                    <button className="btn-minimal bg-black text-white hover:bg-gray-800">
                      📅 Book Consultation
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-6">
            <div className="minimal-card p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                🔮 Treatment Previews
              </h3>
              
              <div className="space-y-3">
                {treatmentPreviews.map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => applyFilter(filter.id)}
                    disabled={!selectedImage || isProcessing}
                    className={`w-full p-4 rounded-xl border-2 transition-all text-left disabled:opacity-50 ${
                      activeFilter === filter.id
                        ? 'border-black bg-gray-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <div className="w-5 h-5 text-gray-600 mt-0.5">🎨</div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2">
                          <h4 className="font-medium text-gray-900 text-sm">
                            {filter.name}
                          </h4>
                          {filter.premium && (
                            <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-2 py-0.5 rounded-full text-xs font-medium">
                              PRO
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-gray-600 mt-1">
                          {filter.description}
                        </p>
                        {filter.effect && (
                          <p className="text-xs text-gray-500 mt-1 italic">
                            {filter.effect}
                          </p>
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="minimal-card p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Enhancement Stats
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Photos Enhanced</span>
                  <span className="font-medium">2,547</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">AI Accuracy</span>
                  <span className="font-medium">98.5%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Avg. Processing</span>
                  <span className="font-medium">2.3s</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Customer Rating</span>
                  <div className="flex items-center space-x-1">
                    <span className="text-yellow-400">⭐</span>
                    <span className="font-medium">4.9</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="minimal-card p-6 bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
              <div className="text-center">
                <div className="text-purple-600 text-2xl mb-3">⚡</div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Upgrade to Pro
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Unlock all premium AI filters and advanced features
                </p>
                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 px-4 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all">
                  Upgrade Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
