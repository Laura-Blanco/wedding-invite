import React, { useEffect, useState } from 'react'
import Hero from './components/Hero'
import Details from './components/Details'
import Gift from './components/Gift'
import RSVP from './components/RSVP'
import qrCodeImage from './assets/qrcode.png' // <-- Add your QR code image here
import Countdown from './components/Countdown'

function App() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <>
      {isMobile ? (
        <div>
          <Hero />
          <Countdown targetDate="2025-08-15T17:00:00-13:00" /> 
          <Details />
          <Gift />
          <RSVP />
        </div>
      ) : (
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <h2 style={{ fontFamily: 'Glass Antiqua', fontSize: '1.5rem' }}>
            Escanéalo para verlo mejor en tu celular
          </h2>
          <img
            src={qrCodeImage}
            alt="QR Code"
            style={{ maxWidth: '200px', marginTop: '1rem' }}
          />
        </div>
      )}
    </>
  )
}

export default App