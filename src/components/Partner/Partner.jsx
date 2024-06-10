import "./Par.css";
import React from "react";

 const Partner = (partner) => {
    return (
        <>
                <div className="strategic-item-wrap" >
                    <div className="strategic-item-content">
                        <p className="fpt-scroll">“Phần mềm quản lý phòng khám K.Clinic là phần mềm tối ưu nhất tôi sử dụng cho phòng khám của mình từ trước đây nay. Đội ngũ phát triển phần mềm am hiểu sự phức tạp và những bất cập trong quy trình khám bệnh. Giúp phòng khám của tôi tiết kiệm được thời gian, nhân lực, đẩy mạnh khâu tổ chức quản lý cũng như chăm sóc khách hàng tối ưu hơn rất nhiều.”
                        </p>
                        <div >
                            <img className="lazyload"
                        src="/-/media/project/fpt-corporation/fpt/about-us/partners-and-customers/slider/stephen-foley/rheem-mobile.gif" />
                        </div>
                        <hr />
                        <div className="person-title">B.s Bình
                        </div>
                        <div className="person-content" >Phòng Khám Tư nhân<br />
                            </div>
                    </div>
                </div>
        </>
    );
}
export default Partner;
