import { Livro } from "../modelo/Livro";

const baseURL = "http://localhost:3030/livros";

export class ControleLivros {
  async obterLivros(): Promise<Livro[]> {
    try {
      const response = await fetch(baseURL);
      if (!response.ok) {
        throw new Error("Erro ao obter livros");
      }
      const livros: Livro[] = await response.json();
      return livros;
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  async incluir(livro: Livro): Promise<void> {
    try {
      const response = await fetch(baseURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(livro),
      });

      if (!response.ok) {
        throw new Error("Erro ao incluir livro");
      }
      return;
    } catch (error) {
      console.error(error);
    }
  }

  async excluir(codigo: number): Promise<void> {
    try {
      const response = await fetch(`${baseURL}/${codigo}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Erro ao excluir livro");
      }
      return;
    } catch (error) {
      console.error(error);
    }
  }
}
