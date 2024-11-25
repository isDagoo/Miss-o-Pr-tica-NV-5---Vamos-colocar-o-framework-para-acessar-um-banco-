import { Livro } from "../modelo/Livro";

export class ControleLivros {
  private baseURL: string = "http://localhost:3030/livros";

  public async obterLivros(): Promise<Livro[]> {
    try {
      const response = await fetch(this.baseURL);
      if (!response.ok) {
        throw new Error("Erro ao obter livros");
      }
      const livros: Livro[] = await response.json();
      return livros;
    } catch (error) {
      console.error("Erro ao obter livros:", error);
      return [];
    }
  }

  public async incluirLivro(livro: Livro): Promise<boolean> {
    try {
      const response = await fetch(this.baseURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(livro),
      });
      return response.ok;
    } catch (error) {
      console.error("Erro ao incluir livro:", error);
      return false;
    }
  }

  public async excluirLivro(_id: string): Promise<boolean> {
    try {
      const response = await fetch(`${this.baseURL}/${_id}`, {
        method: "DELETE",
      });
      return response.ok;
    } catch (error) {
      console.error("Erro ao excluir livro:", error);
      return false;
    }
  }
}
