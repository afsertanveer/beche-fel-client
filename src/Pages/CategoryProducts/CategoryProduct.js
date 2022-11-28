import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthProvider';
import useRole from '../../hooks/useRole';
const CategoryProduct = ({ mobile }) => {
    const {user} = useContext(AuthContext)
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
  } = mobile;

  const {role} = useRole(user?.email);
  let userRole;
  if(!role){
    userRole='user'
  }
  else{
    userRole = role;
  }
  const handeBookButton = id =>{
        if(userRole!=='user'){
           return toast.error('This account cannot book item');
        }
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
      <div className="card-actions justify-center my-4">
        <button onClick={()=>handeBookButton(_id)} className="btn w-28 btn-success ">Book Now</button>
      </div>
    </div>
  );
};

export default CategoryProduct;