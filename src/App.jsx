import { useState, useEffect } from 'react'
import LoadingScreen from './components/LoadingScreen'
import ThreeScene from './components/ThreeScene'
import UIOverlay from './components/UIOverlay'
import MobileView from './components/MobileView'

function App() {
  const [loading, setLoading] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3500)
    return () => clearTimeout(timer)
  }, [])

  if (loading) return <LoadingScreen />

  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh' }}>
      {isMobile ? (
        <MobileView />
      ) : (
        <>
          <ThreeScene />
          <UIOverlay />
        </>
      )}
    </div>
  )
}

export default App
