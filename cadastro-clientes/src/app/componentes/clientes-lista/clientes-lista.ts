import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf, NgFor } from '@angular/common';
import { Cliente } from '../../models/cliente.model';
import { ClienteService } from '../../services/cliente';

@Component({
  selector: 'app-cliente-lista',
  standalone: true,
  imports: [FormsModule, NgIf, NgFor],
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
    this.listaClientes = this.clienteService.buscarPorNome(this.termoBusca);
  }

  editar(cliente: Cliente): void {
    this.selecionarParaEditar.emit(cliente);
  }

  excluir(id?: string): void {
    if (id && confirm('Tem certeza que deseja excluir este cliente?')) {
      this.clienteService.excluir(id);
      this.atualizarLista();
    }
  }
}

