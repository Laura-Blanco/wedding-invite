import React from 'react'

const Hero: React.FC = () => {
  return (
    <section
      style={{
        margin: 0,
        height: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end', // keeps text toward bottom
        alignItems: 'center',
        color: 'white',
        backgroundImage: "url('/jd.webp')",
        backgroundSize: 'cover',
        backgroundPosition: '44% center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Fade overlay behind only the text area */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '40%', // adjust as needed
          background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)',
          zIndex: 1,
        }}
      />

      {/* Content wrapper */}
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
          <span style={{ margin: '0 0.5rem', whiteSpace: 'nowrap' }}>♥ 08/15/2025 ♥</span>
          <div style={{ height: '2px', width: '2.5rem', backgroundColor: 'white' }} />
        </div>
      </div>

    </section>
  )
}

export default Hero