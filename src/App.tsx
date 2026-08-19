import {useEffect, useState} from "react";
import type {Produto} from './types/Produto';
import ProdutoCard from './components/ProdutoCard';
import ProdutoForm from "./components/ProdutoForm";
import {buscarProdutos, criarProduto, removerProduto} from "./services/api";
import { Cabecalho, ConteudoCabecalho, Marca, Pagina, Destaque, TituloDestaque, DescricaoDestaque, MensagemErro, MensagemCarregamento, ListaProdutos, Rodape, MarcaRodape} from "./App.styles";

function App() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [carregando, setCarregando] = useState<boolean>(true);
  const [erro, setErro] = useState("");

  const adicionarProduto = async (produto: Produto) => {
    try{
      setErro("");

      const novoProduto =await criarProduto(produto);

      setProdutos((produtosAtuais) => [...produtosAtuais, novoProduto]);

    } catch (erro) {
      console.error("Erro ao cadastrar produto", erro);
      setErro("Não foi possível cadastrar o produto");
    }
  };

  useEffect(() => {
    const carregarProdutos = async () => {
      try {
        const dados = await buscarProdutos();
        setProdutos(dados);

      } catch (erro) {
        console.error("Erro ao carregar produtos:", erro);
        setErro("Não foi possível carregar os produtos.");

      } finally {
        setCarregando(false);
      }
    };

    carregarProdutos();
  }, []);

  const excluirProduto = async (id: string) => {
    try {
        setErro("");

        await removerProduto(id);

        setProdutos((produtosAtuais) => produtosAtuais.filter((produto) => produto._id !== id)
    );
    } catch (erro) {
        console.error("Erro ao excluir produto:", erro);
        setErro("Não foi possível excluir o produto.");
    }
};

  return (
    <Pagina>
      <Cabecalho>
        <ConteudoCabecalho>
          <Marca>VirtualStore</Marca>
        </ConteudoCabecalho>
      </Cabecalho>

      <main>
        <Destaque>
          <TituloDestaque>Catálogo de Produtos</TituloDestaque>
          <DescricaoDestaque>Confira nossos produtos disponíveis</DescricaoDestaque>
        </Destaque>

        <ProdutoForm adicionarProduto={adicionarProduto} />

        {erro && <MensagemErro>{erro}</MensagemErro>}

        {carregando ? (
          <MensagemCarregamento>Carregando produtos...</MensagemCarregamento>
        ) : (
          <ListaProdutos>
            {produtos.map((produto) => (
              <ProdutoCard
                key={produto._id}
                produto= {produto}
                excluirProduto= {excluirProduto}
              />
            ))}
          </ListaProdutos>
        )}
      </main>

      <Rodape>
        <MarcaRodape>VirtualStore</MarcaRodape>
      </Rodape>

    </Pagina>
    );
}
export default App
