import styles from './SelectFilter.module.scss'
import select from '../assets/select.svg'
import { useState } from 'react';


const SelectFilter = ()=>{

    const [selectedOption, setSelectedOption] = useState('');
    const [isShow,setIsShow] = useState(false)
    const [filterValue,setFilterValue]= useState('') 
    const handleCheckboxChange = (value:string) => {
      setSelectedOption(value);
    };

    


    return (
        <div className={styles.selectFilter}>
            <div className={styles.mainSelect} onClick={()=>setIsShow(!isShow)}>
                <h2 className={styles.mainTitle}>Сортувати</h2>
                <img src={select} alt="" />
            </div>
            {isShow?<div className={styles.select}>
                <div className={styles.option}>
                <label className={styles.optionBlock} htmlFor="filter1"></label>
                <input name='filter' id='filter1' className={styles.optionInput}  checked={selectedOption === 'option1'}
          onChange={() => handleCheckboxChange('option1')}  type='checkbox'/>
                <h2 className={styles.title}>За рейтингом</h2>
            </div>
            <div className={styles.option}>
            <label className={styles.optionBlock} htmlFor="filter2"></label>
                <input name='filter' id='filter2' className={styles.optionInput}  checked={selectedOption === 'option2'}
          onChange={() => handleCheckboxChange('option2')}  type='checkbox'/>
                <h2 className={styles.title}>Від дешевих до дорогих</h2>
            </div>
            <div className={styles.option}>
            <label className={styles.optionBlock} htmlFor="filter3"></label>
                <input name='filter' id='filter3' className={styles.optionInput}  checked={selectedOption === 'option3'}
          onChange={() => handleCheckboxChange('option3')}  type='checkbox'/>
                <h2 className={styles.title}>Від дорогих до дешевих</h2>
            </div>
           
            </div>
            :null}
        </div>
    )
}

export default SelectFilter