import React from "react";
import "./Solution.css";
import Banner from "../child/banner.jsx"
import { Link } from "react-router-dom";
import a3 from "../../image/25.jpg"
import Contencard from '../item/contenCard';
import {
  HelmetHead
} from "../../components";
import picture1 from "../../image/K_SOLUTION/Picture1.png"
import picture2 from "../../image/K_SOLUTION/Picture2.png"
import picture3 from "../../image/K_SOLUTION/Picture3.png"
import picture4 from "../../image/K_SOLUTION/Picture4.png"
import picture5 from "../../image/K_SOLUTION/Picture5.png"
const contents = [
  {
      "name": "Dự án Xây dựng và Triển khai phần mềm Y tế",
      "title": "Phần mềm Quản lý Bệnh viện thông minh",
      "link": "http://example.com/project1",
      "img": picture1
  },
  {
      "name": "Phần mềm Quản lý Phòng khám K.Clinic",
      "title": "Tư vấn Giải pháp CNTT trong Y tế",
      "link": "http://example.com/project2",
      "img": picture2
  },
  {
      "name": "Triển khai phần mềm Bệnh viện thông minh",
      "title": "Bệnh Viện Y Học Cổ Truyền Đà Nẵng",
      "link": "http://example.com/project3",
      "img": picture3
  },
  {
      "name": "Xây dựng phần mềm HIS quản lý điều hành và tiêm chủng",
      "title": "Trung tâm kiểm soát Bệnh tật TP. Đà Nẵng",
      "link": "http://example.com/project4",
      "img": picture4
  },
  {
      "name": "CLOUD BACKUP DATA",
      "title": ": Cung cấp các giải pháp sao lưu dữ liệu an toàn và hiệu quả cho các hệ thống y tế ",
      "link": "http://example.com/project5",
      "img": picture5
  }
]

function K_SOLUTION() {
  return (
    <>
     <HelmetHead name="K_SOLUTION" title="Giới Thiệu K_SOLUTION" description="K_HEALTHTECH"  img={a3} />
   <Banner img={a3} title="K_SOLUTION" />
      <div className="container">
      <div className="br bg-color-2">
        <div className=" bg-color-2">
          <div className="about-us">
            <div className="row">
              <div className="block-our-business-title py-4">
                <h2 className="font-weight-light">LĨNH VỰC HOẠT ĐỘNG</h2>
                <span className="block-our-business-desc-title">
                  1. Xây dựng
                    Hoạt động tư vấn thiết kế
                    Hoạt động tư vấn quản lý xây dựng
                    Thi công công trình

                  <br />
                  2. Sản phẩm Phần mềm Quản lý Phòng khám K.Clinic
                  <br />
                  3. Tư vấn Giải pháp CNTT trong Y tế
                  Cung cấp Giải pháp sao lưu dữ liệu Cloud Backup Data
                  Cung cấp dịch vụ bảo trì và xử lý sự cố Maintenance & Troubleshooting
                  Tư vấn các Giải pháp CNTT mới (ID reader, AI cam, EMR,…)
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

export default K_SOLUTION;
