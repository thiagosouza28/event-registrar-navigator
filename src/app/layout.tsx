import { Inter } from "next/font/google"
import { Toaster } from "@/components/ui/toaster"
import { Navigation } from "@/components/Navigation"
import "@/styles/globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: 'Sistema de Cadastro',
  description: 'Sistema de Cadastro de Usuários',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  )
}