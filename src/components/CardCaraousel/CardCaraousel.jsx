import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReviewCard from '../block5/ReviewCard';

const CardCaraousel = (props) => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
  return (
      <div style={{width:"80%",marginLeft:"10%"}}>
    <Carousel
  swipeable={false}
  draggable={false}
  showDots={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlay={props.deviceType !== "mobile" ? true : false}
  autoPlaySpeed={2000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  deviceType={props.deviceType}
  dotListClass="custom-dot-list-style"
>
  <div><ReviewCard name="Saksham1"/></div>
  <div><ReviewCard name="Saksham11"/></div>
  <div><ReviewCard name="Saksham23"/></div>
  <div><ReviewCard name="Saksham456"/></div>
  <div><ReviewCard name="Saksham111"/></div>
  <div><ReviewCard name="Saksham222"/></div>
  <div><ReviewCard name="Saksham345"/></div>
  <div><ReviewCard name="Saksham69"/></div>
</Carousel>
</div>
  )
}

export default CardCaraousel


