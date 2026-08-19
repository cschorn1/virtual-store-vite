import styled from "styled-components";

export const Pagina = styled.div`
    min-height: 100vh;
    background-color: #f1f5f9;
    color: #1e293b;
`;

export const Cabecalho = styled.header`
    background-color: #1e293b;
    color: white;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
`;

export const ConteudoCabecalho = styled.div`
    max-width: 80rem;
    margin: 0 auto;
    padding: 1rem 1.5rem;
`;

export const Marca = styled.h1`
    margin: 0;
    font-size: 1.5rem;
    font-weight: 700;
`;

export const Destaque = styled.section`
    margin-bottom: 2.5rem;
    border-radius: 0.75rem;
    background-color: #e2e8f0;
    padding: 2rem 1.5rem;
    text-align: center;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
`;

export const TituloDestaque = styled.h2`
    margin: 0;
    font-size: 1.875rem;
    font-weight: 700;
`;

export const DescricaoDestaque = styled.p`
    margin: 0.5rem 0 0;
    color: #475569;
`;

export const MensagemErro = styled.p`
    margin: 0;
    padding: 2.5rem 0;
    text-align: center;
    font-weight: 500;
    color: #dc2626;
`;

export const MensagemCarregamento = styled.h3`
    margin: 0;
    padding: 2.5rem 0;
    text-align: center;
    font-size: 1.125rem;
    font-weight: 400;
    color: #475569;
`;

export const ListaProdutos = styled.section`
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-top: 2.5rem;
    padding: 0 1rem;

    @media (min-width: 40rem) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @media (min-width: 48rem) {
        padding: 0 1.5rem;
    }

    @media (min-width: 64rem) {
        grid-template-columns: repeat(4, minmax(0, 1fr));
        padding: 0 2rem;
    }
`;

export const Rodape = styled.footer`
    padding: 1.5rem;
    text-align: center;
    color: white;
    background-color: #1e293b;
`;

export const MarcaRodape = styled.p`
    margin: 0;
    font-size: 1.5rem;
    font-weight: 700;
`;