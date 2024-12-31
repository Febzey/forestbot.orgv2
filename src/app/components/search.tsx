"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
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
        setIsLoading(true);

        //make a few 10 sec timeout
        await new Promise(r => setTimeout(r, 10000));

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
            <form className="flex items-center justify-center flex-col lg:mt-0 mt-12 w-full max-w-md  border-green-300 border-[1px] lg:mr-[11%] rounded-xl shadow-lg p-8 space-y-6">
                <div className="text-center text-white">
                    <h2 className="text-3xl  font-Protest">Search The Database</h2>
                    <p className="text-sm text-white/70">Search for a server or a user.</p>
                </div>

                <div className="relative w-full">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                        className="w-full p-5 rounded-lg bg-white/10 text-white placeholder-white/60 border-green-300 border-[2px] focus:outline-none focus:ring-2 focus:ring-emerald-400 transition duration-300 ease-in-out"
                        placeholder="Search for a user or server..."
                    />
                </div>

                <div className="w-full">
                    <button
                        onClick={(e) => handleSubmit(e)}
                        className="w-full py-3 rounded-lg  bg-gradient-to-br from-green-500 to-teal-500 hover:bg-green-600 text-white font-semibold text-lg flex justify-center items-center  focus:outline-none transition duration-300 ease-in-out"
                    >
                        {isLoading ? (
                            <FaSpinner className="animate-spin text-xl text-white" />
                        ) : (
                            "Search"
                        )}
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