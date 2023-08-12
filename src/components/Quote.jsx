import React from 'react';
import { SpeechBubble } from 'react-kawaii'

const Quote = () => {
    return (
        <div name='quote' className='w-full h-screen flex flex-col items-center justify-center'>
            <SpeechBubble size={150} mood="happy" color="#83D1FB" />
        </div>
    )
}

export default Quote;