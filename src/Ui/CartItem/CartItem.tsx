import styles from './CartItem.module.scss'
import photoCart from '../../assets/photoCart.svg'
import { IProduct } from '../../Component/Product/Product'
import { FC, useState } from 'react'
import { deleteClick } from '../../Component/Product/IProduct'
import { useAppDispatch } from '../../store/store'
import { increment,decrement } from '../../store/slices/CartSlice'




const CartItem:FC<IProduct>  = ({discount,id,image,name,price,count})=>{

    const dispatch = useAppDispatch()
    const discountFun = () =>{   
        if(count==1){
            deleteClick(id,dispatch)      
        }
        else{
            dispatch(decrement({id}))
        }
            
    }

    const incount = () =>{
      
        dispatch(increment({id}))
       
        
      

    }


    return (
        <div className={styles.cartItem}>
            <div className={styles.wrapper} >
                <div className={styles.photo}><img src={image} width={186} height={100} alt="" /></div>
                <div className={styles.descrOption}>
                    <h2 className={styles.title} >{name}</h2>
                    <button className={styles.btnDelete} onClick={()=>{deleteClick(id,dispatch)}} >Видалити</button>
                </div>
                <div>
                    <h5 className={styles.discount}>{discount} <span>₴</span> </h5>
                    <h3  className={styles.price}>{price} <span>₴</span></h3>
                    <div className={styles.countBlock}>
                        <span className={styles.action} onClick={discountFun}>-</span>
                        <div className={styles.count}>{count}</div>
                        <span className={styles.action} onClick={incount}>+</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CartItem