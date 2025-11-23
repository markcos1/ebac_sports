import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from './../../types/produto'

type CarrinhoState = {
  itens: Produto[]
  favs: Produto[]
}

const initialState: CarrinhoState = {
  itens: [],
  favs: []
}

const carrinhoSlice = createSlice({
  name: 'Carrinho',
  initialState,
  reducers: {
    addCarrinho: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      const Exist = state.itens.find((p) => p.id === produto.id)

      if (Exist) {
        alert('Item ja adicionado')
      } else {
        state.itens.push(produto)
      }
    },
    addFavorite: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload
      const jaFavoritado = state.favs.find((p) => p.id === produto.id)

      if (jaFavoritado) {
        state.favs = state.favs.filter((p) => p.id !== produto.id)
      } else {
        state.favs.push(produto)
      }
    }
  }
})

export const { addCarrinho, addFavorite } = carrinhoSlice.actions
export default carrinhoSlice.reducer
