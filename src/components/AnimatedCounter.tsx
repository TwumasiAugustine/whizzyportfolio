import { useEffect, useRef, useState, useMemo } from 'react'
import { useInView } from 'motion/react'

type AnimatedCounterProps = {
  value: string
  duration?: number
}

export function AnimatedCounter({ value, duration = 2000 }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  
  // Determine initial value based on whether value contains numbers
  const initialValue = useMemo(() => {
    const numMatch = value.match(/[\d,]+/)
    return numMatch ? '0' : value
  }, [value])
  
  const [displayValue, setDisplayValue] = useState(initialValue)

  useEffect(() => {
    if (!isInView) return

    // Extract number from string (e.g., "10,000+" -> 10000, "98" -> 98)
    const numMatch = value.match(/[\d,]+/)
    if (!numMatch) {
      return // Already initialized to correct value
    }

    const numStr = numMatch[0].replace(/,/g, '')
    const targetNum = parseInt(numStr, 10)
    
    if (isNaN(targetNum)) {
      return // Already initialized to correct value
    }

    // Get prefix, suffix (e.g., "$", "+", "K", etc.)
    const prefix = value.substring(0, value.indexOf(numMatch[0]))
    const suffix = value.substring(value.indexOf(numMatch[0]) + numMatch[0].length)

    const startTime = Date.now()
    const endTime = startTime + duration

    const updateCounter = () => {
      const now = Date.now()
      const progress = Math.min((now - startTime) / duration, 1)

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentNum = Math.floor(targetNum * easeOutQuart)

      // Format with commas if original had them
      const formatted = numMatch[0].includes(',')
        ? currentNum.toLocaleString()
        : currentNum.toString()

      setDisplayValue(prefix + formatted + suffix)

      if (now < endTime) {
        requestAnimationFrame(updateCounter)
      } else {
        setDisplayValue(value) // Ensure we end with exact value
      }
    }

    requestAnimationFrame(updateCounter)
  }, [isInView, value, duration])

  return <span ref={ref}>{displayValue}</span>
}
