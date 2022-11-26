import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/mini-images/logo.jpg";
const Footer = () => {
    return (
      <footer className="footer items-center p-10 mt-96 bg-neutral text-neutral-content flex flex-col lg:flex-row justify-evenly">
        <Link to="/">
          <div className="flex justify-end items-center">
            <img src={logo} className="lg:w-1/2" alt="" />
          </div>
        </Link>
        <p className="lg:mt-3  text-white">
          Copyright © 2022 - All right reserved to{" "}
          <Link to="/">
            <span className="font-extrabold">BecheFel </span>
          </Link>
        </p>
      </footer>
    );
};

export default Footer;