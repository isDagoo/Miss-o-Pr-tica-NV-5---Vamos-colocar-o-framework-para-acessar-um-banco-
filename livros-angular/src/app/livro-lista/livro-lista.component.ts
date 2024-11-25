import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Editora } from '../editora';
import { Livro } from '../livro';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';

@Component({
  selector: 'app-livro-lista',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './livro-lista.component.html',
  styleUrls: ['./livro-lista.component.css'],
})
export class LivroListaComponent implements OnInit {
  public editoras: Array<Editora> = [];
  public livros: Array<Livro> = [];

  constructor(
    private servEditora: ControleEditoraService,
    private servLivros: ControleLivrosService
  ) {}

  async ngOnInit(): Promise<void> {
    this.editoras = this.servEditora.getEditoras();
    this.livros = await this.servLivros.obterLivros();
  }

  excluir = async (codigo: string): Promise<void> => {
    await this.servLivros.excluir(codigo);
    this.livros = await this.servLivros.obterLivros();
  };

  obterNome = (codEditora: number): string | undefined => {
    return this.servEditora.getNomeEditoras(codEditora);
  };
}
