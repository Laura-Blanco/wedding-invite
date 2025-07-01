import React, { useEffect, useState } from 'react'

type TimeLeft = {
  days: number
  hours: number
  minutes: number
  seconds: number
}

type CountdownProps = {
  targetDate: string
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const unitLabels: { [key in keyof TimeLeft]: string } = {
    days: 'días',
    hours: 'horas',
    minutes: 'minutos',
    seconds: 'segundos',
  }

  useEffect(() => {
    const countDownDate = new Date(targetDate).getTime()

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = countDownDate - now

      if (distance <= 0) {
        clearInterval(timer)
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((distance / (1000 * 60)) % 60),
          seconds: Math.floor((distance / 1000) % 60),
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  // return (
  //   <section 
  //     style={{ 
  //       display: 'flex', 
  //       justifyContent: 'center', 
  //       gap: '1rem', 
  //       textAlign: 'center', 
  //       color: '#1f2937', 
  //       padding: '1rem 0',
  //     }}>
  //     {Object.entries(timeLeft).map(([unit, value]) => (
  //       <div key={unit}>
  //         <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{String(value).padStart(2, '0')}</p>
  //         <p style={{ textTransform: 'uppercase', fontSize: '0.875rem' }}>{unit}</p>
  //       </div>
  //     ))}
  //   </section>
  // )

  return (
    <section 
      style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        gap: '1rem', 
        textAlign: 'center', 
        color: '#1f2937', 
        padding: '2rem 0', // extra spacing from Hero
        marginTop: '2rem' 
      }}
    >
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit}>
          {/* Circle bubble */}
          <div
            style={{
              backgroundColor: '#cbc3e3',
              borderRadius: '50%',
              width: '3.5rem',
              height: '3.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto',
              fontSize: '1.25rem',
              fontWeight: 'bold',
              fontFamily: 'Playfair Display',
              color: 'white',
              boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
            }}
          >
            {String(value).padStart(2, '0')}
          </div>
          
          {/* Label below bubble */}
          <p
            style={{
              textTransform: 'uppercase',
              fontSize: '0.75rem',
              marginTop: '0.5rem',
              color: '#1f2937',
              fontWeight: '500',
              letterSpacing: '0.05em',
              fontFamily: 'Playfair Display',
            }}
          >
            {unitLabels[unit as keyof TimeLeft]}
          </p>
        </div>
      ))}
    </section>
  )
}

export default Countdown