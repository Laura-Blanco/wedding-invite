import { useEffect, useState } from 'react'
import Hero from './components/Hero'
import Details from './components/Details'
import Gift from './components/Gift'
import RSVP from './components/RSVP'
import DressCode from './components/DressCode'
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
          <DressCode/>
          <Gift />
          <RSVP />
        </div>
      ) : (
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center', 
          padding: '2rem',
          textAlign: 'center',
        }}>
          <img
            loading="lazy"
            src="/dj.webp"
            alt="Couple"
            style={{
              maxWidth: '80%',
              width: '100%',
              borderRadius: '8px',
              marginBottom: '1.5rem',
            }}
          />
        
          <h2 style={{ 
            fontFamily: 'Glass Antiqua', 
            fontSize: '1.5rem', 
            color: '#1f2937',
            maxWidth: '400px',
            lineHeight: '1.4',
            marginBottom: '1rem',
          }}>
            Para poder ver esta invitación digital por favor escaneé el siguiente código QR en su celular.
          </h2>
        
          <img
            loading="lazy"
            src="/assets/qr-code.png"
            alt="QR Code"
            style={{ maxWidth: '200px', marginTop: '1rem' }}
          />
        </div>
      )}
    </>
  )
}

export default App