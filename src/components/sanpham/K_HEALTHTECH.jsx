import React from "react";
import { Link } from "react-router-dom";
import "./hel.css"

import Chill_SanPham from "../child/SanPham.jsx";

import a2 from "../../image/project-1.jpg"
import a3 from "../../image/25.jpg"
import ChungNhan from "../../image/ChungNhan.png"
import Banner from "../child/banner.jsx"
import Intro from "../child/intro.jsx"
const K_HEALTHTECH =()=> {
  const img = "https://fpt.com/-/media/project/fpt-corporation/fpt/common/fpt/our-business/technology/cong-nghe_home.jpg";
  const containers = [
    "Container 1",
    "Container 2",
    "Container 3",
    "Container 4",
    "Container 5",
  ];
  return (

    <div>
    
      <Banner img={a3} title="K_HEALTHTECH" />

      <div className="br  bg-color-2">
        <div  className="container bg-color-2">
          <div className="about-us">
            <div className="row">
              <div className="block-our-business-title">
                <h1 className="font-weight-light">K_HEALTHTECH</h1>
                <span className="block-our-business-desc-title ">
                Xây dựng
                Hoạt động tư vấn thiết kế.
                Hoạt động tư vấn quản lý xây dựng.
                Thi công công trình.
                <br />
                2. Công nghệ thông tin
                Tư vấn CNTT
                Hạ tầng mạng
                Thiết bị CNTT
                <br />
                3. Giải pháp thiết bị thông minh
                Màn hình tích hợp thông minh UNV
                Giải pháp chiếu sáng thông minh, smart home

                </span>
              </div>
            </div>
          </div>
        </div>
      
        <div className= "container" >
          <div className="row mb-4">
            <Intro img={img} title="TẦM NHÌN" subtitle=" 
            Khát vọng trở thành thương hiệu mạnh, phát triển bền vững trong lĩnh vực xây dựng, công nghệ thông tin, các giải pháp thiết bị thông minh trên thị trường  Việt Nam và khu vực"
              link="/blog/this-is-a-post-title"
            />
            <Intro img={img} title="SỨ MỆNH" subtitle="Khát vọng trở thành thương hiệu mạnh, phát triển bền vững trong lĩnh vực xây dựng, công nghệ thông tin, các giải pháp thiết bị thông minh trên thị trường  Việt Nam và khu vực."
              link="/blog/this-is-a-post-title"
            ></Intro>
          </div>
          <div className="row mb-4">
            <Intro img={img} title="TRIẾT LÝ KINH DOANH" subtitle="    Lấy chữ Tín, sự hài lòng của Khách hàng làm thang đo để phát triển, khẳng định vị thế của chúng tôi.
."
              link="/blog/this-is-a-post-title"
            />
            <Intro img={ChungNhan} title="CHỨNG NHẬN" subtitle=""
              link="/blog/this-is-a-post-title"
            ></Intro>
          </div>
        </div>
      </div>

      <div className="br bg-color-1">

            </div>
      </div>
  );
}

export default K_HEALTHTECH;
