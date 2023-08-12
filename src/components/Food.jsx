import React from 'react';
import { Mug } from 'react-kawaii';

const Food = () => {
    return (
        <div name='food' className='w-full h-screen flex flex-col items-center justify-center'>
            <Mug size={150} mood="happy" color="#A6E191" />
        </div>
    )
}

export default Food;