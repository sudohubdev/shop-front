
import styles from './OneProductRight.module.scss'
import starImg from '../../assets/star.svg'
import unheartimg from '../../assets/unlike.svg'
function OneProductRight() {
    const characteristics = [
        {
            name: "Колір",
            value: "Сірий"
        },
        {
            name: "Екран",
            value: "13.3'' Retina (2560x1600) WQXGA, глянцевий"
        },
        {
            name: "Пам’ять",
            value: "RAM 8 ГБ / SSD 256 ГБ"
        },
        {
            name: "Наявніть",
            value: "Wi-Fi, Bluetooth"
        },
        {
            name: "Оперативна система",
            value: "macOS Big Sur"
        },
        {
            name: "Вага",
            value: "1.29"
        }
    ]

    return (
        <div className={styles.oneProductRight}>
                <h1 className={styles.title}>Ноутбук Apple MacBook Air 13" M1 8/256GB 2020 (MGN63) Space Gray</h1>
                <div className={styles.rating}>
                    <div className={styles.stars}>
                        <img src={starImg} alt="" />
                        <img src={starImg} alt="" />
                        <img src={starImg} alt="" />
                        <img src={starImg} alt="" />
                        <img src={starImg} alt="" />
                    </div>
                    <div className={styles.countRewievs}>
                        97 відгуків
                    </div>
                </div>


                <div className={styles.characteristics}>

                    {characteristics.map(item => (
                        <div className={styles.characteristic}>{`${item.name}: `} {`${item.value}`}</div>
                    ))}

                </div>

                <div className={styles.menu}>

                    <div className={styles.priceBlock}>

                        <span>43 499₴</span>
                        <div className={styles.price}>36 499₴</div>

                    </div>

                    <div className={styles.unHeartImg}>
                        <img src={unheartimg} alt="" />
                    </div>

                    <button className={styles.creditBtn}>Купити в кредит</button>
                    <button className={styles.cartbtn}>В кошик</button>
                </div>
            </div>
    );

}

export default OneProductRight;