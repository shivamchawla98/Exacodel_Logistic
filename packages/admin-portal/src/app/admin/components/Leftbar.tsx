import { useState } from 'react';
import {BsFillStickiesFill} from 'react-icons/bs'

const LeftSidebar =  ({activeItem, setActiveItem}: any) => {
    const [showText, setShowText] = useState(true);
    const [isMinimized, setIsMinimized] = useState(false);
    const [showSubMenu, setShowSubMenu] = useState(false);

    const toggleMinimized = () => {
        setIsMinimized(!isMinimized);
        setShowSubMenu(false); // Close the submenu when minimizing
    };

    const toggleActiveItem = (itemName: string) => {
        setActiveItem(itemName);
    };

    const toggleSubMenu = () => {
        setShowSubMenu(!showSubMenu);
    };

    return (
        <div className={`bg-black w-1/5 h-screen p-4 text-white ${isMinimized ? 'w-20' : 'w-full'} transition-all`}>
            <div className="mb-4">
                <div className="flex flex-wrap justify-between items-center my-6">
                    <div className="flex items-center space-x-2">
                        <img
                            src="/bank-logo.png" // Replace with your bank logo
                            alt="Bank Logo"
                            className="w-10 h-10 mb-6"
                        />
                    </div>
                    <button
                        className="bg-sky-500 p-2 rounded-lg text-white hover:bg-sky-400 focus:outline-none transition-transform"
                        onClick={toggleMinimized}
                    >
                        <svg
                            className={`w-4 h-4 transform ${isMinimized ? '-rotate-180' : 'rotate-0'}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMinimized ? "M12 6v6m0 0v6m0-6h6m-6 0H6" : "M9 5l7 7-7 7"} />
                        </svg>
                    </button>
                </div>
            </div>

            <div className='w-full flex justify-start mt-6'>
                <ul>
                    <li className="mb-2">
                        <div className="grid col-span-1 gap-y-2">
                            <div                                           
                             className="flex justify-evenly item-center rouned-md shadow-sm cursor-pointer"
                             onClick={() => {
                                if (isMinimized) {
                                    toggleSubMenu();
                                }
                                toggleActiveItem('Accounts');
                            }}
                             >
                                

                            <BsFillStickiesFill className={`w-6 h-6 mx-3 ${activeItem === 'Accounts' ? 'text-sky-500' : 'text-white'}`} />
                                                     {showText && !isMinimized && (
                                <span
                                    className={`font-semibold ${activeItem === 'Accounts' ? 'text-sky-500' : 'text-white'}`}
                                >
                                    Accounts
                                </span>
                            )}
                            </div>

                            {!isMinimized && (
                                <div className="bg-black text-white p-2 rounded-lg pl-8">
                                    <ul>
                                        <li
                                        className={`cursor-pointer ${activeItem === 'Checking' ? 'text-sky-500' : 'text-white'}`}
                                         onClick={() => toggleActiveItem('Checking')}
                                        >
                                             Checking
                                        </li>
                                        <li
                                        className={`cursor-pointer py-2 ${activeItem === 'Savings' ? 'text-sky-500' : 'text-white'}`}
                                        onClick={() => toggleActiveItem('Savings')}
                                        > 
                                                Savings
                                        </li>
                                    </ul>
                                </div>
                            )}

   
                            {showSubMenu && (
                                <div className="bg-black text-white rounded-lg">
                                    <ul>
                                        <li
                                         className={`cursor-pointer ${activeItem === 'Checking' ? 'text-sky-500' : 'text-white'}`}
                                        onClick={() => toggleActiveItem('Checking')}
                                        >
                                            
                                                Checking
                                            
                                        </li>
                                        <li
                                         className={`cursor-pointer ${activeItem === 'Saving' ? 'text-sky-500' : 'text-white'}`}
                                        onClick={() => toggleActiveItem('Savings')}
                                        >
                                      
                                                Savings
                                            
                                        </li>
                                    </ul>
                                </div>
                            )}

                        </div>
                    </li>
                    {/* Repeat the same pattern for other navigation items */}
                </ul>
            </div>
        </div>
    );
};

export default LeftSidebar;
