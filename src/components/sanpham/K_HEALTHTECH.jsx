import React from 'react';
import Contencard from '../item/contenCard'; // Make sure the path is correct
import Banner from '../child/banner.jsx'; // Make sure the path is correct
import "./hel.css"
import HomeCard from '../mutiAbout/HomeCard.jsx';
import ChildCadr from '../child/SanPham.jsx';
import a1 from "../../image/K_HEALTHTECH/Picture1.jpg";
import a2 from "../../image/K_HEALTHTECH/Picture2.png";
import a3 from "../../image/K_HEALTHTECH/Picture3.jpg";
import a4 from "../../image/K_HEALTHTECH/Picture4.jpg";
import a5 from "../../image/K_HEALTHTECH/Picture5.jpg";
import a6 from "../../image/K_HEALTHTECH/Picture6.jpg";

const K_HEALTHTECH = () => {
  const img = "https://fpt.com/-/media/project/fpt-corporation/fpt/common/fpt/our-business/technology/cong-nghe_home.jpg";

  const contents = [
    {
      name: "RIAVITA",
      link: "https://www.riavita.com/",
      title: "RIAVITA là công ty dược phẩm công nghệ cao chuyên về thảo dược được thành lập tại thủ đô Budapest...",
      img: a1,
      link: "https://www.riavita.com/vi/about-us"
    },
    {
      name: "VITAMIN C+D+QUERCETIN",
      title: "Quercetin: Là chất chống oxi hoá để hạ Gốc Tự Do - yếu tố gây lão hoá và bệnh tật cho cơ thể...",
      img: a2,
            link: "https://www.riavita.com/vi/about-us"
    },
    {
      name: "WOMEN UP",
      title: "WomenUp được bào chế từ các nguyên liệu thiên nhiên để cân bằng nội tisết tố nữ...",
      img: a3,
            link: "https://www.riavita.com/vi/about-us"
    },
    {
      name: "MEN UP",
      title: "Men Up là sản phẩm kế thừa 3 báu vật tự nhiên ở trên kết hợp thêm sâm đỏ hoàng kì vitamin và Kẽm...",
      img: a4,
            link: "https://www.riavita.com/vi/about-us"
    },
    {
      name: "DETOX",
      title: "Detox tổng hợp các thảo dược trên bổ sung thêm 8 loại vitamin tạo ra một công thức toàn diện...",
      img: a5,
            link: "https://www.riavita.com/vi/about-us"
    },
    {
      name: "DETOX WHITE PREMIUM",
      title: "Detox White Premium là tinh hoa của sự hòa quyện giữa thiên nhiên và khoa  học, là món quà của RIAVITA dành tặng riêng cho phái đẹp. Dựa trên công  thức thảo dược cao cấp, sản phẩm này thải độc một cách tự nhiên và hiệu  quả. Detox White Premium giúp thanh lọc từ gan, thận, phổi, ruột cho đến da  và mạch máu, đem đến cảm giác tươi mới và trẻ trung từ trong ra ngoài.",
      img: a6,
            link: "https://www.riavita.com/vi/about-us"
    }
  ];
console.log(contents);
  return (
    <>
      <Banner img={img} title="K_HEALTHTECH" />
      <div className="container">
      <div className="br bg-color-2">
        <div className=" bg-color-2">
          <div className="about-us">
            <div className="row">
              <div className="block-our-business-title py-4">
                <h2 className="font-weight-light">LĨNH VỰC HOẠT ĐỘNG</h2>
                <span className="block-our-business-desc-title">
                  1. Xây dựng, phát triển và thương mại hoá App dinh dưỡng cho bệnh nhân ung thư
                  <br />
                  2. Phát triển các nhãn hàng TPCN, TP dinh dưỡng
                  <br />
                  3. Xây dựng mô hình Phòng xét nghiệm công nghệ cao và phát triển chuỗi  
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

export default K_HEALTHTECH;
