# MPB Copa 2026 - World Predictor

O maior bolão da Copa do Mundo 2026. Palpite, compita e vire lenda!

## 🚀 Tecnologias

- **Next.js 15** - Framework React com App Router
- **React 19** - Biblioteca UI
- **TypeScript** - Tipagem estática
- **TailwindCSS** - Estilização utilitária
- **Framer Motion** - Animações
- **Supabase** - Backend e autenticação
- **PWA** - Progressive Web App
- **Lucide React** - Ícones

## 📁 Estrutura do Projeto

```
copa-2026-predictor/
├── public/
│   ├── manifest.json       # Configuração PWA
│   ├── sw.js              # Service Worker
│   └── icons/             # Ícones do app
├── src/
│   ├── app/               # Páginas (App Router)
│   │   ├── page.tsx        # Landing/Login
│   │   ├── dashboard/      # Dashboard principal
│   │   ├── jogos/          # Jogos e calendário
│   │   ├── palpites/       # Área de palpites
│   │   ├── rankings/       # Ranking geral
│   │   ├── rankings/vergonha/ # Ranking da vergonha
│   │   ├── perfil/         # Perfil do usuário
│   │   ├── notificacoes/   # Central de notificações
│   │   ├── configuracoes/  # Configurações
│   │   ├── ligas/          # Ligas
│   │   ├── amigos/         # Amigos
│   │   └── auth/callback/  # Callback OAuth
│   ├── components/
│   │   ├── ui/            # Componentes reutilizáveis
│   │   ├── layout/        # Sidebar, Header, MobileNav
│   │   └── ...            # Outros componentes
│   ├── hooks/
│   │   └── useAuth.ts     # Contexto de autenticação
│   ├── lib/
│   │   ├── utils.ts       # Funções utilitárias
│   │   ├── data.ts        # Dados mockados
│   │   └── supabase.ts    # Cliente Supabase
│   ├── types/
│   │   ├── index.ts       # Tipos da aplicação
│   │   └── database.ts    # Tipos do Supabase
│   └── styles/
│       └── globals.css    # Estilos globais
├── tailwind.config.ts
├── next.config.js
├── tsconfig.json
└── package.json
```

## 🎨 Design System

### Cores
- **Background**: `#0a0e17` - Azul escuro profundo
- **Neon Green**: `#00ff88` - Verde neon principal
- **Neon Blue**: `#00d4ff` - Azul neon secundário
- **Neon Red**: `#ff4444` - Vermelho para ranking da vergonha
- **Gold**: `#ffd700` - Dourado para rankings

### Efeitos
- Glassmorphism com `backdrop-blur`
- Neon glows em elementos interativos
- Gradientes sutis de fundo
- Animações com Framer Motion

## 🛠️ Setup

### 1. Instalar dependências

```bash
npm install
# ou
yarn install
```

### 2. Configurar variáveis de ambiente

Crie um arquivo `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=sua_url_do_supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua_chave_anonima
```

### 3. Configurar Supabase

Execute o SQL em `supabase/schema.sql` para criar as tabelas.

### 4. Rodar o projeto

```bash
npm run dev
```

Acesse `http://localhost:3000`

## 📱 PWA

O app é instalável como PWA:
- Suporte offline com Service Worker
- Push notifications
- Splash screen
- Ícones em múltiplas resoluções

## 🏗️ Build

```bash
npm run build
npm start
```

## 🔧 Features

### Autenticação
- Login com Google OAuth
- Login com email/senha
- Validação de nickname em tempo real
- Avatares fixos (não editáveis)

### Dashboard
- Header com stats do usuário
- Próximo jogo com countdown
- Preview de rankings
- Gráficos de desempenho
- Missões diárias

### Jogos
- Filtros por fase (grupos, oitavas, etc.)
- Tabela de classificação
- Artilheiros
- Calendário oficial
- Informações dos estádios

### Palpites
- Input numérico animado
- Confirmação de palpite
- Bloqueio após início do jogo
- Sistema de pontuação

### Rankings
- Pódio animado top 3
- Tabela completa com filtros
- Ranking da vergonha (pé frio)
- Busca por nickname

### Perfil
- Stats detalhados
- Histórico de palpites
- Conquistas/badges
- Progressão de nível
- Ligas

## 📝 Licença

MIT


## 🚀 Quick Start

```bash
# 1. Extraia o ZIP e entre na pasta
cd copa-2026-predictor

# 2. Instale dependências
npm install

# 3. Rode o servidor
npm run dev

# 4. Abra http://localhost:3000
```

Veja o arquivo `COMO_RODAR.md` para o guia completo!
