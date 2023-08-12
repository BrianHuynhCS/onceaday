import React from 'react';

const Home = () => {
    return (
        <div className='w-full h-screen justify-center items-center flex flex-col'>
                <div className='max-w-[1000px]'>
                    <div className='text-container flex flex-col items-center overflow-hidden h-60'>
                        <div className="animate-fade-up animate-ease-in">
                            
                            <p className='text-3xl'>Do you ever feel like your days are like a routine?</p>
                    
                        </div>
                        <div className="animate-fade-up animate-ease-in animate-delay-1000">
                            
                            <h1 className='text-3xl'> Let's spice things up!</h1>
                    
                        </div>
                        <div className="animate-fade-up animate-ease-in animate-delay-[2000ms]">
                            
                            <p className='text-3xl'>Try a new goal to achieve, a food to try, or a quote to live by once a day.</p>
                    
                        </div>
                    </div>
                </div>



        </div>
    )
};

export default Home;
