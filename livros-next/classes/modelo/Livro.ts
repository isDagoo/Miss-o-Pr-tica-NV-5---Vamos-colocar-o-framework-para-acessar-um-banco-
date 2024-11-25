export class Livro {
  _id?: string;
  codEditora: number;
  titulo: string;
  resumo: string;
  autores: string[];

  constructor(
    codEditora: number,
    titulo: string,
    resumo: string,
    autores: string[],
    _id: string = ""
  ) {
    this._id = _id;
    this.codEditora = codEditora;
    this.titulo = titulo;
    this.resumo = resumo;
    this.autores = autores;
  }
}
