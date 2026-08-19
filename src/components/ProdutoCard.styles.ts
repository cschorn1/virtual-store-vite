import styled from "styled-components";

export const Card = styled.article`
    overflow: hidden;
    border-radius: 0.75rem;
    background-color: rgb(255 255 255 / 0.7);
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
    backdrop-filter: blur(4px);
    transition: transform 300ms, box-shadow 300ms;
    margin: 0.75rem;
    position: relative;

    &:hover {
        transform: scale(1.04);
        box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1);
    }
`;

export const ImagemProduto = styled.img`
    width: 100%;
    height: 12rem;
    object-fit: cover;
`;

export const BotaoExcluir = styled.button`
    position: absolute;
    top: 0.75rem;
    right: 0.75rem;
    z-index: 1;
    display: grid;
    width: 2rem;
    height: 2rem;
    place-items: center;
    border: 0;
    border-radius: 50%;
    background-color: #dc3545;
    color: white;
    cursor: pointer;

    &:hover {
        background-color: #bb2d3b;
    }
`;

export const Conteudo = styled.div`
    display: flex;
    min-height: 14rem;
    flex-direction: column;
    padding: 1.25rem;
`;

export const NomeProduto = styled.h2`
    font-size: 1.25rem;
    font-weight: 700;
    color: rgb(30 41 59);
`;

export const DescricaoProduto = styled.p`
    margin-top: 0.5rem;
    flex: 1;
    font-size: 0.875rem;
    line-height: 1.625;
    color: rgb(71 85 105);
`;

export const PrecoProduto = styled.strong`
    margin-top: 1rem;
    font-size: 1.25rem;
    color: rgb(37 99 235);
`;

interface BotaoCarrinhoProps {
    $adicionado: boolean;
}

export const BotaoCarrinho = styled.button<BotaoCarrinhoProps>`
    margin-top: 1rem;
    border: 0;
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    font-weight: 500;
    color: white;
    background-color: ${({ $adicionado }) =>
        $adicionado ? "#198754" : "#6c757d"};
    cursor: pointer;
`;
