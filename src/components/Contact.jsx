import { useState } from 'react'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section className="w-full max-w-3xl mx-auto mt-12 md:mt-20">
      <h2 className="text-pink-400 font-mono text-xl mb-4">$ send-secure-message</h2>

      {!sent ? (
        <form onSubmit={handleSubmit} className="border border-pink-400/40 rounded-lg p-6 bg-black/60">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-pink-300 text-sm mb-1">Name</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full bg-black/70 border border-pink-400/40 rounded px-3 py-2 text-pink-200 placeholder-pink-400/40 focus:outline-none focus:border-pink-400"
                placeholder="Alice"
                required
              />
            </div>
            <div>
              <label className="block text-pink-300 text-sm mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full bg-black/70 border border-pink-400/40 rounded px-3 py-2 text-pink-200 placeholder-pink-400/40 focus:outline-none focus:border-pink-400"
                placeholder="alice@example.com"
                required
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-pink-300 text-sm mb-1">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              className="w-full bg-black/70 border border-pink-400/40 rounded px-3 py-2 text-pink-200 placeholder-pink-400/40 focus:outline-none focus:border-pink-400"
              placeholder="Write your secure message here..."
              required
            />
          </div>
          <button
            type="submit"
            className="mt-4 inline-flex items-center gap-2 px-4 py-2 border border-pink-400/60 text-pink-200 rounded bg-black/60 hover:bg-black transition-colors"
          >
            <span>Transmit</span>
            <span className="animate-pulse">▸</span>
          </button>
        </form>
      ) : (
        <div className="border border-pink-400/40 rounded-lg p-6 bg-black/60 text-pink-300">
          <p>Message queued for secure transmission. I will get back to you soon.</p>
        </div>
      )}

      <footer className="mt-8 text-pink-300/80">
        <div className="flex items-center gap-6">
          <a className="hover:text-pink-200 underline underline-offset-4" href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="hover:text-pink-200 underline underline-offset-4" href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
        </div>
        <p className="mt-4 text-xs">© {new Date().getFullYear()} HexGuard</p>
      </footer>
    </section>
  )
}

export default Contact
