
import styles from './Menu.module.scss'
import logoImg from '../../assets/logo.svg'
import MenuInput from '../../Ui/MenuInput/MenuInput';
import phoneImg from '../../assets/phone.svg'
import tvImg from '../../assets/tv.png'
import tabletImg from '../../assets/tablet.png'
import compuuterImg from '../../assets/computer.svg'
import laptopImg from '../../assets/laptop.svg'
import facebookImg from '../../assets/facebook.svg'
import googleimg from '../../assets/google.svg'
import speakerImg from '../../assets/speaker.png'
import hearPhones from '../../assets/headPhones.png'
import some from '../../assets/3.svg'
import twitter from '../../assets/twitter.svg'
import { FC, useEffect, useState } from 'react';
import closeimg from '../../assets/close.svg'
import { Link, useNavigate } from 'react-router-dom';
import watches from '../../assets/watches.png'
import { useAppSelector } from '../../store/store';
import { useExitMutation } from '../../store/rtkQuery/authApi';
import { useDispatch } from 'react-redux';
import { auth } from '../../store/slices/AuthSlice';
import { setFavourites, setProducts } from '../../store/slices/CartSlice';


interface IMenu {
    isShow: boolean;
    setIsShow(isShow: boolean): void
}

const Menu: FC<IMenu> = ({ isShow, setIsShow }) => {
    const [exit, { data }] = useExitMutation()
    const dispatch = useDispatch()
    const cartItems = useAppSelector(state=>state.cart.cartItems)
    const {isAuth,lastName,name} = useAppSelector(state=>state.auth)
    const [selectedOption, setSelectedOption] = useState('');
    const navigate = useNavigate()
    const handleClick = () => {
        setIsShow(false)
        document.body.style.height = "100%"
        document.body.style.overflow = "auto"
    }
    useEffect(() => {

        if (data && 'success' in data) {
            dispatch(auth(false))
        }
    }, [data])

    const logout = () => {
        exit(null)
        dispatch(auth(false))
        cartItems.map(item=>dispatch(setProducts([])))
        localStorage.setItem('cart','[]')
        dispatch(setFavourites([]))
        localStorage.setItem('favourites','[]')
    }

    useEffect(()=>{
        if(selectedOption!=''){
            navigate(`products?type=${selectedOption}`)
        }
    },[selectedOption])
    

    return (
        <div>
            <div className={isShow ? styles.overlap : styles.overlapActtive}></div>

            <div className={isShow ? styles.cartActive : styles.cart}>
                <div className={styles.cartHeader}>
                    <div className={styles.logoBlock}>
                        <img src={logoImg} alt="" />
                        <span>D_SHOP</span>
                    </div>
                    <div className={styles.loginBlock}>
                    {isAuth?<p className={styles.fullname}>{name} {lastName}</p>:<p className={styles.fullname}>Акаунт</p>}
                        {isAuth?<div>
                             <Link to={"/account/cab"}><button className={styles.btnLog}>особистий кабінет</button></Link>
                            <button className={styles.btnLog} onClick={logout} >вийти</button>
                        </div>:<div>
                             <Link to={"/register"}><button className={styles.btnLog}>Реєстрація</button></Link>
                             <Link to={"/login"}><button className={styles.btnLog}>Вхід</button></Link>
                        </div>}
                    </div>
                    <div className={styles.closeImg} onClick={handleClick}><img src={closeimg} alt="" /></div>
                </div>
                <div className={styles.cartCenter}>

                    <h4>Категорії:</h4>
                    <MenuInput category='Tablets' selectedOption={selectedOption} setSelectedOption={setSelectedOption} id={1} text='планшети' img={tabletImg} />
                    <MenuInput category='Laptops' selectedOption={selectedOption} setSelectedOption={setSelectedOption} id={2} text='ноутбуки' img={laptopImg} />
                    <MenuInput category='Smartphones' selectedOption={selectedOption} setSelectedOption={setSelectedOption} id={3} text='смартфони' img={phoneImg} />
                    <MenuInput category='TVs' selectedOption={selectedOption} setSelectedOption={setSelectedOption} id={4} text='телевізори' img={tvImg} />
                    <MenuInput  category='Desktops' selectedOption={selectedOption} setSelectedOption={setSelectedOption} id={6} text='комп’ютери' img={compuuterImg} />
                    <MenuInput  category='Speakers' selectedOption={selectedOption} setSelectedOption={setSelectedOption} id={6} text='динамики' img={speakerImg} />
                    <MenuInput category='Headphones' selectedOption={selectedOption} setSelectedOption={setSelectedOption} id={7} text='навушники' img={hearPhones} />
                    <MenuInput category='Watches' selectedOption={selectedOption} setSelectedOption={setSelectedOption} id={8} text='часи' img={watches} />



                    <div className={styles.line}></div>
                </div>
                <div className={styles.cartFooter}>
                    <h4>коротка інформація:</h4>
                    <ul className={styles.list}>
                   <li>  <Link to={"/contacts"}  className={styles.link}>про нас</Link></li>
                        <li><Link to={"/contacts"}  className={styles.link}>контакти</Link></li>
                        <li><a href="#" className={styles.link}>ми в соцмережах:</a></li>

                    </ul>
                    <ul className={styles.socialLinks}>
                        <li className={styles.socialLink}><img src={facebookImg} alt="" /></li>
                        <li className={styles.socialLink}><img src={googleimg} alt="" /></li>
                        <li className={styles.socialLink}><img src={some} alt="" /></li>
                        <li className={styles.socialLink}><img src={twitter} alt="" /> </li>
                    </ul>

                </div>
            </div>



        </div>
    );

}

export default Menu;

