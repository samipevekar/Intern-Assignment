import React, { useState, useEffect } from 'react';
import AddItemForm from './components/AddItemForm';
import InventoryTable from './components/InventoryTable';
import Navbar from './components/Navbar';


const App = () => {
  const [inventory, setInventory] = useState(() => {
    const savedInventory = localStorage.getItem('inventory');
    return savedInventory ? JSON.parse(savedInventory) : [];
  });

  useEffect(() => {
    localStorage.setItem('inventory', JSON.stringify(inventory));
  }, [inventory]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-[#0f172a] ">
      <Navbar/>
      <AddItemForm inventory={inventory} setInventory={setInventory} />
      <InventoryTable inventory={inventory} setInventory={setInventory} />
    </div>
  );
};

export default App;
