import { useState } from 'react';
import Header from '../../Component/Header/Header';

import Menu from '../../Component/Menu/Menu';
import styles from './OrderPage.module.scss';
import OrderRight from '../../Component/OrderRight/OrderRight';
import OrderLeft from '../../Component/OrderLeft/OrderLeft';

function OrderPage() {
    
    const [isShow,setIsShow] = useState(false);

    return (
        <div>
            <Header isShow={isShow} setIsShow={setIsShow}/>
            <div className={styles.wrapper}>
            <OrderRight/>
            <OrderLeft/>
            </div>
       
           <Menu isShow={isShow} setIsShow={setIsShow} />
        </div>
    );

}

export default OrderPage;