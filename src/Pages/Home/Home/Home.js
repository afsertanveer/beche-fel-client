import React from 'react';
import Banner from '../Banner/Banner';
import Slider from '../Slider/Slider';
import useTitle from './../../../hooks/useTitle';

const Home = () => {
    
        useTitle("Home");
    return (
        <div>
            <Banner></Banner>
            <Slider></Slider>
        </div>
    );
};

export default Home;