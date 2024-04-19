
import { useEffect } from 'react';
import { useAppSelector } from '../../store/store';
import styles from './UserCab.module.scss'
import { useNavigate } from 'react-router-dom';


function UserCab() {
   const navigate = useNavigate()
    const {isAuth,email,lastName,name,phone} = useAppSelector(state=>state.auth)

    useEffect(()=>{
       console.log(isAuth)
        if(isAuth==false){
            navigate('/')
        }
    },[isAuth])


    return (
       <div className={styles.block}>
        <h1>Особистий кабінет</h1>
                <table>
                    <thead>
                        <tr>
                            <th scope="col">Прізвище</th>
                            <th scope="col">Ім’я</th>
                            <th scope="col">Мобільний</th>
                            <th scope="col">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td >{lastName}</td>
                            <td>{name}</td>
                            <td>{phone}</td>
                            <td>{email}</td>
                        </tr>
                    </tbody>
                </table>
       </div>
    );

}

export default UserCab;