// pages/index.tsx
import { useEffect, useState } from 'react'
import Head from 'next/head'
import Hero from '../components/Hero'
import Details from '../components/Details'
import Gift from '../components/Gift'
import RSVP from '../components/RSVP'
import DressCode from '../components/DressCode'
import Countdown from '../components/Countdown'
import React from 'react'

export default function Home() {

  const [isMobile, setIsMobile] = useState<boolean|null>(null)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  if (isMobile === null) {
    return null
  }

  return (
    <>
      <Head>
        <title>Dilean + Jeremy</title>
        <link rel="icon" href="/assets/favicon.png" />
      </Head>

      {isMobile ? (
        <div>
          <Hero />
          <Countdown targetDate="2025-08-15T17:00:00-13:00" />
          <Details />
          <DressCode />
          <Gift />
          <RSVP />
        </div>
      ) : (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            textAlign: 'center',
          }}
        >
          <img
            loading="lazy"
            src="/assets/dj.webp"
            alt="Couple"
            style={{
              maxWidth: '80%',
              width: '100%',
              borderRadius: '8px',
              marginBottom: '1.5rem',
            }}
          />

          <h2
            style={{
              fontSize: '1.5rem',
              color: '#1f2937',
              maxWidth: '400px',
              lineHeight: '1.4',
              marginBottom: '1rem',
            }}
          >
            Para poder ver esta invitación digital por favor escaneé el siguiente
            código QR en su celular.
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
