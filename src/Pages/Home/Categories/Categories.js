import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
    return (
      <div className="my-10">
        <h1 className="text-4xl tex-center text-secondary text-center font-extrabold">
          Categories
        </h1>
        <div className="my-8 flex justify-center items-center">
          <div className="grid gap-5 grid-cols-3">
            <Link to="">
              <button 
              className="p-5 w-full btn btn-lg bg-secondary text-white font-semibold mr-3 lg:w-96 lg:h-24 lg:text-3xl  ">
                IPhone
              </button>
            </Link>
            <Link to="">
              <button 
              className="p-5 w-full btn btn-lg bg-secondary text-white font-semibold mr-3 lg:w-96 lg:h-24 lg:text-3xl ">
                OnePlus
              </button>
            </Link>
            <Link to="">
              <button 
              className="p-5 w-full btn btn-lg bg-secondary text-white font-semibold mr-3 lg:w-96 lg:h-24 lg:text-3xl ">
                Redmi
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default Categories;