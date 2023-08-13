import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({ handleGetStartedClick }) => {
    return (
        <div name='home' className='h-screen justify-center items-center flex flex-col'>
                <div className='max-w-[1000px] text-center'>
                        <div className="animate-fade-up animate-ease-in">
                            
                            <p className='text-3xl'>Do you ever feel like your days are like a routine?</p>
                    
                        </div>
                        <div className="animate-fade-up animate-ease-in animate-delay-1000 py-4">
                            
                            <h1 className='text-3xl'> Let's spice things up!</h1>
                    
                        </div>
                        <div className="animate-fade-up animate-ease-in animate-delay-[2000ms]">
                            
                            <p className='text-3xl'>Achieve a new goal, a food to try, or a quote to live by once a day.</p>
                    
                        </div>

                        <div>
                            <button onClick={handleGetStartedClick} className='animate-fade-up animate-ease-in animate-delay-[3000ms] rounded-md border-2 border-black px-6 py-3 my-8'>
                                <Link to='/goal'>
                                    Get Started
                                </Link>
                            </button>
                        </div>
                    
                </div>



        </div>
    )
};

export default Home;
