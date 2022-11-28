import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryProduct from './CategoryProduct';

const CategoryProducts = () => {
    const phones = useLoaderData();
    console.log(phones);
    return (
      <div>
        <div className="mt-5 grid gap-4 p-4 grid-cols-1  lg:grid-cols-2">
          {phones.map((mobile) => (
            <CategoryProduct key={mobile._id} mobile={mobile}></CategoryProduct>
          ))}
        </div>
      </div>
    );
};

export default CategoryProducts;