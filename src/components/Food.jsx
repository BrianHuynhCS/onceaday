import React, { useState } from 'react';
import { Mug } from 'react-kawaii';
import generateFood from '../api/generateFood';
import { Ring } from '@uiball/loaders'

const Food = () => {

    const [generatedText, setGeneratedText] = useState('');
    const [isFetching, setIsFetching] = useState(false);

    const handleGeneratedFood = async () => {
        try {
            setGeneratedText("")
            setIsFetching(true);
            const generatedText = await generateFood();
            setTimeout(() => {
                setIsFetching(false);
                setGeneratedText(generatedText);
            }, 2000);
        } catch (error) {
            setGeneratedText("An error occurred. Please try again.");
        }
    }

    return (
        <div name='' className='w-full h-screen flex flex-col items-center justify-center'>
            <div className={`${isFetching ? 'animate-bounce animate-infinite' : ''} pt-8`}>
                <Mug size={110} mood="happy" color="#A6E191" />
            </div>
            <div className='pt-8'>
                <p>Figure out what to eat!</p>
            </div>
            <div className='border-2 border-black rounded-md mt-8 p-4'>
                <button id='generateBtn' onClick={handleGeneratedFood} disabled={isFetching}>
                    {isFetching ? <Ring /> : 'Generate'}
                </button>
            </div>
            <div className='text-center px-8 pt-8 min-h-[100px]'>
                <p id='resultText'>{generatedText}</p>
            </div>
        </div>
    )
}

export default Food;
