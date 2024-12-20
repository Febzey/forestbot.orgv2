"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import ReactTypingEffect from 'react-typing-effect';
import { FaTimes, FaSpinner } from 'react-icons/fa';

const UserOrServerSearch = () => {
    const Router = useRouter();

    const [inputValue, setInputValue] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);


    const handleInputChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();

        // const regex = /^[@/]/;
        // if (!regex.test(inputValue)) {
        //     setErrorMessage('Please use "@" for users and "/" for servers.');
        //     return;
        // }

        // setIsLoading(true);

        // const data = await fetch(`${process.env.NEXT_PUBLIC_FORESTBOT_API_URL}/all-servers`);
        // console.log(data);
        // const servers = await data.json();


        // // server search since the slash / is used
        // if (inputValue.startsWith("/")) {
        //     const cleanedValue = inputValue.replace(/\..*/, '');
        //     const withoutSlash = cleanedValue.substring(1);

        //     if (servers.includes(withoutSlash)) {
        //         Router.push(`/s/${withoutSlash}`)
        //         setIsLoading(false);
        //         return;
        //     }
        // }

        // const cleaned = inputValue.substring(1);


        if (!inputValue) {
            setErrorMessage('Please enter a username.');
            return;
        }

        Router.push(`/u/${inputValue}`);

        setIsLoading(false);    
    }

    return (

        <>
            {
                errorMessage !== '' && searchErrorPopup({ errorMessage, setErrorMessage })
            }
            <form className="flex items-center flex-col justify-center relative mt-[1rem] w-[70%] m-3 lg:w-[28%] mx-auto shadow-2xl shadow-zinc-800">
                <label className="mr-auto text-white/80 text-sm py-2">Search a user! <span className="text-white/40 text-xs"> (server searching available soon!)</span></label>
                <div className="flex items-center flex-row justify-center w-full">
                    {inputValue === '' && (
                        <div className="typing-placeholder absolute left-3 text-white/80">
                            <ReactTypingEffect text={['matcha255', 'febzey_', 'RA1NING', 'ilidrael', 'binchita', 'PeanutOfEG']} speed={100} eraseSpeed={120} eraseDelay={1400} />
                        </div>
                    )}
                    <input
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                        className="bg-zinc-500/70 text-white border-2 border-transparent rounded rounded-r-none p-4 w-full"
                    />
                    <button onClick={(e) => handleSubmit(e)} className="bg-emerald-400/90 text-white border-2 border-emerald-400/90 rounded rounded-l-none p-4 w-1/4 font-Protest hover:bg-emerald-600 hover:border-emerald-600 duration-200">
                         {
                            isLoading ? <FaSpinner className="animate-spin mx-auto text-center text-2xl" /> : "Search"
                         }
                    </button>
                </div>
            </form>
        </>
    );
};

export default UserOrServerSearch;



const searchErrorPopup = ({ errorMessage, setErrorMessage }: { errorMessage: string, setErrorMessage: React.Dispatch<React.SetStateAction<string>> }) => {
    return (
        <div className="bg-zinc-900 backdrop-blur-sm flex  text-white p-2 rounded-md absolute top-0 left-0 right-0 bottom-0 z-50">
            <div className="w-full  mx-auto my-auto  lg:w-1/3 relative flex items-center  justify-center">

                <button onClick={() => { setErrorMessage("") }} className="right-0 top-0 -translate-y-5 translate-x-5 duration-200 hover:bg-zinc-800 text-3xl absolute bg-zinc-600 rounded-full p-3">
                    <FaTimes />
                </button>

                <div className="h-[40vh] items-center justify-center w-full bg-zinc-700/80 p-4 flex gap-4 flex-col">
                    <h1 className="font-Protest text-red-400 text-xl">Error:</h1>
                    <p>{errorMessage}</p>
                </div>
            </div>

        </div>
    )
}