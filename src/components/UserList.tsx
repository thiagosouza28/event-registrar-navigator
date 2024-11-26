"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/use-toast"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

export function UserList() {
  // Dados mockados incluindo admin e diretor
  const users = [
    { 
      id: 1, 
      name: "Administrador", 
      email: "admin@sistema.com", 
      phone: "(11) 99999-9999",
      role: "Admin"
    },
    { 
      id: 2, 
      name: "Diretor Executivo", 
      email: "diretor@sistema.com", 
      phone: "(11) 88888-8888",
      role: "Diretor"
    },
    { 
      id: 3, 
      name: "João Silva", 
      email: "joao@email.com", 
      phone: "(11) 77777-7777",
      role: "Usuário"
    },
    { 
      id: 4, 
      name: "Maria Santos", 
      email: "maria@email.com", 
      phone: "(11) 66666-6666",
      role: "Usuário"
    },
  ]

  const handleDelete = (id: number) => {
    // Aqui você implementará a lógica de deleção com MongoDB
    console.log("Deletando usuário:", id)
    toast({
      title: "Usuário deletado",
      description: "O usuário foi removido com sucesso.",
    })
  }

  return (
    <Card className="w-full">
      <CardContent className="p-0">
        <ScrollArea className="h-[calc(100vh-12rem)] w-full">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="min-w-[150px]">Nome</TableHead>
                  <TableHead className="min-w-[200px]">Email</TableHead>
                  <TableHead className="min-w-[150px]">Telefone</TableHead>
                  <TableHead className="min-w-[100px]">Cargo</TableHead>
                  <TableHead className="text-right min-w-[100px]">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell className="font-medium">{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.phone}</TableCell>
                    <TableCell>{user.role}</TableCell>
                    <TableCell className="text-right">
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => handleDelete(user.id)}
                        className="whitespace-nowrap"
                      >
                        Deletar
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}