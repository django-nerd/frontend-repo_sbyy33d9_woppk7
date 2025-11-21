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
      <div className="terminal-window border border-emerald-400/40 rounded-lg overflow-hidden shadow-[0_0_30px_rgba(16,185,129,0.15)] bg-black/80">
        <div className="flex items-center gap-2 px-4 py-2 bg-[#0b0f0c] border-b border-emerald-400/20">
          <span className="w-3 h-3 rounded-full bg-red-500/70"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-500/70"></span>
          <span className="w-3 h-3 rounded-full bg-green-500/70"></span>
          <span className="ml-3 text-emerald-300/70 text-xs">/home/hexguard</span>
        </div>
        <div className="p-6 md:p-8 font-mono text-emerald-300 leading-relaxed">
          <p className="text-sm md:text-base select-none"><span className="text-emerald-400">hexguard@domain</span>:<span className="text-cyan-400">~</span>$ whoami</p>
          <div className="mt-4 text-lg md:text-xl whitespace-pre-wrap">
            {displayed}
            <span className={`ml-1 inline-block align-baseline terminal-cursor ${done ? 'opacity-0 md:opacity-100' : ''}`}>▌</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TerminalHero
