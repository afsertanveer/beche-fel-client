import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
    return (
      <div className="my-10">
        <h1 className="text-4xl tex-center text-secondary text-center font-extrabold">
          Categories
        </h1>
        <div className="my-8 flex justify-center items-center">
          <div className="grid gap-5 grid-cols-1 lg:grid-cols-3">
            <Link to="">
              <button className="p-5 w-full btn btn-lg bg-secondary text-white font-semibold mr-3 lg:w-28 ">
                IPhone
              </button>
            </Link>
            <Link to="">
              <button className="p-5 w-full btn btn-lg bg-secondary text-white font-semibold mr-3 lg:w-28">
                OnePlus
              </button>
            </Link>
            <Link to="">
              <button className="p-5 w-full btn btn-lg bg-secondary text-white font-semibold mr-3 lg:w-28">
                Redmi
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default Categories;