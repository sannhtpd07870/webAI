import Intro from "../child/intro";
import K_SOLUTIONimg from "../../image/K-solutionIMG.png";
import K_HEALTHTECHimg from "../../image/K_HEALTHTECHimg.jpg";
import K_TECHNICALimg from "../../image/K_TECHNICALimg.jpg";
const intro =[

]

 const IntroAbout = () => {

  return(
    
          <>
            <div className=" my-5">
            <div className="br  bg-color-2">
        <div  className="container bg-color-2">
          <div className="about-us">
            <div className="row">
              <div className="block-our-business-title">
                <h2 className="font-weight-light">Hệ Sinh Thái KCL</h2>
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
              <div className="bg-1">
                     <div className="container mt-5">
                      <div className="row mb-4">
                      <Intro img={K_HEALTHTECHimg} title="K_HEALTHTECH" subtitle="1. Xây dựng, phát triển và thương mại hoá App dinh dưỡng cho bệnh nhân ung thư
                        2. Phát triển các nhãn hàng TPCN, TP dinh dưỡng
                        3. Xây dựng mô hình Phòng xét nghiệm công nghệ cao và phát triển chuỗi  "
                      link="SanPham/healthtech"
                      />  
                       <Intro img={K_SOLUTIONimg} title="K_SOLUTION"  subtitle="Chúng tôi không ngừng phát triển, triển khai và tích hợp ngày càng nhiều các dịch vụ, phần mềm tích hợp cho cộng đồng và nhà đồng hành."
                       link="/SanPham/solution"
                       ></Intro>
                      </div>
                      <div className="row mb-4">
                      <Intro img={K_TECHNICALimg} title="K_TECHNICAL" subtitle="K_TECHNICAL cung cấp các tiện ích, đầu tư xây dựng và phát triển hệ thống cớ sở hạ tầng cao cấp"
              link="/SanPham/technical"
              />
                       {/* <Intro img={image} title="Viễn thông"  subtitle="Chúng tôi không ngừng đầu tư, triển khai và tích hợp ngày càng nhiều các dịch vụ giá trị gia tăng trên công nghệ đường truyền Internet và kiến tạo hệ sinh thái truyền thông số."
                       link="/blog/this-is-a-post-title"
                       ></Intro> */}
              </div>
                    </div>
                  </div>
            </div>
            </div>
          </>
  )
  }
  
  export default IntroAbout;