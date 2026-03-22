import { useEffect, useState } from 'react'

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0)
  const [statusText, setStatusText] = useState('INITIALIZING SYSTEM...')

  const statusMessages = [
    'INITIALIZING SYSTEM...',
    'LOADING CLOUD MODULES...',
    'CONNECTING TO AWS...',
    'DEPLOYING CONTAINERS...',
    'SYSTEM ONLINE',
  ]

  useEffect(() => {
    let current = 0
    const interval = setInterval(() => {
      current += 2
      setProgress(Math.min(current, 100))
      const idx = Math.floor((current / 100) * (statusMessages.length - 1))
      setStatusText(statusMessages[Math.min(idx, statusMessages.length - 1)])
      if (current >= 100) clearInterval(interval)
    }, 60)
    return () => clearInterval(interval)
  }, [])

  return (
    <div style={{
      position: 'fixed', inset: 0, background: '#000', display: 'flex',
      flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      zIndex: 9999, fontFamily: "'Share Tech Mono', monospace"
    }}>
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
        background: 'linear-gradient(transparent, rgba(0,212,255,0.3), transparent)',
        animation: 'scanline 2s linear infinite', zIndex: 1
      }} />

      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{
          fontSize: '4rem', fontFamily: "'Orbitron', sans-serif",
          fontWeight: 900, color: '#00d4ff',
          textShadow: '0 0 20px #00d4ff, 0 0 40px #00d4ff, 0 0 80px #00d4ff',
          letterSpacing: '8px', animation: 'pulse-neon 2s ease-in-out infinite'
        }}>SK</div>
        <div style={{ color: '#7ec8e3', fontSize: '0.9rem', letterSpacing: '6px', marginTop: '8px' }}>
          SHIVAM KUMAR
        </div>
      </div>

      <div style={{ width: '320px', marginBottom: '1.5rem' }}>
        <div style={{
          width: '100%', height: '2px', background: 'rgba(0,212,255,0.2)',
          borderRadius: '2px', overflow: 'hidden'
        }}>
          <div style={{
            width: `${progress}%`, height: '100%',
            background: 'linear-gradient(90deg, #8b5cf6, #00d4ff)',
            boxShadow: '0 0 10px #00d4ff',
            transition: 'width 0.05s linear'
          }} />
        </div>
        <div style={{
          display: 'flex', justifyContent: 'space-between',
          marginTop: '0.5rem', fontSize: '0.75rem', color: '#7ec8e3'
        }}>
          <span>{statusText}</span>
          <span>{progress}%</span>
        </div>
      </div>

      <div style={{
        position: 'absolute', inset: 0, opacity: 0.05,
        backgroundImage: 'linear-gradient(rgba(0,212,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.5) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }} />
    </div>
  )
}

export default LoadingScreen
