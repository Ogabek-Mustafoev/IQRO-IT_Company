import { services } from "../../constants";
import Heading from "../heading";
import ServiceCard from "../service-card";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";

export default function Services() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section id="services" className="col">
      <Heading title="Услуги" />
      <div className="service-list">
        {services.map((item, idx) => (
          <ServiceCard key={idx} {...item} />
        ))}
      </div>
      <Slider {...settings}>
        {services.map((item, idx) => (
          <ServiceCard key={idx} {...item} />
        ))}
      </Slider>
    </section>
  );
}
