import LinearGradientLine from '@/src/svg/linear-gradient-line';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

// service img import 
import service_img_1 from "../../../public/assets/img/service/sv-icon-2-1.png"
import service_img_2 from "../../../public/assets/img/service/sv-icon-2-2.png"
import service_img_3 from "../../../public/assets/img/service/sv-icon-2-3.png"
import service_img_4 from "../../../public/assets/img/service/sv-icon-2-4.png"
import bg_img from "../../../public/assets/img/service/sv-bg-2-1.jpg" 

const service_content = {
    title: <>Наши преимущества</>,
    des: <>Идеальное решение для:</>,

    users_data: [
        {
            id: 1, 
            users_count: <>15<i>с</i></>,
            users_status: <>требуется на оплату</>,

        },
        {
            id: 2, 
            users_count: <>99<i>%</i></>,
            users_status: <>конверсия формы</>,

        },
        {
            id: 3, 
            users_count: <>от 500<i>руб</i></>,
            users_status: <>мин. сумма платежа</>,

        },
    ],
    service_data: [
        {
            id: 1,
            color: "",
            title: "Обменных сервисов",
            img: service_img_1,
        },
        {
            id: 2,
            color: "2",
            title: "Инфобизнеса",
            img: service_img_2,
        },
        {
            id: 3,
            color: "3",
            title: "E-commerce на площадках объявлений (Avito)",
            img: service_img_3,
        },
        {
            id: 4,
            color: "4",
            title: "Horeca для приема средств от граждан РФ",
            img: service_img_4,
        }, 
    ],

    free_tools_title: "More free tools than you can handle",
    free_tools: [
        <>Invoicing</>,
        <>Online Checkout</>,
        <>Point-of-Sale</>,
        <>Online Food Ordering</>,
        <>ICard Vault</>,
        <>Customer Portal</>,
        <>Inventory</>,
        <>Virtual Terminal</>,
        <>Recurring Plans</>,
        <>Payment Links</>,
        <>SMS Payments</>,
        <>QR Codes</>,
    ]

}
const {title, des, users_data, service_data , free_tools_title, free_tools}  = service_content 

const ServiceArea = () => {
    return (
        <>
            <div id='advantages' className="tp-service-2__area p-relative pt-100 pb-160">
               <div className="tp-service-2__shape">
                  <Image src={bg_img} alt="theme-pure" />
               </div>
               <div className="container z-index-5">
                  <div className="row align-items-center mb-50">
                     <div className="col-xl-6 col-lg-6">
                        <div className="tp-service-2__section-box">
                           <h3 className="tp-section-title-lg pb-20">{title}</h3>
                           <p>{des}</p>
                        </div>
                     </div>
                     <div className="col-xl-6 col-lg-6 wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".3s">
                        <div className="tp-service-2__user-box p-relative d-flex justify-content-lg-start justify-content-lg-end align-items-center">
                           <div className="tp-service-2__user-shape"> 
                                <LinearGradientLine />
                           </div>
                           {users_data.map((item, i)  => 
                                <div key={i} className="tp-service-2__user">
                                    <span>{item.users_count}</span>
                                    <p>{item.users_status}</p>
                                </div>
                            )} 
                        </div>
                     </div>
                  </div>
                  <div className="row gx-60">

                    {service_data.map((item, i)  => 
                        <div key={i} className="col-xl-3 col-lg-3 col-md-6 mb-40 wow tpfadeUp" 
                        data-wow-duration=".9s" data-wow-delay=".8s">
                        <div className="tp-service-2__item-wrapper p-relative">
                           <div className="tp-service-2__item d-flex justify-content-between flex-column">
                              <div className="tp-service-2__icon">
                                 <Image src={item.img} alt="theme-pure" />
                              </div>
                              <div className="tp-service-2__text">
                                 <h4 className="tp-service-2__title-sm">{item.title}</h4>
                              </div>
                           </div>
                           <div className={`tp-service-2__bg-shape tp-service-2__color-${item.color}`}></div>
                        </div>
                     </div>
                        
                        )
                    } 

                  </div>


               </div>
            </div>
        </>
    );
};

export default ServiceArea;