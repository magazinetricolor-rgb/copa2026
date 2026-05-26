# 🚀 GUIA COMPLETO - Como Rodar e Subir no GitHub

---

## PARTE 1: RODAR LOCALMENTE

### Pré-requisitos

1. **Node.js** instalado (versão 20.9 ou superior)
   - Baixe em: https://nodejs.org/ (baixe a versão LTS)
   - Verifique no terminal: `node --version`

2. **npm** (vem junto com o Node.js)
   - Verifique: `npm --version`

---

### Passo a passo para rodar

#### 1. Extraia o ZIP

```bash
# No Windows: clique direito no ZIP → "Extrair tudo"
# No Mac/Linux:
unzip copa-2026-predictor.zip -d copa-2026-predictor
```

#### 2. Entre na pasta do projeto

```bash
cd copa-2026-predictor
```

#### 3. Instale as dependências

```bash
npm install
```

> Isso vai baixar todas as bibliotecas (Next.js, React, Tailwind, Framer Motion, etc).
> Pode demorar 1-3 minutos dependendo da sua internet.

#### 4. Configure as variáveis de ambiente

```bash
# Copie o arquivo de exemplo
cp .env.example .env.local

# No Windows:
copy .env.example .env.local
```

Edite o `.env.local` e adicione suas credenciais do Supabase (opcional para rodar localmente):

```env
NEXT_PUBLIC_SUPABASE_URL=https://seu-projeto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua-chave-aqui
```

> **Nota:** O app funciona com dados mockados mesmo sem Supabase configurado!

#### 5. Inicie o servidor de desenvolvimento

```bash
npm run dev
```

#### 6. Acesse no navegador

Abra: **http://localhost:3000**

Pronto! 🎉 O app está rodando localmente.

---

### Comandos úteis

| Comando | O que faz |
|---------|-----------|
| `npm run dev` | Inicia servidor de desenvolvimento (hot reload) |
| `npm run build` | Gera build de produção |
| `npm run start` | Inicia servidor de produção (precisa do build primeiro) |
| `npm run lint` | Verifica erros de código |

---

## PARTE 2: SUBIR NO GITHUB

### Método 1: Pelo terminal (recomendado)

#### 1. Crie um repositório no GitHub

- Acesse: https://github.com/new
- Nome: `copa-2026-predictor`
- Descrição: "Bolão da Copa do Mundo 2026 - World Predictor"
- Deixe como **Public**
- **NÃO** marque "Add a README" (já temos um)
- Clique em **Create repository**

#### 2. No terminal, na pasta do projeto

```bash
# Inicialize o Git
git init

# Adicione todos os arquivos
git add .

# Faça o primeiro commit
git commit -m "Initial commit: Copa 2026 World Predictor"

# Conecte com o GitHub (substitua SEU-USUARIO)
git remote add origin https://github.com/SEU-USUARIO/copa-2026-predictor.git

# Envie para o GitHub
git branch -M main
git push -u origin main
```

> Digite seu usuário e token/personal access token quando pedir.

#### 3. Verifique no navegador

Acesse: `https://github.com/SEU-USUARIO/copa-2026-predictor`

Seus arquivos devem estar lá! ✅

---

### Método 2: Pelo site do GitHub (mais simples)

1. Acesse https://github.com/new
2. Crie o repositório (nome: `copa-2026-predictor`)
3. Na página do repositório, clique em **"Add file"** → **"Upload files"**
4. Arraste a pasta `copa-2026-predictor` inteira para a área de upload
5. Clique em **"Commit changes"**

> ⚠️ Limitação: só aceita 100 arquivos por vez e máximo 25MB por arquivo.

---

## PARTE 3: DEPLOY (colocar no ar)

### Opção 1: Vercel (recomendado - GRÁTIS)

1. Acesse: https://vercel.com
2. Faça login com sua conta do GitHub
3. Clique em **"Add New Project"**
4. Selecione o repositório `copa-2026-predictor`
5. Clique em **"Deploy"**

> Em 2 minutos seu app estará online com URL própria!

### Opção 2: Netlify (também GRÁTIS)

1. Acesse: https://netlify.com
2. Arraste a pasta `out` (gerada pelo `npm run build`)
3. Ou conecte com GitHub para deploy automático

---

## 📁 Estrutura do Projeto

```
copa-2026-predictor/
├── public/              # Arquivos estáticos (ícones, manifest, SW)
├── src/
│   ├── app/             # Páginas (Next.js App Router)
│   │   ├── page.tsx          # Landing/Login
│   │   ├── dashboard/        # Dashboard principal
│   │   ├── jogos/            # Jogos e calendário
│   │   ├── palpites/         # Área de palpites
│   │   ├── rankings/         # Ranking geral
│   │   ├── rankings/vergonha/ # Ranking da vergonha
│   │   ├── perfil/           # Perfil do usuário
│   │   ├── notificacoes/     # Notificações
│   │   ├── configuracoes/    # Configurações
│   │   ├── ligas/            # Ligas
│   │   ├── amigos/           # Amigos
│   │   └── auth/callback/    # Callback OAuth
│   ├── components/      # Componentes reutilizáveis
│   ├── hooks/           # Hooks customizados
│   ├── lib/             # Utilitários e dados
│   ├── types/           # Tipos TypeScript
│   └── styles/          # Estilos globais
├── supabase/
│   └── schema.sql       # Schema do banco de dados
├── package.json
├── tailwind.config.ts
├── next.config.js
├── tsconfig.json
└── README.md
```

---

## 🛠️ Solução de Problemas

### Erro: "Cannot find module"

```bash
# Delete node_modules e reinstale
rm -rf node_modules package-lock.json
npm install
```

### Erro: "Port 3000 is already in use"

```bash
# Use outra porta
npm run dev -- --port 3001
```

### Erro: "Module not found"

Verifique se está na pasta correta:
```bash
pwd
# Deve mostrar: .../copa-2026-predictor
```

---

## 🎨 O que você vai ver rodando localmente

- **Landing page** com efeitos neon e animações
- **Dashboard** completo com stats, próximo jogo, rankings
- **Jogos** com calendário, classificação, artilheiros
- **Palpites** com input numérico animado
- **Rankings** com pódio animado e tabela
- **Ranking da Vergonha** com tema vermelho neon
- **Perfil** com stats, histórico, conquistas
- **Notificações**, **Ligas**, **Amigos**, **Configurações**

Tudo com design dark, glassmorphism, neon green accents e animações suaves!

---

## 📞 Precisa de ajuda?

- Documentação Next.js: https://nextjs.org/docs
- Documentação Tailwind: https://tailwindcss.com/docs
- Documentação Supabase: https://supabase.com/docs

---

**Feito com 💚 para a Copa 2026!**
