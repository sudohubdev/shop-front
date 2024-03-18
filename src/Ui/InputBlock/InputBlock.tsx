
import { FC } from 'react';
import styles from './inputBlock.module.scss'
import nullimg from '../../assets/null.svg'
interface InputBlockInterface{
    value:string,
    setValue(value:string):void
    title:string
    type:string
}

const InputBlock:FC<InputBlockInterface> = ({setValue,value,title,type}) => {
  

    return (
        <div>
            
            <div className={styles.inputBlock}>
                <input type={type} placeholder={title} value={value} onChange={(e)=>{setValue(e.target.value)}}/>
                {value.length==0?<img src={nullimg} alt="" />:null}
            </div>
        
        </div>
    );

}

export default InputBlock;