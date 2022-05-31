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
            <Typography variant="h1">A era exponencial:</Typography>
            <Typography variant="h2">cresça sem limites</Typography>
          </Box>
        </SwiperSlide>

        <SwiperSlide className="bg2">
          <Box>
            <Typography variant="h1">A era exponencial:</Typography>
            <Typography variant="h2">cresça sem limites</Typography>
          </Box>
        </SwiperSlide>

        <SwiperSlide className="bg3">
          <Box>
            <Typography variant="h1">A era exponencial:</Typography>
            <Typography variant="h2">cresça sem limites</Typography>
          </Box>

        </SwiperSlide>
      </Swiper>

    </>
  );
}

export default SwiperReact;