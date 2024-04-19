
import styles from './OneProductLeft.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import btnPrev from '../../assets/btnPrev.svg'
import btnNext from '../../assets/btnNext.svg'
import { Navigation } from 'swiper/modules';
import productImg from '../../assets/product2.jpg'
import { useRef } from 'react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useGetProductsQuery } from '../../store/rtkQuery/productsApi';
import { useParams } from 'react-router-dom';

function OneProductLeft() {
    const swiperRef = useRef<SwiperType>();
    const {data} = useGetProductsQuery();
    const {id} = useParams();
     const product = data?.find(item=>item.id==Number(id))

    return (
        <div>

            <div className={styles.oneProductLeft}>
                <div className={styles.btnPrev} onClick={() => { swiperRef.current?.slidePrev() }}>
                    <img src={btnPrev} alt="" />
                </div>
                <Swiper
                    className={styles.swiper}
                    modules={[Navigation]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation

                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper;

                    }}
                >
                    {product?.images.map(image=><SwiperSlide style={{display:'flex',alignItems:'center',justifyContent:'center'}} className={styles.swiperSlide}><img src={image} alt="" /></SwiperSlide>)}
                </Swiper>
                <div className={styles.btnNext} onClick={() => { swiperRef.current?.slideNext() }}>
                    <img src={btnNext} alt="" />
                </div>
            </div>


        </div>
    );

}

export default OneProductLeft;