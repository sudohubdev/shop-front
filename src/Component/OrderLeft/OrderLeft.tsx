
import styles from './OrderLeft.module.scss'
import deleteIcon from '../../assets/deleteproduct.svg'
import product from '../../assets/phone.jpg'
import { useAppDispatch, useAppSelector } from '../../store/store'
import { deleteClick } from '../Product/IProduct'
import { useOrderPushMutation } from '../../store/rtkQuery/productsApi'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { setProducts } from '../../store/slices/CartSlice'
const OrderLeft = () => {
    
    const cartItems = useAppSelector(state=>state.cart.cartItems)
    const suma = useAppSelector(state=>state.cart.suma)
    const [pushOrder,{data,error}] = useOrderPushMutation()
    const {city,deliveryMethod,legalName,paymentMethod,phone,postOffice}= useAppSelector(state=>state.order)
    const dispatch= useAppDispatch()
    const navigate = useNavigate()


    const addOrder = ()=>{
        console.log(legalName)
        cartItems.map(item=>{
            pushOrder({productId:item.id,city,deliveryMethod,legalName,paymentMethod,phoneNumber:phone,postOffice,quantity:item.count})
           
        })
    }

    if(data&&'success' in data){
        if(data.success){
            dispatch(setProducts([]))
            localStorage.setItem('cart','[]')
        }
    }

    useEffect(()=>{

        if(data&&"success" in data){
            navigate('/')
        }

    },[data])

    return (
        <div className={styles.OrderLeft}>
            <div>
            <div className={styles.title}>
                <h4>Ваше замовлення</h4>
            </div>
        {cartItems.map(item=><div className={styles.item}>
                <div className={styles.itemImage}>
                    <img src={item.image} alt="" />
                </div>
                <div className={styles.descrBlock}>
                    <div className={styles.itemTitle}>{item.name}</div>
                    <div className={styles.priceBlock}>
                        <span>{item.discount} ₴</span>
                        <div className={styles.price}>{item.price} ₴</div>
                    </div>
                </div>
                <div className={styles.itemDeleteImage} onClick={()=>{deleteClick(item.id,dispatch)}}><img src={deleteIcon}  alt="" /></div>
            </div>)}
            
            
        
            </div>
          <div className={styles.bottomBlock}>
            <div className={styles.delivery}>
            <p>Вартість доставки</p>
            <div>Безкоштовно</div>
            </div>
           <div className={styles.payment}>
            <p>До сплати</p>
            <div>{suma} ₴</div>
           </div>
           <div className={styles.buttonWrapper}><button className={styles.button} onClick={addOrder}>Підтвердити замовлення</button></div>
           
          </div>
        
        
        
        </div>
    );

}

export default OrderLeft;