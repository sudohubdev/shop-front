
import styles from './CommentBlock.module.scss'
import starImg from '../../assets/star.svg'
import unstar from '../../assets/nostar.svg'
import { useEffect, useState } from 'react';
import { useAddCommentMutation } from '../../store/rtkQuery/commentApi';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../store/store';

function CommentBlock() {
    
    const [countStars,setCaountStars] = useState(0)
    const [value,setValue] = useState('')
    const isAuth = useAppSelector(state=>state.auth.isAuth)
    const {id} = useParams()
    const [addComment,{data,error}] = useAddCommentMutation()
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const sendFeedback = ()=>{
        setCaountStars(0)
        setValue('')
        addComment({productId:id?id:'',text:value,rating:countStars})
    }

    useEffect(()=>{error&&!isAuth?navigate('/login'):null},[isAuth,error])
    

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
                <textarea name="text" className={styles.area} onChange={(e)=>setValue(e.target.value)} value={value} placeholder='Коментар' ></textarea>
            </div>

            {error?<p className={styles.error}>Помилка при відправленні, можливо не вказаний рейтинг або текст занадто малий,можливо не ввійшли в акаунт</p>:null}
            <div className={styles.btnWrapper}>
                
                {!data?<button onClick={sendFeedback} className={styles.sentBtn}>Відправити</button>:<div className={styles.sentText}>Відправлено</div>}
                
            </div>
            </div>
             

        </div>
    );

}

export default CommentBlock;