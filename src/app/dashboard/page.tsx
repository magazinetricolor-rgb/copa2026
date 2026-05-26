"use client"

import Link from "next/link"
import { Trophy, Target, TrendingUp, Flame, Clock, ChevronRight } from "lucide-react"

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-dark p-4 lg:p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-neon/20 to-neon/5 border border-neon/30 flex items-center justify-center text-2xl">
            👤
          </div>
          <div>
            <p className="text-white/50 text-sm">Bem-vindo de volta,</p>
            <h1 className="text-2xl font-bold text-white">BrunoCraque10 👋</h1>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="glass rounded-xl p-3 text-center">
            <Trophy className="w-4 h-4 text-neon mx-auto" />
            <p className="text-lg font-bold text-neon">1.280</p>
            <p className="text-[10px] text-white/40">PONTOS</p>
          </div>
          <div className="glass rounded-xl p-3 text-center">
            <Target className="w-4 h-4 text-white mx-auto" />
            <p className="text-lg font-bold text-white">12º</p>
            <p className="text-[10px] text-white/40">POSIÇÃO</p>
          </div>
          <div className="glass rounded-xl p-3 text-center">
            <TrendingUp className="w-4 h-4 text-neon mx-auto" />
            <p className="text-lg font-bold text-neon">85%</p>
            <p className="text-[10px] text-white/40">ACERTOS</p>
          </div>
          <div className="glass rounded-xl p-3 text-center">
            <Flame className="w-4 h-4 text-orange-400 mx-auto" />
            <p className="text-lg font-bold text-orange-400">6</p>
            <p className="text-[10px] text-white/40">SEQUÊNCIA</p>
          </div>
        </div>
      </div>

      {/* Next Match */}
      <div className="glass rounded-2xl p-6 mb-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark/90 z-10" />
        <div className="relative z-20">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-white/70">PRÓXIMO JOGO</h3>
            <div className="flex items-center gap-2 text-neon">
              <Clock className="w-4 h-4" />
              <span className="text-sm font-mono font-bold">2D 14H 32M</span>
            </div>
          </div>
          <div className="text-center mb-4">
            <p className="text-xs text-white/40">FASE DE GRUPOS - GRUPO F</p>
            <p className="text-sm text-white/60">10 JUN • 16:00</p>
          </div>
          <div className="flex items-center justify-center gap-8 mb-6">
            <div className="text-center">
              <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-4xl">🇧🇷</div>
              <p className="text-lg font-bold text-white mt-2">BRASIL</p>
            </div>
            <span className="text-4xl font-black text-white/20">VS</span>
            <div className="text-center">
              <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-4xl">🇫🇷</div>
              <p className="text-lg font-bold text-white mt-2">FRANÇA</p>
            </div>
          </div>
          <div className="max-w-sm mx-auto">
            <p className="text-center text-sm text-white/50 mb-3">QUAL SERÁ O PLACAR?</p>
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-16 h-14 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-2xl font-bold text-white">2</div>
              <span className="text-xl text-white/30">X</span>
              <div className="w-16 h-14 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-2xl font-bold text-white">1</div>
            </div>
            <button className="w-full py-3 bg-neon text-dark font-bold rounded-xl flex items-center justify-center gap-2">
              <Target className="w-5 h-5" />
              FAZER PALPITE
            </button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Link href="/" className="glass rounded-xl p-4 text-center hover:border-neon/30 transition-colors">
          <Trophy className="w-6 h-6 text-neon mx-auto mb-2" />
          <p className="text-sm font-bold text-white">JOGOS</p>
        </Link>
        <Link href="/" className="glass rounded-xl p-4 text-center hover:border-neon/30 transition-colors">
          <Target className="w-6 h-6 text-neon mx-auto mb-2" />
          <p className="text-sm font-bold text-white">PALPITES</p>
        </Link>
        <Link href="/" className="glass rounded-xl p-4 text-center hover:border-neon/30 transition-colors">
          <TrendingUp className="w-6 h-6 text-neon mx-auto mb-2" />
          <p className="text-sm font-bold text-white">RANKINGS</p>
        </Link>
        <Link href="/" className="glass rounded-xl p-4 text-center hover:border-neon/30 transition-colors">
          <Flame className="w-6 h-6 text-neon mx-auto mb-2" />
          <p className="text-sm font-bold text-white">PERFIL</p>
        </Link>
      </div>
    </div>
  )
}
