import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./SwiperReact.css";

// import required modules
import { Navigation } from "swiper";
import { Box, Typography } from "@material-ui/core";

function SwiperReact() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper" style={{ height: '90vh' }}>
        <SwiperSlide className="bg2">
          <Box p={25}>
            <Box display="flex" justifyContent="left" alignItems="center">
              <Typography className='text'>
                A era
              </Typography>
            </Box >
            <Box display="flex" justifyContent="left" alignItems="center">
              <Typography className='text'>
                exponencial:
              </Typography>
            </Box>
            <Box display="flex" justifyContent="left" alignItems="center">
              <Typography className='text'>
                cresça sem limites
              </Typography>
            </Box>
          </Box></SwiperSlide>

        <SwiperSlide className="bg1"></SwiperSlide>
        <SwiperSlide className="bg3"></SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
      </Swiper>
    </>
  );
}

export default SwiperReact;