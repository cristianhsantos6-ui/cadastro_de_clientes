import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf, NgFor } from '@angular/common'
import { Cliente } from '../../models/cliente.model'
import { ClienteService } from '../../services/cliente';

@Component({
  selector: 'app-cliente-form',
  standalone: true,
  imports: [ FormsModule, NgIf, NgFor],
  templateUrl: './cliente-form.html',
  styleUrl: './cliente-form.css'
})
export class ClienteFormComponent implements OnChanges {
  @Input() clienteParaEditar: Cliente | null = null;
  @Output() cancelouEdicao = new EventEmitter<void>();

  cliente: Cliente = this.novoCliente();

  estados: string[] = ["SE,AL,BA,PE,SP,RJ,PA"];

  constructor(private clienteService: ClienteService) {}

  ngOnChanges(): void {
    if (this.clienteParaEditar) {
      
    }
  }
}
