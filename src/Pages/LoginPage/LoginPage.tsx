
import { useSelector } from 'react-redux';
import LoginBlock from '../../Component/LoginBlock/LoginBlock';
import styles from './LoginPage.module.scss'
import { useAppSelector } from '../../store/store';
import { useAuthMutation } from '../../store/rtkQuery/authApi';
import { useEffect } from 'react';

function LoginPage() {
  
    
    

    return (
        <div className={styles.loginPage}>
            
         <LoginBlock/>
        
        </div>
    );

}

export default LoginPage;