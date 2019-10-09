import React from "react";
import { Carousel } from "react-bootstrap";

export function CarouselSection() {
  return (
    <div className="carousel-slides">
      <Carousel>
      <Carousel.Item>
        <img
          className="tp-logo-car"
          src="https://www.xdguru.com/wp-content/uploads/2019/01/Free-Disqus-UI-Template-1014x487.jpg"
          alt="Into slide"
        />

        <Carousel.Caption>
          <div className="caption1">
            <h3>Create an account!!</h3>
            <h5>
              Leave comments and have debates with people on the topic with Disqus!!
            </h5>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="First slide"
        />
        <Carousel.Caption>
          <div className="caption1">
            <h3>Check us out!!</h3>
            <h5>
              Take a look at some of our social media platforms!!
            </h5>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1505322747495-6afdd3b70760?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
          alt="Second slide"
        />

        <Carousel.Caption>
          <div className="caption1">
            <h3>Be sure to like us on Instagram</h3>
            <h5>
              Be up to date with new upcoming polls or other things!!
            </h5>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1551817958-20204d6ab212?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
          alt="Third slide"
        />

        <Carousel.Caption>
          <div className="caption1">
            <h3>Give us a tweet!!</h3>
            <h5>
              Check out our page on Twitter
            </h5>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1523837157348-ffbdaccfc7de?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80"
          alt="Fourth slide"
        />

        <Carousel.Caption>
          <div className="caption1">
            <h3>Coming soon!!</h3>
            <h5>
              We plan to let you guys make your own Toppolls too!!
            </h5>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1512314889357-e157c22f938d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
          alt="Fifth slide"
        />

        <Carousel.Caption>
          <div className="caption1">
            <h3>Have an Idea?</h3>
            <h5>
              We are open to suggestions for new "Toppolls"
            </h5>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    
    
  );
}
