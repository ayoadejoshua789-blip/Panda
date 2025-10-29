## components/Countdown.jsx

```jsx
import { useEffect, useState } from 'react'

export default function Countdown({ targetDate }) {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(t)
  }, [])

  const diff = Math.max(0, new Date(targetDate) - now)
  const seconds = Math.floor((diff / 1000) % 60)
  const minutes = Math.floor((diff / (1000 * 60)) % 60)
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))

  return (
    <div className="flex gap-3 items-center">
      <TimerBlock label="Days" value={days} />
      <TimerBlock label="Hours" value={hours} />
      <TimerBlock label="Minutes" value={minutes} />
      <TimerBlock label="Seconds" value={seconds} />
    </div>
  )
}

function TimerBlock({ label, value }) {
  return (
    <div className="text-center">
      <div className="min-w-[72px] px-3 py-2 rounded-xl bg-white/6 font-mono text-lg">{String(value).padStart(2, '0')}</div>
      <div className="text-xs opacity-70 mt-1">{label}</div>
    </div>
  )
}
