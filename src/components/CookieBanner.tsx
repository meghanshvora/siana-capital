import { useState, useEffect } from 'react'

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setIsVisible(false)
  }

  const [isFocused, setIsFocused] = useState(false)

  if (!isVisible) return null

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#000',
        color: '#fff',
        padding: '15px 40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 9999,
        borderTop: '1px solid #333',
        gap: '40px'
      }}
    >
      <div style={{ 
        fontSize: '15px', 
        lineHeight: '1.4',
        fontFamily: "'Newsreader', serif",
        fontWeight: '400',
        flex: 1
      }}>
        By using this website, you agree to our use of cookies. We use cookies to provide you with a great experience and to help our website run effectively.
      </div>
      <button
        onClick={handleAccept}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        style={{
            backgroundColor: '#fff',
            color: '#000',
            border: isFocused ? '2px solid #000' : 'none',
            outline: isFocused ? '2px solid #fff' : 'none',
            outlineOffset: '2px',
            padding: '10px 30px',
            cursor: 'pointer',
            fontWeight: '700',
            fontSize: '13px',
            fontFamily: "'Newsreader', serif",
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
            transition: 'all 0.2s ease',
            minWidth: '80px'
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#d1d1d1')}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#fff')}
        >
          OK
        </button>
    </div>
  )
}
