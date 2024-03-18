
import styles from './OrderLeft.module.scss'
import deleteIcon from '../../assets/deleteproduct.svg'
import product from '../../assets/phone.jpg'
const OrderLeft = () => {
  

    return (
        <div className={styles.OrderLeft}>
            <div>
            <div className={styles.title}>
                <h4>Ваше замовлення</h4>
            </div>

            <div className={styles.item}>
                <div className={styles.itemImage}>
                    <img src={product} alt="" />
                </div>
                <div className={styles.descrBlock}>
                    <div className={styles.itemTitle}>Навушники Apple AirPods Pro </div>
                    <div className={styles.priceBlock}>
                        <span>72 999 ₴</span>
                        <div className={styles.price}>69 999 ₴</div>
                    </div>
                </div>
                <div className={styles.itemDeleteImage}><img src={deleteIcon} alt="" /></div>
            </div>
            <div className={styles.item}>
                <div className={styles.itemImage}>
                    <img src={product} alt="" />
                </div>
                <div className={styles.descrBlock}>
                    <div className={styles.itemTitle}>Навушники Apple AirPods Pro </div>
                    <div className={styles.priceBlock}>
                        <span>72 999 ₴</span>
                        <div className={styles.price}>69 999 ₴</div>
                    </div>
                </div>
                <div className={styles.itemDeleteImage}><img src={deleteIcon} alt="" /></div>
            </div>
            </div>
          <div className={styles.bottomBlock}>
            <div className={styles.delivery}>
            <p>Вартість доставки</p>
            <div>Безкоштовно</div>
            </div>
           <div className={styles.payment}>
            <p>До сплати</p>
            <div>79 999 ₴</div>
           </div>
           <div className={styles.buttonWrapper}><button className={styles.button}>Підтвердити замовлення</button></div>
           
          </div>
        
        
        
        </div>
    );

}

export default OrderLeft;