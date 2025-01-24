import React, { useState } from 'react';
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { FaSort } from "react-icons/fa";
import EditItemForm from './EditItemForm';

const InventoryTable = ({ inventory, setInventory }) => {
  const [editItem, setEditItem] = useState(null);
  const [filter, setFilter] = useState('');
  const [sortOrder, setSortOrder] = useState(false); 

  const handleDelete = (id) => {
    setInventory(inventory.filter((item) => item.id !== id));
  };

  const handleEdit = (item) => {
    setEditItem(item);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    setInventory(
      inventory.map((item) => (item.id === editItem.id ? editItem : item))
    );
    setEditItem(null);
  };

  const handleSort = () => {
    if (!sortOrder) {
      const sorted = [...inventory].sort((a, b) => a.quantity - b.quantity);
      setInventory(sorted);
    } else {
      const originalOrder = [...inventory].sort((a, b) => a.id - b.id);
      setInventory(originalOrder);
    }
    setSortOrder(!sortOrder); 
  };

  const filteredInventory = inventory.filter((item) =>
    item.category.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div >
      {editItem && (
        <EditItemForm
          editItem={editItem}
          setEditItem={setEditItem}
          handleUpdate={handleUpdate}
        />
      )}
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Filter by category"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="p-2 border rounded ml-2 bg-white"
        />
        <button
          onClick={handleSort}
          className="bg-green-500 mr-2 cursor-pointer flex justify-center items-center gap-2 text-white py-2 px-2 rounded hover:bg-green-600"
        >
          <FaSort className="block" /> <span className="font-semibold">Sort By Quantity</span>
        </button>
      </div>
      <table className="w-full bg-white shadow-md rounded-md dark:bg-black  dark:text-white">
        <thead>
          <tr className="bg-gray-200 dark:bg-black dark:text-white dark:border-b-1 dark:border-white">
            <th className="p-2">Name</th>
            <th className="p-2">Category</th>
            <th className="p-2">Quantity</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredInventory.map((item) => (
            <tr
              key={item.id}
              className={item.quantity < 10 ? `bg-red-200 dark:bg-gray-500` : ''}
            >
              <td className="p-2 text-center">{item.name}</td>
              <td className="p-2 text-center">{item.category}</td>
              <td className="p-2 text-center">{item.quantity}</td>
              <td className="p-2 text-center">
                <button
                  onClick={() => handleEdit(item)}
                  className="bg-blue-400 cursor-pointer text-white p-1 rounded mr-2 hover:bg-blue-500"
                >
                  <FaRegEdit />
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="bg-red-500 cursor-pointer text-white p-1 rounded hover:bg-red-600"
                >
                  <RiDeleteBin5Line />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryTable;
