
import styles from './MenuInput.module.scss'
import phone from '../../assets/phone.svg'
import { FC, useState } from 'react';

interface InputInterface{

    id:number
    text:string
    img:string
    selectedOption:string,
    setSelectedOption(value:string):void,
    category:string
}

const MenuInput:FC<InputInterface> = ({id,img,text,category,selectedOption,setSelectedOption})=>{
    
    const handleCheckboxChange = (value:string) => {
        setSelectedOption(value);
      };

    return (
        <div className={styles.inputBlock}>
        
      
            <input name='category'  type="checkbox" id={`input${id}`} onChange={() => handleCheckboxChange(`${category}`) } checked={selectedOption === `option${id}`} />
            {selectedOption === `option${id}`?<label htmlFor={`input${id}`}>
                <div className={styles.block}><img src={img} alt="" /></div>
                <div>{text}</div>
            </label>:<label htmlFor={`input${id}`}>
                <div className={styles.block}><img src={img} alt="" /></div>
                <div>{text}</div>
            </label>}

        </div>
    );

}

export default MenuInput;