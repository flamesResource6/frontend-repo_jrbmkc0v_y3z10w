import React from 'react';
import { motion } from 'framer-motion';

function StatCard({ title, subtitle, endpoint, icon: Icon, accentFrom, accentTo, active, onClick }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ y: -6, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`relative group rounded-2xl p-5 text-left transition-all duration-300 w-full overflow-hidden ${
        active ? 'ring-2 ring-offset-2 ring-white/60 ring-offset-white/10' : 'ring-1 ring-white/20'
      } bg-white/10 backdrop-blur-xl border border-white/20`}
    >
      <div className="absolute inset-0 opacity-70">
        <div
          className="absolute -inset-20 blur-3xl rounded-full"
          style={{
            background: `radial-gradient(60% 60% at 50% 50%, ${accentFrom} 0%, ${accentTo} 60%, transparent 70%)`,
          }}
        />
      </div>

      <div className="relative flex items-start gap-4">
        <div className="shrink-0">
          <div className="h-12 w-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white shadow-inner">
            {Icon ? <Icon className="h-6 w-6" /> : <span className="text-lg">★</span>}
          </div>
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-white/90 font-semibold text-lg leading-tight">{title}</h3>
              <p className="text-white/60 text-sm mt-0.5">{subtitle}</p>
            </div>
            <div className="text-right">
              <span className="px-2 py-1 rounded-lg text-xs font-medium bg-white/10 text-white/80 border border-white/20">
                GET
              </span>
              <div className="mt-1 text-[11px] text-white/60 font-mono">{endpoint}</div>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <div className="h-1 w-24 bg-gradient-to-r from-white/40 via-white/60 to-white/40 rounded-full overflow-hidden">
              <div className="h-full w-1/3 bg-white/80 animate-[shimmer_1.6s_ease-in-out_infinite]" />
            </div>
            <span className="text-xs text-white/70">Mocked</span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
          100% { transform: translateX(200%); }
        }
      `}</style>
    </motion.button>
  );
}

export default StatCard;
