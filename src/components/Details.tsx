import React from 'react'

const Details: React.FC = () => {
  return (
    <section style={{ padding: '1.5rem', textAlign: 'center', backgroundColor: 'white', color: '#1f2937', margin: 0, border: 'none', }}>
      <img src="/assets/icons/anillos.GIF" alt="Rings Icon" style={{ width: '70px', height: '70px'}} />
      <h2 style={{ fontSize: '1.875rem', marginBottom: '1rem', fontFamily: 'Glass Antiqua', fontWeight: 'bold'}}>
        Ceremonia y Celebracion
      </h2>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1.5rem' }}>
        <div style={{ fontSize: '1.5rem', fontFamily: 'Playfair Display', fontWeight: 300 }}>
          <p><strong>15 AGOSTO 2025</strong></p>
        </div>
        <div style={{
          height: '1.5rem',
          width: '1px',
          backgroundColor: '#1f2937',
        }} />
        <div style={{ fontSize: '1.5rem', fontFamily: 'Playfair Display', fontWeight: 300 }}>
          <p><strong>7:00 PM</strong></p>
        </div>
      </div>
      <p style={{ marginTop: '1rem' }}>SALON LA QUINTA</p>
      <p style={{ marginTop: '1rem' }}>Venezuela, Cuauhtémoc, Chih., 31512, Mexico</p>
    </section>
  )
}

export default Details
