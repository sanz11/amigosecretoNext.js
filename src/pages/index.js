'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {
  const [code, setCode] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (code.trim() === '') {
      setError('Por favor, ingresa un código')
      return
    }
    // Aquí puedes agregar la lógica para verificar el código
    // Por ahora, simplemente redirigiremos a una página de éxito
    router.push('/sorteo')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500">
      <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-bold text-center mb-2">Sorteo de Amigo Secreto</h1>
        <p className="text-center text-gray-600 mb-6">Ingresa tu código para participar</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Ingresa tu código"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          >
            Entrar al Sorteo
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-6">
          ¿No tienes un código? Contacta al organizador del sorteo.
        </p>
      </div>
    </div>
  )
}