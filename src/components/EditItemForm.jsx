import React from 'react';

const EditItemForm = ({ editItem, setEditItem, handleUpdate }) => {
  return (
    <form onSubmit={handleUpdate} className="mt-4 mb-4 mx-2 py-4  shadow-md flex flex-col rounded-sm p-2 bg-white border-black">
      <h3 className="mb-2 font-bold text-2xl text-center">Edit Item</h3>
      <div className="flex justify-around items-center gap-2">
        <input
          type="text"
          value={editItem.name}
          onChange={(e) => setEditItem({ ...editItem, name: e.target.value })}
          className="p-2 border rounded w-full"
        />
        <input
          type="text"
          value={editItem.category}
          onChange={(e) =>
            setEditItem({ ...editItem, category: e.target.value })
          }
          className="p-2 border rounded w-full"
        />
        <input
          type="number"
          value={editItem.quantity}
          onChange={(e) =>
            setEditItem({ ...editItem, quantity: Number(e.target.value) })
          }
          className="p-2 border rounded w-full"
        />
      </div>
      <button
        type="submit"
        className="mt-4 m-auto cursor-pointer dark:bg-black bg-gray-700 text-white py-2 px-4 rounded hover:bg-gray-900"
      >
        Update
      </button>
    </form>
  );
};

export default EditItemForm;
