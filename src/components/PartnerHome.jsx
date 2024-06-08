
import Partner from "./Partner/Partner";
// import Slick_client from "./Partner/slick_client";
import "./Partner.css"
import {
 Banner
} from "../components"




const PartnerHome =(r) =>{
  const a = "https://t3.ftcdn.net/jpg/05/14/95/12/360_F_514951224_2dxMLbIw5qNRdPGD003chpbVcxWtcp7K.jpg "
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

{/* <div>
      
        <Slick_client  />
    
    </div> */}
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
