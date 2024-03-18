import styles from './LoginBlock.module.scss'
import loginimg from '../../assets/googleLogin.svg'
import logoImg from '../../assets/logo.svg'
import LoginInput from '../../Ui/Logininput/LoginInput';
import { useState } from 'react';
function LoginBlock() {
  
    const [email,setEmail]=useState('')
    const [pass,setPass]=useState('')

    return (
        <div className={styles.LoginBlock}>
            
         <div className={styles.header}>
            <h1>Авторизація</h1>
            <img src={logoImg} alt="" />
         </div>
         <div className={styles.inputs}>
         <LoginInput setValue={setEmail} title='Логін' value={email} />
        <LoginInput setValue={setPass} title='Пароль' value={pass} />
         </div>
      
         <div className={styles.btn}>Увійти</div>
         <span className={styles.hadAccount}>Я не зареєстрований</span>
         <div className={styles.wrapper}><div>або</div></div>
         <div className={styles.googleBtn}><img src={loginimg} alt="" /></div>
        
        </div>
    );

}

export default LoginBlock;