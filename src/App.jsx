import TerminalHero from './components/TerminalHero'
import Services from './components/Services'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-black text-pink-300 font-mono crt-flicker">
      <div className="fixed inset-0 pointer-events-none opacity-25"
           style={{backgroundImage: 'radial-gradient(circle at 1px 1px, #ec4899 1px, transparent 1px)', backgroundSize: '22px 22px'}} />

      <header className="relative z-10 w-full max-w-5xl mx-auto px-6 pt-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-pink-400 animate-pulse" />
          <span className="text-pink-200 glitch" data-text="HexGuard">HexGuard</span>
        </div>
        <nav className="hidden md:flex gap-6 text-pink-300/80">
          <a className="hover:text-pink-200" href="#whoami">whoami</a>
          <a className="hover:text-pink-200" href="#services">services</a>
          <a className="hover:text-pink-200" href="#contact">contact</a>
        </nav>
      </header>

      <main className="relative z-10 px-6 pb-20">
        <div id="whoami">
          <TerminalHero />
        </div>
        <div id="services">
          <Services />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </main>
    </div>
  )
}

export default App
