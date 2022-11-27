import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import CustomerFeedBack from '../CustomerFeedBack/CustomerFeedBack';
import HomeAdvertise from '../HomeAdvertise/HomeAdvertise';
import Slider from '../Slider/Slider';
import useTitle from './../../../hooks/useTitle';

const Home = () => {
        const {user} = useContext(AuthContext);
        useTitle("Home");
        console.log(user);
    return (
        <div>
            <Banner></Banner>
            <Slider></Slider>
            <HomeAdvertise></HomeAdvertise>
            <Categories></Categories>
            <CustomerFeedBack></CustomerFeedBack>
        </div>
    );
};

export default Home;