import {
  addCarrinho,
  addFavorite
} from '../../store/reducers/carrinho/carrinhoSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Produto as ProdutoType } from '../../App'
import * as S from './styles'
import { RootState } from '../../store/index'

type Props = {
  produto: ProdutoType
}

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

const ProdutoComponent = ({ produto }: Props) => {
  const dispatch = useDispatch()
  const favs = useSelector((state: RootState) => state.carrinho.favs)
  const is_fav = favs.some((p: ProdutoType) => p.id === produto.id)

  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Prices>
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>
      <S.BtnComprar
        onClick={() => dispatch(addFavorite(produto))}
        type="button"
      >
        {is_fav ? '- Remover dos favoritos' : '+ Adicionar aos favoritos'}
      </S.BtnComprar>

      <S.BtnComprar
        onClick={() => dispatch(addCarrinho(produto))}
        type="button"
      >
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Produto>
  )
}

export default ProdutoComponent
