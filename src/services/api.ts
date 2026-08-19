import type { Produto } from "../types/Produto";

const API_URL = "https://crudcrud.com/api/77f4a7bd4629431a9d64885df97eb48c";

export const buscarProdutos = async (): Promise<Produto[]> => {
    const resposta = await fetch(`${API_URL}/produtos`);

    if (!resposta.ok) {
        throw new Error("Erro ao carregar produtos");
    }

    return await resposta.json();
};

export const criarProduto = async (produto: Produto): Promise<Produto> => {
    const resposta = await fetch(`${API_URL}/produtos`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(produto)
    });

    if (!resposta.ok) {
        throw new Error("Erro ao cadastrar produto");
    }

    return await resposta.json();
};

export const removerProduto = async (id: string): Promise<void> => {
    const resposta = await fetch(`${API_URL}/produtos/${id}`, {
        method: "DELETE"
    });

    if (!resposta.ok) {
        throw new Error("Erro ao excluir produto");
    }
};

export default API_URL;