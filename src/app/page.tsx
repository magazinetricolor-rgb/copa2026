"use client"

import { useState } from "react"
import { Trophy, Mail, Lock, User, Check, Eye, EyeOff } from "lucide-react"

export default function Home() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [nickname, setNickname] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isLogin, setIsLogin] = useState(true)
  const [nicknameOk, setNicknameOk] = useState<boolean | null>(null)

  const checkNick = (val: string) => {
    if (val.length >= 3) setNicknameOk(val !== "taken")
    else setNicknameOk(null)
  }

  return (
    <div className="min-h-screen bg-dark flex flex-col lg:flex-row">
      {/* Left - Hero */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
            <div className="text-5xl font-black text-white">26</div>
            <Trophy className="w-8 h-8 text-gold" />
          </div>
          <h1 className="text-4xl font-black text-white mb-2">
            COPA <span className="text-neon">2026</span>
          </h1>
          <p className="text-white/50 text-lg">O maior bolão da Copa do Mundo</p>
          <p className="text-neon text-xl font-bold mt-4">PALPITE. COMPITA. VIRE LENDA.</p>
        </div>
      </div>

      {/* Right - Form */}
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-md glass rounded-3xl p-8">
          <div className="text-center mb-6">
            <span className="text-neon font-bold text-sm tracking-widest">
              {isLogin ? "ENTRE NA COPA" : "CRIAR CONTA"}
            </span>
          </div>

          <button className="w-full py-3 bg-white text-dark font-bold rounded-xl mb-4 flex items-center justify-center gap-2">
            <span className="text-xl">G</span> Continuar com Google
          </button>

          <div className="flex items-center gap-4 mb-4">
            <div className="h-px flex-1 bg-white/10" />
            <span className="text-white/30 text-xs">ou</span>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          <div className="space-y-3">
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
              <input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white placeholder:text-white/30 focus:border-neon/30 outline-none"
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-10 py-3 text-white placeholder:text-white/30 focus:border-neon/30 outline-none"
              />
              <button onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30">
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>

            {!isLogin && (
              <div>
                <p className="text-xs text-neon mb-1">ESCOLHA SEU NICKNAME</p>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
                  <input
                    type="text"
                    placeholder="Seu nickname"
                    value={nickname}
                    onChange={(e) => { setNickname(e.target.value); checkNick(e.target.value) }}
                    className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-10 py-3 text-white placeholder:text-white/30 focus:border-neon/30 outline-none"
                  />
                  {nicknameOk === true && <Check className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neon" />}
                </div>
                {nicknameOk === true && <p className="text-xs text-neon mt-1">✓ Nickname disponível!</p>}
              </div>
            )}
          </div>

          <button className="w-full mt-6 py-4 bg-neon text-dark font-bold rounded-xl flex items-center justify-center gap-2">
            <Trophy className="w-5 h-5" />
            {isLogin ? "ENTRAR NA COPA" : "CRIAR CONTA"}
          </button>

          <p className="text-center text-sm text-white/40 mt-4">
            {isLogin ? "Ainda não tem conta?" : "Já tem conta?"}{" "}
            <button onClick={() => setIsLogin(!isLogin)} className="text-neon font-bold">
              {isLogin ? "Criar conta" : "Entrar"}
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}
