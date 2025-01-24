import React, { useState } from 'react';

const AddItemForm = ({ inventory, setInventory }) => {
  const [formData, setFormData] = useState({ name: '', category: '', quantity: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = { id: Date.now(), ...formData, quantity: Number(formData.quantity) };
    setInventory([...inventory, newItem]);
    setFormData({ name: '', category: '', quantity: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 p-4 max-w-fit m-auto bg-white  shadow-md rounded-md">
      <div className="flex flex-col w-[350px] m-auto gap-2">
        <h1 className='text-center text-2xl font-bold  mb-3'>Add Items</h1>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Item Name"
          required
          className="p-2 border rounded"
        />
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          placeholder="Category"
          required
          className="p-2 border rounded"
        />
        <input
          type="number"
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
          placeholder="Quantity"
          required
          className="p-2 border rounded"
        />
      <button
        type="submit"
        className="mt-4 cursor-pointer dark:bg-black bg-gray-700 text-white py-2 px-4 rounded hover:bg-gray-900"
      >
        Add Item
      </button>
      </div>
    </form>
  );
};

export default AddItemForm;
