import { Injectable } from '@angular/core';
import { Livro } from './livro';

const baseURL = 'http://localhost:3030/livros';

interface LivroMongo {
  _id?: string;
  codEditora: number;
  titulo: string;
  resumo: string;
  autores: Array<string>;
}

@Injectable({
  providedIn: 'root',
})
export class ControleLivrosService {
  async obterLivros(): Promise<Livro[]> {
    try {
      const response = await fetch(baseURL, { method: 'GET' });
      if (!response.ok) {
        throw new Error('Erro ao obter livros');
      }
      const livrosMongo: LivroMongo[] = await response.json();
      return livrosMongo.map(
        (livroMongo) =>
          new Livro(
            livroMongo._id || '',
            livroMongo.codEditora,
            livroMongo.titulo,
            livroMongo.resumo,
            livroMongo.autores
          )
      );
    } catch (error) {
      console.error('Erro ao obter livros:', error);
      throw error;
    }
  }

  async incluir(livro: Livro): Promise<boolean> {
    const livroMongo: LivroMongo = {
      codEditora: livro.codEditora,
      titulo: livro.titulo,
      resumo: livro.resumo,
      autores: livro.autores,
    };

    try {
      const response = await fetch(baseURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(livroMongo),
      });

      if (!response.ok) {
        throw new Error('Erro ao incluir o livro');
      }

      return true;
    } catch (error) {
      console.error('Erro ao incluir livro:', error);
      return false;
    }
  }

  async excluir(id: string): Promise<boolean> {
    try {
      const response = await fetch(`${baseURL}/${id}`, { method: 'DELETE' });
      return response.ok;
    } catch (error) {
      console.error('Erro ao excluir livro:', error);
      return false;
    }
  }
}
