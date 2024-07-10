import React from "react";

const ScrollCarousel = () => {
  return (
    <div className="w-full overflow-hidden mb-28">
      <div className="flex left-0 animate-marquee-infinite">
        <div className="flex w-72 justify-around gap-10">
          <img src={"/assets/images/wordpress.png"} alt="" />
          <img src={"/assets/images/google.png"} alt="" />
          <img src={"/assets/images/adsense.png"} alt="" />
          <img src={"/assets/images/analytics.png"} alt="" />
          <img src={"/assets/images/google-search.png"} alt="" />
          <img src={"/assets/images/gmb.png"} alt="" />
          <img src={"/assets/images/wordpress.png"} alt="" />
          <img src={"/assets/images/google.png"} alt="" />
          <img src={"/assets/images/adsense.png"} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ScrollCarousel;
