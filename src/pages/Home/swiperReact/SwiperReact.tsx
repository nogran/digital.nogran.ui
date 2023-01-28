import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCube, Navigation, Pagination, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-cube";

import "./SwiperReact.css";

// Import required modules
import { Box, Typography } from "@material-ui/core";

function SwiperReact() {
  SwiperCore.use([Autoplay])
  return (
    <>
      <Swiper className="mySwiper" style={{ height: '90vh' }}
        modules={[Navigation, Pagination, EffectCube]}
        navigation={true}
        effect={"cube"}
        speed={1600}
        autoplay={{ delay: 5000 }}

        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}>
        <SwiperSlide className="bg1">
          <Box>
            <Typography variant="h2">Somos a Digital Nogran</Typography>
            <Typography variant="h5">Transformamos seus desafios em resultados eficazes</Typography>
          </Box>
        </SwiperSlide>

        <SwiperSlide className="bg3">
          <Box>
            <Typography variant="h2">Inovação</Typography>
            <Typography variant="h5">Reinvente sua empresa com o Desenvolvimento de Software avançado</Typography>
          </Box>
        </SwiperSlide>

        <SwiperSlide className="bg2">
          <Box>
            <Typography variant="h2">Equipe</Typography>
            <Typography variant="h5">Está sempre atualizada e oferece os melhores e mais eficientes serviços</Typography>
          </Box>
        </SwiperSlide>

        <SwiperSlide className="bg4">
          <Box>
            <Typography variant="h2">Produtos Inovadores</Typography>
            <Typography variant="h5">Era exponencial: faça parte e cresça sem limites</Typography>
          </Box>
        </SwiperSlide>

      </Swiper>

    </>
  );
}

export default SwiperReact;