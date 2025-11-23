import { useSelector } from 'react-redux'

import * as S from './styles'

import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'
import { RootState } from '../../store'

const Header = () => {
  const itensCarrinho = useSelector((state: RootState) => state.carrinho.itens)
  const Favoritos = useSelector((state: RootState) => state.carrinho.favs)

  const ValorTotal = ItensCarrinho.reduce((acc, item) => acc + item.preco, 0)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{Favoritos.length} favoritos</span>
        <img src={cesta} />
        <span>
          {ItensCarrinho.length} itens, valor total: {paraReal(ValorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
