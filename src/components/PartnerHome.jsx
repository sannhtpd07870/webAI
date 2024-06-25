
import React, { Component } from "react";
import Slider from "react-slick";
import Partner from "./Partner/Partner";
import "./Partner.css"
import {
 Banner,
 HelmetHead
} from "../components"

import fpt from '../image/client-logo/FPT.png';
import alfa from '../image/client-logo/ALFA.png';
import Dnes from '../image/client-logo/Dnes.png';
import IBM from '../image/client-logo/IBM.png';
import Viettel from '../image/client-logo/Viettel.png';
import Riavita from '../image/client-logo/Riavita.png';
import vnpt from '../image/client-logo/vnpt.png';
import a from "../image/doi-tac-trong-kinh-doanh.jpg";
const images = [
  fpt,
  alfa,
  Dnes,
  IBM,
  Viettel,
  Riavita,
  vnpt
    
    // Thêm các tệp hình ảnh khác
  ];
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block"}}
        onClick={onClick}
      />
    );
  }
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block",}}
        onClick={onClick}
      />
    );
  }

function PartnerHome() {
    const imagePaths = images.map(image => image.default);
    console.log(imagePaths);

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
        
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

return( 
<>
<HelmetHead name="ĐỐI TÁC-KHÁCH HÀNG" title="Về ĐỐI TÁC-KHÁCH HÀNG Của KCL" description="ĐỐI TÁC-KHÁCH HÀNG "  img={a} />
<Banner img={a}title="ĐỐI TÁC-KHÁCH HÀNG" />
<div className="container">

<div className="partener ">
    <div className="row ">
        <Partner/>
        <Partner/>
        <Partner/>
    </div>
</div >

<div className="slider-container partener-slick ">
        <Slider {...settings}>
          {images.map((imagePath, index) => (
            <div className="img-card" key={index}>
              <img src={imagePath} alt={`Image ${index}`} />
            </div>
          ))}
        </Slider>
      </div>
</div>

</>
)}
export default PartnerHome;