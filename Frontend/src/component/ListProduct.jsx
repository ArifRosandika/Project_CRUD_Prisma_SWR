// import React from 'react'
// import { Link } from 'react-router-dom'
// import axios from 'axios'
// import useSWR, { useSWRConfig } from 'swr'
// import { useNavigate } from 'react-router-dom'

// const ListProduct = () => {
//     const Navigate = useNavigate();
//     const { mutate } = useSWRConfig();
//     const fetcher = async () => {
//         const response = await axios.get('http://localhost:5000/product')
//         return response.data;
//     };

//     const {data, error} = useSWR('http://localhost:5000/product', fetcher);

//     if (error) return <div>Loading failed</div>
//     if (!data) return <div>Loading...</div>

//     const handleEditButton = (id) => {
//         Navigate(`/edit/${id}`);
//     };

//     const handleDelete = async (id) => {
//         await axios.delete(`http://localhost:5000/product/${id}`);
//         mutate('http://localhost:5000/product');
//     };

//   return (
//     <div className='flex justify-center items-center h-min-screen'>
//         <div className='bg-white/100 w-3/4 rounded-lg backdrop-blur-lg shadow-2xl'>
//             <Link className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' to="/add">Create Product</Link>
//             <div className='w-full'>
//                 <table className='relative rounded-lg ' >
//                     <thead>
//                         <tr>
//                             <th className='px-1 py-1.5 text-center'>No</th>
//                             <th className='px-1 py-1.5 text-center'>Product</th>
//                             <th className='px-1 py-1.5 text-center'>Price</th>
//                             <th className='px-1 py-1.5 text-center'>Action</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {data.map((product, index) => (
//                             <tr key={product.id}>
//                                 <td className='px-1 py-1.5 text-center'>{index + 1}</td>
//                                 <td className='px-1 py-1.5 text-center'>{product.name}</td>
//                                 <td className='px-1 py-1.5 text-center'>{product.price}</td>
//                                 <td className='px-1 py-1.5 text-center'>
//                                     <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
//                                     onClick={() => handleEditButton(product.id)}
//                                     >Edit</button>
//                                     <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
//                                     onClick={() => handleDelete(product.id)}
//                                     >Delete</button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default ListProduct

import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import useSWR, { useSWRConfig } from "swr";
import { useNavigate } from "react-router-dom";

const ListProduct = () => {
  const Navigate = useNavigate();
  const { mutate } = useSWRConfig();
  const fetcher = async () => {
    const response = await axios.get("http://localhost:5000/product");
    return response.data;
  };

  const { data, error } = useSWR("http://localhost:5000/product", fetcher);

  if (error) return <div>Loading failed</div>;
  if (!data) return <div>Loading...</div>;

  const handleEditButton = (id) => {
    Navigate(`/edit/${id}`);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/product/${id}`);
    mutate("http://localhost:5000/product");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-600">
      <div className="container mx-auto">
      <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" to="/add">
        + Add Product </Link>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-md p-4 flex flex-col justify-between 
              transition duration-300 ease-in-out transform hover:scale-115 hover:shadow-gray-600">
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-gray-600">Price: ${product.price}</p>

              <div className="flex gap-2 mt-4">
                <button
                  onClick={() => handleEditButton(product.id)}
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(product.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListProduct;
