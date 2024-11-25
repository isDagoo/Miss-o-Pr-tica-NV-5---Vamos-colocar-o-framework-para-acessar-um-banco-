import Editora from "../modelo/Editora";

const editoras: Array<Editora> = [
  { codEditora: 1, nome: "Editora A" },
  { codEditora: 2, nome: "Editora B" },
  { codEditora: 3, nome: "Editora C" },
];

class ControleEditora {
  getEditoras(): Array<Editora> {
    return editoras;
  }

  getNomeEditora(codEditora: number): string | undefined {
    const editora = editoras.filter(
      (editora) => editora.codEditora === codEditora
    );
    return editora.length > 0 ? editora[0].nome : undefined;
  }
}

export default ControleEditora;
