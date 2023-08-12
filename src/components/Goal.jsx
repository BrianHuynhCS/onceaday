import React from 'react';
import { Planet } from 'react-kawaii';

const Goal = () => {
    return (
        <div name='goal' className='w-full h-screen flex flex-col items-center justify-center'>
            <Planet size={150} mood="blissful" color="#FDA7DC" />
        </div>
    )
}

export default Goal;