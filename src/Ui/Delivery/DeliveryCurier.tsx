
import { FC, useState } from 'react';
import styles from './DeliveryCurier.module.scss'

interface IDeliveryCurier{
    activeIndex:number
    index:number
    setActiveIndex(activeIndex:number):void
}


const DeliveryCurier:FC<IDeliveryCurier> = ({activeIndex,index,setActiveIndex}) => {
  
    const [checked,setChecked] = useState<boolean>(false)

    return (
        <div>
            
            <div className={activeIndex==index?styles.inputRadioBlockActive:styles.inputRadioBlock}>

                <input type="radio" id={`input${4}`} name='input'  onChange={()=>{setActiveIndex(index)}}/>
                <label htmlFor={`input${4}`} >Кур’єр на вашу адресу</label>
                {activeIndex==index?  <div className={styles.addres}>
                <input type="text" className={styles.street} placeholder='Вулиця'/>
                <input type="text" className={styles.house} placeholder='Будинок'/>
                <input type="text" className={styles.flat} placeholder='Квартира'/>
            </div>:null}
              
        </div>
        
        </div>
    );

}

export default DeliveryCurier;