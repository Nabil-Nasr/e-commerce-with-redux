import { useState } from "react";
import { Carousel } from "react-bootstrap";

const Slider = () => {
  const [index,setIndex]= useState(0)

  const handleSelect = (selectedIndex)=>setIndex(selectedIndex)

  return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect} className="text-center bg-danger p-5">
      <Carousel.Item>
        <div  className="bg-danger p-5">
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="bg-danger p-5">
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="bg-danger p-5">
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </div>
      </Carousel.Item>
    </Carousel>
    </>
  );
}

export default Slider;
