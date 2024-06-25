import React from "react";
import Carousel from "./carousel";
import MultiItemCarousel from "./categories";
import Offers from "./offers";
import "./styles/home.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Typography } from "@mui/material";

class Home extends React.Component {
  render() {
    var settings = {
      dots: false,
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
            dots: false,
            arrows: false,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className=" bg-black  ">
        <br />
        <Carousel />
        <br />
        <MultiItemCarousel />
        <br />

        <div className="body">
          <div className=" bg-black">
            <img className="cashback" src="images/cashback.webp" />
          </div>
          <div className="container pt-5">
            {/* <div className="d-flex my-3 justify-content-center align-items-center">
            <img src="images/hdfc-flat1500-mob.jpg" className=" hdfc " />
          </div> */}

            <h2 className="  new-products  head">New at ElectroBoom :</h2>
            <div className=" container new-products mt-5 ">
              <div className="row d-flex  justify-content-evenly align-items-center">
                <div className="new-products mb-4 img col-md-6 col-sm-6">
                  <img className="" src="images/new2.webp" />
                </div>
                <div className="new-products mb-4 col-md-6 col-sm-6 img ">
                  <img className="" src="images/vivo.webp" />
                </div>
              </div>
            </div>
            {/* <div className="row mb-4 new-products-n d-flex justify-content-evenly align-items-center">
              <div className="new-products-n-img mb-4   col-md-3  col-sm-6 ">
                <img src="images/n1.webp" />
              </div>
              <div className="new-products-n-img mb-4 col-md-3 col-sm-6 ">
                <img src="images/n2.png" />
              </div>
              <div className="new-products-n-img mb-4 col-md-3 col-sm-6 ">
                <img src="images/n3.webp" />
              </div>
              <div className="new-products-n-img mb-4  col-md-3 col-sm-6  ">
                <img src="images/n4.webp" />
              </div>
            </div> */}

            <div className="container  slider-products">
              <Slider {...settings} className="">
                <div className="slidee">
                  <img src="images/n1.webp" className="img-fluid" />
                </div>
                <div className="slidee">
                  <img src="images/n2.png" className="img-fluid" />
                </div>
                <div className="slidee">
                  <img src="images/n3.webp" className="img-fluid" />
                </div>
                <div className="slidee">
                  <img src="images/n4.webp" className="img-fluid" />
                </div>
                <div className="slidee">
                  <img src="images/n5.webp" className="img-fluid" />
                </div>
                <div className="slidee">
                  <img src="images/n6.webp" className="img-fluid" />
                </div>
                <div className="slideee">
                  <img src="images/n7.webp" className="img-fluid" />
                </div>
                <div className="slidee">
                  <img src="images/n8.webp" className="img-fluid" />
                </div>
              </Slider>
              <br />
            </div>
            <br />
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
