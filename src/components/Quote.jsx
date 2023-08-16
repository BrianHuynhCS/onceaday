import React, { useState } from 'react';
import { SpeechBubble } from 'react-kawaii'
import generateQuote from '../api/generateQuote';
import { Ring } from '@uiball/loaders'

const Quote = () => {

    const [generatedText, setGeneratedText] = useState('');
    const [isFetching, setIsFetching] = useState(false);

    const handleGeneratedQuote = async () => {
        try {
            setGeneratedText("")
            setIsFetching(true);
            const generatedText = await generateQuote();
            setTimeout(() => {
                setIsFetching(false);
                setGeneratedText(generatedText);
            }, 2000);
        } catch (error) {
            setGeneratedText("An error occurred. Please try again.");
        }
    }

    return (
        <div name='quote' className='w-full h-screen flex flex-col items-center justify-center'>
            <div className={`${isFetching ? 'animate-bounce animate-infinite' : ''} pt-8`}>
            <SpeechBubble size={120} mood="happy" color="#83D1FB" />
            </div>
            <div className='pt-8'>
                <p>Get the quote of the day!</p>
            </div>
            <div className='border-2 border-black rounded-md mt-8 p-4'>
                <button id='generateBtn' onClick={handleGeneratedQuote} disabled={isFetching}>
                    {isFetching ? <Ring /> : 'Generate'}
                </button>
            </div>
            <div className='text-center px-8 pt-8 min-h-[100px]'>
                <p id='resultText'>{generatedText}</p>
            </div>
        </div>
    )
}

export default Quote;
