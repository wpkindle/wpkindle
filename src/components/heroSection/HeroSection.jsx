import React, { useContext } from "react";
import Lottie from "react-lottie";
import animationData from "../animations/WelcomeAnimation.json";
import { PiHandWaving } from "react-icons/pi";
import { Link } from "react-router-dom";
import myContext from "../../context/data/myContext";
import { TbArrowBadgeRightFilled } from "react-icons/tb";
import { FaPersonWalkingArrowRight } from "react-icons/fa6";
import { HiPhoneArrowUpRight } from "react-icons/hi2";

const HeroSection = () => {
  const context = useContext(myContext);
  const { mode } = context;
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };

  return (
    <div className="container mx-auto px-4 flex items-center gap-40">
      <div className="hero-text w-2/3">
        <h1
          className="font-bold text-3xl flex items-center mb-2 gap-1"
          style={{ color: mode === "dark" ? "white" : "" }}
        >
          Welcome To WP Kindle! <PiHandWaving />
        </h1>
        <p
          className="text-lg mb-6"
          style={{ color: mode === "dark" ? "white" : "" }}
        >
          We believe that every idea deserves a powerful online presence. Our
          mission is to take your ideas and transform them into visually
          appealing, super-fast, and seo-optimized websites that captivate your
          audience and drive your success. Whether you are a startup, a small
          business, or an individual with a vision, WP Kindle is here to make
          your digital dreams a reality.
        </p>
        <Link
          to={"/contact"}
          className="gradient-button py-3 px-4 rounded-md font-semibold text-white flex items-center gap-2 text-lg w-max"
          style={{ color: mode === "dark" ? "white" : "" }}
        >
          Get Started Today <HiPhoneArrowUpRight />
        </Link>
      </div>
      <div className="hero-animation pointer-events-none">
        <Lottie options={defaultOptions} height={500} width={500} />
      </div>
    </div>
  );
};

export default HeroSection;
