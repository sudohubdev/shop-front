
import styles from '../Product/Product.module.scss'
import cart from '../../assets/cart.svg'
import product1 from '../../assets/product1.jpg'
import likeImg from '../../assets/like.svg'
import unlikeImg from '../../assets/unlike.svg'
import uncartimg from '../../assets/incart.png'
import { FC, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/store'
import { addProduct, addProductToFavourite, deleteProduct, setFavourites, setProducts } from '../../store/slices/CartSlice'
import { addToCart, addToFavouriteProducts, deleteClick, deleteFromFavourite } from './IProduct'
import { Link, useNavigate } from 'react-router-dom'

export interface IProduct{
    id:number
    name:string,
    discount:number,
    price:number,
    image:string
    count:number
}

const  Product:FC<IProduct> = ({id,name,discount,image,price,count})=> {
  
    const cartItems = useAppSelector(state=>state.cart.cartItems)
    const favourites = useAppSelector(state=>state.cart.favourites)
    const isAuth = useAppSelector(state=>state.auth.isAuth)
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const handleClick = () =>{
        addToCart(isAuth,dispatch,{id,name,discount,image,price,count},navigate)
        
    }

    const addToFavourite = ()=>{
        addToFavouriteProducts(isAuth,dispatch,{id,name,discount,image,price,count},navigate)
    }

   
   

    useEffect(()=>{
        if(!localStorage.getItem('cart')) {
            localStorage.setItem('cart',JSON.stringify([])) 
        }
        else{
        let cartItems:IProduct[] = JSON.parse(localStorage.getItem('cart')|| '')
        dispatch(setProducts(cartItems))
        }
        if(!localStorage.getItem('favourites')) {
        localStorage.setItem('favourites',JSON.stringify([])) 
        }
        else{
        let favourites:IProduct[] = JSON.parse(localStorage.getItem('favourites')|| '')
        dispatch(setFavourites(favourites))
        }
    },[])



    return (
        <div className={styles.product}  style={true?{}:{opacity:"0.4"}}>
            <Link to={`/product/${id}`} ><div className={styles.imgWrapper} > <img src={image} alt="" className={styles.productImg}/></div></Link>
           
            <h2 className={styles.title}>{name}</h2>
            {true?<div>
                <span className={styles.sale}>{discount} ₴</span>
            <div className={styles.price}>
                <span>{price} ₴</span>
                <div>{cartItems.find(el=>el.id==id)?<img src={uncartimg} alt="" onClick={()=>{deleteClick(id,dispatch)}} width={30} height={30}/>:<img src={cart} alt="" height={30} onClick={handleClick} width={30} />}</div>
            </div>
            {favourites.find(el=>el.id==id)?<img src={likeImg} alt="" onClick={()=>deleteFromFavourite(id,dispatch)} className={styles.likeImg}  />:<img src={unlikeImg}  alt="" onClick={addToFavourite} className={styles.likeImg} />}
            </div>:<div className={styles.notMatch}>

               <span>Немає в наявності</span>

                </div>
                
                
            }
           
        </div>
    );

}

export default Product;