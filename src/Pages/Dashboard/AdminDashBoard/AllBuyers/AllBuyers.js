import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useTitle from './../../../../hooks/useTitle';

const AllBuyers = () => {
    useTitle('All Buyers');
    const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
        const res = await fetch(`http://localhost:5000/users?role=seller`);
        const data = await res.json();
        return data;
    },
    });
    const handleVerify = id =>{
        
    }
    return (
      <div>
        <h2 className="text-3xl text-center text-secondary font-extrabold">
          All Buyers
        </h2>
        <div className="overflow-x-auto">
          <table className="table w-full mt-6">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>
                  <span className="ml-4">Verify</span>
                </th>
                <th>
                  <span className="ml-4">Delete</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {users &&
                users.map((u, _idx) => (
                  <tr key={_idx}>
                    <th>{_idx + 1}</th>
                    <th>{u.displayName}</th>
                    <td>{u.email}</td>
                    <td>
                      {u.isVerified ? (
                        <p className="text-success">Verified</p>
                      ) : (
                        <button
                        onClick={()=>handleVerify(u._id)} className="btn btn-outline">Verify</button>
                      )}
                    </td>
                    <td>
                      <button className="btn btn-error">Delete</button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default AllBuyers;