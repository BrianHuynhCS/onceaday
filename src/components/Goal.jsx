import React, { useState } from 'react';
import { Planet } from 'react-kawaii';
import generateGoal from '../api/generateGoal';
import { Ring } from '@uiball/loaders'

const Goal = () => {

    const [generatedText, setGeneratedText] = useState('');
    const [isFetching, setIsFetching] = useState(false);

    const handleGeneratedGoal = async () => {
        try {
            setGeneratedText("")
            setIsFetching(true);
            const generatedGoal = await generateGoal();
            setTimeout(() => {
                setIsFetching(false);
                setGeneratedText(generatedGoal);
            }, 2000);
        } catch (error) {
            setIsFetching(false);
            setGeneratedText("An error occurred. Please try again.");
        }
    }

    return (
        <div name='goal' className='w-full h-screen flex flex-col items-center justify-center'>
            <div className={`${isFetching ? 'animate-bounce animate-infinite' : ''} pt-8`}>
                <Planet size={130} mood="blissful" color="#FDA7DC" />
            </div>
            <div className='pt-8'>
                <p>Start your daily goal!</p>
            </div>
            <div className='border-2 border-black rounded-md mt-8 p-4'>
                <button id='generateBtn' onClick={handleGeneratedGoal} disabled={isFetching}>
                    {isFetching ? <Ring /> : 'Generate'}
                </button>
            </div>
            <div className='text-center px-8 pt-8 min-h-[100px]'>
                <p id='resultText'>{generatedText}</p>
            </div>
            
        </div>
    )
}

export default Goal;