import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { Cliente } from '../../models/cliente.model';
import { ClienteService } from '../../services/cliente';

@Component({
  selector: 'app-cliente-lista',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf],
  templateUrl: './clientes-lista.html',
  styleUrl: './clientes-lista.css'
})
export class ClienteListaComponent implements OnInit {
  @Output() selecionarParaEditar = new EventEmitter<Cliente>();

  termoBusca: string = '';
  listaClientes: Cliente[] = [];

  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {
    this.atualizarLista();
  }

  atualizarLista(): void {
    this.listaClientes = this.clienteService.pesquisarPorNome(this.termoBusca);
  }

  editar(cliente: Cliente): void {
    this.selecionarParaEditar.emit(cliente);
  }

  deletar(id?: string): void {
    if (id && confirm('Deseja realmente excluir este cliente?')) {
      this.clienteService.excluir(id);
      this.atualizarLista();
    }
  }
}
