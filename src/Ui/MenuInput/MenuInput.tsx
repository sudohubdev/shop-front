
import styles from './MenuInput.module.scss'
import phone from '../../assets/phone.svg'
import { FC } from 'react';

interface InputInterface{

    id:number
    text:string
    img:string

}

const MenuInput:FC<InputInterface> = ({id,img,text})=>{
  

    return (
        <div className={styles.inputBlock}>
        

            <input type="checkbox" id={`input${id}`}  />
            <label htmlFor={`input${id}`}>
                <div className={styles.block}><img src={img} alt="" /></div>
                <div>{text}</div>
            </label>

        </div>
    );

}

export default MenuInput;