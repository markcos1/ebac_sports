import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'
import { useGetProdutosQuery } from '../services/api'
import * as S from './styles'

const ProdutosComponent = () => {
  const { data: produtos, isLoading, error } = useGetProdutosQuery()

  if (isLoading) return <h2>Carregando...</h2>
  if (error) return <p>Erro ao carregar produtos</p>

  return (
    <>
      <S.Produtos>
        {produtos?.map((produto: ProdutoType) => (
          <Produto key={produto.id} produto={produto} />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
