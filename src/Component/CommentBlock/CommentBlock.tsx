
import styles from './CommentBlock.module.scss'
import starImg from '../../assets/star.svg'
import unstar from '../../assets/nostar.svg'
import { useState } from 'react';

function CommentBlock() {
    
    const [countStars,setCaountStars] = useState(0)


    console.log(countStars)

    return (
        <div className={styles.commentBlock}>

            <div className={styles.wrapper}>
            <div className={styles.header}>
                        <h2 className={styles.title}>Написати відгук про товар</h2>

                        
                        <div className={styles.stars}>
                        {

                            [...Array(countStars)].map((_,index)=>
                            
                            <div onClick={()=>setCaountStars(index+1)}>
                                <img src={starImg} alt="" />
                            </div>
                            )


                        }
                        {
                               [...Array(5-countStars)].map((_,index)=>
                                
                                <div onClick={()=>setCaountStars(countStars+index+1)}>
                                <img src={unstar} alt="" />
                                </div>
                                
                                )
                        }

                        
                       
                    </div>
            </div>

            <div className={styles.text}>
                <textarea name="text" className={styles.area} placeholder='Коментар' ></textarea>
            </div>


            <div className={styles.btnWrapper}>
                {!true?<button className={styles.sentBtn}>Відправити</button>:<div className={styles.sentText}>Відправлено</div>}
            </div>
            </div>
             

        </div>
    );

}

export default CommentBlock;