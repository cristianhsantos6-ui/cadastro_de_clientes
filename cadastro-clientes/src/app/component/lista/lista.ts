import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PessoaService } from '../../services/pessoa/pessoa-service';
import { Pessoa } from '../../models/pessoa';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista.html',
  styleUrl: './lista.css'
})
export class ListaComponent implements OnInit {

  pessoas: Pessoa[] = [];

  constructor(private pessoaService: PessoaService) {}

  ngOnInit(): void {
    this.pessoas = this.pessoaService.listar();
  }

  excluir(id?: number): void {
    if (id && confirm('Tem certeza que deseja excluir esta pessoa?')) {
      this.pessoaService.excluir(id);
      this.pessoas = this.pessoaService.listar();
    }
  }
}

