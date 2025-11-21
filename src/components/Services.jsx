function Services() {
  const services = [
    {
      title: 'Security Assessment',
      desc: 'Comprehensive audits, vulnerability scanning, and risk analysis to strengthen your security posture.',
      icon: [
        "+--------+",
        "| SCAN  |",
        "+--------+",
      ],
    },
    {
      title: 'Threat Detection',
      desc: 'Proactive monitoring and threat hunting to identify adversaries before they escalate.',
      icon: [
        "+--------+",
        "| ALERT |",
        "+--------+",
      ],
    },
    {
      title: 'Incident Response',
      desc: 'Rapid triage, containment, and remediation to minimize impact and restore operations.',
      icon: [
        "+--------+",
        "| IR ⛑ |",
        "+--------+",
      ],
    },
    {
      title: 'Malware Analysis',
      desc: 'Static and dynamic analysis to understand behavior, IOCs, and eradication paths.',
      icon: [
        "+--------+",
        "| MAL  |",
        "+--------+",
      ],
    },
  ]

  return (
    <section className="w-full max-w-5xl mx-auto mt-12 md:mt-20">
      <h2 className="text-emerald-400 font-mono text-xl mb-4">$ services --list</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {services.map((s) => (
          <div key={s.title} className="border border-emerald-400/40 rounded-lg p-4 bg-black/60 hover:bg-black/80 transition-colors">
            <pre className="text-emerald-300 text-sm leading-5 mb-3">{s.icon.join('\n')}</pre>
            <h3 className="text-emerald-200 font-semibold mb-1">{s.title}</h3>
            <p className="text-emerald-300/80 text-sm">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
