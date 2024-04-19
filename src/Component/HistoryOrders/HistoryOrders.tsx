
import styles from './HistotyOrders.module.scss'
import trueOrderIcon from '../../assets/trueOrder.svg'
import falseOrderIcon from '../../assets/falseOrder.svg'
import { useGetCommentsQuery } from '../../store/rtkQuery/commentApi';
import { useGetOrdersQuery } from '../../store/rtkQuery/productsApi';
import { useEffect } from 'react';

function HistotyOrders() {
   
   const {data} = useGetOrdersQuery()

   
    

    return (
       <div className={styles.block}>
     <h1>Історія Покупок</h1>
     {data?.map(item=> {
        
        const date = item.dateOrdered ? new Date(item.dateOrdered) : null;
        let formattedDate = 'N/A';
        
        if (date) {
            const month = date.getMonth() + 1; // Month is zero-indexed
            const day = date.getDate();
            const year = date.getFullYear();
            formattedDate = `${month}/${day}/${year}`;
        }
        
        return (<table className={styles.historyTable}>
        
                    <thead>
                        <tr>
                            <th scope="col" className={styles.number}>Номер </th>
                            <th scope="col" className={styles.date}>Дата</th>
                            <th scope="col" className={styles.city}>Місто</th>
                            <th scope="col" className={styles.delivery}>Тип доставки</th>
                            <th scope="col" className={styles.priceOrdered}>Сума замовлення</th>
                            <th scope="col" className={styles.address}>Повна адреса</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className={styles.number}>{item.id}</td>
                            <td className={styles.date}>{formattedDate}</td>
                            <td className={styles.city}>{item.city}</td>
                            <td className={styles.delivery}>{item.deliveryMethod}</td>
                            <td className={styles.priceOrdered}>{item.priceOrdered} ₴</td>
                            <td className={styles.address}>{item.postOffice}</td>
                        </tr>
                    </tbody>

                   {!true?<img className={styles.imageOrder} src={trueOrderIcon} alt="" />:<img className={styles.imageOrder} src={falseOrderIcon} alt="" />} 

                </table>)})}
                   
       </div>
    );

}

export default HistotyOrders;