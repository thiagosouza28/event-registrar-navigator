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

export function UserList() {
  // Dados mockados para exemplo
  const users = [
    { id: 1, name: "João Silva", email: "joao@email.com", phone: "(11) 99999-9999" },
    { id: 2, name: "Maria Santos", email: "maria@email.com", phone: "(11) 88888-8888" },
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
    <Card>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nome</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Telefone</TableHead>
              <TableHead className="text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell className="text-right">
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleDelete(user.id)}
                  >
                    Deletar
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}