import React, { FC, useRef } from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import swiperImg from '../../assets/photoPhoneSlider.png'
import { Swiper as SwiperType } from 'swiper';
import { Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination';
import prev from '../../assets/prev.svg'
import next from '../../assets/next.svg'
import styles from './MainSlider.module.scss'
import  './sliderCategory.css'

interface ISlider{
    title:string
}

const MainSliderCategoey:FC<ISlider> = ({title})=>{

    const swiperRef = useRef<SwiperType>();


    return (
        <div>
            <div className={styles.wrapper}>
                <h1 className={styles.title}>{title}</h1>
                <div className={styles.wrapper}>
        <div  className={styles.swiper}>
        <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={50}
            navigation
            className="mySwiperCategory"
            slidesPerView={1}
            pagination={{ clickable: true }}
            onBeforeInit={(swiper) => {
                swiperRef.current = swiper;

            }}
        >
        <SwiperSlide><img className={styles.imgSlide} src={swiperImg} alt="" /></SwiperSlide>
        <SwiperSlide><img className={styles.imgSlide} src={swiperImg} alt="" /></SwiperSlide>
        <SwiperSlide><img className={styles.imgSlide} src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFO3WNO7QcRNa8gn049ora3Rz6PIHR7c8twmTmN9jk_Q&s"} alt="" /></SwiperSlide>
        <div className={styles.prev} onClick={() => { swiperRef.current?.slideNext() }}><img src={next} alt="" /></div>
        <div className={styles.next} onClick={() => { swiperRef.current?.slidePrev() }} ><img src={prev}  alt="" /></div>
   
      </Swiper>
        </div>
        </div>
            </div>
        </div>
    )
}


export default MainSliderCategoey;