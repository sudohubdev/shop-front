import { useEffect, useState } from 'react';
import styles from './LeftBar.module.scss'

import acountIcon from '../../assets/acountIcon.svg'
import historyIcon from '../../assets/historyIcon.svg'
import heartIcon from '../../assets/heartIcon.svg'
import cartIcon from '../../assets/CartIcon.svg'
import { Link, useLocation, useParams } from 'react-router-dom';
import { useAppSelector } from '../../store/store';

function LeftBar() {
    const [activeIndex,setActiveIndex] = useState(0)
    const {email} = useAppSelector(state=>state.auth)
    const location = useLocation();
    const element = location.pathname.split('/')[2]
    const favourites=useAppSelector(state=>state.cart.favourites)
    useEffect(()=>{
     if(element=='favourites'){
        setActiveIndex(2);
     }
    },[])
    const items = [
        {
            title:email,
            img:acountIcon,
            to:'/account/cab'
        },
        {
            title:"Історія покупок",
            img:historyIcon,
            to:'/account/history'
        },
        {
            title:"Улюблені",
            img:heartIcon,
            to:'/account/favourites'
        },
       
    ]

   

    return (
        <div className={styles.leftBar}>
        <nav className={styles.nav}>
            <ul className={styles.list}>

                {items.map((item,index)=>(
               <Link to={item.to}> <li className={index !== activeIndex?styles.listItem:styles.listItemActive} onClick={()=>setActiveIndex(index)}>

                       <a href="#">
                    <img src={item.img} alt="" />
                    <p>{item.title}</p>
                    </a> 
                    {index==2?<p className={styles.count}>{favourites.length}</p>:null}
                </li></Link>
                ))}
            </ul>
        </nav>
    </div>
    );

}

export default LeftBar;