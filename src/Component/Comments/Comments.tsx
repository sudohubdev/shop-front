
import styles from './Comments.module.scss'
import Comment from '../../Component/Comment/Comment';
import { FC, useEffect, useState } from 'react';
import { IFeedBack } from '../../store/rtkQuery/productsApi';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { addStars } from '../../store/slices/CartSlice';

interface IComments {
    comments : IFeedBack[]
}

const  Comments:FC<IComments> = ({comments}) => {
    
    let stars = 0;
    const dispatch= useAppDispatch()
    
    useEffect(()=>{
        let totalStars = comments.reduce((total, comment) => total + comment.rating, 0);
        console.log(totalStars)
        totalStars = totalStars?Math.round(totalStars/comments.length):0
        console.log(totalStars)
        dispatch(addStars(totalStars))
    },[comments])
    
    

   

    return (
        <div className={styles.comments}>
           <div className={styles.wrapper}>
           <h4 className={styles.title}>Відгуки</h4>
         
           {comments.map(item=><Comment comment={item} />)}
          
            <div className={styles.btnwrapper}><button>Показати ще</button></div>
                </div>
        </div>
    );

}

export default Comments;