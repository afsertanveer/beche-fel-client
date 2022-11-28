import React from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import useTitle from './../../../../hooks/useTitle';

const MyProduct = ({mobile}) => {
        useTitle('My Products');
        const {
          photoURL,
          _id,
          brand,
          model,
          conditon,
          askingPrice,
          purchasedPrice,
          purchasedYear,
          location,
          phone,
          isAdvertised
        } = mobile;
        const navigate = useNavigate();
      const handleAdvertise = id =>{
        fetch(`http://localhost:5000/product/${id}`,{
          method:'PUT',
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify({})
        })
        .then(res=>res.json())
        .then(data=>{
          if(data.acknowledged){
            toast.success('Successfully advertised to the home page')
            navigate('/');
          }
        })

      }
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
              <div className="text-xl text-blue-400">
                <p>Company: {brand}</p>
                <p>Asking Price: {askingPrice}</p>
                <p>Purchased Price: {purchasedPrice}</p>
                <p>Buying Date:{purchasedYear}</p>
                <p>Location: {location}</p>
                <p>Phone: {phone}</p>
                <p>Condition: {conditon}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card-actions justify-end my-4">
          {!isAdvertised && (
            <label
              onClick={() => handleAdvertise(_id)}
              className="btn w-28 btn-outline "
            >
              Advertise
            </label>
          )}

          <button className="btn w-28 rounded-lg btn-error text-white">
            Delete
          </button>
        </div>
      </div>
    );
};

export default MyProduct;