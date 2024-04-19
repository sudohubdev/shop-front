import { Dispatch } from "@reduxjs/toolkit"
import { addProduct, addProductToFavourite, deleteFromFavouritesProducts, deleteProduct } from "../../store/slices/CartSlice"
import { IProduct } from "./Product"
import { NavigateFunction } from "react-router-dom"




export const deleteClick = (id:number,dispatch:Dispatch) =>{
    
    const cartItems = JSON.parse(localStorage.getItem('cart')|| '').filter((item: { id: number })=>item.id!==id)
    dispatch(deleteProduct(id))
    localStorage.setItem('cart',JSON.stringify(cartItems))
  
}
export const deleteFromFavourite = (id:number,dispatch:Dispatch) =>{
    
    const cartItems = JSON.parse(localStorage.getItem('favourites')|| '').filter((item: { id: number })=>item.id!==id)
    dispatch(deleteFromFavouritesProducts(id))
    localStorage.setItem('favourites',JSON.stringify(cartItems))
  
}

export const addToCart = (isAuth:boolean,dispatch:Dispatch,item:IProduct,navigate:NavigateFunction)=>{
    if(isAuth){
        const cartItems:IProduct[] = JSON.parse(localStorage.getItem('cart')|| '')
         cartItems.push(item)
         localStorage.setItem('cart',JSON.stringify(cartItems))
         dispatch(addProduct(item)) 
     }
     else{
         navigate('/error')
     }
}
export const addToFavouriteProducts = (isAuth:boolean,dispatch:Dispatch,item:IProduct,navigate:NavigateFunction)=>{
    if(isAuth){
        const favouritesProducts:IProduct[] = JSON.parse(localStorage.getItem('favourites')|| '')
          favouritesProducts.push(item)
          localStorage.setItem('favourites',JSON.stringify(favouritesProducts))
          dispatch(addProductToFavourite(item))  
      }
      else{
          navigate('/error')
      }
}
