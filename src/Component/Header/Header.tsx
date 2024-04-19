import styles from '../Header/Header.module.scss';
import burgerImg from '../../assets/burger.svg'
import logoImg from '../../assets/logo.svg'
import heartImg from '../../assets/heart.svg'
import cartImg from '../../assets/ShopCart.svg'
import userImg from '../../assets/User.svg'
import { ChangeEvent, FC, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../store/store';
import logout from '../../assets/logout.png'
import { useExitMutation } from '../../store/rtkQuery/authApi';
import { useDispatch } from 'react-redux';
import { auth, setUser } from '../../store/slices/AuthSlice';
import { setFavourites, setProducts } from '../../store/slices/CartSlice';


interface IHeader {
    isShow:boolean;
    setIsShow(isShow:boolean):void
    setIsShowCart(isShow:boolean):void
}

const Header:FC<IHeader> = ({isShow,setIsShow,setIsShowCart}) => {
    const isAuth = useAppSelector(state=>state.auth.isAuth)
    const [exit,{data}]  = useExitMutation()
    const [value,setValue] = useState('');
    const cartItems = useAppSelector(state=>state.cart.cartItems)
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const handleClick =  () =>{
        window.scrollTo(0,0)
        setIsShow(true)
        document.body.style.height = "100vh"
        document.body.style.overflow = "hidden"
    }

    useEffect(()=>{
        if(data&&'success'in data){
            dispatch(auth(false))
        }
    },[data])


    const exitFromAccount = ()=>{
        exit(null)
        dispatch(auth(false))
        dispatch(setProducts([]))
        localStorage.setItem('cart','[]')
        dispatch(setFavourites([]))
        localStorage.setItem('favourites','[]')
    }

    const showCart = ()=>{
        window.scrollTo(0,0);
        setIsShowCart(true)
    }
  
    const searchProducts = ()=>{
        navigate(`/products?search=${value}`)
    }
   

    return (
        <header className={styles.header}>
            
            <div className={styles.headerLeft}>
            <div className={styles.burgerMenu} onClick={handleClick}><img src={burgerImg} alt="" /></div>
            <Link to={'/'}><div className={styles.logo}><img src={logoImg} alt="" /></div></Link>
            </div>
            <div className={styles.headerCenter}>

                <input type="text" onChange={(e)=>setValue(e.target.value)} placeholder='Я шукаю....' />
                <button onClick={searchProducts} >Знайти</button>

            </div>
            <div className={styles.headerRight}>
            <Link to={'/account/favourites'}> <div className={styles.menuimg}><img src={heartImg} alt="" /></div></Link>
                <div className={styles.menuimg}>
                    <span className={styles.count}>{cartItems.length}</span>
                    <img onClick={showCart} src={cartImg} alt="" />
                    
                </div>
                {isAuth? <div onClick={exitFromAccount} className={styles.menuimg}><img className={styles.logout} src={logout} alt="" /></div>:<Link to={'/login'}> <div className={styles.menuimg}><img src={userImg} alt="" /></div></Link>}
            </div>



        </header>
    );

}

export default Header;