import styles from '../MainSlider/MainSlider.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import swiperImg from '../../assets/swiperSlide1.jpg'
import { Navigation, Pagination} from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../MainSlider/swiper.css'

function MainSlider() {
  

    return (
        <div className={styles.wrapper}>
 <div  className={styles.swiper}>
        <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      
      
      >
        <SwiperSlide><img src={swiperImg} alt="" /></SwiperSlide>
        <SwiperSlide><img src={swiperImg} alt="" /></SwiperSlide>
        <SwiperSlide><img src={swiperImg} alt="" /></SwiperSlide>
       
      </Swiper>
        </div>
        </div>
       
        
    );

}

export default MainSlider ;