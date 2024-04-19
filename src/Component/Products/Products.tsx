
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import Product from '../Product/Product'
import styles from './Product.module.scss'
import btnPrev from '../../assets/btnPrev.svg'
import btnNext from '../../assets/btnNext.svg'
import { FC, useEffect, useRef, useState } from 'react';
import { Navigation } from 'swiper/modules';
import { IResult, useGetProductsQuery } from '../../store/rtkQuery/productsApi';

interface IProducts  {
    products?:IResult[],
    title:string
}

const  Products:FC<IProducts> = ({products,title}) => {

    const swiperRef = useRef<SwiperType>();
   
    return (



        <div className={styles.mainWrapper}>
            <div>
            <h1 className={styles.mainTitle}>{title}</h1>
            <div className={styles.wrapper}>


                <div className={styles.btnPrev} onClick={() => { swiperRef.current?.slidePrev() }}>
                    <img src={btnPrev} alt="" />
                </div>
                <div className={styles.products}>
                    <Swiper
                        spaceBetween={75}
                        slidesPerView={5}
                        modules={[Navigation]}
                        onBeforeInit={(swiper) => {
                            swiperRef.current = swiper;

                        }}
                        className={styles.productsSwiper}

                    >
                        {products?.map((item)=><SwiperSlide className={styles.swiperSlide}><Product count = {1} id={item.id} name={item.name} discount={item.discount} image={item.images[0]} price={item.price} /></SwiperSlide>)}
                        
                     

                    </Swiper>
                </div>
                <div className={styles.btnNext} onClick={() => { swiperRef.current?.slideNext() }}>
                    <img src={btnNext}  alt="" />
                </div>
            </div>
            </div>
           
        </div>


    );

}

export default Products;