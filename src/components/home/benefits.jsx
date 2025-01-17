import Image from 'next/image';
import Link from 'next/link';
import React, { useRef } from 'react';
import useTitleAnimation from "@/src/hooks/useTitleAnimation";
import service_data from '@/src/data/service-data';
import RightArrow from '@/src/svg/right-arrow';

import img from "../../../public/assets/img/service/sv-dashbord.png" 

const service_content = {
    title: "Этим мы НРАВИМСЯ нашим клиентам!",

    bg_img: "/assets/img/service/sv-bg.jpg",
    title_2: <>УДОБНЫЙ <br /> и информативный<br /> личный кабинет</>,
    des: <>Lorem Ipsum is simply dummy text <br /> of the printing</>,
    btn_text: "Work with Us",

    

}
const {title, sub_title,bg_img, title_2, des, btn_text}  = service_content

const ServicesArea = () => {
    let titleRef = useRef(null)

   useTitleAnimation(titleRef)
    return (
        <>
            <div id='services' className="tp-service__area p-relative fix pb-80 pt-100">
               <div className="tp-service__grey-shape"></div>
               <div className="container">
                  <div className="row justify-content-center">
                     <div className="col-lg-8">
                        <div ref={titleRef} className="tp-service__section-box tp__title_anime mb-50 text-center tp-title-anim">
                           <h2 className="tp-section-title">{title}</h2>
                        </div>
                     </div>
                  </div>
                  <div className="row">

                    {service_data.slice(0,5).map((item, i)  => 
                        <div key={i} className="col-xl-4 col-lg-4 col-md-6 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay={item.delay}>
                            <div className="tp-service__item mb-30">
                                <div className="tp-service__icon">
                                    <Image src={item.img} alt="theme-pure" />
                                </div>
                                <div className="tp-service__content">
                                    <h3 className="tp-service__title-sm tp-yellow-color">{item.title}</h3>
                                </div>
                            </div>
                        </div>
                    )}

                     <div className="col-xl-4 col-lg-4 col-md-6 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay="1s">
                        <div className="tp-service__dashboard" 
                        style={{backgroundImage: `url(${bg_img})`}} >
                           <div className="tp-service__top-content">
                              <h3 className="tp-service__title-white">{title_2}</h3>
                           </div>
                           <div className="tp-service__dashdboard-sm-img">
                              <Image className="wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".7s" 
                              src={img} alt="theme-pure" />
                           </div>
                        </div>
                     </div>

                  </div>
               </div>
            </div>
        </>
    );
};

export default ServicesArea;