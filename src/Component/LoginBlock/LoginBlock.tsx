import styles from './LoginBlock.module.scss'
import loginimg from '../../assets/googleLogin.svg'
import logoImg from '../../assets/logo.svg'
import LoginInput from '../../Ui/Logininput/LoginInput';
import { useEffect, useState } from 'react';
import { useAuthMutation, useLazyGetUserQuery } from '../../store/rtkQuery/authApi';
import { useErrorMsg, useLogin} from './login';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../store/store';
import { auth, setUser } from '../../store/slices/AuthSlice';
function LoginBlock() {
    const navigate = useNavigate()
    const [email,setEmail]=useState('')
    const [pass,setPass]=useState("")
    const [errorMessage,setErrorMessage] = useState('')
    const {login,data,error} = useLogin()
    const {isErrorMessage}=useErrorMsg(error)
    const dispatch = useAppDispatch();
   const [getUser,{data:userData}] = useLazyGetUserQuery()
    
    useEffect(()=>{
        setErrorMessage(isErrorMessage())
    },[error])
    useEffect(()=>{
        if(data && 'success' in data){
            dispatch(auth(data.success))
            getUser()
            if(userData && 'name' in userData){
                const fullName = userData.name;
                const match = fullName.match(/[A-Z][a-z]*/g); 
                let lastName = ''; 
                let firstName = '';
    
                if (match && match.length >= 2) {
                lastName = match[0]; 
                firstName = match[1];
                console.log(lastName);
                console.log(firstName); 
                }
                dispatch(setUser({name:firstName, lastName:lastName,phone:userData.phone,email:userData.email}))
                   if(userData.name){
                    dispatch(auth(true))
                   }
                }
            navigate('/')
        }
    },[data])
   

    return (
        <div className={styles.LoginBlock}>
            
         <div className={styles.header}>
            <h1>Авторизація</h1>
            <img src={logoImg} alt="" />
         </div>
         <div className={styles.inputs}>
         <LoginInput setErrorMessage={setErrorMessage} setValue={setEmail} title='Логін' value={email} />
        <LoginInput setErrorMessage={setErrorMessage}  setValue={setPass} title='Пароль' value={pass} />
         </div>
       {errorMessage?<div className={styles.error}>{errorMessage}</div>:null}
         <div className={styles.btn} onClick={()=>login(email,pass)} >Увійти</div>
        
         <Link to={'/register'} ><span className={styles.hadAccount}>Я не зареєстрований</span></Link>
         <div className={styles.wrapper}><div>або</div></div>
         <div className={styles.googleBtn}><img src={loginimg} alt="" /></div>
        
        </div>
    );

}

export default LoginBlock;