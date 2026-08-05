import { Component } from '@angular/core';
import { ClienteFormComponent } from './componentes/cliente-form/cliente-form';
import { ClienteListaComponent } from './componentes/clientes-lista/clientes-lista';
import { Cliente } from './models/cliente.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ClienteFormComponent, ClienteListaComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  clienteSelecionado: Cliente | null = null;

  prepararEdicao(cliente: Cliente): void {
    this.clienteSelecionado = cliente;
  }

  limparSelecao(): void {
    this.clienteSelecionado = null;
  }
}

