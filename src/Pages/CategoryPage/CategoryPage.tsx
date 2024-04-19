import { useSearchParams } from 'react-router-dom';
import Header from '../../Component/Header/Header'
import MainSliderCategoey from '../../Component/MainSliderCategory/MainSliderCategory';
import Menu from '../../Component/Menu/Menu';
import Products from '../../Component/Products/Products';
import SelectFilter from '../../SelectFilter/SelectFilter';
import { useGetProductsWithSearchQuery, useGetProductsWithTypesQuery } from '../../store/rtkQuery/productsApi';
import styles from './CategoryPage.module.scss'
import { useState } from 'react';


const CategoryPage = ()=>{
    
    const [searchParams, setSearchParams] = useSearchParams();
    const type = searchParams.get("type")
    const searchQuery = searchParams.get("search")
    const {data} = useGetProductsWithTypesQuery(type||'');
    const {data:searchProducts} = useGetProductsWithSearchQuery(searchQuery||'');
    const title = `Продукти: ${type?type:searchQuery}`

    return (
        <div>
           
            <MainSliderCategoey title={type?type:searchQuery||''}  />
       
            <Products title={title} products={data?data:searchProducts} /> 
            
            
           
        </div>
    )
}

export default CategoryPage;