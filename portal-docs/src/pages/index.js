import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

const produtos = [
  {
    nome: 'ePaper',
    descricao: 'Manuais, guias e release notes do ePaper.',
    url: '/docs/ePaper/',
  },
  {
    nome: 'PrismaWeb',
    descricao: 'Documentação de gestão de bibliotecas.',
    url: '/docs/prismaweb/',
  },
  {
    nome: 'Kapture',
    descricao: 'Documentação de digitalização e equipamentos.',
    url: '/docs/kapture/',
  },
  {
    nome: 'X-arq',
    descricao: 'Documentação de gestão arquivística.',
    url: '/docs/x-arq/',
  },
];

export default function Home() {
  return (
    <Layout
      title="Portal de Documentação"
      description="Manuais, guias e release notes"
    >
      <main className="container margin-vert--xl">
        <div style={{textAlign: 'center', marginBottom: '3rem'}}>
          <h1>Portal de Documentação</h1>
          <p>Consultar os manuais, guias e release notes dos produtos.</p>
        </div>

        <div
          className="row"
          style={{justifyContent: 'center', rowGap: '1.5rem'}}
        >
          {produtos.map((produto) => (
            <div
              className="col col--4"
              key={produto.nome}
              style={{display: 'flex'}}
            >
              <div
                className="card"
                style={{
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  textAlign: 'center',
                }}
              >
                <div className="card__header">
                  <h2>{produto.nome}</h2>
                </div>

                <div className="card__body" style={{flex: 1}}>
                  <p>{produto.descricao}</p>
                </div>

                <div className="card__footer">
                  {produto.url ? (
                    <Link
                      className="button button--primary button--block"
                      to={produto.url}
                    >
                      Consultar documentação
                    </Link>
                  ) : (
                    <button
                      className="button button--secondary button--block"
                      disabled
                    >
                      Em preparação
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}