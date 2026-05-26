export const metadata = {
  title: "Copa 2026 - World Predictor",
  description: "O maior bolão da Copa do Mundo 2026",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-dark">
        {children}
      </body>
    </html>
  )
}
