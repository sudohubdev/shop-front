import { useEffect, useState } from 'react';
import Header from '../../Component/Header/Header';
import MainSlider from '../../Component/MainSlider/MainSlider';
import Menu from '../../Component/Menu/Menu';
import Products from '../../Component/Products/Products';
import styles from '../Main/Main.module.scss';
import { useAppSelector } from '../../store/store';
import { useGetProductsQuery } from '../../store/rtkQuery/productsApi';

function MainPage() {
    const {data} = useGetProductsQuery();
    const [hitProducts,setHitPtoducts] = useState([])
    const [actionProducts,setActionProducts] = useState([])
    useEffect(()=>{
        const bestsellers:any = []
        const discountProducts:any = []
        data?.map((item)=>item.isHit?bestsellers.push(item):null)
        data?.map((item)=>item.discount>10?discountProducts.push(item):null)
        setHitPtoducts(bestsellers)
        setActionProducts(discountProducts)
    },[data])
  
    
    

    return (
        <div>
            
           <MainSlider/>
           <Products title ={"Бестселери"} products={hitProducts}/>
           <Products title ={"Акційні пропозиції"}  products={actionProducts}/>
           <Products title ={"Всі товари"}  products={data}/>
           
        </div>
    );

}

export default MainPage;