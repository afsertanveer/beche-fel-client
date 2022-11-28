import { useQuery } from "@tanstack/react-query";
import React from "react";
import useTitle from './../../../../hooks/useTitle';

const AllBuyers = () => {
  useTitle("All Buyers");

  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/users?role=user`);
      const data = await res.json();
      return data;
    },
  });

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
              <th>Photo</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((u, _idx) => (
                <tr key={_idx}>
                  <th>{_idx + 1}</th>
                  <th>{u.displayName}</th>
                  <td>
                    <div className="avatar">
                      <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={u.photoURL} alt="profile" />
                      </div>
                    </div>
                  </td>
                  <td>{u.email}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllBuyers;