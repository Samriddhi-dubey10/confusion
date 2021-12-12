import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

 class Testimonials extends Component {
  render() {
    return (
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        <div>
          <img src="../assets/images/test1.jpg" />
          <div className="myCarousel">
            <h3>Rakhi Desai</h3>
            <h4>Banglore</h4>
            <p>
            "Speedy Report"
I would like to appreciate about Health Check service and speedy report delivery. I really appreciate their efforts.
            </p>
          </div>
        </div>

        <div>
          <img src="../assets/images/test2.jpg" />
          <div className="myCarousel">
            <h3>Sakshi Shukla</h3>
            <h4>Mumbai</h4>
            <p>
            "Report came on time"
They Amazed me with their great quality of word. I got my tests done … and report came on time…
            </p>
          </div>
        </div>

        <div>
          <img src="../assets/images/test3.jpg" />
          <div className="myCarousel">
            <h3>Megha Dubey</h3>
            <h4>Delhi</h4>
            <p>
            Very polite, quick works, punctual, responsible . All the best to your team and i wish you prosperity and success.
            </p>
          </div>
        </div>
      </Carousel>
    );
  }
}
export default Testimonials;

