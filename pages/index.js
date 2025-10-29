## pages/index.js

```jsx
import Head from 'next/head'
import Header from '../components/Header'
import Countdown from '../components/Countdown'

export default function Home() {
  const socials = [
    { name: 'Twitter', href: 'https://twitter.com/your_panda_handle' },
    { name: 'Telegram', href: 'https://t.me/your_panda_group' },
    { name: 'Discord', href: 'https://discord.gg/your_panda' },
  ]

  // Launch target in UTC
  const launchISO = '2026-01-01T00:00:00Z'

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#071124] to-[#06132a] text-white">
      <Head>
        <title>Panda On Sol — Launching Jan 1, 2026</title>
        <meta name="description" content="Panda On Sol — memecoin launching on Solana. Join the panda family." />
      </Head>

      <Header socials={socials} />

      <main className="px-6 md:px-12 py-12">
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Panda On Sol — The Chillest Memecoin</h2>
            <p className="text-lg opacity-80 mb-6">A playful memecoin community on Solana. Pancake stacks? Nah — bamboo stacks. Join the panda fam as we grow together.</p>

            <div className="mb-6">
              <Countdown targetDate={launchISO} />
            </div>

            <div className="flex gap-3">
              <a href="#buy" className="px-4 py-2 rounded-lg bg-white text-black font-semibold">Get Ready</a>
              <a href="#roadmap" className="px-4 py-2 rounded-lg border border-white/10">Roadmap</a>
            </div>

            <div className="mt-8 p-4 bg-white/5 rounded-lg">
              <h3 className="font-semibold">Subscribe for Launch Updates</h3>
              <p className="text-sm opacity-80">Enter your email — we’ll spam only good vibes.</p>
              <form className="mt-3 flex gap-2" onSubmit={(e)=>{e.preventDefault(); alert('Thanks — integrate your email provider');}}>
                <input placeholder="you@domain.com" className="px-3 py-2 rounded-md bg-white/6 flex-1" />
                <button className="px-4 py-2 rounded-md bg-white/10">Notify me</button>
              </form>
            </div>

          </div>

          <div className="flex items-center justify-center">
            <img alt="Cute panda" src="https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=6d6d26b4d1c9e0b2b1b3f6d7ba3f1a8a" className="max-w-[420px] rounded-2xl shadow-2xl" />
          </div>
        </section>

        <section id="roadmap" className="mt-12 p-6 bg-white/3 rounded-xl">
          <h3 className="text-2xl font-bold mb-4">Roadmap</h3>
          <ul className="list-disc pl-6 space-y-2 opacity-90">
            <li>Q4 2025 — Community building & airdrop plan</li>
            <li>Jan 1, 2026 — Token launch & initial liquidity</li>
            <li>Q1 2026 — Listings, partnerships, merch</li>
          </ul>
        </section>

        <section id="tokenomics" className="mt-8 grid md:grid-cols-3 gap-4">
          <div className="p-6 bg-white/4 rounded-xl">
            <h4 className="font-bold">Token</h4>
            <p className="opacity-80 mt-2">$PANDA — total supply: 1,000,000,000</p>
          </div>
          <div className="p-6 bg-white/4 rounded-xl">
            <h4 className="font-bold">Launch</h4>
            <p className="opacity-80 mt-2">Fair launch on Solana. Liquidity locked (TBD).</p>
          </div>
          <div className="p-6 bg-white/4 rounded-xl">
            <h4 className="font-bold">Community</h4>
            <p className="opacity-80 mt-2">Airdrops & rewards for early adopters.</p>
          </div>
        </section>

        <footer className="mt-12 text-center opacity-80">© Panda On Sol — Be kind to pandas. Follow our socials above.</footer>
      </main>
    </div>
  )
}
