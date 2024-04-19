import { useEffect, useState } from 'react';
import Header from '../../Component/Header/Header';
import Menu from '../../Component/Menu/Menu';
import styles from './OwnerPage.module.scss'
import Product from '../../Component/Product/Product';
import LeftBar from '../../Component/LeftBar/LeftBar';
import UserCab from '../../Component/UserCab/UserCab';
import HistotyOrders from '../../Component/HistoryOrders/HistoryOrders';
import LikesProducts from '../../Component/LikesProduct/LikesProducts';
import Cart from '../../Component/Cart/Cart';
import { Route, Routes, useParams } from 'react-router-dom';
function OwnerPage() {
    
    const [isShow,setIsShow] = useState(false);
    

    return (
        <div>
         <div className={styles.wrapper}>
         <LeftBar/>
            <div className={styles.rightBar}>
                <Routes>
                 <Route path="/cab" element={<UserCab />} /> 
                <Route path='/history' element={<HistotyOrders/>} />
                <Route path='/favourites' element={<LikesProducts/>} />
                </Routes>
                
            </div>
         </div>
           <Menu isShow={isShow} setIsShow={setIsShow} />
        </div>
    );

}

export default OwnerPage;