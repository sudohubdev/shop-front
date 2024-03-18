
import styles from './OrderRight.module.scss'
import nullImg from '../../assets/null.svg'
import DeliveryCurier from '../../Ui/Delivery/DeliveryCurier'
import { useState } from 'react'
import DeliveryPosta from '../../Ui/DeliveryPosta/DeliveryPosta'
import InputBlock from '../../Ui/InputBlock/InputBlock'


const OrderRight = ()  =>{
  
    const [activeIndex,setActiveIndex] = useState<number>(-1)
    const [name,setName] = useState('')
    const [surname,setSurname] = useState('')
    const [phone,setPhone] = useState('')
    const [town,setTown] = useState('')
    const deliveryName= [
        {
            title: 'Самовивіз з Meest ПОШТА',
            address:[ '№1, вул. Батюка, 12',
            '№1, вул. Батюка, 12',
            '№1, вул. Батюка, 12',
            '№1, вул. Батюка, 12',
            '№1, вул. Батюка, 12',
            '№1, вул. Батюка, 12',]
        },
        {
            title: 'Самовивіз з Нової пошти',
            address:[ '№1, вул. Батюка, 12',
            '№1, вул. Батюка, 12',
            '№1, вул. Батюка, 12',
            '№1, вул. Батюка, 12',
            '№1, вул. Батюка, 12',
            '№1, вул. Батюка, 12',]
        },
        {
            title: 'Самовивіз з УКРПОШТИ',
            address:[ '№1, вул. Батюка, 12',
            '№1, вул. Батюка, 12',
            '№1, вул. Батюка, 12',
            '№1, вул. Батюка, 12',
            '№1, вул. Батюка, 12',
            '№1, вул. Батюка, 12',]
        }
       
        
       
    ]

    return (
        <div className={styles.orderRight}>
            
            <div className={styles.title}><h1>Оформлення</h1></div>
            
           <InputBlock title={'Ім’я'} setValue={setName} value={name} type={"text"}/>
           <InputBlock title={'Прізвище'} setValue={setSurname} value={surname} type={"text"}/>
           <InputBlock title={'Номер телефону'} setValue={setPhone} value={phone} type={"phone"}/>
           <InputBlock title={'Місто'} setValue={setTown} value={town} type={"text"}/>

            <div className={styles.title}><h1>Доставка</h1></div>
            <div className={styles.inputBlocks}>
           

            <DeliveryCurier activeIndex={activeIndex} index={4} setActiveIndex={setActiveIndex}/>
            {deliveryName.map((item,index)=>(
                <DeliveryPosta activeIndex={activeIndex} index={index} setActiveIndex={setActiveIndex} title={item.title} deliveryPlaces={item.address}/>
            ))}
            
           
           
           
            </div>
         



        </div>
    );

}

export default OrderRight;