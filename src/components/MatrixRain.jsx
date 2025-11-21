import { useEffect, useRef } from 'react'

export default function MatrixRain({ opacity = 0.25, speed = 50, fontSize = 16, color = '#ec4899' }) {
  const canvasRef = useRef(null)
  const animationRef = useRef(null)
  const dropsRef = useRef([])
  const columnsRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    const setSize = () => {
      const dpr = window.devicePixelRatio || 1
      const w = window.innerWidth
      const h = window.innerHeight
      canvas.width = Math.floor(w * dpr)
      canvas.height = Math.floor(h * dpr)
      canvas.style.width = w + 'px'
      canvas.style.height = h + 'px'
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      columnsRef.current = Math.floor(w / fontSize)
      dropsRef.current = Array(columnsRef.current).fill(0)
    }

    setSize()
    window.addEventListener('resize', setSize)

    const chars = '01░▒▓██ /\\<>[]{}#$%&*+-=ABCDEFGHIJKLMNOPQRSTUVWXYZあいうえおカキクケコ0123456789'

    let last = 0
    const draw = (time) => {
      if (!last) last = time
      const delta = time - last
      if (delta < speed) {
        animationRef.current = requestAnimationFrame(draw)
        return
      }
      last = time

      // fade the canvas a bit to create trail effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.08)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = color
      ctx.shadowColor = color
      ctx.shadowBlur = 12
      ctx.font = `${fontSize}px monospace`

      for (let i = 0; i < dropsRef.current.length; i++) {
        const text = chars.charAt(Math.floor(Math.random() * chars.length))
        const x = i * fontSize
        const y = dropsRef.current[i] * fontSize
        ctx.fillText(text, x, y)

        // randomly reset drop to create varying lengths
        if (y > window.innerHeight && Math.random() > 0.975) {
          dropsRef.current[i] = 0
        }
        dropsRef.current[i]++
      }

      animationRef.current = requestAnimationFrame(draw)
    }

    animationRef.current = requestAnimationFrame(draw)

    return () => {
      window.removeEventListener('resize', setSize)
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
    }
  }, [fontSize, speed, color])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ opacity }}
    />
  )
}
