import React from "react";
import { Helmet } from "react-helmet";
import logo from "../KCL-logo.svg";
const HelmetHead=(Head)=> {
  return (
    <Helmet>
      <meta charSet="UTF-8" />
      <title>{Head.name}</title>
      <link rel="icon" type="image/svg+xml" href={logo} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="keywords" content="Lịch Sử,SOLUTION, HEALTHTECH, TECHNICAL" />
      <link rel="canonical" href="https://webai-036j.onrender.com/" />
      <meta name="google-site-verification" content="ABvBdOeCmDzSk-18vs1Tcn9B1Fzfss6mSkKFqdSJ6Dg" />
      <meta name="description" content="KCL Group là nhà phát triển phần mềm và chuyển đổi số" />
    
      <meta name="description" content="Learn more about us on this page" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={Head.tittle} />
        <meta name="twitter:description" content={Head.description} />
        <meta name="twitter:image" content={Head.img} />

    </Helmet>
  );
}

export default HelmetHead;
