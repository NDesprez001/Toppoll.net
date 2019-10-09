import React from "react";
import { Carousel } from "react-bootstrap";

export function Carousel2() {
  return (
    <div className="topic-slider">
      <div className="slider-2">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://cdn.pixabay.com/photo/2018/09/01/10/15/podcast-3646472_960_720.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Share with friends</h3>
              <p>Let friends of anyone know about Toppoll.net.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://cdn.pixabay.com/photo/2016/01/28/09/17/banner-1165979_960_720.png"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Be mindful</h3>
              <p>Although all opinions are welcome, please watch what you say and make sure it's non-intentionally offensive</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://cdn.pixabay.com/photo/2016/11/29/13/20/balloons-1869790_960_720.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Have fun</h3>
              <p>
                Whether you're here to debate or just see people debate, make sure you enjoys yourself!!
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}
