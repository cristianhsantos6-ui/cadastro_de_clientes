import { Injectable } from '@angular/core';
import { Pessoa } from '../../models/pessoa';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  private listaPessoas: Pessoa[] = [];
  private proximoId = 1;

  listar(): Pessoa[] {
    return this.listaPessoas;
  }

  adicionar(pessoa: Pessoa): void {
    pessoa.id = this.proximoId++;
    this.listaPessoas.push({ ...pessoa });
  }

  excluir(id: number): void {
    this.listaPessoas = this.listaPessoas.filter(p => p.id !== id);
  }

  buscarPorId(id: number): Pessoa | undefined {
    return this.listaPessoas.find(p => p.id === id);
  }

  editar(pessoa: Pessoa): void {
    const index = this.listaPessoas.findIndex(p => p.id === pessoa.id);
    if (index !== -1) {
      this.listaPessoas[index] = { ...pessoa };
    }
  }
}

