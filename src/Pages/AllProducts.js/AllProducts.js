import { useQuery } from '@tanstack/react-query';
import React from 'react';
import CategoryProduct from './../CategoryProducts/CategoryProduct';

const AllProducts = () => {
    const { data: phones = [] } = useQuery({
      queryKey: ["phone"],
      queryFn: async () => {
        const res = await fetch("http://localhost:5000/categories");
        const data = await res.json();
        return data;
      },
    });
    return (
      <div>
        <h2 className="text-4xl font-extrabold text-center">ALL PRODUCTS</h2>
        <div className="mt-5 grid gap-4 p-4 grid-cols-1 lg:grid-cols-2">
          {phones.map((mobile) => (
            <CategoryProduct key={mobile._id} mobile={mobile}></CategoryProduct>
          ))}
        </div>
      </div>
    );
};

export default AllProducts;