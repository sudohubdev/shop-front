import styles from './OneProductBlock.module.scss'
import OneProductLeft from '../OneProductLeft/OneproductLeft'
import OneProductRight from '../OneProductRight/OneProductRight';
import { useEffect } from 'react';



function OneProductBlock() {
    
    return (
        <div className={styles.oneProductBlock}>
            <OneProductLeft />
            <OneProductRight />
        </div>
    );

}

export default OneProductBlock;