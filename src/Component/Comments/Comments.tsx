
import styles from './Comments.module.scss'
import Comment from '../../Component/Comment/Comment';

function Comments() {


    return (
        <div className={styles.comments}>
           <div className={styles.wrapper}>
           <h4 className={styles.title}>Відгуки</h4>
         
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
          
            <div className={styles.btnwrapper}><button>Показати ще</button></div>
                </div>
        </div>
    );

}

export default Comments;