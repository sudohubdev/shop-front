
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import Product from '../Product/Product'
import styles from './Product.module.scss'

import btnPrev from '../../assets/btnPrev.svg'
import btnNext from '../../assets/btnNext.svg'
import { useRef } from 'react';
import { Navigation } from 'swiper/modules';

function Products() {

    const swiperRef = useRef<SwiperType>();


    return (



        <div className={styles.mainWrapper}>
            <div>
            <h1 className={styles.mainTitle}>Бестселери</h1>
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
                        <SwiperSlide style={{ width: "185px" }}><Product /></SwiperSlide>
                        <SwiperSlide style={{ width: "185px" }}><Product /></SwiperSlide>
                        <SwiperSlide style={{ width: "185px" }}><Product /></SwiperSlide>
                        <SwiperSlide style={{ width: "185px" }}><Product /></SwiperSlide>
                        <SwiperSlide style={{ width: "185px" }}><Product /></SwiperSlide>
                        <SwiperSlide style={{ width: "185px" }}><Product /></SwiperSlide>

                    </Swiper>
                </div>
                <div className={styles.btnNext} onClick={() => { swiperRef.current?.slideNext() }}>
                    <img src={btnNext} alt="" />
                </div>
            </div>
            </div>
           
        </div>


    );

}

export default Products;