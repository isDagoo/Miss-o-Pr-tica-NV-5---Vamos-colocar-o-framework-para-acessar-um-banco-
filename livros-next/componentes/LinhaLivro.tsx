import React from "react";
import ControleEditora from "../classes/controle/ControleEditora";
import { Livro } from "../classes/modelo/Livro";

const controleEditora = new ControleEditora();

interface LinhaLivroProps {
  livro: Livro;
  excluir: (codigo: string) => void;
}

export const LinhaLivro: React.FC<LinhaLivroProps> = (props) => {
  const { livro, excluir } = props;

  const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);

  const handleExcluir = () => {
    if (livro._id) {
      excluir(livro._id);
    } else {
      alert("Erro: Livro sem ID para exclusão.");
    }
  };

  return (
    <tr>
      <td className="align-middle">
        {livro.titulo}
        <br />
        <button className="btn btn-danger btn-sm mt-2" onClick={handleExcluir}>
          Excluir
        </button>
      </td>
      <td className="align-middle">{livro.resumo}</td>
      <td className="align-middle">{nomeEditora}</td>
      <td className="align-middle">
        <ul className="list-unstyled">
          {livro.autores.map((autor, index) => (
            <li key={index}>{autor}</li>
          ))}
        </ul>
      </td>
    </tr>
  );
};
