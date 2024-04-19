
import styles from './OrderRight.module.scss'
import nullImg from '../../assets/null.svg'
import DeliveryCurier from '../../Ui/Delivery/DeliveryCurier'
import { useEffect, useState } from 'react'
import DeliveryPosta from '../../Ui/DeliveryPosta/DeliveryPosta'
import InputBlock from '../../Ui/InputBlock/InputBlock'
import { useAppDispatch } from '../../store/store'
import { addInfo } from '../../store/slices/OrderSlice'


const OrderRight = ()  =>{
  
    const [activeIndex,setActiveIndex] = useState<number>(-1)
    const [name,setName] = useState('')
    const [surname,setSurname] = useState('')
    const [phone,setPhone] = useState('')
    const [town,setTown] = useState('')
    const [method,setMethod] = useState('')
    const [postOffice,setPostOffice] = useState('')


    const dispatch = useAppDispatch()
    useEffect(()=>{

    switch (activeIndex) {
        case 0:
            setMethod('Meest Пошта')
            break;
        case 1:
            setMethod('Нова Пошта')
        break;
            case 2:
        setMethod('Укр Пошта')
            break;
        case 4:
            setMethod('Кур`єром')
        break;
        
    }
    },[activeIndex])

    useEffect(()=>{console.log(postOffice)},[postOffice])

    useEffect(()=>{
        dispatch(addInfo({legalName:`${name} ${surname}`,city:town,phone:phone,postOffice:postOffice,deliveryMethod:method,paymentMethod:"Paypel"}))
    },[name,surname,town,phone,postOffice,method])


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
           

            <DeliveryCurier activeIndex={activeIndex} index={4} setPostOffice={setPostOffice} setActiveIndex={setActiveIndex}/>
            {deliveryName.map((item,index)=>(
                <DeliveryPosta setPostOffice={setPostOffice} activeIndex={activeIndex} index={index} setActiveIndex={setActiveIndex} title={item.title} deliveryPlaces={item.address}/>
            ))}
            
           
           
           
            </div>
         



        </div>
    );

}

export default OrderRight;