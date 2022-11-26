import React from 'react';
import bannerImg from '../../../assets/banner/banner-img.jpg';
const Banner = () => {
    return (
      <div className="hero min-h-screen bg-orange-600 mt-10">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={bannerImg}
            alt=""
            className="lg:max-w-sm rounded-lg shadow-2xl sm:w-1/4"
          />
          <div className='lg:p-12'>
            <h1 className="text-3xl  mt-12 text-white">
              Welcome to <br />
              <span className="text-5xl font-extrabold lg:text-7xl text-white">
                BecheFel
              </span>
            </h1>
            <p className="py-6 text-white">
              This website is based on mobile phone resale service. Here user
              can buy second hand phone on a reasonable pricing and also user
              can post phone to sell them on this market.
            </p>
          </div>
        </div>
      </div>
    );
};

export default Banner;

