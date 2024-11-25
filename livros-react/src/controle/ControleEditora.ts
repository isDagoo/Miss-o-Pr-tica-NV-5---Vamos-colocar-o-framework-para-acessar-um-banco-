import { Editora } from "../modelo/Editora";

const editoras: Array<Editora> = [
  { codEditora: 1, nome: "Arqueiro" },
  { codEditora: 2, nome: "Companhia das Letras" },
  { codEditora: 3, nome: "Darkside" },
];

export class ControleEditora {
  getEditoras(): Array<Editora> {
    return editoras;
  }

  getNomeEditora(codEditora: number): string {
    const editora = editoras.filter((e) => e.codEditora === codEditora);
    return editora.length ? editora[0].nome : "Editora não encontrada";
  }
}
