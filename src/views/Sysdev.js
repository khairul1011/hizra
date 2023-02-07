
import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";


class Sysdev extends Component {
  render() {
    const settings = {
      dots: true,
      autoplay: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    return (
        <>
        <Navbar transparent />
        <div className="mt-24 py-10 border-t border-blueGray-200 text-center">
        <Slider {...settings}>
        <div><img src={require('assets/img/1.png')} alt="Credit to Joshua Earle on Unsplash"/></div>
        <div><img src={require("assets/img/Hizratech (1)s.png")} alt="Credit to Alisa Anton on Unsplash"/></div>
        <div><img src={require("assets/img/Hizratech (1)s.png")} alt="Credit to Igor Ovsyannykov on Unsplash"/></div>
        <div><img src={require("assets/img/Hizratech (1)s.png")} alt="Credit to Pierre Châtel-Innocenti on Unsplash"/></div>
        <div><img src={require("assets/img/Hizratech (1)s.png")} alt="Credit to Richard Nolan on Unsplash"/></div>
        <div><img src={require("assets/img/Hizratech (1)s.png")} alt="Credit to Cristina Gottardi on Unsplash"/></div>
        </Slider>
                </div>
      
        </>
        
    );
  }
}

export default Sysdev;
