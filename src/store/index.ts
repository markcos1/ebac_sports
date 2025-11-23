import { configureStore } from '@reduxjs/toolkit'

import carrinhoReducer from '../features/carrinho/carrinhoSlice'

import api from '../services/request/requestSlice'

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
