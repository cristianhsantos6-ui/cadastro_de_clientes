import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

// Imports dos seus arquivos (caminhos ajustados para a estrutura atual)
import { Pessoa } from '../../models/pessoa';
import { Estado } from '../../models/estado';
import { Municipio } from '../../models/municipio';
import { PessoaService } from '../../services/pessoa/pessoa-service';
import { UfMunicipioService } from '../../services/uf-municipios/uf-municipio.service';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css'
})
export class Formulario implements OnInit {

  id = 0;
  nome = '';
  email = '';
  cpf = '';
  dataNascimento = '';
  uf = '';
  municipio = '';

  listaUfs: Estado[] = [];
  listaMunicipios: Municipio[] = [];

  idPessoaEdit = 0;
  edit = false;

  constructor(
    private pessoaService: PessoaService,
    private route: ActivatedRoute,
    private router: Router,
    private ufMunicipioService: UfMunicipioService
  ) {}

  ngOnInit(): void {
    this.carregaEstadosSelect();
  }

  carregaEstadosSelect() {
    this.ufMunicipioService.listaUF()
      .subscribe({
        next: (dadosUf: Estado[]) => {
          this.listaUfs = [...dadosUf].sort((a, b) => a.nome.localeCompare(b.nome));
        },
        error: (msgErro: any) => {
          console.log('Erro ao carregar os Estados', msgErro);
        }
      });
  }

  carregaMunicipiosSelect() {
    if (!this.uf) {
      this.municipio = '';
      this.listaMunicipios = [];
      return;
    }

    this.ufMunicipioService.listaMunicipios(Number(this.uf))
      .subscribe({
        next: (dadosMunicipio: Municipio[]) => {
          this.listaMunicipios = dadosMunicipio;
        },
        error: (msgErro: any) => {
          console.log('Erro ao carregar os municípios: ', msgErro);
        }
      });
  }

  salvar() {
    const pessoa: Pessoa = {
      id: this.id,
      nome: this.nome,
      email: this.email,
      cpf: this.cpf,
      dataNascimento: this.dataNascimento,
      uf: this.uf,
      municipio: this.municipio
    };

    if (this.edit) {
      this.pessoaService.editar(pessoa);
    } else {
      this.pessoaService.adicionar(pessoa);
    }

    this.limpaAtributos();
    this.router.navigate(['/lista']);
  }

  limpaAtributos() {
    this.nome = '';
    this.email = '';
    this.cpf = '';
    this.dataNascimento = '';
    this.uf = '';
    this.municipio = '';
    this.listaMunicipios = [];
  }
}

