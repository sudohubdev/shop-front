
import styles from './Menu.module.scss'
import logoImg from '../../assets/logo.svg'
import MenuInput from '../../Ui/MenuInput/MenuInput';
import phoneImg from '../../assets/phone.svg'
import compuuterImg from '../../assets/computer.svg'
import laptopImg  from '../../assets/laptop.svg'
import facebookImg from '../../assets/facebook.svg'
import googleimg from '../../assets/google.svg'
import some from '../../assets/3.svg'
import twitter from '../../assets/twitter.svg'
import { FC } from 'react';
import closeimg from '../../assets/close.svg'

interface IMenu {
    isShow:boolean;
    setIsShow(isShow:boolean):void
}

const Menu:FC<IMenu> = ({isShow,setIsShow})  =>{
  
const handleClick = () =>{
    setIsShow(false)
    document.body.style.height = "100%"
    document.body.style.overflow = "auto"
}

    return (
        <div>
        <div className={isShow?styles.overlap:styles.overlapActtive}></div>  

            <div className={isShow?styles.cartActive:styles.cart}>
                <div className={styles.cartHeader}>
                    <div className={styles.logoBlock}>
                    <img src={logoImg} alt="" />
                    <span>D_SHOP</span>
                    </div>
                    <div className={styles.loginBlock}>
                        <p className={styles.fullname}>Зубенко Михаил Петрович</p>
                        <div>
                            <button className={styles.btnLog}>особистий кабінет</button>
                            <button className={styles.btnLog}>вийти</button>
                        </div>
                    </div>
                    <div className={styles.closeImg} onClick={handleClick}><img src={closeimg} alt="" /></div>
                </div>
                <div className={styles.cartCenter}>

                    <h4>Категорії:</h4>
                    <MenuInput id={1} text='смартфони' img={phoneImg}/>
                    <MenuInput id={2} text='ноутбуки' img={laptopImg}/>
                    <MenuInput id={3} text='комп’ютери' img={compuuterImg}/>
                    <MenuInput id={4} text='смартфони' img={phoneImg}/>
                    <MenuInput id={5} text='ноутбуки' img={laptopImg}/>
                    <MenuInput id={6} text='комп’ютери' img={compuuterImg}/>
                    <MenuInput id={7} text='смартфони' img={phoneImg}/>
                    <MenuInput id={8} text='ноутбуки' img={laptopImg}/>
                    <MenuInput id={9} text='комп’ютери' img={compuuterImg}/>
                    <MenuInput id={10} text='смартфони' img={phoneImg}/>
                  
                   

                    <div className={styles.line}></div>
                </div>
                <div className={styles.cartFooter}>
                    <h4>коротка інформація:</h4>
                    <ul className={styles.list}>
                        <li>  <a href="#" className={styles.link}>про нас</a></li>
                        <li><a href="#"  className={styles.link}>контакти</a></li>
                        <li><a href="#"  className={styles.link}>ми в соцмережах:</a></li>
                    
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