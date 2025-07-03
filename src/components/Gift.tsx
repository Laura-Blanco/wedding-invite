import React from 'react'

const Gift: React.FC = () => {
  return (
    <section style={{ padding: '1.5rem', textAlign: 'center', backgroundColor: 'white', color: '#1f2937', margin: 0 ,border: 'none', }}>
      <img src="/assets/icons/gift.gif" alt="Gift Icon" style={{ width: '40px', height: '40px'}} />
      <h2 style={{ fontSize: '1.875rem', marginBottom: '1rem', fontFamily: 'Glass Antiqua', fontWeight: 'bold'}}>Sugerencia de regalo</h2>
      <p style={{fontFamily: 'Playfair Display', fontSize: '1.5rem' }}>Efectivo</p>
      <div style={{
        width: '120px', 
        height: '1px',
        backgroundColor: '#1f2937',
        margin: '0 auto 1rem' 
      }} />
      <p style={{ fontWeight: 'bold', marginTop: '0.5rem', fontSize: '1.2rem'}}>Banorte</p>
      <p><strong>Cuenta:</strong> 1300428903</p>
      <p><strong>CLABE:</strong> 072 158 01300428903 7</p>
      <p>Dilean Murillo Gonzalez</p>
    </section>
  )
}

export default Gift