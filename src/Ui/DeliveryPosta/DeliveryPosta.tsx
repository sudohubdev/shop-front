
import { FC, useState } from 'react'
import styles from './DeliveryPosta.module.scss'

export interface IDelivery{
    activeIndex:number
    index:number
    setActiveIndex(activeIndex:number):void
    title:string
    deliveryPlaces:string[]
}



const DeliveryPosta:FC<IDelivery> = ({activeIndex,index,setActiveIndex,title,deliveryPlaces}) => {
    const [isShow,setIsShow] = useState(false)
 
    
    const handleClick = () =>{
        setIsShow(!isShow)
    }

  

    return (
        <div>
            
            <div className={activeIndex==index?styles.inputRadioBlockActive:styles.inputRadioBlock}>
                <input type="radio" id={`input${index}`} name='input' onChange={()=>{setActiveIndex(index)}} />
                <label htmlFor={`input${index}`} >{title}</label>


              {activeIndex==index? <div className={styles.selectWrapper}>
                <div className={styles.select} onClick={handleClick}>
                    Виберіть відділення 
                </div>  
                {isShow?
                <ul className={styles.options}>
                    
                    {deliveryPlaces.map(item=>(
                        <li className={styles.option}>{item}</li>
                    ))}    
                </ul>       
                :null}
                </div>
                :null}
               
               

            </div>
        
        </div>
    );

}

export default DeliveryPosta;