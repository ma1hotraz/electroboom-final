import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles/categories.css";

class MultiItemCarousel extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            arrows: false,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1.5,
            arrows: false,
            dots: false,
            slidesToScroll: 1,
          },
        },
      ],
    };

    const slides = [
      { src: "images/c1.png", caption: "Computers & Tablets" },
      { src: "images/c2.png", caption: "Home Appliances" },
      { src: "images/c3.png", caption: "Accessories" },
      { src: "images/c4.png", caption: "Phones & Wearables" },
      { src: "images/c5.png", caption: "Audio & Video" },
      { src: "images/c6.png", caption: "Televisions" },
      { src: "images/c7.webp", caption: "Kitchen Appliances" },
      { src: "images/c8.png", caption: "Smart Devices" },
      { src: "images/c9.png", caption: "Gaming" },
      { src: "images/c10.png", caption: "Cameras" },
      { src: "images/c11.png", caption: "Personal Care" },
      { src: "images/c12.png", caption: "Health & Fitness" },
    ];

    return (
      <div className="container categories">
        <Slider {...settings} className="slider">
          {slides.map((slide, index) => (
            <div className="slide" key={index}>
              <img
                src={slide.src}
                className="img-fluid"
                alt={`Slide ${index + 1}`}
              />
              <div className="slide__caption">{slide.caption}</div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

export default MultiItemCarousel;
