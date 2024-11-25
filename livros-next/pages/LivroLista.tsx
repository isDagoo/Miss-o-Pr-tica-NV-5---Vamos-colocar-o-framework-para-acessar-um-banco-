import { useState, useEffect } from "react";
import { ControleLivros } from "../classes/controle/ControleLivros";
import { Livro } from "../classes/modelo/Livro";
import { Menu } from "../componentes/Menu";

const controleLivros = new ControleLivros();

const LinhaLivro = (props: { livro: Livro; excluir: (id: string) => void }) => {
  const { livro, excluir } = props;

  const livroId = livro._id ?? "";
  return (
    <tr>
      <td>
        <button onClick={() => excluir(livroId)} className="btn btn-danger">
          Excluir
        </button>
      </td>
      <td>{livro.titulo}</td>
      <td>{livro.resumo}</td>
      <td>{livro.codEditora}</td>
      <td>
        <ul>
          {livro.autores.map((autor, index) => (
            <li key={index}>{autor}</li>
          ))}
        </ul>
      </td>
    </tr>
  );
};

const LivroLista = () => {
  const [livros, setLivros] = useState<Livro[]>([]);

  useEffect(() => {
    controleLivros.obterLivros().then((livros) => {
      setLivros(livros);
    });
  }, []);

  const excluir = (id: string) => {
    if (!id) {
      alert("ID do livro não encontrado.");
      return;
    }

    controleLivros.excluirLivro(id).then((sucesso) => {
      if (sucesso) {
        setLivros((livrosAntigos) =>
          livrosAntigos.filter((livro) => livro._id !== id)
        );
      } else {
        alert("Erro ao excluir livro.");
      }
    });
  };

  return (
    <main>
      <Menu /> {}
      <h1>Lista de Livros</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Ações</th>
            <th>Título</th>
            <th>Resumo</th>
            <th>Editora</th>
            <th>Autores</th>
          </tr>
        </thead>
        <tbody>
          {livros.map((livro, index) => (
            <LinhaLivro key={index} livro={livro} excluir={excluir} />
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default LivroLista;
