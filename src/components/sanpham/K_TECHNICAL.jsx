import React from "react";
import "./Solution.css";
import Banner from "../child/banner.jsx"
import { Link } from "react-router-dom";
import a3 from "../../image/25.jpg"
import Contencard from '../item/contenCard';
import {
  HelmetHead
} from "../../components";
import picture1 from "../../image/K_TECHNICAL/Picture1.png"
import picture2 from "../../image/K_TECHNICAL/Picture2.png"
import picture3 from "../../image/K_TECHNICAL/Picture3.png"

const contents = [
  {
    "name": "Hợp đồng mua bán và triển khai lắp đặt thiết bị Công nghệ thông tin",
    "title": "FPT KIOSK – F.IDK01 series là dòng sản phẩm thiết kế chuyên dùng dành cho các đối tượng khách hàng là TT Hành chính công, ngân hàng, bệnh viện, hải quam, y tế và các điểm công cộng khác. FPT KIOSK cũng có thể sử dụng làm thiết bị tra cứu thông tin, in cấp số thứ tự, bán vé tự động và các dịch vụ khác. FPT KIOSK có thể được cấu hình với nhiều chức năng như máy in phiếu, đầu đọc QRcode, đọc và xác thực định danh qua thẻ căn cước công dân, camera nhận diện khuôn mặt và các thiết bị khác.",
    "link": "http://example.com/project1",
    "img": picture1,
    "date": "21/8/2023"
},
{
    "name": "Thi công bả Matit sơn trong và ngoài nhà - Bệnh viện Phụ sản- Nhi Đà Nẵng",
    "title": "1512/2003/HĐKT/BDDN-TCS",
    "link": "http://example.com/project2",
    "img": picture2,
    "date": "15/12/2003"
},
{
    "name": "Thi công chống thấm trong và ngoài nhà - Bệnh viện Phụ sản- Nhi Đà Nẵng",
    "title": "1512/2003/HĐKT/BĐĐN-TCS",
    "link": "http://example.com/project3",
    "img": picture3,  
    "date": "15/12/2003"
}
]
function K_TECHNICAL() {
  return (
    <>
     <HelmetHead name="K_TECHNICAL" title="Giới Thiệu K_TECHNICAL" description="K_TECHNICAL"  img={a3} />
      <Banner img={a3} title="K_TECHNICAL" />
      <div className="container">
        <div className="br bg-color-2">
          <div className=" bg-color-2">
            <div className="about-us">
              <div className="row">
                <div className="block-our-business-title py-4">
                  <h2 className="font-weight-light">TẦM NHÌN</h2>
                  <span className="block-our-business-desc-title">
                    TẦM NHÌN
                    Khát vọng trở thành thương hiệu mạnh, phát triển bền vững trong lĩnh vực xây dựng, công nghệ thông tin, các giải pháp thiết bị thông minh trên thị trường  Việt Nam và khu vực
                    <br />
                    SỨ MỆNH
                    Kết nối công nghệ, giải pháp kỹ thuật, đem đến tiện ích cho người dùng
                    <br /> TRIẾT LÝ KINH DOANH
                    Lấy chữ Tín, sự hài lòng của Khách hàng làm thang đo để phát triển, khẳng định vị thế của chúng tôi.

                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" k-hel py-5">
        {contents.map((item, index) => (
          <Contencard
            key={index}
            index={index}
            name={item.name}
            title={item.title}
            link={item.link}
            img={item.img}
          />
        ))}
      </div>


    </>
  );
}

export default K_TECHNICAL;
