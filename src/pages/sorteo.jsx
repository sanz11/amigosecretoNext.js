'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const profiles = [
  '/images/perfiles/1.png',
  '/images/perfiles/2.png',
  '/images/perfiles/3.png',
]

export default function Sorteo() {
  const [isSpinning, setIsSpinning] = useState(false)
  const [currentProfile, setCurrentProfile] = useState(0)
  const [selectedFriend, setSelectedFriend] = useState(null)
  const [showSparkles, setShowSparkles] = useState(false)

  useEffect(() => {
    let interval
    if (isSpinning) {
      interval = setInterval(() => {
        setCurrentProfile((prev) => (prev + 1) % profiles.length)
      }, 100)

      // Simular una consulta al endpoint
      setTimeout(() => {
        clearInterval(interval)
        setIsSpinning(false)
        setSelectedFriend('Amigo Secreto')
        setShowSparkles(true)
      }, 3000)
    }
    return () => clearInterval(interval)
  }, [isSpinning])

  const handleSpin = () => {
    setIsSpinning(true)
    setSelectedFriend(null)
    setShowSparkles(false)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
        <h1 className="text-2xl font-bold mb-6">Sorteo de Amigo Secreto</h1>
        
        <div className="relative mb-6">
          <div className="w-32 h-32 mx-auto overflow-hidden rounded-full border-4 border-purple-500">
            <Image
              src={profiles[currentProfile]}
              alt="Perfil"
              width={128}
              height={128}
              className="object-cover"
            />
          </div>
          {showSparkles && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full animate-ping bg-yellow-300 opacity-75 rounded-full"></div>
            </div>
          )}
        </div>

        {selectedFriend ? (
          <div className="mb-6">
            <p className="text-xl font-semibold">¡Tu amigo secreto es:</p>
            <p className="text-2xl font-bold text-purple-600 mt-2">{selectedFriend}</p>
          </div>
        ) : (
          <p className="text-lg mb-6">Haz clic en el botón para sortear tu amigo secreto</p>
        )}

        <button
          onClick={handleSpin}
          disabled={isSpinning}
          className={`w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-colors ${
            isSpinning ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {isSpinning ? 'Sorteando...' : 'Iniciar Sorteo'}
        </button>
      </div>
    </div>
  )
}