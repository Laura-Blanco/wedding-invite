// pages/index.tsx
import React from 'react'
import { useEffect, useState } from 'react'
import Head from 'next/head'
import Hero from '../components/Hero'
import Details from '../components/Details'
import Gift from '../components/Gift'
import RSVP from '../components/RSVP'
import DressCode from '../components/DressCode'
import Countdown from '../components/Countdown'
import ClosingMessage from '../components/ClosingMessage'

export default function Home() {

  const [isMobile, setIsMobile] = useState<boolean|null>(null)

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
    window.scrollTo(0, 0)

    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])


  return (
    <>
      <Head>
        <title>Dilean + Jeremy</title>
        <link rel="icon" href="/assets/favicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>

        <meta property="og:url" content="https://dilean-jeremy.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Boda de Dilean & Jeremy"/>
        <meta
          property="og:description"
          content="Acompáñanos en nuestra boda el 15 de Agosto, 2025"
        />
        <meta
          property="og:image"
          content="https://dilean-jeremy.vercel.app/assets/dj.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Boda de Dilean & Jeremy"/>
        <meta
          name="twitter:description"
          content="Acompáñanos en nuestra boda el 15 de Agosto, 2025"
        />
        <meta
          name="twitter:image"
          content="https://dilean-jeremy.vercel.app/assets/dj.jpg"
        />

      </Head>

      {isMobile === null ? (
        <div style={{ visibility: 'hidden' }} />
      ) : isMobile ? (
        <div>
          <Hero />
          <Countdown targetDate="2025-08-15T17:00:00-13:00" />
          <Details />
          <DressCode />
          <Gift />
          <RSVP />
          <ClosingMessage />
        </div>
      ) :  (
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
