import { useState } from 'react';
import Header from '../../Component/Header/Header';
import MainSlider from '../../Component/MainSlider/MainSlider';
import Menu from '../../Component/Menu/Menu';
import Products from '../../Component/Products/Products';
import styles from '../Main/Main.module.scss';

function MainPage() {
    
    const [isShow,setIsShow] = useState(false);

    return (
        <div>
            <Header isShow={isShow} setIsShow={setIsShow}/>
           <MainSlider/>
           <Products/>
           <Products/>
           <Menu isShow={isShow} setIsShow={setIsShow} />
        </div>
    );

}

export default MainPage;