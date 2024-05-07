import { ReactNode } from "react";
import {SwiperOptions} from "swiper/types/swiper-options"

import styles from "./Slider.module.scss";
import classnames from "classnames/bind";

// webpack 5 imports
// Styles must use direct files imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss"; // core Swiper
import "swiper/scss/pagination"; // Pagination module

// import Swiper core and required modules
import SwiperCore from "swiper";
import { Pagination, EffectCreative } from 'swiper/modules';

// install Swiper modules
SwiperCore.use([Pagination, EffectCreative]);

export const Slider = ({
  children,
  className,
}: SwiperOptions & {
  children: ReactNode[];
  className?: string;
}): JSX.Element => {
  const cn = classnames.bind(styles);

  return (
    <Swiper
      modules={[Pagination]}
      direction={"horizontal"}
      mousewheel={true}
      pagination={{
        clickable: true,
        bulletActiveClass: cn("bullet-active")
      }}
      effect={'creative'}
      creativeEffect={{
        prev: {
          shadow: true,
          translate: ['-128.5%', 0, -500],
        },
        next: {
          shadow: true,
          translate: ['128.5%', 0, -500],
        },
      }}
      className={cn("swiper", className)}
    >
      {children.map((item, index) => (
        <SwiperSlide className={cn("swiper-slide")} key={index}>
          {item}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
