import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthProvider';
import useRole from './../../hooks/useRole';
import useTitle from './../../hooks/useTitle';
import BookPhone from './../BookPhone/BookPhone';
import CategoryProduct from './../CategoryProducts/CategoryProduct';

const AllProducts = () => {
  useTitle('All Products')
  const {user} = useContext(AuthContext)
  const { data: phones = [] } = useQuery({
    queryKey: ["phone"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/products/");
      const data = await res.json();
      return data;
    },
  });
    const [modalValues, setModalValues] = useState("");

         const { role } = useRole(user?.email);
         let userRole;
         if (!role && user) {
           userRole = "user";
         } else {
           userRole = role;
         }
         const setModalValue = (id) => {
           if (user) {
             if (userRole !== "user") {
               toast.error("This account not for booking");
               setModalValues("");
             } else {
               const value = phones.find((phone) => phone._id === id);
               setModalValues(value);
             }
           } else {
             toast.error("Register/Login to book");
           }
         };
  return (
    <div>
      <h2 className="text-4xl font-extrabold text-center">ALL PRODUCTS</h2>
      <div className="mt-5 grid gap-4 p-4 grid-cols-1 lg:grid-cols-2">
        {phones.map((mobile) => (
          <CategoryProduct
            key={mobile._id}
            setModalValue={setModalValue}
            mobile={mobile}
          ></CategoryProduct>
        ))}
      </div>
      {modalValues && (
        <BookPhone
          setModalValues={setModalValues}
          modalValues={modalValues}
        ></BookPhone>
      )}
    </div>
  );
};

export default AllProducts;