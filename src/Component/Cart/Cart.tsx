import CartItem from '../../Ui/CartItem/CartItem'
import styles from './Cart.module.scss'
import close from '../../assets/close.png'
import { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { Link } from 'react-router-dom';
import { setSuma } from '../../store/slices/CartSlice';


interface ICart {
    setIsShowCart(isShow:boolean):void
}

const Cart:FC<ICart> = ({setIsShowCart})=>{

    const cartItems = useAppSelector(state=>state.cart.cartItems)
    const dispatch = useAppDispatch()
    const suma = cartItems.reduce((total, item) => total + item.price*item.count, 0);
   useEffect(()=>{
    localStorage.setItem('cart',JSON.stringify(cartItems))  
   },[cartItems])

   const purchase = ()=>{
    setIsShowCart(false)
    dispatch(setSuma(suma))
   }

    return (
        <div className={styles.cart}>
            <div className={styles.cartWrapper} >
                <div className={styles.titleBlock}>
                     <h1>Корзина</h1>
                     <button className={styles.close} onClick={()=>setIsShowCart(false)} ><img src={close} alt="" /></button>
                </div>
               <div className={styles.items}>

                {cartItems.map(item=>(
                    <CartItem count={item.count} discount={item.discount} id={item.id} image={item.image} name={item.name} price={item.price}/>
                ))}
           
               </div>
               <div className={styles.btns}>
                 <button className={styles.buttonAnd} onClick={()=>setIsShowCart(false)} >ПРОДОВЖИТИ ПОКУПКИ</button>
                 <div className={styles.btnBlockPay}>
                    <div className={styles.mainPrice}>{suma} <span>₴</span></div>
                    <Link to={'/order'}><button onClick={purchase} className={styles.buttonApply}>Оформити</button></Link>
                 </div>
               
               </div>
            
            </div>
        </div>
    )
}

export default Cart