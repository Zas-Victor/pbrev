import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function SlideMainPage() {
  const imagens = [
    { id: 1, img: "https://i.imgur.com/1vz4Rkg.png" },
    { id: 2, img: "https://i.imgur.com/x3TjA9q.gif" },
    { id: 3, img: "https://i.imgur.com/2GrnpgQ.png" },
  ];
  return (
    <div className="w-full h-[340px] flex justify-center items-center my-5">
      <Swiper
        className="w-[93%] h-full border-slate-600 border"
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
      >
        <div className="w-full h-full flex">
          <div className="w-full h-full bg-black"></div>
          {imagens.map((item) => (
            <SwiperSlide
              key={item.id}
              className="w-full h-full flex justify-center items-center"
            >
              <img
                src={item.img}
                className="w-full h-full"
              />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
}

export default SlideMainPage;
