import { useState } from "react";
import type { Produto } from "../types/Produto";
import { Card, ImagemProduto, Conteudo, NomeProduto, DescricaoProduto, PrecoProduto, BotaoCarrinho, BotaoExcluir } from "./ProdutoCard.styles";

interface ProdutoCardProps {
    produto: Produto;
    excluirProduto: (id: string) => void;
}

function ProdutoCard({ produto, excluirProduto }: ProdutoCardProps) {
    const [adicionado, setAdicionado] = useState(false);
    
    return (
        <Card>
            <ImagemProduto src={produto.imagem} alt={produto.nome}/>

            <BotaoExcluir type="button" aria-label={`Excluir ${produto.nome}`}
                onClick={() => excluirProduto(produto._id!)}>X
            </BotaoExcluir>

            <Conteudo>
                <NomeProduto>{produto.nome}</NomeProduto>
                <DescricaoProduto>{produto.descricao}</DescricaoProduto>

                <PrecoProduto>R$ {produto.preco.toFixed(2)}</PrecoProduto>

                <BotaoCarrinho type="button" $adicionado={adicionado} aria-pressed={adicionado}
                    onClick={() => setAdicionado((estadoAtual) => !estadoAtual)}>
                    {adicionado ? "Adicionado ao carrinho" : "Adicionar ao carrinho"}
                </BotaoCarrinho>
            </Conteudo>
        </Card>
    );
}

export default ProdutoCard;
