import { NextApiRequest, NextApiResponse } from "next";
import { ControleLivros } from "../../../classes/controle/ControleLivros";

const controleLivros = new ControleLivros();

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === "DELETE") {
      const codigo = Number(req.query.codigo);
      if (isNaN(codigo)) {
        return res.status(400).json({ mensagem: "Código inválido" });
      }
      controleLivros.excluirLivro(codigo.toString());
      res.status(200).json({ mensagem: "Livro excluído com sucesso!" });
    } else {
      res.setHeader("Allow", ["DELETE"]);
      res.status(405).end(`Método ${req.method} não permitido`);
    }
  } catch {
    console.error("Erro ao obter editoras");
    res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
};

export default handler;
