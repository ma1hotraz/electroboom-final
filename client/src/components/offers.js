import React, { Component } from "react";
import "./styles/offers.css";
import { Box, Grid, Typography } from "@mui/material";
import Slider from "react-slick";

export default class Offers extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4.7,
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
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="banner-container">
        <div className="banner ">
          <img src="images/Electronics_PC.gif" className="img-fluid" />
        </div>
        <div className=" bg-black">
          <img className="cashback" src="images/cashback.webp" />
        </div>
        <br />
        <Box sx={{ p: 2 }}>
          {/* <Typography variant="h1" sx={{ textAlign: "center", mb: 2 }}>
            TOP OFFERS FOR YOU
          </Typography> */}
          <div className="head-container">
            <Typography
              variant="h5"
              className="  offers-head "
              sx={{
                textAlign: "center",
                mb: 2,
                fontSize: { md: "30px" },
                fontWeight: "bold",
              }}
            >
              TOP OFFERS FOR YOU
            </Typography>
            {/* <h1 className="  offers-head text-center">TOP OFFERS FOR YOU</h1> */}
          </div>
          <br />
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={6} sm={3}>
              <img
                src="images/off1.jpg"
                alt="Offer 1"
                style={{ maxWidth: "100%", height: "100%" }}
              />
            </Grid>
            <Grid item xs={6} sm={3}>
              <img
                src="images/off2.jpg"
                alt="Offer 2"
                style={{ maxWidth: "100%", height: "100%" }}
              />
            </Grid>
            <Grid item xs={6} sm={3}>
              <img
                src="images/off3.jpg"
                alt="Offer 3"
                style={{ maxWidth: "100%", height: "100%" }}
              />
            </Grid>
            <Grid item xs={6} sm={3}>
              <img
                src="images/off4.jpg"
                alt="Offer 4"
                style={{ maxWidth: "100%", height: "100%" }}
              />
            </Grid>
            <Grid item xs={6} sm={3}>
              <img
                src="images/off5.jpg"
                alt="Offer 5"
                style={{ maxWidth: "100%", height: "100%" }}
              />
            </Grid>
            <Grid item xs={6} sm={3}>
              <img
                src="images/off6.jpg"
                alt="Offer 6"
                style={{ maxWidth: "100%", height: "100%" }}
              />
            </Grid>
            <Grid item xs={6} sm={3}>
              <img
                src="images/off7.jpg"
                alt="Offer 7"
                style={{ maxWidth: "100%", height: "100%" }}
              />
            </Grid>
            <Grid item xs={6} sm={3}>
              <img
                src="images/off8.jpg"
                alt="Offer 8"
                style={{ maxWidth: "100%", height: "100%" }}
              />
            </Grid>
          </Grid>
        </Box>
        {/* <div className="">
          <h1>TOP OFFERS FOR YOU</h1>
          <div className=" offer-list d-flex justify-content-evenly">
            <div>
              <img className="" src="images/off1.jpg" />
            </div>
            <div>
              <img className="" src="images/off2.jpg" />
            </div>
            <div>
              <img className="" src="images/off3.jpg" />
            </div>
            <div>
              <img className="" src="images/off4.jpg" />
            </div>
          </div>
          <div className="d-flex offer-list justify-content-evenly">
            <div>
              <img className="" src="images/off5.jpg" />
            </div>
            <div>
              <img className="" src="images/off6.jpg" />
            </div>
            <div>
              <img className="" src="images/off7.jpg" />
            </div>
            <div>
              <img className="" src="images/off8.jpg" />
            </div>
          </div>
        </div> */}
        <div className="offer-products py-3 ">
          <div className="container  ">
            <Slider {...settings} className="">
              <div className="offer-slide">
                <img src="images/b1.png" className="img-fluid" />
              </div>
              <div className="offer-slide">
                <img src="images/b2.png" className="img-fluid" />
              </div>
              <div className="offer-slide">
                <img src="images/b3.png" className="img-fluid" />
              </div>
              <div className="offer-slide">
                <img src="images/b4.png" className="img-fluid" />
              </div>
              <div className="offer-slide">
                <img src="images/b5.png" className="img-fluid" />
              </div>
              <div className="offer-slide">
                <img src="images/b6.png" className="img-fluid" />
              </div>
              <div className="offer-slide">
                <img src="images/b7.png" className="img-fluid" />
              </div>
              <div className="offer-slide">
                <img src="images/b8.png" className="img-fluid" />
              </div>
              <div className="offer-slide">
                <img src="images/b9.png" className="img-fluid" />
              </div>
              <div className="offer-slide">
                <img src="images/b10.png" className="img-fluid" />
              </div>
            </Slider>
            <br />
          </div>
        </div>
      </div>
    );
  }
}
