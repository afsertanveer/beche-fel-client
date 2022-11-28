import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../Context/AuthProvider';

const MyOrders = () => {
    const {user} = useContext(AuthContext);
    const email = user?.email;
     const { data: booked = [] } = useQuery({
       queryKey: ["booked"],
       queryFn: async () => {
         const res = await fetch(`http://localhost:5000/bookedPhone?email=${email}`);
         const data = await res.json();
         return data;
       },
     });
    return (
      <div>
        <h3 className="text-3xl">My Appointments</h3>
        <div className="overflow-x-auto">
          <table className="table w-full mt-6">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Price</th>
                <th>Date</th>
                <th>Payment</th>
              </tr>
            </thead>
            <tbody>
              {booked &&
                booked.map((booking, _idx) => (
                  <tr key={_idx}>
                    <th>{_idx + 1}</th>
                    <th>{booking.model}</th>
                    <td>{booking.askingPrice}</td>
                    <td>{booking.curDate}</td>
                    <td>
                      {booking.askingPrice && !booking.paid && (
                        <Link to={`/dashboard/payment/${booking._id}`}>
                          <button className="btn btn-primary btn-sm">
                            Pay
                          </button>
                        </Link>
                      )}
                      {booking.askingPrice && booking.paid && (
                        <span className="text-success">Paid</span>
                      )}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default MyOrders;