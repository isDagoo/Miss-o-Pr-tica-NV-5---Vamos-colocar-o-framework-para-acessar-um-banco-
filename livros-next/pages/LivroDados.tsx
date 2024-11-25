import { useState } from "react";
import { useRouter } from "next/router";
import { ControleLivros } from "../classes/controle/ControleLivros";
import { Menu } from "../componentes/Menu";
const controleLivros = new ControleLivros();

const LivroDados = () => {
  const [livro, setLivro] = useState({
    codEditora: 0,
    titulo: "",
    resumo: "",
    autores: [""],
  });
  const router = useRouter();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setLivro((prevLivro) => ({
      ...prevLivro,
      [name]: name === "codEditora" ? parseInt(value) || 0 : value,
    }));
  };

  const handleAutorChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { value } = e.target;
    const novosAutores = [...livro.autores];
    novosAutores[index] = value;
    setLivro({ ...livro, autores: novosAutores });
  };

  const incluir = () => {
    const livroNovo = {
      ...livro,
      autores: livro.autores.filter((autor) => autor.trim() !== ""),
    };

    if (livroNovo.autores.length === 0) {
      alert("Pelo menos um autor deve ser informado.");
      return;
    }

    controleLivros
      .incluirLivro(livroNovo)
      .then((sucesso) => {
        if (sucesso) {
          router.push("/");
        } else {
          alert("Erro ao incluir livro.");
        }
      })
      .catch((error) => {
        alert(`Erro ao incluir livro: ${error.message}`);
      });
  };

  return (
    <div>
      <Menu /> {}
      <div>
        <h1>Incluir Livro</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            incluir();
          }}
        >
          {/* Título */}
          <div className="mb-3">
            <label htmlFor="titulo" className="form-label">
              Título
            </label>
            <input
              type="text"
              name="titulo"
              id="titulo"
              className="form-control"
              value={livro.titulo}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Resumo */}
          <div className="mb-3">
            <label htmlFor="resumo" className="form-label">
              Resumo
            </label>
            <textarea
              name="resumo"
              id="resumo"
              className="form-control"
              value={livro.resumo}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Editora */}
          <div className="mb-3">
            <label htmlFor="codEditora" className="form-label">
              Editora
            </label>
            <input
              type="number"
              name="codEditora"
              id="codEditora"
              className="form-control"
              value={livro.codEditora}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Autores */}
          <div className="mb-3">
            <label className="form-label">Autores</label>
            {livro.autores.map((autor, index) => (
              <div key={index} className="input-group mb-2">
                <input
                  type="text"
                  value={autor}
                  onChange={(e) => handleAutorChange(e, index)}
                  className="form-control"
                  placeholder={`Autor ${index + 1}`}
                />
              </div>
            ))}
            <button
              type="button"
              onClick={() =>
                setLivro({ ...livro, autores: [...livro.autores, ""] })
              }
              className="btn btn-secondary mb-3"
            >
              Adicionar Autor
            </button>
          </div>

          {/* Botão de Incluir Livro */}
          <button type="submit" className="btn btn-primary">
            Incluir Livro
          </button>
        </form>
      </div>
    </div>
  );
};

export default LivroDados;
