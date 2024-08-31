import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function DisplayAllItems() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/items`);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const displaydata = data.map((e) => (
    <tr key={e._id}>
      <td>{e._id}</td>
      <td>{e.name}</td>
      <td>{e.price}</td>
      <td>{e.description}</td>
    </tr>
  ));

  return (
    <div className="container mt-4">
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Item Name</th>
              <th scope="col">Price</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            {displaydata}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DisplayAllItems;
