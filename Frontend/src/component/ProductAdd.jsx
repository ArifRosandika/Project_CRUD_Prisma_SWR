import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ProductAdd = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [message, setMessage] = useState('');
    const Navigate = useNavigate();

    const handleProductAdd = async (e) => {
        e.preventDefault();

        try {
            await axios.post('http://localhost:5000/product', {
                name: name,
                price: parseInt(price)
            });
            setMessage('Product added successfully');
            Navigate('/');
        } catch (error) {
            setMessage(error.response.data.message);
        };
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-800">
            <div className="bg-white/90 rounded-lg transition duration-300 ease-in-out transform hover:scale-120">
                <div className="flex flex-col mb-4">
                    <form onSubmit={handleProductAdd} className="flex flex-col mb-4 p-4">
                        {message && <p className="text-red-500 font-bold">{message}</p>}
                        <div className="mb-5">
                            <label className="block text-gray-700 text-sm font-bold mb-2"> Product Name
                                <input type="text"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-gray-500 focus:shadow-gray-950"
                                    placeholder="Product Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)} />
                            </label>
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold text-sm mb-2"> Price
                                <input type="text"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-gray-500 focus:shadow-gray-950"
                                    placeholder="Price"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)} />
                            </label>
                        </div>

                        <div className="flex items-center justify-between">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"> Save </button>
                            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button" onClick={() => Navigate('/')}> Cancel </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ProductAdd;
