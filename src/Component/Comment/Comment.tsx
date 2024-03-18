

import styles from './Comment.module.scss'
import starImg from '../../assets/star.svg'
import unstar from '../../assets/nostar.svg'
function Comment() {



    return (
        <div className={styles.comment}>

            <div className={styles.wrapper}>

                <div>
                    <h4 className={styles.author}>Олена Олександрівна</h4>
                    <div className={styles.stars}>
                        {

                            [...Array(5)].map((_) =>

                                <div >
                                    <img src={starImg} alt="" />
                                </div>
                            )


                        }
                        {
                            [...Array(5 - 5)].map((_) =>

                                <div >
                                    <img src={unstar} alt="" />
                                </div>

                            )
                        }
                    </div>
                </div>
                <div>
                    <p className={styles.commentText}>Ноут мрії. Швидкий, компактний, надійний, стильний, продуктивний, сучасний… Це просто незамінний інструмент для реалізації робочих та особистих амбіцій в моєму житті.</p>
                </div>
                </div>

        </div>
        ); 

}

export default Comment;