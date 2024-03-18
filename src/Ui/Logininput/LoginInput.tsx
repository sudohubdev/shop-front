
import { FC } from 'react';
import styles from './Logininput.module.scss'

interface InputBlockInterface{
    value:string,
    setValue(value:string):void
    title:string
}

const LoginInput:FC<InputBlockInterface> = ({setValue,value,title}) => {
  

    return (
        <div className={styles.inputBlock}>
        <input type="text" placeholder={title} value = {value} onChange={e=>setValue(e.target.value)} />
        </div>
    );

}

export default LoginInput;