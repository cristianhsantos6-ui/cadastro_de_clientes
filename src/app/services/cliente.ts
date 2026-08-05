import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente.model';

@Injectable({
    providedIn: 'root'
})
export class ClienteService {
    private clientes: Cliente[] = [];

    constructor() {}
    obterTodos(): Cliente[] {
        return this.clientes
    }

   adicionar(cliente: Cliente): void {
    cliente.id = new Date().getTime().toString();
     this.clientes.push(cliente);
   }

   atualizar(clienteAtualizado: Cliente): void {
    const index = this.clientes.findIndex(c => c.id === clienteAtualizado.id);
    if (index !== -1) {
        this.clientes[index] = {...clienteAtualizado};
    }
   }

   excluir(id: string): void {
    this.clientes = this.clientes.filter(c => c.id !== id);
   }

   buscasarPorNome(nome: string): Cliente[] {
    if (!nome.trim()) return this.obterTodos();
    return this.clientes.filter(c => 
       c.nome.toLowerCase().includes(nome.toLocaleLowerCase()) 
       );
   }
}