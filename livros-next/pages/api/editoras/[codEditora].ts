import { NextApiRequest, NextApiResponse } from "next";
import ControleEditora from "../../../classes/controle/ControleEditora";

const controleEditora = new ControleEditora();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === "GET") {
      const editoras = await controleEditora.getEditoras(); 
      res.status(200).json(editoras);
    } else {
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Método ${req.method} não permitido`);
    }
  } catch (error) {
    console.error("Erro ao obter editoras:", error);
    res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
};

export default handler;
