import { services } from "../../constants";
import Heading from "../heading";
import ServiceCard from "../service-card";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";

export default function Services() {
  // Slider Settings
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

      {/* Service list for big devices(tablet and above) */}
      <div className="service-list">
        {services.map((item, idx) => (
          <ServiceCard key={idx} {...item} />
        ))}
      </div>

      {/* Service list with slider for phone */}
      <Slider {...settings}>
        {services.map((item, idx) => (
          <ServiceCard key={idx} {...item} />
        ))}
      </Slider>
    </section>
  );
}
