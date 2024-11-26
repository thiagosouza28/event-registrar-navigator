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
import { Badge } from "@/components/ui/badge"

export function UserList() {
  // Dados mockados incluindo admin, diretor e participantes vinculados
  const users = [
    { 
      id: 1, 
      name: "Administrador", 
      email: "admin@sistema.com", 
      phone: "(11) 99999-9999",
      role: "Admin",
      participants: [
        { name: "João Silva", role: "Desenvolvedor" },
        { name: "Maria Santos", role: "Designer" }
      ]
    },
    { 
      id: 2, 
      name: "Diretor Executivo", 
      email: "diretor@sistema.com", 
      phone: "(11) 88888-8888",
      role: "Diretor",
      participants: [
        { name: "Pedro Alves", role: "Gerente de Projetos" },
        { name: "Ana Costa", role: "Analista Financeiro" }
      ]
    },
    { 
      id: 3, 
      name: "Carlos Mendes", 
      email: "carlos@email.com", 
      phone: "(11) 77777-7777",
      role: "Coordenador",
      participants: [
        { name: "Lucas Oliveira", role: "Estagiário" },
        { name: "Julia Lima", role: "Assistente" }
      ]
    },
    { 
      id: 4, 
      name: "Patricia Souza", 
      email: "patricia@email.com", 
      phone: "(11) 66666-6666",
      role: "Gerente",
      participants: [
        { name: "Roberto Santos", role: "Analista" },
        { name: "Fernanda Silva", role: "Desenvolvedora" }
      ]
    },
    { 
      id: 5, 
      name: "Ricardo Ferreira", 
      email: "ricardo@email.com", 
      phone: "(11) 55555-5555",
      role: "Supervisor",
      participants: [
        { name: "Amanda Costa", role: "Designer" },
        { name: "Bruno Martins", role: "Desenvolvedor Full Stack" }
      ]
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
                  <TableHead className="min-w-[250px]">Participantes</TableHead>
                  <TableHead className="text-right min-w-[100px]">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell className="font-medium">{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.phone}</TableCell>
                    <TableCell>
                      <Badge variant="secondary">
                        {user.role}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {user.participants.map((participant, index) => (
                          <Badge 
                            key={index} 
                            variant="outline" 
                            className="whitespace-nowrap"
                          >
                            {participant.name} ({participant.role})
                          </Badge>
                        ))}
                      </div>
                    </TableCell>
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