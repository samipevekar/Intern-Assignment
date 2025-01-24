import React, { useEffect, useState } from 'react'
import { FaMoon } from "react-icons/fa";
import { MdSunny } from "react-icons/md";

export default function Navbar() {

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') === 'dark' ? 'dark' : 'light';
  });

  useEffect(() => {
   
    document.documentElement.classList.toggle('dark', theme === 'dark');
    
    localStorage.setItem('theme', theme);
  }, [theme]); 



  const toggleTheme = () => {
    setTheme((theme)=>
      (theme === 'dark' ? 'light' : 'dark')
    )
  };




  return (
    <div className='py-3 relative bg-gray-700 dark:bg-black dark:text-white mb-6 flex items-center gap-2'>
        <img 
        className='w-8 h-8 rounded-full ml-6'
        src="https://t3.ftcdn.net/jpg/05/42/85/06/360_F_542850615_1B16r8qsUa5oR8zq4td8wqi911uczewS.jpg" alt="" />
        <h1 className="text-white font-semibold">Inventory Management</h1>      
        <button className='right-6 absolute cursor-pointer' onClick={toggleTheme}>{theme == 'light' ? <FaMoon className='text-white text-2xl ' /> : <MdSunny className='text-white text-2xl' />}</button>
    </div>
  )
}
