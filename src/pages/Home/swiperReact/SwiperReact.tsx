import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from 'swiper';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-cube";

import "./SwiperReact.css";

// Import required modules
import { EffectCube, Navigation, Pagination } from "swiper";
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

        <SwiperSlide className="bg2">
          <Box p={25}>
            <Box display="flex" justifyContent="left" alignItems="center">
              <Typography className='text'>A era</Typography>
            </Box >
            <Box display="flex" justifyContent="left" alignItems="center">
              <Typography className='text'>exponencial:</Typography>
            </Box>
            <Box display="flex" justifyContent="left" alignItems="center">
              <Typography className='text'>cresça sem limites</Typography>
            </Box>
          </Box>
        </SwiperSlide>

        <SwiperSlide className="bg1"></SwiperSlide>
        <SwiperSlide className="bg3"></SwiperSlide>

      </Swiper>
    </>
  );
}

export default SwiperReact;