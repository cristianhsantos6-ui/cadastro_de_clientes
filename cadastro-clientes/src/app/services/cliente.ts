import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private clientes: Cliente[] = [];

  constructor() {}

  obterTodos(): Cliente[] {
    // Retorna uma cópia do array para evitar mutação direta
    return [...this.clientes];
  }

  adicionar(cliente: Cliente): void {
    // Garante um ID único combinando data e número aleatório
    const novoCliente = {
      ...cliente,
      id: Date.now().toString() + Math.floor(Math.random() * 1000).toString()
    };
    this.clientes.push(novoCliente);
  }

  atualizar(clienteAtualizado: Cliente): void {
    const index = this.clientes.findIndex(c => c.id === clienteAtualizado.id);
    if (index !== -1) {
      this.clientes[index] = { ...clienteAtualizado };
    }
  }

  excluir(id: string): void {
    this.clientes = this.clientes.filter(c => c.id !== id);
  }

  buscarPorNome(nome: string): Cliente[] {
    const termo = nome ? nome.trim().toLowerCase() : '';
    if (!termo) {
      return this.obterTodos();
    }
    return this.clientes.filter(c => 
      c.nome.toLowerCase().includes(termo)
    );
  }
}

