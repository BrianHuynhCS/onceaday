import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='fixed w-full h-[300px] flex justify-center items-center px-4'>
            <ul className='text-2xl flex gap-28'>
                <li>
                    <Link to="/goal">Goal</Link>
                </li>
                <li>
                    <Link to="/food">Food</Link>
                </li>
                <li>
                    <Link to="/quote">Quote</Link>
                </li>                
            </ul>

        </div>
    )
};

export default Navbar;