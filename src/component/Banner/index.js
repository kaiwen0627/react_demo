import React from "react";
import { Carousel } from "antd";

import './index.less'

const Banner = ({ list }) => {
  return (
    <Carousel autoplay className="banner-con">
      {list.map(item => {
        return (
          <div key={item.targetId}>
            <img src={item.pic} alt="" />
          </div>
        );
      })}
    </Carousel>
  );
};

export default Banner;
