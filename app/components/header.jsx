import React, { useState, Fragment } from 'react'
import { Link } from 'react-router-dom';
import {useLocation } from 'react-router-dom';
import {useEffect } from 'react';
import logo from "../img/logo2.jpg"
export default function (){
  
  const location = useLocation();
  const [selectedTab, setSelectedTab] = useState('Home');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };
  useEffect(() => {
    // Get the path from the current location and set the corresponding tab as selected
    switch (location.pathname) {
      case '/':
        setSelectedTab('Home');
        break;
      case '/hospitality':
        setSelectedTab('Hospitality');
        break;
      case '/training':
        setSelectedTab('Training');
        break;
      case '/consultation':
          setSelectedTab('Consultation');
          break;
      case '/blog':
        setSelectedTab('Blog');
        break;
      case '/aboutus':
        setSelectedTab('About Us');
        break;
      default:
        setSelectedTab('Home');
        break;
    }
  }, [location]);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };
  
    return(

        <div className="w-full 4xl:container 2xl:mx-auto ">
      <div style={{ backgroundColor: 'transparent' }} className="">

          <nav className="flex justify-between">
          <div className="flex items-center justify-center flex-auto">
  <img
    className="cursor-pointer"
    src={logo}// Replace with the actual path to your logo
    alt="Logo"
    width="70%"
    height="58"
  />
</div>
            {/* For medium and plus sized devices */}
            <ul className="hidden md:flex flex justify-end space-x-5">
            <Link to="/" onClick={() => handleTabClick('Services')}>
              <li
                onClick={() => handleTabClick('Home')}
                className={`focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                  selectedTab === 'Home'
                  ? 'text-red bg-transparent'
                  : 'text-red-600 '
              } cursor-pointer px-3 py-2.5 font-normal text-s leading-3  rounded`}
              >
                Home

              </li>
              </Link>
              <div className="relative inline-block text-left">

    <li
      onClick={() => handleTabClick('Services')}
      className={`focus:outline-none focus:ring-2 focus:ring-offset-2 ${
        selectedTab === 'Services'
          ? 'text-red bg-transparent'
          : 'text-red-600 '
      } cursor-pointer px-3 py-2.5 font-normal text-s leading-3  rounded`}
    >
      Services
    </li>

 <div className={`${selectedTab === 'Services' ? 'block' : 'hidden'} origin-top-left absolute left-0 mt-8 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5`}>
    <ul className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
      <li>
        <Link to="/simba" onClick={() => handleTabClick('Simba')}>
          <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">
            Simba
          </button>
        </Link>
      </li>
      <li>
        <Link to="/chui" onClick={() => handleTabClick('Chui')}>
          <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">
            Chui
            
          </button>
        </Link>
      </li>
      <li>
        <Link to="/flamingo" onClick={() => handleTabClick('Flamingo')}>
          <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">
            Flamingo
          </button>
        </Link>
      </li>
      <li>
        <Link to="/ndovu" onClick={() => handleTabClick('Ndovu')}>
          <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">
            Ndovu
          </button>
        </Link>
      </li>
    </ul>
 </div>
</div>

              
              <Link to="/blog" onClick={() => handleTabClick('Services')}>
              <li
                onClick={() => handleTabClick('Blog')}
                className={`focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                  selectedTab === 'Blog'
                  ? 'text-red bg-transparent'
                  : 'text-red-600 '
              } cursor-pointer px-3 py-2.5 font-normal text-s leading-3  rounded`}
              >
                Blog
                
              </li>
              </Link>
              <Link to="/aboutus" onClick={() => handleTabClick('Services')}>
              <li
                onClick={() => handleTabClick('About Us')}
                className={`focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                  selectedTab === 'About Us'
                  ? 'text-red bg-transparent'
                  : 'text-red-600 '
              } cursor-pointer px-3 py-2.5 font-normal text-s leading-3  rounded`}
              >
                About Us
                
              </li>
              </Link>
              <Link to="/leadership" onClick={() => handleTabClick('Services')}>
              <li
                onClick={() => handleTabClick('Leadership')}
                className={`focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                  selectedTab === 'Leadership'
                  ? 'text-red bg-transparent'
                  : 'text-red-600 '
              } cursor-pointer px-3 py-2.5 font-normal text-s leading-3  rounded`}
              >
                Leadership
                
              </li>
              </Link>
            </ul>
          </nav>
          {/* for smaller devices */}
          <div className="block md:hidden w-full mt-5">
            <div
              onClick={toggleDropdown}
              className="cursor-pointer px-4 py-3 text-white bg-black rounded flex justify-between items-center w-full"
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
                <Link to="/" onClick={() => handleTabClick('Services')}>
              <li
                onClick={() => handleTabClick('Home')}
                className={`focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                  selectedTab === 'Home'
                    ? 'text-white bg-black'
                    : 'text-gray-600 border border-white bg-gray-50'
                } cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`}
              >
                Home

              </li>
              </Link>
              
              <li
                onClick={() => handleTabClick('Services')}
                className={`focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                  selectedTab === 'Hospitality'
                    ? 'text-white bg-black'
                    : 'text-gray-600 border border-white bg-gray-50'
                } cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`}
              >
               Services
              
              </li>
              <div className={`${selectedTab === 'Hospitality' ? 'block' : 'hidden'} origin-top-left absolute left-0 mt-8 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5`}>
    <ul className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
      <li>
        <Link to="/simba" onClick={() => handleTabClick('Simba')}>
          <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">
            Simba
          </button>
        </Link>
      </li>
      <li>
        <Link to="/chui" onClick={() => handleTabClick('Chui')}>
          <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">
            Chui
          </button>
        </Link>
      </li>
      <li>
        <Link to="/flamingo" onClick={() => handleTabClick('Flamingo')}>
          <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">
            Flamingo
          </button>
        </Link>
      </li>
      <li>
        <Link to="/ndovu" onClick={() => handleTabClick('Ndovu')}>
          <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">
            Ndovu
          </button>
        </Link>
      </li>
    </ul>
 </div>
              
              <Link to="/blog" onClick={() => handleTabClick('Services')}>
              <li
                onClick={() => handleTabClick('Blog')}
                className={`focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                  selectedTab === 'Blog'
                    ? 'text-white bg-black'
                    : 'text-gray-600 border border-white bg-gray-50'
                } cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`}
              >
                Blog
                
              </li>
              </Link>
              <Link to="/aboutus" onClick={() => handleTabClick('Services')}>
              <li
                onClick={() => handleTabClick('About Us')}
                className={`focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                  selectedTab === 'About Us'
                    ? 'text-white bg-black'
                    : 'text-gray-600 border border-white bg-gray-50'
                } cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`}
              >
                About Us
                
              </li>
              </Link>
              <Link to="/leadership" onClick={() => handleTabClick('Services')}>
              <li
                onClick={() => handleTabClick('Leadership')}
                className={`focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                  selectedTab === 'Leadership'
                    ? 'text-white bg-black'
                    : 'text-gray-600 border border-white bg-gray-50'
                } cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`}
              >
                Leadership
                
              </li>
              </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
}