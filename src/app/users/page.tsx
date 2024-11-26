"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { UserList } from "@/components/UserList"

export default function Users() {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Usuários Cadastrados</h1>
          <Link href="/users/new">
            <Button>Novo Usuário</Button>
          </Link>
        </div>
        <UserList />
      </div>
    </div>
  )
}