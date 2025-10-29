export default function Header({ socials = [] }) {
  return (
    <header className="w-full py-6 flex items-center justify-between px-6 md:px-12">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">🐼</div>
        <div>
          <h1 className="text-xl font-bold">Panda On Sol</h1>
          <p className="text-sm opacity-70">Memecoin on Solana — Launching Jan 1, 2026</p>
        </div>
      </div>
      <nav className="flex items-center gap-4">
        {socials.map(s => (
          <a key={s.name} href={s.href} target="_blank" rel="noreferrer" className="text-sm px-3 py-1 rounded-md bg-white/5">{s.name}</a>
        ))}
      </nav>
    </header>
  )
}

