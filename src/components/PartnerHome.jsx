
import Partner from "./Partner/Partner";
import Slick_client from "./Partner/slick_client";
import "./Partner.css"
import {
 Banner
} from "../components"

const importAll = (r) => {
  return r.keys().map(r);
};

const images = importAll(require.context('../image/client-logo', false, /\.(png|jpe?g|svg)$/));

const PartnerHome =(r) =>{
     const a = 'https://www.w3schools.com/howto/img_nature_wide.jpg';
     const imagePaths = images.map(image => image.default);
return( 
<>
<Banner img={a}  title="ĐỐI TÁC-KHÁCH HÀNG    " />
<div className="container">

<div className="partener ">
    <div className="row ">
        <Partner/>
        <Partner />
        <Partner />
    </div>
</div >

<div>
        <Slick_client images={imagePaths}  />
    
    </div>
</div>

</>
)}
export default PartnerHome;



// import React from 'react';
// import Slick_client from "./Partner/slick_client";

// const importAll = (r) => {
//   return r.keys().map(r);
// };

// const images = importAll(require.context('../image/client-logo', false, /\.(png|jpe?g|svg)$/));

// const PartnerHome = () => {
//   const imagePaths = images.map(image => image.default);
  
//   return (
//     <div>
//       <Slick_client images={imagePaths} />
//     </div>
//   );
// };

// export default PartnerHome;
