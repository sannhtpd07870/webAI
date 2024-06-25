// import React from "react";

import React, { useState, useEffect } from 'react';

import "./Mision.css"

import Contencard from './item/contenCard';
import Banner from "./child/banner";
import bannerImg from '../image/banner-tuyen-dung.jpg';
import TuyendungImg from "../image/tuyen-dung.jpg"
import {
  HelmetHead
  } from ".";

const  trachnhiem = [
    {
      "name": "Chính sách phát triển nhân viên",
      "title": `Công nghệ đòi hỏi sự thay đổi và sáng tạo không ngừng, 
      để làm được điều đó KCL GROUP đã xây đắp nên các thế hệ nhân viên không ngừng học hỏi và phấn đấu đưa KCL GROUP đến hết thành công này đến thành công khác`,
      "link": "http://example.com/project1",
      "img": TuyendungImg,
      "date": "21/8/2023"
  }]



function Profession () {
 return (
    <>
    <HelmetHead name="TUYỂN DỤNG" title="CƠ HỘI VIỆC LÀM" description="VIỆC LÀM"  img={TuyendungImg} />
    <Banner img = {bannerImg} title ="SỨ MỆNH"/>
    <div>
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="home-tab" data-bs-toggle="tab"
                     data-bs-target="#home-tab-pane" type="button" role="tab" 
                     aria-controls="home-tab-pane" aria-selected="true">CHÍNH SÁCH TUYỂN DỤNG</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" 
                    data-bs-target="#profile-tab-pane" type="button" role="tab" 
                    aria-controls="profile-tab-pane" aria-selected="false">QUY TRÌNH TRUYỂN DỤNG</button>
                </li>
                </ul>
                <div className="tab-content" id="myTabContent">
    
                <div className="tab-pane  active " id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex={0}>
                <div className="container">
                    {trachnhiem.map((item, index)=>( 
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
               
                </div>
    
                <div className="tab-pane fade " id="profile-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex={0}>
                <div className="container mission">
                    <div className="row justify-content-between m-x-0 p-x-0 field-description">
                  
                        </div>
                </div>
               
                </div>
                </div>
            </div>
    </>
 )
}
export default Profession ;
