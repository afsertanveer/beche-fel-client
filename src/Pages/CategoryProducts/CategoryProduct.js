import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaUserCheck } from "react-icons/fa";
const CategoryProduct = ({ mobile, setModalValue }) => {
  const {
    _id,
    photoURL,
    brand,
    model,
    conditon,
    askingPrice,
    purchasedPrice,
    purchasedYear,
    location,
    phone,
    booked,
    sellerName,
    addedBy,
  } = mobile;
  
   const { data: users = [] } = useQuery({
     queryKey: ["users"],
     queryFn: async () => {
       const res = await fetch(`http://localhost:5000/users?email=${addedBy}`);
       const data = await res.json();
       return data;
     },
   });
   const verifications = users.find(u=>u.isVerified);
  return (
    <div className="card px-2 bg-base-100 shadow-xl">
      <div className="flex flex-col justify-center items-center lg:flex-row md:flex-row">
        <figure className="ml-4">
          <img src={photoURL} className="w-64 h-96" alt="Shoes" />
        </figure>
        <div className="card-body ">
          <h2 className="card-title text-3xl font-extrabold text-primary">
            {model}
          </h2>
          <div className="flex justify-between items-center">
            <div className="text-xl text-gray-700">
              <p>Company: {brand}</p>
              <p>Asking Price: {askingPrice}</p>
              <p>Purchased Price: {purchasedPrice}</p>
              <p>Buying Date:{purchasedYear}</p>
              <p>Location: {location}</p>
              <p className="flex">
                Seller Name: {sellerName}{" "}
                {verifications && (
                  <FaUserCheck className="text-blue-600 ml-1 "></FaUserCheck>
                )}
              </p>
              <p>Phone: {phone}</p>
              <p>Condition: {conditon}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="card-actions justify-center my-4">
        <label
          onClick={() => setModalValue(_id, booked)}
          htmlFor="booking-modal"
          className="btn w-28 btn-success "
        >
          Book Now
        </label>
      </div>
    </div>
  );
};

export default CategoryProduct;