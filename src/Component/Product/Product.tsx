

import styles from '../Product/Product.module.scss'
import cart from '../../assets/cart.svg'
import product1 from '../../assets/product1.jpg'
import likeImg from '../../assets/like.svg'
import unlikeImg from '../../assets/unlike.svg'
import uncartimg from '../../assets/uncart.svg'

function Product() {
  

    return (
        <div className={styles.product} style={true?{}:{opacity:"0.4"}}>
            <div className={styles.imgWrapper}> <img src={product1} alt="" className={styles.productImg}/></div>
           
            <h2 className={styles.title}>Ноутбук Apple MacBook Air 13" M1 8/256GB 2020 (MGN63) Space Gray</h2>
            {true?<div>
                <span className={styles.sale}>43 499</span>
            <div className={styles.price}>
                <span>36 499 ₴</span>
                <div>{true?<img src={cart} alt="" />:<img src={uncartimg} alt="" />}</div>
            </div>
            {true?<img src={likeImg} alt="" className={styles.likeImg} />:<img src={unlikeImg} alt="" className={styles.likeImg} />}
            </div>:<div className={styles.notMatch}>

               <span>Немає в наявності</span>

                </div>
                
                
            }
           
        </div>
    );

}

export default Product;