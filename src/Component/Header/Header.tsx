import styles from '../Header/Header.module.scss';
import burgerImg from '../../assets/burger.svg'
import logoImg from '../../assets/logo.svg'
import heartImg from '../../assets/heart.svg'
import cartImg from '../../assets/ShopCart.svg'
import userImg from '../../assets/User.svg'
import { FC } from 'react';


interface IHeader {
    isShow:boolean;
    setIsShow(isShow:boolean):void
}

const Header:FC<IHeader> = ({isShow,setIsShow}) => {
  

    const handleClick =  () =>{
        setIsShow(true)
        document.body.style.height = "100vh"
        document.body.style.overflow = "hidden"
    }

    return (
        <header className={styles.header}>
            
            <div className={styles.headerLeft}>
                <div className={styles.burgerMenu} onClick={handleClick}><img src={burgerImg} alt="" /></div>
                <div className={styles.logo}><img src={logoImg} alt="" /></div>
            </div>
            <div className={styles.headerCenter}>

                <input type="text" placeholder='Я шукаю....' />
                <button>Знайти</button>

            </div>
            <div className={styles.headerRight}>
                <div className={styles.menuimg}><img src={heartImg} alt="" /></div>
                <div className={styles.menuimg}>
                    <span className={styles.count}>5</span>
                    <img src={cartImg} alt="" />
                    
                </div>
                <div className={styles.menuimg}><img src={userImg} alt="" /></div>
            </div>



        </header>
    );

}

export default Header;