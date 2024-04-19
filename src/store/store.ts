import { configureStore } from '@reduxjs/toolkit';
import AuthSlice from './slices/AuthSlice';
import { TypedUseSelectorHook, useDispatch, useSelector, useStore } from 'react-redux';
import { authApi } from "./rtkQuery/authApi";
import { productsApi } from './rtkQuery/productsApi';
import CartSlice from './slices/CartSlice';
import { commentApi } from './rtkQuery/commentApi';
import OrderSlice from './slices/OrderSlice';

const store = configureStore({
  reducer: {
    auth:AuthSlice,
    cart:CartSlice,
    order:OrderSlice,
    [authApi.reducerPath]: authApi.reducer, 
    [productsApi.reducerPath]: productsApi.reducer, 
    [commentApi.reducerPath]:commentApi.reducer
    
},
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware,productsApi.middleware,commentApi.middleware)
});

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store;