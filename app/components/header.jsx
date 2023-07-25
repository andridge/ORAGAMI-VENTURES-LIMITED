import React, { useState } from 'react';
export default function (){
  const [selectedTab, setSelectedTab] = useState('Collections');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };
    return(
        <div className="2xl:container 2xl:mx-auto">
        <div className="bg-white rounded shadow-lg py-5 px-7">
          <nav className="flex justify-between">
            <div className="flex items-center space-x-3 lg:pr-16 pr-6">
              <svg
                className="cursor-pointer"
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* SVG path content */}
              </svg>
              <h2 className="font-normal text-2xl leading-6 text-gray-800">
                OvonRueden
              </h2>
            </div>
            {/* For medium and plus sized devices */}
            <ul className="hidden md:flex flex-auto space-x-2">
              <li
                onClick={() => handleTabClick('Collections')}
                className={`focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                  selectedTab === 'Collections'
                    ? 'text-white bg-indigo-600'
                    : 'text-gray-600 border border-white bg-gray-50'
                } cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`}
              >
                Collections
              </li>
              <li
                onClick={() => handleTabClick('Arts')}
                className={`focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                  selectedTab === 'Arts'
                    ? 'text-white bg-indigo-600'
                    : 'text-gray-600 border border-white bg-gray-50'
                } cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`}
              >
                Arts
              </li>
              <li
                onClick={() => handleTabClick('Space')}
                className={`focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                  selectedTab === 'Space'
                    ? 'text-white bg-indigo-600'
                    : 'text-gray-600 border border-white bg-gray-50'
                } cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`}
              >
                Space
              </li>
              <li
                onClick={() => handleTabClick('Game')}
                className={`focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                  selectedTab === 'Game'
                    ? 'text-white bg-indigo-600'
                    : 'text-gray-600 border border-white bg-gray-50'
                } cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`}
              >
                Game
              </li>
              <li
                onClick={() => handleTabClick('Utility')}
                className={`focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                  selectedTab === 'Utility'
                    ? 'text-white bg-indigo-600'
                    : 'text-gray-600 border border-white bg-gray-50'
                } cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`}
              >
                Utility
              </li>
              <li
                onClick={() => handleTabClick('Cards')}
                className={`focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                  selectedTab === 'Cards'
                    ? 'text-white bg-indigo-600'
                    : 'text-gray-600 border border-white bg-gray-50'
                } cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`}
              >
                Cards
              </li>
            </ul>
            <div className="flex space-x-5 justify-center items-center pl-2">
              <div
                onClick={toggleDropdown}
                className="relative cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* SVG path message content icon*/}
                  <path
                  d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z"
                  stroke="#1F2937"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21"
                  stroke="#1F2937"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                </svg>
                {/* Animated ping and shadow elements */}
              </div>
              <svg
                className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* SVG path bell content icon */}
                <path
                  d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z"
                  stroke="#1F2937"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21"
                  stroke="#1F2937"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </nav>
          {/* for smaller devices */}
          <div className="block md:hidden w-full mt-5">
            <div
              onClick={toggleDropdown}
              className="cursor-pointer px-4 py-3 text-white bg-indigo-600 rounded flex justify-between items-center w-full"
            >
              <div className="flex space-x-2">
                <span
                  id="s1"
                  className={`font-semibold text-sm leading-3 ${
                    isDropdownOpen ? '' : 'hidden'
                  }`}
                >
                  Selected: {selectedTab}
                </span>
                <p
                  id="textClicked"
                  className={`font-normal text-sm leading-3 focus:outline-none hover:bg-gray-800 duration-100 cursor-pointer ${
                    isDropdownOpen ? 'hidden' : ''
                  }`}
                >
                  {selectedTab}
                </p>
              </div>
              <svg
                id="ArrowSVG"
                className={`transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* SVG path content */}
              </svg>
            </div>
            <div className={`relative ${isDropdownOpen ? '' : 'hidden'}`}>
              <ul
                id="list"
                className="font-normal text-base leading-4 absolute top-2 w-full rounded shadow-md"
              >
                <li
                  onClick={() => handleTabClick('Arts')}
                  className={`px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal ${
                    selectedTab === 'Arts' ? 'text-white bg-indigo-600' : ''
                  }`}
                >
                  Arts
                </li>
                <li
                  onClick={() => handleTabClick('Space')}
                  className={`px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal ${
                    selectedTab === 'Space' ? 'text-white bg-indigo-600' : ''
                  }`}
                >
                  Space
                </li>
                <li
                  onClick={() => handleTabClick('Game')}
                  className={`px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal ${
                    selectedTab === 'Game' ? 'text-white bg-indigo-600' : ''
                  }`}
                >
                  Game
                </li>
                <li
                  onClick={() => handleTabClick('Utility')}
                  className={`px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal ${
                    selectedTab === 'Utility' ? 'text-white bg-indigo-600' : ''
                  }`}
                >
                  Utility
                </li>
                <li
                  onClick={() => handleTabClick('Cards')}
                  className={`px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal ${
                    selectedTab === 'Cards' ? 'text-white bg-indigo-600' : ''
                  }`}
                >
                  Cards
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
}