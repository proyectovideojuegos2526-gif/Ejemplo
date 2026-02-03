import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-500 to-indigo-700 flex flex-col items-center justify-center text-white p-6">

      {/* Logos */}
      <div className="flex gap-8 mb-8">
        <a href="https://vite.dev" target="_blank">
          <img
            src={viteLogo}
            className="w-20 hover:scale-110 transition duration-300"
            alt="Vite logo"
          />
        </a>

        <a href="https://react.dev" target="_blank">
          <img
            src={reactLogo}
            className="w-20 animate-spin"
            alt="React logo"
          />
        </a>
      </div>

      {/* Título */}
      <h1 className="text-5xl font-bold mb-6">
        🚀 Vite + React + Tailwind
      </h1>

      {/* Tarjeta */}
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-8 text-center max-w-md hover:scale-105 transition duration-300">

        <p className="mb-4 text-lg">
          Ejemplo bonito usando Tailwind CSS con animaciones y estilos modernos.
        </p>

        <button
          onClick={() => setCount((count) => count + 1)}
          className="bg-pink-500 hover:bg-pink-600 px-6 py-3 rounded-xl font-semibold shadow-lg transition transform hover:scale-110"
        >
          🔥 Count is {count}
        </button>

        <p className="mt-4 text-sm opacity-80">
          Edita <code className="bg-black/20 px-2 py-1 rounded">src/App.jsx</code> para probar cambios en vivo.
        </p>

      </div>

      {/* Footer */}
      <p className="mt-10 opacity-70 animate-pulse">
        Haz clic en los logos para aprender más
      </p>

    </div>
  )
}

export default App
