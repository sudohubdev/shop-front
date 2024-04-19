import { useEffect, useState } from 'react';
import Header from '../../Component/Header/Header';
import Menu from '../../Component/Menu/Menu';
import styles from './oneProductpage.module.scss'
import OneProductBlock from '../../Component/OneProductBlock/OneProductBlock';
import Products from '../../Component/Products/Products';
import CommentBlock from '../../Component/CommentBlock/CommentBlock';
import Comment from '../../Component/Comment/Comment';
import Comments from '../../Component/Comments/Comments';
import { useGetProductsQuery } from '../../store/rtkQuery/productsApi';
import { useParams } from 'react-router-dom';
import { useGetCommentsQuery } from '../../store/rtkQuery/commentApi';

function OneProductPage() {
    
    const [isShow,setIsShow] = useState(false);
    const {data} = useGetProductsQuery();
    const {id} = useParams()
    const [hitProducts,setHitPtoducts] = useState([])
    const product = data?.find(item=>item.id==Number(id))
    const {data:commentData} = useGetCommentsQuery(id?id:'')
   


    useEffect(()=>{
        const bestsellers:any = []
        data?.map((item)=>item.isHit?bestsellers.push(item):null)
        setHitPtoducts(bestsellers)
    },[data])


    useEffect(()=>{console.log(1);window.scrollTo(0,0)})


    return (
        <div className={styles.page}>

            <OneProductBlock />
            <Products title='Бестселлери' products={hitProducts} />
            <Products title='Всі товари' products={data}/>
            <CommentBlock/>
            <Comments comments={commentData?commentData:[]} />
        </div>
    );

}

export default OneProductPage;