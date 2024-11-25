import { NextApiRequest, NextApiResponse } from "next";
import ControleEditora from "../../../classes/controle/ControleEditora";

const controleEditora = new ControleEditora();

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === "GET") {
      const editoras = controleEditora.getEditoras();
      res.status(200).json(editoras);
    } else {
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Método ${req.method} não permitido`);
    }
  } catch {
    console.error("Erro ao obter editoras");
    res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
};

export default handler;
