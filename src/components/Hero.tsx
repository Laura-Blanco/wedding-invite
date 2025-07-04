import React from 'react'

const Hero: React.FC = () => {
  return (
    <section
      style={{
        margin: 0,
        height: '100vh',
        width: '100vw',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        color: 'white'
      }}
    >
      <img
        src="/assets/dj.webp"
        alt="Dilean y Jeremy"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: '44% center',
          zIndex: 0
        }}
        loading="lazy"
      />
      
      {/* Fade overlay behind text */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '40%',
          background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)',
          zIndex: 1,
        }}
      />

      {/* Text content */}
      <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', marginBottom: '5rem' }}>
        <h1 style={{ fontSize: '3rem', fontFamily: 'Parisienne', color: 'white' }}>
          Dilean & Jeremy
        </h1>
        <div
          style={{
            marginTop: '1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '1.2rem',
            fontFamily: 'Glass Antiqua',
          }}
        >
          <div style={{ height: '2px', width: '2.5rem', backgroundColor: 'white' }} />
          <span style={{ fontFamily: 'Glass Antiqua', fontSize: '1.2rem' }}>
          {'\u2665\uFE0E'} 15/08/2025 {'\u2665\uFE0E'}
          </span>
          <div style={{ height: '2px', width: '2.5rem', backgroundColor: 'white' }} />
        </div>
      </div>
    </section>
  )
}

export default Hero