import { useEffect, useState } from 'react'

function TerminalHero() {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)

  const bio = `I'm HexGuard — a cybersecurity professional focused on hardening systems, hunting threats, and responding to incidents. I assess risk, uncover vulnerabilities, and build resilient defenses.`

  useEffect(() => {
    let i = 0
    const speed = 18
    const timer = setInterval(() => {
      setDisplayed(bio.slice(0, i + 1))
      i++
      if (i >= bio.length) {
        clearInterval(timer)
        setDone(true)
      }
    }, speed)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="w-full max-w-4xl mx-auto mt-8 md:mt-16">
      <div className="terminal-window border border-pink-400/40 rounded-lg overflow-hidden shadow-[0_0_30px_rgba(236,72,153,0.2)] bg-black/80 glow-pulse">
        <div className="flex items-center gap-2 px-4 py-2 bg-[#0b090b] border-b border-pink-400/20">
          <span className="w-3 h-3 rounded-full bg-rose-500/70"></span>
          <span className="w-3 h-3 rounded-full bg-amber-500/70"></span>
          <span className="w-3 h-3 rounded-full bg-emerald-500/70"></span>
          <span className="ml-3 text-pink-300/80 text-xs">/home/hexguard</span>
        </div>
        <div className="p-6 md:p-8 font-mono text-pink-300 leading-relaxed">
          <p className="text-sm md:text-base select-none"><span className="text-pink-400">hexguard@domain</span>:<span className="text-cyan-400">~</span>$ whoami</p>
          <h1 className="mt-4 text-2xl md:text-3xl font-semibold neon glitch inline-block" data-text="HexGuard">HexGuard</h1>
          <div className="mt-3 text-lg md:text-xl whitespace-pre-wrap">
            {displayed}
            <span className={`ml-1 inline-block align-baseline terminal-cursor ${done ? 'opacity-0 md:opacity-100' : ''}`}>▌</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TerminalHero
