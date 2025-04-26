import React, { useState, useEffect } from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import bgImage from './assets/bg.jpeg'

const quotes = [
  { text: "Welcome to Our Platform", color: "#ff0000", cursorColor: "#ffcccc" }, // red with light red cursor
  { text: "Empowering Your Future", color: "#008000", cursorColor: "#ccffcc" }, // green with light green cursor
  { text: "Connecting Talent with Opportunity", color: "#0000ff", cursorColor: "#ccccff" }, // blue with light blue cursor
  { text: "Building Careers Together", color: "#ffa500", cursorColor: "#ffedcc" }, // orange with light orange cursor
]

const TYPING_SPEED = 100 // ms per character
const PAUSE_DURATION = 1500 // ms pause after full text

const Background = () => {
  const [quoteIndex, setQuoteIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    let timeoutId

    if (typing) {
      if (displayedText.length < quotes[quoteIndex].text.length) {
        timeoutId = setTimeout(() => {
          setDisplayedText(quotes[quoteIndex].text.slice(0, displayedText.length + 1))
        }, TYPING_SPEED)
      } else {
        timeoutId = setTimeout(() => {
          setTyping(false)
        }, PAUSE_DURATION)
      }
    } else {
      timeoutId = setTimeout(() => {
        setTyping(true)
        setDisplayedText('')
        setQuoteIndex((quoteIndex + 1) % quotes.length)
      }, PAUSE_DURATION)
    }

    return () => clearTimeout(timeoutId)
  }, [displayedText, typing, quoteIndex])

  return (
    <>
      <div className="flex flex-col min-h-screen relative">
        <div
          className="flex-grow relative flex items-center justify-center"
          style={{
            background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899, #f97316)',
          }}
        >
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div
            className="relative z-10 transition-colors duration-1000 whitespace-pre-wrap"
            style={{
              color: quotes[quoteIndex].color,
              fontSize: '4rem',
              fontFamily: "'Calibri', sans-serif",
              fontWeight: '900',
              position: 'relative',
              top: '-20px',
              minHeight: '5rem',
              textShadow: '2px 2px 6px rgba(0,0,0,0.7)',
            }}
          >
            {displayedText}
            <span
              className="animate-pulse"
              style={{ color: quotes[quoteIndex].cursorColor }}
            >
              |
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Background
