import { useState } from "react";
import type { Produto } from "../types/Produto";
import { BotaoCadastrar, Campo, CampoTexto, Formulario } from "./ProdutoForm.styles";

interface ProdutoFormProps {
    adicionarProduto: (produto: Produto) => void;
}

function ProdutoForm({adicionarProduto}: ProdutoFormProps) {
    const [nome, setNome] = useState("");
    const [preco, setPreco] = useState("");
    const [descricao, setDescricao] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const novoProduto = {
            nome,
            preco: Number(preco),
            imagem: `https://placehold.co/300x200?text=${nome}`,
            descricao
        };

        adicionarProduto(novoProduto);

        setNome("");
        setPreco("");
        setDescricao("");
    }

    return (
        <Formulario onSubmit={handleSubmit}>
            <Campo type="text" placeholder="Nome do produto" value={nome}
                onChange={(e) => setNome(e.target.value)} required
            />
            <Campo type="number" placeholder="Preço" value={preco}
                onChange={(e) => setPreco(e.target.value)} required    
            />

            <CampoTexto placeholder="Descrição" value={descricao}
                onChange={(e) => setDescricao(e.target.value)} required
            />

            <BotaoCadastrar type="submit">Cadastrar produto</BotaoCadastrar>
        </Formulario>
    );
}

export default ProdutoForm;