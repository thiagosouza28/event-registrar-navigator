"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Sistema de Cadastro
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-center text-gray-600">
            Bem-vindo ao sistema de cadastro. Escolha uma opção abaixo:
          </p>
          <div className="space-y-4">
            <Link href="/users/new" className="w-full block">
              <Button className="w-full">Novo Cadastro</Button>
            </Link>
            <Link href="/users" className="w-full block">
              <Button variant="outline" className="w-full">
                Ver Cadastros
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}