import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css';

function SlideMainPage() {
    const imagens = [
        {id: 1, img: "https://i.imgur.com/1vz4Rkg.png"},
        {id: 2, img: "https://i.imgur.com/x3TjA9q.gif"},
        {id: 3, img: "https://i.imgur.com/2GrnpgQ.png"},
    ];
    return ( 
        <div className="w-full h-[400px] flex justify-center items-center mt-5">
            <Swiper 
                className="w-[95%] h-full border-slate-400 border rounded-lg"
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                }}
            >
                {imagens.map((item) => (
                    <SwiperSlide key={item.key} className="w-full h-full flex justify-center items-center relative">
                        <img src={item.img} className="w-full h-full" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default SlideMainPage;