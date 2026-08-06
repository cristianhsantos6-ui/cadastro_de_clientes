import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { Cliente } from '../../models/cliente.model';
import { ClienteService } from '../../services/cliente';

@Component({
  selector: 'app-cliente-form',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './cliente-form.html',
  styleUrl: './cliente-form.css'
})
export class ClienteFormComponent implements OnChanges {
  @Input() clienteParaEditar: Cliente | null = null;
  @Output() cancelouEdicao = new EventEmitter<void>();
  @Output() clienteSalvo = new EventEmitter<void>();

  cliente: Cliente = this.novoCliente();
  estados: string[] = ['SE', 'AL', 'BA', 'PE', 'SP', 'RJ', 'PA'];

  constructor(private clienteService: ClienteService) {}

  ngOnChanges(): void {
    if (this.clienteParaEditar) {
      this.cliente = { ...this.clienteParaEditar };
    } else {
      this.cliente = this.novoCliente();
    }
  }

  novoCliente(): Cliente {
    return { nome: '', email: '', cpf: '', dataNascimento: '', uf: '', municipio: '' };
  }

  salvar(): void {
    if (!this.cliente.nome || !this.cliente.email || !this.cliente.cpf) {
      alert('Preencha os campos obrigatórios!');
      return;
    }

    if (this.cliente.id) {
      this.clienteService.atualizar(this.cliente);
      alert('Cliente atualizado com sucesso!');
    } else {
      this.clienteService.adicionar(this.cliente);
      alert('Cliente cadastrado com sucesso!');
    }

    this.clienteSalvo.emit();
    this.cancelar();
  }

  cancelar(): void {
    this.cliente = this.novoCliente();
    this.cancelouEdicao.emit();
  }
}

