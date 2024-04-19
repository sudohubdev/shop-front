import { createSlice } from '@reduxjs/toolkit'
import { IResult } from '../rtkQuery/authApi'
import { IProduct } from '../../Component/Product/Product'

interface ICartSlice {
   cartItems:IProduct[],
   favourites:IProduct[],
   suma:number,
   stars:number
}

const initialState:ICartSlice = {
    cartItems:[],
    favourites:[],
    suma:0,
    stars:0,
}


const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct(state,action) {
        state.cartItems.push(action.payload)
    },

    deleteProduct(state,action){
        state.cartItems = state.cartItems.filter(item=>item.id!==action.payload)
    },
    deleteFromFavouritesProducts(state,action){
        state.favourites = state.favourites.filter(item=>item.id!==action.payload)
    },
    setProducts(state,action){
        state.cartItems = action.payload
    },
    setFavourites(state,action){
        state.favourites = action.payload
    },
    addProductToFavourite(state,action){
        state.favourites.push(action.payload)
    },
    increment(state,action){
        const el =state.cartItems.find(item=> item.id==action.payload.id)
        if(el){
            el.count++
        }
    },
    decrement(state,action){
        const el =state.cartItems.find(item=> item.id==action.payload.id)
        if(el){
            el.count--
        }
    },
    setSuma(state,action){
        state.suma=action.payload
    },
    addStars(state,action){
        state.stars=action.payload
    }
  },
})

export const { addProduct,deleteProduct,setProducts,increment,addStars,setSuma,decrement,addProductToFavourite,setFavourites,deleteFromFavouritesProducts } = CartSlice.actions
export default CartSlice.reducer