import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const baseURL = "http://localhost:3030/livros";

  if (req.method === "GET") {
    try {
      const response = await fetch(baseURL, { method: "GET" });
      const livros = await response.json();
      res.status(200).json(livros);
    } catch (error) {
      console.error("Erro ao obter livros:", error);
      res.status(500).json({ error: "Erro ao obter livros." });
    }
  } else if (req.method === "POST") {
    try {
      const novoLivro = req.body;
      const response = await fetch(baseURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(novoLivro),
      });
      const livroCriado = await response.json();
      res.status(201).json(livroCriado);
    } catch (error) {
      console.error("Erro ao incluir o livro:", error);
      res.status(500).json({ error: "Erro ao incluir o livro." });
    }
  } else if (req.method === "DELETE") {
    const { codigo } = req.query;
    try {
      const response = await fetch(`${baseURL}/${codigo}`, {
        method: "DELETE",
      });
      const resultado = await response.json();
      res.status(200).json(resultado);
    } catch (error) {
      console.error("Erro ao excluir o livro:", error);
      res.status(500).json({ error: "Erro ao excluir o livro." });
    }
  } else {
    res.setHeader("Allow", ["GET", "POST", "DELETE"]);
    res.status(405).end(`Método ${req.method} não permitido`);
  }
};

export default handler;
