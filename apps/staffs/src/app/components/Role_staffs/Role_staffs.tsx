// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './Role_staffs.css';

// import required modules
import { Pagination, EffectCoverflow } from 'swiper';

export const Role_staffs = () => {
  return (
    <div id="roleStaffs">
      <div className="role-content__roleInfos">
        <h3 className="role-content__roleInfos__titleContainer-title">
          Papel do
          <br />
          Staff na corrida
        </h3>
        <p className="role-content__roleInfos--textOne">
          Você faz parte do evento!
        </p>
        <p className="role-content__roleInfos--textTwo">
          Durante toda prova, cada detalhe faz diferença, principalmente na
          presença dos atletas, patrocinadores e público. Portanto, fique
          atento:
        </p>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper role-content__roleInfos__swiperContent"
        >
          <SwiperSlide className="mySwiper role-content__roleInfos__swiperContent--swiper">
            <p>
              Procure incentivar os atletas durante todo percurso, com frases
              como: Boa Prova, Você está indo bem, Continue, Você consegue, não
              desista!
            </p>
          </SwiperSlide>
          <SwiperSlide className="mySwiper role-content__roleInfos__swiperContent--swiper">
            <p>Parabenize o atleta pós prova;</p>
          </SwiperSlide>
          <SwiperSlide className="mySwiper role-content__roleInfos__swiperContent--swiper">
            <p>Tenha paciência com o atleta em todas as situações;</p>
          </SwiperSlide>
          <SwiperSlide className="mySwiper role-content__roleInfos__swiperContent--swiper">
            <p>Evite gritar com colegas, sem necessidade;</p>
          </SwiperSlide>
          <SwiperSlide className="mySwiper role-content__roleInfos__swiperContent--swiper">
            <p>Seja educado em qualquer circunstância;</p>
          </SwiperSlide>
          <SwiperSlide className="mySwiper role-content__roleInfos__swiperContent--swiper">
            <p>Manter boa aparência e higiene pessoal;</p>
          </SwiperSlide>
          <SwiperSlide className="mySwiper role-content__roleInfos__swiperContent--swiper">
            <p>
              O evento tem uma energia vibrante e boa, você tem um papel
              fundamental para manter esse clima agradável!
            </p>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
