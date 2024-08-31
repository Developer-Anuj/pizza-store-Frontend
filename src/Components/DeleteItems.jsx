import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function DeleteItems() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/items');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/items/${id}`);
      const updatedData = data.filter((item) => item._id !== id);
      setData(updatedData);
      alert('Item deleted successfully!');
    } catch (error) {
      console.error('Error deleting item:', error);
      alert('Failed to delete item');
    }
  };

  const display = data.map((e) => (
    <tr key={e._id}>
      <td>{e._id}</td>
      <td>{e.name}</td>
      <td>{e.price}</td>
      <td>{e.description}</td>
      <td>
        <button className="btn btn-danger" onClick={() => handleDelete(e._id)}>Delete</button>
      </td>
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
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>{display}</tbody>
        </table>
      </div>
    </div>
  );
}

export default DeleteItems;
