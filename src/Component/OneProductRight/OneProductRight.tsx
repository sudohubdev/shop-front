
import styles from './OneProductRight.module.scss'
import starImg from '../../assets/star.svg'
import noStarImg from '../../assets/nostar.svg'
import unheartimg from '../../assets/unlike.svg'
import heart from '../../assets/like.svg'
import { useEffect, useState } from 'react'
import { useGetProductsQuery } from '../../store/rtkQuery/productsApi';
import { useNavigate, useParams } from 'react-router-dom';
import Product, { IProduct } from '../Product/Product'
import { addToCart, addToFavouriteProducts, deleteClick, deleteFromFavourite } from '../Product/IProduct';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { setFavourites } from '../../store/slices/CartSlice'
function OneProductRight() {
    const {data} = useGetProductsQuery();
    const stars = useAppSelector(state=>state.cart.stars)
    const noStars = 5-stars
    const {id} = useParams();
    const product = data?.find(item=>item.id==Number(id))
    const [favourite,setFavourite] = useState(false)
    const isAuth = useAppSelector(state=>state.auth.isAuth)
    const dispatch = useAppDispatch();
    const [isInCart, setIsInCart] = useState(false)
    const {favourites,cartItems} = useAppSelector(state=>state.cart)
    const navigate = useNavigate()



    const handlerClick = ()=>{
        if(product){
            const {id,discount,images,name,price} = product
             addToCart(isAuth,dispatch,{count:1,discount,id,image:images[0],name,price},navigate)
             setIsInCart(true)
        }
    }

    const deleteFromCart = ()=>{
        if(product){
            deleteClick(Number(id),dispatch)
            setIsInCart(false)
        }
    }

    const addToFavourite = ()=>{
        if(product){
             const {id,discount,images,name,price} = product
             addToFavouriteProducts(isAuth,dispatch,{count:1,discount,id,image:images[0],name,price},navigate)
             setFavourite(true);
        }
    }
    useEffect(()=>{
       
        if(!localStorage.getItem('favourites')) {
        localStorage.setItem('favourites',JSON.stringify([])) 
        }
        else{
        let favourites:IProduct[] = JSON.parse(localStorage.getItem('favourites')|| '')
        dispatch(setFavourites(favourites))
        }
        console.log(stars)
    },[])
   

    useEffect(()=>{

        cartItems.map(item=>item.id==Number(id)?setIsInCart(true):setIsInCart(false))

    },[cartItems])

    return (
        <div className={styles.oneProductRight}>
                <h1 className={styles.title}>{product?.name}</h1>
                <div className={styles.rating}>
                    <div className={styles.stars}>
                        {[...new Array(stars)].map(item=> <img src={starImg} alt="" />)}
                        {[...new Array(noStars)].map(item=> <img src={noStarImg} alt="" />)}
                        
                    </div>
                    <div className={styles.countRewievs}>
                        {product?.feedbacks.length} відгуків
                    </div>
                </div>


                <div className={styles.characteristics}>

                    {product?.characteristicsPairs.map(item => (
                        <div className={styles.characteristic}>{`${item.key}: `} {`${item.value}`}</div>
                    ))}

                </div>

                <div className={styles.menu}>

                    <div className={styles.priceBlock}>

                        <span>{product?.discount}₴</span>
                        <div className={styles.price}>{product?.price}₴</div>

                    </div>

                    <div className={styles.unHeartImg}>
                        {favourites.find(el=>el.id==product?.id)?<img src={heart} onClick={()=>deleteFromFavourite(product?product?.id:-1,dispatch)} alt="" />:<img src={unheartimg} onClick={addToFavourite} alt="" />}
                    </div>

                    <button className={styles.creditBtn}>Купити в кредит</button>
                   {!isInCart?<button className={styles.cartbtn} onClick={handlerClick} >В кошик</button>:<button className={styles.cartbtnDel} onClick={deleteFromCart} >Видалити з кошику</button>} 
                </div>
            </div>
    );

}

export default OneProductRight;