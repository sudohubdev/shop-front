
import { FC, useEffect, useState } from 'react';
import styles from './DeliveryCurier.module.scss'

interface IDeliveryCurier{
    activeIndex:number
    index:number
    setActiveIndex(activeIndex:number):void,
    setPostOffice(postOffice:string):void
}


const DeliveryCurier:FC<IDeliveryCurier> = ({activeIndex,index,setActiveIndex,setPostOffice}) => {
  
    const [checked,setChecked] = useState<boolean>(false)
    let postString = '';
    const [street,setStreet] = useState('')
    const [house,setHouse] = useState('')
    const [flat,setFlat] = useState('')

    useEffect(()=>{
        if(street&&house){
            postString=`вул ${street} буд ${house}`
            setPostOffice(postString)
        }
        if(street&&house&&flat){
            postString=`вул. ${street} буд. ${house} кв. ${flat}`
            setPostOffice(postString)
        }

    },[street,house,flat])

    return (
        <div>
            
            <div className={activeIndex==index?styles.inputRadioBlockActive:styles.inputRadioBlock}>

                <input type="radio" id={`input${4}`} name='input'  onChange={()=>{setActiveIndex(index)}}/>
                <label htmlFor={`input${4}`} >Кур’єр на вашу адресу</label>
                {activeIndex==index?  <div className={styles.addres}>
                <input type="text" className={styles.street} onChange={(e)=>setStreet(e.target.value)} placeholder='Вулиця'/>
                <input type="text" className={styles.house} onChange={(e)=>setHouse(e.target.value)} placeholder='Будинок'/>
                <input type="text" className={styles.flat} onChange={(e)=>setFlat(e.target.value)} placeholder='Квартира'/>
            </div>:null}
              
        </div>
        
        </div>
    );

}

export default DeliveryCurier;