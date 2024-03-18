import { useState } from 'react';
import Header from '../../Component/Header/Header';
import Menu from '../../Component/Menu/Menu';
import styles from './oneProductpage.module.scss'
import OneProductBlock from '../../Component/OneProductBlock/OneProductBlock';
import Products from '../../Component/Products/Products';
import CommentBlock from '../../Component/CommentBlock/CommentBlock';
import Comment from '../../Component/Comment/Comment';
import Comments from '../../Component/Comments/Comments';

function OneProductPage() {
    
    const [isShow,setIsShow] = useState(false);

    return (
        <div className={styles.page}>
            <Header isShow={isShow} setIsShow={setIsShow}/>
           
           <OneProductBlock/>
            <Products/>
            <Products/>
            <CommentBlock/>
            <Comments/>
           <Menu isShow={isShow} setIsShow={setIsShow} />
        </div>
    );

}

export default OneProductPage;