import React, { useMemo, useState } from 'react'
import Spline from '@splinetool/react-spline'
import { motion, AnimatePresence } from 'framer-motion'
import { CreditCard, Users, ShoppingBag, Activity, Car, BarChart3, Globe2, Database } from 'lucide-react'
import StatCard from './StatCard'

function App() {
  const [active, setActive] = useState('overview')

  const cards = useMemo(() => ([
    {
      key: 'overview',
      title: 'Payments Overview',
      subtitle: 'Realtime volumes and approvals',
      endpoint: '/api/payments/overview',
      icon: CreditCard,
      accentFrom: 'rgba(147, 197, 253, 0.35)',
      accentTo: 'rgba(217, 70, 239, 0.25)'
    },
    {
      key: 'users',
      title: 'Users',
      subtitle: 'Growth, cohorts, regions',
      endpoint: '/api/users/metrics',
      icon: Users,
      accentFrom: 'rgba(110, 231, 183, 0.35)',
      accentTo: 'rgba(59, 130, 246, 0.25)'
    },
    {
      key: 'orders',
      title: 'Orders',
      subtitle: 'Conversion and AOV',
      endpoint: '/api/orders/stats',
      icon: ShoppingBag,
      accentFrom: 'rgba(251, 191, 36, 0.35)',
      accentTo: 'rgba(217, 70, 239, 0.25)'
    },
    {
      key: 'traffic',
      title: 'Traffic',
      subtitle: 'Top sources and geo',
      endpoint: '/api/traffic/insights',
      icon: Globe2,
      accentFrom: 'rgba(168, 85, 247, 0.35)',
      accentTo: 'rgba(34, 197, 94, 0.25)'
    },
    {
      key: 'systems',
      title: 'Systems Health',
      subtitle: 'Latency, error budget',
      endpoint: '/api/systems/health',
      icon: Activity,
      accentFrom: 'rgba(239, 68, 68, 0.35)',
      accentTo: 'rgba(59, 130, 246, 0.25)'
    }
  ]), [])

  const Detail = ({ type }) => {
    const base = 'bg-white/5 border border-white/15 rounded-2xl p-6 backdrop-blur-xl'
    switch (type) {
      case 'overview':
        return (
          <div className="grid md:grid-cols-3 gap-4">
            <div className={`${base}`}>
              <div className="flex items-center gap-3 mb-3 text-white/90"><BarChart3 className="h-5 w-5"/> Volume</div>
              <div className="text-3xl font-semibold text-white">$1.23M</div>
              <div className="text-white/60 text-sm mt-1">+12.4% WoW</div>
              <div className="mt-4 h-16 bg-gradient-to-r from-white/10 to-white/20 rounded-xl overflow-hidden">
                <div className="h-full w-1/2 bg-white/30 animate-[bar_2.2s_ease_infinite]"/>
              </div>
            </div>
            <div className={`${base}`}>
              <div className="flex items-center gap-3 mb-3 text-white/90"><Activity className="h-5 w-5"/> Approval Rate</div>
              <div className="text-3xl font-semibold text-white">97.8%</div>
              <div className="text-white/60 text-sm mt-1">+0.6% WoW</div>
              <div className="mt-4 grid grid-cols-6 gap-2">
                {Array.from({length:18}).map((_,i)=> (
                  <div key={i} className={`h-6 rounded-md ${i%3===0?'bg-white/40':'bg-white/20'}`}/>
                ))}
              </div>
            </div>
            <div className={`${base}`}>
              <div className="flex items-center gap-3 mb-3 text-white/90"><Database className="h-5 w-5"/> Top Methods</div>
              <ul className="space-y-2 text-white/80">
                {['Visa •••• 2143','UPI •••• 73','Mastercard •••• 0902'].map((m,i)=> (
                  <li key={i} className="flex items-center justify-between">
                    <span>{m}</span>
                    <span className="text-white/60">{[48,32,20][i]}%</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )
      case 'users':
        return (
          <div className={`${base}`}>
            <div className="flex items-center gap-3 mb-4 text-white/90"><Users className="h-5 w-5"/> Cohorts</div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {['New','Active','Returning','Enterprise'].map((t,i)=> (
                <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <div className="text-white/70 text-sm">{t}</div>
                  <div className="text-2xl text-white font-semibold">{[532,2140,864,42][i]}</div>
                </div>
              ))}
            </div>
          </div>
        )
      case 'orders':
        return (
          <div className={`${base}`}>
            <div className="flex items-center gap-3 mb-4 text-white/90"><ShoppingBag className="h-5 w-5"/> Funnel</div>
            <div className="grid md:grid-cols-5 gap-3">
              {['View','Add','Checkout','Pay','Complete'].map((s,i)=> (
                <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-white/70 text-sm">{s}</div>
                  <div className="text-2xl text-white font-semibold">{[100,64,38,31,29][i]}k</div>
                </div>
              ))}
            </div>
          </div>
        )
      case 'traffic':
        return (
          <div className={`${base}`}>
            <div className="flex items-center gap-3 mb-4 text-white/90"><Globe2 className="h-5 w-5"/> Top Sources</div>
            <div className="grid md:grid-cols-3 gap-3">
              {['Organic','Ads','Referral'].map((s,i)=> (
                <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-white/70 text-sm">{s}</div>
                  <div className="text-2xl text-white font-semibold">{[62,28,10][i]}%</div>
                </div>
              ))}
            </div>
          </div>
        )
      case 'systems':
        return (
          <div className={`${base}`}>
            <div className="flex items-center gap-3 mb-4 text-white/90"><Activity className="h-5 w-5"/> Health</div>
            <div className="grid md:grid-cols-3 gap-3">
              {['Latency','Errors','Uptime'].map((s,i)=> (
                <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-white/70 text-sm">{s}</div>
                  <div className="text-2xl text-white font-semibold">{['142ms','0.04%','99.96%'][i]}</div>
                </div>
              ))}
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-[#070816] relative text-white">
      <div className="absolute inset-0">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(59,130,246,0.15),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_50%_at_100%_50%,rgba(217,70,239,0.12),transparent_60%)]" />
      </div>

      <header className="relative">
        <div className="h-[64vh] md:h-[72vh] w-full">
          <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="absolute inset-x-0 top-0 h-[64vh] md:h-[72vh] flex items-center">
          <div className="container mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-sm text-white/80">Interactive Overview</span>
              </div>
              <h1 className="mt-4 text-4xl md:text-6xl font-semibold leading-tight text-white">
                Command Center for your product
              </h1>
              <p className="mt-3 text-white/70 max-w-xl">
                Tap the stat cards to preview detailed insights instantly. This is a mocked interactive demo — no APIs connected yet.
              </p>
            </motion.div>
          </div>
        </div>
      </header>

      <main className="relative z-10 -mt-24 md:-mt-32">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-4">
            {cards.map(c => (
              <StatCard key={c.key} {...c} active={active===c.key} onClick={() => setActive(c.key)} />
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
              className="mt-6"
            >
              <Detail type={active} />
            </motion.div>
          </AnimatePresence>

          <footer className="mt-10 flex items-center justify-between text-white/50 text-sm">
            <div className="flex items-center gap-2">
              <CreditCard className="h-4 w-4"/>
              Fintech-styled UI with 3D card hero
            </div>
            <div className="flex items-center gap-2">
              <Car className="h-4 w-4"/>
              Smooth micro-interactions
            </div>
          </footer>
        </div>
      </main>

      <style>{`
        @keyframes bar { 0%{ width: 0% } 50%{ width: 70% } 100%{ width: 90% } }
      `}</style>
    </div>
  )
}

export default App
