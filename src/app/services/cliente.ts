import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente.model';

@Injectable({
    providedIn: 'root'
})
export class ClienteService {
    private clientes: Cliente[] = [];

    getClientes() : Cliente[] {
        return this.clientes;
    }

   getClienteById(id:|string) : Cliente | undefined {
    return this.clientes.find(c => c.id === id);
   }

   adicionar(cliente: Cliente): void {
    cliente.id = Math.random().toString(36).substring(2, 9);
   this.clientes.push(cliente);
   }

   atualizar(clienteAtualizado: Cliente): void {
    const index = this.clientes.findIndex(c => c.id === clienteAtualizado.id);
    if (index !== -1) {
        this.clientes[index] = clienteAtualizado;
    }
   }

   excluir(id: string): void {
    this.clientes = this.clientes.filter(c => c.id !== id);
   }

   pesquisarPorNome(nome: string): Cliente[] {
    if (!nome.trim()) return this.clientes;
    return this.clientes.filter(c => 
       c.nome.toLowerCase().includes(nome.toLocaleLowerCase()) 
       );
   }
}