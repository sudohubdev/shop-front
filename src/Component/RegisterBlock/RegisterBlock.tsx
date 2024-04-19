import styles from './Registerblock.module.scss'
import loginimg from '../../assets/googleLogin.svg'
import logoImg from '../../assets/logo.svg'
import LoginInput from '../../Ui/Logininput/LoginInput';
import { useEffect, useState } from 'react';
import { useErrorMsgRegister, useRegister } from './register';
import { useErrorMsg } from '../LoginBlock/login';
import { useDispatch } from 'react-redux';
import { auth } from '../../store/slices/AuthSlice';
import { Link, useNavigate } from 'react-router-dom';
function RegisterBlock() {
  
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [surname,setSurname]=useState('')
    const [pass,setPass]=useState('')
    const [numberPhone,setNumberPhone]=useState('')
    const [errorMsg,setErrorMsg] = useState('')
    const {data,register,error} = useRegister();
    const {isErrorMessage} = useErrorMsgRegister(error)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(()=>{
        setErrorMsg(isErrorMessage())
    },[error])
    useEffect(()=>{
        if(data && 'success' in data){
            dispatch(auth(data.success))
            navigate('/')
        }
    },[data])

    return (
        <div className={styles.LoginBlock}>
            
         <div className={styles.header}>
            <h1>Реєстрація</h1>
            <img src={logoImg} alt="" />
         </div>
         <div className={styles.inputs}>
         <LoginInput setErrorMessage={setErrorMsg} setValue={setName} title='Ваше імя' value={name} />
         <LoginInput setErrorMessage={setErrorMsg} setValue={setSurname} title='Ваше прізвище' value={surname} />
         <LoginInput setErrorMessage={setErrorMsg} setValue={setEmail} title='Логін' value={email} />
         <LoginInput setErrorMessage={setErrorMsg} setValue={setPass} title='Пароль' value={pass} />
         <LoginInput setErrorMessage={setErrorMsg} setValue={setNumberPhone} title='Номер телефону' value={numberPhone} />
         </div>
         {errorMsg?<div className={styles.error}>{errorMsg}</div>:null}
         <div className={styles.btn} onClick={()=>register(email,pass,numberPhone,name+surname)} >Підтвердити</div>
         <Link to={'/login'}><span className={styles.hadAccount}>Я уже зареєстрований</span></Link>
         <div className={styles.wrapper}><div>або</div></div>
         <div className={styles.googleBtn}><img src={loginimg} alt="" /></div>
        
        </div>
    );

}

export default RegisterBlock;