
import { useAppSelector } from '../../store/store';
import Product from '../Product/Product';
import styles from './LikesProducts.module.scss'


function LikesProducts() {
   
    const favourites = useAppSelector(state=>state.cart.favourites)
   

    return (
       <div className={styles.block}>
        <h1>Вподобані товари</h1>    
                    <div className={styles.products}>
                    {favourites.map(item=><Product count={item.count} discount={item.discount} id={item.id} image={item.image} name={item.name} price={item.price} />)}
                    </div>    
       </div>
    );

}

export default LikesProducts;