// import { Button } from "@mui/material";
import React from "react";
const arr = [
  "images/ezgif-3-6f5c4ef9fc.gif",
  "images/08fdfc7e-baf6-4701-9df8-e0c28e837fda23270940.webp",
  "images/e0292944-4346-442a-b29f-4a995353d22123180817.webp",
];

class Carousel extends React.Component {
  render() {
    return (
      <div
        id="myCarousel"
        class="  carousel carousel-fade mt-4"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          {/* {arr.map((it,i)=>{
    return <div key={i} class="carousel-item" active={i===1}>
      <img src={it} class="d-block w-100" alt={`Slide ${i+1}`}/>
    </div>
  })} */}
          <div class="carousel-item  active">
            <img src="images/sl2.webp" class="d-block w-100" alt="Slide 1" />
          </div>
          <div class="carousel-item ">
            <img src="images/sl1.webp" class="d-block w-100" alt="Slide 2" />
          </div>
          <div class="carousel-item">
            <img src="images/sl3.webp" class="d-block w-100" alt="Slide 3" />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    );
  }
}
export default Carousel;
