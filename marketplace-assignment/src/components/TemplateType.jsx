import React, {useState, useEffect} from 'react'
import Card from './Card';
import SkeletonProductLib from './SkeletonProductLib';
import { register } from 'swiper/element/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation,Scrollbar } from 'swiper/modules';
register();

const TemplateType = ({templateTitle, a1, a2, a3, t1, t2, t3, p1, p2, p3}) => {

    const [loader, setLoader] = useState(false);
    useEffect(() => {
        setLoader(true);
        setTimeout( () => {
            setLoader(false);
        }, 4000);
    }, []);

    return (
        <>
            {/* <div className="container mt-[60px] overflow-hidden">
                <h2 className="text-[#161616] text-[20px] font-bold tracking-[-0.4px] leading-[28px]">{templateTitle}</h2>

                <div className="wrapper mt-[20px] flex justify-between cursor-pointer">
                    <Card img={a1} title={t1} p={p1}/>
                    <Card img={a2} title={t2} p={p2}/>
                    <Card img={a3} title={t3} p={p3}/>
                </div>

            </div> */}
            {
                loader ? (
                    <SkeletonProductLib count={3} />
                ):(
                <div className="container mt-[60px] overflow-hidden">
                        <h2 className="text-[#161616] text-[20px] font-bold tracking-[-0.4px] leading-[28px]">{templateTitle}</h2>

                        <div className="wrapper mt-[20px] flex justify-between cursor-pointer max-w-[1000px]">
                            <Swiper loop={true} navigation={true} modules={[Navigation,Scrollbar]} scrollbar={{ draggable: true }} className="mySwiper ">
                                <SwiperSlide className="flex justify-between">
                                    <Card img={a1} title={t1} p={p1}/> 
                                    <Card img={a2} title={t2} p={p2}/>
                                    <Card img={a3} title={t3} p={p3}/>
                                </SwiperSlide>
                                <SwiperSlide className="flex justify-between">
                                    <Card img={a1} title={t1} p={p1}/> 
                                    <Card img={a2} title={t2} p={p2}/>
                                    <Card img={a3} title={t3} p={p3}/>
                                </SwiperSlide>
                            </Swiper>
                        </div>

                    </div>)
            }    
        </>
    )
}

export default TemplateType
