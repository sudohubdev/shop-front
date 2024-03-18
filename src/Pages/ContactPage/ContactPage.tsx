
import { useState } from 'react';
import styles from './ContactPage.module.scss'
import Header from '../../Component/Header/Header';
import Menu from '../../Component/Menu/Menu';

function ContactPage() {
  
    const text = [
        {
            title:"Вітаємо!",
            paragraph:"Наша історія почалася з великої мрії про створення чогось значущого. Ми завжди вірили, що електроніка може бути не лише пристроїв, але й способом зробити життя кращим. Ця мрія перетворилася на реальність завдяки нашому наполегливому зусиллю та відданості ідеї."
        },
        {
            title:"Команда професіоналів, що створює майбутнє",
            paragraph:"Наша команда - це талановиті фахівці, які об'єднали свої знання та енергію для створення чогось великого. Від розробки та програмування до маркетингу та обслуговування клієнтів, кожен учасник нашої команди працює наполегливо, щоб забезпечити нашим клієнтам найкращий досвід користування."
        },
        {
            title:"Наші послуги: Відкрийте для себе новий світ технологій",
            paragraph:"Ми пропонуємо широкий асортимент продуктів від провідних виробників електроніки. Від смартфонів та планшетів до побутової техніки та аксесуарів, у нас є все необхідне для вашого комфорту та розваг."
        },
        {
            title:"Плани розвитку: Шлях до нових вершин",
            paragraph:"Ми прагнемо постійно вдосконалюватися та розширювати свої можливості. Наші плани на майбутнє включають в себе розширення асортименту товарів, вдосконалення сервісу доставки та підвищення рівня задоволення наших клієнтів."
        },
        {
            title:"Доставка за кордон: Зручність у кожній деталі",
            paragraph:"Ми розуміємо, що для наших клієнтів важливо мати можливість отримати товари зручним способом, навіть якщо вони перебувають за межами країни. Тому ми пропонуємо послугу доставки за кордон, яку можна замовити зв'язавшись з нашим адміністратором по телефону або електронній пошті, деталі яких ви знайдете на нашому веб-сайті в розділі Контакти."
        },
        {
            title:"Рішення для сучасного споживача",
            paragraph:"Ми створили не лише магазин електроніки, але й спільноту та середовище, де кожен може знайти щось особливе для себе. Наша місія - зробити технології доступними та зрозумілими для кожного, а наші послуги - це крок у цьому напрямку."
        }
    ]


    const [isShow,setIsShow] = useState(false);
    return (
        <div className={styles.ContactPage}>
        <Header isShow={isShow} setIsShow={setIsShow}/>
        <div className={styles.ContactWrapper}>
            
      <h1 className={styles.title}>D_SHOP</h1>
      <div className={styles.wrapper}>
        <div className={styles.contactLeft}>
            {text.map(item=>(
                <div>
                     <h3 className={styles.contactBlockTitle}>{item.title}</h3>
                    <p className={styles.contactBlockParagraph}>{item.paragraph}</p>
                </div>
               
            ))}
               
        </div>
        <div></div>
      </div>
        
        </div>
        <Menu isShow={isShow} setIsShow={setIsShow} />
        </div>
        
    );

}

export default ContactPage;