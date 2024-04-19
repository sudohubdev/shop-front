

import styles from './Comment.module.scss'
import starImg from '../../assets/star.svg'
import unstar from '../../assets/nostar.svg'
import { FC } from 'react'
import { IFeedBack } from '../../store/rtkQuery/productsApi'

interface IComment {
    comment:IFeedBack
}


const  Comment:FC<IComment> = ({comment})=> {

    const fullName = comment.userName;
    const match = fullName.match(/[A-Z][a-z]*/g); 
    let lastName = ''; 
    let firstName = '';

    if (match && match.length >= 2) {
         lastName = match[0]; 
         firstName = match[1];
        console.log(lastName);
        console.log(firstName); 
    }

    return (
        <div className={styles.comment}>

            <div className={styles.wrapper}>

                <div>
                    <h4 className={styles.author}>{firstName } {lastName}</h4>
                    <div className={styles.stars}>
                        {

                            [...Array(comment.rating)].map((_) =>

                                <div >
                                    <img src={starImg} alt="" />
                                </div>
                            )


                        }
                        {
                            [...Array(5 - comment.rating)].map((_) =>

                                <div >
                                    <img src={unstar} alt="" />
                                </div>

                            )
                        }
                    </div>
                </div>
                <div>
                    <p className={styles.commentText}>{comment.text}</p>
                </div>
                </div>

        </div>
        ); 

}

export default Comment;