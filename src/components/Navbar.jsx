import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    return (
        <div className='fixed w-full h-[200px] flex justify-center items-center px-4'>

            <ul className='text-2xl flex gap-14'>
                <li>
                    <Link to="/goal" className={location.pathname === "/goal" ? 'border-2 border-black p-3' : ''}>Goal</Link>
                </li>
                <li>
                    <Link to="/food" className={location.pathname === "/food" ? 'border-2 border-black p-3' : ''} >Food</Link>
                </li>
                <li>
                    <Link to="/quote" className={location.pathname === "/quote" ? 'border-2 border-black p-3' : ''}>Quote</Link>
                </li>                
            </ul>

        </div>
    )
};

export default Navbar;