import type { NextPage } from "next";
import Head from "next/head";
import { Menu } from "../componentes/Menu";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Loja Next</title>
        <meta name="description" content="Loja criada com Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Menu />

      <main className={styles.main}>
        <h1 className={styles.title}>Página Inicial</h1>
        <p className={styles.title}>
          Projeto Nivel 5 - Vamos Colocar o Framework Para Acessar um Banco de
          Dados
        </p>
      </main>
    </div>
  );
};

export default Home;
