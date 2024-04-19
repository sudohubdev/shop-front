import { Link } from 'react-router-dom';
import styles from './ErrorPage.module.scss'
import { useAppDispatch } from '../../store/store';
import { auth } from '../../store/slices/AuthSlice';


const ErrorPage = () => {
  const dispatch = useAppDispatch()
  const handlerClick = ()=>{
    dispatch(auth(false))
  }


    return (
      <div className={styles.container}>
        <h1 className={styles.heading}>Не авторизовані</h1>
        <p className={styles.message}>Вибачте, але для покупок потрібно авторизуватися в системі</p>
        <Link to="/login" onClick={handlerClick} className={styles.link} >Увійти</Link>
      </div>
    );
  };

  export default ErrorPage